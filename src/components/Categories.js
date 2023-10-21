import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchCategories } from '../redux/categories/categoriesSlice';
import styles from '../styles/Categories.module.css';
import Item from './Item';
import Navbar from './Navbar2';

function Categories() {
  const {
    category, isLoading, error,
  } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const location = useLocation();

  const url = `https://financialmodelingprep.com/api/v3/search?query=${location.state.company}&apikey=7ec5443c9e2544b7fc49d61999878c6b`;

  useEffect(() => {
    dispatch(fetchCategories(url));
  }, [dispatch]);

  return (
    <>
      <Navbar name={location.state.company} />
      <ul className={styles.rocketsMain}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {category.map((company) => (
          <li className={styles.Containerli} key={company.key}>
            <Item
              name={company.name}
              currency={company.currency}
              stockExchange={company.stockExchange}
              exchangeShortName={company.exchangeShortName}
              symbol={company.symbol}
            />
          </li>
        ))}
      </ul>
    </>

  );
}

export default Categories;
