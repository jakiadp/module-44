import React from 'react';
import { Features } from 'tailwindcss';

const Prichingcard = ({priching}) => {
    const{name, price, description,} = priching;
    return (
        <div className='border bg-amber-500 rounded-2xl p-4'>

            {/* card header */}

            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            <div className='bg-amber-200 p-4 rounded-2xl mt-10'>
                <p>{description}</p>

                {/* card main */}
                {/* {
                  features.map((feature, index) => <Features
                  key={index}
                  feature={feature}
                  ></Features> )  
                } */}
            </div>
            <button className="btn w-full bg-black text-white mt-2">Subcrebe</button>
            
        </div>
    );
};

export default Prichingcard;