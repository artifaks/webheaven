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
            src={
              herbDetail.image ||
              `https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images/${herbDetail.name.toLowerCase().replace(/\s+/g, "-")}.jpg`
            }
            alt={`${herbDetail.name} - ${herbDetail.description?.substring(0, 50)}${herbDetail.description?.length > 50 ? "..." : ""}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=400&q=80`;
            }}
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
                <span className="italic">
                  {herbDetail.scientificName || "Not available"}
                </span>
              </li>
              <li>Family: {herbDetail.family || "Not specified"}</li>
              <li>
                Native Region: {herbDetail.nativeRegion || "Not specified"}
              </li>
              <li>
                Harvest Season: {herbDetail.harvestSeason || "Varies by region"}
              </li>
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

        <TabsContent value="culinary">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Culinary Applications
              </h2>
              <ul className="space-y-3">
                {herbDetail.culinaryUses?.map((use, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h3 className="font-medium text-green-800 mb-2">
                  Companion Plants
                </h3>
                <div className="flex flex-wrap gap-2">
                  {herbDetail.companionPlants?.map((plant, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                    >
                      {plant}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medicinal">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Medicinal Properties
              </h2>
              <div className="space-y-6">
                {herbDetail.medicinalProperties?.map((property, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-xl font-medium text-green-800 mb-2">
                      {property.property}
                    </h3>
                    <p className="text-gray-700">{property.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">
                    Common Pests
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {herbDetail.pests?.map((pest, index) => (
                      <li key={index}>{pest}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-medium text-green-800 mb-2">
                    Common Diseases
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    {herbDetail.diseases?.map((disease, index) => (
                      <li key={index}>{disease}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold text-green-800 mb-4">
                Historical Uses & Care Instructions
              </h2>

              <div className="mb-8 bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-medium text-green-800 mb-3">
                  Historical Context
                </h3>
                <p className="text-gray-700">{herbDetail.historicalUses}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium text-green-800 mb-3">
                    Propagation Methods
                  </h3>
                  <ul className="space-y-2">
                    {herbDetail.propagationMethods?.map((method, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-green-800 mb-3">
                    Harvesting & Storage
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">
                        Harvest Tips
                      </h4>
                      <p className="text-gray-700">{herbDetail.harvestTips}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 mb-1">
                        Storage Instructions
                      </h4>
                      <p className="text-gray-700">
                        {herbDetail.storageInstructions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HerbDetailPage;
