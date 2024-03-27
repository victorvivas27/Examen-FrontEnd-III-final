import { useMyContextGlobal } from "../../../context/global.context";
import { Back } from "../../../utils/back-forward/Back"
import Form from "../../common/form/Form"
import "./Contact.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


const Contact = () => {
  const { state, dispatch } = useMyContextGlobal();
  const getThemeClass = () => {
    return state.theme ? 'light' : 'dark';
  };
  return (
    <div className='container-contact'>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <div className="form">
        <strong className={getThemeClass()} onClick={() => dispatch({ type: 'CHANGE_THEME' })}>
          {state.icontheme ? <DarkModeIcon /> : <LightModeIcon />}
        </strong>
        <Form />
      </div>
      <Back />
    </div>
  )
}

export default Contact