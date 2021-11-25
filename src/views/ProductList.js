import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import productsData from "../products/productsData";
import { useDispatch, useSelector } from "react-redux";


export default function ProductList() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  /* const dispatch = useDispatch() */

  /* const itemsAdded1 = useSelector() */

  const [itemsAdded, setItemsAdded] = useState(0);

  const handleAddButton = () => {
    setItemsAdded(itemsAdded + 1);
  };

  
    return (
        <>
        <Container
        sx={{
          display: "grid",
          justifyItems: "center",
          paddingTop: "30px"
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={productsData.length}
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Container>
        <Container
        fixed
        sx={{
          display: "grid",
          gridGap: "10px",
          gridTemplateColumns: "200px 200px 200px 200px 200px",
          justifyContent: "center",
          paddingTop: "30px"
        }}
      >
        {productsData.map((item, index) => (
          <Card
            key={item.id}
            sx={{
              maxWidth: 200,
              display: "grid",
              gridTemplateRows: "150px 50px"
            }}
          >
            <CardActionArea>
              <CardContent sx={{ justifyContent: "center" }}>
                <Typography variant="body1" color="text.secondary">
                  {productsData[index].productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`$${productsData[index].price}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                  size="small"
                  color="success"
                  sx={{
                    "&:hover": {
                      backgroundColor: "success.dark",
                      color: "white",
                      opacity: [0.8],
                      justifyContent: "center"
                    }
                  }}
                  onClick={() => handleAddButton}
                >
                  Add
                </Button>
            </CardActions>
          </Card>
        ))}
      </Container>
        </>
    )
};