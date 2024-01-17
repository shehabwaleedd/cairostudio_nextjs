import React from 'react'

const RenderSectionOption = ({ projectData, sectionIndex, handleSectionChange, handleSectionOptionChange, addNewSectionOption, removeSectionOption, }) => {

    return (
        <section>
            {projectData.projectsDetails.sections.map((section, index) =>
                <div className="add-group-section sectionOptions" key={index}>
                    <div className="add-group-content">
                        <label htmlFor={`sectionTitle-${sectionIndex}`}>Section Title:</label>
                        <input
                            type="text"
                            value={section.name}
                            onChange={(e) => handleSectionChange(index, e.target.value)} // Update this line
                            placeholder="Section Title"
                        />
                        <button type="button" onClick={() => addNewSectionOption(index)}>
                            +
                        </button>
                    </div>
                    <div className="option-groups">
                        {section.options?.map((option, optionIndex) => (
                            <div key={optionIndex} className="option-group">
                                <input
                                    type="text"
                                    value={option.text}
                                    onChange={(e) => handleSectionOptionChange(index, optionIndex, e.target.value)}
                                    placeholder={`Option ${optionIndex + 1}`}
                                />
                                <button type="button" onClick={() => removeSectionOption(sectionIndex, optionIndex)}>
                                    -
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}

export default RenderSectionOption

