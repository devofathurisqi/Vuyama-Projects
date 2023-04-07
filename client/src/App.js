import { Box } from "@chakra-ui/react"
import "./Style/App.css"
import { Routes, Route} from "react-router-dom"

//import element
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import ProductDetail from "./Pages/ProductDetail";
import TermAndCondition from "./Pages/TermAndCondition";
import FAQ from "./Pages/FAQ";
import Reseller from "./Pages/Reseller";
import AdminDashboard from "./Pages/AdminDashboard";
import NotFound from "./Pages/NotFound";


function App() {
  const username = localStorage.getItem("username");


  return (
    <Box>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/collection/detail/:id" element={<ProductDetail />} />
        <Route path="/term&condition" element={<TermAndCondition />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/reseller" element={<Reseller />} />

        {username && (
          <Route path="/dashboard" element={<AdminDashboard />} />
        )}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;