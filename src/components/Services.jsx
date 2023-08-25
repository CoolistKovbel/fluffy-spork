import {FaUserCog, FaUserShield, FaHouseUser} from 'react-icons/fa'
import Image from '../img/arrow-showing-increasing_1133-40.jpg'

export default function Services() {

    const features = [
        {
            title: 'Google Business Profile Setup',
            icon: <FaUserCog />,
            description: 'Our GMB Profile Setup Service is the best way to get started if you don’t already have a GBP listing and you don’t want to go through the pain of setting it up yourself.'
        },
        {
            title: 'Google Business Profile Management',
            icon: <FaUserShield />,
            description: 'Our GMB Profile Management Service gives you a hands off solution for get higher rankings, greater visibility, and more business from your Google Business Profile.'
        },
        {
            title: 'Google Business Profile Optimization',
            icon: <FaHouseUser />,
            description: 'Our GMB Profile Optimization Service is ideal if you already have a GBP listing, but you not 100% sure if you’re doing everything to get the best results out of your profile.'
        }
    ]



    return (
        <div id='services'>

            <div className='services__content'>

                <div className='services__text'>
                    <h2>Our Specialty</h2>
                    <p>
                        In today's digital landscape, local businesses face the challenge of standing out in Google searches. With nearly half of all Google queries resulting in local search outcomes, a strong presence on Google Business Profile is imperative.
                        At GMB Success Squad, we specialize in optimizing your Google Business Profile for exceptional results. Our comprehensive services encompass both initial enhancements and ongoing management, ensuring a steady influx of new customers each week. Say goodbye to the complexities and uncertainties of conquering the local pack and Google Maps – we've got you covered!
                        Contact us today to start your journey toward local search domination.
                    </p>
                </div>
                
                <div className='services__image__container'>
                    <img src={Image} alt='https://www.freepik.com/free-vector/arrow-showing-increasing_894507.htm#query=upward%20graph&position=6&from_view=keyword&track=ais' />
                </div>

            </div>

            <div className='services__features'>
                <h3>Eliminate frustration, Spend less time, Get more results</h3>
                <div className='features'>
                    {
                        features.map((feature) => (
                            <div>
                                <h4>{feature.title}</h4>
                                <i>{feature.icon}</i>
                                <p>{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}