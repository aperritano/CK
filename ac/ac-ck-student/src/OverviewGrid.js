import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    marginTop: 10,
    display: 'flex',
    flexWrap: 'wrap',
    background: 'red',
    justifyContent: 'space-around',

  },
  gridList: {
    height: 500,
    overflowY: 'scroll',
    background: 'yellow'
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: 'red',
  },
};

const tilesData = [
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Breakfast',
    author: 'jills111',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Water plant',
    author: 'BkwrmadtyaKarki',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Water plant',
    author: 'BwwkrmadtyaKarki',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Water plant',
    author: 'rrr',
  },
  {
    img: 'https://static.pexels.com/photos/24353/pexels-photo.jpg',
    title: 'Water plant',
    author: 'ere',
  },
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Hats',
    author: 'Hanss',
  },
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Hats',
    author: 'Hanqs',
  },
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Hats',
    author: 'Hqans',
  },
  {
    img: 'http://pre13.deviantart.net/86f7/th/pre/f/2013/250/6/b/wallpaper_tiger_by_xtremsk-d6l580v.jpg',
    title: 'Hats',
    author: 'Hawewns',
  },
];


class OverviewGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div style={styles.root}>
        <GridList
          cols={4}
          cellHeight={200}
          padding={1}
          style={styles.gridList}
        >
          {tilesData.map((tile) => (
            <GridTile
              key={tile.author}
              title={tile.title}
              actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
              actionPosition="left"
              titlePosition="top"
              titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              cols={tile.featured ? 2 : 1}
              rows={tile.featured ? 2 : 1}
            >
              <img src={tile.img} alt="temp" />
            </GridTile>
          ))}
        </GridList>
      </div>
    );
  }
}


export default OverviewGrid;