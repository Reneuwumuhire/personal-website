import React from 'react'
import Typical from 'react-typical'
import './Home.css';

function Home() {
    return (
        <div className="home">
            <h1>Hello,</h1><br></br>
            <h1>I am</h1>

            <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                    'designer🎨', 500,
                    'Front-End-Dev👨‍💻', 500,
                    'artist✍️', 500,
                    'Youtuber📹', 500,

                ]}

            />
        </div>
    )
}

export default Home
