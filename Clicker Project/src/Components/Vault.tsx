export default function Vault({coins, wood, stone, workers}: 
    {coins: number, wood: number, stone: number, workers: number}) {
    return (
        <div className="vaultContainer">
            <div className="resources">
                <p>💰: {coins}</p>
                <p>🪵: {wood}</p>
                <p>🪨: {stone}</p>
            </div>
            <div className="workers">
                <p>👨🏻‍🔧: {workers}</p>
            </div>
        </div>
    )
}