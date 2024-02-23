import { FaUser } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

const eventList = [
  { id: 1, name: 'Wedding', description: 'Best place for wedding' },
  { id: 2, name: 'Pandit', description: 'Looking for best pandit?' },
  {
    id: 3,
    name: 'Singer & Dancer',
    description: 'Book top artist for your events',
  },
  { id: 4, name: 'Events Planner', description: 'Get us schedule your events' },
];

const Home = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    setIsLoggedIn(false);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <h2 className="font-bold text-xl">Wedsurf</h2>
        <div className="flex gap-1">
          <div className="h-[28px] cursor-pointer border bg-gray-500 p-1 rounded-full">
            <FaUser className="text-white" />
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white font-semibold rounded p-1"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <input
          className="bg-gray-300 rounded p-2 outline-none flex-1"
          type="text"
          placeholder="Search events, banquet.."
        />
        <div className="bg-black p-2 rounded cursor-pointer">
          <CiSearch className="text-white text-2xl font-bold " />
        </div>
      </div>

      <div className="flex my-4 gap-4">
        <div className="w-64 h-24 bg-gray-500 rounded-lg  bg-gradient-to-b from-gray-300 to-gray-500"></div>
        <div className="w-64 h-24 bg-gray-500 rounded-lg  bg-gradient-to-b from-gray-300 to-gray-500"></div>
        <div className="w-64 h-24 bg-gray-500 rounded-lg  bg-gradient-to-b from-gray-300 to-gray-500"></div>
      </div>

      <div>
        <h3 className="font-bold text-xl">Dive in</h3>
        <div className="flex flex-wrap gap-4">
          {eventList.map((event) => (
            <div
              key={event.id}
              className="bg-gray-400 p-4 text-white bg-gradient-to-b from-gray-400 to-gray-700 h-32 w-52 rounded-md flex-grow flex justify-center items-center flex-col"
            >
              <h4 className="font-semibold text-lg">{event.name}</h4>
              <p className="text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
