export function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items into your list</em>
      </footer>
    );
  }

  const itemNum = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((itemPacked / itemNum) * 100);
  return (
    <footer className="stats">
      You have {itemNum} items in your list ,and you have alredy packed{" "}
      {itemPacked} ({percentage}%) items
    </footer>
  );
}
