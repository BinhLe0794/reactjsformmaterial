import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NotFound } from "components/Common/NotFound/NotFound";
import Layout from "components/Layout/Layout";
import CartPage from "features/Cart/CartPage";
import HomePage from "features/HomePage";
import ProductDescription from "features/Product/components/Menu/ProductDescription";
import DetailPage from "features/Product/pages/DetailPage";
import ListPage from "features/Product/pages/ListPage";
import { Route, Routes } from "react-router-dom";
const theme = createTheme();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* HOME PAGE */}
          <Route index element={<HomePage />} />
          {/* PRODUCT LIST */}
          <Route path="products" element={<ListPage />}></Route>
          {/* PRODUCT DETAILS */}
          <Route path="products/:id" element={<DetailPage />}>
            <Route index element={<ProductDescription />}></Route>
            <Route path="additional" element={<h1>Additional</h1>}></Route>
            <Route path="reviews" element={<h1>Reviews</h1>}></Route>
          </Route>
          {/* GIO HANG */}
          <Route path="cart" element={<CartPage />}></Route>
          {/* NOT FOUND */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
