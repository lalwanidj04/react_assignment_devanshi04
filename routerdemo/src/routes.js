
import Home from "./Home";
// import Users from "./users/Users";
import Products from "./products/Products";
import AddUser from "./users/AddUser";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";
import ProductList from "./products/ProductList";


// export default function Routes() {
//     return useRoutes([
//         { path: "/", element: < Home /> },
//         { path: "/users/*", element: (<><Users /><Outlet/></>), children: [{index:true,path:"add", element:<AddUser/>}] },
//         { path: "/products/*", element: (<><Products /><Outlet/></>), children: [{path:"add", element:<AddProduct/>},{path:"edit", element:<EditProduct/>},{path:"read",element:<ProductList/>}] },

//     ])
// };
import { Route, Routes } from 'react-router-dom';
import EditUser from "./users/EditUser";
import UserList from "./users/UserList";
import Users from "./users/Users";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/products/edit" element={<EditProduct />} />
            <Route path="/products/read" element={<ProductList />} />
            <Route path="/users" element={<Users/>} />
            <Route path="/users/add" element={<AddUser />} />
            <Route path="/users/edit" element={<EditUser />} />
            <Route path="/users/read" element={<UserList />} />

        </Routes>
    );
}