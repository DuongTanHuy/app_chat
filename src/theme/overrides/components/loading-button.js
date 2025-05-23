// ----------------------------------------------------------------------

export function loadingButton(theme) {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'soft' && {
            [`& .loadingIndicatorStart`]: {
              left: 10,
            },
            [`& .loadingIndicatorEnd`]: {
              right: 14,
            },
            ...(ownerState.size === 'small' && {
              [`& .loadingIndicatorStart`]: {
                left: 10,
              },
              [`& .loadingIndicatorEnd`]: {
                right: 10,
              },
            }),
          }),
        }),
      },
    },
  };
}
