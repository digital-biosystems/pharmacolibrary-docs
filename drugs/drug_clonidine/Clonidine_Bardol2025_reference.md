<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02A&quot;,&quot;href&quot;:&quot;atc/C02A.md&quot;},{&quot;label&quot;:&quot;clonidine&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/&quot;},{&quot;label&quot;:&quot;Bardol_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Tang2021_reference&quot;,&quot;label&quot;:&quot;Tang_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clonidine/Clonidine_Tang2021_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# clonidine — `Clonidine_Bardol2025_reference`

> ## <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333), gpt-oss:120b (not confirmed, agreement 0.556). The first reading is what the record holds.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — clonidine: V1 202 L/70 kg; 1-OH midazolam: CLfm 33.4 L/h/70 kg, V 90.8 L/70 kg, CL 212 L/h/70 kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has midazolam → 1-oh midazolam (metabolism), the second reading none; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

> ⚠️ **STALE** — review status `needs_review` (reviewed 2026-10-05 09:25:35.585253+00:00) predates the upstream re-run (2026-10-08 11:20:35.185922+00:00). Current validate status: `needs_review`.

## Citation
Bardol M et al., Pharmacokinetic and Pharmacodynamic Mod…, Paediatric anaesthesia (2025)
  ·  DOI: [10.1111/pan.70050](https://doi.org/10.1111/pan.70050)

<div class="pk-model-meta" hidden drug="clonidine" model-id="Clonidine_Bardol2025_reference" status="needs_review" stale="true" population="mechanically ventilated children" measured-compound="clonidine" parameterization="mechanistic" topology="parent_metabolite"></div>

**Model structure:** parent + metabolite; no model was built for this record.  
**Parameters:** 4 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `needs_review`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Vclon (L/70 kg) | `Q63` · V1 | 202.4 | L/70 kg | 0.2024 | [l] / [70kg] | not captured | exact (1.0) | pan70050-tbl-0002:row2:col1 | — | not captured |
| CLmmid (L/h/70 kg) | `Q370` · CLfm | 33.4 | L/h/70 kg | 9.277777777777778e-06 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | pan70050-tbl-0002:row9:col1 | — | not captured |
| Vmmid (L/70 kg) | `Q61` · V | 90.8 | L/70 kg | 0.0908 | [l] / [70kg] | not captured | exact (1.0) | pan70050-tbl-0002:row10:col1 | — | not captured |
| CLommid (L/h/70 kg) | `Q22` · CL | 211.6 | L/h/70 kg | 5.877777777777779e-05 | [l] / [[h] · [70kg]] | not captured | exact (1.0) | pan70050-tbl-0002:row11:col1 | — | not captured |
| PMA_50mid | `Q900` · equation variable | 73.6 | not captured | not captured | not captured | not captured | llm (0.6) | pan70050-tbl-0002:row18:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'parameter' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'estimate (rse)' classified 'rse' by the LLM but kept as the estimate: the header names the point value
- dropped unlinked row (NIL): 'Clonidine' — extend the ontology if this is a real PK parameter (source ['pan70050-tbl-0002:row1:col1', 'pan70050-tbl-0002:row1:col2'])
- routed 'Err propclon (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'PMA_50clon' — extend the ontology if this is a real PK parameter (source ['pan70050-tbl-0002:row6:col1'])
- dropped unlinked row (NIL): 'Hillclon' — extend the ontology if this is a real PK parameter (source ['pan70050-tbl-0002:row7:col1'])
- dropped unlinked row (NIL): 'Midazolam' — extend the ontology if this is a real PK parameter (source ['pan70050-tbl-0002:row8:col1', 'pan70050-tbl-0002:row8:col2'])
- routed 'Err propmid (%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Err addmid (ng/mL)' — extend the ontology if this is a real PK parameter (source ['pan70050-tbl-0002:row15:col1'])
- routed 'Err propmmid(%)' → Q316 (prop_error) to residual_error — variability estimate, not a structural parameter
- routed 'Err addmmid (ng/mL)' → Q317 (add_error) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Hillmid' — extend the ontology if this is a real PK parameter (source ['pan70050-tbl-0002:row19:col1'])
- metabolite volume: 'Vmmid (L/70 kg)' Q63→Q61 for 1-OH midazolam — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=clonidine
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- row roles (LLM): model_class=compartmental; 19/19 row label(s) assigned, 4 linked by role; re-tagged parent→midazolam ×7, parent→1-OH midazolam ×6
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell pan70050-tbl-0002:row1:col3 = '28.1 (19.2–37.1)'
- unparsed cell pan70050-tbl-0002:row2:col2 = '202.2 (122.8–289.3)'
- unparsed cell pan70050-tbl-0002:row3:col2 = '46.9 (20.7–65.6)'
- unparsed cell pan70050-tbl-0002:row4:col2 = '85.0 (57.4–106.8)'
- unparsed cell pan70050-tbl-0002:row5:col2 = '43.6 (20.7–56.6)'
- unparsed cell pan70050-tbl-0002:row8:col3 = '75.6 (37.7–124.5)'
- unparsed cell pan70050-tbl-0002:row9:col2 = '35.3 (22.3–61.7)'
- unparsed cell pan70050-tbl-0002:row10:col2 = '87.3 (39.0–222.9)'
- unparsed cell pan70050-tbl-0002:row11:col2 = '214.7 (178.5–295.5)'
- unparsed cell pan70050-tbl-0002:row12:col2 = '84.9 (42.4–113.1)'
- unparsed cell pan70050-tbl-0002:row13:col2 = '131.1 (66.3–236.2)'
- unparsed cell pan70050-tbl-0002:row14:col2 = '45.8 (22.4–58.3)'
- unparsed cell pan70050-tbl-0002:row15:col2 = '1.25 (0.24–1.79)'
- unparsed cell pan70050-tbl-0002:row16:col2 = '57.4 (42.4–72.8)'
- unparsed cell pan70050-tbl-0002:row17:col2 = '0.023 (0.014–0.037)'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (4/12 fields) | 8 |
| `gpt-oss:120b` | not confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['midazolam', '1-oh midazolam', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clmmid]` | not captured | 33.4 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clmmid]` | 33.4 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clommid]` | not captured | 211.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clommid]` | 211.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[pma_50mid]` | 73.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vclon].parameter_id` | Q63 | Q61 | mismatch |
| `gpt-oss-120b` | `parameters[vmmid]` | 90.8 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vclon]` | 202.4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[vclon]` | not captured | 202.4 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | clonidine | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | clonidine | unknown | mismatch |

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
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pan70050-tbl-0002:row11:col1'] |
| C5_dimension_Q370 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['pan70050-tbl-0002:row9:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['pan70050-tbl-0002:row10:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['pan70050-tbl-0002:row2:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 211.6 | not captured | not captured | ['pan70050-tbl-0002:row11:col1'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 212 L/h | not captured | not captured | ['pan70050-tbl-0002:row11:col1'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 90.8 L | not captured | not captured | ['pan70050-tbl-0002:row10:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 202 L | not captured | not captured | ['pan70050-tbl-0002:row2:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_clonidine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Bardol_2025` / `Bardol_2025::reference`)


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

_No web simulator for this record: its structure has no shared WebAssembly template. The FMI archive under **Models** carries its own compiled FMU._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-08 11:20 UTC</sub>
