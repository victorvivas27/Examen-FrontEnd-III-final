
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import { faFacebook, faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faHouse, faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const FOOTER_SECTION = [
  {
    title: "Redes Sociales",
    links: [
      { name: <FontAwesomeIcon icon={faFacebook} style={{ fontSize: 30 }} />, path: "https://www.facebook.com", internal: false },
      { name: <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: 30 }} />, path: "https://twitter.com", internal: false },
      { name: <FontAwesomeIcon icon={faInstagram} style={{ fontSize: 30 }} />, path: "https://www.instagram.com", internal: false },
      { name: <FontAwesomeIcon icon={faTiktok} style={{ fontSize: 30 }} />, path: "https://www.tiktok.com/es/", internal: false }
    ]
  },
  {
    title: "Contacto",
    links: [
      { name: <AlternateEmailOutlinedIcon style={{ fontSize: 30 }} />, path: "mailto:info@ejemplo.com", internal: false },
      { name: <FontAwesomeIcon icon={faPhone} style={{ fontSize: 30 }} />, path: "", internal: false },

    ]
  },
  {
    title: "Productos",
    links: [
      { name: <FontAwesomeIcon icon={faHouse} style={{ fontSize: 30 }} />, path: "/", internal: true },
      { name: <FontAwesomeIcon icon={faComment} style={{ fontSize: 30 }} />, path: "/contact", internal: true },
      { name: <FontAwesomeIcon icon={faHeart} style={{ fontSize: 30 }} />, path: "/favs", internal: true },
    ]
  }
];