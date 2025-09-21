import Image from "next/image";
import React from "react";

const blogs = [
  {
    id: 1,
    image: "/image/Travel website Dashboard.jpg",
    title: "Designing Engaging User Interfaces For...",
    date: "22 Oct,2020",
  },
  {
    id: 2,
    image: "/image/Travel website Dashboard.jpg",
    title: "Designing Engaging User Interfaces For...",
    date: "22 Oct,2020",
  },
  {
    id: 3,
    image: "/image/Travel website Dashboard.jpg",
    title: "Designing Engaging User Interfaces For...",
    date: "22 Oct,2020",
  },
  {
    id: 4,
    image: "/image/Travel website Dashboard.jpg",
    title: "Designing Engaging User Interfaces For...",
    date: "22 Oct,2020",
  },
];
const Blog = () => {
  return (
    <div className="space-y-4 p-10">
      <h1 className="text-3xl font-bold text-center">Blog</h1>
      <p className="text-gray-500 text-center">
        Check out my recent blog posts where I share insights on design,
        development, and the latest industry trends.
      </p>
      <div className="flex justify-center gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="max-w-72  rounded-xl shadow-md ">
            <Image
              src={blog.image}
              alt="Portfolio"
              width={500}
              height={300}
              className="mt-10 w-full h-60 object-cover "
            />
            <div className="p-4 space-y-4">
              <p className="text-sm text-gray-500">{blog.date}</p>
              <p className="text-xl font-bold">{blog.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
