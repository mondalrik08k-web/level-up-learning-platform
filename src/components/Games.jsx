import { Link } from "react-router-dom";

const gamesData = [
  {
    id: 1,
    name: "Shuffel-Mind",
    image: "https://mario.wiki.gallery/images/9/90/MarioMiniSM64DS.png",
    path: "/shuffelgame",
  },
  {
    id: 2,
    name: "Tic-Tac-Toe",
    image: "https://img.gamedistribution.com/abebecfa89b646448c834963627b325d-512x512.jpeg",
    path: "/tictactoe",
  },
  {
    id: 3,
    name: "Word-Games",
    image: "https://miro.medium.com/v2/resize:fit:1024/0*fiOrCOKMKzoQcfqM.jpg",
    path: "/wordgames",
  },
  {
    id: 4,
    name: "Puzzel !",
    image: "https://i.ytimg.com/vi/M4fVCUzXIA8/maxresdefault.jpg",
    path: "/puzzle",
  },
  {
    id: 5,
    name: "Math-Quiz",
    image: "https://mathquiz.io/img/og-img.png",
    path: "/mathquiz",
  },
  {
    id: 6,
    name: "Sudoku",
    image: "https://www.learn-sudoku.com/images/uniq-rect1.gif",
    path: "/soduku",
  },
  {
    id: 7,
    name: "Typo-Meter",
    image: "https://th.bing.com/th/id/OIP.MBpb0URF7XN8cu8m_pR8TQAAAA?rs=1&pid=ImgDetMain",
    path: "/typing",
  },
];

const Games = () => {
  return (
    <div className="flex justify-center mt-10 bg-gradient-to-b from-gray-800 to-black min-h-screen py-10">
      {/* Applied grey to black gradient background */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gamesData.map((game) => (
          <div
            key={game.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-gray-900">{game.name}</h2>
              {/* Changed text color to gray-900 for better visibility */}
              <Link to={game.path}>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                  Play
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;
