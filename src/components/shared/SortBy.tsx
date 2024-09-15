import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface selectSortProps {
  handleSelectSort: (data: string) => void;
}
export function SortBy({ handleSelectSort }: selectSortProps) {
  return (
    <Select onValueChange={(value) => handleSelectSort(value)}>
      <SelectTrigger className=" w-full sm:w-[300px] ">
        <SelectValue placeholder="Best Match" />
      </SelectTrigger>
      <SelectContent className="pr-5 font-medium text-black">
        <SelectGroup>
          <SelectItem value="price">Price Low to High</SelectItem>
          <SelectItem value="-price">Price High to Low</SelectItem>
          <SelectItem value="duration">Duration Low to High</SelectItem>
          <SelectItem value="-duration">Duration High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
