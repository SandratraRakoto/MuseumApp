export const formatAddress = (address: {
  line1: string;
  line2: string;
  postal_code: string;
  city: string;
  state: string;
  country: string;
}) => {
  const line2 = address.line2 ? `${address.line2}, ` : '';

  return `${address.line1}, ${line2}${address.city}, ${address.state} ${address.postal_code}, ${address.country}`;
};
