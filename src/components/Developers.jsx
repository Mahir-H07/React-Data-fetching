


import React, { use } from 'react';
import Developer from './Developer';

const Developers = ({developersPromise}) => {

    const developer = use(developersPromise);
    console.log(developer)
    
    return (
        <div>
            {
                developer.map((developer, index)=> 
                <Developer key={index} developer={developer}></Developer>)
            }
        </div>
    );
};

export default Developers;