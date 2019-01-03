import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Clock from './Components/Clock';
import Toggle from './Components/Toggle'
import LoginControl from './Components/LoginControl'
// ReactDOM.render(<App />, document.getElementById('root'));

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getGreeting(user) {
    if(user){
        return <h1>Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, Stranger.</h1>
}


const user = {
    firstName: "Chi",
    lastName: "Do Tien"
};

function Mailbox(props){
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
                </h2>
            }
        </div>
    );
}

const  messagess = ['React','Re: React', 'Re:Re: React'];
ReactDOM.render(
    <Mailbox unreadMessages={messagess} />,
    document.getElementById('mailbox')
);

function WarningBanner(props){
    if(!props.warn){
        return null;
    }

    return (
        <div className="warning">
            Waring!
        </div>
    );
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarnig: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarnig: !state.showWarnig
        }))
    }

    render() {
        return(
            <div>
                <WarningBanner warn={this.state.showWarnig}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarnig ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <Page/>,
    document.getElementById('page')
)

ReactDOM.render(
    <LoginControl/>,
    document.getElementById('loggedIn')
)

ReactDOM.render(getGreeting(user),document.getElementById('greeting'))

// const helloworld = <h1>Hello, world!!!!  {formatName(name)}</h1>
ReactDOM.render(
    <Clock/>,
    document.getElementById('root'));

ReactDOM.render(<Toggle/>,document.getElementById('toggle'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
