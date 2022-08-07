// let values = [1,2,11,10,5,6,7];
let values = [1, 2, 11, 10, 5, 6, 7, 8];
if (values.length === 0) throw new Error("No inputs");

values.sort(function (a, b) {
  return a - b;
});

var half = Math.floor(values.length / 2);

// if (values.length % 2)
//   return values[half];

// return (values[half - 1] + values[half]) / 2.0;
// [
//   {
//     metadataDefinitionId: "480edd61-d5d9-45a8-b2c3-c72b59bf4664",
//     metadataDefinitionValue: [
//       {
//         metadataDefinitionId: "3813fc73-5ede-432d-a74d-c982044cc374",
//         metadataDefinitionValue: {
//           valueId: "4f58b573-3db7-41da-a14b-760c44f92fe9",
//         },
//       },
//       {
//         metadataDefinitionId: "a0067131-4142-4eac-b305-92a649d56c05",
//         metadataDefinitionValue: {
//           valueId: "8f3b43ab-67ee-43eb-a38a-89a49fae7b7b",
//         },
//       },
//     ],
//   },
// ]
let a = [
  {
    metadataDefinitionId: "480edd61-d5d9-45a8-b2c3-c72b59bf4664",
    metadataDefinitionValue: [
      {
        metadataDefinitionId: "3813fc73-5ede-432d-a74d-c982044cc374",
        metadataDefinitionValue: {
          valueId: "4f58b573-3db7-41da-a14b-760c44f92fe9",
        },
      },
      {
        metadataDefinitionId: "a0067131-4142-4eac-b305-92a649d56c05",
        metadataDefinitionValue: {
          valueId: "8f3b43ab-67ee-43eb-a38a-89a49fae7b7b",
        },
      },
    ],
  },
];
let b = a.map((v, i) => {
  return a.map(row => row.metadataDefinitionValue[i]);
});
console.log(b);


let c = [
  {
    metadataDefinitionId: "480edd61-d5d9-45a8-b2c3-c72b59bf4664",
    metadataDefinitionValue: [
      {
        metadataDefinitionId: "3813fc73-5ede-432d-a74d-c982044cc374",
        metadataDefinitionValue: {
          valueId: "4f58b573-3db7-41da-a14b-760c44f92fe9",
        },
      },
      {
        metadataDefinitionId: "a0067131-4142-4eac-b305-92a649d56c05",
        metadataDefinitionValue: {
          valueId: "8f3b43ab-67ee-43eb-a38a-89a49fae7b7b",
        },
      },
    ],
  },
]