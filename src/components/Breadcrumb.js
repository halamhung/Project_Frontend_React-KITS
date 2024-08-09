import { Breadcrumbs, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom"

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);
    return (
        <Breadcrumbs aria-label="breadcrumb" sx={{
            mb: 2,
            mt: 2,

        }}>
            <Link to="/">Home</Link>
            {pathnames.map((value, index) => {
                const last = index === pathnames.length - 1;
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                return last ? (
                    <Typography color="textPrimary" key={to}>
                        {value}
                    </Typography>
                ) : (
                    <Link key={to} to={to}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
};
export default Breadcrumb;