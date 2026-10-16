<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;,&quot;href&quot;:&quot;drugs/drug_sacituzumab_govitecan/&quot;},{&quot;label&quot;:&quot;Sathe_2024 \u00b7 final_model_estimate_rse&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sacituzumab govitecan — `SacituzumabGovitecan_Sathe2024_final_model_estimate_rse`

> ## <span class="pk-badge pk-badge--red">rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — sacituzumab govitecan: CL 0.133 L/h, Q 0.006 L/h, V1 2.77 L, V2 0.908 L; total antibody: CL 0.016 L/h, Q 0.01 L/h, V1 3.06 L, V2 1.2 L.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Sathe AG et al., Population Pharmacokinetics of Sacituzu…, Clinical pharmacokinetics (2024)
  ·  DOI: [10.1007/s40262-024-01366-3](https://doi.org/10.1007/s40262-024-01366-3)

<div class="pk-model-meta" hidden drug="sacituzumab govitecan" model-id="SacituzumabGovitecan_Sathe2024_final_model_estimate_rse" status="rejected" stale="false" population="patients with metastatic triple-negative breast cancer and other solid tumors" measured-compound="sacituzumab govitecan" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 8 extracted, plus 7 covariate effects.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLSG, L/h | `Q22` · CL | 0.133 | L/h | 3.6944444444444447e-08 | [l] / [h] | 1.01 | llm (0.6) | Tab1:row1:col1 | — | not captured |
| QSG, L/h | `Q30` · Q | 0.006 | L/h | 1.6666666666666667e-09 | [l] / [h] | 3.07 | llm (0.6) | Tab1:row2:col1 | — | not captured |
| V1SG, L | `Q63` · V1 | 2.770 | L | 0.00277 | [l] | 0.87 | exact (1.0) | Tab1:row3:col1 | — | not captured |
| V2SG, L | `Q64` · V2 | 0.908 | L | 0.0009080000000000001 | [l] | 3.29 | exact (1.0) | Tab1:row4:col1 | — | not captured |
| CLtAB, L/h | `Q22` · CL | 0.016 | L/h | 4.444444444444444e-09 | [l] / [h] | 2.76 | llm (0.6) | Sathe_2024_table_3:row0:col1 | — | not captured |
| QtAB, L/h | `Q30` · Q | 0.010 | L/h | 2.777777777777778e-09 | [l] / [h] | 9.62 | llm (0.6) | Sathe_2024_table_3:row1:col1 | — | not captured |
| V1tAB, L | `Q63` · V1 | 3.06 | L | 0.0030600000000000002 | [l] | 1.18 | exact (1.0) | Sathe_2024_table_3:row2:col1 | — | not captured |
| V2tAB, L | `Q64` · V2 | 1.20 | L | 0.0012 | [l] | 10.9 | exact (1.0) | Sathe_2024_table_3:row3:col1 | — | not captured |
| male_sex_on_v1tab | `Q900` · male_sex_on_v1tab | 0.121 | not captured | not captured | not captured | 23.5 | not captured (not captured) | Sathe_2024_table_3:row8:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.508 | not captured | not captured | not captured | 6.77 | not captured (not captured) | Tab1:row6:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.532 | not captured | not captured | not captured | 6.28 | not captured (not captured) | Tab1:row7:col1 | — | not captured |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | -0.355 | not captured | not captured | not captured | 14.90 | not captured (not captured) | Tab1:row8:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.372 | not captured | not captured | not captured | 10.2 | not captured (not captured) | Sathe_2024_table_3:row4:col1 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.446 | not captured | not captured | not captured | 2.26 | not captured (not captured) | Sathe_2024_table_3:row5:col1 | — | not captured |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | -0.735 | not captured | not captured | not captured | 20.2 | not captured (not captured) | Sathe_2024_table_3:row6:col1 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Other cancer type on CLtAB' — extend the ontology if this is a real PK parameter (source ['Sathe_2024_table_3:row7:col1'])
- covariate level 'Male sex on V1tAB' → Q900:male_sex_on_v1tab = 0.121 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Maximum relative reduction of CLtAB, %' — extend the ontology if this is a real PK parameter (source ['Sathe_2024_table_3:row10:col1'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sacituzumab govitecan
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- status held at route_to_review — not promoted
- population split: 'final model estimate (%rse)' subgroup of Sathe_2024 (paper reports 2 populations: final model estimate (%rse), untransformed estimate)
- row roles (LLM): model_class=compartmental; 30/30 row label(s) assigned, 11 linked by role; re-tagged parent→free SN-38 ×4, parent→total antibody ×14

**Extraction notes:**
- table Tab1: unparsed_numeric_cell
- table Sathe_2024_table_2: unbound_uncertainty
- table Sathe_2024_table_2: units_need_context
- table Sathe_2024_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (14 record(s))
- table Sathe_2024_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 1, 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 8 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C2_reference | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row1:col1'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2024_table_3:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Tab1:row2:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2024_table_3:row1:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2024_table_3:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Tab1:row4:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2024_table_3:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.133 | not captured | not captured | ['Tab1:row1:col1'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['KREL'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.133 L/h | not captured | not captured | ['Tab1:row1:col1'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.016 L/h | not captured | not captured | ['Sathe_2024_table_3:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.77 L | not captured | not captured | ['Tab1:row3:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.06 L | not captured | not captured | ['Sathe_2024_table_3:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.908 L | not captured | not captured | ['Tab1:row4:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.2 L | not captured | not captured | ['Sathe_2024_table_3:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sacituzumab_govitecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sathe_2024` / `Sathe_2024::final_model_estimate_rse`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:13 UTC</sub>
