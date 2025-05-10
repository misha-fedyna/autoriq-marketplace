"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import ProfilePhotoChanger from '../../../components/changes/PhotoChange'
import MailPassChange from '../../../components/changes/MailPassChange'
import ProtectedRoute from '@/components/ProtectedRoutes'

const tabs = [
    { id: 'photo', label: 'Користувач' },
    { id: 'security', label: 'Безпека' },
]

export default function ProfilePage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const tab = searchParams.get('tab') || 'photo'

    const handleTabChange = (id) => {
        router.push(`?tab=${id}`)
    }

    return (
        <ProtectedRoute>
        <div className="flex justify-center min-h-screen items-start bg-muted py-10 px-4">
            <div className="flex flex-col md:flex-row w-full max-w-5xl rounded-xl overflow-hidden shadow-md bg-white">
                <aside className="w-full md:w-56 bg-muted border-b md:border-b-0 md:border-r p-4 space-y-2">
                    {tabs.map(({ id, label }) => (
                        <Button
                            key={id}
                            variant="ghost"
                            className={cn(
                                'w-full justify-start text-base rounded-lg px-4 py-2 transition',
                                tab === id
                                    ? 'bg-white shadow-sm font-medium'
                                    : 'hover:bg-muted-foreground/10'
                            )}
                            onClick={() => handleTabChange(id)}
                        >
                            {label}
                        </Button>
                    ))}
                </aside>
                <main className="p-6 w-full bg-white">
                    {tab === 'photo' && <ProfilePhotoChanger />}
                    {tab === 'security' && <MailPassChange />}
                </main>
            </div>
            </div>
        </ProtectedRoute>
    )
}