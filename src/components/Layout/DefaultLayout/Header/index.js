import styles from './Header.module.scss'

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <div className={styles.container}>
                    <div className={styles.info}>
                        <img src="src/static/images/logo.png" alt="" className={styles.logo}/>
                        <p className={styles.time}><i className="fa-regular fa-clock"></i>09:30 - 21:30</p>
                        <a href="" className={styles.phone}><i className="fa-solid fa-phone"></i>0357 83 4444</a>
                    </div>
                    <div className={styles.social}>
                        <ul>
                            <li><a href="" className={styles.aTag}>YouTube</a></li>
                            <li><a href="" className={styles.aTag}>Facebook</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <ul>
                        <li><a href="" className={styles.navItem}>Vape Store <i className="fa-solid fa-angle-down"></i></a></li>
                        <li><a href="" className={styles.navItem}>Vape Store <i className="fa-solid fa-angle-down"></i></a></li>
                        <li><a href="" className={styles.navItem}>Vape Store <i className="fa-solid fa-angle-down"></i></a></li>
                        <li><a href="" className={styles.navItem}>Vape Store <i className="fa-solid fa-angle-down"></i></a></li>
                        <li><a href="" className={styles.navItem}><i className="fa-sharp fa-solid fa-magnifying-glass"></i></a></li>
                    </ul>
                </div>
            </div>
            
        </div>
        )
}

export default Header
