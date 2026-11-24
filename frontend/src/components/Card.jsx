export function Card({ title, children, className = "" }) {
    return (
	<article className={`custom-card ${className}`}>

	    {title && <h2 className="card-title">{title}</h2>}
	     <div className="card-content">
		 {children}
	    </div>

	</article>
    )
}
