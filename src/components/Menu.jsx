import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu(){
    
    return(
        <div>
        <div className="main">
          <div className="container-fluid">
          
            <div className="row">
              <div className="col-md-12">
                <div
                  id="MiCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#MiCarousel"
                      data-slide-to="0"
                      className="carousel-pagination active"
                    ></li>
                    <li
                      data-target="#MiCarousel"
                      data-slide-to="1"
                      className="carousel-pagination"
                    ></li>
                    <li
                      data-target="#MiCarousel"
                      data-slide-to="2"
                      className="carousel-pagination"
                    ></li>
                    <li
                      data-target="#MiCarousel"
                      data-slide-to="3"
                      className="carousel-pagination"
                    ></li>
                    <li
                      data-target="#MiCarousel"
                      data-slide-to="4"
                      className="carousel-pagination"
                    ></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-6 div-l">
                          <div className="carousel-img img1">

                            {/* <h1 className="carousel-title">KAbabs</h1> */}
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>TANDOORI CHICKEN AND KABABS</h3>
                          <hr />
                          <p>
                          Try our famous kababs and flaming red tandoori chicken. Our kababs made from seasoned minced lamb, beef, or chicken. Whether it's bihari or boti; we got you covered for the kabab your heart desires.
                          </p>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-primary btn-lg download-button">Donlands Menu</button></a>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-dark btn-lg download-button">Victoria Park Menu</button></a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-6 div-l">
                          <div className="carousel-img img2">
                            {/* <h1 className="carousel-title">Naan</h1> */}
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>NAAN</h3>
                          <hr />
                          <p>
                        Take a bit out of our fluffy, mouth watering naan. Always made fresh, gluten-free, in house, and on demand in our tandoor oven. We also sell garlic naan, butter naan, and cheese naan.
                          </p>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-primary btn-lg download-button">Donlands Menu</button></a>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-dark btn-lg download-button">Victoria Park Menu</button></a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-6 div-l">
                          <div className="carousel-img img3">
                            {/* <h1 className="carousel-title">Biryani</h1> */}
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>BIRYANI</h3>
                          <hr />
                          <p>
                          Our Biryani is always made fresh for you with generous portions. Mixed with a myriad of spices, herbs, and meat of your choice; our biryani is certain to satisfy your cravings.
                          </p>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-primary btn-lg download-button">Donlands Menu</button></a>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-dark btn-lg download-button">Victoria Park Menu</button></a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-6 div-l">
                          <div className="carousel-img img4">
                            {/* <h1 className="carousel-title">Naan</h1> */}
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>BUTTER CHICKEN</h3>
                          <hr />
                          <p>
                          A crowd favourite. Soak up this classic north Indian dish's rich, creamy sauce with our naan and you won't be left disappointed. 
                          </p>
                          <br></br>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-primary btn-lg download-button">Donlands Menu</button></a>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-dark btn-lg download-button">Victoria Park Menu</button></a>
                        </div>
                      </div>
                    </div>

                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-md-6 div-l">
                          <div className="carousel-img img5">
                            {/* <h1 className="carousel-title">Naan</h1> */}
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>TILAPIA AND SEAFOOD</h3>
                          <hr />
                          <p>
                          We offer whole tilapia barbequed and seasoned to perfection. Other seafood options include fish curry, tandoori pomfret fish, and fish masaladar. 
                          </p>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-primary btn-lg download-button">Donlands Menu</button></a>
                          <a href="images/menu/donlandsmenu.pdf" target="_blank"><button type="button" className="btn btn-dark btn-lg download-button">Victoria Park Menu</button></a>
                        </div>
                      </div>
                    </div>



                  </div>
                  <a
                    className="carousel-control-prev carousel-controls"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-iconn"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next carousel-controls"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-iconn"
                      aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Menu;