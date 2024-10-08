import { useEffect, useState } from "react";


function useFilterJobListing( 
    jobListData, 
    filterCategories
){
    const [isLoading, setIsLoading] = useState(false);
    const [filteredJobList, setFilteredJobList] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        // guard to skip if no filter categories are present
        if( filterCategories.length <= 0 ){
            setIsLoading(false);
            return;
        }

        filterData()
        setIsLoading(false);

    }, [])

    function filterData() {
    
        setFilteredJobList(
            jobListData.filter(({role, languages, tools, level}) => {
                return filterCategories.find(category => category === role) || 
                filterCategories.find(category => category === level) || 
                tools.some(tool => filterCategories.includes(tool)) || 
                languages.some( language => filterCategories.includes(language))
            })
        )
        
    }

    return { isLoading, filteredJobList}

}

export default useFilterJobListing;