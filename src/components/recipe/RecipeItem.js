import Card from "../ui/Card";
import RateBar from "./RateBar";
import CommentBar from "./CommentBar";
import Infobar from "./InfoBar";

import classes from "./RecipeItem.module.css";

function RecipeItem(props) {
  console.log(props);

  return (
    <Card>
      <li className={classes.recipe__container}>
        <div className={classes.image}>
          <img src={props.image} alt='recipe_image' />
        </div>
        <div className={props.title}>{props.title}</div>
        <div className={classes.info__container}>
          <div className={classes.info__wrapper}>
            <RateBar />
            <CommentBar />
          </div>
          <div className={classes.info__wrapper}>
            <Infobar />
          </div>
        </div>
      </li>
    </Card>
  );
}

export default RecipeItem;
