import { Link } from "react-router-dom";
import useStore from "../../state/store";
import Nav from "./Nav";

const Sidebar = () => {
    const { semi_dark } = useStore();

    return (
        <div className={`w-[300px] dark:bg-[#0d1629] dark:text-[#eee] min-h-screen  border-item shadow-xl px-5   z-20 fixed top-0 left-0 ${semi_dark ? "bg-[#475569]" : "bg-white"}`}>

            <div
                className=" logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] py-6  px-4  border-none mb-5"
            >
                <Link to="/dashboard">
                    <div className="flex items-center space-x-4">
                        <div className="logo-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 6C0 2.68629 2.68629 0 6 0H26C29.3137 0 32 2.68629 32 6V32H6C2.68629 32 0 29.3137 0 26V6Z" fill="#111112" />
                                <path d="M20 23.2C19.0133 23.2 18.0933 23.02 17.24 22.66C16.4 22.3 15.6667 21.7933 15.04 21.14C14.4133 20.4867 13.9267 19.7333 13.58 18.88C13.2467 18.0133 13.08 17.0867 13.08 16.1C13.08 15.1133 13.2467 14.1933 13.58 13.34C13.9267 12.4733 14.4067 11.72 15.02 11.08C15.6467 10.44 16.38 9.94 17.22 9.58C18.06 9.22 18.9667 9.04 19.94 9.04C20.9933 9.04 21.9333 9.22667 22.76 9.6C23.6 9.97333 24.3333 10.4867 24.96 11.14L23.96 12.14C23.48 11.6067 22.9 11.1933 22.22 10.9C21.54 10.5933 20.78 10.44 19.94 10.44C19.1667 10.44 18.4533 10.58 17.8 10.86C17.16 11.14 16.5933 11.54 16.1 12.06C15.62 12.5667 15.2467 13.1667 14.98 13.86C14.7267 14.54 14.6 15.2867 14.6 16.1C14.6 16.9133 14.7333 17.6667 15 18.36C15.2667 19.0533 15.64 19.66 16.12 20.18C16.6 20.6867 17.1667 21.08 17.82 21.36C18.4733 21.64 19.1867 21.78 19.96 21.78C20.84 21.78 21.62 21.6267 22.3 21.32C22.9933 21.0133 23.58 20.5933 24.06 20.06L25.06 21.08C24.4467 21.7333 23.7133 22.2533 22.86 22.64C22.0067 23.0133 21.0533 23.2 20 23.2Z" fill="white" />
                                <path d="M9.3 23V20.58H12.88C13.7867 20.58 14.58 20.3933 15.26 20.02C15.94 19.6333 16.4667 19.0933 16.84 18.4C17.2267 17.7067 17.42 16.8867 17.42 15.94C17.42 15.02 17.2267 14.22 16.84 13.54C16.4533 12.8467 15.92 12.3133 15.24 11.94C14.56 11.5533 13.7733 11.36 12.88 11.36H9.24V8.94H12.92C13.96 8.94 14.92 9.11333 15.8 9.46C16.6933 9.80667 17.4667 10.3 18.12 10.94C18.7867 11.5667 19.3 12.3067 19.66 13.16C20.0333 14.0133 20.22 14.9467 20.22 15.96C20.22 16.9733 20.0333 17.9133 19.66 18.78C19.3 19.6333 18.7933 20.38 18.14 21.02C17.4867 21.6467 16.7133 22.1333 15.82 22.48C14.94 22.8267 13.9867 23 12.96 23H9.3ZM7.44 23V8.94H10.16V23H7.44Z" fill="white" />
                            </svg>

                        </div>
                        <div>
                            <h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                                DashCode
                            </h1>
                        </div>
                    </div>
                </Link>
                <div
                    className="h-4 w-4 border-[1.5px] border-slate-900 dark:border-slate-700 rounded-full transition-all duration-15  ring-2 ring-inset ring-offset-4 ring-black-900 dark:ring-slate-400 bg-slate-900 dark:bg-slate-400 dark:ring-offset-slate-700"
                />
            </div>

            {/* nav */}
            <Nav />

        </div>
    );
};

export default Sidebar;