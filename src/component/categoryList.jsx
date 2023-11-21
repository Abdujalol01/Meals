import {CategoryListItem} from "./"
const CategoryList = ({category}) => {
  return (
    <div className="category_list">
      {category.map((item)=>(
        <CategoryListItem key={item.idCategory} {...item}/>
      ))}
    </div>
  )
}

export default CategoryList
