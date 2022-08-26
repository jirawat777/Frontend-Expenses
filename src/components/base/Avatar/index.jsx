import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function ImageAvatars(props) {
    const { image, size } = props
    if (!image) {
        return
    }
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt="Remy Sharp" src={image} />
        </Stack>
    );
}
export default ImageAvatars
