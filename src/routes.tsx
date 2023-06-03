import React from "react";
import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import Hints from "./pages/Hints";
import HintsForm from "./pages/Hints/Form";
import HintsDetail from './pages/Hints/Detail';
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dicas" exact component={Hints} />
            <Route path="/dicas_cadastro" exact component={HintsForm} />
            <Route path="/dicas_cadastro/:id" exact component={HintsForm} />
            <Route path="/dicas/:id" exact component={HintsDetail} />
        </Switch>
    );
}
export default Routes;