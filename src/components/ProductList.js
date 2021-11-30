import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {itemsAddedCounter} from "../Redux/itemsAddedSlice";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react";
import { selectProducts} from "../Redux/selectors";
import { getProducts } from "../Redux/productsThunks";
import Loading from "./Loading";
import { cartProducts } from "../Redux/cartProductsSlice";

export default function ProductList() {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const itemsMaxPerPage = 10;
    const productsData = useSelector(selectProducts);
    const [newArray, setNewArray] = useState([]);
    const totalPages = Math.ceil(productsData.length/itemsMaxPerPage);    

    const currentPage = useMemo(
        () => new URLSearchParams(location.search).get("page"),
        [location.search]
    );
    //const [page, setPage] = React.useState(currentPage ? Number(currentPage) : 1);

    const handleChange = (event, value) => {
      history.push(`${location.pathname}?page=${value}`);
      setPage(value);
  };

  /* const handleAddButton = (event) => {
      event.preventDefault();
      dispatch(itemsAddedCounter());
  }; */
    
    useEffect(() => {
      if (productsData.length === 0) {
        dispatch(getProducts());
      }
      // eslint-disable-next-line
    },[]);

    useEffect(() => {
      if (productsData){
        if (Number(currentPage) === 1) {
          const Arraynew = productsData.slice(0,10);
          setNewArray(Arraynew);
          } else {
          const ArrayNew = productsData.slice(10*Number(currentPage)-10,10*Number(currentPage));
          setNewArray(ArrayNew);
          }
      }        
        history.replace(`${location.pathname}?page=${page}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentPage, productsData]);
    
    return (
        <>
        <Container
            sx={{
                display: "grid",
                justifyItems: "center",
                paddingTop: "20px"
            }}
        >
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
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
          gridTemplateColumns: "150px 150px 150px 150px 150px",
          justifyContent: "center",
          paddingTop: "20px"
        }}
        >
        {(newArray.length !== 0)?newArray.map((item, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 150,
              display: "grid",
              gridTemplateRows: "100px 30px",
              alignContent: "start",
            }}
          >
            <CardActionArea>
              <CardContent sx={{ justifyContent: "center" }}>
                <Typography variant="body1" color="text.secondary">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`$${item.price}`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{justifyContent: "center"}}>
                <Button
                  size="small"
                  color="success"
                  sx={{
                    "&:hover": {
                      backgroundColor: "success.dark",
                      color: "white",
                      opacity: [0.8],
                      justifyContent: "center",
                      fullWidth: true,
                    }
                  }}
                  onClick={() => {
                    dispatch(itemsAddedCounter(item))
                    dispatch(cartProducts(item))
                  }}
                >
                  Add
                </Button>
            </CardActions>
          </Card>
        )): <Loading />}
      </Container>
        </>
    )
};