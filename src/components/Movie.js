const Movie = ({name, children}) => {
       
    return (
    <li>
        <a href={children}>{name}</a>
    </li>
    );
};

export default Movie;