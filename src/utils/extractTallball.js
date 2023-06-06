export default async function extractTarball(tarballUrl, outputPath) {
  const responseTarball = await fetch(tarballUrl);
  if (!responseTarball.ok) {
    throw new Error(`Failed to fetch tarball from URL: ${tarballUrl}`);
  }

  // Ensure output directory exists
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true });
  }

  // Extract tarball to output directory
  await new Promise((resolve, reject) => {
    const extract = tar.x({
      C: outputPath,
      strip: 1, // Strip package top-level directory
      onfinish: resolve,
      onerror: reject,
    });

    responseTarball.body.pipe(extract);
  });
}
