import img1 from '../../img/testimonials01.png'

//import video1 from 'https://scontent.cdninstagram.com/v/t50.2886-16/100761281_2585147115062104_5772445566134703554_n.mp4'

//allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 

export default function Testimonials() {
  return (
    <div className='Testimonials'>
        <div className="Testimonials--container"> {/* Container */}
            <div className="Testimonials--cards">
                
                <div className="card"> {/* Card */}
                    <header>
                        <img src={img1} alt="testimonials Pablo Sarabia" />
                        <p>Laura</p>
                    </header>
                    <footer>
                        <iframe 
                            src="https://www.youtube.com/embed/c387p_FiKmY"
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
                        <img src={img1} alt="testimonials Pablo Sarabia" />
                        <p>Laura</p>
                    </header>
                    <footer>
                        <iframe 
                            src="https://www.youtube.com/embed/c387p_FiKmY"
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
