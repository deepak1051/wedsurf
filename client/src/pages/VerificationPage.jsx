import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationPage = ({ setIsLoggedIn }) => {
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data) =>
      axios
        .post(`/api/v1/customerRoute/confirmToken`, data)
        .then((res) => res.data),
    onSuccess: (data) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      console.log(data);
      localStorage.setItem('auth-token', data.token);
      setIsLoggedIn(true);
      navigate('/home');
    },
    onError(error) {
      console.log(error.response.data.message || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({ resetToken: token });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded text-xl text-center bg-gray-300 p-4 mt-2"
    >
      <h2 className="font-semibold">
        We have sent you a verification token to your gmail Please Verify.
      </h2>
      <label className="flex gap-2">
        Token:
        <input
          autoFocus
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full rounded outline-none p-1"
          type="text"
        />
      </label>

      {mutation.isError ? (
        <p className="bg-red-300 border border-red-400 p-2 my-2 rounded w-full">
          {mutation.error.response.data.message || mutation.error.message}
        </p>
      ) : null}

      <button className="bg-gray-700 p-2 text-white rounded">Verify</button>
    </form>
  );
};

export default VerificationPage;
