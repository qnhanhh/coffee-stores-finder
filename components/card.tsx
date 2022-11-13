import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.scss";
import cls from "classnames";

const Card = (props) => {
  return (
    <Link href={props.href} className={styles.cardLink}>
      <div className={cls(styles.container, "glass")}>
        <h2 className={styles.cardHeader}>{props.name}</h2>
        <Image
          className={styles.cardImage}
          src={props.imgUrl}
          alt={props.name}
          width={260}
          height={160}
        />
      </div>
    </Link>
  );
};

export default Card;
