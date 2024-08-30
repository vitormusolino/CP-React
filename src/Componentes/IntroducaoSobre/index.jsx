import Tela1 from "../../assets/tela1.png"
import Tela2 from "../../assets/tela2.png"

export default function IntroducaoSobre() {
    return ( <>
        <div className="container container-sobre">
            <div className="introducao">
                <h1>Bem-vindo à revolução dos vídeos!</h1>
                <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
             <a href="/contato">Baixe o App</a>
            </div>
            <div className="flex-image">
                <img src={Tela1} alt="" />
                <img src={Tela2} alt="" />
            </div>
        </div>
    </> );
}

