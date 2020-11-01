import React from 'react';
import image from '../images/picture.png';

const Story = ({image, title}) => {
    //console.log(image);
    return (
        <div className = "story">
            <img src = {image} alt = "story image" className = "storyImage" />
            <text className = "storyText">{title}</text>
        </div>
    );
}
 
export default Story;

