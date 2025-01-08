import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import "../../components/Banner.css"
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const ReviewDetails = () => {
    const { id } = useParams();
    const [review, setReview] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        // Fetch the review details from the backend
        const fetchReviewDetails = async () => {
            try {
                const response = await fetch(`https://chill-gamer-server-side.vercel.app/review/${id}`);
                const data = await response.json();
                setReview(data);
            } catch (error) {
                toast.error('Error fetching review details:', error);
            }
        };

        fetchReviewDetails();
    }, [id]);

    const handleAddToWatchList = async () => {
        if (!user) {
            alert("Please log in to add to WatchList");
            return;
        }

        try {
            const response = await fetch('https://chill-gamer-server-side.vercel.app/watchlist', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    reviewId: id,
                    gameTitle: review.gameTitle,
                    gameCover: review.gameCover,
                    userEmail: user?.email,
                    userName: user?.displayName,
                }),
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'This review added to your WatchList!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add to WatchList',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }
        } catch (error) {
            toast.error('Error adding to WatchList:', error);
        }
    };

    if (!review) return <p>Loading...</p>;

    return (
        <div className="review-details">
            <header className='py-8'>
                <Header></Header>
            </header>
            <main className='lg:w-[500px] w-[300px] mx-auto my-10 shadow-2xl rounded-xl'>
                <figure>
                    <img
                        className="rounded-t-xl w-full h-[200px]"
                        src={review.gameCover}
                        alt="No Image Found" />
                </figure>
                <div className="p-3">
                    <h2 className="font-bold text-xl">{review.gameTitle}</h2>
                    <p className="font-light text-base">{review.description}</p>
                    <p className="font-medium text-base">Genre: {review.genre}</p>
                    <p className="font-medium text-base">Rating: {review.rating}⭐</p>
                    <p className="font-medium text-base">Published Year: {review.year}</p>
                    <p className="font-medium text-base">Reviewer: {review.userName}</p>
                    <p className="font-medium text-base">Email: {review.email}</p>
                    <button
                        className="btn-grad w-full font-bold mt-4"
                        onClick={handleAddToWatchList}
                    >
                        Add to WatchList
                    </button>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default ReviewDetails;