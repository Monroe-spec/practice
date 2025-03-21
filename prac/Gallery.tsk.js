export default function Gallery() {
    const [index, setIndex] = useState(0);

    const handleClick = () => {
        setIndex(index + 1);
    }
}