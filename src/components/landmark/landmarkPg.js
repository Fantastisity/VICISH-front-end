import React, {useState, useEffect, useMemo} from "react";
import Axios from "axios";
import Pagination from "../general/Pagination";
import './table.css';
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import NearMeIcon from '@mui/icons-material/NearMe';

export default function Landmark() {
    var pageSize = 6;
    const [currentPage, setCurrentPage] = useState(0);
    const [landmarks, setLandmarks] = useState([]);
    useEffect(() =>{
        Axios.get("https://vicish.herokuapp.com/landmark").then((response) => {
            setLandmarks(response.data);
            setCurrentPage(1)
        })
    },[])
    
      const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        return landmarks.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);

      return (
        <div style={{height: "100%"}}>
          <div className="headerBg">Landmarks</div>
          <table className="table-main">
            <thead className="table-head">
              <tr>
                <th style={{width: "450px"}}>Place</th>
                <th/>
                <th>Description</th>
              </tr>
            </thead>
            <tbody className="table-body">
              {currentTableData && currentTableData.map(item => {
                return (
                  <tr>
                    <td>
                      {item.Title}
                    </td>
                    <td>
                    <Tooltip title="Travel to Here">
                    <Link to='/Map' state={{ destLat: `${item.lat}`, destLon: `${item.lon}` }} style={{ color: "black" }}>
                        <NearMeIcon/>
                    </Link>
                    </Tooltip>
                    </td>
                    <td>
                        <div style={{width: "1000px", height: "60px", overflow: "auto"}}>
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
            totalCount={landmarks.length}
            pageSize={pageSize}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      );
};
