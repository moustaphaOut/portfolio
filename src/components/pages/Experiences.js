import React from 'react'
import { useHistory, withRouter } from "react-router-dom";
import Experience from '../experiences/Experience';
import { Provider } from "../Layout";

const Experiences = () => {
    return (
        <Provider history={useHistory()}>

            <Experience/>
        </Provider>
    )
}

export default Experiences
