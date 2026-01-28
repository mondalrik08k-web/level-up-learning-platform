const Leaderboard = () => {
  const players = [
    { id: 1, name: 'Chandril ', score: 2980, stars: 5, medal: null},
    { id: 2, name: 'Shubhra ', score: 2756, stars: 5, medal: null },
    { id: 2, name: 'Ankur ', score: 2721, stars: 4, medal: null },
    { id: 3, name: 'Sayani ', score: 2579, stars: 4, medal: null },
    { id: 4, name: 'Farhan ', score: 1874, stars: 3, medal: null },
    { id: 6, name: 'Rik ', score: 1756, stars: 2, medal: null },
    
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-900 to-teal-500 p-10">
      <div className="bg-black-800 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-10">LEADERBOARD</h2>
        <div className="bg-blue-900 rounded-lg p-6">
          {players.map((player, index) => (
            <div
              key={player.id}
              className="flex items-center justify-between bg-blue-700 p-3 mb-4 rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center text-white">
                  {player.medal ? (
                    <img
                      src={`/${player.medal}.png`}
                      alt={`${player.medal} medal`}
                      className="w-10 h-10"
                    />
                  ) : (
                    <span>{index + 1}</span>
                  )}
                </div>
                <div className="ml-6">
                  <p className="text-white font-semibold">{player.name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-yellow-400">
                  {'★'.repeat(player.stars) + '☆'.repeat(5 - player.stars)}
                </div>
                <p className="text-white ml-6">{player.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
