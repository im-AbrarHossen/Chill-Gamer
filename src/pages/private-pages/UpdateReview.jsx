import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const UpdateReview = () => {
    const navigate = useNavigate();
    const review = useLoaderData();
    const { _id, gameCover, gameTitle, description, rating, year, genre, email, userName } = review;

    const handleUpdate = e => {
        e.preventDefault();

        const gameCover = e.target.gameCover.value;
        const gameTitle = e.target.gameTitle.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;
        const year = e.target.year.value;
        const genre = e.target.genre.value;
        const email = e.target.email.value;
        const userName = e.target.userName.value;

        const newReview = { gameCover, gameTitle, description, rating, year, genre, email, userName }
        //console.log(newReview)

        // send data to the server and database
        fetch(`https://chill-gamer-server-side.vercel.app/review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                //console.log(data);
                if (data.modifiedCount) {
                    //console.log('successfully updated');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then(()=>{
                        navigate("/my-reviews");
                    });
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return (
        <div>
            <header className='py-8'>
                <Header></Header>
            </header>
            <main className='pb-10'>
                <div className='lg:w-3/4 mx-auto'>
                    <div className="text-center p-10">
                        <h1 className="text-5xl font-bold">Update Review!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in.Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleUpdate} className="card-body">
                            {/* form first row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Game Cover Image (URL)</span>
                                    </label>
                                    <input type="text" name='gameCover' defaultValue={gameCover} placeholder="coffee name" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Game Title</span>
                                    </label>
                                    <input type="text" name='gameTitle' defaultValue={gameTitle} placeholder="chef name" className="input input-bordered" required />
                                </div>
                            </div>
                            {/* form second row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Review Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        defaultValue={description}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        rows="5"
                                        placeholder="Write your review..."
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            {/* form third row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Rating (1-10)</span>
                                    </label>
                                    <input type="text" name='rating' defaultValue={rating} placeholder="coffee Category" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Publishing Year</span>
                                    </label>
                                    <input type="text" name='year' defaultValue={year} placeholder="Photo url" className="input input-bordered" required />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">Genre</span>
                                    </label>
                                    <select
                                        name="genre"
                                        defaultValue={genre}
                                        className="select select-bordered"
                                        required
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
                            </div>
                            {/* form fourth row */}
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">User email</span>
                                    </label>
                                    <input type="text" name='email' defaultValue={email} className="input input-bordered" disabled />
                                </div>
                                <div className="form-control flex-1">
                                    <label className="label">
                                        <span className="label-text font-bold">User Name</span>
                                    </label>
                                    <input type="text" name='userName' defaultValue={userName} placeholder="Photo url" className="input input-bordered" disabled />
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn-grad w-full py-3 font-bold">Update Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default UpdateReview;