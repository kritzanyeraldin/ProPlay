import { Menu } from "@mui/icons-material";
import { Box, Typography, Button, AppBar, Toolbar, IconButton, Drawer, Avatar } from "@mui/material";

import { Link, Outlet } from "react-router-dom";

const drawerWidth = 200

const routes = [
  {
    path: "/profile",
    label: "Profile",
  },
  {
    path: "/menu",
    label: "Menu",
  },
  {
    path: "/languages",
    label: "Languages",
  },
  {
    path: "/stadistic",
    label: "Stadistic",
  },
  {
    path: "/foro",
    label: "Foro",
  },
  {
    path: "/help",
    label: "Help",
  },
];

const drawer = (
  <Toolbar
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      py: 4
    }}
  >
    <Typography fontSize={30}>PROPLAY</Typography>

    <Box display="flex" flexDirection="column" width={120} gap={2}>
      {routes.map((route) => {
        return (
          <Button key={route.path} LinkComponent={Link} to={route.path} variant="contained">
            {route.label}
          </Button>
        );
      })}
    </Box>
  </Toolbar>
)

const InternalLayout = () => {
  return (
    // <Box bgcolor="peru" display="flex" height="100vh">
    //   <Box
    //     display="flex"
    //     flexDirection="column"
    //     alignItems="center"
    //     gap={9}
    //     sx={{
    //       bgcolor: "gray",
    //       px: 3,
    //       py: 4,
    //     }}
    //   >

    //     <Drawer

    //       sx={{
    //         // display: { xs: 'none', sm: 'block' },
    //         width: 270
    //       }}
    //       variant="permanent"
    //     >
    //       {drawer}
    //     </Drawer>



    //   </Box>




    //   <Box flexGrow={1}>
    //     <AppBar
    //       position="fixed"
    //       sx={{
    //         width: "calc(100% - 200px)"
    //       }}
    //       elevation={0}
    //     >
    //       <Toolbar>
    //         <IconButton
    //           color="inherit"
    //           aria-label="open drawer"
    //           edge="start"
    //           // onClick={handleDrawerToggle}
    //           sx={{ mr: 2, display: { sm: "none" } }}
    //         >
    //           <Menu />
    //         </IconButton>
    //         <Typography variant="h6" noWrap component="div">
    //           Responsive drawer
    //         </Typography>
    //       </Toolbar>
    //     </AppBar>

    //     <Outlet />
    //   </Box>
    // </Box>
    <Box sx={{ display: 'flex', height: '100%' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` }
        }}
      >
        <Toolbar sx={{
          justifyContent: { xs: "space-between", sm: "flex-end" }
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            // onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Box
            display='flex'
            gap={3}
            px={4}
            // bgcolor='red'
            alignItems='center'
          >
            <Avatar
              sx={{ bgcolor: 'red', justifySelf: 'flex-end' }}
              alt="Remy Sharp"
              src="/broken-image.jpg"
            >
              B
            </Avatar>

            <Button variant='contained' size= 'small' LinkComponent={Link} to={'/'} sx={{height:30}}>
              Cerrar Sesión
            </Button>
          </Box>


        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
        {drawer}
       </Drawer> */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }            
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default InternalLayout;
