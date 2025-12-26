import React from "react";
import ActivityItem from "./ActivityItem";
import { activityLog } from "../../data/orderActivity";

const ActivityTimeline: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">
        Order Activity Log
      </h2>

      <p className="text-sm text-gray-500 mb-6">
        Detail information about Order Number{" "}
        <span className="font-medium text-black">#ORD-2556</span>
      </p>

      <div className="space-y-1">
        {activityLog.map((item, index) => (
          <ActivityItem
            key={item.id}
            item={item}
            isLast={index === activityLog.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityTimeline;
