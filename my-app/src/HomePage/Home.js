import React, {useState} from "react";
import "./Home.css";
import capa1 from "./BannerVectores/capa1.png";
import capa2 from "./BannerVectores/capa2.png";
import capa3 from "./BannerVectores/capa3.png";

function Home(){
    const [offset, setOffset] = useState();
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);

    return(
        <div>
            <div className="parallax-banner">
                
                <div className="text-title">El Fuego <br/> Que Hemos <br/> Construido</div>
                <img src={capa1} alt="fondo de bosque en llamas" className="parallax-img" style={{top: (offset * 0.15 + 'px')}}/>
                <button className="start-btn">Comenzar</button>
                <img src={capa2} alt="arboles" className="parallax-img capa2" style={{top: (offset * -0.15 + 'px')}}/>
                <img src={capa3} alt="fuego" className="parallax-img" style={{top: (offset * -1 + 'px')}}/>
                <img src={capa3} alt="fuego" className="parallax-img capa3" style={{top: (offset * 0.15 + 'px')}}/>
            </div>
        </div>
    )
}

export default Home