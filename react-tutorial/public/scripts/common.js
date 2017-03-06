var CommentBox=React.createClass({
  render:function(){
    return(
      <div className="commentBox">
        This is a commentBox
      </div>
    );
  }
});

var CommentList=React.createClass({
  render:function(){
    return(
      <div>
        I'am a commentList
      </div>
    );
  }
});

var CommentForm=React.createClass({
  render:function(){
    return(
      <div>
        There is a commentForm
        </div>
    );
  }
});



ReactDOM.render(
<CommentBox />,
  document.getElementById('content')
);
