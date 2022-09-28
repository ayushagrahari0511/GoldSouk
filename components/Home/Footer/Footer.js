import styles from './Footer.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebookF, } from 'react-icons/fa'
import { FiYoutube, FiInstagram } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <footer className={styles.container}>
                <h1>Find us here</h1>
                <h3>#2, know my road, you can find me, here - 000000.</h3>
                <h5>Subscribe to our newsletter to keep updated</h5>
                <div className={styles.form}>
                    <input type="email" name="email" id="email" />
                    <button>Submit</button>
                </div>
                <div className={styles.social_links}>
                    <li>
                        <Link href="#">
                            <FaFacebookF className={styles.social_icons} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FiYoutube className={styles.social_icons} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <FiInstagram className={styles.social_icons} />
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <BsTwitter className={styles.social_icons} />
                        </Link>
                    </li>
                </div>
                <div className={styles.links}>
                    <li>
                        <Link href="#">Get To Know Us</Link>
                    </li>
                    <li>
                        <Link href="#">Help</Link>
                    </li>
                    <li>
                        <Link href="#">Useful Links</Link>
                    </li>
                    <li>
                        <Link href="#">Support</Link>
                    </li>
                    <li>
                        <Link href="#">FAQ’s</Link>
                    </li>
                    <li>
                        <Link href="#">T & C</Link>
                    </li>
                </div>
                <h6>Copyright text ll appear here at 2022</h6>
            </footer>
        </div>
    )
}

export default Footer