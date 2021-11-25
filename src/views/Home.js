import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

export default function Home() {
    return (
        <div className="App">
        <h1>Welcome!</h1>
        <Link style={{ textDecoration: "none" }} to="/products">
        <Button 
            color="success"
            sx={{
                "&:hover": {
                    backgroundColor: "success.dark",
                    color: "white",
                    opacity: [0.8, 0.8, 0.7]
                }
            }}
        >
            Product List
        </Button>
        </Link>
        </div>
    )    
};