<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;atomoxetine&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/&quot;},{&quot;label&quot;:&quot;Cheng_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Li2012_reference&quot;,&quot;label&quot;:&quot;Li_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Li2012_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Tobin2026_reference&quot;,&quot;label&quot;:&quot;Tobin_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/Atomoxetine_Tobin2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pgx_Tobin_2026_CYP2D6_Q27&quot;,&quot;label&quot;:&quot;Tobin_2026 \u00b7 CYP2D6&quot;,&quot;group&quot;:&quot;PGx&quot;,&quot;href&quot;:&quot;drugs/drug_atomoxetine/pgx_Tobin_2026_CYP2D6_Q27.md&quot;,&quot;status&quot;:&quot;quantitative&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# atomoxetine — `Atomoxetine_Cheng2024_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.111), gpt-oss:120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**Only clearance was extracted — no volume; kel has no unit.**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. Extracted — atomoxetine: kel 7.35.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has atomoxetine, the second reading unknown; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:23:27.118214+00:00) predates the upstream re-run (2026-10-07 00:13:08.767462+00:00). Current validate status: `needs_review`.

## Citation
Cheng S et al., Population Pharmacokinetic Analysis of…, Clinical pharmacology and t… (2024)
  ·  DOI: [10.1002/cpt.3155](https://doi.org/10.1002/cpt.3155)

<div class="pk-model-meta" hidden drug="atomoxetine" model-id="Atomoxetine_Cheng2024_reference" status="needs_review" stale="true" population="children and adolescents with ADHD" measured-compound="atomoxetine" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** CL/F, Q/F, V/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KATR (1/hour) | `Q49` · kabs | 7.35 | 1/h | 0.0020416666666666665 | 1/h | not captured | exact (1.0) | tab_0:row18:col1 | — | not captured |
| KELR (1/hour) | `Q47` · kel | 0.000754 | 1/h | 2.0944444444444444e-07 | 1/h | not captured | exact (1.0) | tab_0:row19:col1, tab_0:row48:col1 | — | not captured |
| EX (unitless) | `Q319` · allometric_exponent | -0.182 | unitless | not captured | [unitless] | not captured | llm (0.6) | tab_0:row35:col1 | — | not captured |
| BASE (unitless) | `Q45` · fm | 0.0284 | unitless | not captured | [unitless] | not captured | exact (1.0) | tab_0:row36:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| V/F (L) | Q76 | not captured | exact |
| Q/F (L/hour) | Q69 | not captured | exact |
| V2/F (L) | Q82 | not captured | exact |
| CL/F (L/hour) | Q27 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'CYP2D6 AS ≤ 0.5' — extend the ontology if this is a real PK parameter (source ['tab_0:row4:col1'])
- dropped unlinked row (NIL): 'CYP2D6 AS 0' — extend the ontology if this is a real PK parameter (source ['tab_0:row9:col1', 'tab_0:row23:col1', 'tab_0:row39:col1'])
- unit_dimension_unknown: 'stratified by CYP2D6 phenotype' (kabs)
- unit_dimension_unknown: 'stratified by CYP2D6 phenotype' (kel)
- unit_dimension_unknown: 'unitless' (allometric_exponent)
- unit_dimension_unknown: 'unitless' (fm)
- implicit units: 'KATR (1/hour)' → 1/h (from the paper text: 'Table lists "KATR (1/hour)" — absorption rate constant, unit 1/hour.')
- implicit units: 'KELR (1/hour)' → 1/h (from the paper text: 'Table lists "KELR (1/hour)" — elimination rate constant, unit 1/hour.')
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=atomoxetine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 4 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment (site presystemic: 'These differences in ATX bioavailability between CYP2D6 AS groups are consistent with the literature, and are primarily ')
- status held at route_to_review — not promoted
- row roles: per-genotype parameters — typical value from the reference group: CYP2D6 AS ≤ 0.5, CYP2D6 AS 0
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 14 linked by role; re-tagged parent→2-carboxymethylatomoxetine ×1
- molar mass: no plausible PubChem entry for '2-carboxymethylatomoxetine' ('2-carboxymethylatomoxetine') — left in mass units
- molar mass: none found for '2-carboxymethylatomoxetine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tab_0:row5:col2 = '0.894 (0.835, 0.961)'
- unparsed cell tab_0:row6:col2 = '0.811 (0.756, 0.868)'
- unparsed cell tab_0:row9:col2 = '2.10 (1.64, 2.66)'
- unparsed cell tab_0:row10:col2 = '6.49 (3.56, 11.0)'
- unparsed cell tab_0:row11:col2 = '17.9 (10.3, 29.5)'
- unparsed cell tab_0:row12:col2 = '19.1 (10.7, 32.2)'
- unparsed cell tab_0:row13:col2 = '75.5 (67.5, 84.5)'
- unparsed cell tab_0:row14:col2 = '0.48 (0.38, 0.60)'
- unparsed cell tab_0:row16:col2 = '8.43 (5.64, 15.4)'
- unparsed cell tab_0:row18:col2 = '7.28 (6.34, 8.57)'
- unparsed cell tab_0:row19:col2 = '0.000763 (0.000587, 0.000913)'
- unparsed cell tab_0:row23:col2 = '0.360 (0.316, 0.414)'
- unparsed cell tab_0:row24:col2 = '0.740 (0.677, 0.797)'
- unparsed cell tab_0:row25:col2 = '0.924 (0.905, 0.941)'
- unparsed cell tab_0:row26:col2 = '0.932 (0.916, 0.947)'
- unparsed cell tab_0:row28:col2 = '7.76 (6.27, 9.34)'
- unparsed cell tab_0:row28:col4 = 'Volume of distribution of 4-OH'
- unparsed cell tab_0:row29:col2 = '1.60 (1.17, 2.22)'
- unparsed cell tab_0:row31:col2 = '11.5 (9.60, 13.7)'
- unparsed cell tab_0:row33:col2 = '7.82 (7.15, 8.52)'
- unparsed cell tab_0:row33:col4 = 'Clearance of 4-OH'
- unparsed cell tab_0:row35:col2 = '-0.184 (-0.221, -0.140)'
- unparsed cell tab_0:row36:col2 = '0.0285 (0.0218, 0.0357)'
- unparsed cell tab_0:row39:col2 = '0.837 (0.488, 1.55)'
- unparsed cell tab_0:row40:col2 = '3.46 (0.703, 15.5)'
- unparsed cell tab_0:row41:col2 = '10.5 (2.83, 39.4)'
- unparsed cell tab_0:row42:col2 = '17.5 (4.63, 64.3)'
- unparsed cell tab_0:row43:col2 = '11.9 (9.23, 15.4)'
- unparsed cell tab_0:row44:col2 = '6.99 (5.25, 9.33)'
- unparsed cell tab_0:row46:col2 = '34.7 (27.2, 41.7)'
- unparsed cell tab_0:row48:col2 = '0.00214 (0.00152, 0.00281)'
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.111 (2/18 fields) | 16 |
| `gpt-oss:120b` | not confirmed | 0.75 (9/12 fields) | 3 |

<details><summary>19 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[base]` | 0.0284 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ex]` | -0.182 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[katr]` | 7.35 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[katr]` | not captured | 7.35 | only_one_extracted |
| `gpt-oss-120b` | `parameters[kelr]` | 0.000754 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[kelr]` | not captured | 0.000754 | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[q/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2/f]` | not captured | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | atomoxetine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | atomoxetine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[ex]` | not captured | -0.182 | only_one_extracted |
| `gpt-oss:120b` | `parameters[katr].parameter_id` | Q47 | Q306 | mismatch |
| `gpt-oss:120b` | `parameters[kelr]` | not captured | 0.00211 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 4 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | fail | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row33:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row19:col1', 'tab_0:row48:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tab_0:row18:col1'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row14:col1', 'tab_0:row29:col1', 'tab_0:row44:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row13:col1', 'tab_0:row28:col1', 'tab_0:row43:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row16:col1', 'tab_0:row31:col1', 'tab_0:row46:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_atomoxetine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Cheng_2024` / `Cheng_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 00:13 UTC</sub>
