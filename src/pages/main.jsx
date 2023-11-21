import { useEffect, useState } from "react"
import { allCategories } from "../service/config"
import {CategoryList, Loader, Search} from "../component"
import { useLocation,useNavigate } from "react-router-dom"
const Main = () => {
  const [category , setCategory] = useState([])
  const [filteredCategory , setFilteredCategory] =useState([])
  const navigate = useNavigate()
  const {pathname,search} = useLocation()
  const handleSearch =(str)=>{
    setFilteredCategory(category.filter((item)=> item.strCategory.toLowerCase().includes(str.toLowerCase())))
    navigate({
    pathname:"/",
    search:`?search=${str}`
    })
  }
  useEffect(()=>{
    allCategories().then((data)=>(
      setCategory(data.categories),
      setFilteredCategory(search ?
        data.categories.filter(item =>
          item.strCategory
            .toLowerCase()
            .includes(search.split("=")[1].toLowerCase())
          ) : data.categories
      )
    )).catch((err)=> console.log(err));
  },[search])
  
  return (
    <div className="container content  ">
      <Search cb={handleSearch}/>
     {!category  ? (
      <Loader/>
     ):(
      <CategoryList category={filteredCategory}/>
     )}
    </div>
  )
}

export default Main
