import { useNavigate } from 'react-router-dom';
import styles from '../styles/Add.module.css';
import "../styles/global.css"

function Add() {
  const navigate = useNavigate()

  function goToHomePage(){
    navigate("/")
  }

  return (
    <div className="container-main">
      <div className="container-products">
        
      </div>
    </div>
  )
}

export default Add