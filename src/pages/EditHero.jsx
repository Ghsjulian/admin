import React, { useState } from "react";
import man from "../assets/icons/lightbulb.png";
import axios from "axios";
const EditHero = () => {
    const [formData, setFormData] = useState({
        favicon: null,
        logoimg: null,
        heroimg: null,
        title: "",
        hero_header: "",
        hero_description: "",
        meta_tag: ""
    });

    const handleInputChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.files[0]
        });
    };

    const handleSubmit = () => {
        const form_data = new FormData();
        form_data.append("type", "UPDATE_HERO_SECTION");
        for (let key in formData) {
            form_data.append(key, formData[key]);
        }
        // handle form submission here
        axios
            .post(`${process.env.API_URL}/admin/customize-site`, form_data, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error(error);
            });
    };
    /*
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="fileInput" onChange={handleFileChange} />
            <img
                src={
                    formData.fileInput
                        ? URL.createObjectURL(formData.fileInput)
                        : ""
                }
                alt="selected image"
            />
            <input
                type="text"
                name="textInput1"
                value={formData.textInput1}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="textInput2"
                value={formData.textInput2}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="textInput3"
                value={formData.textInput3}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="textInput4"
                value={formData.textInput4}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="textInput5"
                value={formData.textInput5}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="textInput6"
                value={formData.textInput6}
                onChange={handleInputChange}
            />
            <input
                type="text"
                name="textInput7"
                value={formData.textInput7}
                onChange={handleInputChange}
            />
            <textarea
                name="textInput8"
                value={formData.textInput8}
                onChange={handleInputChange}
            ></textarea>
            <button type="submit">Submit</button>
        </form>
    );
    */

    return (
        <main className="page">
            <h2>Edit Hero Section</h2>
            <div className="grid--center">
                <div className="one--box edit--box">
                    <div className="list--">
                        <li>
                            <label htmlFor="favicon">Edit Favicon</label>
                            <input
                                onChange={handleFileChange}
                                name="favicon"
                                id="favicon"
                                style={{ display: "none" }}
                                hidden="true"
                                type="file"
                                accept="image/*"
                            />
                            <img
                                src={
                                    formData.favicon
                                        ? URL.createObjectURL(formData.favicon)
                                        : man
                                }
                            />
                        </li>
                        <li>
                            <label htmlFor="logoimg">Edit Website Logo</label>
                            <input
                                onChange={handleFileChange}
                                name="logoimg"
                                id="logoimg"
                                style={{ display: "none" }}
                                hidden="true"
                                type="file"
                                accept="image/*"
                            />
                            <img
                                src={
                                    formData.logoimg
                                        ? URL.createObjectURL(formData.logoimg)
                                        : man
                                }
                            />
                        </li>
                        <li>
                            <label htmlFor="heroimg">Edit Hero Image</label>
                            <input
                                onChange={handleFileChange}
                                name="heroimg"
                                style={{ display: "none" }}
                                hidden="true"
                                type="file"
                                id="heroimg"
                                accept="image/*"
                            />
                            <img
                                src={
                                    formData.heroimg
                                        ? URL.createObjectURL(formData.heroimg)
                                        : man
                                }
                            />
                        </li>
                        <span>Edit Website Title</span>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                        <span>Edit Website Meta Tag</span>
                        <input
                            value={formData.meta_tag}
                            onChange={handleInputChange}
                            type="text"
                            name="meta_tag"
                        />
                        <span>Edit Hero Section Header</span>
                        <input
                            value={formData.hero_header}
                            onChange={handleInputChange}
                            type="text"
                            name="hero_header"
                        />
                        <span>Edit Hero Section Descriptions</span>
                        <textarea
                            value={formData.hero_description}
                            onChange={handleInputChange}
                            type="text"
                            name="hero_description"
                        ></textarea>

                        <button onClick={handleSubmit} className="submit">
                            Update Now
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditHero;
