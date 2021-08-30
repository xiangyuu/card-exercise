import logo from './logo.svg';
import './App.scss';
import ImageCard from "./component/ImageCard";
import panda from "./panda.jpg";
import MovieCard from "./component/MovieCard";

function App() {
  return (
    <div className="App">
      {/*<ImageCard title={'功夫熊貓'}*/}
      {/*           content={'阿波是一隻圓滾滾、笨手笨腳的熊貓，是天底下最熱血的中國熊貓，超級崇拜著玉皇宮的悍嬌虎、靈鶴、快螳螂、俏小龍、猴王這五位大名鼎鼎「蓋世五俠」，但是他每天得在老爸鵝老闆開的麵館幫忙打工。 ... 他的夢想終於成真，因為他可以和他的偶像蓋世五俠一起向師父習武，起初並未得到蓋世五俠的認同，尤其是悍嬌虎。'}*/}
      {/*           image={panda}/>*/}
        <MovieCard/>
    </div>
  );
}

export default App;
