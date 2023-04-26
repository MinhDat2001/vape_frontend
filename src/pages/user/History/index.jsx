import classNames from 'classnames/bind';

import { Container, Row, Col, Table } from 'react-bootstrap';

import styles from './css/history.module.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProfileLayout from '~/components/Layout/ProfileLayout';

const cx = classNames.bind(styles);

function History() {
    const [data, setData] = useState([
        {
            id: '1',
            date: '11-11-2011',
            total: 12000,
            method: 'card',
            status: 'done',
        },
        {
            id: '1',
            date: '11-11-2011',
            total: 12000,
            method: 'card',
            status: 'done',
        },
        {
            id: '1',
            date: '11-11-2011',
            total: 12000,
            method: 'card',
            status: 'done',
        },
        {
            id: '1',
            date: '11-11-2011',
            total: 12000,
            method: 'card',
            status: 'done',
        },
    ]);

    return (
                    <ProfileLayout>
                        <Col md={8} sm={12} style={{ minHeight: '120px' }}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Số hóa đơn</th>
                                        <th>Ngày</th>
                                        <th>Tổng tiền</th>
                                        <th>Phương thức thanh toán</th>
                                        <th>Trạng thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.date}</td>
                                                <td>
                                                    {Number(
                                                        item.total
                                                    ).toLocaleString('vi-VN', {
                                                        style: 'currency',
                                                        currency: 'VND',
                                                    })}
                                                </td>
                                                <td>{item.method}</td>
                                                <td>{item.status}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        </Col>
                    </ProfileLayout>
    );
}

export default History;
