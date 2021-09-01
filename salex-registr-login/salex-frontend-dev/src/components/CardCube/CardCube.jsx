import React from "react";
import classes from "./CardCube.module.css";
function CardCube({cardImg,cardTitle,cardCity,cardRegion,cardData,cardPrice}) {
  return (
    < >
      <div className={classes.mainCard}>
        <img className={classes.cardImg}
          src={cardImg}
          alt='img'
        />
        <p className={classes.cardTitle}>{cardTitle}</p>

        <div className={classes.cardProductAdress}>
         <p>{cardCity},</p>
         <p>{cardRegion}</p>
        </div>
        <div className={classes.cardDataAndPrice}>
<p className={classes.cardData}>{cardData}</p>
<p className={classes.cardPrice}>{cardPrice}</p>
        </div>
      </div>

    </>

  );
}

export default CardCube;
