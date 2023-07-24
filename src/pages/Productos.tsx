
import '../assets/css/Catalogo.css'
import Footer from "../components/Footer";
import CardsProducts from "../components/Cards";


const Productos = () => {



    return (
        <div>
            <div className="products">
                <div>
                <img src="https://i.ibb.co/zbChdgg/Rectangulo.png" alt="" />
                </div>
                <div className="container mt-5">
                    <div className="search">
                        
                    </div>
                    <h3>Productos disponibles</h3>
                    <br />
                    <div className="container mt-5">
                        <CardsProducts />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

export default Productos