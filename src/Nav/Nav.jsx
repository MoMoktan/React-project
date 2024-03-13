import styles from './Nav.module.css'

function Nav(){
    return(

        <nav className={styles.navbar}>
            <ul>
                <li> Home </li>
                <li> About</li>
                <li> Review</li>
                <li> Contacts</li>
            </ul>
        </nav>
    )
}
export default Nav