import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

import styles from './IconsReact.module.css'

const IconsReact = () => {
  return (
    <div>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>

      <p>Ola, Mundo!</p>
    </div>
  );
};

export default IconsReact;
