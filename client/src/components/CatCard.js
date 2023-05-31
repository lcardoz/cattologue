const CatCard = ({cat}) => {
    return (
        <div>
            <img src={cat.image} />
            <h2>{cat.name}</h2>
            <p>{cat.age + ' | ' + cat.sex}</p>
            <p>{cat.disposition}</p>
            {cat.user ? <p>{cat.user.name}</p> : null}
        </div>
    )
}

export default CatCard