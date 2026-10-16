<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;capecitabine&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/&quot;},{&quot;label&quot;:&quot;Blesch_2003 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Capecitabine_Panoilia2015_reference&quot;,&quot;label&quot;:&quot;Panoilia_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Panoilia2015_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Wen2021_reference&quot;,&quot;label&quot;:&quot;Wen_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Wen2021_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Capecitabine_Zuo2024_reference&quot;,&quot;label&quot;:&quot;Zuo_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_capecitabine/Capecitabine_Zuo2024_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# capecitabine — `Capecitabine_Blesch2003_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.6), gpt-oss-120b (not confirmed, agreement 0.238). Primary extraction retained.">cross-check: disputed 0/2</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (kabs), so that value has no SI equivalent. None of the extracted parameters is capecitabine's own; they describe 5'-DFUR, 5-FU and FBAL. Extracted — 5'-DFUR: kabs 1.09 l/h, tlag 0.000552 h, V 90.6 L, CL 75.8 L/h; 5-FU: V 17.8 L, CLm/F 1.19e+03 L/h; FBAL: V1 73.6 L, CL 27.5 L/h, V2 0.812 L, CLR 0.615 L/h, V2/F 0.394 L.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has 5-FU, the second reading 5'-DFUR; it also differs on 7 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

> **Dose compound ≠ measured compound:** dosed `capecitabine`, measured `5-FU`.

## Citation
Blesch KS et al., Clinical pharmacokinetic/pharmacodynami…, Investigational new drugs (2003)
  ·  DOI: [10.1023/a:1023525513696](https://doi.org/10.1023/a:1023525513696)

<div class="pk-model-meta" hidden drug="capecitabine" model-id="Capecitabine_Blesch2003_reference" status="rejected" stale="false" population="adult cancer patients" measured-compound="5-FU" parameterization="apparent" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** CLm/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| KA | `Q49` · kabs | 1.09 | l/h | not captured | [l] / [h] | not captured | exact (1.0) | tab_0:row1:col2 | — | not captured |
| TLAG | `Q83` · tlag | 5.52E-4 | h | 1.9871999999999999 | [h] | not captured | exact (1.0) | tab_0:row2:col2 | — | not captured |
| V1 | `Q61` · V | 90.6 | L | 0.0906 | [l] | not captured | exact (1.0) | tab_0:row3:col2 | — | not captured |
| CL1 | `Q22` · CL | 75.8 | L/h | 2.1055555555555553e-05 | [l] / [h] | not captured | exact (1.0) | tab_0:row4:col2 | — | not captured |
| V2 | `Q61` · V | 17.8 | L | 0.0178 | [l] | not captured | exact (1.0) | tab_0:row5:col2 | — | not captured |
| CL2 | `Q351` · CLm/F | 1190 | L/h | 0.00033055555555555556 | [l] / [h] | not captured | exact (1.0) | tab_0:row6:col2 | — | not captured |
| V3 | `Q63` · V1 | 73.6 | L | 0.0736 | [l] | not captured | exact (1.0) | tab_0:row7:col2 | — | not captured |
| CL3 | `Q22` · CL | 27.5 | L/h | 7.638888888888888e-06 | [l] / [h] | not captured | exact (1.0) | tab_0:row8:col2 | — | not captured |
| BSAV3 | `Q64` · V2 | 0.812 | L | 0.0008120000000000001 | L | not captured | llm (0.6) | tab_0:row12:col2 | — | not captured |
| CLRCL3 | `Q26` · CLR | 0.615 | L/h | 1.7083333333333332e-07 | L/h | not captured | llm (0.6) | tab_0:row14:col2 | — | not captured |
| CLRV3 | `Q82` · V2/F | 0.394 | L | 0.00039400000000000004 | L | not captured | llm (0.6) | tab_0:row16:col2 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 1 row(s) → 5'-DFUR, 1 row(s) → 5-FU, 1 row(s) → FBAL (name 3)
- table representations disagree for 'KA'; source reconciliation required
- table representations disagree for 'TLAG'; source reconciliation required
- table representations disagree for 'V1'; source reconciliation required
- table representations disagree for 'CL1'; source reconciliation required
- table representations disagree for 'V2'; source reconciliation required
- table representations disagree for 'CL2'; source reconciliation required
- table representations disagree for 'V3'; source reconciliation required
- table representations disagree for 'CL3'; source reconciliation required
- table representations disagree for 'BSAV3'; source reconciliation required
- table representations disagree for 'CLRCL3'; source reconciliation required
- table representations disagree for 'CLRV3'; source reconciliation required
- table representations disagree for 'Res. Error FBAL 1'; source reconciliation required
- unit_dimension_mismatch: 'KA' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- routed 'Res. Error FBAL 1' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- implicit units: 'BSAV3' → L (from the paper text: "Figure 6 caption states: 'V3 apparent FBAL volume (L)'")
- implicit units: 'CLRCL3' → L/h (from the paper text: "Figure 6 caption states: 'CL3 apparent FBAL clearance (L/h)'. CLRCL3 is the renal portion of CL3, thus sharing the same ")
- implicit units: 'CLRV3' → L (from the paper text: "Figure 6 caption states: 'V3 apparent FBAL volume (L)'. V3/F is the apparent volume of distribution, which has the same ")
- metabolite 5-fu: Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- metabolite volume: 'V1' Q63→Q61 for 5'-DFUR — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'V2' Q63→Q61 for 5-FU — it is 1-compartment, so its central volume is its only volume
- metabolite volume: 'BSAV3' Q77→Q64 for FBAL — its only peripheral volume is its first; the 2 numbers the molecule
- metabolite volume: 'CLRV3' Q78→Q82 for FBAL — its only peripheral volume is its first; the 2 numbers the molecule
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=5-FU
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 4 first-order transfer(s) across 5 compounds → general_linear
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at route_to_review — not promoted
- row roles (LLM): model_class=compartmental; 12/12 row label(s) assigned, 8 linked by role; re-tagged parent→5'-DFUR ×4, parent→5-FU ×2, parent→FBAL ×6
- review gap-fill skipped: this record measures '5-FU', not capecitabine — the review values are the parent's

**Extraction notes:**
- table tab_0: unbound_uncertainty
- table tab_0: missing_unit_binding
- table tab_0: unparsed_numeric_cell
- table tab_0: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.6 (12/20 fields) | 8 |
| `gpt-oss-120b` | not confirmed | 0.238 (5/21 fields) | 16 |

<details><summary>24 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['capecitabine', "5'-dfcr", 'metabolism'], ["5'-dfcr", "5'-dfur", 'metabolism'], ["5'-dfur", '5-fu', 'metabolism'], ['5-fu', 'fbal', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl1]` | not captured | 75.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl1]` | 75.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | not captured | 1190 | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl2]` | 1190 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl3]` | 27.5 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrcl3]` | not captured | 0.615 | only_one_extracted |
| `gpt-oss-120b` | `parameters[clrcl3]` | 0.615 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | not captured | 90.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v1]` | 90.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | not captured | 17.8 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v2]` | 17.8 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | not captured | 73.6 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v3]` | 73.6 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | capecitabine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | capecitabine | unknown | mismatch |
| `gpt-oss:120b` | `parameters[cl1].parameter_id` | Q22 | Q351 | mismatch |
| `gpt-oss:120b` | `parameters[cl2].parameter_id` | Q351 | Q22 | mismatch |
| `gpt-oss:120b` | `parameters[clrv3].parameter_id` | Q82 | Q308 | mismatch |
| `gpt-oss:120b` | `parameters[ka]` | not captured | 1.09 | only_one_extracted |
| `gpt-oss:120b` | `parameters[ka]` | 1.09 | not captured | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | not captured | 5.52E-4 | only_one_extracted |
| `gpt-oss:120b` | `parameters[tlag]` | 5.52E-4 | not captured | only_one_extracted |
| `gpt-oss:120b` | `screen.primary_analyte` | 5-FU | 5'-DFUR | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row4:col2'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row8:col2'] |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row14:col2'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tab_0:row6:col2'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l/h | not captured | not captured | ['tab_0:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row5:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row7:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row12:col2'] |
| C5_dimension_Q82 | pass | [length] ** 3 | not captured | not captured | not captured | ['tab_0:row16:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['tab_0:row2:col2'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 75.8 L/h | not captured | not captured | ['tab_0:row4:col2'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 27.5 L/h | not captured | not captured | ['tab_0:row8:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 90.6 L | not captured | not captured | ['tab_0:row3:col2'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 17.8 L | not captured | not captured | ['tab_0:row5:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 73.6 L | not captured | not captured | ['tab_0:row7:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 0.812 L | not captured | not captured | ['tab_0:row12:col2'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 0.394 L | not captured | not captured | ['tab_0:row16:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_capecitabine/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Blesch_2003` / `Blesch_2003::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 23:56 UTC</sub>
