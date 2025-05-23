import FooterLinkGroup from "./FooterLinkGroup";

const FooterDesktop = ({ links }) => (
    <div className="flex justify-around max-w-7xl mx-auto py-6">
        {links.map((group, i) => (
            <FooterLinkGroup key={i} title={group.title} links={group.items} />
        ))}
    </div>
);

export default FooterDesktop;