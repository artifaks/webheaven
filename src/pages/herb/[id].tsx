import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface HerbDetailProps {
  id?: string;
  name?: string;
  description?: string;
  image?: string;
  uses?: string[];
  growingConditions?: {
    light?: string;
    soil?: string;
    water?: string;
    temperature?: string;
  };
  preparationMethods?: {
    title: string;
    description: string;
  }[];
  isFavorite?: boolean;
}

const HerbDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock data for UI scaffolding
  const herbDetail: HerbDetailProps = {
    id: id || "1",
    name: "Lavender",
    description:
      "Lavender is a flowering plant in the mint family known for its beauty, its sweet floral fragrance, and multiple uses. The flowers and the oil derived from them have both cosmetic and medicinal applications.",
    image:
      "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=800&q=80",
    uses: [
      "Aromatherapy for relaxation and stress relief",
      "Sleep aid to combat insomnia",
      "Antiseptic and anti-inflammatory properties",
      "Treatment for minor burns and insect bites",
      "Natural insect repellent",
    ],
    growingConditions: {
      light: "Full sun (6-8 hours daily)",
      soil: "Well-draining, slightly alkaline soil",
      water: "Drought tolerant once established, water sparingly",
      temperature: "Hardy in zones 5-9, prefers warm climates",
    },
    preparationMethods: [
      {
        title: "Lavender Tea",
        description:
          "Add 1-2 teaspoons of dried lavender buds to hot water. Steep for 5 minutes, strain, and enjoy. Add honey if desired.",
      },
      {
        title: "Lavender Essential Oil",
        description:
          "Use in diffusers, add a few drops to bath water, or dilute with a carrier oil for topical application.",
      },
      {
        title: "Lavender Sachet",
        description:
          "Fill small cloth bags with dried lavender buds to place in drawers or under pillows for fragrance and to repel moths.",
      },
    ],
    isFavorite: false,
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    // In a real implementation, this would update the user's favorites in a database
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-white min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <Link to="/">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to Herbs
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFavorite}
          className={isFavorite ? "text-red-500" : "text-gray-400"}
        >
          <Heart className={isFavorite ? "fill-red-500" : ""} size={24} />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="rounded-lg overflow-hidden h-[400px]">
          <img
            src={herbDetail.image}
            alt={herbDetail.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-green-800 mb-4">
            {herbDetail.name}
          </h1>
          <p className="text-gray-700 mb-6">{herbDetail.description}</p>

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-2">
              Quick Facts
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>
                Scientific Name:{" "}
                <span className="italic">Lavandula angustifolia</span>
              </li>
              <li>Family: Lamiaceae (Mint)</li>
              <li>Native Region: Mediterranean</li>
              <li>Harvest Season: Summer</li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <Tabs defaultValue="uses" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="uses">Uses & Benefits</TabsTrigger>
          <TabsTrigger value="growing">Growing Conditions</TabsTrigger>
          <TabsTrigger value="preparation">Preparation Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="uses" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Medicinal Uses & Benefits
              </h2>
              <ul className="space-y-3">
                {herbDetail.uses?.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="growing">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Growing Conditions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">
                    Light Requirements
                  </h3>
                  <p>{herbDetail.growingConditions?.light}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">
                    Soil Preferences
                  </h3>
                  <p>{herbDetail.growingConditions?.soil}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">
                    Watering Needs
                  </h3>
                  <p>{herbDetail.growingConditions?.water}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">
                    Temperature Range
                  </h3>
                  <p>{herbDetail.growingConditions?.temperature}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preparation">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Preparation Methods
              </h2>
              <div className="space-y-6">
                {herbDetail.preparationMethods?.map((method, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-medium text-green-800 mb-2">
                      {method.title}
                    </h3>
                    <p className="text-gray-700">{method.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HerbDetailPage;
