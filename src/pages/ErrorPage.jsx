import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen text-center">
            <div className="w-11/12 mx-auto flex flex-col items-center">
                <img className="w-full h-[400px]" src="/images/404.svg" alt="svg" />
                <Link to="/" className="btn-grad px-5 py-3">Back to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;