import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function ProgressBar({ resourceName, resourceValue, handleResourceValue, workers }) {
    const [progress, setProgress] = useState(0);
    const [assignedWorkers, setAssignedWorkers] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isRunning) {
                clearInterval(interval);
            } else if (progress < 100) {
                setProgress(progress + 1);
            } else if (progress === 100){
                handleResourceValue(resourceName.toLowerCase() ,resourceValue + 1);
                setProgress(0);
            }
        }, 100 - (assignedWorkers * 10));
        return () => clearInterval(interval);
    }, [progress, resourceValue, handleResourceValue, assignedWorkers, isRunning, resourceName]);

    const btnHandler = () => {
        handleResourceValue(resourceName.toLowerCase() ,resourceValue + 1);
    }

    const btnHandleWorkers = (newValue) => {
        if(newValue === 1 && workers > 0) {
            setAssignedWorkers(assignedWorkers + 1);
            handleResourceValue('workers', workers - 1);
            setIsRunning(true);
        } else if (newValue === -1 && assignedWorkers > 0) {
            setAssignedWorkers(assignedWorkers - 1);
            handleResourceValue('workers', workers + 1);
            if (assignedWorkers === 1) {
                setIsRunning(false);
            }
        }
    }

    return (
        <div className='progressBar'>
            <h2>{resourceName}: {resourceValue}</h2>
            <div className="progressBar__container" onClick={btnHandler}>
                <div className="progressBar__progress__fill" style={{ width: `${progress}%` }}></div>
                <p className="progressBar__value">{progress}%</p>
            </div>
            <div className='progressBar_workers'>
                <button onClick={() => btnHandleWorkers(1)}>+</button>
                <p>Assign workers: {assignedWorkers}</p>
                <button onClick={() => btnHandleWorkers(-1)}>-</button>
            </div>
        </div>
    )
}

ProgressBar.propTypes = {
    resourceName: PropTypes.string.isRequired,
    resourceValue: PropTypes.number.isRequired,
    handleResourceValue: PropTypes.func.isRequired,
    workers: PropTypes.number.isRequired,
    handleWorkersValue: PropTypes.func.isRequired
};
