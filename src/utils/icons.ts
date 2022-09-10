export const getBeakerIconDimensions = (): number => {
  const MOBILE_ICON_DIMENSIONS = 60

  const DESKTOP_ICON_DIMENSIONS = 44

  const DESKTOP_BREAKPOINT = 768

  let beakerIconDimensions = DESKTOP_ICON_DIMENSIONS

  if (typeof window !== 'undefined') {
    const isMobile = window.innerWidth < DESKTOP_BREAKPOINT

    if (isMobile) {
      beakerIconDimensions = MOBILE_ICON_DIMENSIONS
    }
  }

  return beakerIconDimensions
}
