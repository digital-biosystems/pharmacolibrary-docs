# erenumab — `Erenumab_Vu2017_units`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Vu T; Ma P; Chen JS; de Hoon J; Van Hecken A; Yan L; et al. et al. (2017). Pharmaceutical research 34
  ·  DOI: [10.1007/s11095-017-2183-6](https://doi.org/10.1007/s11095-017-2183-6)

## Model component
<dbs-pgx drug="erenumab" model-id="Erenumab_Vu2017_units" status="" stale="false" population="healthy and migraine subjects" measured-compound="erenumab" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Absorption rate (ka) | Q49 | not captured | exact |
| Internalization rate (kint) | Q334 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'units' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'Absorption rate (ka)' → Q49 (unit '[time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Receptor degradation rate (kdeg)' — extend the ontology if this is a real PK parameter (source ['Tab3:row8:col1'])
- unit_dimension_unknown: 'kint' (kint)
- dropped value-less row: '95% CI'
- dropped value-less row: 'Mean CL and Vc estimates at 70 kg; individual body weight effect on CL and Vc were estimated as Individual CL = 0.214 (weight/70)0.75 L/day and Individual Vc = 4.27 (weight/70) L'
- dropped value-less row: 'CV'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=erenumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- population split: 'units' subgroup of Vu_2017 (paper reports 3 populations: mean estimate, shrinkage (%), units)

**Extraction notes:**
- unparsed cell Tab3:row1:col3 = '0.213 (0.191, 0.243)'
- unparsed cell Tab3:row2:col3 = '4.2 (3.4, 5.38)'
- unparsed cell Tab3:row3:col3 = '3.25 (1.41, 6.79)'
- unparsed cell Tab3:row4:col3 = '2.75 (2.2, 3.18)'
- unparsed cell Tab3:row5:col3 = '0.428 (0.346, 0.519)'
- unparsed cell Tab3:row6:col3 = '74 (66, 85)'
- unparsed cell Tab3:row7:col3 = '53 (40.6, 65.4)'
- unparsed cell Tab3:row8:col3 = '0.222 (0.144, 0.427)'
- unparsed cell Tab3:row9:col3 = '18.1 (10.6, 30.6)'
- unparsed cell Tab3:row10:col3 = '0.0347 (0.0251, 0.0442)'
- unparsed cell Tab3:row11:col3 = '25 (21, 29.6)'
- unparsed cell Tab3:row12:col3 = '43.8 (35.3, 53)'
- unparsed cell Tab3:row13:col3 = '58.8 (45.6, 73.3)'
- unparsed cell Tab3:row14:col3 = '42.1 (33.5, 51.7)'
- unparsed cell Tab3:row15:col3 = '−0.0719 (−0.127, –0.0371)'
- unparsed cell Tab3:row16:col3 = '0.0664 (0.0396, 0.101)'
- unparsed cell Tab3:row17:col3 = '17.6 (15.9, 19.7)'
- LLM selected parameter table(s) 3

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_erenumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Vu_2017` / `Vu_2017::units`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
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
