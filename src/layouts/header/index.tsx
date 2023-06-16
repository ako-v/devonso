import { Box } from "@mui/material";

export type HeaderProps = {
  className?: string; // this is just an example
};

const Header = (props: HeaderProps) => {
  return (
    <Box className="h-12 relative z-10" bgcolor="primary.main" boxShadow={"0px 2px 2px grey"}>
      Header
    </Box>
  );
};
export default Header;
