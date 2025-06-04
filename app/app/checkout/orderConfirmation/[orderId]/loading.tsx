"use client";
import React from 'react'
import ContentLoader from 'react-content-loader'

export default function Loading() {

    return (
        <div className="m-0 min-w-0 relative flex flex-col justify-center pb-4 pt-2 xs:pb-6 xs:flex-col sm:flex-col md:flex-row md:static">
            <div className="m-0 min-w-0 relative block w-full max-w-[837px] md:w-[80%]">
                <ContentLoader
                    speed={2}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    viewBox="0 0 800 210"
                    aria-label="Loading interface..."
                    title="Loading interface..."
                    role="image"
                    preserveAspectRatio="none"
                >
                    <rect x="26" y="16" rx="5" ry="5" width="918" height="80"></rect>
                    <rect x="26" y="106" rx="5" ry="5" width="918" height="40"></rect>
                    <rect x="26" y="160" rx="5" ry="5" width="418" height="30"></rect>
                </ContentLoader>
                <div className="m-0 ml-[4px] sm:ml-[24px] min-w-0 block bg-white">
                    <ContentLoader
                        speed={2}
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                        viewBox="0 0 800 210"
                        aria-label="Loading interface..."
                        title="Loading interface..."
                        role="image"
                        preserveAspectRatio="none"
                    >
                        <rect x="16" y="16" rx="5" ry="5" width="148" height="30"></rect>
                        <rect x="670" y="106" rx="5" ry="5" width="120" height="30"></rect>
                        <rect x="16" y="56" rx="5" ry="5" width="772" height="40"></rect>
                        <rect x="450" y="106" rx="5" ry="5" width="338" height="30"></rect>
                        <rect x="16" y="146" rx="5" ry="5" width="50" height="50"></rect>
                        <rect x="76" y="146" rx="5" ry="5" width="50" height="50"></rect>
                        <rect x="136" y="146" rx="5" ry="5" width="50" height="50"></rect>
                    </ContentLoader>
                </div>
                <ContentLoader
                    speed={2}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    viewBox="0 0 800 210"
                    aria-label="Loading interface..."
                    title="Loading interface..."
                    role="image"
                    preserveAspectRatio="none"
                >
                    <rect x="26" y="16" rx="5" ry="5" width="200" height="20"></rect>
                    <rect x="646" y="16" rx="5" ry="5" width="200" height="20"></rect>
                    <rect x="26" y="46" rx="5" ry="5" width="918" height="80"></rect>
                </ContentLoader>
            </div>
            <div className="m-0 min-w-0 pt-0 self-center xs:ml-0 xs:pt-0 sm:ml-0 sm:pt-0 md:ml-[24px] md:pt-[16px] md:self-auto">
                <div></div>
            </div>
        </div>
    )
}