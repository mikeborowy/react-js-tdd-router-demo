// eslint-disable-next-line
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onSaveComment, onFetchComments} from 'reducers/comments';
import authWrapper from './helpers/authWrapper';

const propTypes = {
};
  
const defaultProps = {
};

class CommentBox extends React.Component {

    state = {
        comment: ''
    };

    handleChange = (evt) => {
        this.setState({comment: evt.target.value});
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        this.props.onSaveComment(this.state.comment);
        this.setState({comment: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea 
                        onChange={this.handleChange}
                        value={this.state.comment} />
                    <div>
                        <button>Subbmit comment</button>
                    </div>
                </form>
                <button className="fetch-comments-btn" onClick={this.props.onFetchComments}>Fetch comment</button>
            </div>
        );
    }
}

const CommentBoxWithAuth = authWrapper(CommentBox);

CommentBox.propTypes = propTypes;
CommentBox.defaultProps = defaultProps;

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    onSaveComment, 
    onFetchComments
  }, dispatch);
}

export default connect(
    null, 
    mapDispatchToProps
)(CommentBoxWithAuth);