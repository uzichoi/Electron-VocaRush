import React from "react";
import { useNavigate } from "react-router-dom";

export default function ResultView() {
    const navigate = useNavigate();

    return(
        <div>
            <span className="result-view">Result View</span>
            <button onClick={() => navigate('/ranking')}>View Ranking</button>
            <button onClick={() => navigate('/start')}>Restart Game</button>
            <button onClick={() => window.close()}>→ Exit</button>
        </div>
        
    );
}
