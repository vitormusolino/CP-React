import Card from "../Card";

function Cards() {

    const infoCards = [
        {
            color:"#F1C2B0",
            image:"../public/youtube.png",
            number:"01",
            social:"Youtube",
            texto:"Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo."
        },
        {
            color:"#F9EB98",
            image:"../public/tiktok.png",
            number:"02",
            social:"Tiktok",
            texto:"Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok."
        },
        {
            color:"#C0D9DD",
            image:"../public/facebook.png",
            number:"03",
            social:"Facebook",
            texto:"Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook."
        },
        {
            color:"#6975E8",
            image:"../public/instagram.png",
            number:"04",
            social:"Instagram",
            texto:"Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels."
        },
    ]

    return ( <>
            <div className="conjunto-cards container">
                <Card infoCards={infoCards}/>
            </div>
        </> );
}

export default Cards;