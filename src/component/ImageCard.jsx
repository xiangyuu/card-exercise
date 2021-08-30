import React, {useState} from 'react';
import {Card} from 'antd';
import './ImageCard.scss'
import 'antd/dist/antd.css';
function ImageCard(props) {
  const [isHight, setIsHight] = useState(false)
  const [isShowAll, setIsShowAll] = useState(false)
  const hight = () => {
    setIsHight(!isHight)
  }

  const showAll = (e) => {
    setIsShowAll(!isShowAll)
    if (e.target.innerText === '顯示詳情') {
      e.target.innerText = '縮小'
    } else if (e.target.innerText === '縮小') {
      e.target.innerText = '顯示詳情'
    }
  }

  return (
    <div className='container'>

        <div onMouseOut={hight} onMouseOver={hight} className='picture'>
          <img src={props.image} alt='沒有圖片~'/>
          <div className={isHight ? '' : 'mask'}>
          </div>
        </div>
      <Card className='card' style={{width: 300}}>
        <div className='text'>
          <div className='title'>
            <span>{props.title}</span>
          </div>
          <div className='content'>
            <div className={isShowAll ? 'all-cot' : 'cot'}>{props.content}</div>
          </div>
          <div className='is-show'>
            <button onClick={showAll} className='btn'>顯示詳情</button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ImageCard;