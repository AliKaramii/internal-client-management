import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Loading from "../../components/base/loading";
import { tableWidthCalculator } from "../../utils/table-width-calculator";
import { useAllFinancials } from "../../features/useAllFinances";

const DataTable = ({ onRowClick }) => {
  const { isFetching, allFinancials } = useAllFinancials();
  const [width, setWidth] = useState();

  const columns = [
    {
      field: "projectName",
      headerName: "نام پروژه",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "projectAgentFullName",
      headerName: "کارگزار",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "commissionFee",
      headerName: "کمیسیون",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "projectOwnerFullName",
      headerName: "مالک",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "وضعیت",
      width,
      align: "center",
      headerAlign: "center",
    },
  ];

  useEffect(() => {
    const container = document.querySelector("#root");
    const clientWidth = container.clientWidth;
    setWidth(tableWidthCalculator(clientWidth, columns.length));
  }, []);

  const handleRowClick = (params) => {
    return onRowClick(params.row.id);
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
      {isFetching ? (
        <Loading top={0} />
      ) : (
        <DataGrid
          fullWidth={true}
          hideFooterSelectedRowCount={true}
          disableColumnMenu={true}
          density="compact"
          rows={allFinancials}
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
