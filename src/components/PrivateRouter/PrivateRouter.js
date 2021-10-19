import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
const PrivateRouter = ({children, ...rest }) => {
    let { user, isLoding } = useAuth(); 
    console.log(isLoding)
    if (isLoding) {
        return <h1>h1</h1>
    }
    return (
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                    children
                    ) : (
                    <Redirect
                        to={{
                        pathname: "/login",
                        state: { from: location }
                        }}
                    />
                    )
                }
                />
    );
};

export default PrivateRouter;