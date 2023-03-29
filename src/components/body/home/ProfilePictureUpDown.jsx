import React, { useState } from "react";
import FloatingAnimation from "../../animation/FloatingAnimation";
import logoProgLang from "../../arrays/logoProgLang";
import "./home.css";
function ProfilePictureUpDown() {
  const [lastClickedId, setLastClickedId] = useState(null);

  return (
    <div className="p-10 relative max-sm:p-2">
      <FloatingAnimation
        wrapperClassName="p-6 rounded-full border border-white border-opacity-50 hover:border-opacity-100 hover:border-blue-500 focus:outline-none focus:border-opacity-100 transition-colors"
        yValues={[0, -5, 0, 5, 0]}
        delay={0.5}
        children={
          <div className="profilePTag rounded-full bg-opacity-70 w-72 h-72 hover:shadow-md hover:shadow-[#06092e41] duration-500">
            <img
              className="brightness-110 contrast-125 object-cover object-center w-full h-full"
              src="https://cdni.iconscout.com/illustration/premium/thumb/coder-3462295-2895977.png"
              alt="Rovic"
            />
          </div>
        }
      />

      {logoProgLang.map((item, index) => (
        <FloatingAnimation
          key={index}
          id={index}
          lang={item.lang}
          lastClickedId={lastClickedId}
          setLastClickedId={setLastClickedId}
          yValues={item.yValues}
          whileHover={true}
          whileTap={true}
          isClick={true}
          delay={item.delay}
          wrapperClassName={item.wrapperClassName}
          children={<img src={item.src} alt={item.alt} />}
        />
      ))}
    </div>
  );
}

export default ProfilePictureUpDown;
