import {Link} from 'react-router-dom' 
import Container from "../Container/Index"
import styles from "./Styles.module.css"
import logo from "../../../img/costs_logo.png"

function Navbar (){
    return (
        <nav className = {styles.navbar}>
            <Container> 
                <Link to = "/" > <img src = {logo} alt = "costs"></img> </Link>
                <ul className = {styles.lista_itens}>
                    <li className = {styles.item}> <Link to = "/"> Home </Link> </li>
                    <li className = {styles.item}> <Link to = "/projetos"> Projetos </Link> </li>
                    <li className = {styles.item}> <Link to = "/sobre"> Sobre </Link> </li>
                    <li className = {styles.item}> <Link to = "/contato"> Contato </Link> </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar