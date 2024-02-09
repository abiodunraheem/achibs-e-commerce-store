import "./category.css";

const Category = () => {
  return (
    <div>
        <h2 className="sidebar-title">Category</h2>

        <div>
            <input value="snikers" title="Snikers" name="test" />
            <input value="flats" title="Flats" name="test" />
            <input value="sandals" title="Sandals" name="test" />
            <input value="heels" title="Heels" name="test" />
        </div>
    </div>
  )
}

export default Category
