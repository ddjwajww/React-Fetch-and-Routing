import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import User from "./User";

function FetchedUsers() {
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const {path, url} = useRouteMatch();


    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then((res) => setUsers(res.data))
        .finally(() => setLoading(false));
    }, [])

  return (
    <div>    
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        <ul>
            {
                users.map((user) => (
                    <li key={user.id}>
                        <NavLink activeClassName="activeted" to={`${url}/${user.id}`}>{user.name}</NavLink>
                    </li>
                ))
            }
        </ul>

        <Switch>
            <Route exact path={path}>
                <h3>Please Select A User</h3>
            </Route>
            <Route path={`${path}/:id`} component={User}>
     
            </Route>
        </Switch>
    </div>
  )
}

export default FetchedUsers
