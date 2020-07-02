import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class NotFoundPage extends Component {
    render() {
        return (
            <ComponentNotFound className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="error-template">
                            <h1>Oops!</h1>
                            <h2>Error 404 Not Found.</h2>
                            <div className="error-details">
                                Sorry, and error occurred. The requested page was not found. 
                            </div>
                            <div className="error-actions">
                                <Link className="btn btn-outline-primary btn-lg" to="/">
                                    <i className="fas fa-home" />&nbsp; Back to Main
                                </Link>
                                <Link className="btn btn-outline-secondary btn-lg" to="/">
                                    <i className="fas fa-envelope" />&nbsp; Support
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </ComponentNotFound>
        )
    }
}


const ComponentNotFound = styled.div`
    .error-template {
        padding: 40px 15px;
        text-align: center;
    }

    .error-actions {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn {
        marign-right: 10px;
    }
`;