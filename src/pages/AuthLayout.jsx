import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AuthLayout = () => {
    return (
        <div className="bg-[#F3F3F3]">
            <header className="bg-[#ddf5f9] py-5">
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;