<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;canakinumab&quot;,&quot;href&quot;:&quot;drugs/drug_canakinumab/&quot;},{&quot;label&quot;:&quot;Ait-Oudhia_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Canakinumab_Huang2023_reference&quot;,&quot;label&quot;:&quot;Huang_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canakinumab/Canakinumab_Huang2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Canakinumab_Urien2013_reference&quot;,&quot;label&quot;:&quot;Urien_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_canakinumab/Canakinumab_Urien2013_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Krause_2014_Pflare&quot;,&quot;label&quot;:&quot;Krause_2014 \u00b7 Pflare&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_canakinumab/pd_Krause_2014_Pflare.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# canakinumab — `Canakinumab_AitOudhia2012_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.536). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** No model was generated from this record.

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (t1/2ka , KD and equation variable), so that value has no SI equivalent. Extracted — canakinumab: t1/2ka 0.266 day⁻¹, V 3.71 l, CL 0.104 l/day, Q 0.165 l/day, KD 0.38 nmol/l, kabs 0.38 h-1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which molecule was measured: this record has canakinumab, the second reading unknown; it also differs on 12 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

## Citation
Ait-Oudhia S et al., Bridging Clinical Outcomes of Canakinum…, CPT: pharmacometrics & syst… (2012)
  ·  DOI: [10.1038/psp.2012.6](https://doi.org/10.1038/psp.2012.6)

<div class="pk-model-meta" hidden drug="canakinumab" model-id="Canakinumab_AitOudhia2012_reference" status="rejected" stale="false" population="adults with rheumatoid arthritis" measured-compound="canakinumab" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment; no model was built for this record.  
**Parameters:** 6 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| θ_ka (day⁻¹) | `Q95` · t1/2ka | 0.266 | day⁻¹ | not captured | [1] / [d] | 3 | llm (0.6) | Ait-Oudhia_2012_table_p4_1:row0:col2, Ait-Oudhia_2012_table_p4_1:row0:col3 | — | not captured |
| θ_Vc (l) | `Q61` · V | 3.71 | l | 0.00371 | [l] | 4 | llm (0.6) | Ait-Oudhia_2012_table_p4_1:row1:col2, Ait-Oudhia_2012_table_p4_1:row1:col3 | — | not captured |
| θ_CL and θ_CLDL (l/day) | `Q22` · CL | 0.104 | l/day | 1.2037037037037037e-09 | [l] / [d] | 5 | llm (0.6) | Ait-Oudhia_2012_table_p4_1:row3:col2, Ait-Oudhia_2012_table_p4_1:row3:col3 | — | not captured |
| θ_Q (l/day) | `Q30` · Q | 0.165 | l/day | 1.9097222222222222e-09 | [l] / [d] | 5 | llm (0.6) | Ait-Oudhia_2012_table_p4_1:row5:col2, Ait-Oudhia_2012_table_p4_1:row5:col3 | — | not captured |
| θ_Kd (nmol/l) | `Q331` · KD | 0.38 | nmol/l | not captured | [nM] / [l] | 8 | llm (0.6) | Ait-Oudhia_2012_table_p4_1:row6:col2, Ait-Oudhia_2012_table_p4_1:row6:col3 | — | not captured |
| θ_t (day) | `Q900` · equation variable | 55.9 | day | not captured | [d] | 0.89 | llm (0.6) | Ait-Oudhia_2012_table_p4_2:row8:col2 | — | not captured |
| Ka (h-1) | `Q49` · kabs | 0.38 | h-1 | 0.00010555555555555555 | 1/h | not captured | review_gapfill (0.7) | Urien_2013:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section residual_error: 'a₁ (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'b₁ (nmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'a₂ (%)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'b₂ (nmol/l)' routed out of structural estimates ('Residual variability')
- table section residual_error: 'a (%)' routed out of structural estimates ('Residual variability')
- unit_dimension_mismatch: 'θ_ka (day⁻¹)' → Q95 (unit '1 / [time]' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'θ_Vp (l)' — extend the ontology if this is a real PK parameter (source ['Ait-Oudhia_2012_table_p4_1:row2:col2', 'Ait-Oudhia_2012_table_p4_1:row2:col3'])
- dropped unlinked row (NIL): 'θ_CLL (l/day)' — extend the ontology if this is a real PK parameter (source ['Ait-Oudhia_2012_table_p4_1:row4:col2', 'Ait-Oudhia_2012_table_p4_1:row4:col3'])
- unit_dimension_mismatch: 'θ_Kd (nmol/l)' → Q331 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'θ_F (–)' — extend the ontology if this is a real PK parameter (source ['Ait-Oudhia_2012_table_p4_1:row7:col2', 'Ait-Oudhia_2012_table_p4_1:row7:col3'])
- dropped unlinked row (NIL): 'θ_CRPO (mg/l)' — extend the ontology if this is a real PK parameter (source ['Ait-Oudhia_2012_table_p4_2:row1:col2', 'Ait-Oudhia_2012_table_p4_2:row1:col3'])
- dropped PD-category row 'θ_out (day⁻¹)' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ait-Oudhia_2012_table_p4_2:row2:col2', 'Ait-Oudhia_2012_table_p4_2:row2:col3'])
- dropped unlinked row (NIL): 'θ_β (–)' — extend the ontology if this is a real PK parameter (source ['Ait-Oudhia_2012_table_p4_2:row3:col2', 'Ait-Oudhia_2012_table_p4_2:row3:col3'])
- dropped unlinked row (NIL): 'θ_γ (–)' — extend the ontology if this is a real PK parameter (source ['Ait-Oudhia_2012_table_p4_2:row4:col2', 'Ait-Oudhia_2012_table_p4_2:row4:col3'])
- dropped PD-category row 'θ_Emax (–)' → Q320 (Emax, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ait-Oudhia_2012_table_p4_2:row6:col2'])
- dropped PD-category row 'θ_EC50-IL-1β-free (pg/ml)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ait-Oudhia_2012_table_p4_2:row7:col2'])
- dropped unlinked row (NIL): 'θ_η (–)' — extend the ontology if this is a real PK parameter (source ['Ait-Oudhia_2012_table_p4_2:row11:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=canakinumab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'canakinumab' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Urien_2013's review values (primary lacked it)

**Extraction notes:**
- table Ait-Oudhia_2012_table_p4_2: unparsed_numeric_cell
- companion parameter table p4_2 transcribed (13 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.536 (15/28 fields) | 13 |

<details><summary>13 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cld]` | 0.174 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.38 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[vp]` | 2.71 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ_crpo]` | not captured | 8.44 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ_f]` | not captured | 0.667 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ_ka].parameter_id` | Q95 | Q49 | mismatch |
| `gpt-oss-120b` | `parameters[θ_kd].parameter_id` | Q1 | Q331 | mismatch |
| `gpt-oss-120b` | `parameters[θ_q]` | not captured | 0.165 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ_t]` | not captured | 55.9 | only_one_extracted |
| `gpt-oss-120b` | `parameters[θ_vp].parameter_id` | Q61 | Q64 | mismatch |
| `gpt-oss-120b` | `parameters[θ_β].parameter_id` | Q900 | Q47 | mismatch |
| `gpt-oss-120b` | `parameters[θ_γ]` | 1.92 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.primary_analyte` | canakinumab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 5 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row3:col2', 'Ait-Oudhia_2012_table_p4_1:row3:col3'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row5:col2', 'Ait-Oudhia_2012_table_p4_1:row5:col3'] |
| C5_dimension_Q331 | fail | [substance] / [length] ** 3 | nmol/l | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row6:col2', 'Ait-Oudhia_2012_table_p4_1:row6:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['Urien_2013:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row1:col2', 'Ait-Oudhia_2012_table_p4_1:row1:col3'] |
| C5_dimension_Q95 | fail | 1 / [time] | day⁻¹ | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row0:col2', 'Ait-Oudhia_2012_table_p4_1:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.104 | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row3:col2', 'Ait-Oudhia_2012_table_p4_1:row3:col3'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.00433 L/h | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row3:col2', 'Ait-Oudhia_2012_table_p4_1:row3:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 3.71 L | not captured | not captured | ['Ait-Oudhia_2012_table_p4_1:row1:col2', 'Ait-Oudhia_2012_table_p4_1:row1:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_canakinumab/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Ait-Oudhia_2012` / `Ait-Oudhia_2012::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-14 21:03 UTC</sub>
