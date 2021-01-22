import React from 'react';
import Input from '../../../components/Input/Input';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
  constructor() {
    super();
    this.state = {
      editMode: false,
    };
    this.toggleMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState((prevState) => ({
      editMode: !prevState.editMode,
    }));
  }

  render() {
    return (
      <div className={classes.status}>
        {this.state.editMode ? (
          <Input className={classes.input} onBlurCB={this.toggleMode} value={this.props.statusText} />
        ) : (
          <span onDoubleClick={this.toggleMode}>{this.props.statusText}</span>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
