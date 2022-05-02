import productApi from "api/productApi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useProductDetail(productId) {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchApiProduct = async () => {
      try {
        setLoading(true);
        const result = await productApi.get(productId);
        // console.log("fetch P_API: ", result);
        setProduct(result);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        navigate("/product");
        console.log(">>>Failed to fetch product data: ", error);
      }
    };
    fetchApiProduct();
  }, [navigate, productId]);

  return { product, loading };
}
