import React from "react";
import Box from "@mui/material/Box";
import { Paper, Typography } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import IconButton from "@mui/material/IconButton";

const WidgetLayout = ({
  navComponent,
  children,
  title,
  notImplemented,
  ...props
}) => {
  const topNavHeight = 12;

  const styles = {
    root: { height: "100%", overflow: "hidden" },
    topNav: {
      pl: 5,
      pr: 1,
      height: (theme) => theme.spacing(topNavHeight),
      bgcolor: "secondary.main",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
  };

  return (
    <Paper elevation={3} sx={styles.root}>
      <Box sx={styles.topNav}>
        <Typography
          sx={{
            typography: { xs: "subtitle1", sm: "h6" },
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          }}
          color={"secondary.contrastText"}
        >
          {title}
        </Typography>
        {navComponent}
        <IconButton>
          <IosShareIcon
            sx={{
              fontSize: { xs: 20, sm: 22, md: 25 },
              color: "secondary.contrastText",
            }}
          />
        </IconButton>
      </Box>
      {notImplemented ? (
        <Box
          sx={{
            height: (theme) => `calc(100% - ${theme.spacing(topNavHeight)})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              typography: { xs: "body2", sm: "body1", md: "h6" },
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
              p: 5,
            }}
          >
            Not implemented
          </Typography>
        </Box>
      ) : (
        <>{children}</>
      )}
    </Paper>
  );
};

export default WidgetLayout;
