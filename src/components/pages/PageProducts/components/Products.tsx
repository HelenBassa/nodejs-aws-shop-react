/* eslint-disable */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";
import { useEffect, useState } from "react";
import { Product, AvailableProduct } from "~/models/Product";
import axios from "axios";
import API_PATHS from "~/constants/apiPaths";
import get from "lodash/get";

export default function Products() {
  const [products, setProducts] = useState<AvailableProduct[]>([]);

  useEffect(() => {
    (async function getProducts() {
      try {
        const response = await axios.get(`${API_PATHS.product}/products`, {});
        const products = get(response, "data.products", []);
        console.log(products);
        setProducts(products);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const { /*data = [],*/ isLoading } = useAvailableProducts();

  // console.log(data);
  // const products = data.products;
  // console.log(products);

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {products.map((product: AvailableProduct, index: number) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              sx={{ pt: "56.25%" }}
              image={`https://source.unsplash.com/random?sig=${index}`}
              title="Image title"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.title}
              </Typography>
              <Typography>{formatAsPrice(product.price)}</Typography>
              <Typography gutterBottom variant="body1" component="p">
                Items: {product.count}
              </Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={product} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
