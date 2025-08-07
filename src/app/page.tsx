"use client";

import ArticleCard from "@/components/ArticleCard";
import { useArticles } from "@/context/ArticleContext"; // <-- IMPORT our custom hook

export default function HomePage() {
  // Get the articles from our global context
  const { articles } = useArticles();

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Latest News
        </h1>
        <div className="space-y-6">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id} // <-- PASS THE ID PROP
            headline={article.headline}
            summary={article.summary}
            author={article.author}
            status={article.status}
          />
        ))}
        </div>
      </main>
    </div>
  );
}

