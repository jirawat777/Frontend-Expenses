import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './index.scss'
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? '#131b28'
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: '#fff',
        cursor: 'pointer',
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.1),
            color: '#fff'
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.5),
            color: '#fff'
        },
    };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function Breadcrumb(props) {
    const { current } = props
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb" >
                <StyledBreadcrumb
                    component="a"
                    href="#"
                    label="หน้าแรก"
                    icon={<HomeIcon fontSize="small" style={{ color: '#fff' }} />}
                    className='bread-custom'
                />
                <StyledBreadcrumb
                    label={current}
                    className='bread-custom'
                />
            </Breadcrumbs>
        </div>
    );
}
export default Breadcrumb