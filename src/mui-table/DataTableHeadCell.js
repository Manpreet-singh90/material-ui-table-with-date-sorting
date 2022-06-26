// prop-types is a library for typechecking of props
//import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//   components
import Box from '@mui/material/Box';


function DataTableHeadCell({ width, children, sorted, align, ...rest }) {

  return (
    <Box
      component="th"
      width={width}
      py={1.5}
      px={3}
      // sx={({ palette: { light }, borders: { borderWidth } }) => ({
      //   borderBottom: `${borderWidth[1]} solid ${light.main}`,
      // })}
    >
      {/* <Box
        {...rest}
        position="relative"
        textAlign={align}
        color="secondary"
        opacity={0.7}
        sx={{
          // fontSize: size.xxs,
          // fontWeight: fontWeightBold,
          textTransform: "uppercase",
          cursor: sorted && "pointer",
          userSelect: sorted && "none",
        }}
      > */}
        {children}
        {/* {
          <Box
            position="absolute"
            top={0}
            right={align !== "right" ? "16px" : 0}
            left={align === "right" ? "-5px" : "unset"}
            sx={{fontSize: "20px" }}
          >
            <Box
              position="absolute"
              top={-6}
              color={sorted === "asce" ? "text" : "secondary"}
              opacity={sorted === "asce" ? 1 : 0.5}
            >
              <ArrowDropUpIcon />
            </Box>
            <Box
              position="absolute"
              top={0}
              color={sorted === "desc" ? "text" : "secondary"}
              opacity={sorted === "desc" ? 1 : 0.5}
            >
              <ArrowDropDownIcon />
            </Box>
          </Box>
        }
      </Box>*/}
    </Box> 
  );
}

// Setting default values for the props of DataTableHeadCell
// DataTableHeadCell.defaultProps = {
//   width: "auto",
//   sorted: "none",
//   align: "left",
// };

// // Typechecking props for the DataTableHeadCell
// DataTableHeadCell.propTypes = {
//   width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//   children: PropTypes.node.isRequired,
//   sorted: PropTypes.oneOf([false, "none", "asce", "desc"]),
//   align: PropTypes.oneOf(["left", "right", "center"]),
// };

export default DataTableHeadCell;
