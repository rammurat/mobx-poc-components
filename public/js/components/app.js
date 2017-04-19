import React from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react"; 

//load dev tool to observer changes happen to dom
import DevTool from 'mobx-react-devtools';

//load product store
import AppStore from '../store/appStore.js';

//import child components
import AddForm from './addForm.js';
import Login from './login.js';
import Listing from './listing.js';
import Detail from './detail.js';
import Matching from './matching.js';

@observer
export default class app extends React.Component {
    //render html
    render() {
        return <div>
            <DevTool />
            <div className="row">
                <Login store={AppStore} />
            </div>

            <div className="row">
                <Listing store={AppStore} />
            </div>

            <div className="row">
                <Matching store={AppStore} />
            </div>

            <div className="row">
                <Detail store={AppStore} />
            </div>

            <div className="row">
                <AddForm store={AppStore} />
            </div>
        </div>
    }
}