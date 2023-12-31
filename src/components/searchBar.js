import { useNavigate } from "react-router"


const SearchBar = () => {

    const navigat = useNavigate()

    const handleNavigate = (url) =>{
      navigat(url)
    }


    const makeSearch = () => {
        const inputVal = document.getElementById('inpSearch')
        const movie = inputVal.value
        handleNavigate(`/search/${movie}`)


    }

    return (
        <div class="input-group w-100 row pb-4">
            <div id="search-autocomplete" class="form-outline col-10">
                <input type="search" id="inpSearch" class="form-control" placeholder="Search" />
            </div>
            <button type="button" class="btn btn-warning col-2 rounded-2" onClick={makeSearch}>Search</button>
        </div>
    )
}

export default SearchBar