import React, {Component} from 'react';
import Post from "../post/Post";


class AllPosts extends Component {
    state = {posts:[],choose:null };
    onSelectPost =(id) =>{
      let {posts} = this.state;
      let find = posts.find(value => value.id === id);
      this.setState({choose: find});
    };
    render() {
        let {posts,choose} = this.state;
        return (
            <div>
                {
                    posts.map(post =><Post item ={post} key = {post.id} onSelectPost = {this.onSelectPost}/>)

                }
                {
                    choose && <div><h2>{choose.id}-{choose.title}</h2><h4>{choose.body}</h4></div>
                }

            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});

        });
    }
}

export default AllPosts;
