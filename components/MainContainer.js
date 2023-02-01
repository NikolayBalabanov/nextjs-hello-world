import Head from "next/head"
import Link from "next/link"
import A from "../components/A"
import styles from "../styles/Navbar.module.css"

const MainContainer = ({children, keywords}) => {
  return (
    <>
        <Head>
            <meta keywords={'ulbi tv, nextjs' + keywords}></meta>
            <title>Главная страница</title>
        </Head>
        <div className={styles.navbar}>
            <A href={'/'} text={'Главная'}></A>
            <A href={'/users'} text={'Пользователи'}></A>
        </div>
        <div>{children}</div>
    </>
  )
}

export default MainContainer