import React from "react";
import { ActivityItem as Item } from "../../data/orderActivity";

type Props = {
  item: Item;
  isLast: boolean;
};

const ActivityItem: React.FC<Props> = ({ item, isLast }) => {
  return (
    <div className="flex gap-4">
      {/* Indicator */}
      <div className="flex flex-col items-center">
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold
            ${item.completed ? "bg-yellow-400" : "bg-gray-300"}`}
        >
          ✓
        </div>

        {!isLast && (
          <div
            className={`w-px flex-1 ${
              item.completed ? "bg-yellow-400" : "bg-gray-300"
            }`}
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-6">
        <p className="font-medium">{item.title}</p>

        {item.description && (
          <p className="text-sm text-gray-500 mt-1">
            {item.description}
          </p>
        )}

        {item.time && (
          <p className="text-sm text-gray-500 mt-1">
            on {item.time}
          </p>
        )}
      </div>
    </div>
  );
};

export default ActivityItem;
