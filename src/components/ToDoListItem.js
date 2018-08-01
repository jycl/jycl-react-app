/**
 * Component that will display the actual task to do.
 */
import React, { Component } from "react";
import { connect } from "react-redux";
import { completeToDo } from "../actions";

class ToDoListItem extends Component {
    handleCompleteClick = completeToDoId => {
        const { completeToDo } = this.props;
        completeToDo(completeToDoId);
    }

    render() {
        const { todoId, todo } = this.props;
        return (
            <div key="toDoName" className="col s10 offset-s1 to-do-list-item teal">
                <h4>
                    {todo.title}{" "}
                    <span
                        onClick={() => {this.handleCompleteClick(todoId)}}
                        className="complete-todo-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
                    >
                        <i className="large material-icons">done</i>
                    </span>
                </h4>
            </div>
        );
    }
}

/**
 * connect()
 * Connects React component to Redux Sstore
 * @param {Function} [mapStateToProps] if specified, component will subscribe to Redux store updates
 *                                     meaning when the store is updated, mapStateToProps will be called
 * @param {Object/Function} [mapDispatchToProps] if object is passed, each function inside it is assumed
 *                                               to be a Redux action creator
 *                                               if function is passed, it will be given dispatch as the first
 *                                               parameter, then you return object that somehow uses dispatch
 *                  
 * See: https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */
export default connect(null, { completeToDo })(ToDoListItem);