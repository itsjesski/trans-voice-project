// @ts-check
 
module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    ...defaultConfig,
    transpilePackages: ['wavesurfer-react'],
  }
  return nextConfig
}