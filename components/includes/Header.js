import styles from "./header.module.scss";
import Image from "next/image";
import logo from "../../assets/images/logo.webp";
import { useEffect } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { useSelector, useDispatch } from "react-redux";
import { setIsSqueeze, setIsDeviceMobile } from "../../redux/appStatusSlice";

export default function Header() {
  const dispatch = useDispatch();
  const { isDeviceMobile, isSqueeze } = useSelector((state) => state.appStatus);

  /* array of nav links in form ["/path","PATH NAME"]*/
  const navLinksArray = [
    ["/", "HOME"],
    ["/events", "EVENTS"],
    ["/recommendations", "RECOMMENDATIONS"],
    ["/trainings", "TRAININGS"],
    ["/photo-gallery", "PHOTO GALLARY"],
    ["/about-us", "ABOUT US"],
  ];

  //predict the device accoreding to screen width and update value in appStatus context api
  const findDevice = () =>
    window.innerWidth < 700
      ? dispatch(setIsDeviceMobile(true))
      : dispatch(setIsDeviceMobile(false));
  //know the top position of page and update value in appStatus context api
  const handleScroll = () => {
    //    alert(window.scrollY)
    window.scrollY > 10
      ? dispatch(setIsSqueeze(true))
      : dispatch(setIsSqueeze(false));
  };

  //add eventListeners to check scroll to squeeze header and to check resize of devices
  useEffect(() => {
    findDevice();
    window.addEventListener("resize", findDevice);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", findDevice);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className={styles.header + " " + `${isSqueeze ? styles.squeeze : ""}`}>
      <div className={styles.logo_container}>
        <div className={styles.logo}>
          <Image src={logo} alt="logo" layout="fill" />
        </div>
      </div>
      {isDeviceMobile ? (
        <MobileNav navLinksArray={navLinksArray} isSqueeze={isSqueeze} />
      ) : (
        <DesktopNav navLinksArray={navLinksArray} isSqueeze={isSqueeze} />
      )}
    </div>
  );
}

//top contact bar
export function ContactBar() {
  return (
    <div className={styles["contact-bar"]}>
      <div className={styles["col-1"]}>
        <ul>
          <a href="tel:98" target="_blank" rel="noopener noreferrer">
            {" "}
            <li>
              {/* phone icon*/}
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48zm-16.39 307.37l-15 65A15 15 0 0 1 354 416C194 416 64 286.29 64 126a15.7 15.7 0 0 1 11.63-14.61l65-15A18.23 18.23 0 0 1 144 96a16.27 16.27 0 0 1 13.79 9.09l30 70A17.9 17.9 0 0 1 189 181a17 17 0 0 1-5.5 11.61l-37.89 31a231.91 231.91 0 0 0 110.78 110.78l31-37.89A17 17 0 0 1 299 291a17.85 17.85 0 0 1 5.91 1.21l70 30A16.25 16.25 0 0 1 384 336a17.41 17.41 0 0 1-.39 3.37z"></path>
              </svg>
              +9779841465102
            </li>
          </a>

          <a
            href="mailto:dr.karki54@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              {/* email icon*/}
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM178.117 262.104C87.429 196.287 88.353 196.121 64 177.167V152c0-13.255 10.745-24 24-24h272c13.255 0 24 10.745 24 24v25.167c-24.371 18.969-23.434 19.124-114.117 84.938-10.5 7.655-31.392 26.12-45.883 25.894-14.503.218-35.367-18.227-45.883-25.895zM384 217.775V360c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24V217.775c13.958 10.794 33.329 25.236 95.303 70.214 14.162 10.341 37.975 32.145 64.694 32.01 26.887.134 51.037-22.041 64.72-32.025 61.958-44.965 81.325-59.406 95.283-70.199z"></path>
              </svg>
              dr.karki54@gmail.com
            </li>
          </a>
        </ul>
      </div>
      <div className={styles["col-2"]}>
        <ul>
          <a
            href="https://www.facebook.com/nynca2040"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              {/* facebook icon*/}
              <svg
                className={styles["facebook"]}
                aria-hidden="true"
                width={30}
                height={30}
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path>
              </svg>
            </li>
          </a>

          <a
            href="https://wa.me/9779841465102"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li>
              {/*whatsapp icon */}
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path>
              </svg>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
}
