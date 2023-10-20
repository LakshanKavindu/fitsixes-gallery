// import React, { useState, useEffect } from 'react';
// import { getImages, searchImages } from './api';
// import './App.css';
// import angry from './angry-birds.png';
// import ImageList from './components/ImageList';
// // import EmptyList from './components/EmptyList';


// import cloudinary from 'cloudinary-core';








// const App = () => {
// 	const [nextCursor, setNextCursor] = useState(null);
// 	const [imageList, setImageList] = useState([]);

// 	// const Sliderimages = imageList.slice(0, 15);


	
	
// 	const [searchValue, setSearchValue] = useState('');
// 	// const isListEmpty = imageList.length;?	
	
// 	const BASE_URL = `https://api.cloudinary.com/v1_1/dvnlkogub`; // Replace with your cloud name

	

// 	const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'dvnlkogub' });

// 	useEffect(() => {
// 		const getImages = async () => {
// 		  try {
// 			const response = await cloudinaryCore.api.resources({
// 			  type: 'upload', // Fetch only uploaded images
// 			  max_results: 100, // Adjust as needed
// 			});
	
// 			setImageList(response.resources);
// 		  } catch (error) {
// 			console.error('Error fetching images:', error);
// 		  }
// 		};
	
// 		getImages();
// 	  }, []);

	
// 	// const handleLoadMoreButtonClick = async () => {
// 	// 	try {
// 	// 	  const API_KEY = '261686495528153'; // Replace with your Cloudinary API key
// 	// 	  const API_SECRET = 'eShUCgViHyAjtg0VCia4UHrihOE'; // Replace with your Cloudinary API secret
// 	// 	//   const BASE_URL = `https://api.cloudinary.com/v1_1/dvnlkogub`; // Replace with your cloud name
	  
// 	// 	  const response = await axios.get(`${BASE_URL}/resources/image`, {
// 	// 		auth: {
// 	// 		  username: API_KEY,
// 	// 		  password: API_SECRET,
// 	// 		},
// 	// 		params: {
// 	// 		  nextCursor,
// 	// 		},
// 	// 	  });
	  
// 	// 	  setImageList((currentImageList) => [
// 	// 		...currentImageList,
// 	// 		...response.data.resources,
// 	// 	  ]);
// 	// 	  setNextCursor(response.data.next_cursor);
// 	// 	} catch (error) {
// 	// 	  console.error('Error loading more images:', error);
// 	// 	}
// 	//   };
	  
// ;
// 	const handleFormSubmit = async (event) => {
// 		event.preventDefault();

// 		const responseJson = await searchImages(searchValue, nextCursor);
// 		setImageList(responseJson.resources);
// 		setNextCursor(responseJson.next_cursor);
// 	};

// 	const resetForm = async () => {
// 		const responseJson = await getImages();
// 		setImageList(responseJson.resources);
// 		setNextCursor(responseJson.next_cursor);

// 		setSearchValue('');
// 	};

// 	// const fetchData = async (nextCursor = null) => {
// 	// 	const API_KEY = '261686495528153'; // Replace with your Cloudinary API key
// 	// 	const API_SECRET = 'eShUCgViHyAjtg0VCia4UHrihOE'; // Replace with your Cloudinary API secret
// 	// 	// const BASE_URL = `https://api.cloudinary.com/v1_1/dvnlkogub`; // Replace with your cloud name
	  
// 	// 	try {
// 	// 	  const response = await axios.get(`${BASE_URL}/resources/image`, {
// 	// 		auth: {
// 	// 		  username: API_KEY,
// 	// 		  password: API_SECRET,
// 	// 		},
// 	// 		params: {
// 	// 		  nextCursor,
// 	// 		},
// 	// 	  });

// 	// 	  console.log(response.data);
	
// 	// 	  setImageList(response.data.resources);
// 	// 	  setNextCursor(response.data.next_cursor);
// 	// 	} catch (error) {
// 	// 	  console.error('Error fetching data:', error);
// 	// 	}
// 	//   };


	


// 	return (
// 		<>
// 			{/* <Carousel images={Sliderimages} /> */}
// 			<div className='image-grid'>
// 				{/* {isListEmpty ? (
// 					<EmptyList />
// 				) : (
// 					<ImageList imageList={imageList}/>
// 				)} */}

// 			<ImageList imageList={imageList}/>

			
				
				
// 			</div>
// 			<div className='footer'>
// 				{nextCursor && (
// 					<button >
// 						<img src={angry} alt=""/>
// 						<span class="now">Load More</span>
// 						<span class="play">Load More</span></button>
// 				)}
// 			</div>
// 		</>
// 	);
// };

// export default App;

import React, { useState, useEffect } from 'react';
import cloudinary from 'cloudinary-core';
import './App.css';
import ImageList from './components/ImageList';
import angry from './angry-birds.png';

const App = () => {
  const [nextCursor, setNextCursor] = useState(null);
  const [imageList, setImageList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const cloudinaryCore = new cloudinary.Cloudinary({ cloud_name: 'dvnlkogub' });

  useEffect(() => {
	const getImages = async () => {
	  try {
		const response = await cloudinaryCore.api.resources({
		  type: 'upload',
		  max_results: 100,
		});
  
		if (response && response.resources) {
		  setImageList(response.resources);
		} else {
		  console.error('No images found in the response:', response);
		}
	  } catch (error) {
		console.error('Error fetching images:', error);
	  }
	};
  
	getImages();
  }, []);
  

  const handleLoadMoreButtonClick = async () => {
    // Implement this function to load more images
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Implement this function to search for images
  };

  const resetForm = async () => {
    // Implement this function to reset the form and load original images
  };

  return (
    <>
      <div className='image-grid'>
        <ImageList imageList={imageList} />
      </div>
      <div className='footer'>
        {nextCursor && (
          <button onClick={handleLoadMoreButtonClick}>
            <img src={angry} alt="" />
            <span className="now">Load More</span>
            <span className="play">Load More</span>
          </button>
        )}
      </div>
    </>
  );
};

export default App;

