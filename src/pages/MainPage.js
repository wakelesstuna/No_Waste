import Inputfield from "../components/food/Inputfield";
import Button from "../components/ui/Button";

import classes from "./MainPage.module.css";

function MainPage() {
  return (
    <>
      <div className={classes.main__container}>
        <h1>Welcome Oscar</h1>
        <Inputfield />
        <div className={classes.btn__wrapper}>
          <Button text='add 1 more...' />
        </div>
      </div>
    </>
  );
}

export default MainPage;
