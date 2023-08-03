import React from "react";

const MenuCard = ({menuData}) => {
    return (
        <>
            <section className="main-card--cointainer">

                {
                    menuData.map((currEle) => {
                    const { id, name, category, image, description } = currEle;
                    
                    return (
                        <>
                            <div className="card-container" key={id}>
                                <div className="card">
                                    <div className="card-body">
                                        <span className="card-number card-circle subtle">{id}</span>
                                        <span className="card-number subtle desc">{category}</span>
                                        <h2 className="card-title subtle">{name}</h2>
                                        <span className="card-description subtlep">{description}</span>
                                        <div className="card-read">Read</div>
                                    </div>

                                    <img src={image} alt="IMG" className="card-media img-t" />
                                    <span className="card-tag subtle btn"> Order</span>
                                </div>

                            </div>
                        </>

                    );
                })}
            </section>
        </>
    );
};

export default MenuCard;

