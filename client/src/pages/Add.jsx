import { useNavigate } from 'react-router-dom';
import styles from '../styles/Add.module.css';
import InputField from '../components/addComponents/InputField';
import DownBtn from '../components/addComponents/DownBtn';
import TextArea from '../components/addComponents/TextArea';
import { useState } from 'react';

function Add() {
  const navigate = useNavigate()

  const {name, setName} = useState("")
  const {price, setPrice} = useState("")
  const {rate, setRate} = useState("")
  const {description, setDescription} = useState("")

  function goToHomePage(){
    navigate("/")
  }

  fun

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerProducts}>
        <div className={styles.upCard}>
          <div className={styles.imgCard}>

          </div>
          <div className={styles.infoCard}>
            <InputField placeholder="Name" onChange={e}/>
            <InputField placeholder="Price" onChange={e}/>
            <InputField placeholder="Rate" onChange={e}/>
          </div>
        </div>
        <div className={styles.downCard}>
          <TextArea placeholder="Write the product description..."/>
          <div className={styles.downBtn}>
            <DownBtn onClick={goToHomePage}>Back</DownBtn>
            <DownBtn onClick={eventHandler}>Create</DownBtn>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Add