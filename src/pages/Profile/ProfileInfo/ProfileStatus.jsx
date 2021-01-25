import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      status: this.props.status,
    };
  }

  componentDidUpdate(prevState, prevProps) {
    this.onUpdate = () => {
      if (prevState.status !== this.props.status)
        this.setState({
          status: this.props.status,
        });
    };
  }

  toggleEditMode = () => {
    if (this.state.editMode) this.props.updateStatus(this.state.status);
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  };

  updateStatus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  render() {
    return (
      <div className={classes.status}>
        {this.state.editMode ? (
          <input onBlur={this.toggleEditMode} value={this.state.status} maxLength={300} onChange={this.updateStatus} />
        ) : (
          <span onDoubleClick={this.toggleEditMode}>{this.props.status || 'Empty status'}</span>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
