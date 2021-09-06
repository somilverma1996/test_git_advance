import React, { useReducer } from 'react'
import { useSelector, useDispatch } from "react-redux"
import userAction from "./_actions/user.action"

export default function UserPage(props) {
    const name = useSelector(state => state.user.name)
    const movieList = useSelector(state => state.movie.movieList)
    // console.log(movieName)
    // const [user, dispatch] = useReducer(
    //     userR, { name: "" }
    // )
    // const [movie, dispatchMOvie] = useReducer(
    //     movieR, { movieList: [] }
    // )
    // console.log(user)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Redux with Hooks </h1>
            <h2>Master Branch Code</h2>
            <div data-name={name}>Username: {name ? name : "NA"}</div>
            {
                movieList.length > 0
                    ?
                    movieList.map(data => {
                        return <>
                            <div>{data.title}</div><br />
                        </>
                    })
                    :
                    <div>No datas</div>
            }
            <button onClick={() => {
               dispatch(userAction.setMovieName())
            }}>Set Name</button>

            {/* Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button> */}
        </>
    )
}