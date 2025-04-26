import express from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 5000;

// 1. Get Access Token
async function getAccessToken() {
  const response = await axios.post(
    process.env.MOMO_TOKEN_URL!,
    {},
    {
      headers: {
        'Ocp-Apim-Subscription-Key': process.env.MOMO_SUBSCRIPTION_KEY!,
        Authorization: 'Basic ' + Buffer.from(`${process.env.MOMO_USER_ID}:${process.env.MOMO_API_KEY}`).toString('base64'),
      },
    }
  );
  return response.data.access_token;
}

// 2. Request to Pay
app.post('/api/pay', async (req, res) => {
  const { phoneNumber, amount } = req.body;

  const externalId = uuidv4(); // Unique ID for transaction

  try {
    const token = await getAccessToken();

    const response = await axios.post(
      `${process.env.MOMO_BASE_URL}/requesttopay`,
      {
        amount: amount.toString(),
        currency: 'UGX', // Use 'UGX' when you go to live environment
        externalId: externalId,
        payer: {
          partyIdType: 'MSISDN',
          partyId: phoneNumber, // e.g., 256771234567
        },
        payerMessage: 'Donation Payment',
        payeeNote: 'Thank you!',
      },
      {
        headers: {
          'X-Reference-Id': externalId,
          'X-Target-Environment': process.env.MOMO_TARGET_ENVIRONMENT!,
          'Ocp-Apim-Subscription-Key': process.env.MOMO_SUBSCRIPTION_KEY!,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.json({ success: true, status: response.status, message: 'Payment request sent!' });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Payment error:', error.response?.data || error.message);
    } else {
      console.error('Payment error:', error);
    }
    res.status(500).json({ success: false, error: (error as any).response?.data || (error as any).message });
  }
});

// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
