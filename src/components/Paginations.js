import { PaginationItem } from "@mui/material";
import React from "react";
import Pagination from "@mui/material/Pagination";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Paginations(props) {
  return (
    <div className="text-white"> {/* Add the text-white class */}
      <div className="d-flex justify-content-center mt-4 mb-5">
        <Pagination
          count={500}
          page={props.currentPage}
          onChange={(event, page) => props.handlePageChange(page)}
          variant="outlined"
          color="warning"
          renderItem={(item) => (
            <PaginationItem
              component="button"
              onClick={() => props.handlePageChange(item.page)}
              {...item}
              icon={
                item.type === "previous" ? (
                  <ArrowBackIcon />
                ) : item.type === "next" ? (
                  <ArrowForwardIcon />
                ) : null
              }
            />
          )}
        />
      </div>
    </div>
  );
}