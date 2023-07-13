
import ComponentContent1 from "../component/section-content/content-1"
import ComponentContent2 from "../component/section-content/content-2"
import ComponentCTA from "../component/section-cta"
import ComponentJumbotronHome from "../component/section-jumbotron"
import ComponentFooter from "../component/section-footer"
import DateComponent from "../component/section-formDate"
import NavSecondary from "../component/section-navsecondary"


const ViewHome = () => {
    return (
        <>
        <NavSecondary/>
        <ComponentJumbotronHome/>
        <ComponentContent1/>
        <ComponentContent2/>
        <DateComponent/>
        <ComponentCTA/>
        <ComponentFooter/>
        </>
    )
}

export default ViewHome