import useStore from "../../state/store";


const Footer = () => {
    const footer = useStore(state => state.footer);

    return (
        <div className={`text-center absolute left-0 w-full bottom-0 pb-5 shadow-md bg-slate-300 ${footer}`}>
            <h2>Footer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    );
};

export default Footer;