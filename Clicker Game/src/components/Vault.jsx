import PropTypes from 'prop-types';

export default function Vault({ workers, wood }) {

    return (
        <div className="vault__container">
            <h2>Vault</h2>
            <div className='vault__resourcess'>
                <p>Workers: {workers}</p>
                <p>Wood: {wood}</p>
            </div>
        </div>
    )
}

Vault.propTypes = {
    workers: PropTypes.number.isRequired,
    wood: PropTypes.number.isRequired
}