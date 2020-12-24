import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import imageCompression from 'browser-image-compression';

import Button from 'components/button/Button';
import { setEditAlbumArtAction } from 'containers/addAlbum/addAlbumActions';
import styles from './FileUpload.module.scss';

interface FileUploadProps {
  children: React.ReactNode;
}
const FileUpload = ({ children }: FileUploadProps) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={styles.fileUpload}>
      <Button styleType="basic" onClick={() => fileInputRef?.current?.click()}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={async e => {
            if (e.target.files && e.target.files.length > 0) {
              // compress image down to 300px
              const compressedImg = await imageCompression(e.target.files[0], {
                maxWidthOrHeight: 300
              });

              // convert image to base64 and update active edit album art
              const fileReader = new FileReader();
              fileReader.readAsDataURL(compressedImg);
              fileReader.onloadend = ({ target }) => {
                dispatch(
                  setEditAlbumArtAction({
                    base64: target?.result ?? null
                  })
                );
              };
            }
          }}
        />

        {children}
      </Button>
    </div>
  );
};

export default FileUpload;
