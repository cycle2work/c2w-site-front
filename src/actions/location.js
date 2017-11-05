export const NAVIGATE = "NAVIGATE";

export function navigate(location) {
    return {
        type: NAVIGATE,
        payload: location
    };
}
