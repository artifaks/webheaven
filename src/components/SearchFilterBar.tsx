import React, { useState } from "react";
import { Search, X, Filter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface SearchFilterBarProps {
  onSearch?: (term: string) => void;
  onFilterChange?: (filters: FilterOptions) => void;
}

interface FilterOptions {
  benefit: string;
  growingCondition: string;
  difficulty: string;
}

const SearchFilterBar = ({
  onSearch = () => {},
  onFilterChange = () => {},
}: SearchFilterBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterOptions>({
    benefit: "all",
    growingCondition: "all",
    difficulty: "all",
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetValues = {
      benefit: "all",
      growingCondition: "all",
      difficulty: "all",
    };
    setFilters(resetValues);
    onFilterChange(resetValues);
  };

  return (
    <div className="w-full bg-background p-4 border-b sticky top-0 z-10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative w-full md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search herbs..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10"
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6"
                onClick={() => {
                  setSearchTerm("");
                  onSearch("");
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filter Controls - Desktop */}
          <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
            <Select
              value={filters.benefit}
              onValueChange={(value) => handleFilterChange("benefit", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Medicinal Benefit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Benefits</SelectItem>
                <SelectItem value="digestive">Digestive Health</SelectItem>
                <SelectItem value="immune">Immune Support</SelectItem>
                <SelectItem value="relaxation">Relaxation</SelectItem>
                <SelectItem value="respiratory">Respiratory Health</SelectItem>
                <SelectItem value="skin">Skin Health</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.growingCondition}
              onValueChange={(value) =>
                handleFilterChange("growingCondition", value)
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Growing Condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Conditions</SelectItem>
                <SelectItem value="sun">Full Sun</SelectItem>
                <SelectItem value="partial">Partial Shade</SelectItem>
                <SelectItem value="shade">Full Shade</SelectItem>
                <SelectItem value="indoor">Indoor</SelectItem>
                <SelectItem value="drought">Drought Tolerant</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={filters.difficulty}
              onValueChange={(value) => handleFilterChange("difficulty", value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Growing Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="moderate">Moderate</SelectItem>
                <SelectItem value="difficult">Difficult</SelectItem>
              </SelectContent>
            </Select>

            <Button
              variant="outline"
              onClick={resetFilters}
              className="ml-2"
              disabled={
                filters.benefit === "all" &&
                filters.growingCondition === "all" &&
                filters.difficulty === "all"
              }
            >
              Reset Filters
            </Button>
          </div>

          {/* Filter Controls - Mobile */}
          <div className="md:hidden w-full">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-between"
                >
                  <span>Filters</span>
                  <Filter className="h-4 w-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Medicinal Benefit</h4>
                    <Select
                      value={filters.benefit}
                      onValueChange={(value) =>
                        handleFilterChange("benefit", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select benefit" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Benefits</SelectItem>
                        <SelectItem value="digestive">
                          Digestive Health
                        </SelectItem>
                        <SelectItem value="immune">Immune Support</SelectItem>
                        <SelectItem value="relaxation">Relaxation</SelectItem>
                        <SelectItem value="respiratory">
                          Respiratory Health
                        </SelectItem>
                        <SelectItem value="skin">Skin Health</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Growing Condition</h4>
                    <Select
                      value={filters.growingCondition}
                      onValueChange={(value) =>
                        handleFilterChange("growingCondition", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Conditions</SelectItem>
                        <SelectItem value="sun">Full Sun</SelectItem>
                        <SelectItem value="partial">Partial Shade</SelectItem>
                        <SelectItem value="shade">Full Shade</SelectItem>
                        <SelectItem value="indoor">Indoor</SelectItem>
                        <SelectItem value="drought">
                          Drought Tolerant
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Growing Difficulty</h4>
                    <Select
                      value={filters.difficulty}
                      onValueChange={(value) =>
                        handleFilterChange("difficulty", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Difficulties</SelectItem>
                        <SelectItem value="easy">Easy</SelectItem>
                        <SelectItem value="moderate">Moderate</SelectItem>
                        <SelectItem value="difficult">Difficult</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    variant="outline"
                    onClick={resetFilters}
                    className="w-full"
                    disabled={
                      filters.benefit === "all" &&
                      filters.growingCondition === "all" &&
                      filters.difficulty === "all"
                    }
                  >
                    Reset Filters
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
