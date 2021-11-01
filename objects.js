

var facesRect = [
    { // left
      uvRow: 0,
      dir: [ -1,  0,  0, ],
      corners: [
        { pos: [ 0, 1, 0 ], uv: [ 0, 1 ], },
        { pos: [ 0, 0, 0 ], uv: [ 0, 0 ], },
        { pos: [ 0, 1, 1 ], uv: [ 1, 1 ], },
        { pos: [ 0, 0, 1 ], uv: [ 1, 0 ], },
        
      ],
    },
    { // right
      uvRow: 0,
      dir: [  1,  0,  0, ],
      corners: [
        { pos: [ 1, 1, 1 ], uv: [ 0, 1 ], },
        { pos: [ 1, 0, 1 ], uv: [ 0, 0 ], },
        { pos: [ 1, 1, 0 ], uv: [ 1, 1 ], },
        { pos: [ 1, 0, 0 ], uv: [ 1, 0 ], },
      ],
    },
    { // bottom
      uvRow: 1,
      dir: [  0, -1,  0, ],
      corners: [
        { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
        { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
        { pos: [ 1, 0, 0 ], uv: [ 1, 1 ], },
        { pos: [ 0, 0, 0 ], uv: [ 0, 1 ], },
      ],
    },
    { // top
      uvRow: 2,
      dir: [  0,  1,  0, ],
      corners: [
        { pos: [ 0, 1, 1 ], uv: [ 1, 1 ], },
        { pos: [ 1, 1, 1 ], uv: [ 0, 1 ], },
        { pos: [ 0, 1, 0 ], uv: [ 1, 0 ], },
        { pos: [ 1, 1, 0 ], uv: [ 0, 0 ], },
      ],
    },
    { // back
      uvRow: 0,
      dir: [  0,  0, -1, ],
      corners: [
        { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
        { pos: [ 0, 0, 0 ], uv: [ 1, 0 ], },
        { pos: [ 1, 1, 0 ], uv: [ 0, 1 ], },
        { pos: [ 0, 1, 0 ], uv: [ 1, 1 ], },
      ],
    },
    { // front
      uvRow: 0,
      dir: [  0,  0,  1, ],
      corners: [
        { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
        { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
        { pos: [ 0, 1, 1 ], uv: [ 0, 1 ], },
        { pos: [ 1, 1, 1 ], uv: [ 1, 1 ], },
      ],
    },
  ]
  
  
  
// 빗변 
var facesTriangle1 = [
      { // left
        uvRow: 0,
        dir: [ -1,  0,  0, ],
        corners: [
          { pos: [ 0, 1, 0 ], uv: [ 0, 1 ], },
          { pos: [ 0, 0, 0 ], uv: [ 0, 0 ], },
          { pos: [ 0, 1, 1 ], uv: [ 1, 1 ], },
          { pos: [ 0, 0, 1 ], uv: [ 1, 0 ], },
          
        ],
      },
      { // bottom
        uvRow: 1,
        dir: [  0, -1,  0, ],
        corners: [
          { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
          { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 1, 1 ], },
          { pos: [ 0, 0, 0 ], uv: [ 0, 1 ], },
        ],
      },
      { // top
        uvRow: 2,
        dir: [  0,  1,  1, ],
        corners: [
          { pos: [ 0, 1, 1 ], uv: [ 1, 1 ], },
          { pos: [ 1, 0, 1 ], uv: [ 0, 1 ], },
          { pos: [ 0, 1, 0 ], uv: [ 1, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
        ],
      },
      { // back
        uvRow: 0,
        dir: [  0,  0, -1, ],
        corners: [
          { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
          { pos: [ 0, 0, 0 ], uv: [ 1, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 0, 1 ], },
          { pos: [ 0, 1, 0 ], uv: [ 1, 1 ], },
        ],
      },
      { // front
        uvRow: 0,
        dir: [  0,  0,  1, ],
        corners: [
          { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
          { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
          { pos: [ 0, 1, 1 ], uv: [ 0, 1 ], },
          { pos: [ 1, 0, 1 ], uv: [ 1, 1 ], },
        ],
      },
    ]
  
  
// 삼각뿔1
var facesTri2 = [
      { // left
        uvRow: 0,
        dir: [ -1,  0,  0, ],
        corners: [
          { pos: [ 0, 1, 0 ], uv: [ 0, 1 ], },
          { pos: [ 0, 0, 0 ], uv: [ 0, 0 ], },
          { pos: [ 0, 1, 0 ], uv: [ 1, 1 ], },
          { pos: [ 0, 0, 1 ], uv: [ 1, 0 ], },
          
        ],
      },
      { // bottom
        uvRow: 1,
        dir: [  0, -1,  0, ],
        corners: [
          { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
          { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 1, 1 ], },
          { pos: [ 0, 0, 0 ], uv: [ 0, 1 ], },
        ],
      },
      { // top
        uvRow: 2,
        dir: [  0,  1,  1, ],
        corners: [
          { pos: [ 0, 1, 0 ], uv: [ 1, 1 ], },
          { pos: [ 1, 0, 1 ], uv: [ 0, 1 ], },
          { pos: [ 0, 1, 0 ], uv: [ 1, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
        ],
      },
      { // back
        uvRow: 0,
        dir: [  0,  0, -1, ],
        corners: [
          { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
          { pos: [ 0, 0, 0 ], uv: [ 1, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 0, 1 ], },
          { pos: [ 0, 1, 0 ], uv: [ 1, 1 ], },
        ],
      },
      { // front
        uvRow: 0,
        dir: [  0,  0,  1, ],
        corners: [
          { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
          { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
          { pos: [ 0, 1, 0 ], uv: [ 0, 1 ], },
          { pos: [ 1, 0, 1 ], uv: [ 1, 1 ], },
        ],
      },
    ]
  
// 삼각뿔2
var facesTri3 = [
      { // left
        uvRow: 0,
        dir: [ -1,  0,  0, ],
        corners: [
          { pos: [ 0.5, 1, 0.5 ], uv: [ 0, 1 ], },
          { pos: [ 0, 0, 0 ], uv: [ 0, 0 ], },
          { pos: [ 0.5, 1, 0.5 ], uv: [ 1, 1 ], },
          { pos: [ 0, 0, 1 ], uv: [ 1, 0 ], },
          
        ],
      },
      { // bottom
        uvRow: 1,
        dir: [  0, -1,  0, ],
        corners: [
          { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
          { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 1, 1 ], },
          { pos: [ 0, 0, 0 ], uv: [ 0, 1 ], },
        ],
      },
      { // top
        uvRow: 2,
        dir: [  0,  1,  1, ],
        corners: [
          { pos: [ 0.5, 1, 0.5 ], uv: [ 1, 1 ], },
          { pos: [ 1, 0, 1 ], uv: [ 0, 1 ], },
          { pos: [ 0.5, 1, 0.5 ], uv: [ 1, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
        ],
      },
      { // back
        uvRow: 0,
        dir: [  0,  0, -1, ],
        corners: [
          { pos: [ 1, 0, 0 ], uv: [ 0, 0 ], },
          { pos: [ 0, 0, 0 ], uv: [ 1, 0 ], },
          { pos: [ 1, 0, 0 ], uv: [ 0, 1 ], },
          { pos: [ 0.5, 1, 0.5 ], uv: [ 1, 1 ], },
        ],
      },
      { // front
        uvRow: 0,
        dir: [  0,  0,  1, ],
        corners: [
          { pos: [ 0, 0, 1 ], uv: [ 0, 0 ], },
          { pos: [ 1, 0, 1 ], uv: [ 1, 0 ], },
          { pos: [ 0.5, 1, 0.5 ], uv: [ 0, 1 ], },
          { pos: [ 1, 0, 1 ], uv: [ 1, 1 ], },
        ],
      },
    ]
  
    // 원기둥
    // 만들기
  

    export { facesRect, facesTriangle1, facesTri2, facesTri3 };