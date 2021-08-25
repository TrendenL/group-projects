import React, { Component } from "react";

class Meme extends Component {
  state = {
    isEdit: false,
    topEdit: "",
    bottomEdit: "",
  };

  toggleEdit = () => {
    this.setState((prevState) => {
      return {
        isEdit: !prevState.isEdit,
      };
    });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { imgUrl, topText, bottomText, id } = this.props.meme;
    const { handleEdit, handleDelete, handleSubmit } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleEdit(id, {
                  topText: this.state.topEdit,
                  bottomText: this.state.bottomEdit,
                });
                this.toggleEdit();
              }}
            >
              <input
                name="topEdit"
                value={this.state.topEdit}
                onChange={this.handleChange}
                placeholder="Top"
              />
              <br />
              <input
                name="bottomEdit"
                value={this.state.bottomEdit}
                onChange={this.handleChange}
                placeholder="Bottom"
              />
              <br />
              <button className="submitBtn" type="submit">
                Commit
              </button>
            </form>
            <button onClick={() => this.toggleEdit()}>Cancel</button>
            <div
              className="userMeme"
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
              <div className="formTopText">
                <p>{this.state.topEdit}</p>
              </div>
              <div className="formBottomText">
                <p>{this.state.bottomEdit}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="memeCont">
            <div
              className="userMeme"
              style={{ backgroundImage: `url(${imgUrl})` }}
            >
              <div className="memeTopText">
                <p>{topText}</p>
              </div>
              <div className="memeBottomText">
                <p>{bottomText}</p>
              </div>
            </div>
            <button
              className="deleteBtn"
              onClick={(e) => {
                e.preventDefault();
                handleDelete(id);
              }}
            >
              Delete
            </button>
            <button className="editBtn" onClick={() => this.toggleEdit()}>
              Edit
            </button>
          </div>
        )}
      </div>
    );
  }
}
export default Meme;
