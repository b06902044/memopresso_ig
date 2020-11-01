import React, { useState } from 'react';
import Story from './Story';
import {images} from '../style/Image_source';

const StoryList = (props) => {
    return (
        <div className = "storyList">
            {images.map((image, idx) => {
                return(<Story image = {image} title = {`story${idx}`} />);
            })}
        </div>
    );
}
 
export default StoryList;