// eslint-disable-next-line
import React from 'react';
import {connect} from 'react-redux';

const propTypes = {
};

const defaultProps = {
};

class CommentList extends React.Component {

    renderComments () {
        return this.props.comments.map( (comment) => (
            <li key={comment}>{comment}</li>
        ));
    }

    render() {
        return(
            <div>
                <h4>Comment List</h4>
                <ul>
                    {this.renderComments()}
                </ul>
            </div>
        );
    };
};

CommentList.propTypes = propTypes;
CommentList.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
        comments: state.comments
  };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ 
//   }, dispatch);
// }

export default connect(
    mapStateToProps, 
    null
)(CommentList);