import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationCardProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationCard({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationCardProps) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <Pagination className="text-white">
      <PaginationContent>
        <PaginationItem>
          <Button
            className="flex items-center gap-1 bg-transparent "
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4 " />
            Previous
          </Button>
        </PaginationItem>
        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              href="#"
              className={
                index + 1 === currentPage ? "border-none bg-primary" : ""
              }
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Button
            className="flex items-center gap-1 bg-transparent "
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ChevronRight className="w-4 h-4 " />
          </Button>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
