import React/*, { useState, useEffect }*/ from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([]);
    const { data:images, loading } = useFetchGifs(category);
    // console.log(data, loading);

    // useEffect(() => {
    //     getGifs(category)
    //         .then(imgs => setImages(imgs));
    // }, [category]);

    // Esto anterior lo hemos sustituido por el custom hook

    return (
        <>
            <h3 className="animate__animated animate__fadeIn animate__faster">{category}</h3>

            {loading && <p className="animate__animated animate__flash">Loading...</p>}

            <div className='card-grid'>
                {
                    images.map(image => (
                        <GifGridItem 
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}
