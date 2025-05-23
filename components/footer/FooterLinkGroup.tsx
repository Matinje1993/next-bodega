import Link from "next/link";

type FooterLinkGroupProps = {
    title: string;
    links: { text: string; href: string }[];
};

const FooterLinkGroup = ({ title, links }: FooterLinkGroupProps) => (
    <div>
        <h3 className="text-white font-semibold mb-2">{title}</h3>
        <ul>
            {links.map((link, idx) => (
                <li key={idx}>
                    <Link href={link.href} className="text-white hover:underline">
                        {link.text}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterLinkGroup;