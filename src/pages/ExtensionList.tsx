import {useState} from "react";
import data from "../data/data.json";
import ExtensionLoader from "../component/ExtensionLoader.tsx";
import Header from "../component/Header.tsx";
import FilterBar from "../component/FilterBar.tsx";

const ExtensionList = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [filter, setFilter] = useState('All');
    const [extensions, setExtensions] = useState(data);

    const filteredData = extensions.filter(item => {
        if (filter === 'All') return true;
        return filter === 'Active' ? item.isActive : !item.isActive;
    });

    const handleRemove = (nameToRemove: string) => {
        setExtensions(prev => prev.filter(item => item.name !== nameToRemove));
    };

    const bgClass = darkMode
        ? 'bg-neutral-200 text-neutral-900'
        : 'bg-gradient-to-b from-[#040918] to-[#091540] text-white';

    return (
        <div className={`flex flex-col items-center w-screen min-h-screen p-4 ${bgClass}`}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
            <FilterBar filter={filter} setFilter={setFilter} darkMode={darkMode}/>
            <ExtensionLoader filteredData={filteredData} handleRemove={handleRemove} darkMode={darkMode}/>
        </div>
    );
};

export default ExtensionList;