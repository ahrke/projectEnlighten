import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Button } from 'react-materialize';

import LessonView from './LessonView';

class CourseList extends Component {

  render() {

    const buttonBuild = () => {
      return (
        <Button onClick={() => this.props.onLessonClick()}>Lesson Please!</Button>
      )
    }

    return (
      <div className="no-margins page-height">
        <Collapsible>
          <CollapsibleItem header='First' icon='filter_drama' className="z-depth-1">
            <Collapsible className="popout">
              <CollapsibleItem header='First'>
                {buttonBuild()}
              </CollapsibleItem>
              <CollapsibleItem header='Second' >
                Lorem ipsum dolor sit amet.
              </CollapsibleItem>
              <CollapsibleItem header='Third'>
                Lorem ipsum dolor sit amet.
              </CollapsibleItem>
            </Collapsible>
          </CollapsibleItem>
          <CollapsibleItem header='Second' icon='place' className="z-depth-1">
          <Collapsible>
            <CollapsibleItem header='First'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header='Second'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header='Third'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
          </Collapsible>
          </CollapsibleItem>
          <CollapsibleItem header='Third' icon='whatshot' className="z-depth-1">
          <Collapsible >
            <CollapsibleItem header='First'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header='Second'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
            <CollapsibleItem header='Third'>
              Lorem ipsum dolor sit amet.
            </CollapsibleItem>
          </Collapsible>
          </CollapsibleItem>
        </Collapsible>
      </div>
    );
  }
}

export default CourseList;
