import React, {useState, useEffect, useMemo} from "react";
import Axios from "axios";
import Pagination from "../general/Pagination";
import './table.css';
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
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
        <div style={{height: "100%"}}>
          <div className="headerBg">Music Venues</div>
          <table className="table-main">
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
                    <Tooltip title="Travel to Here">
                    <Link to='/Map' state={{ destLat: `${item.lat}`, destLon: `${item.lon}` }} style={{ color: "black" }}>
                        {item.Title}
                    </Link>
                    </Tooltip>
                    </td>
                    <td>
                        <div style={{width: "800px", height: "60px", overflow: "auto"}}>
                            <a href={item.Description} target="_blank">{item.Description}</a>
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
        </div>
      );
};
