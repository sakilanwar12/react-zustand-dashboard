import Button from "../components/button/Button";

const Demo = () => {
    return (
        <div className="p-5 ">
            <h2>Buttons</h2>

            <div className="grid grid-cols-6 gap-6 mt-20">

                <Button className="bg-black">Button</Button>
                <Button type="button" className="bg-transparent hover:bg-blue-500 text-blue border border-black">Button</Button>
                <Button type="button" className="bg-gray-300 hover:bg-gray-400 text-blue border border-black">Button</Button>
                <Button type="button" className="bg-white hover:bg-gray-100 text-gray-800  border border-gray-400 rounded shadow">Button</Button>
         
         
            </div>


        </div>
    )
};

export default Demo;