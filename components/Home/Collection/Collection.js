import styles from './Collection.module.css'
import { useState, useEffect } from 'react'
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
    const [isSSR, setIsSSR] = useState(false)

    useEffect(() => {
        setIsSSR(true)
    }, [])
    return (
        isSSR &&
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
                    <div className={`${styles.row} ${styles.dropdown}`}>
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
                            <h5>Shop By Style</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/band.jpg" width={40} height={40} />
                                    Bands
                                </li>
                                <li>
                                    <Image src="/muilty-finger.jpg" width={40} height={40} />
                                    Multi Finger
                                </li>
                                <li>
                                    <Image src="/solitaire.jpg" width={40} height={40} />
                                    Solitaire
                                </li>
                                <li>
                                    <Image src="/broad.jpg" width={40} height={40} />
                                    Broad Rings
                                </li>
                                <li>
                                    <Image src="/for-men.jpg" width={40} height={40} />
                                    For men
                                </li>
                                <li>
                                    <Image src="/casual_2.jpg" width={40} height={40} />
                                    Casual
                                </li>
                                <li>
                                    <Image src="/stackable.jpg" width={40} height={40} />
                                    Stackable
                                </li>
                                <li>
                                    <Image src="/cocktail.jpg" width={40} height={40} />
                                    Cocktail
                                </li>
                                <li>
                                    <Image src="/eternity.jpg" width={40} height={40} />
                                    Eternity
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Wearing Type</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/Daily-Wear-icon.jpg" width={40} height={40} />
                                    Daily Wear
                                </li>
                                <li>
                                    <Image src="/office-wear_7.jpg" width={40} height={40} />
                                    Office Wear
                                </li>
                                <li>
                                    <Image src="/casual-wear_3.jpg" width={40} height={40} />
                                    Casual Wear
                                </li>
                                <li>
                                    <Image src="/party-wear_6.jpg" width={40} height={40} />
                                    Party Wear
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Metal</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/yellow-gold.jpg" width={40} height={40} />
                                    Yellow Gold
                                </li>
                                <li>
                                    <Image src="/white-gold.png" width={40} height={40} />
                                    White Gold
                                </li>
                                <li>
                                    <Image src="/rose-gold.png" width={40} height={40} />
                                    Rose Gold
                                </li>
                                <li>
                                    <Image src="/two-tone.jpg" width={40} height={40} />
                                    Two Tone
                                </li>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    GOLD
                    <div className={`${styles.row} ${styles.dropdown}`}>
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
                                    Bangles
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
                            <h5>Shop By Style</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/gold_gold_band.jpg" width={40} height={30} />
                                    Bands
                                </li>
                                <li>
                                    <Image src="/gold_stacable.jpg" width={40} height={30} />
                                    Stackable
                                </li>
                                <li>
                                    <Image src="/gold_cocktail.jpg" width={40} height={30} />
                                    Cocktail
                                </li>
                                <li>
                                    <Image src="/gold_gold_broad.jpg" width={40} height={30} />
                                    Broad Rings
                                </li>
                                <li>
                                    <Image src="/gold_for-men.jpg" width={40} height={30} />
                                    For men
                                </li>
                                <li>
                                    <Image src="/gold_casual.jpg" width={40} height={30} />
                                    Casual
                                </li>
                                <li>
                                    <Image src="/gold_solitaire.jpg" width={40} height={30} />
                                    Single Stone
                                </li>
                                <li>
                                    <Image src="/gold_cocktail.jpg" width={40} height={30} />
                                    Two Headed
                                </li>
                                <li>
                                    <Image src="/gold_eternity.jpg" width={40} height={30} />
                                    Eternity
                                </li>
                                <li>
                                    <Image src="/gold_for-kids.jpg" width={40} height={30} />
                                    For Kids
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Wearing Type</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/gold_daily-wear.jpg" width={40} height={30} />
                                    Daily Wear
                                </li>
                                <li>
                                    <Image src="/gold_office-wear.jpg" width={40} height={30} />
                                    Office Wear
                                </li>
                                <li>
                                    <Image src="/gold_casual-wear.jpg" width={40} height={30} />
                                    Casual Wear
                                </li>
                                <li>
                                    <Image src="/gold_party-wear.jpg" width={40} height={30} />
                                    Party Wear
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Metal</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/gold_yellow-gold.jpg" width={40} height={30} />
                                    Yellow Gold
                                </li>
                                <li>
                                    <Image src="/gold_rose-gold.png" width={40} height={30} />
                                    Rose Gold
                                </li>
                                <li>
                                    <Image src="/gold_two-tone.jpg" width={40} height={30} />
                                    Two Tone
                                </li>
                                <li>
                                    <Image src="/gold_two-tone2.jpg" width={40} height={30} />
                                    Three Tone
                                </li>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    PLATINUM
                    <div className={`${styles.row} ${styles.dropdown}`}>
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
                            <h5>Shop By Style</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/platinum_band.jpg" width={40} height={30} />
                                    Bands
                                </li>
                                <li>
                                    <Image src="/platinum_casual.jpg" width={40} height={30} />
                                    Casual
                                </li>
                                <li>
                                    <Image src="/platinum_solitaire.jpg" width={40} height={30} />
                                    Solitaire
                                </li>
                                <li>
                                    <Image src="/platinum_two-headed.jpg" width={40} height={30} />
                                    Two Headed
                                </li>
                                <li>
                                    <Image src="/platinum_eternity.jpg" width={40} height={30} />
                                    Eternity
                                </li>
                                <li>
                                    <Image src="/platinum_for-men.jpg" width={40} height={30} />
                                    For men
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Ocassion</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/platinum_daily-wear.jpg" width={40} height={30} />
                                    Daily Wear
                                </li>
                                <li>
                                    <Image src="/platinum_office-wear.jpg" width={40} height={30} />
                                    Office Wear
                                </li>
                                <li>
                                    <Image src="/platinum_casual2.jpg" width={40} height={30} />
                                    Casual Wear
                                </li>
                                <li>
                                    <Image src="/platinum_party-wear.jpg" width={40} height={30} />
                                    Party Wear
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Metal</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image src="/platinum_platinum.jpg" width={40} height={30} />
                                    Platinum
                                </li>
                            </div>
                        </div>
                    </div>
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