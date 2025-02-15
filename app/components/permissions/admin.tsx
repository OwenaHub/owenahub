// import type { ComponentType } from 'react';

// interface IsAdminProps {
//     // Define any props that the HOC might need here
// }

// export function IsAdmin(Component: ComponentType<any>) {
//     return (props: IsAdminProps) => {
//         const isAdmin: boolean = true;
//         return isAdmin ? <Component {...props} /> : null;
//     }
// }

export function IsAdmin({ children, user }: { children: React.ReactElement; user: User }) {
    if (user.account_type === 'admin') {
        return children;
    }
    return null;
}