import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Offline Orders",
      data: [8, 12, 6, 18, 10, 14, 11, 20, 9, 5, 10, 15],
      borderColor: "#000000",
      fill: true,
      tension: 0.45,
      pointRadius: 4,
      pointBackgroundColor: "#000",

      // ✅ SAFE GRADIENT
      backgroundColor: (ctx: ScriptableContext<"line">) => {
        const chart = ctx.chart;
        const { ctx: canvasCtx, chartArea } = chart;

        if (!chartArea) return "rgba(0,0,0,0.1)";

        const gradient = canvasCtx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        gradient.addColorStop(0, "rgba(0, 0, 0, 0.25)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0.03)");

        return gradient;
      },
    },
    {
      label: "Online Orders",
      data: [15, 18, 14, 20, 16, 19, 17, 21, 18, 16, 19, 22],
      borderColor: "#F5B301",
      fill: true,
      tension: 0.45,
      pointRadius: 4,
      pointBackgroundColor: "#F5B301",

      // ✅ SAFE GRADIENT
      backgroundColor: (ctx: ScriptableContext<"line">) => {
        const chart = ctx.chart;
        const { ctx: canvasCtx, chartArea } = chart;

        if (!chartArea) return "rgba(245,179,1,0.1)";

        const gradient = canvasCtx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        gradient.addColorStop(0, "rgba(245, 179, 1, 0.35)");
        gradient.addColorStop(1, "rgba(245, 179, 1, 0.05)");

        return gradient;
      },
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        boxWidth: 8,
      },
    },
    tooltip: {
      backgroundColor: "#ffffff",
      titleColor: "#000",
      bodyColor: "#000",
      borderColor: "#e5e7eb",
      borderWidth: 1,
      padding: 10,
      callbacks: {
        label: (ctx: any) => {
          const orders = ctx.raw;
          const revenue = orders * 675;
          return [
            `Total Orders: ${orders}`,
            `Total Revenue: ₹${revenue.toLocaleString()}`,
          ];
        },
      },
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: {
      grid: { color: "#f1f5f9" },
      ticks: { stepSize: 5 },
    },
  },
};

const LineChartPlaceholder = () => {
  return (
    <div className="h-[300px] bg-bb-bg rounded-xl p-4 shadow-bb-card">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartPlaceholder;
