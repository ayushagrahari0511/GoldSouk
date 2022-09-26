import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'

const Navbar = () => {
    const [isSSR, setIsSSR] = useState(false)
    const [category, setCategory] = useState([])

    console.log(category)

    useEffect(() => {
        setIsSSR(true)
    }, [])

    useEffect(() => {
        const controller = new AbortController();
        async function fetchCategory() {
            try {
                const { data } = await axios.get(`http://backend.bizinnovisiondev.co:5000/api/category`)
                setCategory(data.category)
            }
            catch (err) {
                console.log(err)
            }
        }
        fetchCategory()
        return () => {
            controller.abort();
        }
    }, [])

    return (
        isSSR &&
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <aside className={styles.left_side}>
                    <div className={styles.logo}>
                        <Image src="/logo.png" layout='fill' />
                    </div>
                </aside>
                <aside className={styles.right_side}>
                    <div className={styles.list}>
                        <li className={styles.drop_down}>
                            Collection
                            <span className={styles.arrow_down}>
                                <Image src="/arrow.svg" layout="fill" />
                            </span>
                            <div className={styles.drop_down_active}>
                                {
                                    category && category.map((cat) => (
                                        <li key={cat._id}>
                                            <Link href={`http://bizinnovisiondev.co:88/category/${cat.title}`}>
                                                {cat.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </div>
                        </li>
                        <li>
                            <Link href="#">About</Link>
                        </li>
                        <li>
                            <Link href="#">Profile</Link>
                        </li>
                        <li>
                            <Link href="#">Login</Link>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <Image src="/search.svg" layout='fill' />
                            </div>
                        </li>
                        <li>
                            <u>
                                EN
                            </u>
                        </li>
                        <li>
                            <div className={styles.icon}>
                                <Image src="/cart.svg" layout='fill' />
                            </div>
                        </li>
                    </div>
                </aside>
            </div>
        </header>
    )
}

export default Navbar