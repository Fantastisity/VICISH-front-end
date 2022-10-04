import React, {useState, useEffect, useMemo} from "react";
import Axios from "axios";
import Pagination from "../general/Pagination";
import './table.css';
import { Link } from "react-router-dom";
export default function MusicVenue() {
    var pageSize = 6;
    const [currentPage, setCurrentPage] = useState(0);
    const [venues, setVenues] = useState([]);
    useEffect(() =>{
        Axios.get("https://vicish.herokuapp.com/music").then((response) => {
            setVenues(response.data);
            setCurrentPage(1)
        })
      },[])
    
      const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return venues.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);

      return (
        <>
          <table className="table-main" style={{width: "1200px", marginLeft: "121px"}}>
            <thead className="table-head">
              <tr>
                <th style={{width: "300px"}}>Place</th>
                <th style={{width: "300px"}}>Website</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {currentTableData && currentTableData.map(item => {
                return (
                  <tr>
                    <td>
                    <Link to='/Map' state={{ destLat: `${item.lat}`, destLon: `${item.lon}` }} style={{ color: "black" }}>
                        {item.Title}
                    </Link>
                    </td>
                    <td>
                        <div style={{width: "800px", height: "60px", overflow: "auto"}}>
                            {item.Description}
                        </div>
                     </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={venues.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </>
      );
};
