import React from 'react';

/*
Things to create bottom NavBar:
- MacBook Air button
- MacBook Pro button
- iMac button
- Mac Pro button
- Mac mini button
- Compare button
- Pro Display button
- Accesories button
- Mojave button
*/

function NavBar(){
    return (
        <div className='NavBar'>
            <span>
                <img src='https://image.flaticon.com/icons/svg/65/65732.svg'/>
            </span>
            <span>
                <img src='https://image.flaticon.com/icons/svg/65/65875.svg'/>
            </span>
            <span>
                <img src='https://image.flaticon.com/icons/svg/134/134039.svg' style={{width: '115px', height: '100px'}}/>
            </span>
            <span>
                <img src='https://image.flaticon.com/icons/svg/482/482466.svg' style={{width: '115px', height: '100px'}}/>
            </span>
            <span>
                <img src='https://image.flaticon.com/icons/svg/482/482470.svg' style={{width: '115px', height: '100px'}}/>
            </span>
            <span>
                <img src='https://static.thenounproject.com/png/800725-200.png' style={{width: '115px', height: '100px'}} />
            </span>
            <span>
                <img src='https://image.flaticon.com/icons/svg/1799/1799208.svg' style={{width: '115px', height: '100px'}}/>
            </span>
            <span>
                <img src='https://image.flaticon.com/icons/svg/937/937363.svg' style={{width: '115px', height: '100px'}}/>
            </span>
            <span>
                <img src='data:image/png;base64,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' style={{width: '115px', height: '100px'}}/>
            </span>
        </div>
    )
};

export default NavBar;