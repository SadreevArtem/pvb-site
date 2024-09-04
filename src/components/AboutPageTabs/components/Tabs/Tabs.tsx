import clsx from "clsx";




type Props = {
    currentTab: string;
    setTab: (tab: string) => void;
    categories: string[];
}


export const Tabs: React.FC<Props> = ({ currentTab, setTab, categories }) => {
  return (
    <>
      <div className="flex">
        <ul className="flex flex-col gap-4">
          {categories.map((item, i) => (
            <li
              className={clsx(
                {
                  "border-b-4 border-green-600":
                    currentTab === item,
                },
                "cursor-pointer"
              )}
              onClick={() => setTab(item)}
              key={item.concat(i.toString())}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};