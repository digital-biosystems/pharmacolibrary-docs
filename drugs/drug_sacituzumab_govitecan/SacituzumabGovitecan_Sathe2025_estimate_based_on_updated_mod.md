<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;sacituzumab govitecan&quot;,&quot;href&quot;:&quot;drugs/drug_sacituzumab_govitecan/&quot;},{&quot;label&quot;:&quot;Sathe_2025 \u00b7 estimate_based_on_updated_model_using_studies_immu_132_01_ascent_and_tropics_02_rse&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sacituzumab govitecan — `SacituzumabGovitecan_Sathe2025_estimate_based_on_updated_mod`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (V1/F and V2/F), so that value has no SI equivalent. Extracted — sacituzumab govitecan: CL 0.128 L/h, Q 0.00513 L/h, V1 2.65 L, V2 0.929 L; free SN-38: kfm -2.37 1/h, CL/F 5.99 L/h, Q/F 5.49 L/h, V1/F 49 L b, V2/F 2.18e+03 L b; total antibody: CL 0.0155 L/h, Q 0.0105 L/h, V1 2.97 L, V2 1.32 L.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Sathe AG et al., Sacituzumab Govitecan Population Pharma…, Clinical and translational… (2025)
  ·  DOI: [10.1111/cts.70291](https://doi.org/10.1111/cts.70291)

<div class="pk-model-meta" hidden drug="sacituzumab govitecan" model-id="SacituzumabGovitecan_Sathe2025_estimate_based_on_updated_mod" status="rejected" stale="false" population="adults with HR+/HER2- metastatic breast cancer, mTNBC, or other solid tumors" measured-compound="sacituzumab govitecan" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 13 extracted, plus 7 covariate effects.

**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLSG, L/h | `Q22` · CL | 0.128 | L/h | 3.5555555555555554e-08 | [l] / [h] | 0.942 | exact (1.0) | cts70291-tbl-0002:row1:col2 | — | not captured |
| QSG, L/h | `Q30` · Q | 0.00513 | L/h | 1.425e-09 | [l] / [h] | 2.95 | exact (1.0) | cts70291-tbl-0002:row2:col2 | — | not captured |
| V1SG, L | `Q63` · V1 | 2.650 | L | 0.00265 | [l] | 0.708 | exact (1.0) | cts70291-tbl-0002:row3:col2 | — | not captured |
| V2SG, L | `Q64` · V2 | 0.929 | L | 0.000929 | [l] | 2.57 | exact (1.0) | cts70291-tbl-0002:row4:col2 | — | not captured |
| Log (KREL), 1/h | `Q305` · kfm | -2.37 | 1/h | -0.0006583333333333334 | [1] / [h] | 2.04 | exact (1.0) | Sathe_2025_table_3:row0:col2 | — | not captured |
| Log (CLSN38/F), L/h | `Q27` · CL/F | 5.99 | L/h | 1.663888888888889e-06 | [l] / [h] | 0.89 | exact (1.0) | Sathe_2025_table_3:row1:col2 | — | not captured |
| Log (QSN38/F), L/h | `Q69` · Q/F | 5.49 | L/h | 1.525e-06 | [l] / [h] | 0.47 | exact (1.0) | Sathe_2025_table_3:row2:col2 | — | not captured |
| V1SN38/F, L b | `Q290` · V1/F | 49.0 | L b | not captured | [l] · [b] | not captured | exact (1.0) | Sathe_2025_table_3:row3:col2 | — | not captured |
| V2SN38/F, L b | `Q82` · V2/F | 2177 | L b | not captured | [l] · [b] | not captured | exact (1.0) | Sathe_2025_table_3:row4:col2 | — | not captured |
| CLtAB, L/h | `Q22` · CL | 0.0155 | L/h | 4.3055555555555555e-09 | [l] / [h] | 3.63 | exact (1.0) | Sathe_2025_table_4:row0:col2 | — | not captured |
| QtAB, L/h | `Q30` · Q | 0.0105 | L/h | 2.916666666666667e-09 | [l] / [h] | 11 | exact (1.0) | Sathe_2025_table_4:row1:col2 | — | not captured |
| V1tAB, L | `Q63` · V1 | 2.97 | L | 0.0029700000000000004 | [l] | 0.89 | exact (1.0) | Sathe_2025_table_4:row2:col2 | — | not captured |
| V2tAB, L | `Q64` · V2 | 1.32 | L | 0.00132 | [l] | 13.3 | exact (1.0) | Sathe_2025_table_4:row3:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.523 | not captured | not captured | not captured | 6.27 | not captured (not captured) | cts70291-tbl-0002:row6:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.540 | not captured | not captured | not captured | 5.48 | not captured (not captured) | cts70291-tbl-0002:row7:col2 | — | not captured |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | -0.395 | not captured | not captured | not captured | 12.1 | not captured (not captured) | cts70291-tbl-0002:row8:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.519 | not captured | not captured | not captured | 12.1 | not captured (not captured) | Sathe_2025_table_3:row7:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.422 | not captured | not captured | not captured | 17.3 | not captured (not captured) | Sathe_2025_table_4:row4:col2 | — | not captured |
| theta_q319_weight_power | `Q900` · theta_q319_weight_power | 0.458 | not captured | not captured | not captured | 8.82 | not captured (not captured) | Sathe_2025_table_4:row5:col2 | — | not captured |
| theta_q319_albumin_power | `Q900` · theta_q319_albumin_power | -0.734 | not captured | not captured | not captured | 16 | not captured (not captured) | Sathe_2025_table_4:row6:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- linked 'CLSG, L/h' as 'CL' → Q22 (CL) for  — compound marker removed
- linked 'QSG, L/h' as 'Q' → Q30 (Q) for  — compound marker removed
- unit_dimension_mismatch: 'V1SN38/F, L b' → Q290 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'V2SN38/F, L b' → Q82 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- dropped unlinked row (NIL): 'Other cancer type on CLtAB' — extend the ontology if this is a real PK parameter (source ['Sathe_2025_table_4:row7:col2'])
- dropped unlinked row (NIL): 'Male sex on V1tAB' — extend the ontology if this is a real PK parameter (source ['Sathe_2025_table_4:row8:col2'])
- dropped unlinked row (NIL): 'Maximum relative reduction of CLtAB, %' — extend the ontology if this is a real PK parameter (source ['Sathe_2025_table_4:row10:col2'])
- covariate effect for Q319 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=sacituzumab govitecan
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [2, 2]
- status held at route_to_review — not promoted
- population split: 'estimate based on updated model using studies immu‐132‐01, ascent and tropics‐02 (%rse)' subgroup of Sathe_2025 (paper reports 2 populations: estimate based on previously developed model using studies immu‐132‐01 and ascent (%rse) a, estimate based on updated model using studies immu‐132‐01, ascent and tropics‐02 (%rse))
- row roles: 2 per-group rows of total antibody covariate_effect but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 36/36 row label(s) assigned, 29 linked by role; re-tagged parent→free SN-38 ×24, parent→total antibody ×24
- molar mass: no plausible PubChem entry for 'total antibody' ('total antibody') — left in mass units
- molar mass: none found for 'total antibody' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- companion parameter table 3 transcribed (32 record(s))
- table Sathe_2025_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (36 record(s))
- LLM selected parameter table(s) 2, 3, 4

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 13 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70291-tbl-0002:row1:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_4:row0:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_3:row1:col2'] |
| C5_dimension_Q290 | fail | [mass] | L b | not captured | not captured | ['Sathe_2025_table_3:row3:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['cts70291-tbl-0002:row2:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_4:row1:col2'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_3:row0:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70291-tbl-0002:row3:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2025_table_4:row2:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['cts70291-tbl-0002:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['Sathe_2025_table_4:row3:col2'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Sathe_2025_table_3:row2:col2'] |
| C5_dimension_Q82 | fail | [mass] | L b | not captured | not captured | ['Sathe_2025_table_3:row4:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.128 L/h | not captured | not captured | ['cts70291-tbl-0002:row1:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0155 L/h | not captured | not captured | ['Sathe_2025_table_4:row0:col2'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 5.99 L/h | not captured | not captured | ['Sathe_2025_table_3:row1:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.65 L | not captured | not captured | ['cts70291-tbl-0002:row3:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 2.97 L | not captured | not captured | ['Sathe_2025_table_4:row2:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.929 L | not captured | not captured | ['cts70291-tbl-0002:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 1.32 L | not captured | not captured | ['Sathe_2025_table_4:row3:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_sacituzumab_govitecan/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Sathe_2025` / `Sathe_2025::estimate_based_on_updated_model_using_studies_immu_132_01_ascent_and_tropics_02_rse`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-15 03:13 UTC</sub>
