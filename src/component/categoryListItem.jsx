import { Link } from "react-router-dom"

const CategoryListItem = (props) => {
  const {strCategory,strCategoryThumb,strCategoryDescription} = props
  return (
    <div className="row">
    <div className="col s12 ">
      <div className="card">
        <div className="card-image">
          <img src={strCategoryThumb}/>
        </div>
        <div className="card-content">
          <h3 className="card-title">{strCategory}</h3>
          <p>{strCategoryDescription.slice(0,60)}....</p>
        </div>
        <div className="card-action">
          <Link className="btn" to={`/filter-category/${strCategory}`}>Watch Categories</Link>
        </div>
      </div>
    </div>
  </div>
            
  )
}

export default CategoryListItem
