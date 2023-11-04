import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NavLink } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            src={require("./../assets/img/1.jpg")}
            text="First slide"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            src={require("./../assets/img/2.jpg")}
            text="Second slide"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={require("./../assets/img/3.jpg")}
            text="Third slide"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
          />
        </Carousel.Item>
      </Carousel>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={require("./../assets/img/esraa-low-resolution-logo-color-on-transparent-background.png")}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome to our Website
            </h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, minima quae
              dignissimos non deleniti quidem dolorum quos, at, atque alias temporibus ducimus
              adipisci deserunt laborum recusandae earum ratione similique! Perferendis.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <NavLink type="button" className="btn btn-info btn-lg px-4 me-md-2" to={"/products"}>
                Products
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
