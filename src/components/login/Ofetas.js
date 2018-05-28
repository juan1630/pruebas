import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Heart from '../icons/heart';
class Ofertas extends React.Component { 
    
    render(){return <div className="col-xs-12 col-sm-3" key={this.props.index}>
       <Card>
       <CardMedia>
          <img src={process.env.PUBLIC_URL+this.props.jobs.imgURL} 
          alt={this.props.jobs.Empresa} className="Img-1"/>
        </CardMedia>
        <CardTitle title={this.props.jobs.Empresa}></CardTitle>
        <CardText> {this.props.jobs.description} </CardText>
        <CardText> { this.props.jobs.phone }<Heart></Heart></CardText>
        <CardActions>
            <FlatButton primary={true} label="Var más" 
                style={{'background':'#424242'}}/>
        </CardActions>
       </Card>
        </div>
    }
}

export default Ofertas;