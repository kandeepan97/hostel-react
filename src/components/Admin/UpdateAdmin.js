import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { getAdmin,updateAdmin } from "../../actions/adminActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

 class UpdateAdmin extends Component {

    constructor(){
        super();

        this.state = {
            adminid: "",
            password:""
      
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        const{
            adminid,
            password
        } = nextProps.admin;

       this.setState({
        
        adminid,
        password

       });

    } 


     componentDidMount(){
         const { id } = this.props.match.params;
         this.props.getAdmin(id, this.props.history);
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value });
     }

     onSubmit(e) {
         e.preventDefault();

         const UpdateAdmin = {
            adminid: this.state.adminid,
            password:this.state.password
         };
         this.props.updateAdmin(UpdateAdmin,this.props.history);
     }
    render() {
        return (
            <div className="project">
            <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Admin</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg "
                             placeholder="Admin Id"
                             name="adminid"
                             value={this.state.adminid} 
                             onChange={this.onChange}/>
                        </div>
                        
                        <div className="form-group">
                        <input type="text" className="form-control form-control-lg" 
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChange}/>
                        </div>
                                    
                        

                        <input type="submit" className="btn btn-primary btn-block mt-4" />
                    </form>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

UpdateAdmin.propTypes = {
    getAdmin: PropTypes.func.isRequired,
    updateAdmin:PropTypes.func.isRequired,
    admin: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    admin: state.admin.admin
});

export default connect(
    mapStateToProps,
    {getAdmin,updateAdmin} 
    )(UpdateAdmin);