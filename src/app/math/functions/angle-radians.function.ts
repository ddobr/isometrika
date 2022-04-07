export function toRadians(degrees: number): number {
    return (degrees * Math.PI) / 180; 
}

export function toDegrees(radians: number): number {
    return (180 * radians) / Math.PI; 
}