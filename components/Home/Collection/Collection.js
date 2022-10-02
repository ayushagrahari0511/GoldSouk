import styles from './Collection.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'

const Collection = () => {
    const [isSSR, setIsSSR] = useState(false)
    const [rate, setRate] = useState({
        goldRate: 0,
        silverRate: 0,
    })

    useEffect(() => {
        const controller = new AbortController();
        async function fetch() {
            try {
                const { data } = await axios.get(`http://backend.bizinnovisiondev.co:5000/api/goldRate`, { signal: controller.signal })
                setRate({
                    goldRate: data.rate.goldRate,
                    silverRate: data.rate.silverRate
                })

                console.log(data)

            }
            catch (err) {
                console.log(err.message)
            }
        }
        fetch()
        return () => {
            controller.abort();
        }
    }, [])


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
                                <Image alt="img" src="/solitaire_ring.webp" layout="fill" />
                            </div>
                        </div>
                        <div className={styles.vertical}></div>
                        <Link href={`http://bizinnovisiondev.co:88/category/Earrings`}>
                            <div className={styles.category}>
                                <h3>SOLITAIRE EARRINGS</h3>
                                <div className={styles.cat_img}>
                                    <Image alt="img" src="/solitaire_earring.webp" layout="fill" />
                                </div>
                            </div>
                        </Link>
                        <div className={styles.vertical}></div>
                        <div className={styles.category}>
                            <h3>SOLITAIRE PENDANT</h3>
                            <div className={styles.cat_img}>
                                <Image alt="img" src="/solitaire_pendant.webp" layout="fill" />
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
                                    <Image alt="img" src="/band.jpg" width={40} height={40} />
                                    Bands
                                </li>
                                <li>
                                    <Image alt="img" src="/muilty-finger.jpg" width={40} height={40} />
                                    Multi Finger
                                </li>
                                <li>
                                    <Image alt="img" src="/solitaire.jpg" width={40} height={40} />
                                    Solitaire
                                </li>
                                <li>
                                    <Image alt="img" src="/broad.jpg" width={40} height={40} />
                                    Broad Rings
                                </li>
                                <li>
                                    <Image alt="img" src="/for-men.jpg" width={40} height={40} />
                                    For men
                                </li>
                                <li>
                                    <Image alt="img" src="/casual_2.jpg" width={40} height={40} />
                                    Casual
                                </li>
                                <li>
                                    <Image alt="img" src="/stackable.jpg" width={40} height={40} />
                                    Stackable
                                </li>
                                <li>
                                    <Image alt="img" src="/cocktail.jpg" width={40} height={40} />
                                    Cocktail
                                </li>
                                <li>
                                    <Image alt="img" src="/eternity.jpg" width={40} height={40} />
                                    Eternity
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Wearing Type</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image alt="img" src="/Daily-Wear-icon.jpg" width={40} height={40} />
                                    Daily Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/office-wear_7.jpg" width={40} height={40} />
                                    Office Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/casual-wear_3.jpg" width={40} height={40} />
                                    Casual Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/party-wear_6.jpg" width={40} height={40} />
                                    Party Wear
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Metal</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image alt="img" src="/yellow-gold.jpg" width={40} height={40} />
                                    Yellow Gold
                                </li>
                                <li>
                                    <Image alt="img" src="/white-gold.png" width={40} height={40} />
                                    White Gold
                                </li>
                                <li>
                                    <Image alt="img" src="/rose-gold.png" width={40} height={40} />
                                    Rose Gold
                                </li>
                                <li>
                                    <Image alt="img" src="/two-tone.jpg" width={40} height={40} />
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
                                    <Image alt="img" src="/gold_gold_band.jpg" width={40} height={30} />
                                    Bands
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_stacable.jpg" width={40} height={30} />
                                    Stackable
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_cocktail.jpg" width={40} height={30} />
                                    Cocktail
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_gold_broad.jpg" width={40} height={30} />
                                    Broad Rings
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_for-men.jpg" width={40} height={30} />
                                    For men
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_casual.jpg" width={40} height={30} />
                                    Casual
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_solitaire.jpg" width={40} height={30} />
                                    Single Stone
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_cocktail.jpg" width={40} height={30} />
                                    Two Headed
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_eternity.jpg" width={40} height={30} />
                                    Eternity
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_for-kids.jpg" width={40} height={30} />
                                    For Kids
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Wearing Type</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image alt="img" src="/gold_daily-wear.jpg" width={40} height={30} />
                                    Daily Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_office-wear.jpg" width={40} height={30} />
                                    Office Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_casual-wear.jpg" width={40} height={30} />
                                    Casual Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_party-wear.jpg" width={40} height={30} />
                                    Party Wear
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Metal</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image alt="img" src="/gold_yellow-gold.jpg" width={40} height={30} />
                                    Yellow Gold
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_rose-gold.png" width={40} height={30} />
                                    Rose Gold
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_two-tone.jpg" width={40} height={30} />
                                    Two Tone
                                </li>
                                <li>
                                    <Image alt="img" src="/gold_two-tone2.jpg" width={40} height={30} />
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
                                    <Image alt="img" src="/platinum_band.jpg" width={40} height={30} />
                                    Bands
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_casual.jpg" width={40} height={30} />
                                    Casual
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_solitaire.jpg" width={40} height={30} />
                                    Solitaire
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_two-headed.jpg" width={40} height={30} />
                                    Two Headed
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_eternity.jpg" width={40} height={30} />
                                    Eternity
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_for-men.jpg" width={40} height={30} />
                                    For men
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Ocassion</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image alt="img" src="/platinum_daily-wear.jpg" width={40} height={30} />
                                    Daily Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_office-wear.jpg" width={40} height={30} />
                                    Office Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_casual2.jpg" width={40} height={30} />
                                    Casual Wear
                                </li>
                                <li>
                                    <Image alt="img" src="/platinum_party-wear.jpg" width={40} height={30} />
                                    Party Wear
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Metal</h5>
                            <div className={styles.list}>
                                <li>
                                    <Image alt="img" src="/platinum_platinum.jpg" width={40} height={30} />
                                    Platinum
                                </li>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    GOLD COINS
                    <div className={`${styles.row} ${styles.dropdown}`}>
                        <div className={styles.sub_category}>
                            <li>
                                <Link href="#">
                                    Shop By Type
                                </Link>
                            </li>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>999.9</h5>
                            <div className={styles.list}>
                                <li>
                                    5g
                                </li>
                                <li>
                                    10g
                                </li>
                                <li>
                                    20g
                                </li>
                                <li>
                                    50g
                                </li>
                                <li>
                                    100g
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>999</h5>
                            <div className={styles.list}>
                                <li>
                                    1g
                                </li>
                                <li>
                                    2g
                                </li>
                                <li>
                                    3g
                                </li>
                                <li>
                                    3.5g
                                </li>
                                <li>
                                    5g
                                </li>
                                <li>
                                    8g
                                </li>
                                <li>
                                    10g
                                </li>
                                <li>
                                    20g
                                </li>
                                <li>
                                    50g
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>916</h5>
                            <div className={styles.list}>
                                <li>
                                    1g
                                </li>
                                <li>
                                    2g
                                </li>
                                <li>
                                    5g
                                </li>
                                <li>
                                    8g
                                </li>
                                <li>
                                    10g
                                </li>
                                <li>
                                    20g
                                </li>
                                <li>
                                    50g
                                </li>
                            </div>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Designer Coin</h5>
                            <div className={styles.list}>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    WATCHES
                    <div className={`${styles.row} ${styles.dropdown}`}>
                        <div className={styles.sub_category}>
                            <li>
                                <Link href="#">
                                    Shop By Brand
                                </Link>
                            </li>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Brands</h5>
                            <div className={styles.list}>
                                <li>
                                    TAG Heuer
                                </li>
                                <li>
                                    Rado
                                </li>
                                <li>
                                    Calvin Klein
                                </li>
                                <li>
                                    Seiko
                                </li>
                                <li>
                                    Fossil
                                </li>
                                <li>
                                    Alba
                                </li>
                                <li>
                                    Longines
                                </li>
                                <li>
                                    Tissot
                                </li>
                                <li>
                                    MK
                                </li>
                                <li>
                                    Garmin
                                </li>
                                <li>
                                    Skagen
                                </li>
                                <li>
                                    GUESS
                                </li>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    GIFTS
                    <div className={`${styles.row} ${styles.dropdown}`}>
                        <div className={styles.sub_category}>
                            <li>
                                <Link href="#">
                                    Occasion
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Recommendations
                                </Link>
                            </li>
                            <li>
                                <Link href="#">
                                    Collection
                                </Link>
                            </li>
                        </div>
                        <div className={styles.shop_style}>
                            <h5>Shop By Ocassion</h5>
                            <div className={styles.list}>
                                <li>
                                    Birthday
                                </li>
                                <li>
                                    Wedding
                                </li>
                                <li>
                                    Mothers Day
                                </li>
                                <li>
                                    Valentine
                                </li>
                                <li>
                                    Rakshabandhan
                                </li>
                                <li>
                                    Engagement
                                </li>
                                <li>
                                    Womens Day
                                </li>
                                <li>
                                    Baby Birth
                                </li>
                                <li>
                                    Festive Gift
                                </li>
                                <li>
                                    Anniversary
                                </li>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    GIFT CARDS
                </li>
                <li className={styles.gold_wrapper}>
                    GOLD RATE
                    <div className={styles.gold_rate}>
                        <h5>{`Today's Gold Rate`}</h5>
                        <div className={styles.rate}>
                            <h6>24 KT-</h6>
                            <p>USD. {parseFloat(rate.goldRate * 24 / 24).toFixed(2)}/g</p>
                        </div>
                        <div className={styles.rate}>
                            <h6>22 KT-</h6>
                            <p>USD. {parseFloat(rate.goldRate * 22 / 24).toFixed(2)}/g</p>
                        </div>
                        <h6>
                            Updated on: {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                        </h6>
                    </div>
                </li>
            </div>
        </div>
    )
}

export default Collection