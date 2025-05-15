import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface HerbCardProps {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits: string[];
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
}

const HerbCard = ({
  id = "1",
  name = "Lavender",
  image = "https://images.unsplash.com/photo-1471943311424-646960669fbc?w=800&q=80",
  description = "A fragrant herb with purple flowers known for its calming properties.",
  benefits = ["Relaxation", "Sleep aid", "Skin care"],
  growingDifficulty = "Easy",
  harvestSeason = "Summer",
  usageInstructions = "Dry flowers for tea or sachets",
  isFavorite = false,
  onToggleFavorite = () => {},
}: HerbCardProps) => {
  return (
    <Card className="h-full overflow-hidden flex flex-col transition-all hover:shadow-lg bg-white">
      <Link to={`/herb/${id}`} className="flex-grow flex flex-col">
        <div className="relative h-48 overflow-hidden">
          <img
            src={
              image ||
              `https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images/${name.toLowerCase().replace(/\s+/g, "-")}.jpg`
            }
            alt={`${name} - ${description.substring(0, 50)}${description.length > 50 ? "..." : ""}`}
            className="w-full h-full object-cover transition-transform hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&q=80`;
            }}
          />
        </div>
        <CardHeader className="pb-2">
          <h3 className="text-xl font-semibold text-green-800">{name}</h3>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-gray-600 mb-3">{description}</p>

          <div className="grid grid-cols-2 gap-2 mb-3 text-xs">
            {growingDifficulty && (
              <div>
                <span className="font-semibold text-green-800">
                  Difficulty:
                </span>{" "}
                {growingDifficulty}
              </div>
            )}
            {harvestSeason && (
              <div>
                <span className="font-semibold text-green-800">Harvest:</span>{" "}
                {harvestSeason}
              </div>
            )}
            {usageInstructions && (
              <div className="col-span-2">
                <span className="font-semibold text-green-800">Usage:</span>{" "}
                {usageInstructions}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {benefits.slice(0, 3).map((benefit, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                {benefit}
              </Badge>
            ))}
            {benefits.length > 3 && (
              <Badge
                variant="outline"
                className="bg-green-50 text-green-700 border-green-200"
              >
                +{benefits.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
      <CardFooter className="pt-2 border-t border-gray-100 flex justify-between">
        <Button
          variant="default"
          size="sm"
          className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-1"
          asChild
        >
          <Link to={`/herb/${id}`}>View Details</Link>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto text-gray-500 hover:text-red-500"
          onClick={() => onToggleFavorite(id)}
        >
          <Heart
            className={`h-5 w-5 ${isFavorite ? "fill-red-500 text-red-500" : ""}`}
          />
          <span className="sr-only">
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HerbCard;
