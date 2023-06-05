import React from 'react'

const TableProdKey = () => {
  return (
    <>
    <style jsx>{`
    .table-key-notes {
      padding: 2px 15px 10px;
    }
    table {
      border: 1px solid rgba(0,0,0,.3);
      width: 100%;
      font-size: 14px;
      border-spacing: 0;
      border-collapse: collapse;
    }
    .table-key-notes tr .left {
      border-right: 1px solid rgba(0,0,0,.3);
    }
    .table-key-notes tr .left, .table-key-notes tr .right {
      border-bottom: 1px solid rgba(0,0,0,.3);
      padding: 10px 15px;
      vertical-align: top;
    }
    .table-key-notes table tr:nth-child(odd) {
      background: #eee;
    }
    .table-key-notes table th {
      text-align: start;
      font-weight: 600;
      width: 220px;
    }
    .table-key-notes > h4 {
      padding-bottom: 10px;
    }
    @media only screen and (max-width: 768px) {
      .table-key-notes {
        padding: 0 12px;
      }
    }
    `}</style>
    <section className="table-key-notes">
      <h4>Product Specifications</h4>
      <table>
        <tbody>
          <tr>
              <th className="left">Brand</th>
              <td className="right">Lenovo</td>
            </tr>
            <tr>
              <th className="left">Display Size</th>
              <td className="right">14 inch</td>
            </tr>
            <tr>
              <th className="left">Display Type</th>
              <td className="right">IPS</td>
            </tr>
            <tr>
              <th className="left">Operating System</th>
              <td className="right">Chrome OS</td>
            </tr>
        </tbody>  
      </table>
    </section>
    </>
  )
}

export default TableProdKey