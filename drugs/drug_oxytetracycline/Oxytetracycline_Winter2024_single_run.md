# oxytetracycline — `Oxytetracycline_Winter2024_single_run`

> ## <span class="pk-badge pk-badge--neutral">None</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Winter EA; Pelligand L; Toutain PL; Lees P; Milanova A; Gehring R et al. (2024). Frontiers in microbiology 15
  ·  DOI: [10.3389/fmicb.2024.1498219](https://doi.org/10.3389/fmicb.2024.1498219)

## Model component
<dbs-pgx drug="oxytetracycline" model-id="Oxytetracycline_Winter2024_single_run" status="" stale="false" population="calves and adult cattle" measured-compound="oxytetracycline" parameterization="mechanistic" topology="2C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `not captured`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvV1 (adult) | `Q63` · V1 | —(suppressed) | adult | — | [adult] | not captured | tv_prefix (0.95) | tab1:row3:col1 | — | not captured |
| tvV2 (adult) | `Q64` · V2 | —(suppressed) | adult | — | [adult] | not captured | tv_prefix (0.95) | tab1:row4:col1 | — | not captured |
| tvV3 (adult) | `Q77` · V3 | —(suppressed) | adult | — | [adult] | not captured | tv_prefix (0.95) | tab1:row5:col1 | — | not captured |
| tvCl (adult) | `Q22` · CL | —(suppressed) | adult | — | [adult] | not captured | tv_prefix (0.95) | tab1:row6:col1 | — | not captured |
| tvKa1 | `Q49` · kabs | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab1:row9:col1, tab1:row9:col2 | — | not captured |
| tvF1 | `Q40` · Fab | —(suppressed) | not captured | — | not captured | not captured | tv_prefix (0.95) | tab1:row13:col1 | — | not captured |
| dadult_calfCla | `Q900` · equation variable | —(suppressed) | not captured | — | not captured | not captured | llm (0.6) | tab1:row14:col1 | — | not captured |
| theta_q83_category | `Q900` · theta_q83_category | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | tab1:row11:col1 | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'adult' (V1)
- unit_dimension_unknown: 'adult' (V2)
- unit_dimension_unknown: 'adult' (V3)
- unit_dimension_unknown: 'adult' (CL)
- unit_dimension_unknown: 'adult' (CL)
- dropped duplicate Q22 ('tvCld2 (adult)', value '485') — already have one for this compound
- unit_dimension_unknown: 'adult' (CL)
- dropped duplicate Q22 ('tvCld3 (adult)', value '19.96') — already have one for this compound
- dropped duplicate Q49 ('tvKa2', value '0.0441') — already have one for this compound
- dropped unlinked row (NIL): 'tvFrapid' — extend the ontology if this is a real PK parameter (source ['tab1:row12:col1'])
- dropped duplicate Q900 ('dadult_calfCld2b', value '0.190') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfCld3c', value '0.293') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV1d', value '0.320') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV2e', value '0.159') — already have one for this compound
- dropped duplicate Q900 ('dadult_calfV3f', value '0.358') — already have one for this compound
- routed 'tvCMultStdev' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for CL from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V1 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V2 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate category for V3 from footnote/prose kept as documentation only (['tab1:footnote', 'tab1:footnote'])
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=oxytetracycline
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- status held at route_to_review — not promoted
- population split: 'single run' subgroup of Winter_2024 (paper reports 13 populations: definition, ncl, ncl2, ncl3, nf1, nfrapid, nka1, nka2, ntlag, nv1, nv2, nv3, single run)

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

- scholar stages: `../../../knowledgebase/drugs/drug_oxytetracycline/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Winter_2024` / `Winter_2024::single_run`)


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
