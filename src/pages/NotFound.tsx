
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground p-6">
      <div className="glass-card max-w-md w-full p-8 text-center">
        <h1 className="text-6xl font-bold mb-6">404</h1>
        <h2 className="text-xl font-medium mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-5 py-2.5 bg-primary text-primary-foreground rounded-md font-medium hover:translate-y-[-2px] transition-all"
        >
          <ArrowLeft size={16} className="mr-2" />
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
