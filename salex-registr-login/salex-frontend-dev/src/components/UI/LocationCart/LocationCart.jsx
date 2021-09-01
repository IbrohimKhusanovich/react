import React from 'react'
import classes from './Location.module.css'
import Typography from '@material-ui/core/Typography'
import LocationIcon from '../../../images/svg/locationIcon.svg'

const LocationCart = ({title, desc}) => {
    return (
        <div className={`${classes.alertBox} Card`}>
            <div className={classes.info}>
                <Typography variant="h4" color="initial">{title}</Typography>
                <p className={classes.description}>{desc}</p>
            </div>

            <div className={classes.iconBox}>
                <img src={LocationIcon} alt='location icon'/>
            </div>
        </div>
    )
}

export default LocationCart
