import React from "react";

function useLocalStorage(itemName, initValue) {
  const [dataStatus, setDataStatus] = React.useState({
    error: false,
    loading: true,
  });
  const [items, setItems] = React.useState(initValue);
  const [onBoarding, setOnBoarding] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initValue));
          parsedItems = initValue;
        } else {
          parsedItems = JSON.parse(localStorageItem);
          setOnBoarding(false);
        }

        setItems(parsedItems);
        setDataStatus({ ...dataStatus, loading: false });
      } catch (error) {
        setDataStatus({ ...dataStatus, error: error, loading: false });
      }
    }, 1000);
  }, []);

  const saveItems = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItems(newItem);
      setOnBoarding(false);
    } catch (error) {
      setDataStatus({ ...dataStatus, error: error });
    }
  };

  return { items, saveItems, dataStatus, onBoarding, setOnBoarding };
}

export { useLocalStorage };
