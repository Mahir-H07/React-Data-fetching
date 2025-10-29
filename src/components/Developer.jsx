


import React from 'react';

const Developer = ({developer}) => {
    return (
        <div>
            <div className='bg-slate-500 text-black p-5 my-14 border-8 border-amber-300'>
                <h1>Name: {developer.name} </h1>
                <p>Stack: {developer.stack} </p>
                <p>Role: {developer.stack} </p>
                <p>Company Name: {developer.company_name} </p>
            </div>
        </div>
    );
};

export default Developer;