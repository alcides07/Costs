import styles from "./Styles.module.css"

function Submit({text}) {
    return (
        <div>
            <button className = {styles.btn}> {text} </button>
        </div>
    )
}

export default Submit