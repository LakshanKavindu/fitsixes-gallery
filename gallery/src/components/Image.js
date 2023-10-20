import React from 'react'
import { useState } from 'react';
import FileSaver from 'file-saver';
import CloseIcon from '@mui/icons-material/Close';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const Image = ({url,public_id}) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handlePreviewClick = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };


   

  const handleCloseClick = () => {
    setIsPreviewOpen(false);
  };
    
    
    
    const handleButtonClick = () => {
         FileSaver.saveAs(url,`Fitsixes-${public_id}.png`);   
	  };

  return (
    <div className='image_container '>
        <img src={url} alt={public_id} ></img>
        <div className='icon_container'>
        <FileDownloadOutlinedIcon onClick={handleButtonClick} className='download_icon'></FileDownloadOutlinedIcon>
        <RemoveRedEyeIcon onClick={handlePreviewClick} className='preview'></RemoveRedEyeIcon>

        </div>
        {isPreviewOpen && (
        <div className="preview_container">
          <div className="preview_content">
            <img src={url} alt={public_id} onClick={handlePreviewClick}></img>
         
            <CloseIcon className="close_button" onClick={handleCloseClick}></CloseIcon>
          </div>
        </div>
      )}
    </div>
  )
}

export default Image