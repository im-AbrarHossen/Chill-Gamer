import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const GameWatchList = () => {
    const [watchlists, setwatchlists] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    useEffect(() => {
        fetch('https://chill-gamer-server-side.vercel.app/watchlist')
            .then((res) => res.json())
            .then(data => {
                const filteredData = data.filter(game => game.userEmail === userEmail);
                setwatchlists(filteredData);
            })
            .catch(error => console.error('Error:', error));
    }, [userEmail]);
    return (
        <div>
            <header className="py-10">
                <Header></Header>
            </header>
            <main className="py-10">
                <div className="w-11/12 mx-auto my-10 overflow-x-auto">
                    <h1 className="text-3xl font-bold my-10 text-center">Game Watchlist</h1>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Game Title</th>
                                <th className="border border-gray-300 px-4 py-2">Name</th>
                                <th className="border border-gray-300 px-4 py-2">Picture</th>
                                <th className="border border-gray-300 px-4 py-2">Watchilst Added Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchlists.map((watchlist) => (
                                <tr key={watchlist._id}>
                                    <td className="border border-gray-300 lg:px-4 py-2 text-center">{watchlist.gameTitle}</td>
                                    <td className="border border-gray-300 lg:px-4 py-2 text-center">{watchlist.userName}</td>
                                    <td className="border border-gray-300 lg:px-4 px-1 py-2 flex items-center justify-center"><img className="lg:w-[400px] w-[200px] lg:h-[200px] h-[70px]" src={watchlist.gameCover} alt="" /></td>
                                    <td className="border border-gray-300 lg:px-4 py-2 text-center">{watchlist.addedAt}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default GameWatchList;