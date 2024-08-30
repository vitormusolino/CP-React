export default function Planos() {
    return ( <>
    <div className="bg-planos">
        <div className="container container-planos">
            <h1>Planos</h1>

            <div class="card-planos">
                <div className="tittle">
                    <h2>Individual</h2>
                </div>
                <div className="card-container">
                    <div class="user-info">
                        <span>1 Usuário</span>
                    </div>
                        <select>
                            <option>10 Vídeos R$15</option>
                        </select>
                </div>
                    <button className="button">Cadastrar</button>
            </div>
        </div>
    </div>
            
            </> );
}
