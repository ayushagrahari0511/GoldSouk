import styles from './Landing.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../Navbar/Navbar'
import Collection from '../Collection/Collection'
// import Collection from '../../Collection'
import { motion } from 'framer-motion'
import { fadeInUp, fadeInRight, fadeInLeft } from '../../../vaiants'

const Landing = () => {
    return (
        <main className={styles.wrapper}>
            {/* <Collection /> */}
            {/* <Navbar /> */}
            <div className={styles.container}>
                <aside className={styles.left_side}>
                    <motion.div
                        variants={fadeInRight}
                        initial="initial"
                        animate="animate"
                    >
                        <div className={styles.img}>
                            <Image src="/image.jpeg" layout='fill' priority />
                        </div>
                    </motion.div>
                </aside>
                <aside className={styles.right_side}>
                    <motion.h3
                        variants={fadeInLeft}
                        initial="initial"
                        animate="animate">Bring home the
                        perfection, crafted to
                        let your story shine
                    </motion.h3>
                    <motion.h6
                    variants={fadeInLeft}
                    initial="initial"
                    animate="animate">
                        looks to the heavens for inspiration
                    </motion.h6>
                    <Link href="#">
                        <motion.div
                            variants={fadeInUp}
                            initial="initial"
                            animate="animate"
                            className={`${styles.button} button_primary`} >
                            Discover me
                        </motion.div>
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