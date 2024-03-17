import PropTypes from 'prop-types'

export default function Build({ isBuild, handleIsBuildChange }) {


    return (
        <div className='build'>
            <h2>Build</h2>
            <div className='build__container'>
                {!isBuild.quarry.status && 
                <div className='build__element'>
                    <h3>Quarry</h3>
                    <button onClick={() => handleIsBuildChange('quarry', {name: 'Quarry', status: true})}>Build</button>
                </div>}
            </div>
        </div>
    )
}

Build.propTypes = {
    isBuild: PropTypes.object.isRequired,
    handleIsBuildChange: PropTypes.func.isRequired,
}