import { useContext } from 'react';
import './Banner.css';
import { AuthContext } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
const HighestRatedGame = ({ review }) => {
    const { user } = useContext(AuthContext);
    return (
        <Fade direction="up" cascade triggerOnce>
            <div className="border rounded-xl shadow-xl">
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
                        <p className="font-medium text-base">Released Year: {review.year}</p>
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
    );
};

export default HighestRatedGame;