import { useState } from "react"

const ProfilePhoto = () => {
    const [previewUrl, setPreviewUrl] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleFileChange = (e) => {
        const file = e.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="flex-1 p-4 sm:p-6 md:p-10">
            <h1 className="text-2xl font-bold mb-2">Фото</h1>
            <p className="text-gray-600 mb-6">Додайте вашу фотографію.</p>

            <div className="mb-6">
                <div className="w-36 h-36 sm:w-48 sm:h-48 bg-gray-100 border flex items-center justify-center mb-4 overflow-hidden rounded-full">
                    {previewUrl ? (
                        <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                        <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM12 14c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z"
                            />
                        </svg>
                    )}
                </div>
                <input
                    type="file"
                    className="mb-4"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>

            <div className="space-y-4 max-w-md">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Ім’я</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Введіть ім’я"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Прізвище</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        placeholder="Введіть прізвище"
                    />
                </div>
                <button
                    type="button"
                    className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition"
                >
                    Зберегти зміни
                </button>
            </div>
        </div>
    )
}

export default ProfilePhoto
