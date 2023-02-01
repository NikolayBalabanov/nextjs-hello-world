import { useRouter } from "next/router"
import MainContainer from "../../components/MainContainer"
import style from "../../styles/user.module.scss"

export default function User({user}) {
    const {query} = useRouter()
    return (
        <MainContainer>
            <div className={style.user}>
                <h1>Пользователь c id={query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
}


export async function getServerSideProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await res.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
}