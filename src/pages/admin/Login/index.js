import styles from './AdminLogin.module.scss'



function AdminLogin() {
    return (
        <div className={styles.container}>
            <div className={styles.loginForm}>
                <div className={styles.form}>
                    <div className={styles.displayCenter}>
                        <label className={styles.title}>Admin login</label>
                    </div>
                    <input className={styles.input} id='username' type="text" name="username" placeholder="Enter your email"/>  
                    <br/>
                    <input className={styles.input} id='password' type="password" name="password" placeholder="Enter your password"/> 
                    <br/>
                    <div className={styles.displayCenter}><button className={styles.button}>Login</button> </div>
                </div>
            </div >  
        </div>
    )
}

export default AdminLogin
