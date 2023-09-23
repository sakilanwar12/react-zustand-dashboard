import data from "../jsonData/data";


const Home = () => {
    return (
        <div className="p-5 " >
            <h2 className="mb-4">Ecommerce App</h2>
            <div className="grid grid-cols-4 gap-5">

                {data.map(item => (
                    <div className="bg-white border-item p-10" key={item._id}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>

                ))}


            </div>

        </div>
    );
};

export default Home;