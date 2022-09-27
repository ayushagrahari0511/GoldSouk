import styles from './Landing.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
import Collection from '../Collection/Collection'

const Landing = () => {
    return (
        <main className={styles.wrapper}>
            <Collection />
            {/* <Navbar /> */}
            <div className={styles.container}>
                <aside className={styles.left_side}>
                    <div className={styles.img}>
                        <Image src="/image.jpeg" layout='fill' priority />
                    </div>
                </aside>
                <aside className={styles.right_side}>
                    <h3>Bring home the
                        perfection, crafted to
                        let your story shine
                    </h3>
                    <h6>
                        looks to the heavens for inspiration
                    </h6>
                    <Link href="#">
                        <div className={`${styles.button} button_primary`}>
                            Discover me
                        </div>
                    </Link>
                </aside>
            </div>
            <div className={styles.rangoli}>
                <Image src="/rangoli.png" layout='fill' />
            </div>
            <div className={styles.blurred}></div>
        </main>
    )
}

export default Landing