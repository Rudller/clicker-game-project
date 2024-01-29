export default function Build(
    {
        wood, 
        onWoodChange, 
        isQuarryBuild,
        onQuarryBuildChange,
        // stone,
        // onStoneChange,
        workers, 
        onWorkersChange
    }: 
    {
        wood: number,
        onWoodChange: (newWoodValue: number) => void,
        isQuarryBuild: boolean,
        onQuarryBuildChange: (newQuarryBuildValue: boolean) => void,
        // stone: number,
        // onStoneChange: (newStoneValue: number) => void,
        workers: number, 
        onWorkersChange: (newWorkersValue: number) => void
    }) {

    const btnBuildHouseHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        if (wood >= 10) {
            onWorkersChange(workers + 1)
            onWoodChange(wood - 10)
        }
    }

    const btnBuildQuarryHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        if (wood >= 100) {
            onQuarryBuildChange(true)
            onWoodChange(wood-100)
        }
    }

    return (
        <div className="buildConteiner">
            <h1>Build</h1>
            <div className="buildHouse">
                <h2>House 🏠: 10🪵 (Add more workers)</h2>
                <button onClick={btnBuildHouseHandler}>Build House</button>
            </div>
            {!isQuarryBuild && <div className="buildQuarry">
                <h2>Quarry ⛏️: 100🪵 (Allows stone mining)</h2>
                <button onClick={btnBuildQuarryHandler}>Build Quarry</button>
            </div>}
        </div>
    )
}