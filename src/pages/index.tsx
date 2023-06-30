import TextInput from "@/components/TextInput";
import Chart from "react-apexcharts";

export default function Home() {
  return (
    <div className="flex mt-20 justify-between">
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
                    width: 200,
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
        width="500"
      /> */}
      <div className="flex flex-col">
        <div className="flex items-center gap-x-2">
          <TextInput/>
        </div>
        </div>
    </div>
  );
}
