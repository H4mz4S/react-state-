import React, { Component } from 'react';
import photodeprofil from "./images/hamza.jpg"

class Profile extends Component {
    state = {
        person: {
            fullName: 'Hamza Chouchene',
            bio: 'WHAT POPPIN',
            imgSrc: photodeprofil,
            profession: 'Web Developer & GoMyCode student',
        },
        //false
        time: 0,
        interval : null

    };

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({
                time: this.state.time + 1
            });
        }, 1000);
        
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render() {
        return(
                    <div>
                        <h1>{this.state.person.fullName}</h1>
                        <img src={this.state.person.imgSrc} alt={this.state.person.fullName} />
                        <p>{this.state.person.bio}</p>
                        <p>Profession: {this.state.person.profession}</p>
                        <p>Time mount: {this.state.time} seconds</p>
                    </div>
        )
    }
}

export default Profile;
