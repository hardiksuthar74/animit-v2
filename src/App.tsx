import Topbar from "@/components/navigation/Topbar";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import Home from "./pages/Home";

function App() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          duration: 5000,
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "12px",
            maxWidth: "200px",
            padding: "8px 10px",
            backgroundColor: "#cf9fff",
            color: "",
          },
        }}
      />
    </>
  );
}

export default App;
