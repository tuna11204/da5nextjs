import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
 
const HearderTop=()=>{
    return(
        <div className="border-b border-gray-200 hidden sm:block">
            <div className="container py-4">
                <div className="flex justify-between items-center">
                    <div className="hidden lg:flex gap-1">
                        <div className="header_top_icon_wrapper">
                            <FaFacebook></FaFacebook>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <FaTwitter></FaTwitter>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <FaInstagram></FaInstagram>
                        </div>
                        <div className="header_top_icon_wrapper">
                            <FaLinkedin></FaLinkedin>
                        </div>
                    </div>

                    <div className="text-gray-500 text-[12px]">
                        <b>FREE SHIP</b> THIS WEEK ORDER OVER -100$
                    </div>

                    <div className="flex gap-4">
                        <select className="text-gray-500 text-[12px] w-[70px]" name="currency" id="currency">
                            <option value="VND">VND</option>
                            <option value="USD $">USD $</option>
                            <option value="EUR €">EUR €</option>
                        </select>

                        <select className="text-gray-500 text-[12px] w-[80px]" name="language" id="language">
                            <option value="English">English</option>
                            <option value="Việt Nam">Việt Nam</option>
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default HearderTop
