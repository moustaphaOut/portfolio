import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import { Provider } from "../Layout";
import Periodic from '../periodicTable/Periodic';

const SkillsPage = () => {
    return (
        <Provider history={useHistory()}>
            <Periodic/>
        </Provider>
    )
}

export default SkillsPage
