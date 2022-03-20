import styles from "./desktop-nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DesktopNav({ navLinksArray, isSqueeze }) {
  const router = useRouter();
  return (
    <div
      className={`${styles.desktop_nav} ${
        isSqueeze && styles.desktop_nav__squeeze
      } `}
    >
      <h1>INSTITUTE OF NATURAL MEDICINE</h1>
      <nav>
        <ul>
          {/* deduce all the navigation links from navLinksArray */}
          {navLinksArray.map((link, index) => (
            <li key={index}>
              <Link href={link[0]}>
                <a className={router.pathname === link[0] ? styles.active : ""}>
                  {link[1]}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
