import Facebook from '../../svg/Facebook'
import Instagram from '../../svg/Instagram'
import YouTube from '../../svg/YouTube'
import SectionDivider from '../sectiondivider/SectionDivider'

export default function Footer() {
  return (
      <footer className='Footer'>
          <SectionDivider />

          <div className='Footer--container'>
              <div className="Footer--branding">
                  <p><b>Sígueme en:</b></p>
              </div>

              <div className="Footer--socialmedia">
                  <ul>
                      <li>
                            <a 
                                href="https://www.facebook.com/pablo.saravia.12" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Facebook />
                                <p>Pablo Saravia</p>
                          </a>
                      </li>

                      <li>
                            <a 
                                href="https://www.instagram.com/pabloasaravia/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <Instagram />
                                <p>@pabloasaravia</p>
                            </a>
                      </li>
                      <li>
                            <a 
                                href="https://www.youtube.com/channel/UCD3nL0wFohm2sx7ibKy2D3w" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                <YouTube />
                                <p>Pablo Saravia Decodificación</p>
                                <p>Transgeneracional</p>
                            </a>
                      </li>
                  </ul>
              </div>

              <div className="Footer--developed">
                  <a 
                    href="https://www.linkedin.com/in/ezequiel-d-ulivo-b4389b1b3/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                      <p>advertising marketing by <b>Eze</b></p>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/ldulivo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                      <p>developed by <b>Leo</b></p>
                  </a>
              </div>
          </div>
      </footer>
  )
}
