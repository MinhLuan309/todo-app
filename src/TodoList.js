import React from 'react';
import './CSS/style.css';
import './CSS/reset.css';

const TodoList = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card_img">
          <img
            className="card_banner"
            src="https://media.istockphoto.com/id/1418628408/vector/abstract-blurred-gradient-background-colours-with-dynamic-effect.jpg?s=612x612&w=0&k=20&c=v7ja1vfncSbHdNsgyjbtaiOPiexqUOLhRW_4L3PQ1ww="
            alt="Card banner"
          />
          <img
            className="card_avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cwTxAbuDUIjKx7MQmPyot5oTDuEBE0P1iQaHCQS9PcpQD5sPLTI83ABLgWLnQhI_kLQ&usqp=CAU"
            alt="User avatar"
          />
        </div>

        <div className="card_content">
          <div className="card_info">
            <h1 className="card_name">Victor Crest</h1>
            <span className="card_age">26</span>
            <p className="card_city">London</p>
          </div>
        </div>

        <div className="card_line"></div>

        <div className="card_list">
          <div className="card_item">
            <h1 className="card_follow">80K</h1>
            <p className="card_title">Followers</p>
          </div>
          <div className="card_item">
            <h1 className="card_follow">803K</h1>
            <p className="card_title">Likes</p>
          </div>
          <div className="card_item">
            <h1 className="card_follow">1.4K</h1>
            <p className="card_title">Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
