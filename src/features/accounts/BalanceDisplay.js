/**
 * Connects the BalanceDisplay component to the Redux store.
 */
import { connect } from "react-redux";

/**
 * Formats a numeric value as a USD currency string.
 * formatCurrency(1234.56) // returns "$1,234.56"
 */
function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

/**
 * Displays the account balance in a formatted currency string.
 * <BalanceDisplay balance={1234.56} /> // renders "<div class="balance">$1,234.56</div>"
 */
function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

/**
 * Maps the Redux state to props for the BalanceDisplay component.
 */
function mapStateToProps(state) {
  return { balance: state.account.balance };
}

/**
 * Exports the connected BalanceDisplay component.
 */
export default connect(mapStateToProps)(BalanceDisplay);
