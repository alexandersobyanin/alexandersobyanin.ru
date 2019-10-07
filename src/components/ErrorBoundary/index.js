import React, {Component} from 'react';
import * as Sentry from '@sentry/browser';
import './style.css';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {eventId: null};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        Sentry.withScope(function (scope) {
            scope.setExtras(errorInfo);
            const eventId = Sentry.captureException(error);
            this.setState({eventId: eventId});
        });
    }

    render() {
        if (this.state.hasError) {
            //render fallback UI
            return (
                <div className="Error-page">
                    <h1>Oops, an error occurred</h1>
                    <button onClick={() => Sentry.showReportDialog({eventId: this.state.eventId})}>
                        Report feedback
                    </button>
                </div>
            );
        }
        //when there's not an error, render children untouched
        return this.props.children;
    }
}

export default ErrorBoundary
