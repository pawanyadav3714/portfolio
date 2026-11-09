export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          &copy; {currentYear} Pawan Yadav. All rights reserved.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Designed & Built with React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
