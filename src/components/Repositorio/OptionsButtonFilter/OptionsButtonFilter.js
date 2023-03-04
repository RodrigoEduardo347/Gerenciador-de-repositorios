import { FilterList } from "./style"

export default function OptionsButtonFilter({ filters, filterIndex, setFilterIndex }) {

    function handleFilter(index) {
        setFilterIndex(index);
    }

    return (
        <>
            <FilterList active={filterIndex}>
                {filters.map((filter, index) => (
                    <button
                        type="button"
                        key={filter.label}
                        onClick={() => handleFilter(index)}
                    >
                        {filter.label}
                    </button>
                ))}
            </FilterList>
        </>
    )
}