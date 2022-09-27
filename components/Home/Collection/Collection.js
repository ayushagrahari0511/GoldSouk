import styles from './Collection.module.css'
import Image from 'next/image'
import Link from 'next/link'

const collection = [
    {
        _id: 1,
        title: "SOLITAIRES",
        subCategory: [
            {
                _id: 1,
                title: "RINGS",
                img: "/solitaire_ring.webp"
            },
            {
                _id: 2,
                title: "EARRINGS",
                img: "/solitaire_earring.webp"
            },
            {
                _id: 3,
                title: "PENDANTS",
                img: "/solitaire_pendant.webp"
            }
        ]
    },
    {
        _id: 2,
        title: "DIAMOND"
    },
    {
        _id: 3,
        title: "GOLD"
    },
    {
        _id: 4,
        title: "PLATINUM"
    },
    {
        _id: 5,
        title: "GOLD COINS"
    },
    {
        _id: 6,
        title: "WATCHES"
    },
    {
        _id: 7,
        title: "GIFTS"
    },
    {
        _id: 8,
        title: "GIFTS CARDS"
    },
    {
        _id: 9,
        title: "GOLD RATE"
    },
]
const Collection = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <li>
                    SOLITAIRES
                    <div className={styles.dropdown}>
                        <div className={styles.category}>
                            <h3>SOLITAIRE RINGS</h3>
                            <div className={styles.cat_img}>
                                <Image src="/solitaire_ring.webp" layout="fill" />
                            </div>
                        </div>
                        <div className={styles.vertical}></div>
                        <Link href={`http://bizinnovisiondev.co:88/category/Earrings`}>
                            <div className={styles.category}>
                                <h3>SOLITAIRE EARRINGS</h3>
                                <div className={styles.cat_img}>
                                    <Image src="/solitaire_earring.webp" layout="fill" />
                                </div>
                            </div>
                        </Link>
                        <div className={styles.vertical}></div>
                        <div className={styles.category}>
                            <h3>SOLITAIRE PENDANT</h3>
                            <div className={styles.cat_img}>
                                <Image src="/solitaire_pendant.webp" layout="fill" />
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    DIAMOND
                    <div className={`${styles.dropdown} ${styles.row}`}>
                        <div className={styles.sub_category}>
                            <li>
                                <Link href="#">
                                    Ring
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Earring
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Pendant
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Nosepin
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Necklace
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Bangle
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Bracelet
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    MangalSutra
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Collection
                                </Link>
                            </li>
                        </div>
                        <div className={styles.shop_style}>
        
                        </div>
                    </div>
                </li>
                <li>
                    GOLD
                </li>
                <li>
                    PLATINUM
                </li>
                <li>
                    GOLD COINS
                </li>
                <li>
                    WATCHES
                </li>
                <li>
                    GIFTS
                </li>
                <li>
                    GIFT CARDS
                </li>
                <li>
                    GOLD RATE
                </li>
            </div>
        </div>
    )
}

export default Collection