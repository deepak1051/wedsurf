import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data) =>
      axios.post(`/api/v1/customerRoute/signup`, data).then((res) => res.data),
    onSuccess: (data) => {
      // Invalidate and refetch
      // queryClient.invalidateQueries({ queryKey: ['todos'] });
      console.log(data);
      navigate('/verify-token');
    },
    onError(error) {
      console.log(error.response.data.message || error.message);
    },
  });

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    mutation.mutate({
      ...formData,
    });
  };

  return (
    <div className="py-4 flex flex-col">
      <Link
        className="bg-gray-300 p-2 rounded w-16 font-semibold flex items-center justify-center"
        to="/"
      >
        BACK
      </Link>
      <div className="py-4 text-center">
        <h2 className="font-bold text-2xl uppercase">Sign Up</h2>
        <p className="uppercase leading-tight text-sm font-semibold">
          And Let us plan your events
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          name:
          <input
            className="border p-2 rounded w-full outline-none bg-gray-300"
            type="text"
            name="name"
            onChange={handleChange}
          />
        </label>

        <label>
          email:
          <input
            className="border p-2 rounded w-full outline-none bg-gray-300"
            type="email"
            onChange={handleChange}
            name="email"
          />
        </label>

        <label>
          password:
          <input
            className=" border p-2 rounded w-full outline-none bg-gray-300"
            type="password"
            onChange={handleChange}
            name="password"
          />
        </label>

        <label>
          confirm password:
          <input
            className="border p-2 rounded w-full outline-none bg-gray-300"
            type="password"
            onChange={handleChange}
            name="confirmPassword"
          />
        </label>
        {mutation.isError ? (
          <p className="bg-red-300 border border-red-400 p-2 my-2 rounded w-full">
            {mutation.error.response.data.message || mutation.error.message}
          </p>
        ) : null}
        <button
          disabled={mutation.isPending}
          type="submit"
          className="bg-gray-300 font-bold p-2 mt-4 rounded text-xl"
        >
          {mutation.isPending ? 'signing up...' : 'sign up'}
        </button>
      </form>
      <Link to="/login" className="text-end leading-tight">
        have an account login in
      </Link>
    </div>
  );
};

export default Signup;
