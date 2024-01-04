import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { fetchData } from "../../services/http-client";
import Loading from "../../components/base/loading";
import { tableWidthCalculator } from "../../utils/table-width-calculator";

const DataTable = ({ onRowClick }) => {
  const [rows, setRows] = useState();
  const [width, setWidth] = useState();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "date",
      headerName: "تاریخ ایجاد",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "subject",
      headerName: "موضوع ",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "text",
      headerName: "متن",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "وضعیت",
      width,
      hide: "true",
      align: "center",
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    const container = document.querySelector("#root");
    const clientWidth = container.clientWidth;
    setWidth(tableWidthCalculator(clientWidth, columns.length));

    fetchData("/sample-table-rows").then((fetchedData) => {
      return setRows(fetchedData);
    });
  }, []);

  const handleRowClick = (params) => {
    return onRowClick("details", params.row.id);
  };

  return (
    <Box
      sx={{
        display: "grid",
        maxWidth: "100%",
        padding: 0,
        overflow: "auto",
        minHeight: 300,
      }}
    >
      {rows ? (
        <DataGrid
          fullWidth={true}
          hideFooterSelectedRowCount={true}
          disableColumnMenu={true}
          density="compact"
          rows={rows}
          align="center"
          columns={columns}
          onRowClick={handleRowClick}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          className="tableFooterDir"
        />
      ) : (
        <Loading top={0} />
      )}
    </Box>
  );
};

export default DataTable;

// {
//   field: "fullName",
//   headerName: "نام کامل",
//   description: "This column has a value getter and is not sortable.",
//   sortable: false,
//   width: 180,
//   valueGetter: (params) =>
//     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
// },
