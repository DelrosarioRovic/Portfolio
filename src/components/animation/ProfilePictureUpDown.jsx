import { motion } from "framer-motion";
import FloatingAnimation from "./FloatingAnimation";
function ProfilePictureUpDown() {
  return (
    <div className="p-10 relative">
      <FloatingAnimation
        wrapperClassName="p-6 rounded-full outline-none border border-white"
        children={
          <div className="rounded-full bg-blue-600 overflow-hidden w-72">
            <img
              className="brightness-110 contrast-125 object-cover object-center w-full h-full"
              src="https://media.discordapp.net/attachments/1045233952148947046/1084737602701250590/IMG_20230313_151939.png?width=436&height=413"
              alt="Rovic"
            />
          </div>
        }
      />

      <FloatingAnimation
        wrapperClassName="w-10 h-10 absolute top-10 left-0"
        children={
          <img
            className=""
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
            alt="JS Logo"
          />
        }
      />

      <FloatingAnimation
        wrapperClassName="w-10 h-10 absolute top-20 right-0"
        children={
          <img
            className=""
            src="https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png"
            alt="React Logo"
          />
        }
      />

      <FloatingAnimation
        wrapperClassName="w-10 h-10 absolute bottom-5 left-10"
        children={
          <img
            className=""
            src="https://cdn.iconscout.com/icon/free/png-256/nodejs-1-1174935.png"
            alt="Node.js Logo"
          />
        }
      />
    </div>
  );
}

export default ProfilePictureUpDown;
