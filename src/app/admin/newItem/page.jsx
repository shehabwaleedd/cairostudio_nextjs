'use client'
import React, { useState } from 'react'
import { collection, setDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Image from 'next/image';
import { db, storage } from '../../../../firebase.config';
import RenderSectionOption from './renders/RenderSectionOptions';
import RenderScopeOfWork from './renders/RenderScopeOfWork';
import RenderCollectiveItems from './renders/RenderCollectiveItems';
import RenderCategories from './renders/RenderCategories';
import Link from 'next/link';
import "./NewItem.scss"

const NewItem = () => {
    const categories = ['Research', 'Branding', 'Creative Direction', 'UI/UX', 'Illustration', 'Animation', '3D', 'Strategy', 'Digital Design', 'Graphic Design', 'Product Design', 'Motion Design', 'Web Development'];
    const [displayed, setDisplayed] = useState(false);

    const initialState = {
        title: '',
        serviceTitle: '',
        categories: [],
        description: '',
        serviceDescription: '',
        homePage: '',
        mainVideo: '',
        poster: '',
        cover: '',
        introduction: '',
        introduction2: '',
        introduction3: '',
        date: '',
        link: '',
        challenge: '',
        solution: '',
        collectiveItems: [
            { type: 'collective1', items: [{ image: '', isImg: true }] },
            { type: 'collective2', items: [{ image: '', isImg: true }] },
            { type: 'collectiveGrid', items: [{ image: '', isImg: true }] },
            { type: 'collectiveDraggable', items: [''] },
            { type: 'designSystem', items: [{ image: '', isImg: true }] },
            { type: 'userExpImage', items: [{ image: '', isImg: true }] },
            { type: 'interactionVideo', items: [{ image: '', isImg: true }] },
            { type: 'filterImage', items: [{ image: '', isImg: true }] },
            { type: 'projectImages', items: [{ image: '', isImg: true }] },
        ],
        projectsDetails: {
            scopeOfWork: [
                { title: 'Research', options: [] },
                { title: 'Strategy', options: [] },
                { title: 'Design', options: [] },
                { title: 'Development', options: [] },
                { title: 'Content', options: [] },
            ],
            sections: [
                { name: 'section1Left', options: [{ text: '' }] },
                { name: 'section1Right', options: [{ text: '' }] },
                { name: 'filteringLeft', options: [{ text: 'Advanced Filtering' }] },
                { name: 'filteringRight', options: [{ text: '' }] },
                { name: 'interactionLeft', options: [{ text: 'Interaction System' }] },
                { name: 'interactionRight', options: [{ text: '' }] },
                { name: 'designSystemText', options: [{ text: '' }] },
                { name: 'userExpLeft', options: [{ text: '' }] },
                { name: 'userExpRight', options: [{ text: '' }] },
                { name: 'navigationLeft', options: [{ text: '' }] },
                { name: 'navigationRight', options: [{ text: '' }] },
            ],
            description: [],
        }
    };
    const [projectData, setProjectData] = useState(initialState);


    const handleItemChange = (type, index, field, value) => {
        setProjectData(prevState => {
            const updatedItems = prevState.collectiveItems.map(item => {
                if (item.type === type) {
                    let updatedItem = { ...item.items[index], [field]: value };
                    let updatedItemList = [...item.items];
                    updatedItemList[index] = updatedItem;
                    return { ...item, items: updatedItemList };
                }
                return item;
            });
            return { ...prevState, collectiveItems: updatedItems };
        });
    };

    // Generic handler to remove items like collectiveGrid, collective1, projectImages
    const removeItem = (type, index) => {
        setProjectData(prevState => {
            const updatedItems = prevState.collectiveItems.map(item => {
                if (item.type === type) {
                    let updatedItemList = item.items.filter((_, idx) => idx !== index);
                    return { ...item, items: updatedItemList };
                }
                return item;
            });
            return { ...prevState, collectiveItems: updatedItems };
        });
    };



    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setProjectData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleFileChange = async (e, fieldName) => {
        try {
            const projectTitle = projectData.title.trim().replace(/\s+/g, '_'); // Sanitize the title
            if (!projectTitle) {
                console.error("Project title is required for file upload");
                return;
            }
            if (['collectiveGrid', 'collectiveDraggable', 'collective1', 'collective2', 'projectImages', 'designSystem', 'userExpImage', 'interactionVideo', 'filterImage'].includes(fieldName)) {
                const files = e.target.files;
                const uploadPromises = Array.from(files).map(async file => {
                    const fileRef = ref(storage, `uploads/${projectTitle}/${file.name}`);
                    const uploadedFile = await uploadBytes(fileRef, file);
                    const fileUrl = await getDownloadURL(uploadedFile.ref);
                    const isImage = file.type.startsWith('image/');
                    return { image: fileUrl, isImg: isImage };
                });

                const uploadedFiles = await Promise.all(uploadPromises);

                setProjectData(prevState => {
                    const updatedCollectiveItems = prevState.collectiveItems.map(item => {
                        if (item.type === fieldName) {
                            return {
                                ...item,
                                items: item.items ? item.items.concat(uploadedFiles) : uploadedFiles
                            };
                        }
                        return item;
                    });
                    return { ...prevState, collectiveItems: updatedCollectiveItems };
                });
            } else {
                const file = e.target.files[0];
                const fileRef = ref(storage, `uploads/${projectTitle}/${file.name}`);
                const uploadedFile = await uploadBytes(fileRef, file);
                const fileUrl = await getDownloadURL(uploadedFile.ref);

                setProjectData(prevState => ({ ...prevState, [fieldName]: fileUrl }));
            }
        } catch (error) {
            console.error('Error handling file upload:', error);
        }
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const filteredCollectiveItems = projectData.collectiveItems.map(item => {
            return {
                ...item,
                items: item.items.filter(subItem => subItem.image && subItem.image !== '')
            };
        });
        // Combine project data with file uploads
        const combinedData = {
            ...projectData,
            collectiveItems: filteredCollectiveItems,
        };

        try {
            const projectRef = doc(db, 'projects', projectData.title);
            await setDoc(projectRef, combinedData);
            console.log('Project added to Firestore');

            // Reset the form
            setProjectData(initialState);
            alert('Project added successfully!');
        } catch (error) {
            console.error('Error adding project to Firestore:', error);
        }
    };

    const handleDisplayedChange = (e) => {
        const newDisplayedValue = e.target.checked;
        setDisplayed(newDisplayedValue);
        setProjectData(prevState => ({ ...prevState, displayed: newDisplayedValue }));
    };


    const handleCategoryChange = (category) => {
        const selectedCategories = projectData.categories ? [...projectData.categories] : [];

        // Toggle the category's selection
        if (selectedCategories.includes(category)) {
            selectedCategories.splice(selectedCategories.indexOf(category), 1);
        } else {
            selectedCategories.push(category);
        }

        setProjectData((prevState) => ({
            ...prevState,
            categories: selectedCategories,
        }));
        console.log('Updated projectData:', projectData);

    };




    const handleSectionTitleChange = (sectionIndex, value) => {
        const updatedScopeOfWork = [...projectData.projectsDetails.scopeOfWork];
        updatedScopeOfWork[sectionIndex].title = value;
        setProjectData({
            ...projectData,
            projectsDetails: {
                ...projectData.projectsDetails,
                scopeOfWork: updatedScopeOfWork,
            },
        });
    };

    const handleOptionChange = (sectionIndex, optionIndex, field, value) => {
        const updatedSections = [...projectData.projectsDetails.scopeOfWork];
        updatedSections[sectionIndex].options[optionIndex][field] = value;
        setProjectData({
            ...projectData,
            projectsDetails: {
                ...projectData.projectsDetails,
                scopeOfWork: updatedSections,
            },
        });
    };

    const addNewOption = (sectionIndex) => {
        const updatedSections = [...projectData.projectsDetails.scopeOfWork];
        updatedSections[sectionIndex].options.push({ name: '' });
        setProjectData({
            ...projectData,
            projectsDetails: {
                ...projectData.projectsDetails,
                scopeOfWork: updatedSections,
            },
        });
    };

    const removeOption = (sectionIndex, optionIndex) => {
        const updatedSections = [...projectData.projectsDetails.scopeOfWork];
        updatedSections[sectionIndex].options.splice(optionIndex, 1);
        setProjectData({
            ...projectData,
            projectsDetails: {
                ...projectData.projectsDetails,
                scopeOfWork: updatedSections,
            },
        });
    };

    const renderTextInput = (label, name, value) => (
        <label>
            {label}
            <input
                type="text"
                name={name}
                value={value}
                onChange={handleTextChange}
                placeholder={label}
            />
        </label>
    );



    const handleSectionChange = (sectionIndex, value) => {
        setProjectData(prevState => {
            const updatedSections = [...prevState.projectsDetails.sections];
            updatedSections[sectionIndex].name = value; // Update the name field
            return {
                ...prevState,
                projectsDetails: {
                    ...prevState.projectsDetails,
                    sections: updatedSections,
                },
            };
        });
    };



    // Function to add a new option to a section
    const addNewSectionOption = (sectionIndex) => {
        const updatedSections = [...projectData.projectsDetails.sections];
        if (!updatedSections[sectionIndex]) {
            console.error('Section does not exist at index:', sectionIndex);
            return;
        }
        updatedSections[sectionIndex].options = [
            ...updatedSections[sectionIndex].options,
            { text: '' },
        ];
        setProjectData({
            ...projectData,
            projectsDetails: {
                ...projectData.projectsDetails,
                sections: updatedSections,
            },
        });
    };


    // Function to remove an option from a section
    const removeSectionOption = (sectionIndex, optionIndex) => {
        const updatedSections = [...projectData.projectsDetails.sections];
        updatedSections[sectionIndex].options.splice(optionIndex, 1);
        setProjectData({
            ...projectData,
            projectsDetails: {
                ...projectData.projectsDetails,
                sections: updatedSections,
            },
        });
    };

    // Function to handle changes in options of a section
    const handleSectionOptionChange = (sectionIndex, optionIndex, value) => {
        setProjectData(prevState => {
            // Copy the current state
            const updatedState = { ...prevState };

            // Access the specific section
            const section = updatedState.projectsDetails.sections[sectionIndex];

            // Update the specific option's text
            section.options[optionIndex].text = value;

            return updatedState;
        });
    };




    const renderTextArea = (label, name, value) => (
        <label>
            {label}
            <textarea
                name={name}
                value={value}
                onChange={handleTextChange}
                placeholder={label}
            />
        </label>
    );

    const renderDateInput = () => (
        <label>
            Year:
            <input
                type="number"
                name="date"
                value={projectData.date}
                onChange={handleTextChange}
                min="2020"
                max="2099"
                step="1"
                placeholder="Enter year"
            />
        </label>

    );

    const renderFileInput = (label, name) => (
        <>
            <label>
                {label}
                <input type="file" onChange={(e) => handleFileChange(e, name)} />
            </label>
            <div className="filePreview">
                {projectData[name] && projectData[name] !== '' &&
                    <>
                        {name === 'homePage' || name === 'poster' || name === 'cover' ?
                            <Image src={projectData[name]} alt={name} />
                            :
                            <video src={projectData[name]} controls />
                        }
                    </>
                }
            </div>
        </>

    );

    return (
        <main className='newItem'>
            <Link href="/admin">
                back
            </Link>
            <h1>Add New Project</h1>
            <form onSubmit={handleSubmit} className="newItem__form">
                <div className="textForm">
                    {renderTextInput("Title", "title", projectData.title)}
                    {renderTextInput("Link", "link", projectData.link)}
                    {renderDateInput()}
                </div>
                <div className="textAreaForm">
                    {renderTextArea("Description", "description", projectData.description)}
                    {renderTextArea("Challenge", "challenge", projectData.challenge)}
                    {renderTextArea("Solution", "solution", projectData.solution)}
                    {renderTextArea("Introduction", "introduction", projectData.introduction)}
                    {renderTextArea("Introduction2", "introduction2", projectData.introduction2)}
                    {renderTextArea("Introduction3", "introduction3", projectData.introduction3)}
                </div>
                <RenderCategories projectData={projectData} categories={categories} handleCategoryChange={handleCategoryChange} />
                <div className="textForm">
                    {renderTextInput("Service Title", "serviceTitle", projectData.serviceTitle)}
                    {renderTextArea("Service Description", "serviceDescription", projectData.serviceDescription)}
                </div>
                <div className="arrayForm">
                    {renderFileInput("HomePage", "homePage")}
                    {renderFileInput("MainVideo", "mainVideo")}
                    {renderFileInput("Poster", "poster")}
                    {renderFileInput("Cover", "cover")}
                    {projectData.collectiveItems.map((collective, idx) => (
                        <RenderCollectiveItems key={idx} projectData={projectData} collectiveType={collective.type} handleFileChange={handleFileChange} handleItemChange={handleItemChange} removeItem={removeItem} />
                    ))}
                    <RenderSectionOption projectData={projectData} handleSectionChange={handleSectionChange} handleSectionOptionChange={handleSectionOptionChange} addNewSectionOption={addNewSectionOption} removeSectionOption={removeSectionOption} />
                    <RenderScopeOfWork projectData={projectData} handleSectionTitleChange={handleSectionTitleChange} addNewOption={addNewOption} handleOptionChange={handleOptionChange} removeOption={removeOption} />
                    <div className="textAreaForm">
                        <label htmlFor="">Displayed</label>
                        <input
                            type="checkbox"
                            name="displayed"
                            checked={displayed}
                            onChange={handleDisplayedChange} // Use the new handler
                        />
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewItem

