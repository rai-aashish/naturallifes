import SectionCurve from "../curves/SectionCurve"

export default function PageSection({ children, title, curve, curveFill, backgroundColor }) {

    return (
        <div className={`page-section page-section--${backgroundColor ?? 'primary-background'}`}>
            {/*svg curve on top */}
            {curve && <SectionCurve curveFill={curveFill} />}
            <h1 className="page-section-title">{title}</h1>

            {children}

        </div>
    )
}
