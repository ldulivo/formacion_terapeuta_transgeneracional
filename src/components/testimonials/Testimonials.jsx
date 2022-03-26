import img1 from '../../img/testimonials01.png'
import img2 from '../../img/testimonials02.png'
import img3 from '../../img/testimonials03.png'
import Iframe from '../iframe/Iframe'

export default function Testimonials() {
  return (
    <div className='Testimonials'>
        <div className="Testimonials--container"> {/* Container */}
            <div className="Testimonials--cards">
                
                <div className="card"> {/* Card */}
                    <header>
                        <img src={img1} alt="testimonials Pablo Saravia" />
                        <p>Laura Carozzi</p>
                    </header>
                    <footer>
                        <Iframe src={"https://www.youtube.com/embed/FOGv4KsLxlw"} />
                    </footer>
                </div> {/* End Card */}

                <div className="card"> {/* Card */}
                    <header>
                        <img src={img2} alt="testimonials Pablo Saravia" />
                        <p>Lorena Bissio</p>
                    </header>
                    <footer>
                        <Iframe src={"https://www.youtube.com/embed/LWNMQjZBvJY"} />
                    </footer>
                </div> {/* End Card */}

                <div className="card"> {/* Card */}
                    <header>
                        <img src={img3} alt="testimonials Pablo Saravia" />
                        <p>Laura Costa</p>
                    </header>
                    <footer>
                        <Iframe src={"https://www.youtube.com/embed/V6CNvJoHnZw"} />
                    </footer>
                </div> {/* End Card */}
            </div>


        </div> {/* Container */}

    </div>
  )
}
