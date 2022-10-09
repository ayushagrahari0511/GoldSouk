import React, { useState, useEffect } from 'react'
import styles from '../styles/Collection.module.css'
import { data } from './Home/Collection/data'
import Image from 'next/image'
import Link from 'next/link'

const Collection = () => {
    const [isSSR, setIsSSR] = useState(false)
    const [category, setCategory] = useState(0);

    useEffect(() => {
        setIsSSR(true)
    }, [])

    return (
        isSSR &&
        <>
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
                    <li onMouseLeave={() => setCategory(0)}>
                        DIAMOND
                        <div className={`${styles.row} ${styles.dropdown}`}>
                            <div className={styles.sub_category}>
                                {
                                    data[0].category.map((cat, i) => (
                                        <li onMouseEnter={() => setCategory(i)} key={i} >{cat.title}</li>
                                    ))
                                }
                            </div>
                            <div className={styles.shop_style}>
                                <h5>Shop By Style</h5>
                                <div className={styles.list}>
                                    {
                                        data[0].category[category]?.shopByStyle?.map((item, i) => (
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
                                        data[0].category[category]?.wearingType?.map((item, i) => (
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
                                        data[0].category[category]?.shopByMetal?.map((item, i) => (
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
                    <li onMouseLeave={() => setCategory(0)}>
                        GOLD
                        <div className={`${styles.row} ${styles.dropdown}`}>
                            <div className={styles.sub_category}>
                                {
                                    data[1].category.map((cat, i) => (
                                        <li onMouseEnter={() => setCategory(i)} key={i} >{cat.title}</li>
                                    ))
                                }
                            </div>
                            <div className={styles.shop_style}>
                                <h5>Shop By Style</h5>
                                <div className={styles.list}>
                                    {
                                        data[1].category[category]?.shopByStyle?.map((item, i) => (
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
                                        data[1].category[category]?.wearingType?.map((item, i) => (
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
                                        data[1].category[category]?.shopByMetal?.map((item, i) => (
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
                    <li onMouseLeave={() => setCategory(0)}>
                        PLATINUM
                        <div className={`${styles.row} ${styles.dropdown}`}>
                            <div className={styles.sub_category}>
                                {
                                    data[2].category.map((cat, i) => (
                                        <li onMouseEnter={() => setCategory(i)} key={i} >{cat.title}</li>
                                    ))
                                }
                            </div>
                            <div className={styles.shop_style}>
                                <h5>Shop By Style</h5>
                                <div className={styles.list}>
                                    {
                                        data[2].category[category]?.shopByStyle?.map((item, i) => (
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
                                        data[2].category[category]?.wearingType?.map((item, i) => (
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
                                        data[2].category[category]?.shopByMetal?.map((item, i) => (
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
                    <div className={styles.logo}>
                        <Image src="/logo.png" layout="fill"></Image>
                    </div>
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
                </div>
                <div className={styles.search}>

                </div>
            </div>
        </>
    )
}

export default Collection