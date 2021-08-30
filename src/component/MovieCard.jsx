import React, {useState} from 'react';
import './MovieCard.scss'
import 'antd/dist/antd.css';
import {Card, Divider} from 'antd';

function MovieCard(props) {
  // function Control(x){
  //   if(x=='start'){
  //     document.getElementById("MovieShow").play();
  //   }else if(x=='stop'){
  //     document.getElementById("MovieShow").pause();
  //   }}
  const [isStart,setIsStart]=useState(false)
  const action = () => {
    setIsStart(!isStart)
  }
  const videoPlay=(e)=>{
    if (e.paused){
      e.target.play()
      console.log('a')
    }else{
      e.target.pause()
      console.log('b')
    }
  }
  return (
    <div className='container'>
      <Card className='card' style={{width: 600}}>
        <div className='movie'>
          <iframe
                  videoPlay={videoPlay}
                  width="560" height="315" src="https://www.youtube.com/embed/1ga6Aih-HfU" title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>

          </iframe>
          <div className='controller' onClick={isStart}>
            <button  onClick={action}>暫停</button>
          </div>

        </div>
        <Divider orientation="left">動漫介紹</Divider>
        <span className='title'>航海王</span>
        <p>
          《ONE PIECE》（日語：ONE
          PIECE／ワンピース；中文譯名：海賊王、航海王），是日本漫畫家尾田榮一郎創作的少年漫畫，自1997年7月22日起在集英社旗下雜誌《週刊少年Jump》連載[1]、同年12月發行第一冊單行本，至今已出版90餘冊單行本。並在漫畫雜誌《週刊少年Jump》中長期佔據人氣榜的第一名，單行本在日本以外，亦已有30多個國家翻譯版本發行。另外也衍生出諸多衍生作品，包括同名的電視動畫、電影、小說和電子遊戲等周邊媒體產品。

          作品以虛構的「大海賊時代」為故事舞台，描述海賊蒙其·D·魯夫想要得到「ONE PIECE」（一個大秘寶）和成為「海賊王」為夢想而出海向「偉大的航道」航行的海洋冒險故事。
        </p>
      </Card>
    </div>
  );
}

export default MovieCard;