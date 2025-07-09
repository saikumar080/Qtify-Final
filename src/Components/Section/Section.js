import React,{ useEffect, useState} from "react";
import axios from "axios";
import styles from './section.module.css';
import { Typography } from "@mui/material";
import AlbumCard from "../Cards/Albums/AlbumCard";
import Carousel from "../Carsouels/Carousel";

const Section=({title, fetchUrl, type="album", showToggle=true,filteredData=null})=>{
    const [albums,setAlbums]=useState([]);
    const[showAll, setShowAll]=useState(false);
    const [loading, setLoading] = useState(true);

    // Fetch albums from the provided URL
    // This effect runs once when the component mounts
    useEffect(()=>{
        const fetchAlbums=async()=>{
            if(!filteredData){
                try{
                    const response=await axios.get(fetchUrl);
                    setAlbums(response.data)
            
                }catch(err){
                    console.error("Error fetching albums:", err)
                }finally{
                    setLoading(false);
                }
            }else{
                setLoading(false);
            }
        };
        fetchAlbums();
    }, [fetchUrl, filteredData]);

    const handleToggle=()=>setShowAll((prev)=> !prev);
    const dataToRender=filteredData || albums;
    const    breakpoints={
        320: {slidesPerView: 2, slidesPerGroup: 2},
        460:{slidesPerView: 3, slidesPerGroup:3},
        640: {slidesPerView: 4, slidesPerGroup:4},
        768: {slidesPerView: 5, slidesPerGroup:5},
        1024: {slidesPerView:6, slidesPerGroup:6},
        1280: {slidesPerView: 7, slidesPerGroup:7},
    }
    
    return(
        <div className={styles.section} data-testid="section">
            <div className={styles.header}>
                <Typography variant="h6" className={styles.title} data-testid="section-title">
                    {title}
                </Typography>
                {showToggle && (
                <Typography variant="subtitle2" onClick={handleToggle} sx={{color: "#34C94B", cursor: "pointer", fontWeight: 600, userSelect: "none"}}>
                    {showAll ? 'Collapse': 'Show All'}
                </Typography>
                )}
            </div>
                {loading ?(
                    <Typography variant="body1" className={styles.loading} data-testid="loading-message">
                        Loading albums...
                    </Typography>
                ): (
                    <>
                    {showAll && showToggle ? (
                        //Grid view
                        <div className={`${styles.grid} ${showAll ? styles.wrap : styles.scroll}`} data-testid="album-grid">
                        {dataToRender.map((album) =>(
                            <AlbumCard
                                key={album.id}
                                image={album.image}
                                name={album.title}
                                follows={type==="album" ? album.follows: undefined} // Spread the album object to pass all properties
                                likes={type=== "song" ? album.likes : undefined}
                                type={type}
                                data-testid={`album-card-${album.id}`}  
                            />
                        ))}
                    </div>
                    ):(
                        // Carousel view
                        <div className={styles.carousel} data-testid="album-carousel"> 
                            <Carousel
                                data={dataToRender.slice(0,8)}
                                renderItem={(album)=>(
                                <AlbumCard
                                    key={album.id}
                                    image={album.image}
                                    name={album.title}
                                    follows={type==="album" ? album.follows: undefined} // Spread the album object to pass all properties
                                    likes={type=== "song" ? album.likes : undefined}
                                    type={type}
                                />
                            )}
                         //Break points
                         breakpoints={breakpoints}

                     />
                    </div>
                    )}
                    </>
                )}
            </div>
       
    );
}
export default Section;