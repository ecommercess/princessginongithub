
import './styles/hero.css'
import cess from './../assets/images/cessilia.png'
import Button from './button'


function App() {
  return (
    <>
    <div className="container">
        <div className="descriptionContiner">
            <h1>Hi I am <span className='name'>Princess Allanah Ginon</span></h1>
            <p className='desciption'>An Enthusiastic System Analyst</p>
            <br />
            <Button title="About Me" path="/about" />
        </div>
        <div className="imageContainer">
            <img src={cess} alt="" className="profileImg" />
        </div>
    </div>
    </>
  )
}

export default App
