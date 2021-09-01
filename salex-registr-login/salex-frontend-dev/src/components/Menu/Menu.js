import React, { useState } from "react";
import classes from "./Menu.module.css";
function Menu() {
  const [active, setActive] = useState(-1);
  const [category, setCategory] = useState({
    transport: {
      categName: "Transport kategoriya",
      categories: ["Telefonlar", "Kompyuterlar", "Kameralar", "Oshxona"],
    },
    texnika: {
      categName: "Texnika kategoriya",
      categories: ["Telefonlar", "Kompyuterlar", "Kameralar", "Oshxona"],
    },
  });
  const categoryList = [];
  for (let key in category) {
    categoryList.push({
      categories: category[key].categName,
    });
  }
  const sum = category.transport.categories;
  const contentList = [];
  for (let key in sum) {
    contentList.push({
      config: sum[key],
      active: sum[key].active,
    });
    console.log(contentList);
  }
  const toogleActiveClass = (key) => {
    setActive(key);
  };
  return (
    <>
      <div className={classes.categories}>
        <h1 className={classes.categoryTitle}>Kategoriya</h1>
        <div className={classes.categoryItems}>
          <p className={classes.categoryHr}></p>
          {contentList.map((item, key) => {
            return (
              <div
                key={key}
                onClick={() => toogleActiveClass(key)}
                className={
                  key === active ? classes.active : classes.categoryItem
                }>
                <p className={classes.categoryText}>{item.config}</p>
              </div>
            );
          })}
        </div>
        <div className={classes.responsiveItem}>
          <p className={classes.responsiveText}>{category.texnika.categName}</p>
          <select className={classes.responsiveSelect} name='cars' id='cars'>
            {contentList.map((item,key)=>{
              return(
                <option   value={item.config}  >{item.config}</option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  );
}

export default Menu;
