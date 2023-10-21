import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { fetchCompanies } from '../redux/companies/companiesSlice';
import styles from '../styles/Companies.module.css';

function Companies() {
  const {
    companies, isLoading, error,
  } = useSelector((state) => state.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  return (
    <ul className={styles.companiesMain}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {companies.map((company) => (

        <li className={styles.Containerli} key={company.key}>
          <div className={styles.mainCompanies}>

            <NavLink
              to="/categories"
              state={{ company: company.name }}
            >
              <BsArrowRightCircle
                color="white"
                size="7vw"
              />
            </NavLink>

            <h1 className={styles.companiesTitle}>{company.name}</h1>
            <p className={styles.companiesP}>{company.exchangeShortName}</p>

          </div>
        </li>
      ))}
    </ul>
  );
}

export default Companies;
