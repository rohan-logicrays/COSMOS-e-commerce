import { useMemo, useState, lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartDrawer from "./components/CartDrawer";
import Laoder from "./components/Laoder";
import { useSelector } from "react-redux";
import CustomScrollContainer from "./components/CustomScrollContainer";

const LazyHeader = lazy(() => import("./components/Header"));
const LazyHero = lazy(() => import("./components/Hero"));
const LazyProductShowcaseSection = lazy(() =>
  import("./components/ProductShowcaseSection")
);
const LazyProductCategoriesSection = lazy(() =>
  import("./components/ProductCategoriesSection")
);
const LazyFooter = lazy(() => import("./components/Footer"));
const LazySingleProductPage = lazy(() => import("./pages/SingleProductPage"));
const LazyCategoryPage = lazy(() => import("./pages/CategoryPage"));
const LazyCheckOutPage = lazy(() => import("./pages/CheckOutPage"));
const LazySearchResultPage = lazy(() => import("./pages/SearchResultPage"));
const LazyLoginPage = lazy(() => import("./authentication/LoginPage"));
const LazySignupPage = lazy(() => import("./authentication/SignUpPage"));
const LazyProfilePage = lazy(() => import("./pages/ProfilePage"));

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
      <div className="font-custom">
        <Suspense fallback={<Laoder />}>
          <BrowserRouter>
            <LazyHeader
              handleCartClick={handleCartClick}
              isCartOpen={isCartOpen}
            />

            <CartDrawer
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <LazyHero isCartOpen={isCartOpen} />
                    <LazyProductShowcaseSection isCartOpen={isCartOpen} />
                    <LazyProductCategoriesSection isCartOpen={isCartOpen} />
                    <LazyFooter isCartOpen={isCartOpen} />
                  </>
                }
              />
              <Route
                path="/product/:productId"
                element={<LazySingleProductPage />}
              />
              <Route
                path="/category/:category"
                element={<LazyCategoryPage />}
              />
              <Route
                path="/checkout"
                element={<LazyCheckOutPage /> }
              />
              <Route path="/search/:query" element={<LazySearchResultPage />} />
              <Route path="/login" element={<LazyLoginPage />} />
              <Route path="/signup" element={<LazySignupPage />} />
              <Route path="/profile" element={<LazyProfilePage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </div>
  );
}

export default App;
