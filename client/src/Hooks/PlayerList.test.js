import React from "react";
import { render } from '@testing-library/react';

import PlayerList from "./PlayerCard";

describe ("PlayerCard component", () => {
    it("renders without bugs", () => {
        render(<PlayerList/>)
    })
})