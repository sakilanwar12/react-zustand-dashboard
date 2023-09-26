import { Link } from "react-router-dom";

const Notification = ({ notfication_data }) => {
    return (
        <div className="absolute origin-top-right top-[60px]  pb-0   right-0 shadow-2xl
          w-[340px] z-10 bg-white
         dark:bg-slate-800 ">

            <div className="flex items-center justify-between border-b py-2 pb-3 px-4 dark:border-slate-700">
                <div className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-6">Notifications</div>
                <div
                    className="text-slate-800 dark:text-slate-200 text-xs md:text-right " role="none" >
                    <Link className="underline dark:text-slate-200" to="/chat" role="none">
                        View all
                    </Link>
                </div>
            </div>

            {notfication_data.map(notification => (
                <div className="flex  space-x-2 py-2 px-2 border-b relative dark:border-slate-700
                 hover:bg-slate-100 dark:hover:bg-slate-600" key={notification._id}>
                    <div className="relative">
                        <img src={notification.img} alt="" />
                    </div>
                    <div>
                        <h3 className="capitalize text-base text-slate-700 dark:text-slate-200 font-medium">{notification.title}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{notification.message}</p>
                        <p className="text-sm mt-2 text-slate-400">{notification.time} min ago</p>
                    </div>

                </div>
            ))
            }
        </div >
    );
};

export default Notification;