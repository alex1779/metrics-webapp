import PropTypes from 'prop-types';

function Item({
  name, currency, stockExchange, exchangeShortName, symbol,
}) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{currency}</p>
      <p>{stockExchange}</p>
      <p>{exchangeShortName}</p>
      <p>{symbol}</p>
    </div>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  stockExchange: PropTypes.string.isRequired,
  exchangeShortName: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export default Item;
