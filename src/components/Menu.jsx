import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Menu(){
    
    return(
        <div>
        <div className="main">
          <div className="container-fluid">
          <h3>SIGNATURE DISHES</h3>
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
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-md-6 div-l">
                          <div className="carousel-img img1">
                            <h1 className="carousel-title">Kababs</h1>
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>Kababs</h3>
                          <hr />
                          <p>
                          Our specialty kababs made from spiced minced lamb, beef, or chicken in our tandoor oven. Whether it's bihari, seikh, or boti; we got you covered for whatever kabab your heart desires.
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
                            <h1 className="carousel-title">Naan</h1>
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>Naan</h3>
                          <hr />
                          <p>
                          Enjoy our famous fluffy naan. Always made fresh, in house, and on demand in our tandoor oven.
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
                            <h1 className="carousel-title">Biryani</h1>
                          </div>
                        </div>
                        <div className="col-md-6 div-r">
                          <h3>Biryani</h3>
                          <hr />
                          <p>
                          Our Biryani is always made fresh for you with generous portions. Mixed with a myriad of spices, herbs, and meat of your choice; our biryani is certain to satisfy your cravings..
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