import { IPost } from "@/libs/types";
import Link from "next/link";
import React from "react";

interface BlogProps {
  items: IPost[];
  noTitle?: boolean;
}

const Blog = ({ items, noTitle }: BlogProps) => {
  return (
    <div className="w-full p-12">
      {!noTitle && (
        <div className="flex items-end justify-between mb-12 header">
          <div className="title">
            <p className="mb-4 text-4xl font-bold text-black">Últimos posts</p>
            <p className="text-2xl font-light text-black">
              Accede al blog para seguir leyendo posts que te pueden ayudar en
              tu Actitud Plan
            </p>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {items &&
          items.map((item) => {
            return (
              <div
                key={`post-${item.id}`}
                className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80"
              >
                <Link legacyBehavior href={`/blog/${item.slug}`}>
                  <a className="block w-full h-full">
                    <img
                      alt={item.title}
                      src={item.coverImage.url}
                      className="object-cover w-full max-h-40"
                    />
                    <div className="w-full p-4 bg-white">
                      <p className="mb-2 text-xl font-medium text-gray-800">
                        {item.title}
                      </p>
                      <p className="font-light text-black text-md">
                        {item.excerpt}
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Blog;
