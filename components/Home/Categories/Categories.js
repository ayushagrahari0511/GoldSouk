import styles from './Categories.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
    return (
        <div className={styles.wrapper}>
            <h2>Categories</h2>
            <div className={styles.category}>
                <div className={styles.img}>
                    <Image src="/earring.png" layout="fill" />
                </div>
                <div className={styles.cat_name}>
                    <h3>Earring</h3>
                    <Link href="#">
                        <div className={styles.link}>
                            Explore
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categories