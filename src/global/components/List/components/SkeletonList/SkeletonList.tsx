/*
 * ====================[ START FS LICENSE ]====================
 * © 2021 FULLSAVE.
 * Ce document ne fait pas partie du domaine public. Il est et demeure la
 * propriété exclusive de FULLSAVE.
 * Il est protégé par le Code de la Propriété intellectuelle et le droit
 * d’auteur.
 * Toute reproduction est interdite. Toute représentation est interdite.
 * Tous droits réservés. Droits non cessibles.
 * =====================[ END FS LICENSE ]=====================
 */

import * as React from "react";
import { Card, CardHeader, CardContent, Grid } from "@mui/material";
import "./skeletonList.scss";
import { ISkeletonList } from "./interface";
import { Skeleton } from "../../../Skeleton";

const SkeletonList: React.FC<ISkeletonList> = ({ showCount }) => {
  const fakeDataArray: string[] = new Array(10).fill("");

  return (
    <div id="skeletonList">
      {showCount && (
        <div id="skeletonCount">
          <Skeleton height="30px" width="200px" />
        </div>
      )}
      {fakeDataArray.map((v: string, index: number) => (
        <Card key={`${index}`} className="cardSkeleton">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <CardHeader
                className="cardSkeleton-header"
                action={
                  <div className="cardSkeleton-header-actions">
                    <Skeleton height="33px" />
                  </div>
                }
                title={
                  <Grid container spacing={1}>
                    <Grid item xs={2}>
                      <Skeleton height="33px" />
                    </Grid>
                    <Grid item xs={1}>
                      <Skeleton height="33px" />
                    </Grid>
                  </Grid>
                }
              />
            </Grid>

            <Grid item xs={12}>
              <CardContent>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={4}>
                    <Skeleton height="80px" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Skeleton height="80px" />
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Skeleton height="80px" />
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </Card>
      ))}
    </div>
  );
};

export default SkeletonList;
