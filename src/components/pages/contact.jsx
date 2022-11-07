import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { WithHeaderAndFooter } from "../withHeaderAndFooter";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.log({
      name,
      message,
    });
  };
  const contact_content = (
    <div
      className="body__container"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* <section className="contact_drawer" style={{ minHeight: "50vh" }}>
        <div className="contact_message">
          <h3> </h3>
          <p>
         
          </p>
        </div>
      </section> */}
      <div className="direct_pending">
        <div className="direct_pending-message">
          <p>Vous pourrez bientot nous contacter , restez a l'écoute </p>
        </div>
      </div>
      {/* <section className="contact_form-container">
        <div className="contact_form-content">
          <input type="text" className="contact__input" />
          <input type="text" className="contact__input" />
          <input type="text" className="contact__input" />
        </div>
        <div className="comment_form">
          <div className="comment_user-container">
            <div>
              <label htmlFor="username">Votre nom</label>
            </div>
            <div>
              <input
                type="text"
                className="comment_name"
                id="username"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  console.log(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="comment_text-container">
            <div>
              <label htmlFor="comment" className="comment_text-label">
                Votre message
              </label>
            </div>
            <div>
              <textarea
                className="comment_text"
                rows="5"
                cols="50"
                id="comment"
                // value={"comment"}
                onChange={(e) => {
                  console.log(e.target.value);
                  // setComment(e.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div>
            <button
              className="comment_button"
              type={"submit"}
              // whileHover={{
              //   scale: 1.02,
              //   transition: {
              //     duration: 0.3,
              //     repeat: Infinity,
              //     repeatType: "reverse",
              //   },
              // }}
              onClick={() => console.log("searched")}
            >
              Envoyer
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
  const ContactHeaderAndFooter = WithHeaderAndFooter(() => (
    <div>{contact_content}</div>
  ));

  return <ContactHeaderAndFooter />;
}
