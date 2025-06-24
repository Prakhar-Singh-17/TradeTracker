import React from 'react'

export default function Brokerage() {
  return (
    <div className="container px-5">
        <div className="row p-5">
        <h4 className="ps-0">Charges for account opening : </h4>
        <table className="table table-bordered border border-2 mt-3">
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online Account</td>
              <td>
                <img src="assets/free.png" style={{ width: "50px" }} />
              </td>
            </tr>
            <tr>
              <td>Offline Account</td>
              <td>
                <img src="assets/free.png" style={{ width: "50px" }} />
              </td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
