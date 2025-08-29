import styles from '../../styles/Add.module.css';

function TextArea({ placeholder, maxLength = 150 }) {
    return (
        <div className={styles.description}>
            <textarea placeholder={placeholder} maxLength={maxLength}/>
        </div>
    )
}

export default TextArea;