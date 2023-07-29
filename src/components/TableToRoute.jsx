import React, { useState } from "react";
import { Table } from "antd";

const TableToRoute = ({ handleRowClick, routes }) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);

  const columns = [
    { title: "Маршруты", dataIndex: "routeNumber", key: "routeNumber" },
  ];

  const dataSource = routes.map((route, index) => ({
    key: index,
    routeNumber: `Маршрут №${index + 1}`,
  }));

  const rowClassName = (record, index) => {
    return index === selectedRowIndex ? "selected-row" : "";
  };

  const handleRowClickInternal = (record, index) => {
    setSelectedRowIndex(index);
    handleRowClick(record);
  };

  return (
    <Table
      id="my-table"
      className="table_to_map"
      dataSource={dataSource}
      columns={columns}
      pagination={false}
      onRow={(record, index) => ({
        onClick: () => handleRowClickInternal(record, index),
      })}
      rowClassName={rowClassName}
    />
  );
};

export default TableToRoute;
