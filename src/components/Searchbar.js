/* This contains spoonacular searchbar code */
/* Still working on it */
/* Not included in Medieinstitutet assignment 2 */
import React from "react"
import PropTypes from "prop-types"
import Autocomplete from "../components/Autocomplete"
const Searchbar = (props) => {
    return <div>
    <input name={props.name} type="text" placeholder={props.placeholder} value={props.value} onChange={props.handleChange} />
    {/* <button type="submit" onClick={props.handleSearch}>Search</button> */}
    <Autocomplete suggestions={props.suggesions} />
</div>
}

Searchbar.propTypes = {
name: PropTypes.string,
placeholder: PropTypes.string,
value: PropTypes.string,
handleChange: PropTypes.func,
handleSearch: PropTypes.func,
suggesions: PropTypes.array,
loading: PropTypes.bool
}
export default Searchbar;