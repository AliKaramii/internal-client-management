import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Loading from "../../components/base/loading";
import { tableWidthCalculator } from "../../utils/table-width-calculator";
import IconButton from "@mui/material/IconButton";
import SvgIconLoader from "../../components/base/svg-icon-loader";
import AlertDialog from "../../components/common/alert-dialog";
import EditAgentModal from "./edit-modal";
import { useAllProjects } from "../../features/useAllProjectss";

const DataTable = ({ onRowClick, handleDetailsView }) => {
  const { isFetching, allProjects } = useAllProjects();

  const [width, setWidth] = useState();
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

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
    // {
    //   field: "id",
    //   headerName: "id",
    //   width,
    //   align: "center",
    //   headerAlign: "center",
    // },
    {
      field: "cDate",
      headerName: "تاریخ ایجاد",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "نام پروژه",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "agentFullName",
      headerName: "نام کارگزار",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "ownerFullName",
      headerName: "نام مالک",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "applications",
      headerName: "کاربری",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "floor count",
      headerName: "تعداد طبقات ",
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
    {
      field: "unitArea",
      headerName: "متراژ واحدها",
      width,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "units",
      headerName: "تعداد واحدها",
      width,
      align: "center",
      headerAlign: "center",
    },
  ];

  // setRows(fetchedData);

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
            rows={allProjects}
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
