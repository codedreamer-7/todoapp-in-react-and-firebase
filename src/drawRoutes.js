import React from "react";
import {GuardedRoute} from "react-router-guards";

export const drawRoutes = (routes, componentProps) => {
  return routes.map(route => {
    return (
      <GuardedRoute
        key={route.name}
        path={route.path}
        exact={route.exact}
        render={props => {
          return (
            <route.component
            {...componentProps}
            {...props}
            routes={route.routes}
            modalRoutes={route.modalRoutes}
          />
          );
        }}
      />
    );
  });
};