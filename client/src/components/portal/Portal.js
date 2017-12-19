import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

import CourseList from './CourseList';
import Navbar from '../Navbar';
import CreateCourse from './CreateCourse';
import CreateLessonForm from './CreateLessonForm';
import LessonView from './LessonView';


class Portal extends Component {

  constructor(props){
    super(props);
    this.handleCreateCourseClick = this.handleCreateCourseClick.bind(this);
    this.handleCreateLessonClick = this.handleCreateLessonClick.bind(this);
    this.handleLessonViewClick = this.handleLessonViewClick.bind(this);
    this.state = {
      currentView : <div className="container center-align"><h2>Portal</h2></div>
    }
  }

  handleCreateCourseClick(){
    this.setState({
      currentView : <CreateCourse />
    })
  }

  handleCreateLessonClick() {
    this.setState({
      currentView : <CreateLessonForm />
    })
  }

  handleLessonViewClick() {
    this.setState({
      currentView : <LessonView />
    })
  }

  render() {
    const currentView = this.state.currentView;

    const courseList = () => {
      return <CourseList onLessonClick={() => { this.setState({ currentView : <LessonView />})}}/>
    }

    let addCourse = <Button onClick={this.handleCreateCourseClick} className="blue lighten-1 large maxWidth">Course</Button>
    let addLesson = <Button onClick={this.handleCreateLessonClick} className="blue lighten-1 large maxWidth">Lesson</Button>
    let lessonView = <Button onClick={this.handleLessonViewClick} className="blue lighten-1 large maxWidth">Lesson View</Button>

    return (
      <div>
        <div className="side-nav fixed">
          <header>
            {courseList()}
              <Collapsible>
                <CollapsibleItem header='Add' icon='add' className="z-depth-1">
                  <Collapsible>
                      {addCourse}
                      {addLesson}
                      {lessonView}
                  </Collapsible>
                </CollapsibleItem>
              </Collapsible>
          </header>
        </div>

        <div className="main-portal">
          <Navbar />
          {currentView}
        </div>
      </div>
    )
  }
};

export default Portal;
