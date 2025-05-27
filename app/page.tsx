import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import InputOTPDemo from "@/components/Otpcode";
import PieChartplot from "@/components/PieChart";
import Table from "@/components/Table";
import TabsDemo from "@/components/Tabs";
const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <PieChartplot />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <InputOTPDemo />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <Table />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">Test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-3 ">
        <TabsDemo />
      </div>
    </div>
  );
};

export default Homepage;
