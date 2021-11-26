import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';
const PrivateRouter = ({children, ...rest }) => {
    let { user, isLoding } = useAuth(); 
    console.log(isLoding)
    if (isLoding) {
        return <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
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