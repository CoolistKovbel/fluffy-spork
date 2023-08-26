import { useState, userState } from 'react'
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillFileExcel } from 'react-icons/ai'

export default function ContactUs () {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address,setAddress] = useState('')
    const [message, setMessage] = useState('')

    const SubmitHandler = (e) => {
        e.preventDefault()

        
        const data = {
            name: name,
            email: email,
            phone: phone,
            address: address,
            message: message,
        }





        setName('')
        setEmail('')
        setPhone('')
        setAddress('')
        setMessage('')
    }



    return (
        <div id='contactUs'>

            <h3>Contact Us</h3>

            <div className='contact'>

                <div className='contact__items'>
                    <div className='image-container'>
                        <img src="https://avatars.githubusercontent.com/u/49249813?v=4" className='image-block'/>
                    </div>

                    <form onSubmit={SubmitHandler}>

                        <label>
                            Name:
                            <input 
                                type="text" 
                                placeholder='name'
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <label>
                            Email:
                            <input 
                                type="email"
                                placeholder='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label>
                            phone:
                            <input 
                                type='phone' 
                                placeholder='202-112-2223'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>

                        <label>
                            address:
                            <input 
                                type='address' 
                                placeholder='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </label>

                        <textarea 
                            placeholder='enter reason of contact'
                            onChange={(e) => setMessage(e.target.value)}
                        >

                        </textarea>

                        <button>
                            Submit
                        </button>

                    </form>
                </div>


                {/* Social */}
                <div className='contact__social'>

                    <div>
                        <i><AiFillLinkedin/></i>
                        <a href="#">linkIn</a>
                    </div>

                    <div>
                        <i><AiFillInstagram/></i>
                        <a href="#">Instagram</a>
                    </div>

                    <div>
                        <i><AiFillGithub/></i>
                        <a href="#">github</a>
                    </div>

                    <div>
                        <i><AiFillFileExcel /></i>
                        <a href="#">twitter</a>
                    </div>


                </div>


            </div>

      </div>
    )
}