interface Slice extends Model {
    mentor_profile_id: number;
    title: string;
    about: string;
    overview: string;
    start_date: string; // ISO date format (YYYY-MM-DD)
    duration: string; // Can be converted to number if needed
    tags: string; // Comma-separated string (can be converted to an array if needed)
    price: string; // Can be converted to number if needed
    image_path: string | null;
}
