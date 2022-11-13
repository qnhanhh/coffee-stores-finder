import styles from './banner.module.scss'

type BannerProps={
    buttonText:string,
    handleClick:()=>void
}

const Banner = (props:BannerProps) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}><span>Coffee</span> Connoisseur</h1>
            <p className={styles.subtitle}>Discover your local coffee shops!</p>
            <button className={styles.button} onClick={props.handleClick}>{props.buttonText}</button>
        </div>
    )
}

export default Banner