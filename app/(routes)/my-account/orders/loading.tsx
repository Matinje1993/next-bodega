import ContentLoader from 'react-content-loader'

export default function Loading() {

    return (<div className="m-0 min-w-0 pt-[65px] ml-0 flex-1 md:pt-0 md:ml-6">
        <h2 className="m-0 min-w-0 text-[#4D4D4D] text-[20px] font-medium mb-2">My Orders</h2>
        <div>
            <div className="mx-4 min-w-0 py-4 hidden xs:mx-6 sm:block">
                <ContentLoader
                    speed={2}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    viewBox="0 0 800 200"
                    aria-label="Loading interface..."
                    title="Loading interface..."
                    role="image"
                    preserveAspectRatio="none"
                >
                    <rect x="26" y="15" rx="5" ry="5" width="918" height="25"></rect>
                    <rect x="26" y="46" rx="5" ry="5" width="918" height="80"></rect>
                    <rect x="26" y="132" rx="5" ry="5" width="918" height="40"></rect>
                </ContentLoader>
            </div>
            <div className="mx-4 min-w-0 py-4 block xs:mx-6 sm:hidden">
                <ContentLoader
                    speed={2}
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    viewBox="0 0 200 340"
                    aria-label="Loading interface..."
                    title="Loading interface..."
                    role="image"
                    preserveAspectRatio="none"
                >
                    <rect x="5" y="2" rx="5" ry="5" width="317" height="25"></rect>
                    <rect x="7" y="33" rx="5" ry="5" width="317" height="120"></rect>
                    <rect x="8" y="160" rx="5" ry="5" width="317" height="80"></rect>
                </ContentLoader>
            </div>
        </div>
    </div>)
}