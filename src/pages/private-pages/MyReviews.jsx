import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../providers/AuthProvider";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Swal from "sweetalert2";

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    useEffect(() => {
        fetch('https://chill-gamer-server-side.vercel.app/review')
            .then((res) => res.json())
            .then(data => {
                const filteredData = data.filter(game => game.email === userEmail);
                setReviews(filteredData);
            })
            .catch(error => console.error('Error:', error));
    }, [userEmail]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, keep it',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://chill-gamer-server-side.vercel.app/review/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            toast.success("Review deleted successfully!");
                            setReviews(reviews.filter((review) => review._id !== id));
                        }
                    });
            }
        })
    };

    return (
        <div>
            <header className="py-8">
                <Header></Header>
            </header>
            <main className="py-10">
                <div className="w-11/12 mx-auto my-10 overflow-x-auto">
                    <h1 className="text-3xl font-bold my-10 text-center">My Reviews</h1>
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Game Title</th>
                                <th className="border border-gray-300 px-4 py-2">Game Description</th>
                                <th className="border border-gray-300 px-4 py-2">Rating</th>
                                <th className="border border-gray-300 px-4 py-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map((review) => (
                                <tr key={review._id}>
                                    <td className="border border-gray-300 px-4 py-2">{review.gameTitle}</td>
                                    <td className="border border-gray-300 px-4 py-2">{review.description}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-center">{review.rating}</td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <Link to={`/updateReview/${review._id}`}>
                                            <button className="btn-grad mb-2">Update</button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(review._id)}
                                            className="btn-grad"
                                        >
                                            Delete
                                        </button>
                                    </td>
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

export default MyReviews;