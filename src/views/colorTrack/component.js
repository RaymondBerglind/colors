import React from 'react';

export default function () {
    const colors = [
        'red',
        'pink',
        'orange',
        'yellow',
        'green',
        'blue'
    ];

    function getRandomColor() {
        return colors[Math.ceil(Math.random() * colors.length) - 1]
    }

    return (
        <div className={'color-track color-track-' + getRandomColor()} />
    );
}