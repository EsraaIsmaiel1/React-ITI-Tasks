import React from "react";
import { NavLink } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <section className="page_404 ">
        <div className="container p-5">
          <div className="row ">
            <div className="col-12 ">
              <div className="text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2">Look like you're lost</h3>
                  <p>the page you are looking for not available!</p>
                  <NavLink to={"/"} className="link_404">
                    Go to Home
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
