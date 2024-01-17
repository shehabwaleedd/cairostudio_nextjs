import React from 'react'

const RenderCategories = ({ projectData, categories, handleCategoryChange, }) => {
    return (
        <div className="add-group-categories">
            <label>Categories:</label>
            {categories.map((category) => (
                <label key={category}>
                    {category}
                    <input
                        type="checkbox"
                        value={category}
                        checked={projectData.categories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                    />
                </label>
            ))}
        </div>
    )
}

export default RenderCategories