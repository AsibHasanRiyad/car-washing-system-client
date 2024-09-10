import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export type selectOption = {
  name: string;
  _id: string;
};
export function SelectItemComponent({
  items,
  setSelectedService,
}: {
  items: selectOption[];
  setSelectedService: (value: string) => void;
}) {
  const handleServiceChange = (value: string) => {
    setSelectedService(value);
  };

  return (
    <Select onValueChange={handleServiceChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select A Service" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Available Services</SelectLabel>
          {items?.map((item: selectOption) => (
            <SelectItem key={item._id} value={item?._id}>
              {item?.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
