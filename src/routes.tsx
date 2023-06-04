import React from "react";
import {Switch, Route} from "react-router-dom"
import Home from "./pages/Home";
import Hints from "./pages/Hints";
import HintsForm from "./pages/Hints/Form";
import HintsDetail from './pages/Hints/Detail';
import Sobre from "./pages/Sobre";
import Links from "./pages/Links";
import FHIR from "./pages/FHIR";
const Routes: React.FC = () => {
    return(
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dicas" exact component={Hints} />
            <Route path="/dicas_cadastro" exact component={HintsForm} />
            <Route path="/dicas_cadastro/:id" exact component={HintsForm} />
            <Route path="/dicas/:id" exact component={HintsDetail} />
            <Route path="/sobre" exact component={Sobre} />
            <Route path="/links" exact component={Links} />
            <Route path="/fhir" exact component={FHIR} />
        </Switch>
    );
}
export default Routes;