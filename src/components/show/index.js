const Show = ({ when, children }) => {
    return when ? children : null;
};

export default Show;
