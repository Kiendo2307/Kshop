import Home from "~/pages/Home";
import Cart from "~/pages/Cart";
import OrderLookup from "~/pages/OrderLookup";
import { HeaderOnly } from "~/components/Layout";
import DetailsPhone from "~/components/DetailsPhone";
import Login from "~/pages/Login";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/detailsphone", component: DetailsPhone },
  { path: "/cart", component: Cart, layout: HeaderOnly },
  { path: "/login", component: Login, layout: HeaderOnly },
  { path: "/orderlookup", component: OrderLookup },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
