import React from 'react';
import './Table.css';

export default function Table({ data, cell }) {
  const rowNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];
  const repeatCell = function foo() {
    const arr = [];
    for (let i = 0; i < data.length; i += 1) {
      arr.push(cell);
    }
    return arr;
  };

  return (
    <div className="scroll-table">
      <table>
        <thead>
          <tr>
            <th className="th-head-col"> </th>
            {data.map((el) => <th>{el}</th>)}
          </tr>
        </thead>
      </table>
      <div className="scroll-table-body">
        <table>
          <tbody>
            {rowNum.map((el) => (
              <tr>
                <td className="head-col">{el}</td>
                {repeatCell().map((elem) => <td>{elem}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
