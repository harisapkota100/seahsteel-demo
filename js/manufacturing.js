// js/manufacturing.js

// 1) All your machine detail data:
const machineDetails = {
  // JCO(E) LINE
  'jco-edgemilling': {
    title: 'Edge Milling (JCO Line)',
    body: `
      <strong>Process Detail:</strong>
      <ul>
        <li>Bevel edge preparation using rotating heads</li>
        <li>Root face: 3–5 mm</li>
         <li>Angles: 27°/32°</li>
       </ul>
<strong>Key Equipment:</strong>
<ul>
          <li> Double head</li>
          <li> Edge Shape: X.Y</li>
          <li> Length: 6.0~12.8m</li>
          <li> Thicknes:Max 60mm</li>
         <li> Width: 1,200~5,300mm</li>
         <li> Weight: 26ton</li>
          <li> SEOKWANG (Korea)</li>
      </ul>`
  },
  'jco-jcopress': {
    title: 'JCO Press',
    body: `
<strong>Process Detail:</strong>
 <ul>
        <li>The die width and tool (Upper)
press length is resultant of the
diameter and coil strength</li>
        <li>All of process is controlled by
CNC with electro- Hydraulic
servo bending system</li>
        
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'jco-tackwelding': {
    title: 'Tack Welding (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Guide Roller in tack welding
machine make attached meeting
point for welding with set the
position and feed pipe continuously</li>
        <li>GMAW Welding with CO2
or Argon gas to shield the
welding area</li>
        
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Type : 5 Rolls Guide Type</li>
        <li>Capacity : DC Max. 45V , AC Max. 500A</li>
        <li>Capacity : 25 Ton</li>
<li>Type : O.D : 18" ~ 64"</li>
        <li>Length : 6.0m ~ 12.8m</li>
        <li>Thickness : Max. 60mm</li>
<li>Maker : SEOKWANG (KOREA)</li>

      </ul>`
  },
  'jco-insidewelding': {
    title: 'Inside Welding (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>The pipe is carried on movable
Carts per two line and advance
along entire length of boom</li>
        <li>Two wires (D.C and A.C) and
utilizes laser for seam tracking</li>
        <li>All of welding consumable
control according to specification
or customer request</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Capacity
: DC Max. 1650A (2 Set)
: AC Max. 1250 (2 Set)</li>
        <li>O.D : 18" ~ 64"</li>
        <li>Length : 6.0m ~ 12.8m</li>
<li>Weight : 30 ton</li>
<li>Thickness : Max. 60mm</li>
<li>Maker : ESAB (KOREA)</li>

      </ul>`
  },
  'jco-outsidewelding': {
    title: 'Outside Welding (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>The pipe is carried on movable
carts per two line and weld the
seam at set welding station</li>
        <li>Two wires (D.C and A.C) and
utilizes laser for seam tracking</li>
        <li>All of welding consumable
control according to specification
or customer request</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Capacity
: DC Max -1650A (2 set)
: AC Max-1250A (2 set)</li>
        <li>O.D : 18" ~ 64"</li>
        <li>Length : 6.0 ~ 12.8m</li>
<li>Weight : 30 ton</li>
<li>Thickness : Max. 60mm</li>
<li>Maker : ESAB (KOREA)</li>
      </ul>`
  },
  'jco-xray': {
    title: 'X-ray Inspection (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>X-Ray test machine tests the
pipe welding seam with x-ray
source</li>
        <li>Sensitivity is achieved using
the ASTM wire "A" or "B" wire
type image quality indicator</li>
        <li>All of acceptance image are
saved digitally into a hard disk</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Type : Real time image
(Digital X-RAY System)</li>
        <li>Capacity : 65,000 KN</li>
        <li>Thickness : Max 50mm</li>
<li>O.D : 18"~ 64"</li>
<li>Length : 6.0~12.8m</li>
<li>- Weight : 30 Ton</li>
<li>Welding seam Test : Long Seam</li>
      </ul>`
  },
  'jco-expander': {
    title: 'Calibration Press / Cold Expanding (JCO Line)',
    body: `
<strong>Process Detail-Calibration Press:</strong>
      <ul>
        <li>All of pipes are calibrated with
O type press tool for
exactly diameter.</li>
        <li>The calibration press is used to
expert pressure to long pipe
to rectify.</li>
        <li>Also can be used to rectify the
straightness of the pipes</li>
      </ul>
<strong>Key Equipment-Calibration Press:</strong>
      <ul>
        <li>- Forming Type
: Mold shape type/li>
        <li>Capacity : Max. 12500KN</li>
        <li>O.D : 18" ~ 64"</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Weight : 21 ton</li>
<li>Thickness : 8 ~ 60mm</li>
<li>Maker : TSD (CHINA)</li>
<strong>Process Detail-Cold Expander:</strong>
      <ul>
        <li>All of pipes are calibrated with
O type press tool for
exactly diameter.</li>
        <li>The calibration press is used to
expert pressure to long pipe
to rectify.</li>
        <li>Also can be used to rectify the
straightness of the pipes</li>
      </ul>
<strong>Key Equipment-Cold Expander:</strong>
      <ul>
        <li>- Forming Type
: Mold shape type/li>
        <li>Capacity : Max. 12500KN</li>
        <li>O.D : 18" ~ 64"</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Weight : 21 ton</li>
<li>Thickness : 8 ~ 60mm</li>
<li>Maker : TSD (CHINA)</li>
      </ul>`
  },
  'jco-hydro': {
    title: 'Hydro Testing (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Hydrostatic pressure test up to 1.25× design pressure</li>
        <li>Verifies joint integrity</li>
        <li>Water-based, safe and reliable</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'jco-ut': {
    title: 'Automated UT (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Ultrasonic testing for weld quality</li>
        <li>Automated flaw detection</li>
        <li>100% coverage of circumferential weld</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'jco-xray-test': {
    title: 'Final X-ray Test (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Confirmatory radiographic inspection</li>
        <li>Ensures no post-UT defects</li>
        <li>Final quality sign-off</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'jco-furnace': {
    title: 'Heat Treatment (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Normalized heat treatment in controlled furnace</li>
        <li>Improves mechanical properties</li>
        <li>Temperature: 580–630 °C</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'jco-inspection': {
    title: 'Final Inspection (JCO Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Comprehensive visual and dimensional check</li>
        <li>Verification of coating and marking</li>
        <li>Documentation and traceability</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  // ROLL-BENDER LINE
  'rb-gascutting': {
    title: 'Plate Gas Cutting (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Oxy-fuel cutting for plate shaping</li>
        <li>Precision straight cuts up to 60 mm plate</li>
        <li>Minimal heat-affected zone</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-rollbending': {
    title: '3 Roll Bending (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Three-roll plate bending to diameter</li>
        <li>Roll diameter: 2,000 mm</li>
        <li>High accuracy roundness</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-tackwelding': {
    title: 'Tack Welding (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Fixture tack welding for alignment</li>
        <li>Ensures stability during seam welding</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-12minside': {
    title: '12M Inside Welding (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Submerged arc welding inside seam</li>
        <li>12-meter pipe capability</li>
        <li>Automated process for consistency</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-12moutside': {
    title: '12M Outside Welding (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Exterior seam welding on 12 m pipes</li>
        <li>High deposition for thick walls</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-fittingup': {
    title: 'Fitting Up (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Manual alignment check</li>
        <li>Dimensional and squareness verification</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-girthinside': {
    title: 'Girth Welding Inside (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Inside circumferential welding</li>
        <li>Automated SAW for uniform bead</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-girthoutside': {
    title: 'Girth Welding Outside (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Outside SAW finishing</li>
        <li>Bevel trimming and final pass</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-120inhydro': {
    title: '120" Hydro Testing (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Hydrostatic test at 120" diameter</li>
        <li>High-pressure verification</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-xray': {
    title: 'X-ray Test (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Radiographic inspection per API 5L</li>
        <li>Detects volumetric flaws</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-furnacerb': {
    title: 'Heat Treatment (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Normalization in furnace</li>
        <li>Improves toughness and ductility</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  },
  'rb-inspectionrb': {
    title: 'Final Inspection (Roll-Bender Line)',
    body: `
<strong>Process Detail:</strong>
      <ul>
        <li>Final dimensional and visual check</li>
        <li>Marking and coating verification</li>
      </ul>
<strong>Key Equipment:</strong>
      <ul>
        <li>Forming Type
: JCO air bent pressing type</li>
        <li>Capacity : 65,000 KN</li>
        <li>High-precision angle adjustment</li>
<li>Length : 6.0 ~ 12.8m</li>
<li>Thickness : Max. 60mm</li>
<li>Out diameter : 18"~ 64"</li>
<li>Maker : YSD (CHINA)</li>
      </ul>`
  }
};

// 2) Open and close modal logic
document.addEventListener('DOMContentLoaded', () => {
  window.openMachineModal = function(id) {
    const data = machineDetails[id];
    if (!data) return;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-body').innerHTML = data.body;
    document.getElementById('machineModal').classList.add('open');
  };

  window.closeMachineModal = function() {
    document.getElementById('machineModal').classList.remove('open');
  };

  // close on outside click
  document.addEventListener('click', (e) => {
    const modal = document.getElementById('machineModal');
    if (e.target === modal) window.closeMachineModal();
  });
});
