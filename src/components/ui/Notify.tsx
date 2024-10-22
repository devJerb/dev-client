import { AlertCircle, CheckCircle2 } from "lucide-react";

export const Notify = ({
  message,
  type,
}: {
  message: string;
  type: "success" | "error";
}) => {
  const bgColor = type === "success" ? "bg-green-100" : "bg-red-100";
  const textColor = type === "success" ? "text-green-800" : "text-red-800";
  const Icon = type === "success" ? CheckCircle2 : AlertCircle;

  return (
    <div
      className={`${bgColor} ${textColor} px-4 py-3 rounded relative mb-4`}
      role="alert"
    >
      <div className="flex items-center">
        <Icon className="h-5 w-5 mr-2" />
        <span>{message}</span>
      </div>
    </div>
  );
};
