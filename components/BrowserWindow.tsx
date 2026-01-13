import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface BrowserWindowProps {
    url: string;
    imageColor?: string;
    children?: React.ReactNode;
    imageSrc?: string;
}

export default function BrowserWindow({ url, imageColor = "bg-slate-100", children, imageSrc }: BrowserWindowProps) {
    // Clean URL for display
    const displayUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

    // Use proper local image if provided, otherwise fallback (placeholder logic removed for clarity as user has images)
    const finalImageSrc = imageSrc || `https://placehold.co/800x600?text=${displayUrl}`;

    return (
        <div className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl transition-transform hover:scale-[1.01] duration-500 group">
            {/* Browser Header */}
            <div className="bg-muted px-4 py-3 border-b border-border flex items-center justify-between">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="bg-background text-xs text-muted-foreground px-3 py-1 rounded-md opacity-70 truncate max-w-[150px] md:max-w-xs text-center border border-border/50">
                    {displayUrl}
                </div>
                <div className="w-4" /> {/* Spacer for balance */}
            </div>

            {/* Browser Body */}
            <div className={`relative aspect-video w-full ${imageColor} overflow-hidden group`}>
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-secondary/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 backdrop-blur-sm">
                    <Link
                        href={`https://${displayUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        Visit Live Site <ExternalLink className="w-4 h-4" />
                    </Link>
                </div>

                {/* Screenshot Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={finalImageSrc}
                        alt={`Screenshot of ${url}`}
                        fill
                        className="object-cover object-top"
                        unoptimized={true} // Allow external images without strict configuration for this dynamic service
                    />
                </div>

                {/* Optional Overlays (Gradient, etc) */}
                {children}
            </div>
        </div>
    );
}
