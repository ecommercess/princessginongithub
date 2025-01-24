import './hero.css'
import Picture from '../assets/cessilia.png'

export default function Nav() {
    return(
        <div className='container'>
            <div className='subContainer'>
                <div className='textContainer'>
                    <p className='text1'>Hi! I'm Princess Allanah Ginon</p>
                    <p className='text2'> An enthusiastic System Analyst</p>
                </div>
            </div>
            <div className='subContainer'>
                <img className='image' src={Picture} alt="" />
            </div>
        </div>
    );


}

