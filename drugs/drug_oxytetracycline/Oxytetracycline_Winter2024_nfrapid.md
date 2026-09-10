# oxytetracycline — `Oxytetracycline_Winter2024_nfrapid`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Winter EA; Pelligand L; Toutain PL; Lees P; Milanova A; Gehring R et al. (2024). Frontiers in microbiology 15
  ·  DOI: [10.3389/fmicb.2024.1498219](https://doi.org/10.3389/fmicb.2024.1498219)

## Model component
<dbs-pgx drug="oxytetracycline" model-id="Oxytetracycline_Winter2024_nfrapid" status="" stale="false" population="calves and adult cattle" measured-compound="oxytetracycline" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| tvKa1 | Q49 | not captured | llm |

## Departures & gaps

**Interpretation flags:**
- column 'nfrapid' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'nfrapid' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'nfrapid' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped duplicate Q49 ('tvKa2', value None) — already have one for this compound
- dropped unlinked row (NIL): 'nFrapid' — extend the ontology if this is a real PK parameter (source ['Winter_2024_table_2:row5:col5', 'Winter_2024_table_2:row18:col5'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V1 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V2 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V3 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxytetracycline
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- population split: 'nfrapid' subgroup of Winter_2024 (paper reports 13 populations: definition, ncl, ncl2, ncl3, nf1, nfrapid, nka1, nka2, ntlag, nv1, nv2, nv3, single run)

**Extraction notes:**
- unparsed cell tab1:row7:col7 = 'Clearance of distribution to V2 (adult)'
- unparsed cell tab1:row8:col7 = 'Clearance of distribution to V3 (adult)'
- unparsed cell tab1:row9:col7 = 'first rate constant of absorption corresponding to a Mean Absorption Time of 4.57 h'
- unparsed cell tab1:row10:col7 = 'second rate of absorption corresponding to a Mean Absorption Time of 22.1 h'
- unparsed cell tab1:row11:col7 = 'Lag-time between Ka1 and Ka2'
- unparsed cell tab1:row15:col7 = 'Categorical covariate on Cld2'
- unparsed cell tab1:row16:col7 = 'Categorical covariate on Cld3'
- unparsed cell tab1:row17:col7 = 'Categorical covariate on V1'
- unparsed cell tab1:row18:col7 = 'Categorical covariate on V2'
- unparsed cell tab1:row19:col7 = 'Categorical covariate on V3'
- companion parameter table 2 transcribed (83 record(s))
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 1 from the LLM selection — perturbations of a model, not a model

## Validation

_No comparable checks._

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_oxytetracycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Winter_2024` / `Winter_2024::nfrapid`)


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
