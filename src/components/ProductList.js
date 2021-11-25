import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState, useMemo } from "react";
import productsData from "../products/productsData";
import { useDispatch } from "react-redux";
import {itemsAddedCounter} from "../Redux/itemsAddedSlice";
import { useHistory, useLocation } from "react-router";
import { useEffect } from "react";

export default function ProductList() {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [newArray, setNewArray] = useState([]);
    const itemsMaxPerPage = 10;
    const totalPages = Math.ceil(productsData.length/itemsMaxPerPage);

    const currentPage = useMemo(
        () => new URLSearchParams(location.search).get("page"),
        [location.search]
    );
    //const [page, setPage] = React.useState(currentPage ? Number(currentPage) : 1);

    useEffect(() => {
        if (Number(currentPage) === 1) {
        const Arraynew = productsData.slice(0,10);
        setNewArray(Arraynew); 
        } else {
        const Arraynew1 = productsData.slice(10*Number(currentPage)-10,10*Number(currentPage));
        setNewArray(Arraynew1);
        }
        history.push(`${location.pathname}?page=${page}`);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[currentPage]);

    const handleChange = (event, value) => {
        history.push(`${location.pathname}?page=${value}`);
        setPage(value);
    };

    const handleAddButton = () => {
        dispatch(itemsAddedCounter());
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
          gridTemplateColumns: "200px 200px 200px 200px 200px",
          justifyContent: "center",
          paddingTop: "30px"
        }}
        >
        {newArray.map((item, index) => (
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
                  {item.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`$${item.price}`}
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
                  onClick={handleAddButton}
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