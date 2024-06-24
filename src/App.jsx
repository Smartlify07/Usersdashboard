import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import RootLayout from "./layout/RootLayout";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import DashboardLayout from "./layout/DashboardLayout";
import CustomersPage from "./routes/CustomersPage";
import NotFound from "./routes/NotFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="customers" element={<CustomersPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
