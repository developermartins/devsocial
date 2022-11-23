import React from 'react';
import './RightBar.scss';

const RightBar = () => {
  return (
   <aside className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.githubusercontent.com/u/97063329?v=4" alt="User avatar" />
              <span>Sr.Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://avatars.githubusercontent.com/u/97063329?v=4" alt="User avatar" />
              <span>Sr.Doe</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      </div>
   </aside>
  );
};

export default RightBar;
