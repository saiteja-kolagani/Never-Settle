import { Outlet } from "react-router-dom";
import LottieAnimation from "@/components/common/lottie-animation";

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden lg:flex items-center justify-center bg-[#191e1f] w-1/2 px-12">
        <div className="max-w-md space-y-6 text-center text-primary-foreground">
        <LottieAnimation />
          <h1 className="text-2xl font-extrabold tracking-tight text-[#f4f7f7]">
          Welcome to <span className="text-[#7a9596] text-3xl">Never Settle</span>, your ultimate destination for an exceptional eCommerce experience!
          </h1>
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
