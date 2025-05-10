'use client';
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProtectedRoute({ children }) { 
    const router = useRouter();
    const  isAuthenticated  = false
    
    useEffect(() => {
        if (!isAuthenticated) {
            router.replace("/");
        }
    }, [isAuthenticated, router]);

    return isAuthenticated ? children : null;
}