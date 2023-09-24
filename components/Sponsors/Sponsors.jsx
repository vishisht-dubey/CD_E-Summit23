import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import SponsoringPartner from "./SponseringPartner"
export default function Sponsors() {
  return (
    <div>
      <div className="flex justify-center mt-8">
        <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none flex items-center text-center">
          Sponsors
        </h1>
      </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-[40px]">
            <Grid container item spacing={6} className="m-auto" >
              <SponsoringPartner/>
            </Grid>
            <Grid container item spacing={3} className="m-auto" >
            <SponsoringPartner/>
            </Grid>
            <Grid container item spacing={3} className="m-auto" >
            <SponsoringPartner/>
            </Grid>
            <Grid container item spacing={3} className="m-auto" >
            <SponsoringPartner/>
            </Grid>
            <Grid container item spacing={3} className="m-auto" >
              <SponsoringPartner/>
            </Grid>
            <Grid container item spacing={3} className="m-auto" >
            <SponsoringPartner/>
            </Grid>
            <Grid container item spacing={3} className="m-auto" >
            <SponsoringPartner/>
            </Grid>
            <Grid container item spacing={3} className="m-auto" >
            <SponsoringPartner/>
            </Grid>
        </div>
    </div>
  );
}
