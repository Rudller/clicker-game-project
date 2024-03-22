import PropTypes from 'prop-types'

export default function Build({ isBuild, handleIsBuildChange, resources, handleResourceValueChange}) {


    return (
        <div className='build'>
            <h2>Build</h2>
            <div className='build__container'>
                {/* House */}
                <div className='build__element'>
                    <h3>House</h3>
                    <p>Require 10 wood</p>
                    <button onClick={() => {
                        if(resources.wood >= 10) {
                            handleResourceValueChange('wood', resources.wood - 10);
                            handleResourceValueChange('workers', resources.workers + 1);
                        }
                    }}>Build</button>
                </div>
                {/* Quarry */}
                {!isBuild.quarry.status && 
                <div className='build__element'>
                    <h3>Quarry</h3>
                    <p>Require 50 wood</p>
                    <button onClick={() => {
                        if(resources.wood >= 50) {
                            handleResourceValueChange('wood', resources.wood - 50);
                            handleIsBuildChange('quarry', {name: 'Quarry', status: true})
                        }
                        }}>Build</button>
                </div>}
                {/* Mine */}
                {!isBuild.mine.status && 
                <div className='build__element'>
                    <h3>Mine</h3>
                    <p>Require 200 wood and 100 stone</p>
                    <button onClick={() => {
                        if(resources.wood >= 100) {
                            handleResourceValueChange('wood', resources.wood - 200);
                            handleResourceValueChange('stone', resources.stone - 100);
                            handleIsBuildChange('mine', {name: 'Mine', status: true})
                        }
                        }}>Build</button>
                </div>}
                {/* Farm */}
                
            </div>
        </div>
    )
}

Build.propTypes = {
    isBuild: PropTypes.object.isRequired,
    handleIsBuildChange: PropTypes.func.isRequired,
    resources: PropTypes.object.isRequired,
    handleResourceValueChange: PropTypes.func.isRequired,
}