import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export default function InputOTPDemo() {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* OTP Section */}
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-lg font-semibold">Enter your OTP code</h1>
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <Button type="submit">Submit</Button>
      </div>
      <Separator orientation="horizontal" className="w-full" />
      {/* Select Dropdown Section */}
      <div className="flex flex-col items-center gap-3 rounded-lg  p-4 shadow-md">
        <h1 className="text-lg font-semibold">Fruit</h1>
        <Select>
          <SelectTrigger className="w-[250px]">
            <SelectValue placeholder="Service" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Service</SelectLabel>
              <SelectItem value="holding">Holding</SelectItem>
              <SelectItem value="trade license">Trade License</SelectItem>
              <SelectItem value="rickshaw license">Rickhsaw License</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </div>
  );
}
