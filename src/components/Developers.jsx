


import React from 'react';
import Developer from './Developer';

const Developers = ({developers}) => {
    
    return (
        <div>
            {
                developers.map((developer, index)=> 
                <Developer key={index} developer={developer}></Developer>)
            }
        </div>
    );
};

export default Developers;