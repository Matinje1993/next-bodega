export const updateFilterParam = (newFilterString: string) => {
    if (typeof window === "undefined") return;

    try {
        const url = new URL(window.location.href);

        // Make sure to set only the filter value (no extra ?filter= prefix)
        url.searchParams.set("filter", newFilterString);

        // url.search includes the leading '?', so no need to add '?'
        window.history.replaceState({}, "", url.pathname + url.search);
    } catch (error) {
        console.error("updateFilterParam error:", error);
    }
};