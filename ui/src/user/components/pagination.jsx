import {  useContext, useEffect } from "react";
import MainContext from "../context/context";

function Pagination({ activePage, setActivePage, totalPageCount }) {
    const pages = [];
  const { theme } = useContext(MainContext);
   
    pages.push(<li key={-1} onClick={() => setActivePage(1)}>&lsaquo;</li>);
    for (let i = 1; i <= totalPageCount; i++) {
      pages.push(
        <li
          onClick={() => {
            setActivePage(i);
          }}
          className={i === activePage ? "active" : ""}
          key={i}
        >
          {i}
        </li>
      );
    }
    pages.push(<li key={-2} onClick={() => setActivePage(totalPageCount)}>&rsaquo;</li>);
    return <ul className={`pagination ${theme ? '!bg-[#1F2937]' : 'bg-light'}`}>{pages}</ul>;
  }
  export default Pagination;
  