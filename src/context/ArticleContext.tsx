"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

// 1. ADD videoUrl to the Article interface
interface Article {
  id: number;
  headline: string;
  summary: string;
  author: string;
  status: 'Verified' | 'Pending';
  videoUrl?: string; // This field is optional
}

interface ArticleContextType {
  articles: Article[];
  // 2. UPDATE addArticle to accept the optional videoUrl
  addArticle: (newArticle: Omit<Article, 'id' | 'status' | 'author'>) => void;
}

const mockArticles: Article[] = [
  // ... mockArticles data is unchanged ...
  { id: 1, headline: "Blockchain Voting: The Future of Democracy?", summary: "Exploring how decentralized ledger technology could revolutionize electoral systems, ensuring transparency and security.", author: "Jane Doe", status: 'Verified' },
  { id: 2, headline: "New Environmental Regulations Proposed by DAO", summary: "The community has voted to pass a new set of environmental protection proposals. Here's what you need to know.", author: "John Smith", status: 'Verified' },
];

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>(mockArticles);

  const addArticle = useCallback((newArticle: Omit<Article, 'id' | 'status' | 'author'>) => {
    const articleToAdd: Article = {
      ...newArticle,
      id: Date.now(),
      status: 'Pending',
      author: '0xB236...5160',
    };
    setArticles(prevArticles => [articleToAdd, ...prevArticles]);
  }, []);

  return (
    <ArticleContext.Provider value={{ articles, addArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = () => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};