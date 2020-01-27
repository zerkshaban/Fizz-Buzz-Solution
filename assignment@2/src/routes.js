import Home from "views/Home";
import NumberList from "views/NumberList";

const routes = [
  {
    path: "/home",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Home,
    layout: "/admin"
  },
  {
    path: "/numberlist",
    name: "NumberList",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: NumberList,
    layout: "/admin"
  },
];

export default routes;
