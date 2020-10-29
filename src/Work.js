import React from 'react'
import './Work.css'
import Slider from "react-slick";
import WorkCard from './WorkCard'

var settings = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

let images = [
    "works/MobileUI_2.png",
    "works/MobileUI_3.png",
    "works/MobileUI_4.png",
    "works/websiteUI.png",
    "works/websiteUI_2.png",
    "works/websiteUI_3.png",
    "works/illustration.png"
]

function Work() {
    return (
        <div className="works">
            <Slider  {...settings}>


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
