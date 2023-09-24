import useStore from "../../state/store";


const Footer = () => {
    const footer = useStore(state => state.footer);

    return (
        <footer className={`ltr:ml-[248px] rtl:mr-[248px]  ${footer}`}>
            <div className="site-footer px-6 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 py-4">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5">
                    <div className="text-center ltr:md:text-start rtl:md:text-right text-sm">
                        COPYRIGHT © 2022 DashCode, All rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;