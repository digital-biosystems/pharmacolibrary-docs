<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;trimethoprim&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/&quot;},{&quot;label&quot;:&quot;Boulanger_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trimethoprim_Ekstrand2026_reference&quot;,&quot;label&quot;:&quot;Ekstrand_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Ekstrand2026_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trimethoprim_Tu1989_reference&quot;,&quot;label&quot;:&quot;Tu_1989_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trimethoprim/Trimethoprim_Tu1989_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# trimethoprim — `Trimethoprim_Boulanger2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.308). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (bird), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">bird</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: bird.** This record comes from an animal study (bird), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The record was rejected because the trimethoprim metabolite compartment is unreachable from the dose, and the bioavailability value has a non-standard unit.**

The model structure defines an unknown link to the trimethoprim metabolite, making it an orphan compartment with no path from the dose. Additionally, the absolute bioavailability value of 99 was not expressed in standard international units, so it could not be converted to SI form. These structural and data issues resulted in the rejection of the model record. Extracted — trimethoprim: Fab 99, kabs 20.1 1/h, V 7.81 L/kg, CL 6 L/h/kg, CLmp 4.77, V1 40.7, CLnorm 23.1, t1/2β 2 h, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has trimethoprim, the second reading unknown; it also differs on 8 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

## Citation
Boulanger M et al., Pharmacokinetic modeling of sulfamethox…, Poultry science (2024)
  ·  DOI: [10.1016/j.psj.2024.104200](https://doi.org/10.1016/j.psj.2024.104200)

<div class="pk-model-meta" hidden drug="trimethoprim" model-id="Trimethoprim_Boulanger2024_reference" status="rejected" stale="false" population="broilers" measured-compound="trimethoprim" parameterization="mechanistic" topology="general_linear"></div>

**Model structure:** general linear; no model was built for this record.  
**Parameters:** 9 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| F_SDZ | `Q40` · Fab | 99 | not captured | not captured | not captured | not captured | llm (0.6) | tbl0001:row2:col2 | — | not captured |
| ka_SDZ | `Q49` · kabs | 20.10 | 1/h | 0.005583333333333333 | 1/h | not captured | llm (0.6) | tbl0001:row5:col2, tbl0001:row5:col3 | — | not captured |
| Vd_SDZ | `Q61` · V | 7.81 | L/kg | 0.5467 | L | not captured | llm (0.6) | tbl0001:row8:col2, tbl0001:row8:col3 | — | not captured |
| CL_SDZ | `Q22` · CL | 6.00 | L/h/kg | 0.00011666666666666667 | L/h | not captured | llm (0.6) | tbl0001:row11:col2, tbl0001:row11:col3 | — | not captured |
| CL_TMP | `Q371` · CLmp | 4.77 | not captured | not captured | not captured | not captured | llm_confirmed (0.6) | tbl0001:row13:col2, tbl0001:row13:col3 | — | not captured |
| β_Vd_SDZ_BW | `Q63` · V1 | 40.70 | not captured | not captured | not captured | not captured | llm (0.6) | tbl0001:row14:col2, tbl0001:row14:col3 | — | not captured |
| β_CL_TMP_BW | `Q354` · CLnorm | 23.10 | not captured | not captured | not captured | not captured | llm (0.6) | tbl0001:row17:col2, tbl0001:row17:col3 | — | not captured |
| T1/2β SDZ (h) | `Q60` · t1/2β | 2.00 | h | 7200.0 | [h] | not captured | llm_confirmed (0.6) | Boulanger_2024_table_2:row2:col1, Boulanger_2024_table_2:row2:col2, Boulanger_2024_table_2:row2:col3, Boulanger_2024_table_2:row2:col4 | — | not captured |
| AUC∞ SDZ (h × µg/mL) | `Q17` · AUC∞ | 187.00 | h × µg/mL | not captured | [[h] · [µg]] / [ml] | not captured | llm_confirmed (0.6) | Boulanger_2024_table_2:row5:col1, Boulanger_2024_table_2:row5:col2, Boulanger_2024_table_2:row5:col3, Boulanger_2024_table_2:row5:col4 | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q40 ('F_SMX', value '99') — already have one for this compound
- dropped unlinked row (NIL): 'F_TMP' — extend the ontology if this is a real PK parameter (source ['tbl0001:row4:col2'])
- dropped duplicate Q49 ('ka_SMX', value '16.40') — already have one for this compound
- dropped duplicate Q49 ('ka_TMP', value '11.30') — already have one for this compound
- dropped duplicate Q61 ('Vd_SMX', value '10.10') — already have one for this compound
- dropped duplicate Q61 ('Vd_TMP', value '5.42') — already have one for this compound
- dropped unlinked row (NIL): 'CL_SMX' — extend the ontology if this is a real PK parameter (source ['tbl0001:row12:col2', 'tbl0001:row12:col3'])
- dropped duplicate Q61 ('β_Vd_SMX_BW', value '46.40') — already have one for this compound
- dropped duplicate Q22 ('β_CL_SDZ_BW', value '41.40') — already have one for this compound
- dropped duplicate Q60 ('T1/2β SMX (h)', value '2.80') — already have one for this compound
- dropped duplicate Q60 ('T1/2β TMP (h)', value '1.50') — already have one for this compound
- unit_dimension_unknown: 'h × µg/mL' (AUC∞)
- dropped duplicate Q17 ('AUC∞ SMX (h × µg/mL)', value '204.00') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ TMP (h × µg/mL)', value '4.00') — already have one for this compound
- implicit units: 'ka_SDZ' → 1/h (from the popPK convention: 'Absorption rate constants are first-order rate constants. The paper does not explicitly state the unit for the table ent')
- implicit units: 'Vd_SDZ' → L/kg (from the paper text: "The paper text states: 'higher volume of distribution (0.51 L/kg for SDZ...)' and 'Vd of SMX and SDZ (0.62 L/kg and 0.51")
- implicit units: 'CL_SDZ' → L/h/kg (from the paper text: "The paper text states: 'The clearance of SMX and SDZ were found to be similar (around 0.15 L/h/kg)'. While the table val")
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=trimethoprim
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell tbl0001:row2:col3 = '&lt;0.1'
- unparsed cell tbl0001:row3:col3 = '&lt;0.1'
- unparsed cell tbl0001:row4:col3 = '&lt;0.1'
- unparsed cell tbl0001:row5:col1 = 'h−1'
- unparsed cell tbl0001:row6:col1 = 'h−1'
- unparsed cell tbl0001:row7:col1 = 'h−1'
- companion parameter table 2 transcribed (24 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.308 (4/13 fields) | 9 |

<details><summary>9 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['unknown', 'unknown', 'unknown']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl_sdz].value` | 6.00 | 0.15 | mismatch |
| `gpt-oss-120b` | `parameters[cl_tmp]` | 4.77 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka_sdz].value` | 20.10 | 0.71 | mismatch |
| `gpt-oss-120b` | `parameters[vd_sdz].value` | 7.81 | 0.51 | mismatch |
| `gpt-oss-120b` | `parameters[β_cl_tmp_bw]` | 23.10 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[β_vd_sdz_bw]` | 40.70 | not captured | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | trimethoprim | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | trimethoprim | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 9 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C5_dimension_Q49 | pass | 1 / [time] | not captured | not captured | not captured | ['tbl0001:row5:col2', 'tbl0001:row5:col3'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['Boulanger_2024_table_2:row2:col1', 'Boulanger_2024_table_2:row2:col2', 'Boulanger_2024_table_2:row2:col3', 'Boulanger_2024_table_2:row2:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['tbl0001:row8:col2', 'tbl0001:row8:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | h × µg/mL | not captured | not captured | ['Boulanger_2024_table_2:row5:col1', 'Boulanger_2024_table_2:row5:col2', 'Boulanger_2024_table_2:row5:col3', 'Boulanger_2024_table_2:row5:col4'] |
| C5_unit_missing_Q354 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl0001:row17:col2', 'tbl0001:row17:col3'] |
| C5_unit_missing_Q371 | fail | [length] ** 3 / [time] | not captured | not captured | not captured | ['tbl0001:row13:col2', 'tbl0001:row13:col3'] |
| C5_unit_missing_Q63 | fail | [length] ** 3 | not captured | not captured | not captured | ['tbl0001:row14:col2', 'tbl0001:row14:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 6.0 | not captured | not captured | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown'] | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 420 L/h | not captured | not captured | ['tbl0001:row11:col2', 'tbl0001:row11:col3'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 547 L | not captured | not captured | ['tbl0001:row8:col2', 'tbl0001:row8:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_trimethoprim/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Boulanger_2024` / `Boulanger_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 11:15 UTC</sub>
