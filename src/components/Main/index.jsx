import styles from './Main.module.css'

const Main = () => {
    <div className={styles.mainContainer}>
        <ul className={styles.mainList}>
            <li><a href="/">Gadgeds and accessories</a></li>
            <hr />
            <li><a href="/">Appliances</a></li>
            <hr />
            <li><a href="/">Other</a></li>
        </ul>
    </div>
}

export default Main