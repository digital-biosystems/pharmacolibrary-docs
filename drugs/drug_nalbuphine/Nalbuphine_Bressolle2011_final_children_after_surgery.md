# nalbuphine — `Nalbuphine_Bressolle2011_final_children_after_surgery`

> ## <span class="pk-badge pk-badge--orange">needs review</span>

### Reviewer guidance

> ⚙️ **Pipeline limitation — reviewer_tooling.** the check reported a failure without computing a comparison, so this is an inconclusive check rather than a demonstrated fault<br><sub>evidence: `C6_cl_magnitude failed (ratio None)`</sub>

> This is not a curation fix: the record is waiting on the pipeline, not on a reviewer's judgement.

**What is wrong:** clearance is outside the plausible magnitude window.

**Steps:**
1. Not a curation fix — reviewer_tooling limitation.
2. Check the parameter's unit_verbatim — an unconverted per-kg or per-hour unit is the usual cause, not a genuinely extreme value.
3. Confirm value_si against the paper's reported number.
4. A 'ratio None' means the check could not compute a ratio, so treat the window as unverified rather than as a failure of the value.

<sub>owner: **curator** · guidance written by playbook</sub>

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Bressolle F; Khier S; Rochette A; Kinowski JM; Dadure C; Capdevila X et al. (2011). British journal of anaesthesia 106
  ·  DOI: [10.1093/bja/aer001](https://doi.org/10.1093/bja/aer001)

## Model component
<dbs-pgx drug="nalbuphine" model-id="Nalbuphine_Bressolle2011_final_children_after_surgery" status="needs_review" stale="false" population="children after surgery" measured-compound="" parameterization="" topology=""></dbs-pgx>

**Parameterization:** not captured.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

## Departures & gaps

**Extraction notes:**
- unparsed cell tab_5:row6:col1 = '115, 145'
- unparsed cell tab_5:row6:col3 = '118, 144'
- unparsed cell tab_5:row7:col2 = '166, 255'
- unparsed cell tab_5:row7:col4 = '164, 251'
- unparsed cell tab_5:row8:col2 = '129, 173'
- unparsed cell tab_5:row8:col4 = '128, 180'
- unparsed cell tab_5:row9:col1 = '55.0, 96.2'
- unparsed cell tab_5:row9:col3 = '54.6, 96.9'
- unparsed cell tab_5:row11:col2 = '0.0140,'
- unparsed cell tab_5:row11:col4 = '0.0128,'
- unparsed cell tab_5:row13:col2 = '0.0405,'
- unparsed cell tab_5:row13:col4 = '0.0436,'
- unparsed cell tab_5:row16:col2 = '0.0280,'
- unparsed cell tab_5:row16:col4 = '0.0272,'
- unparsed cell tab_5:row18:col2 = '0.0353,'
- unparsed cell tab_5:row18:col4 = '0.0340,'
- unparsed cell Bressolle_2011_table_2:row2:col2 = '31.2 (39.9), 13.6'
- unparsed cell Bressolle_2011_table_2:row3:col5 = '18.4 (36.7), 7.86'
- unparsed cell Bressolle_2011_table_2:row4:col2 = '39.1 (38.3), 37.0'
- unparsed cell Bressolle_2011_table_2:row5:col5 = '30.7 (53.1), 28.5'
- unparsed cell Bressolle_2011_table_2:row6:col2 = '68.8 (57.5), 28.6'
- unparsed cell Bressolle_2011_table_2:row8:col2 = '22.4 (28.7), 44.7'
- unparsed cell Bressolle_2011_table_2:row9:col5 = '34.8 (53.5), 34.4'
- companion parameter table 2 transcribed (18 record(s))
- companion parameter table 3 transcribed (12 record(s))
- companion parameter table 4 transcribed (13 record(s))
- LLM selected parameter table(s) 2, 3, 4, 6

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_nalbuphine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bressolle_2011` / `Bressolle_2011::final::children after surgery`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
