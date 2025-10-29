


import React from 'react';

const Developer = ({ developer }) => {
    return (
        <div>
            <div className='bg-slate-500 text-black p-5 my-14 border-8 border-amber-300'>
                <h1>Name: {developer.name} </h1>
                <p>Stack: {developer.stack} </p>
                <p>Role: {developer.stack} </p>
                <p>Company Name: {developer.company_name} </p>
                <div>{developer.isEmployee === true ? <div className='w-5 h-5 rounded-full border-2 bg-green-600 '></div> : <div className='w-5 h-5 rounded-full border-2 bg-red-600 '></div>}</div>
            </div>
        </div>
    );
};

export default Developer;