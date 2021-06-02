import classes from "./InfoBar.module.css";

function InfoBar(props) {
  return (
    <div className={classes.info__container}>
      <div className={classes.info__wrapper}>
        <i className='bi bi-clock'></i>
        <span className={classes.time__counter}>{">30min"}</span>
      </div>
      <div className={classes.info__wrapper}>
        <i className='bi bi-egg'></i>
        <span className={classes.ingredient__counter}>6</span>
      </div>
    </div>
  );
}

export default InfoBar;
