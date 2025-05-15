import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/lib/supabase";

interface AffiliateProduct {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
  merchant: string;
  affiliate_url: string;
  category: string;
}

const AffiliatePage = () => {
  const [products, setProducts] = useState<AffiliateProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<AffiliateProduct[]>(
    [],
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from("affiliate_products")
          .select("*");

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setProducts(data as unknown as AffiliateProduct[]);
          setFilteredProducts(data as unknown as AffiliateProduct[]);
        } else {
          // Mock data if no products in database
          const mockProducts: AffiliateProduct[] = [
            {
              id: 1,
              name: "Organic Lavender Essential Oil",
              description:
                "100% pure therapeutic grade lavender oil for aromatherapy and relaxation.",
              image_url:
                "https://images.unsplash.com/photo-1595252129375-cb33016ce497?w=400&q=80",
              price: 15.99,
              merchant: "Nature's Bounty",
              affiliate_url: "https://example.com/lavender-oil",
              category: "Essential Oils",
            },
            {
              id: 2,
              name: "Herb Growing Kit - Medicinal Collection",
              description:
                "Complete kit with seeds, soil, and pots to grow 6 medicinal herbs at home.",
              image_url:
                "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400&q=80",
              price: 29.99,
              merchant: "Green Thumb",
              affiliate_url: "https://example.com/herb-kit",
              category: "Growing Supplies",
            },
            {
              id: 3,
              name: "Herbal Tea Sampler Box",
              description:
                "Collection of 12 medicinal herb teas for various health benefits.",
              image_url:
                "https://images.unsplash.com/photo-1563911892437-1feda0179e1b?w=400&q=80",
              price: 24.5,
              merchant: "Tea Haven",
              affiliate_url: "https://example.com/tea-sampler",
              category: "Herbal Teas",
            },
            {
              id: 4,
              name: "Herb Drying Rack",
              description:
                "Multi-layer mesh drying rack for preserving herbs and flowers.",
              image_url:
                "https://images.unsplash.com/photo-1515872474884-c6a548860190?w=400&q=80",
              price: 19.95,
              merchant: "Garden Essentials",
              affiliate_url: "https://example.com/drying-rack",
              category: "Tools",
            },
            {
              id: 5,
              name: "The Complete Medicinal Herbs Handbook",
              description:
                "Comprehensive guide to identifying, growing, and using medicinal herbs.",
              image_url:
                "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&q=80",
              price: 34.99,
              merchant: "Botanical Books",
              affiliate_url: "https://example.com/herb-handbook",
              category: "Books",
            },
            {
              id: 6,
              name: "Ceramic Herb Mortar and Pestle",
              description:
                "Traditional mortar and pestle for grinding herbs and spices.",
              image_url:
                "https://images.unsplash.com/photo-1593400599091-e3ce5ca0dc5c?w=400&q=80",
              price: 22.5,
              merchant: "Kitchen Craft",
              affiliate_url: "https://example.com/mortar-pestle",
              category: "Tools",
            },
          ];
          setProducts(mockProducts);
          setFilteredProducts(mockProducts);
        }
      } catch (error) {
        console.error("Error fetching affiliate products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [searchTerm, products]);

  const handleProductClick = async (productId: number) => {
    try {
      // Record the click in the database for analytics
      await supabase.from("affiliate_clicks").insert([
        {
          product_id: productId,
          clicked_at: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      console.error("Error recording affiliate click:", error);
    }
  };

  const categories = [...new Set(products.map((product) => product.category))];

  return (
    <div className="min-h-screen bg-[#f8f9f6]">
      {/* Header */}
      <div className="bg-[#2c5530] text-white p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <h1 className="text-2xl font-bold">Herb Wisdom Shop</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto p-4 md:p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            Recommended Products
          </h2>
          <p className="text-gray-600">
            Explore our curated selection of high-quality herbal products from
            trusted partners.
            <span className="text-sm ml-2 text-gray-500">
              (Affiliate disclosure: We earn a commission from qualifying
              purchases)
            </span>
          </p>
        </div>

        {/* Search */}
        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-green-800 mb-3">
            Categories
          </h3>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={searchTerm === "" ? "default" : "outline"}
              size="sm"
              onClick={() => setSearchTerm("")}
              className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200"
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => setSearchTerm(category)}
                className="bg-white hover:bg-green-50"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">
              No products found matching your search.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg text-green-800">
                      {product.name}
                    </h3>
                    <Badge variant="outline" className="bg-green-50">
                      {product.category}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-green-700">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {product.merchant}
                    </span>
                  </div>
                </CardContent>
                <Separator />
                <CardFooter className="p-4">
                  <a
                    href={product.affiliate_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      View Product
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-[#2c5530] text-white/80 p-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Herb Wisdom Emporium. Affiliate
            disclosure: As an affiliate, we earn from qualifying purchases.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AffiliatePage;
