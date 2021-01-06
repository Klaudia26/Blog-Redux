import React, { Component } from 'react';
import UserHeader from './UserHeader';
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from './actions';

class PostList extends Component {
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchPostsAndUsers();
  }

  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchPosts: () => dispatch(fetchPosts()),
//   };
// };

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);