"use client";

import { useArticles } from "@/context/ArticleContext";
import Link from "next/link";
import AnalysisSection from "@/components/AnalysisSection";
import VerificationSection from "@/components/VerificationSection";

export default function ArticleDetailPage({ params }: { params: { id: string } }) {
  const { articles } = useArticles();
  const article = articles.find(a => a.id === parseInt(params.id));

  if (!article) {
    return (
      <main className="container mx-auto p-8 text-center">
        <h1 className="text-3xl font-bold">Article not found.</h1>
        <Link href="/" className="text-blue-600 hover:underline mt-4 inline-block">
          &larr; Back to homepage
        </Link>
      </main>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          {/* Article Headline */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{article.headline}</h1>

          {/* Metadata */}
          <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
            <span>By: {article.author}</span>
            <span>|</span>
            <span>Status: <span className={article.status === 'Verified' ? 'text-green-600' : 'text-yellow-600'}>{article.status}</span></span>
          </div>
          
          {/* Video Player Section (with new sizing) */}
          {article.videoUrl && (
            <div className="mb-8 max-w-4xl mx-auto"> {/* Centered container with medium max-width */}
              <video 
                src={article.videoUrl} 
                controls
                className="w-full rounded-lg shadow-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          {/* Article Content */}
          <div className="prose lg:prose-xl max-w-none mb-8">
            <p>{article.summary}</p>
          </div>
          
          {/* --- RESTORED SECTIONS --- */}
          <VerificationSection articleId={article.id} />
          <AnalysisSection />
          
        </div>
      </main>
    </div>
  );
}