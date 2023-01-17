import React from 'react';
import Banner from '../../components/Home/Banner';
import Facts from '../../components/Home/Facts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Facts></Facts>
            <h2 className='text-3xl font-extrabold text-center py-20 text-red-400'>Comming soon more 5+ section....</h2>
        </div>
    );
};

export default Home;