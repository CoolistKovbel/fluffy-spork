
import Image from '../img/kevin-ku-w7ZyuGYNpRQ-unsplash.jpg'


export default function About () {


    const member = [
        {
            name: 'shpintzOG', 
            profile: Image,
            status: 'Dev',
        }
    ]


    return (
        <article id='aboutUs'>

        <header>
          <h2>About Us | GMB Succuss Squad</h2>
        </header>

        <div className='card'>

            <div className="image-container">
                <img src={member[0].profile} alt="unplash - kevin ku" className='image-block' />
            </div>

            <p>
                GMB Success Squad is a dynamic computer service company dedicated to enhancing the online presence of businesses, regardless of their scale. Specializing in optimizing Google My Business listings, we offer a diverse array of services tailored to boost your online visibility. From finely-tuned search optimization to crafting captivating descriptions and fostering authentic reviews, our mission is to empower your business with the tools it needs to attract more customers and achieve sustainable growth.
            </p>


            </div>

      </article>
    )
}