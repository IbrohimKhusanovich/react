import React from 'react'
import CardPic from '../../../images/jpg/404.jpg'
import classes from './Card.module.css'

const Card = ({children}) => {
    return (
        <>
            <div className={`${classes.CardBlock} Card`}>
                <div className={`${classes.CardBody}`}>
                    {children}
                </div>
            </div>
        </>
    )
}

export const CardImg = ({src}) => (
    <div className="CardMedia">
        <img src={src || CardPic} alt="Product" className={classes.Media} />
    </div>
)

export const CardInfo = ({cardTitle, cardAddress}) => (
    <div className="CardInfo">
        <span className={classes.CardTitle}>{cardTitle}</span>
        <p className={classes.cardAddress}>{cardAddress}</p>
    </div>
)

export const CardFooter = ({date, price}) => (
    <div className={classes.DateAndPrice}>
        <span className='date'>{date}</span>
        <span className={classes.price}>{price}</span>
    </div>
)

export default Card
