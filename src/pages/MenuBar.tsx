import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux';


const MenuBar: React.FC = () => {
    const navigate = useNavigate();
    const { decodedToken } = useSelector((state: any) => state?.global);
    const navItems = decodedToken.roles.includes("ROLE_ADMIN") ? ['Home', 'StudentList', 'Contact'] : ['Home', 'StudentList'];
    const navigateToItem = (event: React.MouseEvent<HTMLButtonElement>) => {
        const item = event.currentTarget.textContent;
        if (item) {
            navigate(item.toLowerCase());
        }
    };
    return (
        <>
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        // The sx prop is used to apply custom styles. Here, 'mr: 2' adds a right margin of 2 spacing units,
                        // and 'display: { sm: 'none' }' hides the button on small screens and larger.
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        MUI
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff' }} onClick={navigateToItem}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            {/* Add a Box component to push the content below the MenuBar */}
            <Box sx={{ marginTop: '64px' }} />
        </>
    )
}

export default React.memo(MenuBar);
