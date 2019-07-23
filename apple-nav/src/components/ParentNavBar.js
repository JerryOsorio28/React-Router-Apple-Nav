import React from 'react';



/*Things to create for ParentNavBar
- Apple home button
- Mac button
- iPad button
- iPhone button
- Watch button
- TV button
- Music button
- Support button
- Search button
- bag button
*/

function ParentNavBar (){
    return (
        <div className='parentContainer'>
            <img src='https://i.imgur.com/Mvuy15z.png' style={{width: '20px', height: '22px'}}/>
            <span>Mac</span>
            <span>iPad</span>
            <span>iPhone</span>
            <span>Watch</span>
            <span>TV</span>
            <span>Music</span>
            <span>Support</span>
            <img src='https://www.skyharbor.com/images/default-source/siteimages/iconsmenusystem/search.png' style={{width: '20px', height: '22px'}}/>
            <img src='https://i.imgur.com/SSt2bMv.png' style={{width: '20px', height: '20px'}}/>
        </div>
    )
};

export default ParentNavBar;