"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";

// The Article interface is unchanged
interface Article {
  id: number;
  headline: string;
  summary: string;
  author: string;
  fullContent: string;
  status: "Verified" | "Pending";
  category: string;
  imageUrl?: string;
  videoUrl?: string;
}

// --- NEW: Update the context type ---
interface ArticleContextType {
  articles: Article[]; // We'll keep the full list
  filteredArticles: Article[]; // A new list for display
  categories: string[]; // A list of all available categories
  selectedCategory: string; // The currently active category
  setSelectedCategory: (category: string) => void; // Function to change the category
  addArticle: (
    newArticle: Omit<Article, "id" | "status" | "author" | "category">
  ) => void;
}

const mockArticles: Article[] = [
  // ... mockArticles data is unchanged ...
  {
    id: 1,
    headline:
      "Bangladesh, Malaysia sign eight deals to boost bilateral cooperation",
    summary:
      "The signing ceremony took place in Putrajaya this morning, witnessed by prominent figures...",
    author: "Jane Doe",
    status: "Verified",
    category: "National",
    imageUrl: "https://picsum.photos/seed/politics/800/600",
    fullContent:
      "The signing ceremony took place in Putrajaya this morning, witnessed by prominent figures from both nations. Agreements span trade, education, and infrastructure, designed to deepen bilateral ties.",
  },
  {
    id: 2,
    headline: "Six banks shine, five hit record losses in first half of year",
    summary:
      "How did the first half of this year treat the banking sector? The answer depends on who you ask...",
    author: "John Smith",
    status: "Verified",
    category: "Business",
    imageUrl: "https://picsum.photos/seed/business/800/400",
    fullContent:
      "A review of earnings shows divergent paths; while six banks posted strong gains due to robust retail lending, five reported record losses linked to non-performing loans and investment writedowns.",
  },
  {
    id: 3,
    headline: "AI Oracles in Decentralized Finance",
    summary:
      "A deep dive into how AI is making DeFi protocols smarter and more secure.",
    author: "AI Analyst",
    status: "Pending",
    category: "Tech & Startup",
    imageUrl: "https://picsum.photos/seed/tech/800/400",
    fullContent:
      "AI-driven oracles are transforming price feeds and risk models in DeFi. This piece explores architectural patterns, trust assumptions, and how machine learning can be audited in on-chain contexts.",
  },
  {
    id: 4,
    headline: "Satyajit Ray's 'Tagore' Films: A Timeless Tribute",
    summary:
      "Before taking a close look at the three feature films that comprise Ray's tribute...",
    author: "Cultural Critic",
    status: "Verified",
    category: "Entertainment",
    imageUrl: "https://picsum.photos/seed/films/800/400",
    fullContent:
      "Satyajit Ray's cinematic tribute to Tagore brings together poetic imagery and humanist storytelling. This article examines each film's themes and cultural resonance.",
  },
  {
    id: 5,
    headline: "Tigers begin practice for upcoming home series",
    summary:
      "The national cricket team has started their training camp at Mirpur stadium ahead of the series...",
    author: "Sports Desk",
    status: "Verified",
    category: "Sports",
    imageUrl: "https://picsum.photos/seed/sports/800/400",
    fullContent:
      "Preparations ramp up at Mirpur as the national side focuses on fielding drills and strategy sessions ahead of the home series. Coaches emphasize fitness and tactical flexibility.",
  },
  {
    id: 6,
    headline: "Global markets react to new US tariff policies on China",
    summary:
      "The White House's halt on steeper tariffs will be in place until November 10, causing a stir in the global economy.",
    author: "Intl. Correspondent",
    status: "Verified",
    category: "World",
    imageUrl: "https://picsum.photos/seed/world/800/400",
    fullContent:
      "Markets worldwide responded swiftly to the policy shift. Analysts say the temporary halt provides breathing room, but uncertainties remain around long-term trade policy.",
  },
];

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

// --- NEW: Automatically get unique categories from our data ---
const allCategories = [
  "All",
  ...Array.from(new Set(mockArticles.map((a) => a.category))),
];

export const ArticleProvider = ({ children }: { children: ReactNode }) => {
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  // --- NEW: State to track the selected category ---
  const [selectedCategory, setSelectedCategory] = useState("All");

  // --- NEW: Logic to filter articles based on the selected category ---
  const filteredArticles = articles.filter(
    (article) =>
      selectedCategory === "All" || article.category === selectedCategory
  );

  const addArticle = useCallback(
    (newArticle: Omit<Article, "id" | "status" | "author" | "category">) => {
      // ... addArticle function is unchanged ...
      const articleToAdd: Article = {
        ...newArticle,
        id: Date.now(),
        status: "Pending",
        author: "0xB236...5160",
        category: "User Submitted",
        imageUrl: "https://picsum.photos/seed/newArticle/800/400",
      };
      setArticles((prevArticles) => [articleToAdd, ...prevArticles]);
    },
    []
  );

  const value = {
    articles,
    filteredArticles,
    categories: allCategories,
    selectedCategory,
    setSelectedCategory,
    addArticle,
  };

  return (
    <ArticleContext.Provider value={value}>{children}</ArticleContext.Provider>
  );
};

export const useArticles = () => {
  // ... useArticles hook is unchanged ...
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error("useArticles must be used within an ArticleProvider");
  }
  return context;
};
