import React from "react";
import {Redirect} from 'react-router-dom';

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
} from "reactstrap";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onSubmit = () => {
        this.props.history.push('/admin/numberlist/');
    };

    render() {
        return (
            <>
                <div className="content">
                    <Card>
                        <Row>
                            <Col md="6">
                                <CardHeader>
                                    <CardTitle tag="h4">Please, Select the print button to proceed.</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <Button onClick={this.onSubmit} color="success">Print</Button>
                                    <br />
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </>
        );
    }
}

export default Home;
