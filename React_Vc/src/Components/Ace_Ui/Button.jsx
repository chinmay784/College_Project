import React, { useContext } from "react";
import { UserAppContext } from "../../context/UserAppContext";
import { useNavigate } from "react-router-dom";

const Button = () => {
  const { user } = useContext(UserAppContext);
  const navigate = useNavigate();

  return (
    <div className="flex gap-5 lg:justify-center lg:-mt-72">
      {/* Get Start Button */}
      <button
        onClick={() => user && navigate("/listen-ai")} // ✅ FIXED: Ensure navigation only if user exists
        className="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group"
      >
        <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#c6c6c6]">
          <div className="absolute inset-0 bg-[#dfdfdf] rounded-lg opacity-90"></div>
        </div>
        <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
        <div className="absolute inset-[2px] bg-gradient-to-r from-[#020104] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
        <div className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
        <div className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
        <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
        
        {/* Text inside Button */}
        <div className="relative flex items-center justify-center gap-2">
          {user ? (
            <span className="text-lg font-normal bg-gradient-to-b from-[#ffffff] to-[#5a5a5b] bg-clip-text text-transparent tracking-tighter" >
              Get Start
            </span>
          ) : (
            <span className="text-lg font-normal bg-gradient-to-b from-[#ffffff] to-[#5a5a5b] bg-clip-text text-transparent tracking-tighter">
              Please Login
            </span>
          )}
        </div>

        <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
      </button>

      {/* Contact Us Button */}
      <button className="relative h-12 px-8 rounded-lg overflow-hidden transition-all duration-500 group">
        <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#c6c6c6]">
          <div className="absolute inset-0 bg-[#dfdfdf] rounded-lg opacity-90"></div>
        </div>
        <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
        <div className="absolute inset-[2px] bg-gradient-to-r from-[#020104] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
        <div className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
        <div className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
        <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
        
        <div className="relative flex items-center justify-center gap-2">
          <span className="text-lg font-normal bg-gradient-to-b from-[#ffffff] to-[#5a5a5b] bg-clip-text text-transparent tracking-tighter">
            Contact Us
          </span>
        </div>

        <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
      </button>
    </div>
  );
};

export default Button;
