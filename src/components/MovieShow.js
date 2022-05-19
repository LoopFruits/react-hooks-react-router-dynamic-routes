import React from 'react';
import { useParams } from "react-router-dom";


function MovieShow({movies}){

    const params = useParams();
    console.log(params);

    return(
        <>
        {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie */}
      <h3>{movies[params.movieId].title}</h3>
        </>
    );
}

export default MovieShow;