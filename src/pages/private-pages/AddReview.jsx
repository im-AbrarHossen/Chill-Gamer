import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const gameCover = form.gameCover.value;
        const gameTitle = form.gameTitle.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const year = form.year.value;
        const genre = form.genre.value;
        const email = form.email.value;
        const userName = form.userName.value;

        const newReview = { gameCover, gameTitle, description, rating, year, genre, email, userName };

        //send data to the server
        fetch('https://chill-gamer-server-side.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then((res) => res.json())
            .then((data) => {
                //console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        navigate(location?.state ? location.state : "/");
                    })
                }
            })
    };

    return (
        <div>
            <header>
                <div className="py-8">
                    <Header></Header>
                </div>
            </header>
            <div className="max-w-3xl mx-auto p-4 bg-white shadow-md rounded-md my-10 w-11/12">
                <h1 className="text-2xl font-bold mb-4">Add New Review</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-medium">Game Cover Image (URL)</label>
                        <input
                            type="text"
                            name="gameCover"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter the game cover URL"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Game Title</label>
                        <input
                            type="text"
                            name="gameTitle"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter the game title"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Review Description</label>
                        <textarea
                            name="description"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            rows="5"
                            placeholder="Write your review..."
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Rating (1-10)</label>
                        <input
                            type="number"
                            name="rating"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            min="1"
                            max="10"
                            step="0.1"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Publishing Year</label>
                        <input
                            type="text"
                            name="year"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            placeholder="Enter the publishing year (e.g., 2024)"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">Genre</label>
                        <select
                            name="genre"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                            <option value="">Select Genre</option>
                            <option value="Action">Action</option>
                            <option value="RPG">RPG</option>
                            <option value="Adventure">Adventure</option>
                            <option value="Puzzle">Puzzle</option>
                            <option value="Strategy">Strategy</option>
                            <option value="Arcade Racing">Arcade Racing</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">User Email</label>
                        <input
                            type="text"
                            name="email"
                            value={user?.email}
                            readOnly
                            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium">User Name</label>
                        <input
                            type="text"
                            name="userName"
                            value={user?.displayName}
                            readOnly
                            className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 cursor-not-allowed"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Submit Review
                    </button>
                </form>

                <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
            </div>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddReview;