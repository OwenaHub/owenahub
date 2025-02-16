export function truncateText(text: string): string {
    if (text.length > 50) {
        return text.substring(0, 100) + "...";
    }
    return text
}