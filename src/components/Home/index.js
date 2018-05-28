import React, { Component } from 'react';
import RenderData from './RenderData';
//import SaveCompany from '../../services/saveCompany';
import showJobs from '../../services/functionHome';
//import Mapitas from '../../maps/maps';

class Home extends Component {
render(){
    return <div>
    <section className="container-job">
         { showJobs()}
    </section>
    <article>    
        <RenderData className="col-xs-12 col-sm-3" >
        </RenderData>
 </article>
 </div>
}
}

export default Home;