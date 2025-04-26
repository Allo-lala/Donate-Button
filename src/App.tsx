import DonateButton from './components/DonateButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">Support Our Mission</h1>
          <p className="text-purple-100 max-w-2xl">
            Your donation helps us continue our important work. Every contribution, makes a difference.
          </p>
        </div>
        
        <div className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Why Donate?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Your contributions help us:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  Support our ongoing projects and initiatives
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  Expand our reach to help more people
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-green-500">✓</span>
                  Ensure our long-term sustainability
                </li>
              </ul>
            </div>
            
            <div className="space-y-6 flex flex-col items-center justify-center">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Make a Difference Today</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Your donation is secure and helps support our mission.
                </p>
                <DonateButton />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          100% secure payments. All donations to YHAY are tax-deductible.
        </p>
      </div>
    </div>
  );
}

export default App;