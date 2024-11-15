import React, { useEffect, useState } from 'react';
import AltstadtAir from '../galerie/altstadt_air.jpg';

function Geschichte({ season }) {


    return (
        <>
            <div className={`text ${season}-bg`}>
                <h2>Geschichte</h2>
                <p>Ein Überblick über die Altstadt.</p>
            </div>
            <div className={`image ${season}-bg`}>
                <img src={AltstadtAir} alt="Geschichte Bild" />
            </div>
        </>
    )
}
export default Geschichte;

