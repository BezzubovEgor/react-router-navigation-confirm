export function getSecondInPath(pathname: string) {
    if (!pathname) {
        return [];
    }

    const second = pathname.split('/')[1];
    return second ? [ `/${second}` ] : [ '/' ];
}