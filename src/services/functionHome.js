import React from 'react';
import data from '../../src/components/db/index';
import RenderJob from './renderJob';

const showJobs = () => {
   return  data.jobs.map( ( job, index) => {
      return <RenderJob job={ job } key={ index } ></RenderJob>
    })
}

 


export default showJobs;