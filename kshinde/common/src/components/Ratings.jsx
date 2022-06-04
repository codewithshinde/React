import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';

function Star({cover, select, hovCount, makeZero}) {
    return <FaStar onMouseEnter={hovCount}  onMouseLeave={makeZero} color={cover ? "#5bc265": "grey"} onClick={select} size={50}/>
}

function createArray(length = 5) {
    return [...Array(length)];
}

function Ratings({count}) {
    let [selected, setSelected] = useState(0);
    let [hov, setHov] = useState(0);
    return createArray(count).map((e,i) => (
        <Star hovCount={() => setHov(i+1)} makeZero={() => setHov(0)} cover={selected > i || hov > i} key={i} select={() => setSelected(i+1)}></Star>
    ));
}

export default Ratings;