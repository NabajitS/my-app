import React from 'react'

function TemplatePage() {
    return (
        <div className='.template-page' style={{ display: "flex", justifyContent: "space-around" }} >
            <div className="template template-1" style={{ width: "100px", height: "100px", backgroundColor: "green", marginTop: "200px", cursor: "pointer" }} >
                <p style={{ color: "white" }} >Template 1</p>
            </div>

            <div className="template template-2" style={{ width: "100px", height: "100px", backgroundColor: "green", marginTop: "200px", cursor: "pointer" }} >
                <p style={{ color: "white" }} >Template 2</p>
            </div>
        </div>
    )
}

export default TemplatePage;