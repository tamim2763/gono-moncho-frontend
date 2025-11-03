"use client";

import { useArticles } from "@/context/ArticleContext";
import VerificationSection from "@/components/VerificationSection";

// 1. Define the correct type for the page's props
type ArticlePageProps = {
  params: {
    id: string;
  };
};

// 2. Use the new type in the component definition
export default function ArticlePage({ params }: ArticlePageProps) {
  const { articles } = useArticles();

  // 3. Use the 'id' variable you destructured from params
  const { id } = params;

  // 4. Use the 'id' variable in your find() function
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) {
    return (
      <main className="container mx-auto px-4 py-8">
        <p>Article not found.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-3xl">
      <article>
        <h1 className="text-4xl font-bold mb-4">{article.headline}</h1>
        <p className="text-gray-600 mb-2">By: {article.author}</p>
        <p className="text-sm text-green-600 font-semibold mb-6">
          Status: {article.status}
        </p>

        {article.imageUrl && (
          <img
            src={article.imageUrl}
            alt={article.headline}
            className="w-full h-auto rounded-lg mb-6"
          />
        )}

        <div className="prose lg:prose-xl max-w-none">
          {/* This is the unescaped apostrophe fix from before */}
          <p>{article.fullContent.replace(/'/g, "&apos;")}</p>
        </div>

        {/* 5. Call VerificationSection with NO props */}
        <VerificationSection />
      </article>
    </main>
  );
}
