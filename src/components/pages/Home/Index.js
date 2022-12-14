import styles from "./Styles.module.css"
import savings from "../../../img/savings.svg"
import LinkButton from "../../layout/Link_Button/Index"

function Home(){
    return (
        <section className = {styles.home_container}>
            <h1> Bem-vindo ao <span> Costs </span> </h1>
            <p> Comece a gerenciar os seus projetos agora mesmo! </p>
            <LinkButton rota = "/NovoProjeto" texto = "Criar Projeto" />
            <img src = {savings} alt = "Costs" />
        </section>
    )
}

export default Home