import React, { use } from 'react';
import Prichingcard from '../Prichingcard/Prichingcard';

const PrichingOption = ({prichinPromise}) => {

    const prichingData = use(prichinPromise);
    return (
        <div className='mx-10'>
            <h2 className='text-5xl text-center mt-10 mb-5 font-bold'>Get our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {
                 prichingData.map(priching => <Prichingcard
                key={priching.id}
                priching={priching}
                ></Prichingcard> )
                }
            </div>
            
            
            
        </div>
    );
};

export default PrichingOption;