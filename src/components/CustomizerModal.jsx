import useStore from "../state/store";



const CustomizerModal = () => {
    
const {setToggleSettings,setNav,setFooter,setContainer,setSidebarToggle} = useStore();

    return (
        <div className="w-[300px] bg-white shadow-2xl px-4 py-20  min-h-screen absolute z-50 top-0 right-0">
            <div className="flex justify-between items-center">
                <div>
                    <h2>Theme Customizer</h2>
                </div>

                <div>
                    <button type="button" className="px-5 py-1 border capitalize flex items-center justify-center" onClick={setToggleSettings}>close</button>
                </div>
            </div>


            <div className="border my-5"></div>
            <h2>Content Width</h2>

            <div className="flex space-x-4 items-center">
                <div>
                    <label htmlFor="fullWidth">
                        <input type="radio" name="content-width" id="fullWidth" onChange={()=>setContainer("container-full")} />
                        <span>Full Width</span>
                    </label>
                </div>

                <div>
                    <label htmlFor="BoxContentWidth">
                        <input type="radio" name="content-width" id="BoxContentWidth" onChange={()=>setContainer("container-box")} />
                        <span>Box Width</span>
                    </label>
                </div>
            </div>

            <div className="border my-5"></div>

            <div className="flex justify-between items-center space-x-4">
                <span>Menu collapsed</span>
                <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultValue="" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />

                    </label>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-4 mt-5">
                <span>Menu Hidden</span>
                <div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" onChange={setSidebarToggle} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                    </label>
                </div>
            </div>



            <div className="border my-5"></div>
            <h2>Navbar Type</h2>
            <div className="grid grid-cols-4 mt-2">
                <div>
                    <label htmlFor="stickyNav">
                        <input type="radio" id="stickyNav" name="nav" onChange={()=>setNav("sticky-menu")} />
                        <span>Sticky</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="staticNav">
                        <input type="radio" id="staticNav" name="nav" onChange={()=>setNav("static-menu")} />
                        <span>Static</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="hiddenNav">
                        <input type="radio" id="hiddenNav" name="nav" onChange={()=>setNav("hidden-menu")} />
                        <span>Hidden</span>
                    </label>
                </div>
            </div>
            <div className="border my-4"></div>

            <h2>Footer Type</h2>

            <div className="grid grid-cols-4 mt-2">
                <div>
                    <label htmlFor="stickyFooter">
                        <input type="radio" id="stickyFooter" name="footer" onChange={()=>setFooter("sticky-footer")} />
                        <span>Sticky</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="staticFooter">
                        <input type="radio" id="staticFooter" name="footer" onChange={()=>setFooter("static-footer")} />
                        <span>Static</span>
                    </label>
                </div>
                <div>
                    <label htmlFor="hiddenFooter">
                        <input type="radio" id="hiddenFooter" name="footer" onChange={()=>setFooter("hidden-footer")} />
                        <span>Hidden</span>
                    </label>
                </div>
            </div>


        </div>
    );
};

export default CustomizerModal;