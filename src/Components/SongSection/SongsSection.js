import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../SongSection/songsSection.module.css';
import { Box, Tab, Tabs } from '@mui/material';
import Section from '../Section/Section';

const SongsSection=()=>{
    const [songs, setSongs]=useState([]);
    const [genres,setGenres]=useState([]);
    const[activeTab, setActiveTab]=useState('all');

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    }
  


    useEffect(()=>{
        const fetchSongsANdGenres=async()=>{
            try{
                const[songsRes,genresRes]=await Promise.all([
                    axios.get("https://qtify-backend-labs.crio.do/songs"),
                    axios.get("https://qtify-backend-labs.crio.do/genres")
                ]);
                // console.log("Songs:", songsRes.data);
                console.log("Genres:", genresRes.data);
                setSongs(songsRes.data);
                setGenres(genresRes.data.data || genresRes.data); // Handle both cases
            }catch(err){
                console.error("Error fetching songs or genres:", err);
            }
        };
        fetchSongsANdGenres();
    },[]);


    const filteredSongs=activeTab === 'all' ? songs : songs.filter((song)=> song.genre?.key === activeTab.toLowerCase());
    return(
        <div className={styles.wrapper}>
            <Box className={styles.tabContainer}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    className={styles.tabs}
                    TabIndicatorProps={{ style: { backgroundColor: '#34C94B' } }}
                >
                    <Tab 
                        label="All"
                        value="all"
                        className={styles.tab}
                    />
                    {genres.map((genre)=>(
                        <Tab 
                            key={genre.key}
                            label={genre.label}
                            value={genre.label}
                            className={styles.tab}
                        />
                    ))}

                </Tabs>
            </Box>
            <Section 
                title="Songs"
                fetchUrl="https://qtify-backend-labs.crio.do/songs"
                type="song"
                showToggle={false}
                filteredData={filteredSongs}
            />
        </div>
    )
};
export default SongsSection;
