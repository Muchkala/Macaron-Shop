import { styles } from "@/styles/styles";
import { Link } from "react-router-dom";
import { NavCenterAccardion } from "./NavCenterAccardion";
import { navbarCenterData } from "@/constants";

export default function NavbarCenter() {
  return (
    <div className="w-full bg-[#F7EBE5] hidden lg:flex justify-center h-[48px]">
      <div className={`${styles.container} flex lg:gap-2 justify-between xl:mx-auto`}>
        
        {/* LEFT LINKS */}
        <ul className={`flex lg:w-[70%] xl:w-[90%] lg:gap-[20px] xl:gap-[20px] h-full place-items-center text-[#000]/79 ${styles.unitxt}`}>
          {navbarCenterData.leftData.map((item) => (
            <Link key={item.id} to={item.path} className="h-full">
              <li className="hover:border-b-2 hover:border-b-orange-600 
                border-b-2 border-transparent h-full transition-[0.2s] flex place-items-center">
                {item.title}
              </li>
            </Link>
          ))}
        </ul>

        
        {/* RIGHT DATA */}
        <div className="flex justify-start xl:gap-[3px] lg:justify-evenly  lg:w-[105%] items-center">
          {/* Language Selector */}
          <NavCenterAccardion isbold={false} />
          {/* Contacts */}
          {navbarCenterData.rightData.contacts.map((contact) => (
            <div key={contact.id} className="flex items-center ml-4">
              <img src={contact.img} alt="" className="w-[24px] h-[24px] mr-0.5" />
              <p className={`${styles.unitxt}`}>{contact.title}</p>
            </div>
          ))}

          {/* Social Icons */}
          <div className="xl:flex hidden items-center ml-4 space-x-2">
            {navbarCenterData.rightData.social.map((social) => (
              <img
                key={social.id}
                src={social.img}
                alt={social.alt}
                className="w-[24px] h-[24px]"
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
