import useGames from "../hooks/useGames";

function GameGrid() {
  const {memes,error} = useGames()

  return (
    <div className="p-4">
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {memes.map((meme) => (
          <div key={meme.id} className="bg-gray-800 rounded-lg p-2 shadow-lg">
            <img src={meme.images.fixed_height.url} alt={meme.title} className="w-full h-auto rounded-md" />
            <p className="text-white text-sm mt-2">{meme.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameGrid;
