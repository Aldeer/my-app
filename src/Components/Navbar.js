import React from 'react';

const Navbar = () => {

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return(
        <nav>
            <div />
            <div>
                <img 
                    src={imgUrl}
                    alt='PokeApi-Logo'
                    className='navbar-img' 
                />
            </div>
            <div>♥</div>
        </nav>
    );
}

export default Navbar;