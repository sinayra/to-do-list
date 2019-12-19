import React, { Component } from 'react';

class Task extends Component {

    state = {
        task: { ...this.props.task }
    }

    handleChange  = (event) =>{
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let editedTask = {...this.state.task};
        editedTask[name] = value;

        this.setState({ task: editedTask });
    }

    render() {
        let info;
        let task = this.state.task;

        info =
            <>
                <input name="is_done" type="checkbox" className="form-check-input" checked={task.is_done} onChange={this.handleChange} />
                <label className="form-check-label">{task.name}</label>
                <p className="text-muted">{task.description}</p>
            </>;

        return (
            <div className="form-group">
                {info}
            </div>

        );
    }
}

export default Task;