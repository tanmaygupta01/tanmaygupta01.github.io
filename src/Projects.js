import React from "react";

import "./project.css";

export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-1 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
          {/* <span class="me-1 mt-1"><i class="fs-2 fas fa-shopping-basket text-white"></i></span> */}

            <span className="university-name"><i class="fs-3 fas fa-shopping-basket icon-color-3 mt-1"></i>  ShopStop</span>
            <span className="university-degree desc-span">
              Technologies : HTML, CSS, JS, EJS,NodeJs, ExpressJs, Mongoose,
              MongoDB, PassportJs{" "}
            </span>
            <ul className="description my-2">
              <li>A responsive Shopping application built using JS and REST API, ensuring session management along
                  with separate view and functionality for Sellers and Buyers.
              </li>
              <li>Users can add items to their cart or update the cart and then proceed towards the checkout page. Razorpay
                  was integrated for payment gateway.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <span className="year-passedout "><a href="https://github.com/tanmaygupta01/ShopStop" target="_blank">Link</a></span>
          </div>
        </div>


        <div className="education-one my-1 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name"><i class="fs-3 fa-brands fa-blogger-b icon-color-2"></i>  Blogger</span>
            <span className="university-degree desc-span">
              Technologies : HTML, CSS, JS, SQL, NodeJs, ExpressJs, MomentJs
            </span>
            <ul className="description my-2">
              <li>Blogging Application built using JS and REST API with MySql as Database.
              </li>
              <li>Users can add their blogs or can edit/delete already added blogs.
              </li>
            </ul>
          </div>
          <div className="my-2"> 
            <span className="year-passedout"><a href="https://github.com/tanmaygupta01/Blog-Application" target="_blank">Link</a></span>
          </div>
        </div>

        <div className="education-one my-1 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name"><i class="fa-brands fa-rocketchat icon-color-1"></i>  Connect</span>
            <span className="university-degree desc-span">
              Technologies : Sockets.io, NodeJs, ExpressJs, MomentJs
            </span>
            <ul className="description my-2">
              <li>Chatting Application where multiple users can join chat rooms and interact with each other.
              </li>
              <li>Socket.io and NodeJs were primarily used for developing the application.
              </li>
            </ul>
          </div>
          <div className="my-2">
            <span className="year-passedout"><a href="https://github.com/tanmaygupta01/Chat-App" target="_blank">Link</a></span>
          </div>
        </div>
      </div>
    </>
  );
}
