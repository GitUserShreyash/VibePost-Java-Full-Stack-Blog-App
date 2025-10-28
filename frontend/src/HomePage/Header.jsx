import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { SearchBar } from '../Components/Searchbar';
export const Header = () => {
  return (
    <nav className="flex justify-between text-white p-0 flex-direction-row items-center">
      <div className="flex justify-between w-full gap-4">
        <a href="/" className="text-2xl font-bold">
          vibePost
        </a>
      </div>
      <SearchBar />
      <div className="flex justify-end w-full">
        <ul className="flex space-x-4">
          <li>
            <a href="/signin">
              <FontAwesomeIcon icon={faCircleUser} size='2xl' />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};