import React from "react";
import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";

interface AffiliateProductCardProps {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  merchant: string;
  affiliateUrl: string;
  category: string;
}

const AffiliateProductCard = ({
  id,
  name,
  description,
  imageUrl,
  price,
  merchant,
  affiliateUrl,
  category,
}: AffiliateProductCardProps) => {
  const handleProductClick = async () => {
    try {
      // Record the click in the database for analytics
      await supabase.from("affiliate_clicks").insert({
        product_id: id,
        clicked_at: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Error recording affiliate click:", error);
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg text-green-800">{name}</h3>
          <Badge variant="outline" className="bg-green-50">
            {category}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold text-green-700">
            ${price.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">{merchant}</span>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="p-4">
        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
          onClick={handleProductClick}
        >
          <Button className="w-full bg-green-600 hover:bg-green-700">
            View Product
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default AffiliateProductCard;
