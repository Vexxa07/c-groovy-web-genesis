
import React from 'react';
import Layout from '@/components/layout/Layout';
import RegisterForm from '@/components/register/RegisterForm';

const Register = () => {
  return (
    <Layout>
      <div className="bg-music-black min-h-screen py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">Join C'Groovy</h1>
              <p className="text-gray-300">
                Create an account to access millions of songs, personalized playlists, and exclusive content.
              </p>
            </div>
            
            <RegisterForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
