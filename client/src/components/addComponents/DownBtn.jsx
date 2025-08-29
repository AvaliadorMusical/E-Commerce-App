import styles from '../../styles/Add.module.css';

function DownBtn({ onClick, children }) {
    return (
        <button 
            className={styles.mainBtn} 
            onClick={onClick}
        >
            {children}
         </button>
    )
}

export default DownBtn;