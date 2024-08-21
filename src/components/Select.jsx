import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Select = ({ items, className }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isActiveSelect, setIsActiveSelect] = useState(false);

  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
    setIsActiveSelect(false);
  };

  return (
    <div
      data-state={isActiveSelect ? 'open' : 'closed'}
      className={`relative group text-text ${className}`}
      aria-expanded={isActiveSelect}
    >
      <button
        onClick={() => {
          setIsActiveSelect(!isActiveSelect);
        }}
        onBlur={() => {
          setIsActiveSelect(false);
        }}
        aria-haspopup="listbox"
        aria-labelledby="select-label"
        className="flex min-w-[160px] w-max cursor-pointer items-center rounded-base border-2 border-border dark:border-darkBorder bg-main px-10 py-3 font-base shadow-light dark:shadow-dark transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none"
      >
        <div className="mx-auto flex items-center">
          {selectedItem === null ? 'Select' : selectedItem}
          <ChevronDown
            className={
              'ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180 group-data-[state=closed]:rotate-0 ease-in-out'
            }
          />
        </div>
      </button>
      <div
        role="listbox"
        aria-labelledby="select-label"
        className="absolute left-0 min-w-[160px] w-max max-h-40 group-data-[state=open]:top-20 group-data-[state=open]:opacity-100 group-data-[state=closed]:invisible group-data-[state=closed]:top-[50px] group-data-[state=closed]:opacity-0 group-data-[state=open]:visible rounded-base border-2 border-border dark:border-darkBorder font-base shadow-light dark:shadow-dark transition-all overflow-y-auto"
      >
        {items.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                handleItemClick(item);
              }}
              className="block w-full border-b-2 border-border dark:border-darkBorder bg-main px-5 py-3 first:rounded-t-base last:rounded-b-base hover:bg-mainAccent"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
