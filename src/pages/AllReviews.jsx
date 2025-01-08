import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useState } from "react";
import Footer from "../components/Footer";
import gamingAnimation from "../assets/gaming-animation.json";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";


const AllReviews = () => {
    const { user } = useContext(AuthContext);
    const reviews = useLoaderData();

    const [sortType, setSortType] = useState(null); // "rating" or "year"
    const [sortOrder, setSortOrder] = useState("ascending"); // "asc" or "desc"
    const [genreFilter, setGenreFilter] = useState("");

    const handleSort = (type, order) => {
        setSortType(type);
        setSortOrder(order);
    };

    const handleFilter = (genre) => {
        setGenreFilter(genre);
    };

    const processedReviews = reviews
        .filter(review => (genreFilter ? review.genre === genreFilter : true)) // Apply genre filter
        .sort((a, b) => {
            if (!sortType) return 0; // No sorting if sortType is null
            const valueA = sortType === "rating" ? a.rating : a.year;
            const valueB = sortType === "rating" ? b.rating : b.year;
            return sortOrder === "ascending" ? valueA - valueB : valueB - valueA;
        });

    return (
        <div>
            <header className="py-8">
                <Header></Header>
            </header>
            <main>
                <div className="w-11/12 mx-auto text-center">
                    <Lottie animationData={gamingAnimation} loop={true} className="w-1/2 mx-auto" />
                    <h1 className="text-3xl font-bold">
                        <Typewriter
                            words={["Welcome to Chill Gamer", "Explore the All Review of Games", "Join the Community"]}
                            loop
                            cursor
                            cursorStyle="|"
                            typeSpeed={50}
                            deleteSpeed={30}
                            delaySpeed={1000}
                        />
                    </h1>
                </div>
                <div className="w-11/12 mx-auto text-center mb-5">
                    <div className="flex justify-between items-center pt-10">
                        {/* Sort Dropdown */}
                        <div className="dropdown z-10">
                            <label tabIndex={0} className="btn btn-outline btn-accent w-[120px]">Sort By</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit">
                                <li><button onClick={() => handleSort("rating", "ascending")}>Rating (Ascending)</button></li>
                                <li><button onClick={() => handleSort("rating", "descending")}>Rating (Descending)</button></li>
                                <li><button onClick={() => handleSort("year", "ascending")}>Year (Ascending)</button></li>
                                <li><button onClick={() => handleSort("year", "descending")}>Year (Descending)</button></li>
                            </ul>
                        </div>
                        {/* Filter Dropdown */}
                        <div className="dropdown z-10">
                            <label tabIndex={0} className="btn btn-outline btn-accent w-[120px]">Filter by Genre</label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-fit">
                                <li><button onClick={() => handleFilter("")}>All Genres</button></li>
                                <li><button onClick={() => handleFilter("Action")}>Action</button></li>
                                <li><button onClick={() => handleFilter("Adventure")}>Adventure</button></li>
                                <li><button onClick={() => handleFilter("RPG")}>RPG</button></li>
                                <li><button onClick={() => handleFilter("Puzzle")}>Puzzle</button></li>
                                <li><button onClick={() => handleFilter("Strategy")}>Strategy</button></li>
                                <li><button onClick={() => handleFilter("Arcade Racing")}>Arcade Racing</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-5 w-11/12 mx-auto py-10">
                    {
                        processedReviews.map((review) => (
                            <Fade direction="up">
                                <div className="bg-base-100 rounded-xl shadow-xl">
                                    <figure>
                                        <img
                                            className="rounded-t-xl w-full h-[200px]"
                                            src={review.gameCover}
                                            alt="No Image Found" />
                                    </figure>
                                    <div className="p-3">
                                        <h2 className="font-bold text-xl">{review.gameTitle}</h2>
                                        <div className='flex justify-between items-center my-3'>
                                            <p className="font-medium text-base">Genre: {review.genre}</p>
                                            <p className="font-medium text-base">Rating: {review.rating}⭐</p>
                                        </div>
                                        <div className='flex justify-between items-center my-3'>
                                            <p className="font-medium text-base">Published Year: {review.year}</p>
                                            <p className="font-medium text-base">Published by: {review.userName}</p>
                                        </div>
                                        <div className="">
                                            {
                                                (user && user?.email) ? <Link to={`/review/${review._id}`} className="btn-grad w-full font-bold">Explore Details</Link> : <Link to="/auth/login" className="btn-grad w-full font-bold">Explore Details</Link>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        ))
                    }
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllReviews;