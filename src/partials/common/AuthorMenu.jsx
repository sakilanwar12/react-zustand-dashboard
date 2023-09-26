import { Link } from "react-router-dom";


const AuthorMenu = ({ author_menu_data }) => {
    return (
        <div className="absolute origin-top-right top-[55px]   -right-3 shadow-2xl
        w-[150px] z-10 bg-white rounded-md
       dark:bg-slate-800 ">
            <nav>
                <ul>
                    {author_menu_data.map(item => (
                        <li key={item._id}>
                            <Link to={item.url} className="capitalize block  px-3 py-1 dark:hover:bg-slate-700 hover:bg-slate-100 ">{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>

        </div >
    );
};

export default AuthorMenu;