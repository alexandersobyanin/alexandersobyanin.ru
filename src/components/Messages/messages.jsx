import React, {Component} from 'react';
import {Button, Form, Input, Row} from "reactstrap";

import {AuthUserContext} from '../Session';
import {withFirebase} from '../Firebase';
import MessageList from './messageList';

class Messages extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            loading: false,
            messages: [],
            users: [],
            limit: 5,
        };
    }

    componentDidMount() {
        this.onUsersList();
        this.onListenForMessages();
    }

    onUsersList = () => {
        this.props.firebase.users().on('value', snapshot => {
            this.setState({users: snapshot.val()})
        });
    };

    onListenForMessages = () => {
        this.setState({loading: true});

        this.props.firebase
            .messages()
            .orderByChild('createdAt')
            .limitToLast(this.state.limit)
            .on('value', snapshot => {
                const messageObject = snapshot.val();

                if (messageObject) {
                    const messageList = Object.keys(messageObject).map(key => ({
                        ...messageObject[key],
                        uid: key,
                        user: this.state.users[messageObject[key].userId],
                    }));

                    this.setState({
                        messages: messageList,
                        loading: false,
                    });
                } else {
                    this.setState({messages: null, loading: false});
                }
            });
    };

    componentWillUnmount() {
        this.props.firebase.users().off();
        this.props.firebase.messages().off();
    }

    onChangeText = event => {
        this.setState({text: event.target.value});
    };

    onCreateMessage = (event, authUser) => {
        this.props.firebase.messages().push({
            text: this.state.text,
            userId: authUser.uid,
            createdAt: this.props.firebase.serverValue.TIMESTAMP,
        });

        this.setState({text: ''});

        event.preventDefault();
    };

    onEditMessage = (message, text) => {
        const {uid, ...messageSnapshot} = message;

        this.props.firebase.message(message.uid).set({
            ...messageSnapshot,
            text,
            editedAt: this.props.firebase.serverValue.TIMESTAMP,
        });
    };

    onRemoveMessage = uid => {
        this.props.firebase.message(uid).remove();
    };

    onNextPage = () => {
        this.setState(
            state => ({limit: state.limit + 5}),
            this.onListenForMessages,
        );
    };

    render() {
        const {text, messages, loading} = this.state;

        return (
            <AuthUserContext.Consumer>
                {authUser => (
                    <Row>
                        {!loading && messages && (
                            <Button onClick={this.onNextPage}>
                                More
                            </Button>
                        )}

                        {loading && <div>Loading ...</div>}

                        {messages && (
                            <MessageList
                                authUser={authUser}
                                messages={messages}
                                onEditMessage={this.onEditMessage}
                                onRemoveMessage={this.onRemoveMessage}
                            />
                        )}

                        {!messages && <div>There are no messages ...</div>}

                        <Form onSubmit={event => this.onCreateMessage(event, authUser)} inline>
                            <Input type="text" value={text} onChange={this.onChangeText}/>
                            <Button type="submit">Send</Button>
                        </Form>
                    </Row>
                )}
            </AuthUserContext.Consumer>
        );
    }
}

export default withFirebase(Messages);
