export default function Planos() {
    return (
        <div className="bg-planos">
            <h1>Planos</h1>
            <div className="container-cards">
                <div className="card-planos" id="individual">
                        <div className="tittle">
                            <h2>Individual</h2>
                        </div>
                        <div className="card-container">
                            <div>
                                <span className="user-info">1 Usuário</span>
                                <select name="select-10" className="select-planos">
                                    <option value="10-videos">10 Vídeos <span className="span-select">R$15</span></option>
                                </select>
                            </div>
                            <button className="button">Cadastrar</button>
                        </div>
                </div>
                
                <div className="card-planos">
                    <div className="tittle">
                        <h2>Profissional - Times</h2>
                    </div>
                    <div className="card-container">
                        <div className="selects">
                            <div>
                                <span className="user-info">1-10 Usuários</span>
                                <select name="select-10" className="select-planos">
                                    <option value="10-videos">Vídeos Ilimitados <span className="span-select">R$40</span></option>
                                </select>
                            </div>
                            <div>
                                <span className="user-info">+10 Usuários</span>
                                <select name="select-10" className="select-planos">
                                    <option value="10-videos">Vídeos Ilimitados <span className="span-select">R$20</span></option>
                                </select>
                            </div>
                        </div>
                        <button className="button">Cadastrar</button>
                    </div>
                </div>

                <div className="card-planos">
                    <div className="tittle">
                        <h2>Individual</h2>
                    </div>
                    <div className="card-container">
                        <div className='img-corporativo'>
                            <img src="../public/corporativo.svg" alt="Mulher segurando um celular" />
                        </div>
                        <button className="button">Entre Em Contato</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
