import classes from "./Button.module.css";

function Button(props) {
  return (
    <div>
      <button className={classes.btn}>{props.text}</button>
    </div>
  );
}

export default Button;
