import React from 'react'
import "./Pagination.css"
export default function Pagination(props) {
    return (
        <div >
            <nav aria-label="Page navigation example">
  <ul className="pagination justify-content-center">
    <li className="page-item">
      <a className={`page-link page-link-${props.elementmode} bg-${props.elementmode}`} href="/" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a className={`page-link page-link-${props.elementmode} bg-${props.elementmode}`} href="/">refresh</a></li>
    {/* <li className="page-item"><a className={`page-link page-link-${props.elementmode} bg-${props.elementmode}`} href="/">2</a></li>
    <li className="page-item"><a className={`page-link page-link-${props.elementmode} bg-${props.elementmode}`} href="/">3</a></li> */}
    <li className="page-item">
      <a className={`page-link page-link-${props.elementmode} bg-${props.elementmode}`} href="/" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
        </div>
    )
}
