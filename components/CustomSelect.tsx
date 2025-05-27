interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps {
  id: string;
  label: string;
  placeholder?: string;
  options: Option[];
}
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";


const CustomSelect = ({ id, label, placeholder = "Select", options }: CustomSelectProps) => {
  return (
    <div className="space-y-1 w-full">
      <Label htmlFor={id} className="mb-1">{label}</Label>
      <Select>
        <SelectTrigger id={id} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{label}</SelectLabel>
            {options.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomSelect;