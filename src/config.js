import React from "react";
export const NODE_KEY = "id";
export const EMPTY_TYPE = "empty";
export const HCO = "HCO"; // Empty node type
export const HCP = "HCP";
export const SPECIAL_TYPE = "special";
export const SKINNY_TYPE = "skinny";
export const SPECIAL_CHILD_SUBTYPE = "specialChild";
export const EMPTY_EDGE_TYPE = "emptyEdge";
export const SPECIAL_EDGE_TYPE = "specialEdge";


export const nodeTypes = [
  EMPTY_TYPE,
  HCO,
  HCP,
  SPECIAL_TYPE,
  SKINNY_TYPE
];
export const edgeTypes = [EMPTY_EDGE_TYPE, SPECIAL_EDGE_TYPE];

export const nodeSubTypes = [SPECIAL_CHILD_SUBTYPE];

const CustomEmptyShape = (
  <symbol viewBox="0 0 5000 5000" id="hosp">
    <svg width="100%" height="100%" viewBox="0 0 5000 5000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.5' }}>
      <g transform="matrix(1,0,0,1,309.5,-69)">
        <rect x={1041} y={1117} width={2299} height={2299} style={{ fill: 'rgb(235,235,235)' }} />
      </g>
      <g transform="matrix(0.562156,0,0,0.562156,2143.02,-845.108)">
        <rect x={1343} y={4015} width={909} height={251} style={{ fill: 'rgb(228,21,61)' }} />
      </g>
      <g transform="matrix(3.44221e-17,0.562156,-0.562156,3.44221e-17,5481.11,472.024)">
        <rect x={1343} y={4015} width={909} height={251} style={{ fill: 'rgb(228,21,61)' }} />
      </g>
      <g transform="matrix(0.831366,0,0,1,1321.59,-69)">
        <rect x={1907} y={2396} width={593} height={1020} style={{ fill: 'rgb(0,163,255)' }} />
      </g>
      <g transform="matrix(1.24115,0,0,1.91587,-1016.37,-3362.43)">
        <rect x={1907} y={2396} width={593} height={1020} style={{ fill: 'rgb(0,163,255)' }} />
      </g>
      <g transform="matrix(1.30451,0,0,1.30451,-735.193,-1249.23)">
        <path d="M4319,3634.75C4319,3526.71 4231.29,3439 4123.25,3439L876.75,3439C768.713,3439 681,3526.71 681,3634.75L681,4026.25C681,4134.29 768.713,4222 876.75,4222L4123.25,4222C4231.29,4222 4319,4134.29 4319,4026.25L4319,3634.75Z" style={{ fill: 'rgb(255,77,109)' }} />
      </g>
      <g transform="matrix(1.30451,0,0,1.30451,-787.374,-1304.02)">
        <path d="M4319,3634.75C4319,3526.71 4231.29,3439 4123.25,3439L876.75,3439C768.713,3439 681,3526.71 681,3634.75L681,4026.25C681,4134.29 768.713,4222 876.75,4222L4123.25,4222C4231.29,4222 4319,4134.29 4319,4026.25L4319,3634.75Z" style={{ fill: 'url(#_Linear1)' }} />
      </g>
      <g transform="matrix(1,0,0,1,-60,0)">
        <rect x={1283} y={928} width={2554} height={120} style={{ fill: 'rgb(137,136,144)' }} />
      </g>
      <g transform="matrix(1,0,0,1,2.27374e-13,-29.5)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '7.42px' }} />
      </g>
      <g transform="matrix(1.61791e-16,-2.64224,1,6.12323e-17,83.5,6750.54)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '3.72px' }} />
      </g>
      <g transform="matrix(1,0,0,1,2.27374e-13,266.5)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '7.42px' }} />
      </g>
      <g transform="matrix(1.61791e-16,-2.64224,1,6.12323e-17,379.5,6750.54)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '3.72px' }} />
      </g>
      <g transform="matrix(7.11485e-17,-1.16194,1,6.12323e-17,1666.5,4751.39)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '6.85px' }} />
      </g>
      <g transform="matrix(1,0,0,1,2.27374e-13,562.5)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '7.42px' }} />
      </g>
      <g transform="matrix(1,0,0,1,2.27374e-13,858.5)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '7.42px' }} />
      </g>
      <g transform="matrix(1,0,0,1,2.27374e-13,1154.5)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '7.42px' }} />
      </g>
      <g transform="matrix(1,0,0,1,2.27374e-13,1450.5)">
        <path d="M1350.5,1487L2086.5,1487" style={{ fill: 'none', stroke: 'rgb(1,110,241)', strokeWidth: '7.42px' }} />
      </g>
      <defs>
        <linearGradient id="_Linear1" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.29384e-13,-2113,2113,1.29384e-13,2571,4632)"><stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} /><stop offset={1} style={{ stopColor: 'rgb(252,237,240)', stopOpacity: 1 }} /></linearGradient>
      </defs>
    </svg>

  </symbol >
);


