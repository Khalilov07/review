import styles from './header.module.css'

import { Link } from 'react-router-dom';

const Header = () => {

    console.log(styles);

    // module css

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.header__list}>
                    <li>
                        <Link to='/'>
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link to='/about'>
                            ABOUT
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;