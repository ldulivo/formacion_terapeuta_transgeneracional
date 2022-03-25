import img1 from '../../img/testimonials01.png'
import img2 from '../../img/testimonials02.png'
import img3 from '../../img/testimonials03.png'

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
                        <iframe 
                            src="https://www.youtube.com/embed/FOGv4KsLxlw"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            title='Formación transgeneracional'
                            frameBorder={0}
                        >
                        </iframe>
                    </footer>
                </div> {/* End Card */}

                <div className="card"> {/* Card */}
                    <header>
                        <img src={img2} alt="testimonials Pablo Saravia" />
                        <p>Lorena Bissio</p>
                    </header>
                    <footer>
                        <iframe 
                            src="https://www.youtube.com/embed/LWNMQjZBvJY"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            title='Formación transgeneracional'
                            frameBorder={0}
                        >
                        </iframe>
                    </footer>
                </div> {/* End Card */}

                <div className="card"> {/* Card */}
                    <header>
                        <img src={img3} alt="testimonials Pablo Saravia" />
                        <p>Laura Costa</p>
                    </header>
                    <footer>
                        <iframe 
                            src="https://www.youtube.com/embed/V6CNvJoHnZw"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen
                            title='Formación transgeneracional'
                            frameBorder={0}
                        >
                        </iframe>
                    </footer>
                </div> {/* End Card */}
            </div>


        </div> {/* Container */}

    </div>
  )
}