const Circle = (
  <symbol viewBox="0 0 200 200" id="customEmpty">
    <circle cx="100" cy="100" r="10" fill="blanchedalmond" />
    <g>
      <foreignObject width="100%" height="100%" >
        <div xmlns="http://www.w3.org/1999/xhtml">test</div>
      </foreignObject>
    </g>
  </symbol>
);


const SkinnyShape = (
  <symbol viewBox="0 0 200 200" id="patient">
    <svg width="100%" height="100%" viewBox="0 0 5000 5000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsSerif="http://www.serif.com/" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '1.5' }}>
      <g transform="matrix(1,0,0,1,0,600.76)">
        <clipPath id="_clip1">
          <rect x="1748.08" y="371.366" width="1503.83" height="3038.63" />
        </clipPath>
        <g clipPath="url(#_clip1)">
          <g transform="matrix(1,0,0,1,23.3944,47)">
            <g transform="matrix(7.56321,0,0,7.56321,-4797.41,-902.258)">
              <path d="M961.758,252.48C986.659,252.48 1006.91,232.229 1006.91,207.331C1006.91,182.433 986.659,162.183 961.758,162.183C936.864,162.183 916.616,182.433 916.616,207.331C916.616,232.229 936.864,252.48 961.758,252.48Z" style={{ fill: 'rgb(80,188,235)' }} />
            </g>
            <g transform="matrix(3.7816,0,0,3.7816,-4797.41,-902.258)">
              <path d="M1833.47,408.047C1837.2,453.727 1884.03,489.96 1941.07,489.96C1955.56,489.96 1969.4,487.621 1982.04,483.38C1966.27,496.831 1945.83,504.96 1923.52,504.96C1873.73,504.96 1833.23,464.458 1833.23,414.662C1833.23,412.436 1833.31,410.229 1833.47,408.047Z" style={{ fill: 'rgb(19,120,197)' }} />
            </g>
            <g transform="matrix(7.56321,0,0,7.56321,-4797.41,-902.258)">
              <path d="M917.065,573.203L917.229,318.561L904.166,400.224C902.312,410.352 893.603,417.62 883.437,417.62C871.807,417.62 862.345,408.159 862.345,396.532C862.345,395.562 862.423,394.599 862.584,393.589C862.33,392.773 862.277,391.896 862.443,391.006L883.172,281.044C884.804,270.912 893.538,263.455 903.912,263.455L1019.61,263.455C1029.98,263.455 1038.71,270.905 1040.37,281.182L1061.07,391.006C1061.24,391.896 1061.19,392.773 1060.93,393.589C1061.09,394.586 1061.17,395.562 1061.18,396.532C1061.18,408.159 1051.72,417.62 1040.09,417.62C1029.92,417.62 1021.22,410.352 1019.37,400.346L1006.29,318.561L1006.46,573.203L964.281,573.203L964.281,450.168L959.249,450.168L959.249,573.203L917.065,573.203Z" style={{ fill: 'rgb(83,188,234)' }} />
            </g>
            <g transform="matrix(-7.56321,0,0,7.56321,10168.5,-2278.76)">
              <path d="M918.22,583.603C919.048,584.445 936.808,603.259 957.202,588.602C953.728,595.449 946.348,600.239 938.148,600.239C928.479,600.239 920.677,592.5 918.22,583.603Z" style={{ fill: 'rgb(19,120,197)' }} />
            </g>
            <g transform="matrix(-7.56321,0,0,7.56321,8981.13,-2278.76)">
              <path d="M918.22,583.603C919.048,584.445 936.808,603.259 957.202,588.602C953.728,595.449 946.348,600.239 938.148,600.239C928.479,600.239 920.677,592.5 918.22,583.603Z" style={{ fill: 'rgb(19,120,197)' }} />
            </g>
          </g>
          <g transform="matrix(0.8477,0.00912652,-0.0126358,1.17365,385.123,-227.012)">
            <path d="M2292,1144.63L2292,1297" style={{ fill: 'none', stroke: 'rgb(12,75,123)', strokeWidth: '29.78px' }} />
          </g>
          <g transform="matrix(0.8477,0.00912652,-0.0126358,1.17365,788.652,-227.012)">
            <path d="M2292,1144.63L2292,1297" style={{ fill: 'none', stroke: 'rgb(12,75,123)', strokeWidth: '29.78px' }} />
          </g>
          <g transform="matrix(0.847749,0,0,0.847749,428.984,186.93)">
            <circle cx="2699.07" cy={1409} r={92} style={{ fill: 'rgb(19,120,197)' }} />
          </g>
          <g transform="matrix(0.847749,0,0,0.847749,369.384,156.874)">
            <path d="M2769.37,1352.45C2820.15,1352.45 2861.37,1393.68 2861.37,1444.45C2861.37,1495.23 2820.15,1536.45 2769.37,1536.45C2718.6,1536.45 2677.37,1495.23 2677.37,1444.45C2677.37,1393.68 2718.6,1352.45 2769.37,1352.45ZM2769.37,1398.45C2794.76,1398.45 2815.37,1419.07 2815.37,1444.45C2815.37,1469.84 2794.76,1490.45 2769.37,1490.45C2743.98,1490.45 2723.37,1469.84 2723.37,1444.45C2723.37,1419.07 2743.98,1398.45 2769.37,1398.45Z" style={{ fill: 'rgb(12,75,123)' }} />
          </g>
          <g transform="matrix(5.19097e-17,0.847749,-1.41152,8.64307e-17,4035.63,-589.613)">
            <path d="M2292,1144.63C2232.57,1195.42 2234.09,1246.21 2292,1297" style={{ fill: 'none', stroke: 'rgb(12,75,123)', strokeWidth: '26.19px', strokeLinecap: 'round' }} />
          </g>
          <g transform="matrix(0.847749,0,-1.04493e-32,1.02205,261.85,183.557)">
            <path d="M2292,1144.63L2292,1297" style={{ fill: 'none', stroke: 'rgb(12,75,123)', strokeWidth: '32.47px', strokeLinecap: 'round' }} />
          </g>
          <g transform="matrix(0.847749,0,-1.04493e-32,1.02205,476.918,183.557)">
            <path d="M2292,1144.63L2292,1297" style={{ fill: 'none', stroke: 'rgb(12,75,123)', strokeWidth: '32.47px', strokeLinecap: 'round' }} />
          </g>
          <g transform="matrix(5.19097e-17,-0.847749,0.387762,2.37436e-17,1917.03,3452.19)">
            <path d="M2292,1144.63L2292,1297" style={{ fill: 'none', stroke: 'rgb(12,75,123)', strokeWidth: '46.26px', strokeLinecap: 'round' }} />
          </g>
          <g transform="matrix(5.19097e-17,-0.847749,0.387762,2.37436e-17,1761.04,3452.19)">
            <path d="M2292,1144.63L2292,1297" style={{ fill: 'none', stroke: 'rgb(12,75,123)', strokeWidth: '46.26px', strokeLinecap: 'round' }} />
          </g>
          <g transform="matrix(1.49361,0.169269,-0.169269,1.49361,1224.81,-1119.31)">
            <path d="M888.317,1645.95C877.647,1648.24 870.263,1655.81 871.747,1662.93C873.265,1670.02 883.101,1673.96 893.797,1671.72C904.44,1669.42 911.858,1661.83 910.355,1654.73C908.849,1647.62 898.99,1643.67 888.317,1645.95Z" style={{ fill: 'rgb(19,120,197)', fillRule: 'nonzero', stroke: 'rgb(50,50,50)', strokeOpacity: 0, strokeWidth: '0.67px', strokeMiterlimit: 2 }} />
          </g>
          <g transform="matrix(1.50317,0,0,1.50317,875.311,-966.06)">
            <path d="M980.734,1633.57C969.834,1634.2 961.341,1640.59 961.747,1647.86C962.167,1655.09 971.33,1660.47 982.211,1659.87C993.108,1659.24 1001.58,1652.85 1001.18,1645.61C1000.77,1638.34 991.601,1632.95 980.734,1633.57Z" style={{ fill: 'rgb(19,120,197)', fillRule: 'nonzero', stroke: 'rgb(50,50,50)', strokeOpacity: 0, strokeWidth: '0.67px', strokeMiterlimit: 2 }} />
          </g>
        </g>
      </g>
      <g transform="matrix(1.30451,0,0,1.30451,-735.193,-1479.78)">
        <path d="M4319,3634.75C4319,3526.71 4231.29,3439 4123.25,3439L876.75,3439C768.713,3439 681,3526.71 681,3634.75L681,4026.25C681,4134.29 768.713,4222 876.75,4222L4123.25,4222C4231.29,4222 4319,4134.29 4319,4026.25L4319,3634.75Z" style={{ fill: 'rgb(71,138,167)' }} />
      </g>
      <g transform="matrix(1.30451,0,0,1.30451,-787.374,-1534.57)">
        <path d="M4319,3634.75C4319,3526.71 4231.29,3439 4123.25,3439L876.75,3439C768.713,3439 681,3526.71 681,3634.75L681,4026.25C681,4134.29 768.713,4222 876.75,4222L4123.25,4222C4231.29,4222 4319,4134.29 4319,4026.25L4319,3634.75Z" style={{ fill: 'url(#_Linear2)' }} />
      </g>
      <defs>
        <linearGradient id="_Linear2" x1={0} y1={0} x2={1} y2={0} gradientUnits="userSpaceOnUse" gradientTransform="matrix(1.29384e-13,-2113,2113,1.29384e-13,2571,4632)"><stop offset={0} style={{ stopColor: 'white', stopOpacity: 1 }} /><stop offset={1} style={{ stopColor: 'rgb(230,238,244)', stopOpacity: 1 }} /></linearGradient>
      </defs>
    </svg>

  </symbol >
);

const SpecialChildShape = (
  <symbol viewBox="0 0 154 154" id="specialChild">
    <rect
      x="2.5"
      y="0"
      width="154"
      height="154"
      fill="rgba(30, 144, 255, 0.12)"
    />
  </symbol>
);

const EmptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);


const SpecialEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="rgba(30, 144, 255, 0.12)" />
  </symbol>
);

export default {
  EdgeTypes: {
    emptyEdge: {
      shape: EmptyEdgeShape,
      shapeId: "#emptyEdge",
      typeText: "Empty"
    },
    specialEdge: {
      shape: SpecialEdgeShape,
      shapeId: "#specialEdge"
    }
  },
  NodeSubtypes: {
    specialChild: {
      shape: SpecialChildShape,
      shapeId: "#specialChild"
    }
  },
  NodeTypes: {
    HCO: {
      shape: CustomEmptyShape,
      shapeId: "#hosp",
      typeText: ""
    },
    HCP: {
      shape: SkinnyShape,
      shapeId: "#patient",
      typeText: "",
    },
    empty: {
      shape: Circle,
      shapeId: "#customEmpty",
      typeText: ""
    },

  }
};
