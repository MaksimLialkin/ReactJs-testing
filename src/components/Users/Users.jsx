import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../img/Avatar.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map(p => {
                    return <span className={this.props.currentPage === p && classes.selectedPage}
                        onClick={(e) => { this.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {
                this.props.users.map(u => <div className={classes.users} key={u.id}>
                    <div className={classes.usersMain}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.photo} />
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
                )

            }
        </div>
    }
}

export default Users