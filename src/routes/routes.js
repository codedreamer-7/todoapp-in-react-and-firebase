import { Dashboard } from "../pages/Dashboard";
import TaskItemNow from "../components/TaskItemNow";
import withoutUpdatedLocationHOC from "../withoutUpdatedLocationHOC";
import { LandingPage } from "../pages/LandingPage";
import { SignIn } from "../pages/SignIn";
import {SignUp} from "../pages/SignUp";
import { TasksView } from "../components/TasksView";

const j = [
  {

  }
]

export const routes = [
  {
    name: "dashboard",
    path: "/dashboard",
    exact: false,
    component: withoutUpdatedLocationHOC(Dashboard),
    routes: [
      {
        name: "next",
        path: "/dashboard/next",
        component: withoutUpdatedLocationHOC(TaskItemNow),
        exact: false,
        routes: []
      },
      {
        name: "home",
        path: "/dashboard",
        component: withoutUpdatedLocationHOC(TasksView),
        exact: true,
        routes: []
      }
    ]
  },
  {
    name:"signin",
    path:"/sign-in",
    exact:false,
    component: withoutUpdatedLocationHOC(SignIn)
  },
  {
    name:"signup",
    path:"/sign-up",
    exact:false,
    component: withoutUpdatedLocationHOC(SignUp)
  },
  {
    name:"root",
    path:"/",
    exact: false,
    component: withoutUpdatedLocationHOC(LandingPage)
  }
];
