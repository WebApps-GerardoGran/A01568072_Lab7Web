import "./index.css";
import * as React from "react";
import Comment from "../../types/Comment";
import {
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@material-ui/core";

interface CommentListProps {
  comments: Comment[];
}

/**
 * Comment List elements
 * @returns CommentList UI elements
 */
const CommentList: React.FC<CommentListProps> = (props) => {

  var commentItems;

  if (props.comments !== undefined) {
    commentItems = props.comments.map((comment: Comment) => {
      return (
        <React.Fragment>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={comment.author}
              secondary={
                <React.Fragment>
                  <Typography>
                    {comment.body}
                  </Typography>
                  {comment.created}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>)
    })
  }

  return (
    <Grid container spacing={2}>
      <Grid item lg={4}>
        <Typography variant="h2">
          Comments
        </Typography>
        <Grid item lg={12}>
          <List>
            {commentItems}
          </List>
        </Grid>
      </Grid>

    </Grid>
  );
};

export default CommentList;