import {useState} from "react";

function Search({cb }) {
  const [value, setValue] = useState("");
  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  const handleSubmit = () => {
    cb(value)
  }

  return(
    <div className="row">
      <div className="input-field col s12">
        <input type="search"
               id="search-field"
               placeholder="Search..."
               onKeyDown={handleKey}
               onChange={(e) => setValue(e.target.value)}
               value={value}
        />
        <button className="btn search_btn"
                onClick={handleSubmit}
        >Search</button>
      </div>
    </div>
  )
}
export default Search