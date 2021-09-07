import React from "react";
import classes from "./CardRectangle.module.css";
import serv from "./CardRectangleService.module.css";
function CardRectangle({cardImg, typeImgCard,typeOfWork,cardPriceStart,cardPriceEnd,cardTitle,cardCity,cardRegion,cardData,cardPrice,dataAdd }) {
  const cardTypes = typeImgCard;
  return (
    <>
      {cardTypes ? (
        <div className={classes.cardBox}>
          <img
            className={classes.cardImg}
            src={cardImg}
            alt='img'
          />
          <div className={classes.cardInformation}>
            <div className={classes.cardTexts}>
              <div className={classes.cardTitleAndAdress}>
                <h1 className={classes.cardTitle}>{cardTitle}</h1>
                <div className={classes.cardProductAdress}>
                  <p>{cardCity},</p>
                  <p>{cardRegion}</p>
                </div>
              </div>
              <p className={classes.cardData}>{cardData}</p>
            </div>

            <div className={classes.cardPriceAndBtn}>
              <p className={classes.cardPrice}>{cardPrice}</p>
              <button className={classes.cardBtn}>Bog’lanish</button>
            </div>
          </div>
        </div>
      ) : (
       <div style={{display:'flex'}}>
       <div className={serv.box}></div>
        <div className={serv.cardBox}>
          <div className={serv.cardInformation}>
            <div className={serv.cardTexts}>
              <div className={serv.cardTitleAndAdress}>
                <h1 className={serv.cardTitle}>{cardTitle}</h1>
                <div className={serv.cardServiceInformation}>
                  <div className={serv.cardProductAdress}>
                    <p>{cardCity},</p>
                    <p>{cardRegion}</p>
                  </div>
                  <div className={serv.cardProductAdress}>
                    <p>{dataAdd},</p>
                    <p>{typeOfWork}</p>
                  </div>
                  <div className={serv.cardProductAdress}>
                    {/* shu yerga qanday props kelishini bila olmadim */}
                    <p>To’liq stavka,</p>
                    <p>bandlik</p>
                    {/* shu yerga qanday props kelishini bila olmadim */}
                  </div>
                </div>
              </div>
              <p className={serv.cardData}>{cardData}</p>
            </div>

            <div className={serv.cardPriceAndBtn}>
              <div className={serv.cardPrices}>
                <p className={serv.cardPrice}>{cardPriceStart}</p>
                <p className={serv.cardSlash}>/</p>
                <p className={serv.cardPrice}>{cardPriceEnd}</p>
              </div>
              <button className={serv.cardBtn}>Bog’lanish</button>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  );
}

export default CardRectangle;
