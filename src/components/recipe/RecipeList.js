import classes from "./RecipeList.module.css";
import axios from "axios";

import RecipeItem from "./RecipeItem";
import { Component } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "pasta carbonara",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_228209/cf_259/kycklingcarbonara_med_grona_artor.jpg",
    ingredients: [
      {
        id: 1,
        name: "bacon",
      },
      {
        id: 2,
        name: "ärtor",
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
    title: "linssallad med kyckling och curryyoghurt",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_224457/cf_259/linssallad_med_kyckling_och_curryyoghurt.jpg",
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
    timeToCockMin: 40,
    description: "Som dummy text goes here",
    instruction: "Some instruktions gors here",
  },
  {
    id: 3,
    title: "grillad grillost i pitabröd",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_229773/cf_259/grillad_grillost_i_pitabrod.jpg",
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
    title: "mandelrostad blomkål med linser och yoghurt",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_201602/cf_259/mandelrostad_blomkal_med_linser_och_yoghurt.jpg",
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
    title: "drum sticks chimichurri med rostad potatis",
    image:
      "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_229576/cf_259/drum_sticks_chimichurri_med_rostad_potatis.jpg",
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

const api = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

class RecipeList extends Component {
  state = {
    recipes: [],
    category: "",
  };

  constructor() {
    super();
    api.get("/recipe").then((resp) => {
      console.log(resp.data);

      this.setState({ recipes: resp.data, category: resp.data[0].category });
    });
  }

  render() {
    return (
      <div className={classes.recipe__list__container}>
        <h2 className={classes.recipe__list__title}>{this.state.category}</h2>
        <ul className={classes.recipe__list__wrapper}>
          {this.state.recipes.map((recipe) => {
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
}

export default RecipeList;
