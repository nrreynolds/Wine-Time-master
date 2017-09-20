import React from 'react';

const Wine = (props) => {
    const wine = props.wine;
    return (
        <div className="wine">
            <h3> {wine.name} </h3>
            <p> {wine.year} </p>
            <p> {wine.grapes} </p>
            <p> {wine.country}:{wine.region} </p>
            <img src={wine.picture} />
            <p> {wine.description} </p>
            <p> ${wine.price} </p>
        </div>
    );
}

export default Wine;