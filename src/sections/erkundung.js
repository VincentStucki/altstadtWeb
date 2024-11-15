import React, { useEffect, useState } from 'react';


function Erkundung({ season }) {
    return (
        <>
            <div className={`content-block ${season}-bg`}>
                <h2>Erkunden Sie die Altstadt</h2>
                <div className={`video ${season}-bg`}>
                    <video controls>
                        <source src="./videos/altstadt_video.mp4" type="video/mp4" />
                        Ihr Browser unterstützt kein Video.
                    </video>
                </div>
            </div>
        </>
    )
}
export default Erkundung;