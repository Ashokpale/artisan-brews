export function formatPrice(amount: number | "MRP") {
  if (amount === "MRP") return "MRP";
  return `₹${amount}`;
}
