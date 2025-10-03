import { Search } from "lucide-react"

const SearchBar =()=>{
 return (
    <div className="hidden sm:flex gap-2 items-center rounded-md ring-1  ring-gray-200 px-2 py-1 shadow-md">
     <Search className="h-4 w-4 text-gray-500"/>
     <input  id="search" placeholder="Search..." className="text-sm outline-0 " />
    </div>
 )
}
export default SearchBar