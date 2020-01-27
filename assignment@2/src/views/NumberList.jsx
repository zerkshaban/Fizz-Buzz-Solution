import React from "react";

// reactstrap components
import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Row,
    Col,
    UncontrolledTooltip, Pagination, PaginationItem, PaginationLink
} from "reactstrap";

class NumberList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <>
                <div className="content">
                    <Card>
                        <Row>
                            <Col md="6">
                                <CardHeader>
                                    <CardTitle tag="h4">Number List</CardTitle>
                                </CardHeader>
                                <CardBody>
                                        {
                                            Array.apply(null, {length: 100}).map((value, index) => {
                                                    return(
                                                        <Button className="btn-round" color="info" type="button">
                                                            {index%3 === 0 && index%5 === 0 ? "FizzBuzz" : index%3 === 0 ? "Fizz" : index%5 === 0 ? "Buzz" : index}
                                                        </Button>
                                                    )
                                                }
                                            )
                                        }
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </>
        );
    }
}

export default NumberList;
