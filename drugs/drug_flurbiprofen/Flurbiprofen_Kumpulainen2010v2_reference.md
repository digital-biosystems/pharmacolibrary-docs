<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;flurbiprofen&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/&quot;},{&quot;label&quot;:&quot;Kumpulainen_2010_2 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Flurbiprofen_Aarons1991_reference&quot;,&quot;label&quot;:&quot;Aarons_1991_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_flurbiprofen/Flurbiprofen_Aarons1991_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# flurbiprofen — `Flurbiprofen_Kumpulainen2010v2_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-09-28 14:38 UTC (Rejected), but the paper was screened again on 2026-10-07 14:37 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The flurbiprofen record was rejected because structural parameters carry dimensionally wrong units — e.g. the absorption rate constant kabs is reported as 2.5 l h⁻¹ — and units like 'Bootstrap' and 'WT/70' could not be converted to SI.

<div class="pk-model-meta" hidden drug="flurbiprofen" model-id="Flurbiprofen_Kumpulainen2010v2_reference" status="rejected" stale="true" population="children aged 3 months to 13 years" measured-compound="flurbiprofen" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Kumpulainen E, Välitalo P, Kokki M, Lehtonen M, Hooker A, Ranta VP et al. Plasma and cerebrospinal fluid pharmacokinetics of flurbiprofen in children. British journal of clinical pharmacology 70(4):557–566 (2010).
  ·  DOI: [10.1111/j.1365-2125.2010.03720.x](https://doi.org/10.1111/j.1365-2125.2010.03720.x)

## Population and dosing

**Population:** children aged 3 months to 13 years · condition healthy · age group child · n = ? The text says '64 healthy children', but n_subjects expects an integer..

**Dosing:** 63, 70 mg, oral, iv, single.

**Dosed compound ≠ measured compound:** dosed flurbiprofen axetil; flurbiprofen, measured flurbiprofen.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 5 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| Bioavailability | Fab | 0.81 |  | 0.055 |  |
| Oral absorption rate constant (K12) (l h⁻¹) | k12 | 5.5 | l h⁻¹ | 0.24 |  |
| Lag time, oral absorption (h) | tlag | 0.11 | h | 0.16 |  |
| i.v. absorption rate constant (K42) (l h⁻¹) | kabs | 29 | l h⁻¹ | 0.32 |  |
| Protein-free fraction | fu | 0.00031 |  | 0.043 |  |
| QCSF (l h⁻¹) | Q | 0.12 | l h⁻¹ | 0.27 | 0.81 (0.40% RSE) |
| Uptake to CSF (UPTK) | kuptake | 6.8 | UPTK | 0.070 |  |
| theta_q22_wt_power | theta_q22_wt_power | 0.96 |  | 0.057 |  |
| theta_q63_wt_power | theta_q63_wt_power | 3.6 |  | 0.11 |  |
| theta_q99_wt_power | theta_q99_wt_power | 1.5 |  | 0.39 |  |
| theta_q_wt_power | theta_q_wt_power | 1.8 |  | 0.20 |  |
| theta_q63_wt_power | theta_q63_wt_power | 0.18 |  | 0.30 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.759). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The flurbiprofen record was rejected because structural parameters carry dimensionally wrong units — e.g. the absorption rate constant kabs is reported as 2.5 l h⁻¹ — and units like 'Bootstrap' and 'WT/70' could not be converted to SI.**

The dimension check failed on structural parameters: kabs, an absorption rate constant, is given in l h⁻¹, and several parameters (CL 0.83, fu 0.00023, V2 0.19, sigma 0.11) carry the unit 'Bootstrap', which is not a physical unit and could not be expressed in SI, so no SI values were available. Volumes are reported only as allometric scaling factors (× WT/70) rather than in litres. A second reader also disagreed on the dosed compound (flurbiprofen axetil versus flurbiprofen) and on a deep peripheral volume parameter identifier, and noted a parameter (uptake to CSF, 6.0) absent from this record. Extracted — flurbiprofen: kabs 2.5 l h⁻¹, Fab 0.045 h, CL 0.83 Bootstrap, V1 2.6 WT/70, Q2 0.58 WT/70, Q 1 WT/70, Vss 0.097 WT/70, fu 0.00023 Bootstrap, … (+2).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has flurbiprofen axetil; flurbiprofen, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| Bioavailability | `Q40` · Fab | 0.81 |  |  |  |  | 0.055 | exact (1) | Kumpulainen_2010_2_table_p6_1:row0:col1, Kumpulainen_2010_2_table_p6_1:row0:col2, Kumpulainen_2010_2_table_p6_1:row0:col3 |  |
| Oral absorption rate constant (K12) (l h⁻¹) | `Q301` · k12 | 5.5 | l h⁻¹ |  |  | l/h | 0.24 | llm_corrected (0.6) | Kumpulainen_2010_2_table_p6_1:row1:col1, Kumpulainen_2010_2_table_p6_1:row1:col2, Kumpulainen_2010_2_table_p6_1:row1:col3 |  |
| Lag time, oral absorption (h) | `Q83` · tlag | 0.11 | h | 396 | s | h | 0.16 | llm_corrected (0.6) | Kumpulainen_2010_2_table_p6_1:row2:col1, Kumpulainen_2010_2_table_p6_1:row2:col2, Kumpulainen_2010_2_table_p6_1:row2:col3 |  |
| i.v. absorption rate constant (K42) (l h⁻¹) | `Q49` · kabs | 29 | l h⁻¹ |  |  | l/h | 0.32 | llm_confirmed (0.6) | Kumpulainen_2010_2_table_p6_1:row3:col1, Kumpulainen_2010_2_table_p6_1:row3:col2, Kumpulainen_2010_2_table_p6_1:row3:col3 |  |
| Protein-free fraction | `Q46` · fu | 0.00031 |  |  |  |  | 0.043 | llm_confirmed (0.6) | Kumpulainen_2010_2_table_p6_1:row10:col1, Kumpulainen_2010_2_table_p6_1:row10:col2, Kumpulainen_2010_2_table_p6_1:row10:col3 |  |
| QCSF (l h⁻¹) | `Q30` · Q | 0.12 | l h⁻¹ | 3.333e-08 | m3/s | l/h | 0.27 | llm (0.6) | Kumpulainen_2010_2_table_p6_1:row11:col1, Kumpulainen_2010_2_table_p6_1:row11:col2, Kumpulainen_2010_2_table_p6_1:row11:col3 | 0.81 (0.40% RSE) |
| Uptake to CSF (UPTK) | `Q349` · kuptake | 6.8 | UPTK |  |  | uptk | 0.070 | exact (1) | Kumpulainen_2010_2_table_p6_1:row12:col1, Kumpulainen_2010_2_table_p6_1:row12:col2, Kumpulainen_2010_2_table_p6_1:row12:col3 |  |
| theta_q22_wt_power | `Q900` · theta_q22_wt_power | 0.96 |  |  |  |  | 0.057 |  | Kumpulainen_2010_2_table_p6_1:row4:col1, Kumpulainen_2010_2_table_p6_1:row4:col2, Kumpulainen_2010_2_table_p6_1:row4:col3 |  |
| theta_q63_wt_power | `Q900` · theta_q63_wt_power | 3.6 |  |  |  |  | 0.11 |  | Kumpulainen_2010_2_table_p6_1:row5:col1, Kumpulainen_2010_2_table_p6_1:row5:col2, Kumpulainen_2010_2_table_p6_1:row5:col3 |  |
| theta_q99_wt_power | `Q900` · theta_q99_wt_power | 1.5 |  |  |  |  | 0.39 |  | Kumpulainen_2010_2_table_p6_1:row6:col1, Kumpulainen_2010_2_table_p6_1:row6:col2, Kumpulainen_2010_2_table_p6_1:row6:col3 |  |
| theta_q_wt_power | `Q900` · theta_q_wt_power | 1.8 |  |  |  |  | 0.20 |  | Kumpulainen_2010_2_table_p6_1:row7:col1, Kumpulainen_2010_2_table_p6_1:row7:col2, Kumpulainen_2010_2_table_p6_1:row7:col3 |  |
| theta_q63_wt_power | `Q900` · theta_q63_wt_power | 0.18 |  |  |  |  | 0.30 |  | Kumpulainen_2010_2_table_p6_1:row8:col1, Kumpulainen_2010_2_table_p6_1:row8:col2, Kumpulainen_2010_2_table_p6_1:row8:col3 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Oral absorption rate constant (K12) (l h⁻¹)' → Q301 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- unit_dimension_mismatch: 'i.v. absorption rate constant (K42) (l h⁻¹)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Q (deep peripheral) () × (WT/70)' — extend the ontology if this is a real PK parameter (source ['Kumpulainen_2010_2_table_p6_1:row9:col1', 'Kumpulainen_2010_2_table_p6_1:row9:col2', 'Kumpulainen_2010_2_table_p6_1:row9:col3'])
- unit_dimension_unknown: 'UPTK' (kuptake)
- covariate effect for Q22 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q63 has no base parameter row (kept as unattached equation-variable)
- covariate effect for Q99 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=flurbiprofen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at route_to_review — not promoted
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.759 (22/29 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['flurbiprofen axetil', 'flurbiprofen', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[qcsf].covariate_forms` | ['power'] | ['power', 'power'] | mismatch |
| `gpt-oss-120b` | `parameters[theta_q61_wt_power]` |  | 0.18 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q64_wt_power]` |  | 1.5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[theta_q99_wt_power]` | 1.5 |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | flurbiprofen axetil; flurbiprofen | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | flurbiprofen | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Kumpulainen_2010_2_table_p6_1:row11:col1', 'Kumpulainen_2010_2_table_p6_1:row11:col2', 'Kumpulainen_2010_2_table_p6_1:row11:col3'] |
| C5_dimension_Q301 | fail | [length] ** 3 / [time] | l h⁻¹ | ['Kumpulainen_2010_2_table_p6_1:row1:col1', 'Kumpulainen_2010_2_table_p6_1:row1:col2', 'Kumpulainen_2010_2_table_p6_1:row1:col3'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l h⁻¹ | ['Kumpulainen_2010_2_table_p6_1:row3:col1', 'Kumpulainen_2010_2_table_p6_1:row3:col2', 'Kumpulainen_2010_2_table_p6_1:row3:col3'] |
| C5_dimension_Q83 | pass | [time] |  | ['Kumpulainen_2010_2_table_p6_1:row2:col1', 'Kumpulainen_2010_2_table_p6_1:row2:col2', 'Kumpulainen_2010_2_table_p6_1:row2:col3'] |
| C5_unit_missing_Q349 | fail | 1 / [time] | UPTK | ['Kumpulainen_2010_2_table_p6_1:row12:col1', 'Kumpulainen_2010_2_table_p6_1:row12:col2', 'Kumpulainen_2010_2_table_p6_1:row12:col3'] |
| C8_topology | pass |  |  |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bflurbiprofen%5D%20Flurbiprofen_Kumpulainen2010v2_reference&body=Drug%3A%20flurbiprofen%0ARecord%3A%20Flurbiprofen_Kumpulainen2010v2_reference%0APaper%3A%20Kumpulainen_2010_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_flurbiprofen/Flurbiprofen_Kumpulainen2010v2_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 14:37 UTC</sub>
