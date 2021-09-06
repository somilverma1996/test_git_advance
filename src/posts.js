import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import PostAction from './_actions/post.actions'
import { 
    useSelector,
    useDispatch
} from "react-redux"
import postActions from './_actions/post.actions';


const useStyles = makeStyles({
    table: {
        minWidth: 450,
    },
    actions: {
        display: 'flex'
    }
});

export default function Posts() {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.movie.posts)
    
    useEffect(() => {
        dispatch(postActions.getAllPost())
    }, [])
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Id</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Body</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((row) => {
            return (
                <TableRow key={row.name}>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.title}</TableCell>
                    <TableCell align="left">{row.body}</TableCell>
                    <TableCell className={classes.actions} align="center"><button>Edit</button>&nbsp;&nbsp;<button>Delete</button></TableCell>
                </TableRow>
            )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
