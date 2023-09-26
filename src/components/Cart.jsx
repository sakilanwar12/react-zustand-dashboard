
import { HiX } from "react-icons/hi";
import { setShoppingCart } from "../state/ThemeActions";
const Cart = ({ price, subtotal }) => {
    return (
        <div className="min-h-screen flex flex-col justify-between fixed top-0 right-0 z-50  w-[400px]  py-3 bg-white
        dark:bg-[#1e293b]  shadow-2xl origin-top-left">

            <div className="flex items-center justify-between border-b dark:border-slate-700 px-7  pb-3">
                <div>
                    <span className="block text-xl text-slate-900 font-medium dark:text-[#eee]">Cart</span>
                    <span className="block text-sm font-light text-[#68768A] dark:text-[#eee]">Total Price ${price}</span>
                </div>

                <span className="h-10 w-10 inline-flex justify-center items-center
                 text-lg dark:bg-slate-900 rounded-full bg-slate-100
                 relative z-20
                 "
                    onClick={setShoppingCart}
                >
                    <HiX className="text-2xl relative" />
                </span>

            </div>

            <div className="h-40 w-40 overflow-hidden bg-slate-200/60 dark:bg-slate-700 rounded-full mx-auto relative flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    aria-hidden="true"
                    role="img"
                    className=" w-32  h-32 relative  iconify iconify--solar"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                >
                    <g fill="currentColor">
                        <path
                            d="M10.023 2a1.75 1.75 0 0 0 0 3.5h4a1.75 1.75 0 1 0 0-3.5h-4ZM3.887 16.205C3.029 12.773 2.6 11.058 3.5 9.904C4.4 8.75 6.17 8.75 9.708 8.75h4.63c3.538 0 5.306 0 6.207 1.154c.901 1.153.472 2.87-.386 6.301c-.546 2.183-.818 3.274-1.632 3.91c-.814.635-1.939.635-4.189.635h-4.63c-2.25 0-3.375 0-4.189-.635c-.814-.636-1.087-1.727-1.632-3.91Z"
                            opacity=".5"
                        />
                        <path
                            fillRule="evenodd"
                            d="m4.647 9.118l2.857 4.106l3.728-4.474h1.536l3.728 4.474l2.865-4.12c.507.172.891.425 1.184.8l.045.06l-3.098 4.455l2.392 2.87c-.183.7-.347 1.252-.54 1.696l-2.74-3.29l-3.517 5.055h-2.175l-3.516-5.054l-2.71 3.252c-.19-.446-.353-1.001-.535-1.7l2.357-2.83l-3.076-4.421c.022-.032.045-.063.068-.093c.286-.366.659-.616 1.147-.786ZM12 19.687L8.392 14.5L12 10.17l3.607 4.33L12 19.687Z"
                            clipRule="evenodd"
                        />
                        <path d="M15.604 4.502a1.743 1.743 0 0 0 .002-1.501c.683.005 1.216.036 1.691.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.777 1.999l.046.17l.513 2.963c-.409-.282-.936-.45-1.618-.55l-.36-2.087c-.285-1.04-.388-1.367-.562-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.485-.11-1.147-.118ZM8.441 3.001a1.743 1.743 0 0 0 .002 1.501c-.662.007-.927.032-1.147.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.561 1.6l-.361 2.089c-.682.1-1.209.267-1.618.548l.513-2.962l.046-.17c.237-.872.41-1.505.777-2A3.25 3.25 0 0 1 6.75 3.224c.475-.186 1.008-.217 1.691-.222Z" />
                    </g>
                </svg>
            </div>

            <div className="flex items-center justify-between border-t dark:border-t-slate-700 px-7 pb-2 py-2 relative z-50">
                <span className="block text-xl text-slate-900 font-medium dark:text-[#eee]">Subtotal:</span>
                <span className="block text-slate-900 text-xl font-bold dark:text-[#eee]"> ${subtotal}</span>
            </div>

        </div>
    );
};

export default Cart;