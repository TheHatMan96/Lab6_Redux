import React, { Component } from "react";
import {Button  } from "@material-ui/core";
import ACTIONS from "../modules/action";
import { connect } from "react-redux";

  const mapStateToProps = state => ({
    codes: state.code
});
  
const mapDispatchToProps = dispatch => ({
    changeCode: code=>dispatch(ACTIONS.changeCode(code))
});

  
class Home extends Component{

    constructor(){
        super();
        this.state={
            code:"Bienvenido a Project Code Names"
        }
    }
    
    handleSubmit = event => {
         console.log(this.props);
        
         this.props.changeCode(this.state.code);
     
        event.preventDefault();
    };
    
    render(){
    return(
    <div>
        <h1>{this.props.codes}</h1>
        <br></br>
        <Button variant="outlined" align="center" onClick={(event) => this.handleSubmit(event)}>BOOM</Button> 
    </div>
        );
    
    }
    
    
    
    }
      export default connect(mapStateToProps, mapDispatchToProps)(Home);