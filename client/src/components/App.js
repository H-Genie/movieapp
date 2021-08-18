import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
// pages for this product
import LandingPage from "./LandingPage/LandingPage.js";
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import MovieDetail from './MovieDetail/MovieDetail';
import ActorDetail from './ActorDetail/ActorDetail';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/movie/:movieId" component={MovieDetail} />
          <Route exact path="/actor/:actorId" component={ActorDetail} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
