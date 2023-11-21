import {FilterListItem} from "./"
const FilterList = ({meal}) => {
  return (
    <div className="category_list">
      {meal.map((item)=>(
        <FilterListItem key={item.idMeal} {...item}/>
      ))}
    </div>
  )
}

export default FilterList
