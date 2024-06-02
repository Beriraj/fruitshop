import React from 'react';
import Itemcard from './itemcard';
import data from './data';

const Home =()=>{
    return(
        <div>
            <h1 className='text-center mt-3'>Fruit Shop</h1>
            <section className='py-4 container'>
                <div className='row justify-content-center'>
                     {
                        data.productData.map((item,index)=>{
                            return(
                                <Itemcard 
                                img={item.img} 
                                title={item.title} 
                                desc={item.desc} 
                                price={item.price} 
                                item={item} 
                                key={index}
                                />
                            )
                        })
                     }
                    
                </div>
            </section>
        </div>
    )
}
export default Home;