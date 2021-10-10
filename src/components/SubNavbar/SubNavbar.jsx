import React from 'react';

const SubNavbar = () => {
    const navbar_items_2 = [
        {
          name: "Electronics",
          image: "https://www.notebookcheck-ru.com/fileadmin/Notebooks/Microsoft/Surface_Laptop_4_13_Ryzen_5/SL4_AMD_1.jpg"
        },
        {
          name: "Fashion",
          image: "https://rendering.documents.cimpress.io/v1/vp/preview?width=690&height=690&quality=80&scene=https://scene.products.cimpress.io/v1/scenes/39fff789-7ad5-4b08-8faf-753d0c960f48"
        },
        {
          name: "Home",
          image: "https://homedepot.scene7.com/is/image/homedepotcanada/p_1001030305.jpg?wid=1000&hei=1000&op_sharpen=1"
        },
        {
          name: "Sport",
          image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7cc81ca3-f51a-4d9a-9f15-fddf73471ed9/react-sfb-carbon-low-mens-elite-outdoor-shoes-3xfJmb.png"
        },
        {
          name: "Toys",
          image: "https://cdn.s7.shopdisney.eu/is/image/DisneyStoreES/412328826871-2"
        },
        {
          name: "Beauty",
          image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1623443273-matte-eyeshadow-palette-elf-1623443255.jpg?crop=1xw:1xh;center,top&resize=480:*"
        },
        {
          name: "Games",
          image: "https://target.scene7.com/is/image/Target/Cat_Nav_VideoGames-201215-1608014929542"
        }
      ];
    
    return (
        <div className="container">
        <div className="navbar-bottom">
          {
            navbar_items_2.map((item) => (<div className="navbar-bottom__card"><div><img className="navbar-bottom__image" src={item.image}/></div><div>{item.name}</div></div>))
          }
        </div>
        </div>
    
    );
};

export default SubNavbar;