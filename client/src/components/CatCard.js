import {useNavigate} from "react-router-dom"

const CatCard = ({cat, user}) => {
    const navigate = useNavigate()

    return (
        <div className="catcard">
            {/* <img src={cat.image} /> */}
            <h2>{cat.name}</h2>
            <p>{cat.age + ' | ' + cat.sex + ' | ' + cat.color}</p>
            <p>Disposition: {cat.disposition}</p>
            <p>Human: {cat.user.name}</p>
            {user && cat.user.id === user.id ?
                <button onClick={() => navigate('/edit-cat')}>Edit Cat</button>
            : null}
        </div>
    )
}

export default CatCard