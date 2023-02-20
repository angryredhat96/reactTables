import React from 'react';
import './Table.css';

export default function Table({ data, cell }) {
  const colNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];
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
            {colNum.map((el) => (
              <tr>
                <td className="head-col">{el}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
                <td>{cell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
