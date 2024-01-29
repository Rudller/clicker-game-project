import { NodeJS } from "node:types";
import { useEffect, useState } from "react";

export default function ProgressBar(
    { title, item, onItemChange, workers, onWorkersChange }: 
    {   title: string, 
        item: number, 
        onItemChange: (newItemValue: number) => void,
        workers: number,
        onWorkersChange: (newWorkersValue: number) => void
    }) {
    const [progress, setProgress] = useState(0)
    const [timerIsRunning, setTimerIsRunning] = useState(false)
    const [assignWorkers, setAssignWorkers] = useState(0)
    const [time, setTime] = useState(100)

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (assignWorkers > 0 && progress < 100) {
            interval = setInterval(() => {
                setProgress((prev) => prev += 1)
            }, time)
        } else if (timerIsRunning && progress < 100 && assignWorkers == 0) {
            interval = setInterval(() => {
                setProgress((prev) => prev += 1)
            }, time)
        } else if (progress >= 100) {
            onItemChange(item + 1)
            setProgress(0)
            setTimerIsRunning(false)
        }

        setTime(100/(0.8^assignWorkers))

        return () => {
            if (interval) {
                clearInterval(interval)
            }
        }
    }, [progress, timerIsRunning, onItemChange, item, assignWorkers, time])

    const btnHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault
        setTimerIsRunning(true)
    }

    const btnWorkerHandlerPlus = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        if (workers > 0) {
            setAssignWorkers((prev) => prev + 1)
            onWorkersChange(workers - 1)
        }
    }

    const btnWorkerHandlerMinus = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        if (assignWorkers != 0) {
            setAssignWorkers((prev) => prev - 1)
            onWorkersChange(workers + 1)
        }
    }

    return (
        <div className="progressBarContainer">
            <div className="description">
                <h3 className="title">{title}</h3>
                <div className="workersContainer">
                    <button onClick={btnWorkerHandlerPlus}>+</button>
                    <p>Assign workers: {assignWorkers}</p>
                    <button onClick={btnWorkerHandlerMinus}>-</button>
                </div>
            </div>
            <div className='myBar' onClick={btnHandler}>
                <div className='myProgress' style={{ width: `${progress}%` }}></div>
                <span className="progress">{progress}%</span>
            </div>
        </div>
        
    )
}