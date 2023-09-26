import { Link } from "react-router-dom";
import cn from "../utils/cn";



const Inbox = ({ message_data }) => {
    return (
        <div className="absolute origin-top-right top-[60px]  pb-0   right-0 shadow-2xl  w-[340px] z-10 bg-white
         dark:bg-slate-800 ">

            <div className="flex items-center justify-between border-b py-2 pb-3 px-4 dark:border-slate-700">
                <div className="text-sm text-slate-800 dark:text-slate-200 font-medium leading-6">Message</div>
                <div
                    className="text-slate-800 dark:text-slate-200 text-xs md:text-right " role="none" >
                    <Link className="underline dark:text-slate-200" to="/chat" role="none">
                        View all
                    </Link>
                </div>
            </div>

            {message_data.map(message => (
                <div className="flex  space-x-2 py-2 px-1 border-b relative dark:border-slate-700
                 hover:bg-slate-100 dark:hover:bg-slate-600" key={message._id}>
                    {message.total > 0 &&
                        < div className="absolute top-2 right-2">
                            <span className="text-xs h-4 w-4 flex justify-center items-center rounded-full bg-red-500 text-white">{message.total}</span>
                        </div>
                    }
                    <div className="relative">
                        <img src={message.img} alt="" />
                        <span className={cn(" w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700  inline-block absolute right-0 top-0",
                            message.active ? "bg-green-500" : "bg-slate-400"
                        )}></span>
                    </div>
                    <div>
                        <h3 className="capitalize text-base text-slate-700 dark:text-slate-200 font-medium">{message.author}</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{message.message}</p>
                        <p className="text-sm mt-2 text-slate-400">{message.time} min ago</p>
                    </div>

                </div>
            ))
            }
        </div >
    );
};

export default Inbox;