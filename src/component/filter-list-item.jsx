import { Link } from "react-router-dom"

const FilterListItem = (props) => {
  const {strMeal,strMealThumb,idMeal} = props
  return (
    <div className="row">
    <div className="col s12 ">
      <div className="card">
        <div className="card-image">
          <img src={strMealThumb}/>
        </div>
        <div className="card-content">
          <h3 className="card-title">{strMeal.slice(0,20)}...</h3>
        </div>
        <div className="card-action">
          <Link className="btn" to={`/recipe/${idMeal}`}>Watch Recipe</Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default FilterListItem
