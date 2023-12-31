import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { formatAsPrice } from "~/utils/utils";
import {
  useAvailableProducts,
  useDeleteAvailableProduct,
  useInvalidateAvailableProducts,
} from "~/queries/products";
import { useEffect, useState } from "react";
import axios from "axios";
import { AvailableProduct } from "~/models/Product";
import API_PATHS from "~/constants/apiPaths";
import get from "lodash/get";

export default function ProductsTable() {
  const [products, setProducts] = useState<AvailableProduct[]>([]);
  //const { mutate: deleteAvailableProduct } = useDeleteAvailableProduct();
  //const invalidateAvailableProducts = useInvalidateAvailableProducts();

  useEffect(() => {
    (async function getProducts() {
      try {
        const response = await axios.get(`${API_PATHS.product}`, {});
        const products = get(response, "data.products", []);
        setProducts(products);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const { mutate: deleteAvailableProduct } = useDeleteAvailableProduct();
  const invalidateAvailableProducts = useInvalidateAvailableProducts();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell component="th" scope="row">
                {product.title}
              </TableCell>
              <TableCell align="right">{product.description}</TableCell>
              <TableCell align="right">
                {formatAsPrice(product.price)}
              </TableCell>
              <TableCell align="right">{product.count}</TableCell>
              <TableCell align="right">
                <Button
                  size="small"
                  color="primary"
                  component={Link}
                  to={`/admin/product-form/${product.id}`}
                >
                  Manage
                </Button>
                <Button
                  size="small"
                  color="secondary"
                  onClick={() => {
                    if (product.id) {
                      deleteAvailableProduct(product.id, {
                        onSuccess: invalidateAvailableProducts,
                      });
                    }
                  }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
