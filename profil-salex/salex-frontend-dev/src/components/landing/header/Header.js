import React from 'react'
import './Header.css'
import SearchBar from './searchBar/SearchBar'

const Header = () => {
    return (
        <header>
            <div className='header-background'>
                <span className='heading-text'>Bugun siz qaysi maxsulotni qidirmoqchisiz?</span>
                <div className='grandient'/>
            </div>
            <SearchBar/>
        </header>
    )
}

export default Header