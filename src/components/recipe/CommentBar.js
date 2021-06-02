import classes from "./CommentBar.module.css";

function CommentBar(props) {
  return (
    <div className={classes.comment__container}>
      <i className='bi bi-chat-left-text'></i>
      <span className={classes.comment__counter}>1</span>
    </div>
  );
}

export default CommentBar;
