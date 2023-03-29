import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FloatingAnimation = ({
  id,
  lang,
  yValues,
  wrapperClassName,
  children,
  whileHover,
  whileTap,
  isClick,
  delay,
  lastClickedId,
  setLastClickedId
}) => {
  const [isReloaded, setIsReloaded] = useState(false);

  useEffect(() => {
    setIsReloaded(true);
    setTimeout(() => {
      setIsReloaded(false);
    }, 3000);
  }, []);

  const upAndDown = {
    y: yValues,
    opacity: 1,
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
    },
  };

  const fade = {
    opacity: [0, 1, 1],
    transition: {
      duration: 2.5,
      delay: delay,
    },
  };

  const hover = {
    scale: 1.3,
    transition: { duration: 0.3 },
  };

  const tap = { scale: 0.8 };

  const ifClick = () => {
    const arrMessage = [{text:"I Like", emoji:"❤️"}, {text:"I'm Good at", emoji:"🦄"}, {text:"I also do", emoji:"👍🏼"}];
    const message = (
      <div className="flex flex-row gap-1">
        <p>{arrMessage[id].text}</p>
        <h3>{lang} {arrMessage[id].emoji}</h3>
      </div>
    );

    toast.success(message, {
      html: true,
      position: "bottom-right",
      autoClose: 3000, 
    });
    setLastClickedId(id===lastClickedId?null:id);
  };

  const onClick = isClick ? ifClick : () => {};

  const toastContainer = lastClickedId === id && <ToastContainer />;

  return (
    <>
      <motion.div
        className={wrapperClassName}
        animate={isReloaded ? fade : upAndDown}
        whileHover={whileHover ? hover : {}}
        whileTap={whileTap ? tap : {}}
        onClick={onClick}
      >
        {children}
      </motion.div>
      {toastContainer}
    </>
  );
};

export default FloatingAnimation;
