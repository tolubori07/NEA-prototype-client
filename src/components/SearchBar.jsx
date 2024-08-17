import { SearchIcon } from 'lucide-react'
import { useState,lazy} from 'react'


const Input = lazy(()=>import('./Input'))
const Button = lazy(()=>import('./Button'))

 const SearchBar =()=> {
  const [query, setQuery] = useState('')

  const signUpForNewsletter = (e) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={signUpForNewsletter}
      className=""
      role="form"
    >
      <div className='w-[90%] flex flex-row justify-center'>
      <Input
        className=" w-[70%] light:bg-white  ml-12 mr-3 p-[10px] outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 outline-none p-[10px] transition-all font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] outline-none transition-all focus:translate-x-[3px] focus:translate-y-[3px] focus:shadow-none focus:w-full w-3/5 "
        type={"search"}
        name="query"
        placeholder="Enter a town or city"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value)
        }}
      />
      <Button
        className="border-l-2 text-text border-border dark:border-darkBorder bg-main p-[10px] sm:px-5 px-3"
        type="submit"
        aria-label="Search"
      >
        <SearchIcon/>
      </Button>
      </div>
    </form>
  )
}
export default SearchBar
