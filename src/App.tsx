import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  Circle,
  FileText, 
  ShieldCheck, 
  Info,
  User,
  Search,
  Lock,
  ChevronRight,
  ArrowLeft,
  AlertCircle
} from "lucide-react";

type ViewState = "search" | "result";

export default function App() {
  const [view, setView] = useState<ViewState>("search");
  const [ssn, setSsn] = useState("");
  const [amount, setAmount] = useState("");
  const [year, setYear] = useState("2025");
  const [error, setError] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    // Validating against the user's specific data
    const cleanSsn = ssn.replace(/-/g, "");
    const cleanAmount = amount.replace(/[$,]/g, "");

    if (cleanSsn === "323463317" && cleanAmount === "165000" && year === "2025") {
      setError("");
      setView("result");
    } else {
      setError("Information does not match our records. Please check your SSN, Amount, and Tax Year.");
    }
  };

  const resetToHome = () => {
    setView("search");
    setError("");
  };

  // Shared Header Component
  const IRSHeader = () => (
    <header className="bg-[#112e51] text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-sm cursor-pointer" onClick={resetToHome}>
            <img 
              src="https://www.irs.gov/themes/custom/irs_theme/logo.svg" 
              alt="IRS Logo" 
              className="h-10 w-auto"
              onError={(e) => (e.currentTarget.src = "https://upload.wikimedia.org/wikipedia/commons/4/4c/Internal_Revenue_Service_logo.svg")}
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight">Internal Revenue Service</h1>
            <p className="text-[10px] uppercase tracking-widest opacity-80 font-medium">Department of the Treasury</p>
          </div>
        </div>
        <div className="flex items-center gap-4 sm:gap-8 text-sm font-medium">
          <span className="hidden md:flex items-center gap-1 opacity-90 text-[11px]">
            <Lock className="w-3 h-3" /> An official website of the U.S. government
          </span>
          {view === "result" && (
            <div className="bg-white/10 px-3 py-1.5 rounded flex items-center gap-2 border border-white/20">
              <User className="w-4 h-4" />
              <span className="text-xs">Howard Woods</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen bg-[#f3f3f3] font-sans selection:bg-blue-100">
      <IRSHeader />
      
      {/* Breadcrumbs */}
      <div className="bg-[#004b87] text-white py-2.5 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 text-[11px] font-bold uppercase tracking-wider flex gap-4 items-center">
          <span onClick={resetToHome} className="opacity-70 hover:opacity-100 cursor-pointer transition-opacity">IRS.gov Home</span>
          <ChevronRight className="w-3 h-3 opacity-40" />
          <span className="opacity-100 underline decoration-2 underline-offset-4 decoration-[#f9c642]">Where's My Refund?</span>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8 min-h-[70vh]">
        <AnimatePresence mode="wait">
          {view === "search" ? (
            <motion.div 
              key="search"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="max-w-2xl mx-auto"
            >
              <div className="bg-white rounded-lg shadow-xl border-t-[6px] border-[#112e51] overflow-hidden">
                <div className="p-8 sm:p-12">
                  <h2 className="text-3xl font-black text-[#112e51] mb-2">Get Your Refund Status</h2>
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    Enter your personal information below to track the status of your federal tax refund. All information is transmitted securely.
                  </p>

                  {error && (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="mb-8 p-4 bg-red-50 border-l-4 border-red-500 flex gap-3 text-red-800 text-sm font-medium"
                    >
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {error}
                    </motion.div>
                  )}

                  <form onSubmit={handleSearch} className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-[#112e51]">Social Security Number (SSN)</label>
                      <input 
                        type="text" 
                        placeholder="Ex: 000-00-0000"
                        className="w-full p-3 border-2 border-gray-200 rounded-md focus:border-[#004b87] focus:ring-0 transition-all font-mono text-lg"
                        value={ssn}
                        onChange={(e) => setSsn(e.target.value)}
                        required
                      />
                      <p className="text-[11px] text-gray-500 italic">Enter your 9-digit Social Security Number.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-[#112e51]">Tax Year</label>
                        <select 
                          className="w-full p-3 border-2 border-gray-200 rounded-md focus:border-[#004b87] focus:ring-0 transition-all"
                          value={year}
                          onChange={(e) => setYear(e.target.value)}
                        >
                          <option value="2025">2025 (Current Filing)</option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-bold text-[#112e51]">Refund Amount</label>
                        <div className="relative">
                          <span className="absolute left-3 top-3 text-gray-400 font-bold">$</span>
                          <input 
                            type="text" 
                            placeholder="0.00"
                            className="w-full p-3 pl-7 border-2 border-gray-200 rounded-md focus:border-[#004b87] focus:ring-0 transition-all font-bold"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                          />
                        </div>
                        <p className="text-[11px] text-gray-500 italic">Whole dollars only.</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <button 
                        type="submit"
                        className="w-full bg-[#112e51] hover:bg-[#004b87] text-white py-4 rounded-md font-black text-lg uppercase tracking-widest shadow-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                      >
                        Submit <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </form>
                </div>
                
                <div className="bg-[#f8f9fa] p-8 border-t border-gray-200 flex items-start gap-4">
                  <ShieldCheck className="w-8 h-8 text-[#006633] shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#112e51] text-sm mb-1">Secure & Private</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Your privacy is protected by federal law. We use industry-standard encryption to ensure your personal information remains confidential.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Left Column: Result Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white rounded-lg shadow-sm border-t-4 border-[#006633] overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="font-bold text-[#112e51] flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Verified Search
                    </h3>
                    <button 
                      onClick={resetToHome}
                      className="text-[10px] font-bold text-[#004b87] hover:underline uppercase flex items-center gap-1"
                    >
                      <ArrowLeft className="w-3 h-3" /> New Search
                    </button>
                  </div>
                  <div className="p-6 space-y-5">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Taxpayer Name</label>
                      <div className="text-lg font-bold text-gray-800">Howard Woods</div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">SSN (Last 4)</label>
                      <div className="text-lg font-mono font-bold text-gray-800">***-**-3317</div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Tax Year / Filling</label>
                      <div className="text-lg font-bold text-gray-800">2025 / 2026</div>
                    </div>
                    <div className="space-y-1 pt-2">
                      <label className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Confirmed Refund</label>
                      <div className="text-3xl font-black text-[#006633] tracking-tighter">$165,000.00</div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#112e51] text-white rounded-lg p-6 shadow-md relative overflow-hidden group">
                  <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-24 h-24" />
                  </div>
                  <h4 className="font-bold mb-3 flex items-center gap-2 text-[#f9c642]">
                    <Info className="w-4 h-4" />
                    Refund Tracking Tips
                  </h4>
                  <ul className="text-[11px] space-y-3 opacity-90 leading-relaxed relative z-10">
                    <li>• Refund updates occur daily, usually overnight.</li>
                    <li>• Direct deposits take 3-5 business days to clear.</li>
                    <li>• Contact your financial institution for deposit status.</li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Timeline Result */}
              <div className="lg:col-span-8 space-y-6">
                <div className="bg-white rounded-lg shadow-xl p-8 border-l-[12px] border-emerald-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                      <h2 className="text-3xl font-black text-[#112e51] mb-1 uppercase tracking-tight">Your Refund Status</h2>
                      <p className="text-sm text-gray-400 font-medium italic">Record Found for Howard Woods</p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-md font-black text-sm border-2 border-emerald-100 uppercase tracking-widest flex items-center gap-3">
                      <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                      Return Received
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-xl font-black text-[#112e51] mb-8 border-b-2 border-gray-100 pb-3 uppercase tracking-wide">
                      Refund Timeline
                    </h3>
                    
                    <div className="space-y-10 relative">
                      {/* Timeline Items */}
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-12 sm:gap-4 relative px-2">
                        {/* Step 1 */}
                        <div className="flex sm:flex-col items-center sm:text-center flex-1 gap-4 sm:gap-0 relative group">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md bg-green-600 transition-transform group-hover:scale-110">
                            <CheckCircle2 className="w-6 h-6 text-white" />
                          </div>
                          <div className="sm:mt-5">
                            <div className="font-black text-sm text-gray-900 leading-tight mb-1 uppercase tracking-tight">Tax Return Received</div>
                            <div className="text-xs font-bold text-gray-400">June 15, 2026</div>
                          </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex sm:flex-col items-center sm:text-center flex-1 gap-4 sm:gap-0 relative group opacity-60">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md bg-emerald-100 transition-transform group-hover:scale-110">
                            <Circle className="w-6 h-6 text-emerald-400 fill-current opacity-30" />
                          </div>
                          <div className="sm:mt-5">
                            <div className="font-bold text-sm text-emerald-800 leading-tight mb-1 uppercase tracking-tight italic">IRS Review</div>
                            <div className="text-xs font-bold text-emerald-300">June 18, 2026</div>
                          </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex sm:flex-col items-center sm:text-center flex-1 gap-4 sm:gap-0 relative group opacity-60">
                          <div className="w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-md bg-emerald-50 transition-transform group-hover:scale-110">
                            <Circle className="w-6 h-6 text-emerald-200 fill-current opacity-20" />
                          </div>
                          <div className="sm:mt-5">
                            <div className="font-bold text-sm text-emerald-800 leading-tight mb-1 uppercase tracking-tight italic">Refund Approval</div>
                            <div className="text-xs font-bold text-emerald-200">June 28, 2026</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Status Note Area */}
                  <div className="bg-[#fefce8] border-2 border-yellow-200 rounded-xl p-8 relative overflow-hidden shadow-inner">
                    <div className="absolute -top-12 -right-12 p-2 opacity-[0.03]">
                      <FileText className="w-64 h-64 rotate-12" />
                    </div>
                    <div className="flex gap-6 relative z-10">
                      <div className="bg-yellow-100 p-3 rounded-full h-fit shadow-sm">
                        <Info className="w-6 h-6 text-yellow-700" />
                      </div>
                      <div className="space-y-4">
                        <p className="text-yellow-800 font-black text-xs uppercase tracking-widest border-b border-yellow-200 pb-2 flex items-center gap-2">
                          Official Processing Update:
                        </p>
                        <p className="text-yellow-900 text-xl font-medium leading-relaxed italic tracking-tight">
                          "the refund had been received by the irs and its presently undergoing proper review and once the refund is approved then it will be updated on here."
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button 
                      onClick={resetToHome}
                      className="text-sm font-bold text-[#004b87] hover:bg-[#004b87]/5 px-4 py-2 rounded transition-all flex items-center gap-2"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back to Search
                    </button>
                    <div className="flex items-center gap-3 opacity-40 grayscale">
                      <img src="https://www.irs.gov/themes/custom/irs_theme/logo.svg" className="h-6" alt="IRS" />
                      <span className="text-[10px] font-black uppercase">Verified Secure</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-4 rounded-xl">
                      <FileText className="w-8 h-8 text-[#112e51]" />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 tracking-tight">Tax Return Document</h4>
                      <p className="text-xs text-gray-500 font-medium">Howard Woods - Form 1040 (2025)</p>
                    </div>
                  </div>
                  <button className="w-full sm:w-auto bg-[#112e51] hover:bg-[#004b87] text-white px-8 py-3 rounded font-black text-sm uppercase tracking-widest shadow-md transition-all active:scale-[0.98]">
                    View Document
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="max-w-6xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase text-gray-400 tracking-[0.2em]">
          <span className="hover:text-[#112e51] cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-[#112e51] cursor-pointer transition-colors">Accessibility</span>
          <span className="hover:text-[#112e51] cursor-pointer transition-colors">Security Controls</span>
          <span className="hover:text-[#112e51] cursor-pointer transition-colors">Treasury.gov</span>
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
            This is an official information tracking system of the Internal Revenue Service. Unauthorized access to federal tax records is subject to criminal prosecution. 
            Data for <span className="font-bold text-gray-500 italic">Howard Woods</span> is handled under strict compliance with IRS Publication 1075.
          </p>
        </div>
        <div className="pt-4 opacity-20">
          <img src="https://www.irs.gov/themes/custom/irs_theme/logo.svg" alt="IRS" className="h-8 mx-auto grayscale" />
        </div>
      </footer>
    </div>
  );
}
