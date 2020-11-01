import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { isEqual } from 'lodash';

import { RootState, EditAlbumFormValues } from 'types';
import TextInput from 'components/textInput/TextInput';
import TextArea from 'components/textArea/TextArea';
import Button from 'components/button/Button';
import IconCaret from 'components/icons/IconCaret';
import { saveUpdateAlbumAction, setEditAlbumAction } from '../addAlbumActions';
import styles from './EditAlbum.module.scss';

interface EditAlbumProps {
  setShowEditAlbum: React.Dispatch<React.SetStateAction<boolean>>;
}
const EditAlbum = ({ setShowEditAlbum }: EditAlbumProps) => {
  const dispatch = useDispatch();
  const { editAlbum, editAlbumId } = useSelector(
    (state: RootState) => state.addAlbum
  );

  const methods = useForm<EditAlbumFormValues>({
    defaultValues: editAlbum,
    mode: 'onChange'
  });

  // update store values on change
  const watchedValues = methods.watch();
  useEffect(() => {
    const data = methods.getValues();
    if (Object.keys(watchedValues).length > 0 && !isEqual(editAlbum, data)) {
      dispatch(
        setEditAlbumAction({
          album: data
        })
      );
    }
  }, [dispatch, methods, watchedValues, editAlbum]);

  return (
    <div className={styles.editAlbum}>
      <div className={styles.header}>
        <Button onClick={() => setShowEditAlbum(false)}>
          <IconCaret className={styles.left} />
          <span>Back</span>
        </Button>

        <span>{editAlbumId ? 'Edit Album' : 'Add New Album'}</span>

        <Button
          onClick={async () => {
            if (await methods.trigger()) {
              dispatch(
                saveUpdateAlbumAction({
                  id: editAlbumId,
                  album: methods.getValues()
                })
              );
            }
          }}
        >
          Save
          <IconCaret className={styles.right} />
        </Button>
      </div>

      <FormProvider {...methods}>
        <form>
          <div className={styles.artInfo}>
            <div className={styles.art}>
              <div className={styles.artText}>Album Art</div>
              <div className={styles.artImage} />
            </div>

            <div className={styles.info}>
              <TextInput
                name="artist"
                label="Artist"
                maxLength={50}
                required
                error={methods.errors?.artist?.message}
              />
              <TextInput
                name="album"
                label="Album"
                maxLength={50}
                required
                error={methods.errors?.album?.message}
              />
            </div>
          </div>

          <TextInput name="genre" label="Genre" maxLength={20} />

          <div className={styles.otherInfo}>
            <TextInput
              name="year"
              label="Year"
              maxLength={4}
              onChange={e => {
                methods.setValue('year', e.target.value.replace(/[^0-9]/i, ''));
              }}
            />
            <TextInput name="shelf" label="Shelf" maxLength={10} />
          </div>

          <TextArea name="comments" label="Comments" maxLength={2000} />
        </form>
      </FormProvider>
    </div>
  );
};

export default EditAlbum;
