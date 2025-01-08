import { Link, useNavigate } from "react-router-dom";
import './Banner.css';
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { IoMenu } from "react-icons/io5";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { ThemeContext } from "../providers/ThemeProvider";
import { CiDark, CiLight } from "react-icons/ci";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    };
    return (
        <div className="bg-[#ddf5f9] w-11/12 mx-auto px-2">
            <div className="flex justify-between items-center">
                {/* Mobile Menu */}
                <details className="dropdown lg:hidden z-50">
                    <summary className="btn btn-outline btn-accent m-1"><IoMenu /></summary>
                    <ul className="menu dropdown-content bg-base-100 dark:bg-gray-800 text-black dark:text-white rounded-box z-[1] w-52 p-2 shadow">
                        <Link to="/"><p>Home</p></Link>
                        <Link to="/all-reviews"><p>All-Reviews</p></Link>
                        <Link to="/add-review"><p>Add-Review</p></Link>
                        <Link to="/my-reviews"><p>My-Reviews</p></Link>
                        <Link to="/game-watchlist"><p>Game-WatchList</p></Link>
                    </ul>
                </details>

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img className="lg:w-[60px] w-[30px]" src="/images/logo.png" alt="Logo" />
                    <p className="font-bold lg:text-2xl text-xl">Chill Gamer</p>
                </div>

                {/* Desktop Menu */}
                <div className="lg:flex lg:items-center lg:gap-4 hidden">
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/all-reviews"><p>All-Reviews</p></Link>
                    <Link to="/add-review"><p>Add-Review</p></Link>
                    <Link to="/my-reviews"><p>My-Reviews</p></Link>
                    <Link to="/game-watchlist"><p>Game-WatchList</p></Link>
                </div>

                <button
                    onClick={toggleDarkMode}
                    className="text-3xl">
                    {isDarkMode ? <CiLight></CiLight> : <CiDark></CiDark>}
                </button>

                {/* Auth Section */}
                {user && user?.email ? (
                    <div className="flex items-center gap-2">
                        <div className="relative group">
                            <img
                                src={user?.photoURL || "/avatar.png"}
                                alt="User"
                                className="lg:h-12 h-8 lg:w-12 w-8 rounded-full cursor-pointer"
                                data-tooltip-id="user-tooltip"
                                data-tooltip-content={user.displayName || "User"}
                            />
                            <ReactTooltip id="user-tooltip" place="bottom" />
                        </div>
                        <button onClick={handleLogout} className="btn btn-outline btn-accent lg:w-[100px] w-[50px] lg:text-[16px] text-[11px] py-2 lg:py-4">
                            LogOut
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center gap-3">
                        <Link to="/auth/login">
                            <button className="btn btn-outline btn-accent lg:w-[100px] w-[50px] lg:text-[16px] text-[11px] py-2 lg:py-4">
                                Login
                            </button>
                        </Link>
                        <Link to="/auth/register">
                            <button className="btn btn-outline btn-accent lg:w-[100px] w-[50px] lg:text-[16px] text-[11px] py-2 lg:py-4">
                                Register
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;