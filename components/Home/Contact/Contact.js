import styles from './Contact.module.css'
import { BsTelephone as Phone, BsEnvelope as Mail } from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const Contact = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <aside className={styles.contact}>
                    <div>
                        <Phone className={styles.phone} />
                        <h6>+971 - 50 -0000000</h6>
                    </div>
                    <div>
                        <Mail className={styles.mail} />
                        <h6>info@goldsouk.com</h6>
                    </div>
                </aside>
                <aside className={styles.right_div}>
                    {/* <div className={styles.img}>
                        <Image src="/ico.png" layout='fill' />
                    </div> */}
                    <div className={styles.list}>
                        <li>
                            <Link href="#">About</Link>
                        </li>
                        <li>
                            <Link href="#">Profile</Link>
                        </li>
                        <li>
                            <Link href="#">Login</Link>
                        </li>
                        <li>
                            <u>
                                EN
                            </u>
                        </li>
                        <li>
                            <div>
                                <HiOutlineShoppingBag className={styles.icon} />
                            </div>
                        </li>
                    </div>

                </aside>
            </div>
        </main>
    )
}

export default Contact