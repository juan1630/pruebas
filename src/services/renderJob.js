import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class RenderJob extends Component {

    render(){
        return(<div className="col-xs-12 col-sm-3">
            <Card>
                <CardMedia>
                <img src={ process.env.PUBLIC_URL +this.props.job.imgURL} alt={this.props.Empresa } />
                </CardMedia>
                    <CardTitle>
                    <p> { `Empresa: ${this.props.job.Empresa}` } </p>
                    </CardTitle>
                    <CardText>
                    <p> { `Numero de la empresa: ${this.props.job.phone}` } </p>
                    <p> { `Descripcion: ${this.props.job.description}` } </p>
                    </CardText>
                    <CardActions>< FlatButton backgroundColor="#9E9E9E" label="Ver mas"/> 
                 </CardActions>
            </Card>   
        </div>)
    } 
}

export default RenderJob;