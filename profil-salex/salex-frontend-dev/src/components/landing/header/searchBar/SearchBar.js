import { MenuItem } from '@material-ui/core'
import React from 'react'
import { Button, SelectMenu } from '../../../UI/Button/Buttons'
import { Input } from '../../../UI/Input/Inputs'
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
    return (
        <div className='searchbar'>
            <Input placeholder='Qidiruv' className='width'/>
            <SelectMenu
                variant='outlined'
                className='selectHeader'
                defaultVal='Toshkent'>
                <MenuItem value='Toshkent'>Toshkent</MenuItem>
                <MenuItem value='Samarqand'>Samarqand</MenuItem>
                <MenuItem value='Buxoro'>Buxoro</MenuItem>
                <MenuItem value='Xorazim'>Xorazim</MenuItem>
                <MenuItem value='Andijon'>Andijon</MenuItem>
            </SelectMenu>
            <Button className='headerBtn'>{window.innerWidth <= 430 ? (<SearchIcon/>) : (<> <SearchIcon/> Qidiruv</>)}</Button>
        </div>
    )
}

export default SearchBar
