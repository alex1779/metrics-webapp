import { BsSearch } from 'react-icons/bs';

function Searchbar() {
  return (

    <div>

      <input placeholder="search" required="" />
      <button type="button">
        <BsSearch
          color="white"
          size="5vw"
        />
      </button>
    </div>

  );
}

export default Searchbar;
