import styles from './Trending.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Trending = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header_wrapper}>
                    <div className={styles.logo}>
                        <Image src="/logo.png" layout='fill' />
                    </div>
                    <div className={styles.quality_highlight}>
                        TESTED & CERTIFIED
                        <div className={styles.quality_mandla}>
                            <Image src="/mandla.png" layout="fill" />
                        </div>
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.quality}>
                        INSURED
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.quality}>
                        HALLMARK
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className={styles.quality}>
                        COMPLETE TRANSPARENCY
                    </div>
                </div>
                <div className={styles.trending_wrapper}>
                    <div className={styles.trending_img}>
                        <Image src="/trending.png" layout='fill'></Image>
                    </div>
                    <div className={styles.trending_title}>
                        <h2>Trending</h2>
                        <h4>Crafted
                            on the
                            ethos to
                            create,
                            unfettered
                            imagination!
                        </h4>
                        <Link href="#">
                            <div className={`${styles.button} button_primary`}>
                                Discover me
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trending