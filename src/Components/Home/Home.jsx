import React from 'react';
import {
  Box, Card, Grid, Typography, Link,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import news from '../../news.json';

// https://newsapi.org/v2/everything?q=Apple&from=2023-08-03&sortBy=popularity&apiKey=9769954d90bb4ce68e97f678bae32771

function Home() {
  const location = useLocation();
  let selectedNews = news.articles;
  if (location.pathname === '/international') {
    selectedNews = news.articles.filter((data) => data.type === 'international');
  }
  if (location.pathname === '/sports') {
    selectedNews = news.articles.filter((data) => data.type === 'sports');
  }
  return (
    <Box component="main" sx={{ padding: '1rem', backgroundColor: 'white' }}>
      <Grid container spacing={1}>
        {
        selectedNews.map((data, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Grid key={`${data.author}${index}`} item xs={6} md={4} lg={4} xl={4}>
            <Card sx={{ padding: '0.1rem 0.5rem', height: '240px', boxShadow: 'none' }}>
              <img style={{ objectFit: 'contain', width: '100%', height: '100%' }} src={data.urlToImage} alt="No" />
            </Card>
            <Link href={data.url} target="_blank">
              <Typography variant="subtitle2">
                {
                  data.title
                }
              </Typography>
            </Link>
          </Grid>
        ))
      }
      </Grid>
    </Box>
  );
}

export default Home;
