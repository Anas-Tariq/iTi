function Card({ data }) {
    return (
        <div className="col-3">
            <div className="card my-2" style={{ width: "18rem", height: "35rem" }}>
                <img src={data.volumeInfo.imageLinks.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{data.volumeInfo.title}</h5>
                    <p className="card-text">{data.volumeInfo.publisher}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
