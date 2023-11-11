import { LOCALE } from "@config";

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export interface Props {
  datetime: string | Date;
  size?: "sm" | "lg";
  className?: string;
}

export default function PostDate({ datetime, className }: Props) {
  return (
    <div className={`flex items-center space-x-2 opacity-80 ${className}`}>
      <FormattedDatetime datetime={datetime} />
    </div>
  );
}

export const getMonthName = (date: Date) => MONTHS[new Date(date).getMonth()]

const FormattedDatetime = ({ datetime }: { datetime: string | Date }) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <>
      <div className="flex flex-col w-full text-center">
        <span className="text-6xl font-semibold text-gray-500 dark:text-gray-300" >{new Date(myDatetime).getDate()}</span>
        <span className="text-gray-400">{`${getMonthName(myDatetime)} ${new Date(myDatetime).getFullYear()}`}</span>
      </div>

    </>
  );
};
