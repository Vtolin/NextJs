import React from "react"
import Link from "next/link"
export default function Footer() {
    return (
        <footer>
            <div className="bg-[#363737 text-white py-4 text-center border-t-[2px] border-t-red-600">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Arya-kyun &gt;w&lt;.
                </p>            
                <div className="flex justify-center gap-2">
                 <Link href="https://wa.me/+6281382454752">
                    <p className="text-xs mt-2 text-blue-500 hover:underline">
                        Whatsapp
                    </p>
                </Link>
                <Link href="https://www.instagram.com/lukirainilucu">
                    <p className="text-xs mt-2 text-blue-500 hover:underline">
                        Instagram
                    </p>
                </Link>
                <Link href="https://heylink.me/AryaMusang/?fbclid=PAZXh0bgNhZW0CMTEAAafpYfk2WRdGWxIlu6prraug3ojqzlmyjtUvjim2O2EbdShSzjVO3QEOlsyW0g_aem__ZS3c2QmkCff6tu7iHq11w">
                    <p className="text-xs mt-2 text-blue-500 hover:underline">
                        More Photos
                    </p>
                </Link>
            </div>
            </div>
        </footer>
    )
}