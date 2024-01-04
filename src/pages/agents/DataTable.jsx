import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { fetchData } from "../../services/http-client";
import Loading from "../../components/base/loading";
import { tableWidthCalculator } from "../../utils/table-width-calculator";
import IconButton from "@mui/material/IconButton";
import SvgIconLoader from "../../components/base/svg-icon-loader";
import AlertDialog from "../../components/common/alert-dialog";
import EditAgentModal from "./edit-modal";
import { useNavigate } from "react-router-dom";
import { useAllAgents } from "../../features/useAllAgents";

const DataTable = ({ onRowClick, handleDetailsView }) => {
  const { allAgents, isFetching } = useAllAgents();

  const [width, setWidth] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
  }, []);

  const handleCloseDeleteDialog = () => {
    setOpenDialog(false);
  };
  function handleDelete(id) {
    console.log("delete", id);
    setOpenDialog(true);
  }

  function handleEdit(id) {
    console.log("edit", id);
    setOpenEditModal(true);
  }
  const handleCloseEditModal = () => {
    setOpenEditModal(false);
  };

  function handleDetails(id) {
    console.log("details", id);
    handleDetailsView(true);
  }

  const toolsButtons = (params) => (
    <>
      <IconButton
        onClick={() => handleDelete(params.row.id)}
        aria-label="delete"
        size="small"
        sx={{ color: "red" }}
      >
        <SvgIconLoader icon="delete" />
      </IconButton>
      <IconButton
        onClick={() => handleEdit(params.row.id)}
        aria-label="edit"
        size="small"
      >
        <SvgIconLoader icon="edit" />
      </IconButton>
      <IconButton
        onClick={() => handleDetails(params.row.id)}
        aria-label="details"
        size="small"
      >
        <SvgIconLoader icon="more" />
      </IconButton>
    </>
  );
  const columns = [
    {
      field: "operation",
      headerName: "عملیات",
      renderCell: toolsButtons,
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "userName",
      headerName: "نام کاربری",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "firstName",
      headerName: "نام",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "lastName",
      headerName: "نام‌خانوادگی ",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "phoneNumber",
      headerName: "شماره تماس",
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

  // const handleRowClick = (params) => {
  //   return onRowClick(params.row.id);
  // };

  return (
    <>
      <AlertDialog
        handleOpen={handleDelete}
        handleClose={handleCloseDeleteDialog}
        open={openDialog}
      />
      <EditAgentModal
        openFromOutside={openEditModal}
        handleClose={handleCloseEditModal}
      />
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
            rows={allAgents}
            align="center"
            columns={columns}
            // onRowClick={handleRowClick}
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
    </>
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
