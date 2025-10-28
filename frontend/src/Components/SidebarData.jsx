
// ...existing code...
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ExploreIcon from '@mui/icons-material/Explore';
import BlogIcon from '@mui/icons-material/Book';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle,faEnvelope,faShieldAlt,faFileContract,faTachometerAlt,faUser,faCog,faBell} from '@fortawesome/free-solid-svg-icons';

const SidebarData = [
  {
    id: 'main',
    title: null,
    items: [
      { title: 'Home', path: '/', icon: <HomeIcon /> },
      { title: 'Popular', path: '/popular', icon: <TrendingUpIcon /> },
      { title: 'Explore', path: '/explore', icon: <ExploreIcon /> },
      { title: 'Blog', path: '/blog', icon: <BlogIcon /> },
    ],
  },
  {
    id: 'topics',
    title: 'Topics',
    items: [
      {
        title: "Technology",
        path: "/technology",
    },
    {
        title: "Health",
        path: "/health",
    },
    {
        title: "Finance",
        path: "/finance",
    },
    {
        title: "Travel",
        path: "/travel",
    },
    {
        title: "Food",
        path: "/food",
    },
    {
        title: "Lifestyle",
        path: "/lifestyle",
    },
    {
        title: "Movies & TV",
        path: "/movies-and-tv",
    }
    ],
  },
  {
    id: 'tools',
    title: null,
    items: [
      {
        title: "Dashboard",
        icon: <FontAwesomeIcon icon={faTachometerAlt} />
    },
    {
        title: "Profile",
        icon: <FontAwesomeIcon icon={faUser} />
    },
    {
        title: "Settings",
        icon: <FontAwesomeIcon icon={faCog} />
    },
    {
        title: "Messages",
        icon: <FontAwesomeIcon icon={faEnvelope} />
    },
    {
        title: "Notifications",
        icon: <FontAwesomeIcon icon={faBell} />
    },
    ],
  },
  {
    id: 'legal',
    title: null,
    items: [
      { title: 'About Us', path: '/about-us', icon: <FontAwesomeIcon icon={faInfoCircle} /> },
      { title: 'Help', path: '/help', icon: <FontAwesomeIcon icon={faEnvelope} /> },
      { title: 'Privacy', path: '/privacy', icon: <FontAwesomeIcon icon={faShieldAlt} /> },
      { title: 'Terms', path: '/terms', icon: <FontAwesomeIcon icon={faFileContract} /> },
    ],
  },
];

export default SidebarData;
// ...existing code...