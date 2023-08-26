
import { AiFillLinkedin, AiFillInstagram, AiFillGithub, AiFillFileExcel } from 'react-icons/ai'

export default function ContactUs () {
    return (
        <div id='contactUs'>

            <h3>Contact Us</h3>

            <div className='contact'>

                <div className='contact__items'>
                    <div className='image-container'>
                        <img src="https://avatars.githubusercontent.com/u/49249813?v=4" className='image-block'/>
                    </div>

                    <form>

                        <label>
                            Name:
                            <input type="text" placeholder='name' />
                        </label>

                        <label>
                            Email:
                            <input type="email" placeholder='email' />
                        </label>

                        <label>
                            phone:
                            <input type='phone' placeholder='202-112-2223'/>
                        </label>

                        <label>
                            address:
                            <input type='address' placeholder='address' />
                        </label>

                        <textarea placeholder='enter reason of contact'>

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