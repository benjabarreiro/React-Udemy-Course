import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Quotes = React.lazy(() => import("./pages/Quotes"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NotFound = React.lazy(() => "./pages/NotFound");

function App() {
  return (
    <div>
      <Layout>
        <Suspense
          fallback={
            <div className="centered">
              <LoadingSpinner />
            </div>
          }
        >
          <Switch>
            <Route exact path="/">
              <Redirect to="/quotes" component={Quotes} />
            </Route>
            <Route exact path="/quotes" component={Quotes} />
            <Route path="/quotes/:quoteId" component={QuoteDetail} />
            <Route path="/new-quote" component={NewQuote} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </Layout>
    </div>
  );
}

export default App;
