import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';


import Menu from "./Menu";
import Order from "./Order";


function App() {
    return (
        <div className="App">
            <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home"><img src="images/logos/small-logo.svg" alt="makkah" className="svg-small"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarSupportedContent" />
                    <Navbar.Collapse id="navbarSupportedContent">
                        <Nav className="ml-auto">
                            <Nav.Link href="#">HOME</Nav.Link>
                            <Nav.Link href="#order">ORDER</Nav.Link>
                            <Nav.Link href="#menu">MENU</Nav.Link>
                            <Nav.Link href="#contact">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <section id="title">
                    <div className="container-fluid text-center">
                    <img src="images/logos/makkahlogo2.svg" alt="makkah" className="svg-logo"/>
                        <h1>Your Tandoor Experience Starts Here</h1>
                        <hr className="linebreak" />

                        <h3>
                            <a href="https://www.google.com/maps/place/Makkah+Restaurant/@43.680795,-79.336709,16z/data=!4m5!3m4!1s0x0:0x8b9177bc305bc8a3!8m2!3d43.680795!4d-79.336709?hl=en-CA" target="_blank">
                            <img src="images/icons/pin.svg" alt="drop pin" className="svg-props" />
                            Donlands</a>  
                            <a href="https://www.google.com/maps/place/Makkah+Restaurant/@43.6835551,-79.3021665,14z/data=!4m8!1m2!2m1!1sMakkah+Restaurant!3m4!1s0x0:0xc4a55b548f4c2835!8m2!3d43.6905985!4d-79.2918652?hl=en-CA" target="_blank"><img src="images/icons/pin.svg" alt="drop pin" className="svg-props" />
                            Victoria Park</a>
                        </h3>

                        <a href="#order"><button type="button" className="btn btn-dark btn-lg download-button"><img src="images/icons/order.svg" alt="order pin" className="svg-props2" />ORDER NOW</button></a>
                        <a href="#menu"><button type="button" className="btn btn-success btn-lg download-button" href="#menu"><img src="images/icons/menu.svg" alt="menu button" className="svg-props2" />MENU</button></a>

                    </div>
                </section>

                <section id="features">

                    <div className="row">
                        <div className="col-lg-4 feature-box">
                            <img src="images/icons/islam2.svg" alt="halal" className="icons" />
                            <h3>100% Halal</h3>
                            <p>Named after the Islamic centre of the world, everything on our menu is 100% halal. A part of our Zakat goes to Islamic welfare by regularly donating to Mosques, Islamic communities, and supporting orphanages in developing nations.</p>
                        </div>
                        <div className="col-lg-4 feature-box">
                            <img src="images/icons/tandoor.svg" alt="tandoor" className="icons" />
                            <h3>Authentic Desi Food</h3>
                            <p>Enjoy a diverse array of Indian, Pakistani, and Bangladeshi dishes. Our expert chefs have decades of sub-continental dishes cookery experiences. Enjoy fresh naan on demand and specialty meats that you can only be truly experienced with our authentic tandoor charcoal oven.</p>
                        </div>
                        <div className="col-lg-4 feature-box">
                            <img src="images/icons/truck.svg" alt="cater" className="icons" />
                            <h3>Catering</h3>
                            <p>Have a party or wedding in mind? We have been in the catering business for years and offer reasonable rates for per head for events. Trust exprience and flavour. Contact us for more information.</p>
                        </div>
                    </div>                   
                </section>

                <section id="menu">
                <h2>FEATURED DISHES</h2>
                    <Menu />
                </section>

                <section id="order">
                    <Order />
                </section>

                <section id="contact">
                    <div className="container-fluid2">
                        <h3>Reach out to us</h3>
                        <div className="iframe-container">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/F22SLuMfySQ?start=172&end=245" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div>
                         <div className="container-fluid2">
                            <a href="https://www.facebook.com/makkah.danforth/" target="_blank">
                                <img src="images/icons/facebook.svg" alt="drop pin" className="svg-props" />
                            </a>
                            <a href="https://www.instagram.com/makkahrestaurant/" target="_blank">
                                <img src="images/icons/instagram.svg" alt="drop pin" className="svg-props" />
                            </a>  
                            <a href="mailto:makkahdanforth@gmail.com" target="_blank">
                                <img src="images/icons/email.svg" alt="drop pin" className="svg-props" />
                            </a>
                            </div>  
                            <hr></hr>
                        
                        <footer>© 2020 Makkah Restaurant
                        <br></br> Website created by Imtiaz Miah
                        </footer>

                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
}

export default App;
