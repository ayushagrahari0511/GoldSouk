import styles from './Contact.module.css'
import { BsTelephone as Phone, BsEnvelope as Mail } from 'react-icons/bs'
import Image from 'next/image'

const Contact = () => {
    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <aside className={styles.contact}>
                    <div>
                        <Phone className={styles.phone} />
                        <h6>123-456-7890</h6>
                    </div>
                    <div>
                        <Mail className={styles.mail} />
                        <h6>lovemore@wecare.com</h6>
                    </div>
                </aside>
                <aside className={styles.right_div}>
                    <div className={styles.img}>
                        <Image src="/ico.png" layout='fill' />
                    </div>
                </aside>
            </div>
        </main>
    )
}

export default Contact