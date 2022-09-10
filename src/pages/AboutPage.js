import React from "react";
import Card from "../component/shared/Card";
import { Link } from "react-router-dom";

function aboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React App to Leave feedback for a product and services.</p>
        <p>Version 1.0.0</p>
        <p>
          <strong>
            <Link to={{
              pathname:'/'
            }}>Back to Home</Link>
          </strong>
        </p>
      </div>
    </Card>
  );
}

export default aboutPage;
