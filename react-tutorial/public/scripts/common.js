var CommentBox=React.createClass({
  render:function(){
    return(
      <div className="commentBox">
        This is a commentBox
      </div>
    );
  }
});

ReactDOM.render(
<CommentBox />,
  document.getElementById('content')
);
