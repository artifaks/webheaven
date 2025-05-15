import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Heart,
  Leaf,
  Info,
  ShoppingBag,
  MessageCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import HerbGrid from "./HerbGrid";
import FavoritesList from "./FavoritesList";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeTab, setActiveTab] = useState("browse");
  const [featuredHerb, setFeaturedHerb] = useState(null);

  // Mock filter categories
  const filterCategories = [
    { value: "all", label: "All Herbs" },
    { value: "medicinal", label: "Medicinal" },
    { value: "culinary", label: "Culinary" },
    { value: "aromatic", label: "Aromatic" },
    { value: "decorative", label: "Decorative" },
  ];

  // Mock featured herb data
  useEffect(() => {
    // This would normally come from an API
    setFeaturedHerb({
      id: "featured-1",
      name: "Lavender",
      description: "Known for its calming properties and pleasant aroma.",
      image:
        "https://elhhfkmuivqbgrbennmo.supabase.co/storage/v1/object/public/herb.images//lavender-.jpg",
      benefits: ["Relaxation", "Sleep aid", "Anxiety relief"],
      category: "Aromatic",
    });
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
  };

  return (
    <div className="min-h-screen bg-[#f8f9f6] flex flex-col relative">
      {/* Hero Section */}
      <div className="bg-[#2c5530] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=1200&q=80')] opacity-20 bg-cover bg-center" />
        <header className="relative z-10 p-4 md:p-6 shadow-md">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-green-300" />
                <h1 className="text-2xl md:text-3xl font-bold">
                  Herb Wisdom Emporium
                </h1>
              </div>

              <div className="flex flex-col md:flex-row gap-3 md:items-center w-full md:w-auto">
                <div className="relative flex-grow md:w-64">
                  <Input
                    type="text"
                    placeholder="Search herbs..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                  />
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-white/60" />
                </div>

                <div className="flex gap-2">
                  <Select
                    value={activeFilter}
                    onValueChange={handleFilterChange}
                  >
                    <SelectTrigger className="bg-white/10 border-white/20 text-white w-[180px]">
                      <div className="flex items-center gap-2">
                        <Filter className="h-4 w-4" />
                        <SelectValue placeholder="Filter" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {filterCategories.map((category) => (
                        <SelectItem key={category.value} value={category.value}>
                          {category.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        Favorites
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Your Favorite Herbs</DialogTitle>
                      </DialogHeader>
                      <FavoritesList />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Content */}
        <div className="container mx-auto py-12 md:py-20 px-4 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Discover Nature's Healing Wisdom
            </h2>
            <p className="text-lg md:text-xl text-green-100 mb-8">
              Explore our comprehensive collection of medicinal herbs, their
              benefits, and how to use them for natural wellness.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Explore Herbs
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={() => (window.location.href = "/affiliate")}
              >
                <ShoppingBag className="h-4 w-4 mr-2" />
                Shop Products
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Herb Section */}
      {featuredHerb && (
        <section className="bg-green-50 py-10">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-6">
              <Info className="h-5 w-5 text-green-700" />
              <h2 className="text-2xl font-semibold text-green-800">
                Featured Herb
              </h2>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={featuredHerb.image}
                  alt={featuredHerb.name}
                  className="w-full h-full object-cover aspect-square md:aspect-auto"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-green-800 mb-2">
                      {featuredHerb.name}
                    </h3>
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-200 mb-4">
                      {featuredHerb.category}
                    </Badge>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-green-700 hover:text-green-800 hover:bg-green-50"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <p className="text-gray-700 mb-4">{featuredHerb.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium text-green-800 mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredHerb.benefits.map((benefit, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-green-50"
                      >
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button
                  className="bg-green-700 hover:bg-green-800 text-white flex items-center gap-1"
                  onClick={() =>
                    (window.location.href = `/herb/${featuredHerb.id}`)
                  }
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="browse">Browse All</TabsTrigger>
              <TabsTrigger value="favorites">My Favorites</TabsTrigger>
            </TabsList>

            <div className="text-sm text-muted-foreground">
              Showing results for:{" "}
              {activeFilter === "all"
                ? "All Herbs"
                : filterCategories.find((cat) => cat.value === activeFilter)
                    ?.label}
              {searchTerm && ` containing "${searchTerm}"`}
            </div>
          </div>

          <TabsContent value="browse" className="mt-0">
            <HerbGrid searchTerm={searchTerm} filterCategory={activeFilter} />
          </TabsContent>

          <TabsContent value="favorites" className="mt-0">
            <FavoritesList />
          </TabsContent>
        </Tabs>
      </main>

      {/* Categories Section */}
      <section className="bg-green-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {filterCategories.slice(1).map((category) => {
              // Custom icon based on category
              let CategoryIcon = Leaf;
              let iconDescription = "Herb leaf icon";
              let bgColor = "bg-green-100";

              if (category.value === "medicinal") {
                CategoryIcon = () => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                    aria-hidden="true"
                  >
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                  </svg>
                );
                iconDescription = "Medicinal herb mortar and pestle icon";
                bgColor = "bg-green-100";
              } else if (category.value === "culinary") {
                CategoryIcon = () => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                    aria-hidden="true"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2" />
                    <path d="M18 15V2" />
                    <path d="M21 8h-3" />
                    <path d="M21 5h-3" />
                    <path d="M21 11h-3" />
                    <path d="M10 15.5c0 1.7 1.3 3 3 3h1c1.7 0 3-1.3 3-3v-2c0-.6-.4-1-1-1h-5c-.6 0-1 .4-1 1v2z" />
                  </svg>
                );
                iconDescription = "Culinary herbs and utensils icon";
                bgColor = "bg-amber-50";
              } else if (category.value === "aromatic") {
                CategoryIcon = () => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                    aria-hidden="true"
                  >
                    <path d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                    <path d="m21 21-6.05-6.05" />
                    <path d="M10 13V7" />
                    <path d="M7 10h6" />
                  </svg>
                );
                iconDescription = "Aromatic essential oil icon";
                bgColor = "bg-purple-50";
              } else if (category.value === "decorative") {
                CategoryIcon = () => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-green-600"
                    aria-hidden="true"
                  >
                    <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m3 4.5a4.5 4.5 0 1 0 4.5-4.5M12 16.5V15m4.5-3H15" />
                  </svg>
                );
                iconDescription = "Decorative flower icon";
                bgColor = "bg-rose-50";
              }

              return (
                <div
                  key={category.value}
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px] hover:bg-green-50 focus-within:ring-2 focus-within:ring-green-500 focus-within:outline-none`}
                  onClick={() => handleFilterChange(category.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleFilterChange(category.value);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View ${category.label} herbs`}
                >
                  <div
                    className={`h-32 ${bgColor} flex items-center justify-center relative overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1589927986089-35812388d1f4?w=800&q=80')] bg-cover bg-center"
                      aria-hidden="true"
                    />
                    <CategoryIcon />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-medium text-green-800">
                      {category.label} Herbs
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Explore our collection
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2c5530] text-white/80 p-6 mt-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-green-300" />
                <h3 className="text-xl font-bold text-white">
                  Herb Wisdom Emporium
                </h3>
              </div>
              <p className="text-green-100">
                A comprehensive guide to herbal knowledge and wisdom for natural
                wellness and healing.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Browse Herbs
                  </a>
                </li>
                <li>
                  <a
                    href="#herb-grid"
                    className="text-green-200 hover:text-white transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab("favorites");
                      window.scrollTo({
                        top:
                          document.getElementById("herb-grid")?.offsetTop -
                            100 || 0,
                        behavior: "smooth",
                      });
                    }}
                  >
                    My Favorites
                  </a>
                </li>
                <li>
                  <a
                    href="/chatbot"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Herb Chatbot
                  </a>
                </li>
                <li>
                  <a
                    href="/affiliate"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    Shop Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-green-200 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Connect With Us</h4>
              <p className="text-green-100 mb-4">
                Sign up for our newsletter to receive the latest updates on
                herbal remedies and wellness tips.
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-r-none"
                />
                <Button className="bg-green-600 hover:bg-green-700 rounded-l-none">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
            <p>
              © {new Date().getFullYear()} Herb Wisdom Emporium. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Button */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="/chatbot"
              className="fixed bottom-6 right-6 bg-green-700 hover:bg-green-800 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 z-50 border-2 border-green-200"
              aria-label="Open herb wisdom chatbot"
            >
              <div className="relative">
                <MessageCircle className="h-6 w-6" />
                <Leaf className="h-3 w-3 absolute -top-1 -right-1 text-green-300" />
              </div>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="bg-green-800 text-white border-green-700"
          >
            <p>Ask our Herb Wisdom Chatbot</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default HomePage;
