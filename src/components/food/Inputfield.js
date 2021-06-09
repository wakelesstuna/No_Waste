import classes from "./Inputfield.module.css";

function Inputfield() {
  return (
    <div>
      <div className={classes.form__group}>
        <input
          type='input'
          className={classes.form__field}
          placeholder='Ingredience'
          name={"1"}
          id={"1"}
        />
        <label htmlFor='1' className={classes.form__label}>
          Ingredience
        </label>
      </div>
    </div>
  );
}

export default Inputfield;
