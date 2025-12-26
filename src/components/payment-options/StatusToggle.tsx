type Props = {
  enabled: boolean;
};

const StatusToggle: React.FC<Props> = ({ enabled }) => {
  return (
    <div
      className={`w-10 h-5 rounded-full relative transition
        ${enabled ? "bg-green-500" : "bg-gray-300"}`}
    >
      <span
        className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition
          ${enabled ? "right-0.5" : "left-0.5"}`}
      />
    </div>
  );
};

export default StatusToggle;
