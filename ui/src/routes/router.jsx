import { createBrowserRouter, Navigate } from "react-router";

import Layout from "../user/layout/layout";
import Home from "../user/pages/home";
import Login from "../user/pages/login"
import Page404 from "../user/pages/page404"


import FurnitureBeds from "../user/pages/furnitureBeds";

import FurnitureSofas from "../user/pages/furnitureSofas";
import FurnitureChairs from "../user/pages/furnitureChairs";
import ProductDetail from "../user/pages/productDetail";
import ProductCardDetail from "../user/components/productCardDetail";
import AllProducts from "../admin/pages/allproducts";
import AdminLayout from "../admin/layout/adminLayout";
import CreateProduct from "../admin/pages/products";
import PrivateRoot from "../admin/providers/private.root";
import BedsDetail from "../user/components/bedsDetail";
import Contact from "../user/pages/contact";
import Delivery from "../user/pages/delivery";
import ProductCare from "../user/pages/productCare";
import FAQ from "../user/pages/faq"
import Blog from "../user/pages/blog";
import Blog_details from "../user/pages/blog_details";
import Collection from "../user/pages/collection";
import Favorites from "../user/pages/favorites";
import CartPage from "../user/pages/cartPage";
import About from "../user/pages/about";
import ProductPage from "../user/pages/productPage";
import FindStore from "../user/pages/findStore";




export const route = createBrowserRouter([
    {
        element: <Layout />,
        path: "/",
        children: [
            {
                element: <Home />,
                index: true
            },

            {
                element: <About />,
                path: "/about"
            },
            {
                element: <FurnitureSofas />,
                path: "/furniture/sofas"
            },


            {
                element: <ProductDetail />,
                path: "/sofas/:id"
            },

            {
                element: <FurnitureChairs />,
                path: "/furniture/chairs"
            },
            {
                element: <ProductCardDetail />,
                path: "/chairs/:id"
            },
            {
                element: <FurnitureBeds />,
                path: "/furniture/beds"
            },
            {
                element: <BedsDetail />,
                path: "/beds/:id"
            },
            {
                element: <Contact />,
                path: "/contact"
            },
            {
                element: <Delivery />,
                path: "/delivery"
            },
            {
                element: <ProductCare />,
                path: "/productcare"
            },
            {
                element: <FAQ />,
                path: "/faq"
            },
            {
                element: <Blog />,
                path: "/blog"
            },
            {
                element: <Blog_details />,
                path: "/blog/:id"
            },
            {
                element: <Collection />,
                path: "/products"
            },
            {
                element: <Favorites />,
                path: "/favorites"
            },
            {
                element: <CartPage />,
                path: "/cart"
            },
            {
                element: <ProductPage />,
                path: "/product/:id"
            },
            {
                element: <FindStore />,
                path: "/findstore"
            },


        ]

    },

    {
        element: <Login />,
        path: "/login"
    },
    {
        element: <Page404 />,
        path: "/not-found"
    },
    {
        element: <Navigate to="/not-found" />,
        path: "*",
    },



    {
        element: (
            <PrivateRoot>
                <AdminLayout />
            </PrivateRoot>
        ),
        path: "/admin",
        children: [
            {
                element: <AllProducts />,
                index: true
            },

            {
                element: <CreateProduct />,
                path: "create"
            }

        ]

    },
])