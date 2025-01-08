import { Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About Section */}
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <img className="w-[60px]" src="/images/logo.png" alt="Logo" />
                        <p className="font-bold text-2xl">Chill Gamer</p>
                    </div>
                    <p className="text-gray-400">
                        Your ultimate destination for honest game reviews, detailed watchlists, and everything a gamer needs. Stay chill and game on!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link to="/all-reviews" className="hover:text-blue-400">All Reviews</Link></li>
                        <li><Link to="/add-review" className="hover:text-blue-400">Add Review</Link></li>
                        <li><Link to="/my-reviews" className="hover:text-blue-400">My Reviews</Link></li>
                        <li><Link to="/game-watchlist" className="hover:text-blue-400">Game Watchlist</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Contact Us</h3>
                    <p className="text-gray-400">📍 230/1 Khilgaon, Dhaka</p>
                    <p className="text-gray-400">📧 abrarhossen93@gmail.com</p>
                    <p className="text-gray-400">📞 +8801642753890</p>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="font-bold text-xl mb-4">Follow Us</h3>
                    <div className="flex gap-4">
                        <a
                            href="https://www.facebook.com/abrarhossen273"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 text-gray-400"
                        >
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-400 text-gray-400"
                        >
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/whose_abrar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 text-gray-400"
                        >
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/im-AbrarHossen"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 text-gray-400"
                        >
                            <i className="fab fa-linkedin fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                <p className="text-gray-400">© 2024 Chill Gamer. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;