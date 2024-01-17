import React from 'react'

const RenderScopeOfWork = ({ projectData, sectionIndex, handleSectionTitleChange, addNewOption, handleOptionChange, removeOption, }) => {
    return ( 
        <section>
            {projectData.projectsDetails.scopeOfWork.map((section, sectionIndex) => (
                <div key={sectionIndex} className='add-group-section'>
                    <div className="add-group-content">
                        <label htmlFor={`sectionTitle-${sectionIndex}`}>Scope Title:</label>
                        <input
                            type="text"
                            id={`sectionTitle-${sectionIndex}`}
                            name="sectionTitle"
                            value={section.title}
                            onChange={(e) => handleSectionTitleChange(sectionIndex, e.target.value)}
                            required
                        />
                        <button type="button" onClick={() => addNewOption(sectionIndex)}>
                            +
                        </button>
                    </div>
                    <div className="option-groups">
                        {section.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="option-group">
                                <label htmlFor={`optionName-${sectionIndex}-${optionIndex}`}>Title:</label>
                                <input
                                    type="text"
                                    id={`optionName-${sectionIndex}-${optionIndex}`}
                                    value={option.name}
                                    onChange={(e) =>
                                        handleOptionChange(sectionIndex, optionIndex, 'name', e.target.value)
                                    }
                                    required
                                    placeholder="Option Name"
                                />
                                <button type="button" onClick={() => removeOption(sectionIndex, optionIndex)}>
                                    -
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default RenderScopeOfWork