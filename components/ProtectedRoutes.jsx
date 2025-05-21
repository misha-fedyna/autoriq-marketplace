"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoutes = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!isAuthenticated) {
        // Array of protected routes
        const protectedPaths = ['/profile', '/cars/add-car', '/cars/saved'];

        if (protectedPaths.includes(pathname)) {
            router.push('/');
        }
    }
  }, [isAuthenticated, router, pathname]);

    return <>{children}</>;
};

export default ProtectedRoutes;