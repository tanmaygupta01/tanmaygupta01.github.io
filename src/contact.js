import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

export default function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const form = useRef();
  const [message, setmessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.content);

    const templateparams = {
      from_name: name + " " + email,
      to_name: "gupta.tanmay01@gmail.com",
      feedback: message
    };
    emailjs
      .send(
        "service_4863euj",
        "template_fenwygo",
        templateparams,
        "-EyVDC6bM9FvOCbcK"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };
  return (
    <>
      <div>
        <div className="contact-me-card row ">
          <div className="col-lg-6 col-md-5 col-sm-12 left-contact px-2 py-2">
            <span className="get-in-touch mx-4 my-5">Get in touch</span>

            <div className="py-5 d-flex justify-content-center">
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_bt7iqzns.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
          <div className="col-lg-6 col-md-5 col-sm-12 my-auto">
            <form
              ref={form}
              className="d-flex flex-column card-contact-right"
              onSubmit={sendEmail}
            >
              <div className="input-groups my-3 d-flex flex-column">
                <label>Name</label>
                <input
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your Name"
                  className="input-groups my-2"
                />
              </div>
              <div className="input-groups my-3 d-flex flex-column">
                <label>E-Mail</label>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your E-Mail"
                  className="input-groups my-2"
                />
              </div>
              <div className="input-groups my-3 d-flex flex-column">
                <label>Message</label>
                <textarea
                  value={message}
                  onChange={(e) => {
                    setmessage(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter your Message"
                  className="input-groups my-2"
                />
              </div>
              <div className="input-groups my-3 d-flex flex-column">
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
