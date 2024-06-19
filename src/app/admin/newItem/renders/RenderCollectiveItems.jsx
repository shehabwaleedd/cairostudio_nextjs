import React from 'react';
import Image from 'next/image';

const RenderCollectiveItems = ({ projectData, collectiveType, handleFileChange, handleItemChange, removeItem }) => {
    // Find the collective item array based on the type
    const collectiveItemData = projectData.collectiveItems.find(item => item.type === collectiveType);
    const collectiveItems = collectiveItemData ? collectiveItemData.items.filter(item => item.image && item.image !== '') : [];

    return (
        <div className="collectiveGridForm">
            <label>{collectiveType.charAt(0).toUpperCase() + collectiveType.slice(1)}:</label>
            <input
                type="file"
                onChange={(e) => handleFileChange(e, collectiveType)}
                multiple
            />
            {collectiveItems.length > 0 &&
                collectiveItems.map((item, index) => (
                    <div key={index} className={`collectiveGridItem`}>
                        {item.isImg ? <Image src={item.image} alt={`${collectiveType} item ${index}`}  width={200} height={200}/> : <video src={item.image} controls />}
                        <div className="itemControls">
                            <label>
                                Is Image?
                                <input
                                    type="checkbox"
                                    checked={item.isImg}
                                    onChange={(e) => handleItemChange(collectiveType, index, 'isImg', e.target.checked)}
                                />
                            </label>
                            <button type="button" onClick={() => removeItem(collectiveType, index)}>
                                Remove
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default RenderCollectiveItems;

