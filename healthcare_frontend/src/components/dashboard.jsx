import React from "react";
import { Bar } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import {Chart as ChartJS} from "chart.js/auto"
const Dashboard = ({chartData}, {showOptions}) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Bar
                        data={chartData}
                        options = {showOptions}
                    />
                </Col>
                <Col>
                    <Doughnut
                        data={chartData}
                        options={showOptions}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;