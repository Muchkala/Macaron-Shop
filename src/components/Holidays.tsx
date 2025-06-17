import { HolidaysData } from "@/constants";
import UniHeader from "./shared/UniHeader";
import { styles } from "@/styles/styles";
import React from "react";
import Line from "@/assets/icons/LIne Doted.svg"

export default function Holidays() {
      return (
            <div className={`${styles.container} hidden lg:block`}>
                  <UniHeader text="Ближайшие праздники" />

                  <div className="relative overflow-hidden">
                        <ul className="flex items-center justify-between flex-wrap gap-4 relative z-2">
                              {HolidaysData.map(({ id, title, img, rotate }) => (
                                    <li key={id} className="max-w-[170px] text-center">
                                          <img
                                                src={img}
                                                alt="Holiday"
                                                style={{ transform: `rotate(${rotate}deg)` }}
                                                className="m-auto w-15 h-12"
                                          />

                                          <p className="mt-2 text-sm font-medium whitespace-pre-line">
                                                {title.split("-").map((part, idx) => (
                                                      <React.Fragment key={idx}>
                                                            {part}
                                                            {idx !== title.split("-").length - 1 && <br />}
                                                      </React.Fragment>
                                                ))}
                                          </p>
                                    </li>
                              ))}
                        </ul>
                        <img src={Line} alt="" className="absolute w-9/10 left-1/2 -translate-x-1/2 top-7 " />
                  </div>
            </div>
      );
}
