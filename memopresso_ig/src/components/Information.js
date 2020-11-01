import React from 'react';
import {images} from '../style/Information_images';

export default function Information() {
    return(
        <div className = "info">
            <div className = "info-picture">
                <img src = {images[4]} alt = "picture"/>
            </div>
            <div className = "info-infornmation">
                <div className = "name">
                    <text>memopresso</text>
                    <button>追蹤</button>
                </div>
                <div className = "follow">
                    <div>188 post</div>
                    <div>5230 follower</div>
                    <div>225 following</div>
                </div>
                <div> MEMOPRESSO | Taiwan <img src = {images[0]} alt = "img" className = "smlImg" /></div>
                <div> 
                    <img src = {images[1]} alt = "img" className = "smlImg" />Keep your memories forever.
                    <img src = {images[2]} alt = "img" className = "smlImg" />台灣
                    <img src = {images[3]} alt = "img" className = "smlImg" />韓國 
                </div>
                <div>#momopresso 分享你的列印美照 合作事宜請洽business@memopresso.com </div>
                <a href="/html/image-img-tag.https://www.instagram.com/memopresso/html">linktr.ee/memopresso</a>
            </div>
      </div>
    )
}