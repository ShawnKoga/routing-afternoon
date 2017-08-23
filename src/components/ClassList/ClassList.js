import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class ClassList extends Component {
    constructor() {
        super();

        this.state = {
            students: []
        }
    }

    componentDidMount() {
        return axios.get('http://localhost:3005/students').then(res => {
            this.setState({
                students: res.data
            })
        })
    }

    render() {
        const students = this.state.students.map((student, i) => {
            return (
                <div key={i}>
                    <Link to={`/student/${student.id}`}><h3>{student.first_name} {student.last_name}</h3></Link>
                </div>
            )
        })
        return (
            <div>
                <h1>Class List:
                </h1>
                { students }
            </div>
        )
    }

}