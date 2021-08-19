import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { Provider } from "../Layout";
import Periodic from '../periodicTable/Periodic';
import Work from '../works/Work';

const Works = () => {
    return (
        <Provider history={useHistory()}>
            <Work/>
        </Provider>
    )
}

export default Works
