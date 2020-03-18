import * as React from 'react';
import ContactDetails from './ContactDetails';
import User from 'Models/User';
import { Link } from 'react-router-dom';
import "../../Public/images/edit1.jpg";
import "../../Public/images/delete2.png"

type ContainerProps={
    history?:any,
    match?:any,
    getContact:Function
    deleteContact:Function
    NextLink:Function
}
type ContainerState={
    link:string
}
export default class UserInfo extends React.Component<ContainerProps,ContainerState>{
    contact:User;
    constructor(props){
        super(props)
        this.state={link:''};
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        this.setState({link:this.props.NextLink(id)})
    }
    render(){
        let id=this.props.match.params.id;
        this.contact=this.props.getContact(id);
        return(
            
            <div id='col-70'>
            <ContactDetails user={this.contact}/>
            <div id="options">
                    <Link to={'/Edit/'+id}  ><img className="img" src="../../Public/images/edit1.jpg" /> Edit</Link>
                    <Link to={this.state.link} onClick={()=>this.props.deleteContact(id)}><img className="img" src="../../Public/images/delete2.png" /> Delete</Link>
                </div> 
            </div>
        );
    }
}