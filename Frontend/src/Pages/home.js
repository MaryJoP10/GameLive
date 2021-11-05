import  React from 'react';
import '../Styles/home.css'
import img1 from '../Images/Img1.jpg';
import img2 from '../Images/Img2.PNG';
import img3 from '../Images/Img3.PNG';
import { Slideshow, Slide} from '../Components/Home/Slide';

const Home = () =>{
    return(
        <div className="pagina">
            <Slideshow controles={true}>
                <Slide>
                <a href="https://www.unocero.com/videojuegos/gaming/nintendo-switch-expansion-pack-reaccion/">
                    <img src={img1} alt=""/>
                </a>
                </Slide>
                <Slide>
                <a href="https://www.vidaextra.com/juegos-nuevos/god-of-war-ragnarok-fecha-lanzamiento-ultimas-noticias-rumores">
                    <img src={img2} alt=""/>
                </a>
                </Slide>
                <Slide>
                <a href="https://www.shacknews.com/article/126907/the-game-awards-2021-comes-to-los-angeles-in-december">
                    <img src={img3} alt=""/>
                </a>
                </Slide>
            </Slideshow>
        </div>
    )
}

export default Home