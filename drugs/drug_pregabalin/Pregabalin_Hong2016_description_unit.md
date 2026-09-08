# pregabalin — `Pregabalin_Hong2016_description_unit`

> ## <span class="pk-badge pk-badge--red">rejected</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Hong T; Han S; Lee J; Jeon S; Yim DS et al. (2016). Drug design, development and therapy 10
  ·  DOI: [10.2147/DDDT.S123318](https://doi.org/10.2147/DDDT.S123318)

## Model component
<dbs-pgx drug="pregabalin" model-id="Pregabalin_Hong2016_description_unit" status="rejected" stale="false" population="healthy adults" measured-compound="pregabalin" parameterization="apparent" topology="1C"></dbs-pgx>

**Parameterization:** CL/F, V/F, V2/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — parameter **values are suppressed**. Labels, links and provenance shown for audit only.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| u 2 Apparent volume of distribution (L) | `Q76` · V/F | —(suppressed) | L | — | L | not captured | review_gapfill (0.7) | Bae_2016:review | — | not captured |
| Absorption rate constant (k a ) | `Q49` · kabs | —(suppressed) | h À1 | — | 1/h | not captured | review_gapfill (0.7) | Bae_2016:review | — | not captured |
| Lag time (hour) | `Q83` · tlag | —(suppressed) | hour | — | h | not captured | review_gapfill (0.7) | van_2018:review | — | not captured |
| NAT2 | `Q900` · NAT2 | —(suppressed) | not captured | — | not captured | not captured | not captured (not captured) | pgx | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| ωV2/F | Q82 | not captured | llm_confirmed |
| ωV3/F | Q78 | not captured | llm_confirmed |
| CL/F | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'description (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'description (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'description (unit)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- unit_dimension_mismatch: 'ωV2/F' → Q82 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'ωV3/F' → Q78 (unit '[luminosity] / [length] ** 2' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'ρCLt/F−V2/F' — extend the ontology if this is a real PK parameter (source ['t5-dddt-10-3995:row22:col1'])
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=pregabalin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- bound model equation to Q27 (CL/F): CL/F = CLt/F * (CLCR/120)^θCLCR
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'CL/F'; equation kept verbatim
- status held at route_to_review — not promoted
- population split: 'description (unit)' subgroup of Hong_2016 (paper reports 2 populations: description (unit), estimate)
- gap-filled Q76 (V/F) from Bae_2016's review values (primary lacked it)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Bae_2016's review values (primary lacked it)
- gap-filled Q83 (tlag) from van_2018's review values (primary lacked it)

**Extraction notes:**
- unparsed cell t5-dddt-10-3995:row3:col4 = '6.25 (6.08–6.42)'
- unparsed cell t5-dddt-10-3995:row4:col4 = '0.509 (0.405–0.601)'
- unparsed cell t5-dddt-10-3995:row5:col4 = '17.7 (4.65–22.7)'
- unparsed cell t5-dddt-10-3995:row6:col4 = '26.5 (19.9–43.5)'
- unparsed cell t5-dddt-10-3995:row7:col4 = '27.2 (23.3–37.7)'
- unparsed cell t5-dddt-10-3995:row8:col4 = '0.499 (0.411–0.600)'
- unparsed cell t5-dddt-10-3995:row9:col4 = '0.884 (0.751–1.101)'
- unparsed cell t5-dddt-10-3995:row10:col4 = '3.63 (3.19–4.26)'
- unparsed cell t5-dddt-10-3995:row11:col1 = 'Absorption rate constant of fasting state (h−1)'
- unparsed cell t5-dddt-10-3995:row11:col4 = '5.73 (2.94–9.11)'
- unparsed cell t5-dddt-10-3995:row12:col1 = 'Absorption rate constant of fed state (h−1)'
- unparsed cell t5-dddt-10-3995:row12:col4 = '0.709 (0.617–0.814)'
- unparsed cell t5-dddt-10-3995:row14:col4 = '10.9 (8.6–13.3)'
- unparsed cell t5-dddt-10-3995:row15:col4 = '27.5 (13.2–60.7)'
- unparsed cell t5-dddt-10-3995:row18:col4 = '40.4 (28.5–53.3)'
- unparsed cell t5-dddt-10-3995:row19:col4 = '80.9 (70.7–88.9)'
- unparsed cell t5-dddt-10-3995:row21:col4 = '46.2 (36.2–57.1)'
- unparsed cell t5-dddt-10-3995:row24:col4 = '17.7 (15.6–19.9)'
- LLM selected parameter table(s) 5
- captured model equation CL/F = CLt/F * (CLCR/120)^θCLCR

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Bae_2016:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Bae_2016:review'] |
| C5_dimension_Q78 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['t5-dddt-10-3995:row17:col1'] |
| C5_dimension_Q82 | fail | [luminosity] / [length] ** 2 | unit | not captured | not captured | ['t5-dddt-10-3995:row15:col1'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['van_2018:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 109 L | not captured | not captured | ['Bae_2016:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_pregabalin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Hong_2016` / `Hong_2016::description_unit`)


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
