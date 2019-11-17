import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';


export default class Facebook extends Component {
    state ={

        isLoggedIn: false,
        userID: '',
        name: '',
        email: '',
        picture: ''



    }
    responseFacebook = response => {

        //console.log(response);
        this.setState({

            isLoggedIn: true,
            userID:response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url


        })
    }

    componentClicked = () => console.log("clicked");
    render() {
        let fbContent;
        if(this.state.isLoggedIn){

            fbContent = (
                <div style ={ {
                    width: '400 px',
                    margin: 'auto',
                    background: 'lightblue',
                    padding: '20px'

            }}>
                <img src= {this.state.picture} alt ={this.state.name} />
                <h2> Welcome {this.state.name}</h2>
                Email: {this.state.email}

            </div>

            );
        }else{
            fbContent = (<FacebookLogin
                appId="473666116587276"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />);

        }

        return (
            <div>
               {fbContent} 
            </div>
        )
    }
}
