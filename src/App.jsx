import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";
import { Donate } from "./pages/Donate";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";
import { FAQ } from "./pages/FAQ";
import { Projects } from "./pages/Projects";
import { Financials } from "./pages/Financials";
import { Header } from "./pages/Header";
import { Footer } from "./pages/Footer";
import { AdminReport } from "./pages/Admin-Report";
import { AdminTransaction } from "./pages/Admin-Transaction";
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";
import { AdminUpdate } from "./pages/Admin-Update";
import { AdminLayout } from "./components/layouts/Admin-Layout";
import { AllTransactionFinancial } from "./pages/AllTransactionFinancial";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/transactions" element={<AllTransactionFinancial />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="users" element={<AdminUsers />} />
          <Route path="report" element={<AdminReport />} />
          <Route path="transactions" element={<AdminTransaction />} />
          <Route path="contacts" element={<AdminContacts />} />
          <Route path="users/:id/edit" element={<AdminUpdate />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
