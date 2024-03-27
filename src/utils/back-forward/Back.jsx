import React from 'react'
import { useNavigate } from 'react-router-dom';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import { useMyContextGlobal } from '../../context/global.context';
import "./Back.css"


export const Back = () => {
  const navigate = useNavigate();
  const { state } = useMyContextGlobal();
  const getThemeClass = () => {
    return state.theme ? 'light' : 'dark';
  };
  const volver = () => {
    navigate(-1)
  };
  return (
    <span onClick={volver}  >
      <ReplyRoundedIcon className={`volver ${getThemeClass()}`} style={{ fontSize: 60 }} /></span>
  )
}
