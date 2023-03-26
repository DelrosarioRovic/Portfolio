import { motion } from "framer-motion";
import FloatingAnimation from "../animation/FloatingAnimation";
import logoProgLang from "../arrays/logoProgLang";
import "./home.css"
function ProfilePictureUpDown() {
  return (
    <div className="p-10 relative max-sm:p-2">
      <FloatingAnimation
        wrapperClassName="p-6 rounded-full border border-white border-opacity-50 hover:border-opacity-100 hover:border-blue-500 focus:outline-none focus:border-opacity-100 transition-colors"
        yValues={[0, -5, 0, 5, 0]}
        whileHover={false}
        whileTap={false}
        whileExit={false}
        delay={.5}
        children={
          <div className="rounded-full bg-blue-600 bg-opacity-70 overflow-hidden w-72">
            <img
              className="brightness-110 contrast-125 object-cover object-center w-full h-full"
              src="https://media.discordapp.net/attachments/1045233952148947046/1084737602701250590/IMG_20230313_151939.png?width=436&height=413"
              alt="Rovic"
            />
          </div>
        }
      />
      
      {logoProgLang.map((item, index) => (
        <FloatingAnimation
          key={index}
          yValues={item.yValues}
          whileHover={item.true}
          whileTap={item.tap}
          whileExit={item.exit}
          delay={item.delay}
          wrapperClassName={item.wrapperClassName}
          children={<img src={item.src} alt={item.alt} />}
        />
      ))}
    </div>
  );
}

export default ProfilePictureUpDown;