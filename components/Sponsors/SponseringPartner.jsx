import * as React from "react";
import Box from "@mui/material/Box";

const partnerData = {
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsL_NWI9ojYQkUJkjCm3KNlORcyfMPYnsUeSAPvY&s",
  name: "E-CELL IIT-BHU",
  description: "Developed by E-Cell",
};

export default function SponseringPartner() {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: 350,
          height: 350,
          borderRadius: "20px",
          backgroundColor: "white",
          "&:hover": {
            // backgroundColor: "orange",
            // opacity: [0.9, 0.8, 0.7],
          },
          display: "grid",
          justifyContent: "center",
          // marginLeft:"30px",
          // marginRight:"30px"
        }}
      >
        <div className="w-32 h-32 mx-auto mt-6">
          <img
            className="w-full h-full object-cover rounded-full transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300"
            src={partnerData.imgUrl}
            alt={partnerData.name}
          />
        </div>
        <div className="text-center mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {partnerData.name}
          </h2>
          <p className="mt-2 text-gray-600">{partnerData.description}</p>
        </div>
      </Box>
    </React.Fragment>
  );
}
