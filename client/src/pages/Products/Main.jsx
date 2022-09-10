import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Text = styled(Typography)`
  white-space: nowrap;
  overflow: hidden;
  width: 300px;
  text-overflow: ellipsis;
  text-align: center;
`;
export default function Main() {
  const { products } = useSelector((state) => state.getProducts);
  return (
    <Box sx={{ flexGrow: 1 }} style={{ margin: 25 }}>
      <Grid container spacing={2} columns={16}>
        {products.map((product, index) => {
          return (
            <>
            
              <Grid item xl={4}>
              <Link to={`products/${product.id}`} style={{textDecoration: 'none', color: 'inherit'}}>
                <Item>
                  <img
                    src={product.image}
                    alt="p1"
                    width="150px"
                    height="200px"
                  />
                  <Text>{product.title}</Text>
                </Item>
                </Link>
              </Grid>
             
            </>
          );
        })}
      </Grid>
    </Box>
  );
}
