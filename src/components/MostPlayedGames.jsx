const MostPlayedGames = ({ game }) => {
    return (
        <div className="border rounded-xl shadow-xl">
            <img className="w-full h-[200px] rounded-t-xl" src={game.image} alt="" />
            <div className="p-3">
                <h2 className="font-bold text-xl">{game.title}</h2>
                <div className='flex justify-between items-center my-3'>
                    <p className="font-medium text-base">Release Date: {game.releaseDate}</p>
                    <p className="font-medium text-base">Genre: {game.genre}</p>
                </div>
                <p><span className="font-medium">Details:</span> {game.description}</p>
            </div>
        </div>
    );
};

export default MostPlayedGames;