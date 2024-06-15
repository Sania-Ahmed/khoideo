function Card({confo}) {
    return (
        <>
            <div className="confo card w-[full] bg-base-100 shadow-xl">
                <div className="card-body">         
                    <p>{confo.MSG}</p>              
                </div>
            </div>
        </>
    )
}

export default Card