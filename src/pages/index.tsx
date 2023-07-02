import Card from "@/components/Card";
import Tabs from "@/components/Tabs";
import TextInput from "@/components/TextInput";
import Chart from "react-apexcharts";

export default function Home() {
  return (
    <div className="flex flex-col mt-10 justify-between gap-5">
      <Card className=" w-full xl:w-1/4 lg:w-1/2">
        <span className="text-sm font-normal">Available Balance</span>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-xl font-semibold">$ 1,000.00</h1>
        </div>
      </Card>
      <div className="flex  lg:flex-row flex-col-reverse justify-between gap-4">
      <Tabs/>
      {/* <Chart
        options={
          {
            chart: {
              id: "donut",
            },
            labels: ["Expense A", "Expense B", "Expense C", "Expense D", "Expense E"],
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 100,
                  },
                  legend: {
                    position: "bottom",
                  },
                },
              },
            ],
          } as any
        }
        series={[44, 55, 13, 43, 22]}
        type="donut"
        width="350"
      /> */}
      </div>
      
    </div>
  );
}
