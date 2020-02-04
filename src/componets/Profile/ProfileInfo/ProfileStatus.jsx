import React from 'react';
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
};

activeEditMode = () => {
    this.setState({
        editMode: true
    });
    this.state.editMode = true;
};
deactivateEditMode = () => {
    this.setState({
        editMode: false
    });
    this.state.editMode = true;
};

deactivateEditMode = () => {
    this.setState({
        editMode: false
    });
    this.props.updateStatus(this.state.status);
};
onStatusChange = (e) => {
    this.setState ({
status: e.currentTarget.value
    })
};
render()
{
    return (
        <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={this.activeEditMode}>{this.props.status || '------'}</span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange}
                       autoFocus={true}
                       onBlur={this.deactivateEditMode}
                       value={this.props.status}/>
            </div>
            }
        </div>
    )
}
}

export default ProfileStatus;