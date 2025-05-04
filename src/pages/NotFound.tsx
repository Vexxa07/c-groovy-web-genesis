
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Music } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-music-black py-16">
        <div className="text-center px-4">
          <Music className="h-16 w-16 text-music-purple mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">
            Oops! The page you're looking for has vanished into thin air.
          </p>
          <Link
            to="/"
            className="bg-music-purple hover:bg-music-darkPurple text-white px-6 py-3 rounded-full transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
