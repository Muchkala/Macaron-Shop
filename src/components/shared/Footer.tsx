import { styles } from "@/styles/styles";
import {
  features,
  copyrightText,
  contactInfo,
  linkSections,
  socialLinks,
} from "@/constants";

export default function Footer() {
  return (
    <footer className="bg-[#EBEDEE] py-[58px]">
      <div className={`${styles.container}`}>
        <div className="grid grid-cols-12 xl:gap-6 lg:gap-20 md:gap-x-[13%]">
          <div className="col-span-12 md:col-span-4 flex flex-col gap-[30px]">
            <div className="flex flex-col sm:flex-row justify-evenly gap-[15px] lg:gap-[25px] mb-[20px]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex md:flex-col justify-start md:justify-start max-w-[300px] items-center gap-[10px] md:gap-[16px] text-center"
                >
                  <img
                    src={feature.icon}
                    alt=""
                    className="w-[50px] h-[37px] object-contain"
                  />
                  <p
                    className={`leading-[115%] font-normal text-black !text-[12px] max-w-[200px] text-start md:text-center md:max-w-[140px]`}
                    dangerouslySetInnerHTML={{ __html: feature.text }}
                  />
                </div>
              ))}
            </div>

            <div>
              <p
                className={`leading-[115%] hidden sm:block md:text-start text-center mb-[20px] font-normal text-[#292929]/70 text-[12px]`}
                dangerouslySetInnerHTML={{ __html: copyrightText }}
              />
            </div>
          </div>

          <div className="flex gap-4 col-span-12 sm:hidden">
            <p
              className={`w-[50%] leading-[115%] block font-normal text-[#292929]/70 text-[10px] md:text-[12px]`}
              dangerouslySetInnerHTML={{ __html: copyrightText }}
            />
            <div className="flex flex-col w-[50%]">
              <h5 className="w-full text-[12px] sm:text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">
                {contactInfo.phone}
              </h5>
              <p className=" w-full text-start flex-col text-[10px] sm:text-[14px] font-normal text-[#292929]">
                {contactInfo.hours}
              </p>
            </div>
          </div>

          {linkSections.map((section, index) => (
            <div key={index} className={section.className}>
              <h5 className="text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">
                {section.title}
              </h5>
              <ul className="flex text-start flex-col gap-[18px] text-[14px] font-normal text-[#292929] ">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="border-b-2 border-transparent lg:cursor-pointer lg:hover:border-b-[#DC143C] transition-colors duration-200 w-fit">{link}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-12 md:w-[170px] w-full flex flex-row lg:gap-[20px] md:gap-[35px] md:flex-col md:col-span-2">
            <div className="hidden sm:flex flex-col place-content-center !w-full">
              <h5 className="text-[12px] sm:text-[16px] uppercase font-semibold text-[#292929] mb-[5px] leading-[100%]">
                {contactInfo.phone}
              </h5>
              <p className="text-start flex-col text-[10px] sm:text-[14px] font-normal text-[#292929]">
                {contactInfo.hours}
              </p>
            </div>
            <br />
            <br />
            <br />
            <div className="sm:flex hidden w-full justify-end md:justify-start gap-[18px] items-center">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  <img src={link.icon} alt={link.alt} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex sm:hidden justify-center mt-[-30px] w-full gap-[18px] items-center">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url}>
              <img src={link.icon} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
