import React from "react";

import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetchData(param).then(res => setList(res.data.results))
  }, [param]);
  
  console.log(list)
  return(
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{ title }</h2>
        <div className="col">
          <div className="row__posters">
            {
              list.map((item, index) => <img
                key={item.id || index}
                className="row__poster row__posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title || item.name || 'Movie Poster'}
              />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;