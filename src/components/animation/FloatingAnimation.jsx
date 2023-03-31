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

  const ifClick = () => {
    const arrMessage = [{text:"I like ", emoji:"❤️"}, {text:"I'm Good at", emoji:"🦄"}, {text:"I enjoy working with", emoji:"👍🏼"}];
    const message = (
      <div className="flex flex-row gap-1">
        <p>{arrMessage[id].text}</p>
        <h3 className="font-semibold underline text-slate-900">{lang} {arrMessage[id].emoji}</h3>
      </div>
    );
    toast.dismiss();
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
        onClick={onClick}
      >
        {children}
      </motion.div>
      {toastContainer}
    </>
  );
};

export default FloatingAnimation;
