import Image from "next/image"
import styles from './Watch.module.css'
import Link from 'next/link'

const Watch = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img_background}>
                <div className={styles.img}>
                    <Image src="/watch-img.png" layout="fill"></Image>
                </div>
                <div className={styles.desc}>
                    <h5>
                        Crafted on the ethos to create, unfettered imagination! Crafted on the ethos to create,
                        unfettered imagination! Crafted on the ethos to create, unfettered imagination! Crafted
                        on the ethos to create, unfettered imagination! Crafted on the ethos to create, unfettered
                        imagination! Crafted on the ethos to create, unfettered imagination!
                    </h5>
                    <Link href="#">
                        <div className={`${styles.links} link`}>
                            Know more
                        </div>
                    </Link>
                </div>
            </div>
            <h1>Watch</h1>
        </div>
    )
}

export default Watch