import PropTypes from 'prop-types';
// @mui
import Box from '@mui/material/Box';

// ----------------------------------------------------------------------

export default function HeaderShadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        m: 'auto',
        height: 24,
        zIndex: -1,
        opacity: 0.48,
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        ...sx,
      }}
      {...other}
    />
  );
}

HeaderShadow.propTypes = {
  sx: PropTypes.object,
};
