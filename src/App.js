import './App.css';
import TitleList from './Description';
import FollowersList from './Followers';
import HeaderList from './Header';
import NatPhoto from './Image';

function App() {
  return (
    <div>
      <div className='mainPhoto'>
        <NatPhoto />
      </div>
      <div className='header'>
        <HeaderList />
      </div>
      <div className='subtittle'>
        <FollowersList />
      </div>
      <div className='title'>
        <TitleList />
      </div>
    </div>
  );
}

export default App;
