import React from 'react'
import './Work.css'
import Slider from "react-slick";
import WorkCard from './WorkCard'

var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'ondemand',
}
let images = [
    "works/MobileUI_2.png",
    "works/MobileUI_3.png",
    "works/MobileUI_4.png",
    "works/MobileUI_4.png",
    "works/websiteUI.png",
    "works/websiteUI_2.png",
    "works/websiteUI_3.png",
    "works/illustration.png"
]

function Work() {
    return (
        <div className="works">
            <Slider {...settings}>


                {
                    images.map((image) => (
                        <div className="work__card_list">
                            <WorkCard image={process.env.PUBLIC_URL + image} />
                        </div>
                    ))
                }

            </Slider>
        </div>

    )
}

export default Work
