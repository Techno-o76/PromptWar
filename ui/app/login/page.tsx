'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Mail, Lock, ArrowRight, Users, AlertTriangle, Loader2 } from 'lucide-react';

export default function SafetyGuardianLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const resp = await fetch('http://localhost:8080/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!resp.ok) {
        throw new Error('Invalid credentials or server error.');
      }
      
      const data = await resp.json();
      if (data.status === 'success') {
        router.push('/');
      } else {
        throw new Error('Authentication failed.');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f7f7f2] font-['Be_Vietnam_Pro'] text-[#2d2f2c] min-h-screen flex items-center justify-center overflow-x-hidden relative">
      
      {/* Decorative Organic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[5%] w-[60%] h-[60%] rounded-full bg-[#b9f9d6]/20 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#b4fdb4]/10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#fdd404]/10 blur-[80px]"></div>
      </div>

      {/* Login Container */}
      <main className="relative z-10 w-full max-w-[1200px] px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Branding & Support Text */}
        <div className="lg:col-span-5 space-y-8 lg:pr-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#29664c] flex items-center justify-center shadow-lg">
                <Shield className="text-[#c8ffe0] w-6 h-6" />
              </div>
              <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl tracking-tight text-[#29664c]">Safety Guardian Hub</h1>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] text-5xl font-bold tracking-tight text-[#2d2f2c] leading-[1.1]">
              Welcome Back
            </h2>
            <p className="text-[#5a5c58] text-lg leading-relaxed max-w-md">
              Access your community support tools and stay connected with the people who keep your neighborhood safe.
            </p>
          </div>
          
          {/* Illustration Area */}
          <div className="relative rounded-xl overflow-hidden aspect-video shadow-sm">
            <img 
              alt="Community interacting" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL079U_zF5NEGNgN93KKio_F3GajGBLGR5RUpNLhu1AaZeZa1Rf0QUBATcpw9LQPbW9Sy8deTwBldK7f1VfBaVXtqxgyh9UjTQNukottIFxSWAKNQUa91SzvVodwIfsohygoSqud1q0iQ76_fxD6jcMm6tKK_aEtAwVAmLC8EJvqLzu5h2dVG7Ja50lhBjvC1LpmBH3-2gcpHdlD7iSNscScvOgjoXSTwk5AF2dlB_28SDtZ4u-yFaIS7-2XReuYnbJAoNZreKmrk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#29664c]/40 to-transparent"></div>
          </div>
        </div>

        {/* Right Column: Login Card */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end">
          <div className="bg-white/70 backdrop-blur-3xl w-full max-w-[520px] p-8 md:p-12 rounded-3xl shadow-[0_20px_40px_rgba(45,47,44,0.06)] space-y-10 border border-white/40">
            
            {/* Sign In Form */}
            <form onSubmit={handleLogin} className="space-y-8">
              <div className="space-y-6">
                
                <div className="space-y-2">
                  <label className="block font-['Plus_Jakarta_Sans'] font-semibold text-sm px-1 text-[#2d2f2c]">Email address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#adada9]" />
                    <input 
                      type="email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-[#dcddd7]/30 border-none rounded-2xl focus:ring-2 focus:ring-[#29664c] focus:bg-white transition-all placeholder:text-[#adada9]" 
                      placeholder="name@example.com" 
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center px-1">
                    <label className="block font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#2d2f2c]">Password</label>
                    <a className="text-xs font-semibold text-[#29664c] hover:underline" href="#">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#adada9]" />
                    <input 
                      type="password" 
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-[#dcddd7]/30 border-none rounded-2xl focus:ring-2 focus:ring-[#29664c] focus:bg-white transition-all placeholder:text-[#adada9]" 
                      placeholder="••••••••" 
                    />
                  </div>
                </div>

              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-600 text-sm font-medium">
                  <AlertTriangle className="w-4 h-4" />
                  {error}
                </div>
              )}

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-4 px-6 bg-[#29664c] text-white rounded-full font-['Plus_Jakarta_Sans'] font-bold text-lg shadow-lg hover:shadow-[#29664c]/30 transition-all active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

            </form>

            <div className="flex flex-col items-center gap-6 pt-4">
              <div className="text-[#5a5c58] text-sm font-medium">New to the community?</div>
              
              {/* Guest Option */}
              <div className="w-full p-6 rounded-2xl bg-[#b9f9d6]/30 border-2 border-[#b9f9d6]/50 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <Users className="text-[#29664c] w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[#1f632c]">Continue as Guest</h3>
                    <p className="text-sm text-[#1f632c]/80 leading-snug">
                      Access essential safety assistance and community maps without creating an account.
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => router.push('/')}
                  className="w-full py-3 bg-white text-[#29664c] rounded-full font-['Plus_Jakarta_Sans'] font-bold text-sm shadow-sm hover:bg-gray-50 transition-all border border-[#b9f9d6]"
                >
                  Access Guest Tools
                </button>
              </div>

              <div className="flex gap-1 text-sm mt-2">
                <span className="text-[#5a5c58]">Don't have an account?</span>
                <a className="font-bold text-[#29664c] hover:underline" href="#">Create account</a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="fixed bottom-8 left-1/2 -translate-x-1/2 z-10 w-full max-w-7xl px-6 flex justify-between items-center text-xs font-medium text-[#5a5c58]/60">
        <div className="flex gap-6">
          <a className="hover:text-[#29664c] transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-[#29664c] transition-colors" href="#">Terms of Service</a>
        </div>
        <div>© 2024 Safety Guardian Hub. All rights reserved.</div>
      </footer>

    </div>
  );
}
