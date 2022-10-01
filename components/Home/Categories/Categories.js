import styles from './Categories.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'


import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Autoplay, Navigation } from 'swiper'

const Categories = () => {
    const [isSSR, setIsSSR] = useState(false)

    useEffect(() => {
        setIsSSR(true);
    }, [])

    return (
        isSSR &&
        <div className={styles.wrapper}>
            <h2>Categories</h2>

            <div className={`${styles.bottom_carousel_left} bottom_carousel_left`}>
                <BsArrowLeftShort />
            </div>
            <div className={`${styles.bottom_carousel_right} bottom_carousel_right`}>
                <BsArrowRightShort />
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                centeredSlides={true}
                loop={true}
                modules={[Pagination, Navigation]}
                navigation={{
                    prevEl: ".bottom_carousel_left",
                    nextEl: ".bottom_carousel_right",
                }}
                className={`${styles.swiper} swiper`}>
                <SwiperSlide className={styles.list}>
                    <div className={styles.category}>
                        <div className={styles.img}>
                            <Image priority src="/earring.png" layout="fill" />
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
                </SwiperSlide>
                <SwiperSlide className={styles.list}>
                    <div className={styles.category}>
                        <div className={styles.img}>
                            <Image priority src="/ring.png" layout="fill" />
                        </div>
                        <div className={styles.cat_name}>
                            <h3>Ring</h3>
                            <Link href="#">
                                <div className={styles.link}>
                                    Explore
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={styles.list}>
                    <div className={styles.category}>
                        <div className={styles.img}>
                            <Image priority src="/bracelet.png" layout="fill" />
                        </div>
                        <div className={styles.cat_name}>
                            <h3>Bracelet</h3>
                            <Link href="#">
                                <div className={styles.link}>
                                    Explore
                                </div>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Categories