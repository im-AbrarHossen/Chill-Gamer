import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";

const ForgotPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    // Extract pre-filled email from location state
    const [email, setEmail] = useState(location?.state?.email || "");

    const handleReset = () => {
        // Log the user out
        logout()
            .then(() => {
                // Redirect to Gmail
                window.location.href = "https://mail.google.com/";
            })
            .catch((error) => {
                toast.error("Error logging out:", error);
            });
    };

    return (
        <div className="bg-base-200 h-screen grid place-items-center">
            <div className="bg-base-100 shadow-2xl rounded-xl p-6 w-96">
                <h1 className="text-center text-2xl font-bold text-gray-800">Forgot Password</h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleReset();
                    }}
                >
                    <div className="form-control mt-5">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email address"
                            className="input input-bordered"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                            Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;