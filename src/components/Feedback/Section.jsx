import PropTypes from 'prop-types';


export const Section = ({ title, children }) => {
    return <section className="Counter">
        <h2 className='CounterTitle'>{title}</h2>
        {children}
    </section>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
}