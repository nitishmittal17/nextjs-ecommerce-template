import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import DLTFooter from "@/components/NestedShadowDom/DLTFooter";
import DLTHeader from "@/components/NestedShadowDom/DLTHeader";
import NestedShadowDomWrapper from "@/components/NestedShadowDom/NestedShadowDomWrapper";

export default function NestedShadowDomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NestedShadowDomWrapper header={<DLTHeader />} footer={<DLTFooter />}>
      {children}
    </NestedShadowDomWrapper>
  );
}
