import PropTypes from 'prop-types';

export default function Vault({ resources }) {

    return (
        <div className="vault__container">
            <h2>Vault</h2>
            <div className='vault__resourcess'>
                <p>Workers: {resources.workers}</p>
                <p>Wood: {resources.wood}</p>
            </div>
        </div>
    )
}

Vault.propTypes = {
   resources: PropTypes.object.isRequired,
}