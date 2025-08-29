import styles from '../../styles/Add.module.css';

function InputField({ placeholder, type = "text", onChange, value }) {
    return (
        <div className={styles.descCard}> 
            <input 
                type={type} 
                placeholder={placeholder}
                onChange={onChange}    
                value={value}
            /> 
        </div>
    )
}

export default InputField;