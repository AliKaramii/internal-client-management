import { Toaster } from "react-hot-toast";

function CustomToaster() {
  return (
    <Toaster
      position="top-center"
      gutter={12}
      containerStyle={{ margin: "8px" }}
      toastOptions={{
        success: {
          duration: 3000,
          style: { backgroundColor: "#4CAF50", color: "#F5F5F5" },
        },
        error: {
          duration: 5000,
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            style: { backgroundColor: "lightred", color: "#F5F5F5" },
          },
        },
      }}
    />
  );
}

export default CustomToaster;
