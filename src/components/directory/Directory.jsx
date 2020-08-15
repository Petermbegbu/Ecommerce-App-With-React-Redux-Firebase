import React from "react";
import MenuItem from "../Menu-Item/MenuItem";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: "HATS",
          imageUrl: "images/profile1.jpg",
          class1: "col-md-4",
          class2: "outerBox1",
          class3: "innerBox",
          linkUrl: "hats"
        },
        {
          id: 2,
          title: "JACKETS",
          imageUrl: "images/profile2.png",
          class1: "col-md-4",
          class2: "outerBox1",
          class3: "innerBox"
        },
        {
          id: 3,
          title: "SNEAKERS",
          imageUrl: "images/brian-acton.jpg",
          class1: "col-md-4",
          class2: "outerBox1",
          class3: "innerBox"
        },
        {
          id: 4,
          title: "WOMENS",
          imageUrl: "images/jan-koum.jpg",
          class1: "col-md-6",
          class2: "outerBox2",
          class3: "innerBox",
          class4: "bgColor"
        },
        {
          id: 5,
          title: "MENS",
          imageUrl: "images/jack.jpg",
          class1: "col-md-6",
          class2: "outerBox2",
          class3: "innerBox"
        }
      ]
    };
  }

  render() {
    return (
      <div className="text-center">
        <div className="row">
          {this.state.sections.map(({ id, ...sectionProps }) => {
            return <MenuItem key={id} {...sectionProps} />;
          })}
        </div>
      </div>
    );
  }
}

export default Directory;
