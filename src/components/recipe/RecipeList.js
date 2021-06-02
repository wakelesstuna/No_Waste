import classes from "./RecipeList.module.css";

import RecipeItem from "./RecipeItem";

const DUMMY_DATA = [
  {
    id: 1,
    title: "pasta",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_228209/cf_259/kycklingcarbonara_med_grona_artor.jpg",
    ingredients: [
      {
        id: 1,
        name: "gurka",
      },
      {
        id: 2,
        name: "tomat",
      },
    ],
    score: [
      {
        id: 1,
        points: 4,
      },
      {
        id: 2,
        points: 5,
      },
    ],
    comments: [
      {
        id: 1,
        userName: "Oscar",
        date: "2021-05-24",
        comment: "Some dummy text",
      },
    ],
    timeToCockMin: 30,
    description: "Som dummy text goes here",
    instruction: "Some instruktions gors here",
  },
  {
    id: 2,
    title: "pasta",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_228209/cf_259/kycklingcarbonara_med_grona_artor.jpg",
    ingredients: [
      {
        id: 1,
        name: "gurka",
      },
      {
        id: 2,
        name: "tomat",
      },
    ],
    score: [
      {
        id: 1,
        points: 4,
      },
      {
        id: 2,
        points: 5,
      },
    ],
    comments: [
      {
        id: 1,
        userName: "Oscar",
        date: "2021-05-24",
        comment: "Some dummy text",
      },
    ],
    timeToCockMin: 30,
    description: "Som dummy text goes here",
    instruction: "Some instruktions gors here",
  },
  {
    id: 3,
    title: "pasta",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_228209/cf_259/kycklingcarbonara_med_grona_artor.jpg",
    ingredients: [
      {
        id: 1,
        name: "gurka",
      },
      {
        id: 2,
        name: "tomat",
      },
    ],
    score: [
      {
        id: 1,
        points: 4,
      },
      {
        id: 2,
        points: 5,
      },
    ],
    comments: [
      {
        id: 1,
        userName: "Oscar",
        date: "2021-05-24",
        comment: "Some dummy text",
      },
    ],
    timeToCockMin: 30,
    description: "Som dummy text goes here",
    instruction: "Some instruktions gors here",
  },
  {
    id: 4,
    title: "pasta",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_228209/cf_259/kycklingcarbonara_med_grona_artor.jpg",
    ingredients: [
      {
        id: 1,
        name: "gurka",
      },
      {
        id: 2,
        name: "tomat",
      },
    ],
    score: [
      {
        id: 1,
        points: 4,
      },
      {
        id: 2,
        points: 5,
      },
    ],
    comments: [
      {
        id: 1,
        userName: "Oscar",
        date: "2021-05-24",
        comment: "Some dummy text",
      },
    ],
    timeToCockMin: 30,
    description: "Som dummy text goes here",
    instruction: "Some instruktions gors here",
  },
  {
    id: 5,
    title: "pasta",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_228209/cf_259/kycklingcarbonara_med_grona_artor.jpg",
    ingredients: [
      {
        id: 1,
        name: "gurka",
      },
      {
        id: 2,
        name: "tomat",
      },
    ],
    score: [
      {
        id: 1,
        points: 4,
      },
      {
        id: 2,
        points: 5,
      },
    ],
    comments: [
      {
        id: 1,
        userName: "Oscar",
        date: "2021-05-24",
        comment: "Some dummy text",
      },
    ],
    timeToCockMin: 30,
    description: "Som dummy text goes here",
    instruction: "Some instruktions gors here",
  },
];

function RecipeList(props) {
  return (
    <div className={classes.recipe__list__container}>
      <ul className={classes.recipe__list__wrapper}>
        {DUMMY_DATA.map((recipe) => {
          return (
            <RecipeItem
              key={recipe.id}
              id={recipe.id}
              image={recipe.image}
              title={recipe.title}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeList;
