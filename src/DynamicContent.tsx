import React, { useEffect, useState } from "react";
import Powder from "./images/download.jpg";

export const content = `
  <p>Text1</p>
  <p>Text2</p>
  <p id="p3">Text3</p>
  <div>
    <div>Text4</div>
    <p>Text5</p>
  </div>
  <table >
    <tbody>
      <tr >
        <td style="border:1px solid black">11</td>
      </tr>
      <tr>
        <td style="border:1px solid black">22</td>
      </tr>
    </tbody>
  </table>
  <table id="table2">
    <tbody>
      <tr>
        <td style="border:1px solid black">33</td>
      </tr>
      <tr>
        <td style="border:1px solid black">44</td>
      </tr>
    </tbody>
  </table>
  <a href="http://https://www.w3schools.com">w3schools</a>
  <img src=${Powder}  style="width: 50px; height: 50px;" />
`;
