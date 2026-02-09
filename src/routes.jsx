import Home from "./components/UI/Home"
import App from "./App"
import Cart from "./components/UI/displayCart"
import Shop from "./components/UI/Shop"

const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Shop /> },
            { path: "cart", element: <Cart /> },
        ],
    },
];

export default routes;