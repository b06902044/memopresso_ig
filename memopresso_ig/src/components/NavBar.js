import React from 'react';

export default function NavBar() {
    return(
        <nav>
            <text>Instagram</text>
            <div>
                <input type = "text" placeholder = "搜尋"></input>
            </div>
            <div>
                <button id = "logIn">登入</button>
                <button id = "register">註冊</button>
            </div>
        </nav>
    )
}