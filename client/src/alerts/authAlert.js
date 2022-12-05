import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import ReactDom from "react-dom";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { BiDonateHeart } from "react-icons/bi";
import styled from "styled-components";

const popIn = {
  hidden: {
    opacity: 0,
    scale: 1.2,
  },

  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.02,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },

  exit: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.02,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
};

const AuthAlert = ({ alert, setAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 4000);
  }, [alert]);

  console.log(alert);

  return ReactDom.createPortal(
    <div>
      <AnimatePresence>
        {alert && (
          <Alert
            variants={popIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Info
              bg={
                alert === "unauthorized"
                  ? "rgba(143, 10, 10, 0.733)"
                  : "rgba(59, 143, 10, 0.733)"
              }
            >
              {alert === "authorized" && <BiDonateHeart />}
              {alert === "unauthorized" && <AiOutlineExclamationCircle />}{" "}
              {alert === "unauthorized" && (
                <p>You need to be logged in to save films to your watchlist</p>
              )}
              {alert === "authorized" && <p>Film added!</p>}
            </Info>
          </Alert>
        )}
      </AnimatePresence>
    </div>,

    document.getElementById("portal")
  );
};

export default AuthAlert;

const Alert = styled(motion.div)`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 20%;
  z-index: 100;
`;

const Info = styled.div`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  padding: 2em 2em;
  font-size: 1.05rem;
  font-weight: 600;
  background: ${(props) => props.bg};
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  > svg {
    margin-right: 0.8em;
    width: 1.4em;
    height: 1.4em;
    display: flex;
  }
`;
