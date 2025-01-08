import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header"
import HighestRatedGame from "../components/HighestRatedGame";
import UpcomingGame from "../components/UpcomingGame";
import MostPlayedGames from "../components/MostPlayedGames";
import { FiMoon, FiSun } from "react-icons/fi";


const Home = () => {
    const reviews = useLoaderData();
    const topRatedGames = reviews
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 6);

    const upcomingGames = [
        { title: "Underworld Gang Wars (UGW)", releaseDate: "2024-12-15", genre: "Action", description: "Underworld Gang Wars (UGW) is an action-packed multiplayer game where players join rival gangs and compete for dominance in a gritty urban environment. Players engage in intense battles, strategizing to outsmart opponents, capture territories, and complete high-stakes missions.", image: "https://i.ytimg.com/vi/xHBer6qnU3Q/maxresdefault.jpg" },
        { title: "Seven Deadly Sins Origin", releaseDate: "2024-12-20", genre: "RPG", description: "Seven Deadly Sins Origin is an open-world action RPG based on the popular anime *The Seven Deadly Sins*. Players explore a vibrant, expansive world filled with dynamic combat, puzzles, and the ability to switch between beloved characters. The game combines an engaging storyline with stunning visuals and multiplayer elements.", image: "https://www.gematsu.com/wp-content/uploads/2023/11/Seven-Deadly-Sins-Origin-PV_11-14-23-1.jpg" },
        { title: "The Division Resurgence", releaseDate: "2025-01-10", genre: "RPG", description: "The Division Resurgence is a free-to-play third-person RPG shooter set in a detailed open world. Experience a fresh storyline with intense PvE co-op and tactical gameplay. Build and customize your agent to fight against various factions in the post-pandemic crisis.", image: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/5Y1ZEqNLEjGoJti05MF071/37250fd3c1591ef80d6b3037343912d7/Immagine1.jpg" },
    ];
    const mostPlayedGames = [
        { title: "Apex Legends", releaseDate: "February 4, 2019", genre: "Strategy", description: "Apex Legends is a free-to-play battle royale game set in the Titanfall universe, featuring squad-based gameplay. Players choose from a roster of unique Legends, each with their own abilities and playstyles. The game combines strategic team coordination, fast-paced combat, and dynamic environmental changes for intense multiplayer action.", image: "https://ineqe.com/wp-content/uploads/2022/05/apex-media-news-saviors-patch-keyart.jpg.adapt_.crop16x9.431p.jpg" },
        { title: "Valorant", releaseDate: "June 2, 2020", genre: "Strategy", description: "Valorant is a tactical first-person shooter where players select unique agents, each with special abilities, to compete in 5v5 team-based matches. The objective is to plant or defuse bombs, or eliminate the opposing team. Strategic gameplay, precise gunplay, and teamwork are essential to victory.", image: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/8f0df8efd5b986039cd37a4d5f3bf31b815d0c54-3840x2160.jpg" },
        { title: "Call of Duty", releaseDate: "October 29, 2003", genre: "Action", description: "*Call of Duty* is a popular first-person shooter video game series that focuses on military combat. The franchise features both single-player campaigns and multiplayer modes, often set during historical events or modern warfare scenarios. Known for its intense action, strategic gameplay, and cinematic experiences, it has become a staple in the gaming community.", image: "https://wallpapers.com/images/featured/call-of-duty-pictures-7lrqnchbx478ucgg.jpg" },
    ];

    return (
        <div className="">
            <header>
                <div className="py-8 sticky top-0 left-0 z-50 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur shadow">
                    <Header></Header>
                </div>
                <div className="w-11/12 mx-auto">
                    <Banner></Banner>
                </div>
            </header>
            <main className="py-10">
                <div className="py-10">
                    <h1 className="text-center font-bold text-2xl">Highest Rated Games</h1>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 w-11/12 mx-auto">
                    {
                        topRatedGames.map(review => <HighestRatedGame key={review._id} review={review}></HighestRatedGame>)
                    }
                </div>
                <div className="pb-10 pt-20">
                    <h1 className="text-center font-bold text-2xl">Most Played Games In This Year</h1>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 w-11/12 mx-auto">
                    {mostPlayedGames.map((mostGame, index) => (
                        <MostPlayedGames key={index} game={mostGame}></MostPlayedGames>
                    ))}
                </div>
                <div className="pb-10 pt-20">
                    <h1 className="text-center font-bold text-2xl">Upcoming Games</h1>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 w-11/12 mx-auto">
                    {upcomingGames.map((game, index) => (
                        <UpcomingGame key={index} game={game}></UpcomingGame>
                    ))}
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;