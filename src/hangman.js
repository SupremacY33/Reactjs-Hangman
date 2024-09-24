import React from 'react';

const HEAD = (
  <div style={{
    width: '50px',
    height: '50px',
    borderRadius: '100%',
    border: '7px solid black',
    position: 'absolute',
    top: '50px',
    right: '-30px'
  }} />
);

const BODY = (
  <div style={{
    width: '10px',
    height: '130px',
    background: 'black',
    position: 'absolute',
    top: '110px',
    right: '0'
  }} />
);

const RIGHT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-90px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
      borderRadius: '12px'
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      width: "90px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom",
      borderRadius: '12px'
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "230px",
      right: "-90px",
      rotate: "30deg",
      transformOrigin: "left top",
      borderRadius: '12px'
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "230px",
      right: "0",
      rotate: "-30deg",
      transformOrigin: "right top",
      borderRadius: '12px'
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

const HangmanDraw = ({ numberOfGuess }) => {
  return (
    <div style={{ position: 'relative', height: '400px', width: '250px', margin: '0 auto' }}>
      {BODY_PARTS.slice(0, numberOfGuess)}
      <div style={{
        height: '50px',
        width: '10px',
        background: 'black',
        position: 'absolute',
        top: '0',
        right: '0',
        borderRadius: '12px'
      }} />
      <div style={{
        height: '10px',
        width: '200px',
        background: 'black',
        marginLeft: '60px'
      }} />
      <div style={{
        height: '400px',
        width: '10px',
        background: 'black',
        marginLeft: '60px'
      }} />
      <div style={{
        height: '10px',
        width: '250px',
        background: 'black',
        borderRadius: '12px'
      }} />
    </div>
  );
};

export default HangmanDraw;