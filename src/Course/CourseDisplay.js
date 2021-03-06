import React, { Component } from "react";
import { CourseTable } from "./CourseTable";
import { CourseEditor } from "./CourseEditor";

export class CourseDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: false,
      selectedCourse: null
    };
  }

  startEditiing = course => {
    this.setState({ showEditor: true, selectedCourse: course });
  };

  cancelEditing = () => {
    this.setState({ showEditor: false, selectedCourse: null });
  };

  createCourse = () => {
    this.setState({ showEditor: true, selectedCourse: {} });
  };

  saveCourse = course => {
    this.props.saveCallback(course);
    this.setState({ showEditor: false, selectedCourse: null });
  };

  render() {
    if (this.state.showEditor) {
      return (
        <CourseEditor
          key={this.state.selectedCourse.id || -1}
          course={this.state.selectedCourse}
          saveCallback={this.saveCourse}
          cancelCallback={this.cancelEditing}
        />
      );
    } else {
      return (
        <div className="m-2">
          <CourseTable
            courses={this.props.courses}
            editCallback={this.startEditiing}
            deleteCallback={this.props.deleteCallback}
          />
          <div className="text-center">
            <button className="btn btn-primary m-1" onClick={this.createCourse}>
              Create Course
            </button>
          </div>
        </div>
      );
    }
  }
}
