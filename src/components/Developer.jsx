


import React from 'react';

const Developer = ({ developers }) => {
    console.log(developers)

    return (
        <>

            {
                developers.map((developer) =>
                    <div className='bg-yellow-300 text-black p-5 my-10 border-8 border-red-500'>
                        <h1>Name:{developer.name}</h1>
                        <p>Stack:{developer.stack}</p>
                        <p>Company Name:{developer.company_name}</p>
                    </div>

                )
            }

        </>
    );
};

export default Developer;