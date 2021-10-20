import React from 'react'
import './Gallery.css'

const Gallery = () => {
    const photos = [
        {
            name: "Louise Hung",
            imgTitle: "louise"
        },
        {
            name: "Jessica Lee",
            imgTitle: "jessica"
        },
        {
            name: "Michael Lee",
            imgTitle: "michael"
        },
        {
            name: "Ivan Yeung",
            imgTitle: "ivan"
        },
        {
            name: "Johann Taylor",
            imgTitle: "johann"
        },
        {
            name: "David Sullivan",
            imgTitle: "david"
        },
        {
            name: "Mimi Ke",
            imgTitle: "mimi"
        },
        {
            name: "Nicole Agostino",
            imgTitle: "nicole"
        },
        {
            name: "Iris Hung",
            imgTitle: "iris"
        }        
]

    return (
        <div className="photo-list">
            {photos.map((title, i) => (
                <img
                src={require(`../../assets/images/people/${title.imgTitle}.jpg`).default}
                alt={title.name}
                className="photo-item"
                key={i}
                />
            ))}
        </div>
    )
}

export default Gallery
