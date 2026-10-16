<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01A&quot;,&quot;href&quot;:&quot;atc/N01A.md&quot;},{&quot;label&quot;:&quot;fentanyl&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/&quot;},{&quot;label&quot;:&quot;Reed_2024 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fentanyl_Cavallaro2026_reference&quot;,&quot;label&quot;:&quot;Cavallaro_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Cavallaro2026_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Davis1986_reference&quot;,&quot;label&quot;:&quot;Davis_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Davis1986_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Introna2026_reference&quot;,&quot;label&quot;:&quot;Introna_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Introna2026_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Fentanyl_Koehntop1986_reference&quot;,&quot;label&quot;:&quot;Koehntop_1986_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fentanyl/Fentanyl_Koehntop1986_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# fentanyl — `Fentanyl_Reed2024_reference`

> ## <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.852), gpt-oss:120b (partly confirmed, agreement 0.96). Primary extraction retained.">cross-check: disputed 0/2</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

> **Species: horse.** This record comes from an animal study (horse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

**Model:** No model was generated from this record.

### Reviewer guidance

**The fentanyl record was rejected because its two-compartment structure leaves the third peripheral compartment (V3 = 0.351 L/kg, t1/2γ = 1.85 h) unlinked, and the AUClast value 5243.4 h*pg/ml could not be converted to SI units.**

The model structure is stated as two compartments, yet the record carries three-compartment parameters — V3 (0.351 L/kg) and the gamma half-life t1/2γ (1.85 h) — so that peripheral compartment has no path from the dose. Additionally, the reported AUClast (5243.4 h*pg/ml) uses a unit that could not be converted to SI, so the parameter was passed on without an SI value. A second reader also extracted different values for two parameters (0.104 and 6613.1) where this record has none, indicating unresolved extraction disagreement. Extracted — fentanyl: λ1 17.8, kel 2.12, t1/2α 0.039 h, t1/2β 0.327 h, t1/2γ 1.85 h, AUClast 5.24e+03 h*pg/ml, CL 722 ml/h/kg, V1 0.191 L/kg, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has fentanyl, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

> ⚠️ **STALE** — review status `rejected` (reviewed 2026-09-28 14:38:00.255991+00:00) predates the upstream re-run (2026-10-07 04:59:13.795078+00:00). Current validate status: `rejected`.

## Citation
Reed RA et al., The pharmacokinetics and pharmacodynami…, Frontiers in pain research… (2024)
  ·  DOI: [10.3389/fpain.2024.1373759](https://doi.org/10.3389/fpain.2024.1373759)

<div class="pk-model-meta" hidden drug="fentanyl" model-id="Fentanyl_Reed2024_reference" status="rejected" stale="true" population="healthy adult horses" measured-compound="fentanyl" parameterization="mechanistic" topology="2C"></div>

**Model structure:** 2-compartment; no model was built for this record.  
**Parameters:** 11 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `rejected`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| tvAlpha (1/h) | `Q67` · λ1 | 17.8 | not captured | not captured | not captured | 34.8 | tv_prefix (0.95) | T2:row4:col1, T2:row4:col2 | — | 0.12 (None% RSE) |
| tvBeta (1/h) | `Q47` · kel | 2.12 | not captured | not captured | not captured | 15.4 | tv_prefix (0.95) | T2:row5:col1, T2:row5:col2 | — | 0.004 (None% RSE) |
| t1/2α (h) | `Q59` · t1/2α | 0.039 | h | 140.4 | [h] | 34.8 | exact (1.0) | T2:row7:col1, T2:row7:col2 | — | not captured |
| t1/2β (h) | `Q60` · t1/2β | 0.327 | h | 1177.2 | [h] | 15.4 | exact (1.0) | T2:row8:col1, T2:row8:col2 | — | not captured |
| t1/2γ (h) | `Q89` · t1/2γ | 1.85 | h | 6660.0 | [h] | 12.5 | exact (1.0) | T2:row9:col1, T2:row9:col2 | — | not captured |
| AUClast (h*pg/ml) | `Q74` · AUClast | 5243.4 | h*pg/ml | not captured | [[h] · [pg]] / [ml] | 5.39 | exact (1.0) | T2:row10:col1, T2:row10:col2 | — | not captured |
| Cl (ml/h/kg) | `Q22` · CL | 722.4 | ml/h/kg | 1.4046666666666667e-05 | [ml] / [[h] · [kg]] | 5.39 | exact (1.0) | T2:row11:col1, T2:row11:col2 | — | not captured |
| V1 (L/kg) | `Q63` · V1 | 0.191 | L/kg | 0.01337 | [l] / [kg] | 17.1 | exact (1.0) | T2:row12:col1, T2:row12:col2 | — | not captured |
| V2 (L/kg) | `Q64` · V2 | 0.185 | L/kg | 0.01295 | [l] / [kg] | 10.1 | exact (1.0) | T2:row13:col1, T2:row13:col2 | — | not captured |
| V3 (L/kg) | `Q77` · V3 | 0.351 | L/kg | 0.024569999999999998 | [l] / [kg] | 21.3 | exact (1.0) | T2:row14:col1, T2:row14:col2 | — | not captured |
| t1pp ranged from | `Q83` · tlag | 15.0 | min | 900.0 | h | not captured | review_gapfill (0.7) | Andersen_1986:review | — | not captured |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>covariates</code></td><td>Parameter-specific covariate effects.</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'A' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'B' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'C' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Alpha' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Beta' routed out of structural estimates ('Between subject variability (%CV)')
- table section iiv: 'Gamma' routed out of structural estimates ('Between subject variability (%CV)')
- column 'target dose(mg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'dose absorbed (mg)' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'tvA (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row1:col1', 'T2:row1:col2'])
- dropped unlinked row (NIL): 'tvB (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col2'])
- dropped unlinked row (NIL): 'tvC (pg/ml)' — extend the ontology if this is a real PK parameter (source ['T2:row3:col1', 'T2:row3:col2'])
- dropped PD-category row 'tvGamma (1/h)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['T2:row6:col1', 'T2:row6:col2'])
- routed 'stdev0' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'LDF' — extend the ontology if this is a real PK parameter (source ['Reed_2024_table_3:row0:col1', 'Reed_2024_table_3:row0:col2', 'Reed_2024_table_3:row0:col3'])
- dropped unlinked row (NIL): 'MDF' — extend the ontology if this is a real PK parameter (source ['Reed_2024_table_3:row1:col1', 'Reed_2024_table_3:row1:col2', 'Reed_2024_table_3:row1:col3'])
- dropped unlinked row (NIL): 'HDF' — extend the ontology if this is a real PK parameter (source ['Reed_2024_table_3:row2:col1', 'Reed_2024_table_3:row2:col2', 'Reed_2024_table_3:row2:col3'])
- dropped value-less row: 'tvA'
- dropped value-less row: 'tvB'
- dropped value-less row: 'tvC'
- dropped value-less row: 'tvalpha'
- dropped value-less row: 'tvbeta'
- dropped value-less row: 'tvgamma'
- dropped value-less row: 'V1'
- dropped value-less row: 'V2'
- dropped value-less row: 'V3'
- dropped value-less row: 'Vss'
- dropped value-less row: 't1/2α'
- dropped value-less row: 't1/2β'
- dropped value-less row: 't1/2γ'
- dropped value-less row: 'AUClast'
- dropped value-less row: 'Cl'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=fentanyl
- structure disagreement: deterministic 2C vs LLM 3C — review compartment count
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it
- gap-filled Q83 (tlag) from Andersen_1986's review values (primary lacked it)

**Extraction notes:**
- unparsed cell T2:row20:col1 = '1.48 × 10−6'
- companion parameter table 3 transcribed (9 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  ·  0 of 2 readers agree  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.852 (23/27 fields) | 4 |
| `gpt-oss:120b` | partly confirmed | 0.96 (24/25 fields) | 1 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[t1pp ranged from]` | 15.0 | not captured | only_one_extracted |
| `gpt-oss-120b` | `parameters[tva]` | not captured | 12661.7 | only_one_extracted |
| `gpt-oss-120b` | `parameters[tvc]` | not captured | 528.6 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | fentanyl | unknown | mismatch |
| `gpt-oss:120b` | `parameters[hdf]` | not captured | 54.3 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 10 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |
| C5_dimension_Q59 | pass | [time] | not captured | not captured | not captured | ['T2:row7:col1', 'T2:row7:col2'] |
| C5_dimension_Q60 | pass | [time] | not captured | not captured | not captured | ['T2:row8:col1', 'T2:row8:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row12:col1', 'T2:row12:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row13:col1', 'T2:row13:col2'] |
| C5_dimension_Q74 | pass | [time] * [mass] / [length] ** 3 | not captured | not captured | not captured | ['T2:row10:col1', 'T2:row10:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 | not captured | not captured | not captured | ['T2:row14:col1', 'T2:row14:col2'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Andersen_1986:review'] |
| C5_dimension_Q89 | pass | [time] | not captured | not captured | not captured | ['T2:row9:col1', 'T2:row9:col2'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | not captured | not captured | not captured | ['T2:row5:col1', 'T2:row5:col2'] |
| C5_unit_missing_Q67 | fail | [mass] / [time] | not captured | not captured | not captured | ['T2:row4:col1', 'T2:row4:col2'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 722.4 | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |
| C8_topology | fail | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q22 | pass | clearance within physiological range | 50.6 L/h | not captured | not captured | ['T2:row11:col1', 'T2:row11:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 13.4 L | not captured | not captured | ['T2:row12:col1', 'T2:row12:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 12.9 L | not captured | not captured | ['T2:row13:col1', 'T2:row13:col2'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//home/vagrant/pharmacolibrary-dev/knowledgebase/drugs/drug_fentanyl/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Reed_2024` / `Reed_2024::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 04:59 UTC</sub>
