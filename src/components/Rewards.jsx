const rewardsData = [
  { id: 1, icon: '🥇', amount: '3000', description: 'Coins' },
  { id: 2, icon: '👤', amount: '3', description: 'Character Shards' },
  { id: 3, icon: '📚', amount: '2', description: 'Books' },
  { id: 4, icon: '🔑', amount: '1', description: 'Key' },
  { id: 5, icon: '🔑', amount: '1', description: 'Key' },
  { id: 6, icon: '🔑', amount: '1', description: 'Key' },
  { id: 7, icon: '🎁', amount: '1', description: 'Gift' },
  { id: 8, icon: '🎁', amount: '1', description: 'Gift' }, 
];

const Rewards = () => {
  return (
    <div className="min-h-screen bg-gray-800 p-10 flex flex-col items-center justify-center text-white">
      <h1 className="text-5xl font-bold mb-8">Daily Reward</h1> {/* Increased font size */}
      <div className="w-full max-w-6xl bg-gray-900 p-10 rounded-lg shadow-lg"> {/* Increased width, height, and padding */}
        <div className="grid grid-cols-4 gap-8"> {/* Adjusted grid columns and gap for larger items */}
          {rewardsData.map((reward) => (
            <div key={reward.id} className="bg-gray-700 p-8 rounded-lg flex flex-col items-center"> {/* Increased padding */}
              <div className="text-6xl">{reward.icon}</div> {/* Increased icon size */}
              <p className="mt-4 text-2xl font-semibold">{reward.amount}</p> {/* Increased amount font size */}
              <p className="text-lg mt-2">{reward.description}</p> {/* Increased description font size */}
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-8 py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200 text-xl">OK</button> {/* Increased button size */}
        </div>
      </div>
    </div>
  );
};

export default Rewards;



