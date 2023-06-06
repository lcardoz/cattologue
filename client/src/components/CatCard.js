const CatCard = ({cat}) => {
    return (
        <div className="catcard">
            <img src={cat.image} />
            <h2>{cat.name}</h2>
            <p>{cat.age + ' | ' + cat.sex}</p>
            <p>Disposition: {cat.disposition}</p>
            {cat.user ? <p>Human: {cat.user.name}</p> : null}
        </div>
    )
}

export default CatCard