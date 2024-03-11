import { useState } from 'react';

export default function ProgressBar({resource}) {
    const [progress, setProgress] = useState(0);

    return (
        <>
            <h2>{resource}</h2>
            <div className="progressBar__container">
                <div className="progressBar__progress__fill" style={{ width: `${progress}%` }}></div>
                <p className="progressBar__value">{progress}%</p>
            </div>
            <button onClick={() => setProgress(progress + 10)}>Click me</button>
        </>
    )
}