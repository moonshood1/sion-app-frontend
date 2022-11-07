import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Modal from "react-modal";
import { toast } from "react-toastify";

Modal.setAppElement("#root");

const PhoneNumber = ({ numberText, handleFunction }) => {
  return (
    <div className="clipboard__wrap">
      <CopyToClipboard text={numberText} onCopy={handleFunction}>
        <FontAwesomeIcon icon={faClipboard} size={"lg"} color={"#E91E63"} />
      </CopyToClipboard>
    </div>
  );
};

export function Donation({ setIsActive, isActive }) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyNumber = () => {
    setIsCopied(true);
    toast.success("Numero copié");
  };
  const closeModal = () => {
    setIsActive(false);
  };
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div>
      <Modal
        isOpen={isActive}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal Donation"
      >
        <div className="body__container">
          <h1 className="container__title">
            Vous voulez soutenir notre effort ?
          </h1>
          <p className="container__text">
            Tout ce que nous fabriquons est à votre disposition, tout cela grâce
            à la générosité de Les incroyables mécènes de impact SION. Si vous
            souhaitez contribuer, nous serions ravis de votre soutien.
          </p>
          <div className="money__deck">
            <div className="money__deck-card">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654509226/sion-project/om_fd51y6.jpg"
                alt=""
                className="money__card-img"
              />
              <div>+225 07 08 72 03 73</div>
              <PhoneNumber
                numberText={"+2250708720373"}
                handleFunction={handleCopyNumber}
              />
            </div>
            <div className="money__deck-card">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654509227/sion-project/wave_dnxwla.jpg"
                alt=""
                className="money__card-img"
              />
              <div>+225 07 08 72 03 73</div>
              <PhoneNumber
                numberText={"+22507087203"}
                handleFunction={handleCopyNumber}
              />
            </div>
            {/* <div className="money__deck-card">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654509236/sion-project/mtn_ic46tb.png"
                alt=""
                className="money__card-img"
              />
              <span>Indisponible</span>
              <PhoneNumber
                numberText={"+225070899ihih"}
                handleFunction={handleCopyNumber}
              />
            </div> */}
            {/* <div className="money__deck-card">
              <img
                src="https://res.cloudinary.com/dhc0siki5/image/upload/v1654509228/sion-project/moov_xrtqyg.png"
                alt=""
                className="money__card-img"
              />
              <span>Indisponible</span>
              <PhoneNumber
                numberText={"+2250708990169"}
                handleFunction={handleCopyNumber}
              />
            </div> */}
          </div>
        </div>
      </Modal>
    </div>
  );
}
