import React, { Component } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { getHostel,updateHostel } from "../../actions/hostelActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";

 class UpdateHostel extends Component {

    constructor(){
        super();

        this.state = {
            hostelid: "",
            email: "",
            numberOfRooms: "",
            hostelType:"",
            hostelName:""
            
      
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const {
            hostelid,
            email,
            numberOfRooms,
            hostelType,
            hostelName
        } = nextProps.hostel;

       this.setState({
            hostelid,
            email,
            numberOfRooms,
            hostelType,
            hostelName
       });

    } 


     componentDidMount(){
         const { id } = this.props.match.params;
         this.props.getHostel(id, this.props.history);
     }

     onChange(e){
         this.setState({[e.target.name]: e.target.value });
     }

     onSubmit(e) {
         e.preventDefault();

         const updateHostel = {

            hostelid:this.state.hostelid,
            email:this.state.email,
            numberOfRooms:this.state.numberOfRooms,
            hostelType:this.state.hostelType,
            hostelName:this.state.hostelName
         };
         this.props.updateHostel(updateHostel,this.props.history);
     }
    render() {
        return (
            <div className="project">
            <div className="container">
            <div className="row" style={{width:'800px', margin:'0 auto' ,marginTop:'100px'}}>
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Update Room</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg "
                             placeholder="Hostel Id"
                             name="hostelid"
                             value={this.state.hostelid} 
                             onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" 
                            placeholder="Hostel Name"
                            name="hostelName"
                            value={this.state.hostelName}
                            onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg"
                             placeholder="Number Of Rooms"
                             name="numberOfRooms"
                             value={this.state.numberOfRooms}
                             onChange={this.onChange}/>
                        </div>
                        <div className="form-group">
                        <input type="text" className="form-control form-control-lg"
                         placeholder="Hostel Type"
                         name="hostelType"
                         value={this.state.hostelType}
                         onChange={this.onChange}/>
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg"
                     placeholder="Warden Email"
                     name="email"
                     value={this.state.email}
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

UpdateHostel.propTypes = {
    getHostel: PropTypes.func.isRequired,
    updateHostel:PropTypes.func.isRequired,
    hostel: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    hostel: state.hostel.hostel
});

export default connect(
    mapStateToProps,
    {getHostel,updateHostel} 
    )(UpdateHostel);