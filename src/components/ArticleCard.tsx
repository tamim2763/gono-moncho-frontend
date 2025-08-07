import React from 'react';
import Link from 'next/link'; // <-- IMPORT LINK

type ArticleCardProps = {
  id: number; // <-- ADD ID TO PROPS
  headline: string;
  summary: string;
  author: string;
  status: 'Verified' | 'Pending';
};

export default function ArticleCard({ id, headline, summary, author, status }: ArticleCardProps) {
  const isVerified = status === 'Verified';
  const badgeClasses = isVerified ? "text-green-700 bg-green-100" : "text-yellow-700 bg-yellow-100";

  return (
    // WRAP the div with the Link component
    <Link href={`/article/${id}`} className="block"> 
      <div className="border rounded-lg p-6 bg-white shadow-sm hover:shadow-lg hover:border-blue-500 transition-all duration-300 ease-in-out">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">
          {headline}
        </h2>
        <p className="text-gray-600 mb-4 truncate"> {/* Use truncate to keep summary short */}
          {summary}
        </p>
        <div className="text-sm text-gray-500 flex justify-between items-center pt-4 border-t">
          <span>By: {author}</span>
          <span className={`font-semibold px-3 py-1 rounded-full ${badgeClasses}`}>
            {status}
          </span>
        </div>
      </div>
    </Link>
  );
}