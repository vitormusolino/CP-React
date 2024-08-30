import HeroImage from "../../assets/Heroimage.png"

export default function Introducao() {
    return ( <>
    <div className="container container-principal">
          <div className="introducao">
             <h1>Crie seus vídeos online</h1>
             <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
            <a href="/sobre">Começar agora</a>
         </div>
         <div>
             <img src={HeroImage} alt="" />
         </div>
    </div>
        </> );
}

