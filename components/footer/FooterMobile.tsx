import FooterLinkGroup from "./FooterLinkGroup";

const FooterMobile = ({ links }) => (
    <div className="p-4">
        {links.map((group, i) => (
            <FooterLinkGroup key={i} title={group.title} links={group.items} />
        ))}
    </div>
);

export default FooterMobile;