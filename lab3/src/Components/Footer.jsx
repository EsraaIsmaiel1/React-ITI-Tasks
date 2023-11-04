import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div>
      <footer
        className="text-center text-light text-lg-start"
        style={{ backgroundColor: "#00b0ef" }}
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Esraa
                </h6>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, repellendus
                  iste? Voluptatum odio totam similique dolores, laboriosam quod explicabo
                  recusandae voluptas fugiat vero dolor voluptatem quos quaerat maiores magnam
                  provident.
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {" "}
                <h6 className="text-uppercase fw-bold mb-4">Content</h6>
                <p>
                  <NavLink className="text-reset" to={"/"}>
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink className="text-reset" to={"/products"}>
                    Products
                  </NavLink>
                </p>
                <p>
                  <NavLink className="text-reset" to={"/products/0/edit"}>
                    Add New Product
                  </NavLink>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
          © 2023 Copyright:
          <a className="text-reset fw-bold" href="#"></a>
        </div>
      </footer>
    </div>
  );
}
