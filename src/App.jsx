import React, { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Content from "./Content";
import list from "./data/countriesData";
import { useSelector } from "react-redux";

const App = () => {
    const { switcher } = useSelector((state) => state.mode);
    const [dataSearch, setDataSearch] = useState(list);
    const [filter, setFilter] = useState("");

    const searchText = (event) => {
        setFilter(event.target.value);
    };

    useEffect(() => {
        setDataSearch(
            list.filter((item) => {
                return Object.keys(item).some((key) =>
                    item[key]
                        .toString()
                        .toLowerCase()
                        .includes(filter.toString().toLowerCase())
                );
            })
        );
    }, [filter]);

    const menuItems = [...new Set(list.map((val) => val.region))];

    const filterItems = (region) => {
        const newItems = list.filter((newval) => newval.region === region);
        setDataSearch(newItems);
    };

    return (
        <div
            className={`${
                switcher ? "bg-[--dark-bg]" : "bg-[--light-bg]"
            } duration-300 pb-10 `}
        >
            <Header />
            <Search
                searchText={searchText}
                setDataSearch={setDataSearch}
                menuItems={menuItems}
                filterItems={filterItems}
            />
            <Content dataSearch={dataSearch} />
        </div>
    );
};

export default App;
