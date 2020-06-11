import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import IntroducingJSX from "./MainConcepts/jsxEx";
import PropsDemo from "./MainConcepts/PropsEx";
import Clock from "./MainConcepts/StatesEx";
import { Clock as Clock2 } from "./MainConcepts/StatesEx2";
import HandlingEventsDemo from "./MainConcepts/HandlingEventsEx";
import { TaskList, taskList } from "./MainConcepts/HandlingEventsEx2";
import LoginControl from "./MainConcepts/ConditionalRenderingEx";
import Page from "./MainConcepts/ConditionalRenderingEx2";
import NumberList from "./MainConcepts/ListsAndKeysEx";
import Blog from "./MainConcepts/ListsAndKeysEx2";
import { ControlledForm, UncontrolledForm } from "./MainConcepts/FormEx";
import Calculator from "./MainConcepts/LiftingStateUpEx";
import { WelcomeDialog, SignUpDialog } from "./MainConcepts/CompositionEx";
import FilterableProductTable from "./MainConcepts/ThinkinginReactEx";
//
import LazyComponent from "./AdvancedGuides/LazyComponent";
import ErrorBoundary from "./AdvancedGuides/ErrorBoundary";
import ForwardingRefs from "./AdvancedGuides/ForwardingRefs";
import Fragments from "./AdvancedGuides/Fragments";
import Integrating from "./AdvancedGuides/Integrating";
import JSXInDepth from "./AdvancedGuides/JSXInDepth";
import OptimizingPerformance from "./AdvancedGuides/OptimizingPerformance";
import Portals from "./AdvancedGuides/Portals";
import Profiler from "./AdvancedGuides/Profiler";
import RenderProps from "./AdvancedGuides/RenderProps";
import Context from "./AdvancedGuides/Context/app";
import HOC from "./AdvancedGuides/HOC/app";
//
import Hook1 from "./Hooks/state1";
import Hook2 from "./Hooks/state2";
import Hook3 from "./Hooks/effect";
import Hook4 from "./Hooks/effect2";
import Hook5 from "./Hooks/effect3";
import Hook6 from "./Hooks/effect4";
// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.

function SidebarTitle(props) {
  let style = { color: "blue" };
  if (props.style != null) {
    style = props.style;
  }
  return <div style={style}>{props.children}</div>;
}

const data = [
  {
    name: "MAIN CONCEPTS",
    routes: [
      {
        path: "/",
        exact: true,
        title: "Home",
        main: () => <App />,
      },
      {
        path: "/jsx",
        title: "Introducing JSX",
        main: () => <IntroducingJSX />,
      },
      {
        path: "/state",
        title: "State",
        main: () => <Clock />,
      },
      {
        path: "/state2",
        title: "State 2",
        main: () => <Clock2 />,
      },
      {
        path: "/prop",
        title: "Prop",
        main: () => <PropsDemo />,
      },
      {
        path: "/event",
        title: "Handling Events",
        main: () => <HandlingEventsDemo />,
      },
      {
        path: "/event2",
        title: "Event: List",
        main: () => <TaskList list={taskList} />,
      },
      {
        path: "/conditional",
        title: "Conditional Rendering",
        main: () => <LoginControl />,
      },
      {
        path: "/conditional2",
        title: "Conditional Rendering 2",
        main: () => <Page />,
      },
      {
        path: "/list_key",
        title: "Lists & Keys: NumberList",
        main: () => NumberList,
      },
      {
        path: "/list_key2",
        title: "Lists & Keys: Blog",
        main: () => Blog,
      },
      {
        path: "/form",
        title: "Form: Controlled Component",
        style: { color: "red" },
        main: () => <ControlledForm></ControlledForm>,
      },
      {
        path: "/form2",
        title: "Form: Uncontrolled Component",
        main: () => <UncontrolledForm />,
      },
      {
        path: "/state3",
        title: "State: Lifting State Up",
        main: () => <Calculator />,
      },
      {
        path: "/composition",
        title: "Composition: Welcome Dialog",
        main: () => <WelcomeDialog />,
      },
      {
        path: "/composition2",
        title: "Composition: SignUp Dialog",
        main: () => <SignUpDialog />,
      },
      {
        path: "/thinking_react",
        title: "Thinking in React",
        main: () => FilterableProductTable,
      },
    ],
  },
  {
    name: "ADVANCED GUIDES",
    routes: [
      {
        path: "/lazy",
        title: "lazy component",
        main: () => <LazyComponent />,
      },
      {
        path: "/error",
        title: "Error Boundary",
        main: () => ErrorBoundary,
      },
      {
        path: "/forward_refs",
        title: "Forwarding Refs",
        style: { color: "red" },
        main: () => ForwardingRefs,
      },
      {
        path: "/fragments",
        title: "Fragments",
        main: () => <Fragments />,
      },
      {
        path: "/integrating",
        title: "Integrating",
        main: () => <Integrating />,
      },
      {
        path: "/jsx2",
        title: "JSX In Depth",
        main: () => JSXInDepth,
      },
      {
        path: "/optimizing_performance",
        title: "Optimizing Performance",
        main: () => OptimizingPerformance,
      },
      {
        path: "/portals",
        title: "Portals",
        style: { color: "red" },
        main: () => Portals,
      },
      {
        path: "/profiler",
        title: "Profiler",
        style: { color: "red" },
        main: () => Profiler,
      },
      {
        path: "/render_props",
        title: "Render Props",
        style: { color: "red" },
        main: () => <RenderProps />,
      },
      {
        path: "/context",
        title: "Context",
        style: { color: "red" },
        main: () => <Context />,
      },
      {
        path: "/hoc",
        title: "HOC",
        style: { color: "red" },
        main: () => <HOC />,
      },
    ],
  },
  {
    name: "HOOKS",
    routes: [
      {
        path: "/hook1",
        title: "state 1",
        main: () => Hook1,
      },
      {
        path: "/hook2",
        title: "state 2",
        main: () => <Hook2 />,
      },
      {
        path: "/hook3",
        title: "effect",
        main: () => Hook3,
      },
      {
        path: "/hook4",
        title: "chat hook",
        style: { color: "red" },
        main: () => <Hook4 />,
      },
      {
        path: "/hook5",
        title: "chat class",
        style: { color: "red" },
        main: () => <Hook5 />,
      },
      {
        path: "/hook6",
        title: "chat share",
        style: { color: "red" },
        main: () => <Hook6 />,
      },
    ],
  },
];

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "16%",
            background: "#f0f0f0",
          }}
        >
          {data.map((m) => (
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <b>{m.name}</b>
              </li>
              {m.routes.map((route, index) => (
                <li>
                  <Link to={route.path} style={route.style}>
                    {route.title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {data.map((m) =>
              m.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={
                    <SidebarTitle style={route.style}>
                      {route.title}
                    </SidebarTitle>
                  }
                />
              ))
            )}
          </Switch>
          <Switch>
            {data.map((m) =>
              m.routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))
            )}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
