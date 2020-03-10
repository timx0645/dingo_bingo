import styled from 'styled-components'

const Scroll = ({Views}) => {
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(
      () => {
        if (resultsRef.current) {
          window.scrollTo({
            behavior: "smooth",
            top: resultsRef.current.offsetTop
          });
        }
      },
      [isLoading]
    );

    const View = styled.div``;
    
    return (
        Views.map((e,i)  => {
            <View onScroll={}>{e}</View>
        })
    )
}

export default Scroll