import styles from './Collection.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { data } from './data'

const Collection = () => {
    const [isSSR, setIsSSR] = useState(false)
    const [collection, setCollection] = useState(0);
    const [category, setCategory] = useState(0);
    const [rate, setRate] = useState({
        goldRate: 0,
        silverRate: 0,
    })

    console.log(collection)

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
                <li onMouseEnter={() => setCollection("SOLITAIRES")}>
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
                        <div className={styles.vertical}></div>
                        <div className={styles.category}>
                            <h3>BUY LOOSE DIAMOND</h3>
                            <div className={styles.diamond_list}>
                                <div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/round.svg" layout="fill"></Image>
                                    </div>
                                    ROUND
                                </div>
                                <div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/cushion.svg" layout="fill"></Image>
                                    </div>
                                    CUSHION
                                </div><div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/princess.svg" layout="fill"></Image>
                                    </div>
                                    PRINCESS
                                </div><div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/oval.svg" layout="fill"></Image>
                                    </div>
                                    OVAL
                                </div><div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/heart.svg" layout="fill"></Image>
                                    </div>
                                    HEART
                                </div><div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/radian.svg" layout="fill"></Image>
                                    </div>
                                    RADIANT
                                </div><div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/emerald.svg" layout="fill"></Image>
                                    </div>
                                    EMERALD
                                </div><div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/marquise.svg" layout="fill"></Image>
                                    </div>
                                    MARQUISE
                                </div><div>
                                    <div className={styles.loose_diamond}>
                                        <Image src="/pear.svg" layout="fill"></Image>
                                    </div>
                                    PEAR
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                {
                    data.map((item, i) => (
                        <li key={i} onMouseEnter={() => setCollection(i)} onMouseLeave={() => setCategory(0)}>
                            {item.title}
                            <div className={`${styles.row} ${styles.dropdown}`}>
                                <div className={styles.sub_category}>
                                    {
                                        item.category.map((cat, i) => (
                                            <li onMouseEnter={() => setCategory(i)} key={i} >{cat.title}</li>
                                        ))
                                    }
                                </div>
                                <div className={styles.shop_style}>
                                    <h5>Shop By Style</h5>
                                    <div className={styles.list}>
                                        {
                                            item.category[category]?.shopByStyle?.map((item, i) => (
                                                <li key={i}>
                                                    {
                                                        item.img &&
                                                        <Image alt="img" src={item.img} width={40} height={30} />
                                                    }                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={styles.shop_style}>
                                    <h5>Wearing Type</h5>
                                    <div className={styles.list}>
                                        {
                                            item.category[category]?.wearingType?.map((item, i) => (
                                                <li key={i}>
                                                    {
                                                        item.img &&
                                                        <Image alt="img" src={item.img} width={40} height={30} />
                                                    }
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className={styles.shop_style}>
                                    <h5>Shop By Metal</h5>
                                    <div className={styles.list}>
                                        {
                                            item.category[category]?.shopByMetal?.map((item, i) => (
                                                <li key={i} >
                                                    {
                                                        item.img &&
                                                        <Image alt="img" src={item.img} width={40} height={30} />
                                                    }
                                                    {item.title}
                                                </li>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
                <li onMouseEnter={() => setCollection("GOLDCOINS")}>
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
                <li onMouseEnter={() => setCollection("WATCHES")}>
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
                <li onMouseEnter={() => setCollection("GIFTS")}>
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