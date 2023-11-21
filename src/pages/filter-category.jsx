import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {filterByCategory} from "../service/config"
import {FilterList, Loader} from "../component"
const FilterCategory = () => {
  const navigate = useNavigate()
  const {id}= useParams()
  const [meal ,setMeal] = useState([])
  useEffect(()=>{
    filterByCategory(id).then((data)=>{
      setMeal(data.meals)
    }).catch((err)=> console.log(err));
  },[])
  return (
    <div className="container content">
      {!meal.length ? (
        <Loader/>
      ): (
        <>
        <button className="btn" onClick={()=> navigate("/")}>Go Back</button>
        <FilterList meal={meal}/>
        </>
      )}
    </div>
  )
}

export default FilterCategory
