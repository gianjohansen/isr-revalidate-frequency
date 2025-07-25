export const revalidate = 300;

export default function Home() {
  const buildTime = new Date().toLocaleTimeString();
  const nextBuildTime = new Date(Date.now() + revalidate * 1000).toLocaleTimeString();
  
  return (
    <div className="flex flex-col gap-1 items-center justify-center h-screen">
      <p>Static Page</p>
      <p>Last built at: <strong>{buildTime} (UTC)</strong></p>
      <p>Should regenerate at: <strong>{nextBuildTime} (UTC)</strong></p>
    </div>
  );
}
