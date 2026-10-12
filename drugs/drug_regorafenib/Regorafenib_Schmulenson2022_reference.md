<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;,&quot;href&quot;:&quot;drugs/drug_regorafenib/&quot;},{&quot;label&quot;:&quot;Schmulenson_2022 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# regorafenib — `Regorafenib_Schmulenson2022_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**The regorafenib record was rejected for a disconnected capecitabine metabolite pathway, although it reports regorafenib CL/F of 1.94 L/h.**

Regorafenib is linked to M-2 and M-5, but the separate capecitabine–DFCR–DFUR pathway has no connection to regorafenib. The reported regorafenib CL/F is 1.94 L/h. Extracted — regorafenib: CL/F 1.94 L/h, V1/F 10.4 L, MAT 3.01 h, V2/F 63.9 L, Q/F 13.5 L/h, kabs 0.41 h−1; M-2: CL/F 0.936 L/h, kfm 0.265 1/h, MAT 1.9 h, CLm/F 25.2; M-5: CL/F 2.01 L/h, CLm/F 75.6.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on which compound was dosed: this record has regorafenib and capecitabine, the second reading regorafenib; it also differs on 9 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by gpt-6-luna</sub>

> **Dose compound ≠ measured compound:** dosed `regorafenib and capecitabine`, measured `regorafenib`.

## Citation
Schmulenson E et al., Population pharmacokinetic analyses of…, British journal of clinical… (2022)
  ·  DOI: [10.1111/bcp.15461](https://doi.org/10.1111/bcp.15461)

<div class="pk-model-meta" hidden drug="regorafenib" model-id="Regorafenib_Schmulenson2022_reference" status="rejected" stale="false" population="patients with locally advanced rectal cancer" measured-compound="regorafenib" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 12 extracted.

**Parameterization:** CL/F, CLm/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLRegorafenib/F [L/h] | `Q27` · CL/F | 1.94 | L/h | 5.388888888888888e-07 | [l] / [h] | 12.1 | llm (0.6) | Schmulenson_2022_table_p7_1:row0:col1 | — | not captured |
| Vc/F [L] | `Q290` · V1/F | 10.4 | L | 0.010400000000000001 | [l] | 33.2 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row1:col1 | — | not captured |
| MATRegorafenib [h] | `Q73` · MAT | 3.01 | h | 10836.0 | [h] | 9.6 | llm (0.6) | Schmulenson_2022_table_p7_1:row2:col1 | — | not captured |
| Vp/F [L] | `Q82` · V2/F | 63.9 | L | 0.0639 | [l] | 8.7 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row3:col1 | — | not captured |
| Q/F [L/h] | `Q69` · Q/F | 13.5 | L/h | 3.75e-06 | [l] / [h] | 10.8 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row4:col1 | — | not captured |
| CLM-2/F [L/h] | `Q27` · CL/F | 0.936 | L/h | 2.6000000000000005e-07 | [l] / [h] | 10.8 | exact (1.0) | Schmulenson_2022_table_p7_1:row5:col1 | — | not captured |
| kg,met [1/h] | `Q305` · kfm | 0.265 | 1/h | 7.361111111111111e-05 | [1] / [h] | 12.8 | exact (1.0) | Schmulenson_2022_table_p7_1:row6:col1 | — | not captured |
| MATM-2 [h] | `Q73` · MAT | 1.90 | h | 6840.0 | [h] | 14.1 | llm (0.6) | Schmulenson_2022_table_p7_1:row7:col1 | — | not captured |
| CLM-5/F [L/h] | `Q27` · CL/F | 2.01 | L/h | 5.583333333333332e-07 | [l] / [h] | 21.7 | exact (1.0) | Schmulenson_2022_table_p7_1:row8:col1 | — | not captured |
| CLM-2/F [%] | `Q351` · CLm/F | 25.2 | not captured | not captured | not captured | 33.6 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row13:col1 | — | not captured |
| CLM-5/F [%] | `Q351` · CLm/F | 75.6 | not captured | not captured | not captured | 22.3 | llm_confirmed (0.6) | Schmulenson_2022_table_p7_1:row14:col1 | — | not captured |
| REG ka IREG (n = 8) | `Q49` · kabs | 0.41 | h−1 | 0.00011388888888888888 | 1/h | not captured | review_gapfill (0.7) | Szkutnik-Fiedler_2024:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'Regorafenib [%]' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M-2 [%]' routed out of structural estimates ('Residual variability')
- table section residual_error: 'M-5 [%]' routed out of structural estimates ('Residual variability')
- dropped duplicate Q27 ('CLRegorafenib/F [%]', value '38.1') — already have one for this compound
- dropped duplicate Q290 ('Vc/F [%]', value '131.5') — already have one for this compound
- dropped duplicate Q73 ('MAT (Regorafenib) [%]', value '21.7') — already have one for this compound
- implicit units: 'CLM-2/F [%]' — the LLM proposed '%', whose dimension does not fit Q351; left unset
- implicit units: 'CLM-5/F [%]' — the LLM proposed '%', whose dimension does not fit Q351; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=regorafenib
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — 4 metabolites — the templates hold two (site presystemic: 'M-2 metabolism was best described by presystemic formation occurring from the first transit compartment of regorafenib.')
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 17/17 row label(s) assigned, 7 linked by role; re-tagged parent→regorafenib ×8, parent→M-2 ×7, parent→M-5 ×5
- molar mass: no plausible PubChem entry for 'M-5' ('regorafenib N-desmethyl-N-oxide') — left in mass units
- molar mass: none of 2 PubChem candidate(s) is "5'-deoxy-5-fluorocytidine (DFCR)" (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is "5'-deoxy-5-fluorouridine (DFUR)" (LLM) — left in mass units
- molar mass: none found for 'M-5' — its concentrations stay mass-only
- molar mass: none found for "5'-deoxy-5-fluorocytidine (DFCR)" — its concentrations stay mass-only
- molar mass: none found for "5'-deoxy-5-fluorouridine (DFUR)" — its concentrations stay mass-only
- gap-filled Q49 (kabs) from Szkutnik-Fiedler_2024's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- unparsed cell Schmulenson_2022_table_p7_1:row0:col3 = '1.91 (1.47–2.46)'
- unparsed cell Schmulenson_2022_table_p7_1:row1:col3 = '9.83 (2.37–23.2)'
- unparsed cell Schmulenson_2022_table_p7_1:row2:col3 = '3.05 (2.03–4.05)'
- unparsed cell Schmulenson_2022_table_p7_1:row3:col3 = '64.4 (50.3–85.2)'
- unparsed cell Schmulenson_2022_table_p7_1:row4:col3 = '13.7 (9.64–17.7)'
- unparsed cell Schmulenson_2022_table_p7_1:row5:col3 = '0.932 (0.731–1.19)'
- unparsed cell Schmulenson_2022_table_p7_1:row6:col3 = '0.267 (0.168–0.449)'
- unparsed cell Schmulenson_2022_table_p7_1:row7:col3 = '1.91 (1.31–2.96)'
- unparsed cell Schmulenson_2022_table_p7_1:row8:col3 = '2.02 (1.14–3.16)'
- unparsed cell Schmulenson_2022_table_p7_1:row10:col3 = '34.5 (14.8–48.0)'
- unparsed cell Schmulenson_2022_table_p7_1:row11:col3 = '126.9 (82.3–238.7)'
- unparsed cell Schmulenson_2022_table_p7_1:row12:col3 = '19.9 (5.92–30.0)'
- unparsed cell Schmulenson_2022_table_p7_1:row13:col3 = '23.7 (6.15–37.9)'
- unparsed cell Schmulenson_2022_table_p7_1:row14:col3 = '72.6 (50.1–99.3)'
- unparsed cell Schmulenson_2022_table_p7_1:row16:col3 = '51.2 (42.5–59.0)'
- unparsed cell Schmulenson_2022_table_p7_1:row17:col3 = '57.9 (52.2–63.6)'
- unparsed cell Schmulenson_2022_table_p7_1:row18:col3 = '53.6 (48.1–59.4)'
- LLM region Schmulenson_2022:results_prose: no JSON records returned
- LLM region Schmulenson_2022:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | not confirmed | 0.643 (18/28 fields) | 10 |

<details><summary>10 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `model.links` | [['regorafenib', 'm-2', 'metabolism'], ['regorafenib', 'm-5', 'metabolism'], ['capecitabine', "5'-deoxy-5-fluorocytidine (dfcr)", 'metabolism'], ["5'-deoxy-5-fluorocytidine (dfcr)", "5'-deoxy-5-fluorouridine (dfur)", 'metabolism']] | [['regorafenib', 'm-2', 'metabolism'], ['regorafenib', 'm-5', 'metabolism'], ['capecitabine', "5'-deoxy-5-fluorocytidine", 'metabolism'], ['capecitabine', "5'-deoxy-5-fluorouridine", 'metabolism']] | mismatch |
| `qwen3.8-27b` | `parameters[clregorafenib/f [l/h]]` | not captured | 1.94 | only_one_extracted |
| `qwen3.8-27b` | `parameters[clregorafenib/f [l/h]]` | 1.94 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[kg,met [1/h]]` | not captured | 0.265 | only_one_extracted |
| `qwen3.8-27b` | `parameters[kg,met [1/h]]` | 0.265 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[matm-2 [h]].parameter_id` | Q73 | Q49 | mismatch |
| `qwen3.8-27b` | `parameters[matregorafenib [h]]` | not captured | 3.01 | only_one_extracted |
| `qwen3.8-27b` | `parameters[matregorafenib [h]]` | 3.01 | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[reg ka ireg]` | 0.41 | not captured | only_one_extracted |
| `qwen3.8-27b` | `screen.dose_compound` | regorafenib and capecitabine | regorafenib | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 11 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row0:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row5:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row8:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row1:col1'] |
| C5_dimension_Q305 | pass | 1 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Szkutnik-Fiedler_2024:review'] |
| C5_dimension_Q69 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row4:col1'] |
| C5_dimension_Q73 | pass | [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row2:col1'] |
| C5_dimension_Q73 | pass | [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row7:col1'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row3:col1'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row13:col1'] |
| C5_unit_missing_Q351 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['Schmulenson_2022_table_p7_1:row14:col1'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none', 'none', 'none'] | not captured | not captured | not captured |
| C9_phys_window_Q27 | pass | clearance within physiological range | 1.94 L/h | not captured | not captured | ['Schmulenson_2022_table_p7_1:row0:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 0.936 L/h | not captured | not captured | ['Schmulenson_2022_table_p7_1:row5:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.01 L/h | not captured | not captured | ['Schmulenson_2022_table_p7_1:row8:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 10.4 L | not captured | not captured | ['Schmulenson_2022_table_p7_1:row1:col1'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 63.9 L | not captured | not captured | ['Schmulenson_2022_table_p7_1:row3:col1'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_regorafenib/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Schmulenson_2022` / `Schmulenson_2022::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 05:40 UTC</sub>
