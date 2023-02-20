import React from 'react';
import Input from '../../ui/Input/Input';
import Table from '../../ui/Table/Table';
import './TimePage.css';

export default function TimePage() {
  const time = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '00', '01', '02', '03', '04', '05'];
  return (
    <div className="table-element">
      <Table data={time} cell={<Input />} />
    </div>
  );
}
