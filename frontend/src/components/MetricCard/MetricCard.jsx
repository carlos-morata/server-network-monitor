import React from "react";
import styles from './MetricCard.module.scss'

const MetricCard = ({ label, value }) => {

return <article className={styles.article}>
    <h3>{label}</h3>
    <p>{value}</p>
</article>;
};


export default MetricCard;