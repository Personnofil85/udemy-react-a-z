export default function ListItem({ item, deleteItem }) {
  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex">
      <span>{item.content}</span>
      <button
        onClick={() => deleteItem(item.id)}
        className="ml-auto bg-red-600 w-6 h-6 rounded"
      >
        X
      </button>
    </li>
  );
}
