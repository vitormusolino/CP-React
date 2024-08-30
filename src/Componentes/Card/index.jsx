export default function Cards({infoCards}) {
    return ( 
        <>
        {
        infoCards.map( info=>(
            <div className="card" style={{backgroundColor:`${info.color}`}}>    
                <img src={info.image}/>
                <h2>{info.number}</h2>
                <h3>{info.social}</h3>
                <p>{info.texto}</p>
            </div>
        )
        )
        }
        </>
     );
}

