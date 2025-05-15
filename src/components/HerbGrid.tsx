import React, { useState, useEffect } from "react";
import HerbCard from "./HerbCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./ui/pagination";
import { supabase } from "@/lib/supabase";
import type { Herb } from "@/types/herb";
import { Loader2 } from "lucide-react";

interface HerbGridProps {
  searchTerm?: string;
  filterCategory?: string;
  onHerbClick?: (herbId: string) => void;
  onToggleFavorite?: (herbId: string, isFavorite: boolean) => void;
}

const HerbGrid = ({
  searchTerm = "",
  filterCategory = "all",
  onHerbClick = () => {},
  onToggleFavorite = () => {},
}: HerbGridProps) => {
  const [herbs, setHerbs] = useState<Herb[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [favorites, setFavorites] = useState<string[]>([]);
  const itemsPerPage = 8;

  // Fetch herbs from Supabase
  useEffect(() => {
    const fetchHerbs = async () => {
      try {
        setLoading(true);
        console.log("Fetching herbs from Supabase...");
        console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);

        let query = supabase.from("herbs").select("*");

        // Apply filters if provided
        if (searchTerm) {
          query = query.ilike("name", `%${searchTerm}%`);
        }

        if (filterCategory && filterCategory !== "all") {
          query = query.eq("category", filterCategory);
        }

        const { data, error } = await query;

        if (error) {
          console.error("Supabase query error:", error);
          throw error;
        }

        console.log("Herbs data received:", data);

        // If no data, use mock data for development
        if (!data || data.length === 0) {
          console.log("No herbs found in database, using mock data");
          const mockHerbs = [
            {
              id: "1",
              name: "Lavender",
              description:
                "Known for its calming properties and pleasant aroma.",
              image:
                "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
              benefits: ["Relaxation", "Sleep Aid", "Skin Care"],
              category: "Aromatic",
            },
            {
              id: "2",
              name: "Chamomile",
              description: "Helps with sleep and digestive issues.",
              image:
                "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=80",
              benefits: ["Sleep Aid", "Digestive Health", "Stress Relief"],
              category: "Medicinal",
            },
            {
              id: "3",
              name: "Peppermint",
              description:
                "Refreshing herb that aids digestion and clears sinuses.",
              image:
                "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&q=80",
              benefits: [
                "Digestive Aid",
                "Headache Relief",
                "Breath Freshener",
              ],
              category: "Culinary",
            },
          ];
          setHerbs(mockHerbs);
          return;
        }

        // Transform the data to match our Herb interface
        const herbsData = data.map((herb) => ({
          id: herb.id,
          name: herb.name,
          description: herb.description,
          image: herb.image_url,
          benefits: herb.benefits
            ? Array.isArray(herb.benefits)
              ? herb.benefits
              : [String(herb.benefits)]
            : [],
          category: herb.category,
          isFavorite: favorites.includes(herb.id),
        }));

        setHerbs(herbsData);
      } catch (err) {
        console.error("Error fetching herbs:", err);
        setError("Failed to load herbs. Please try again later.");

        // Use mock data as fallback
        const mockHerbs = [
          {
            id: "1",
            name: "Lavender",
            description: "Known for its calming properties and pleasant aroma.",
            image:
              "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
            benefits: ["Relaxation", "Sleep Aid", "Skin Care"],
            category: "Aromatic",
          },
          {
            id: "2",
            name: "Chamomile",
            description: "Helps with sleep and digestive issues.",
            image:
              "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=80",
            benefits: ["Sleep Aid", "Digestive Health", "Stress Relief"],
            category: "Medicinal",
          },
          {
            id: "3",
            name: "Peppermint",
            description:
              "Refreshing herb that aids digestion and clears sinuses.",
            image:
              "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&q=80",
            benefits: ["Digestive Aid", "Headache Relief", "Breath Freshener"],
            category: "Culinary",
          },
        ];
        setHerbs(mockHerbs);
      } finally {
        setLoading(false);
      }
    };

    fetchHerbs();
  }, [searchTerm, filterCategory, favorites]);

  // Load favorites from local storage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favoriteHerbs");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  // Handle toggling favorites
  const handleToggleFavorite = (herbId: string, isFavorite: boolean) => {
    let updatedFavorites: string[];

    if (isFavorite) {
      updatedFavorites = [...favorites, herbId];
    } else {
      updatedFavorites = favorites.filter((id) => id !== herbId);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoriteHerbs", JSON.stringify(updatedFavorites));
    onToggleFavorite(herbId, isFavorite);
  };

  // Calculate pagination
  const indexOfLastHerb = currentPage * itemsPerPage;
  const indexOfFirstHerb = indexOfLastHerb - itemsPerPage;
  const currentHerbs = herbs.slice(indexOfFirstHerb, indexOfLastHerb);
  const totalPages = Math.ceil(herbs.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-600" />
        <span className="ml-2 text-green-600">Loading herbs...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (herbs.length === 0) {
    return (
      <div className="w-full h-64 flex items-center justify-center">
        <p className="text-gray-500">No herbs found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div
      className="w-full bg-background py-8 px-4 md:px-6"
      id="herb-grid-container"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentHerbs.map((herb) => (
          <HerbCard
            key={herb.id}
            id={herb.id}
            name={herb.name}
            description={herb.description}
            image={herb.image}
            benefits={herb.benefits || []}
            growingDifficulty={herb.growingDifficulty}
            usageInstructions={herb.usageInstructions}
            harvestSeason={herb.harvestSeason}
            isFavorite={favorites.includes(herb.id)}
            onToggleFavorite={() =>
              handleToggleFavorite(herb.id, !favorites.includes(herb.id))
            }
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                </PaginationItem>
              )}

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={page === currentPage}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ),
              )}

              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  );
};

export default HerbGrid;
