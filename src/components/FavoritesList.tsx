import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface Herb {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface FavoritesListProps {
  favorites?: Herb[];
  onRemoveFavorite?: (id: string) => void;
  onViewHerb?: (id: string) => void;
  onBackToHome?: () => void;
}

const FavoritesList = ({
  favorites = [
    {
      id: "1",
      name: "Lavender",
      description: "Known for its calming properties and pleasant aroma.",
      image:
        "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
      category: "Relaxation",
    },
    {
      id: "2",
      name: "Chamomile",
      description: "Helps with sleep and digestive issues.",
      image:
        "https://images.unsplash.com/photo-1543362906-acfc16c67564?w=400&q=80",
      category: "Sleep Aid",
    },
    {
      id: "3",
      name: "Peppermint",
      description: "Refreshing herb that aids digestion and clears sinuses.",
      image:
        "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?w=400&q=80",
      category: "Digestive",
    },
  ],
  onRemoveFavorite = () => {},
  onViewHerb = () => {},
  onBackToHome = () => {},
}: FavoritesListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(favorites.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFavorites = favorites.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-gray-50 p-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onBackToHome}
              className="flex items-center gap-1"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Browse
            </Button>
            <h1 className="text-2xl font-bold text-green-800">
              My Favorite Herbs
            </h1>
          </div>
          <Badge variant="secondary" className="text-sm">
            {favorites.length} {favorites.length === 1 ? "herb" : "herbs"} saved
          </Badge>
        </div>

        {favorites.length === 0 ? (
          <Alert className="bg-amber-50 border-amber-200 mb-4">
            <AlertDescription className="text-center py-8">
              <div className="flex flex-col items-center gap-4">
                <Heart className="h-12 w-12 text-gray-400" />
                <p className="text-lg font-medium">
                  You haven't saved any favorite herbs yet.
                </p>
                <Button
                  onClick={onBackToHome}
                  variant="outline"
                  className="mt-2"
                >
                  Browse Herbs
                </Button>
              </div>
            </AlertDescription>
          </Alert>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {currentFavorites.map((herb) => (
                <Card
                  key={herb.id}
                  className="overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={herb.image}
                      alt={herb.name}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-90"
                      onClick={() => onRemoveFavorite(herb.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={herb.image} alt={herb.name} />
                        <AvatarFallback className="bg-green-100 text-green-800">
                          {herb.name.substring(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{herb.name}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {herb.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="bg-green-50">
                        {herb.category}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onViewHerb(herb.id)}
                        className="text-green-700 hover:text-green-800 hover:bg-green-50"
                      >
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination className="mt-8">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      className={
                        currentPage === 1
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>

                  {Array.from({ length: totalPages }).map((_, index) => (
                    <PaginationItem key={index}>
                      <PaginationLink
                        isActive={currentPage === index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      className={
                        currentPage === totalPages
                          ? "pointer-events-none opacity-50"
                          : ""
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
