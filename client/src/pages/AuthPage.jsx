import { Link } from 'react-router-dom';
const url =
  'https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29kaW5nfGVufDB8fDB8fHww';

const url2 =
  'https://images.unsplash.com/photo-1708457753320-02e52a276a80?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D';

const AuthPage = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-40 w-40 rounded-full bg-gray-300">
        <img
          src={url}
          alt="Auth page"
          className="h-full w-full overflow-hidden rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 w-48 ">
        <Link
          to="/signup"
          className="bg-gray-300 w-full p-2 font-semibold rounded "
        >
          Sign up
        </Link>
        <Link
          to="/signup"
          className="bg-gray-300 w-full p-2 font-semibold rounded "
        >
          Google
        </Link>
        <Link
          to="/signup"
          className="bg-gray-300 w-full p-2 font-semibold rounded "
        >
          Apple
        </Link>
      </div>
      <Link to="/login" className="text-sm  underline cursor-pointer">
        have an account login in
      </Link>
    </div>
  );
};

export default AuthPage;
