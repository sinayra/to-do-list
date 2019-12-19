import React from "react";
import axios from 'axios';

class Task extends React.Component {
    
    constructor(props) {
      super(props);
      this.state = {
        tasks: []
      };
    }
    
    componentDidMount() {
        const url = "http://localhost:3000/api/v1/task/index";
        axios.get(url).then(res => {
            this.setState({ tasks: res.data });
        }).catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message);
            }
            console.log(error);
        });
    }

    render() {
        let taskElem = this.state.tasks.map(c => {
            return (
            <li key={c.id}>{c.name} @ {c.date} - {c.is_done}</li>
            );
        });

        console.log(this.state)

        return (
            <div>
                <h1>Tasks</h1>
                <div className="container">
                    <div className="row">
                        {taskElem}
                    </div>
                </div>
            </div>
        );
    }

  }
  export default Task;