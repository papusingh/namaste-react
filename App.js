import React from "react";
import ReactDOM from 'react-dom/client';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img
                    className="logo"
                    alt="logo"
                    src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard = (props) => {
    const {resData }= props;
    const {resName,cusine,rating,time,imgUrl} = resData?resData:"";
    return (
        <div className="res-card">
            <img  className="res-logo"
                alt="res-logo" 
                src={imgUrl}
            />
            <div className="res-info">
                <h3 className="res-name">{resName}</h3>
                <h4 className="res-cuisine">{cusine}</h4>
                <div className="res-details">
                    <span className="res-rating">{rating}</span>
                    <span className="res-time">{time} minutes</span>
                </div>
            </div>
        </div>
    );
}

const resturantList = [
    {
        id:1,
        resName:"Meghna Foods",
        cusine:"Biryani, North Indian, Asian",
        rating:"⭐ 4.4",
        time:32,
        imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/46463436B.png"
    },
    {
        id:2,
        resName:"KFC",
        cusine:"Burgers, Fast Food, Rolls & Wraps",
        rating:"⭐ 4.3",
        time:22,
        imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/9869efb0-ef0e-41eb-bffa-9d6e03eef55e_432976.JPG"
    },
    {
        id:3,
        resName:"Burger King",
        cusine:"Burger, American",
        rating:"⭐ 4.1",
        time:27,
        imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_77949.JPG"
    },
    {
        id:4,
        resName:"Leon's - Burgers & Wings (Leon Grill)",
        cusine:"American, Snacks, Turkish, ...",
        rating:"⭐ 4.5",
        time:43,
        imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_464509.jpg"
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resturantList.map(resturant => (
                        <ResturantCard key ={resturant.id} resData = {resturant} />
                    ))
                }
            </div>
        </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);