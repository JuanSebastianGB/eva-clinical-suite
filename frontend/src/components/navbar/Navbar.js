import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TranslateOutlinedIcon from '@mui/icons-material/TranslateOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <TranslateOutlinedIcon className='icon' />
            <span>English</span>
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon' />
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className='icon' />
            <div className='counter'>3</div>
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <FormatListBulletedOutlinedIcon className='icon' />
          </div>
          <div className='item'>
            <img
              className='avatar'
              src='https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d5/d5d34bef5be4e5f395fd9672e73b5bf44f018904.jpg'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
