import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomSelect from "@/components/CustomSelect";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
export default function TabsDemo() {
  return (
    <div className="w-full">
      <Tabs defaultValue="trade_license">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="trade_license">Trade License</TabsTrigger>
          <TabsTrigger value="rickshaw_license">Rickshaw License</TabsTrigger>
          <TabsTrigger value="holding">Holding Tax</TabsTrigger>
        </TabsList>
        <TabsContent value="trade_license">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Zakir" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="zakir@gmail.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-emerald-600 hover:bg-amber-600">Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="rickshaw_license">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-emerald-600 hover:bg-amber-400">Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="holding">
          <CustomizedCard></CustomizedCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export const CustomizedCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Holding Tax</CardTitle>
        <CardDescription>
          Application for holding tax registration and management.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 grid grid-cols-2 gap-2">
        <div className="space-y-1">
          <Label htmlFor="name">Name:</Label>
          <Input id="name" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="nid">Nid:</Label>
          <Input id="nid" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="address">Address:</Label>
          <Input id="address" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="father_name">Father Name:</Label>
          <Input id="father_name" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="mother_name">Mother Name:</Label>
          <Input id="mother_name" type="text" />
        </div>
        <div className="space-y-1 w-full">
          <CustomSelect
            id="division"
            label="Division"
            placeholder="Select a division"
            options={[
              { label: "Dhaka", value: "dhaka" },
              { label: "Rajshahi", value: "rajshahi" },
              { label: "Cumilla", value: "cumilla" },
              { label: "Khulna", value: "khulna" },
              { label: "Barishal", value: "barishal" },
              { label: "Sylhet", value: "sylhet" },
              { label: "Rangpur", value: "rangpur" },
              { label: "Mymensingh", value: "mymensingh" },
              { label: "Chattogram", value: "chattogram" },
              { label: "Bogra", value: "bogra" },
            ]}
          />
        </div>
        <div className="space-y-1 w-full">
          <CustomSelect
            id="district"
            label="Disctrict"
            placeholder="Select a district"
            options={[
              { label: "Manikganj", value: "manikganj" },
              { label: "Faridpur", value: "faridpur" },
              { label: "Narayanganj", value: "narayanganj" },
              { label: "Tangail", value: "tangail" },
              { label: "Barishal", value: "barishal" },
              { label: "Sylhet", value: "sylhet" },
            ]}
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="union">Union:</Label>
          <Input id="union" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="holding_number">Holding Number:</Label>
          <Input id="holding_number" type="text" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="married">Marrital Status:</Label>
    
          <RadioGroup defaultValue="married" className="flex flex-row space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="married" id="r1" />
              <Label htmlFor="r1">Married</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="unmarried" id="r2" />
              <Label htmlFor="r2">Unmarried</Label>
            </div>
            
          </RadioGroup>

        </div>
        <div className="space-y-1">
            <Label htmlFor="desciption">Remarks:</Label>
            <Textarea id='desciption' placeholder='Remarks'></Textarea>
        </div>
      </CardContent>
      <CardFooter className="cols-2 mx-auto gap-4">
        <Button className="bg-red-400 w-[140px] h-[50px] hover:bg-red-800">
          prev
        </Button>
        <Link href="/profile">
        <Button className="bg-green-400 w-[140px] h-[50px] hover:bg-emerald-800">
          Next
        </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
