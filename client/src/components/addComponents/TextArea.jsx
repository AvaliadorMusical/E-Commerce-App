import styles from '../../styles/Add.module.css';

function TextArea({ placeholder, value, maxLength = 150, onChange }) {
    return (
        <div className={styles.description}>
            <textarea 
                placeholder={placeholder} 
                maxLength={maxLength} 
                onChange={onChange}
                value={value}
                
            />
        </div>
    )
}

export default TextArea;