import { NavLink } from "react-router";
import { Square } from "lucide-react";
import React, { type JSX } from "react";

export default function NavButton({ href, label, icon }: {
    href: string, label: string, icon?: JSX.Element
}) {
    return (
        <NavLink
            to={href}
            className={({ isActive, isPending }) =>
                isActive
                    ? "block mb-2 text-primary bg-muted rounded-lg hover:bg-gray-100 hover:text-primary"
                    : isPending
                        ? "block mb-2 bg-secondary rounded-lg"
                        : "block mb-2 rounded-lg hover:bg-secondary"
            }
        >
            {({ isActive }) => (
                <div className="flex items-center gap-2">
                    <span className={`inline-block p-2 ${isActive ? "text-primary rounded-lg" : ""}`}>
                        {icon ? (React.cloneElement(icon, { fill: isActive ? 'none' : 'none' }))
                            : (<span>
                                <Square size={24} />
                            </span>)
                        }
                    </span>
                    <span className={`hidden md:inline-block ${isActive ? "font-bold" : "font-medium"}`}>
                        {label}
                    </span>
                </div>
            )}
        </NavLink>

    );
}
