export default function Market({
        wood, 
        onWoodChange, 
        isQuarryBuild,
        // onQuarryBuildChange,
        stone,
        onStoneChange,
        coins, 
        onCoinsChange}: 
    {
        wood: number,
        onWoodChange: (newWoodValue: number) => void,
        isQuarryBuild: boolean,
        // onQuarryBuildChange: (newQuarryBuildValue: boolean)
        stone: number,
        onStoneChange: (newStoneValue: number) => void,
        coins: number,
        onCoinsChange: (newCoinsValue: number) => void
    }) {

    const btnHandlerSellWood = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        if (wood >= 50) {
            onWoodChange(wood - 50)
            onCoinsChange(coins + 1)
        }
    }

    const btnHandlerSellStone = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault
        if (stone >= 10) {
            onStoneChange(stone - 10)
            onCoinsChange(coins + 1)
        }
    }

    return (
        <div className="marketContainer">
            <h1>Market</h1>
            <div className="marketDescContainer">
                <h2>Sell Wood: 50🪵 for 1💰</h2>
                <button onClick={btnHandlerSellWood}>Sell</button>
            </div>
            {isQuarryBuild && <div className="marketDescContainer">
                <h2>Sell Stone: 10🪨 for 1💰</h2>
                <button onClick={btnHandlerSellStone}>Sell</button>
            </div>
            }
        </div>
    )
}