import clsx from "clsx";
import { useTranslations } from "next-intl";




type Props = {
    currentTab: string;
    setTab: (tab: string) => void;
    categories: string[];
}


export const Tabs: React.FC<Props> = ({ currentTab, setTab, categories }) => {
  const t = useTranslations("AboutPage")
  return (
    <>
      <div className="flex">
        <ul className="flex flex-col w-full">
          {categories.map((item, i) => (
            <li
              className={clsx(
                {
                  "!bg-primary text-white":
                    currentTab === item,
                },
                "cursor-pointer text-[18px] px-[15px] py-[10px] font-bold bg-tab md:min-w-[260px] md:min-h-[47px] mb-[2px] rounded-[0.25rem] w-full"
              )}
              onClick={() => setTab(item)}
              key={item.concat(i.toString())}
            >
              {t(`${item}`)}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};