<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;cladribine&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/&quot;},{&quot;label&quot;:&quot;Savic_2017 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cladribine_Lu2024_reference&quot;,&quot;label&quot;:&quot;Lu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lu2024_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cladribine_Lindemalm2005_reference&quot;,&quot;label&quot;:&quot;Lindemalm_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cladribine/Cladribine_Lindemalm2005_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# cladribine — `Cladribine_Savic2017_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span>

> This record was reviewed on 2026-10-05 09:25 UTC (Rejected), but the paper was screened again on 2026-10-07 16:37 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. The cladribine record mixes absolute parameters (CLR 3.52 L/h, CLNR 23.4 L/h, V1 44.0 L) with bioavailability-adjusted ones (V1/F 365 L, apparent hepatic CL 653 L/h) despite Fab 0.456, so apparent-parameter coherence is violated by a double correction and the model was rejected.

<div class="pk-model-meta" hidden drug="cladribine" model-id="Cladribine_Savic2017_reference" status="rejected" stale="true" population="adults with multiple sclerosis" measured-compound="cladribine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Savic RM, Novakovic AM, Ekblom M, Munafo A, Karlsson MO. Population Pharmacokinetics of Cladribine in Patients with Multiple Sclerosis. Clinical pharmacokinetics 56(10):1245–1253 (2017).
  ·  DOI: [10.1007/s40262-017-0516-6](https://doi.org/10.1007/s40262-017-0516-6)

## Population and dosing

**Population:** adults with multiple sclerosis · condition multiple sclerosis · age group adult · n = &gt; 173.

**Dosing:** 3, 10 mg, oral, iv, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 14 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CLR coefficientb (typical patient with CLCR = 6.31), L/hc | CL | 3.52 | μg/h | 9.26 |  |
| CLNR, L/h | CLNR | 23.4 | L/h | 9.58 | 0.00574 (64.41% RSE) |
| Central volume, L | V1 | 44.0 | L | 22.77 |  |
| Intercompartmental Q3, L/h | Q | 14.3 | L/h | 7.73 |  |
| Intercompartmental Q4, L/h | Q2 | 53.7 | L/h | 19.06 |  |
| Peripheral volume V3, L | V2 | 347 | L | 6.07 |  |
| Peripheral volume V4, L | V3 | 89.5 | L | 7.97 | 0.0365 (28.47% RSE) |
| Absorption rate constant, h−1 | kabs | 1.08 | h−1 | 21.14 | 0.102 (62.53% RSE) |
| Bioavailability | Fab | 0.456 |  | 7.03 |  |
| Mean transit time (fed state), h | MTT | 0.910 | h | 11.03 |  |
| Number of transit compartments | n_transit | 2.24 |  | 27.15 |  |
| CLR e (Vmax), μg/h | CL | 0.00280 | μg/h | 25.53 |  |
| Apparent hepatic CL, L/hf | CL/F | 653 | L/h | 10.64 |  |
| Apparent central volume V, Lf | V1/F | 365 | L | 13.27 |  |
| theta_q83_category | theta_q83_category | 0.319 |  | 12.41 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.921). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The cladribine record mixes absolute parameters (CLR 3.52 L/h, CLNR 23.4 L/h, V1 44.0 L) with bioavailability-adjusted ones (V1/F 365 L, apparent hepatic CL 653 L/h) despite Fab 0.456, so apparent-parameter coherence is violated by a double correction and the model was rejected.**

The record carries both a bioavailability fraction (Fab 0.456) and F-adjusted apparent parameters — V1/F of 365 L and apparent hepatic clearance of 653 L/h — alongside unadjusted parameters for the same molecule, V1 of 44.0 L, renal clearance of 3.52 L/h and non-renal clearance of 23.4 L/h. Applying the bioavailability correction on top of parameters already expressed with it double-corrects the cladribine disposition, which is the coherence failure cited for rejection. No other failed checks or inconclusive comparisons are reported. Extracted — cladribine: CLR 3.52, CLNR 23.4, V1 44, Q3 14.3, Q 53.7, V3 347, kabs 1.08, Fab 0.456, … (+6).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of clr e (km): this record has none, the second reading 0.0114; it also differs on 2 more fields. That field does not shape the model.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CLR coefficientb (typical patient with CLCR = 6.31), L/hc | `Q22` · CL | 3.52 | μg/h |  |  | µg/h | 9.26 | exact (1) | Tab4:row2:col1, Tab4:row2:col2 |  |
| CLNR, L/h | `Q79` · CLNR | 23.4 | L/h | 6.5e-06 | m3/s | l/h | 9.58 | exact (1) | Tab4:row3:col1, Tab4:row3:col2 | 0.00574 (64.41% RSE) |
| Central volume, L | `Q63` · V1 | 44.0 | L | 0.044 | m3 | l | 22.77 | exact (1) | Tab4:row4:col1, Tab4:row4:col2 |  |
| Intercompartmental Q3, L/h | `Q30` · Q | 14.3 | L/h | 3.972e-06 | m3/s | l/h | 7.73 | exact (1) | Tab4:row5:col1, Tab4:row5:col2 |  |
| Intercompartmental Q4, L/h | `Q99` · Q2 | 53.7 | L/h | 1.492e-05 | m3/s | l/h | 19.06 | exact (1) | Tab4:row6:col1, Tab4:row6:col2 |  |
| Peripheral volume V3, L | `Q64` · V2 | 347 | L | 0.347 | m3 | l | 6.07 | exact (1) | Tab4:row7:col1, Tab4:row7:col2 |  |
| Peripheral volume V4, L | `Q77` · V3 | 89.5 | L | 0.0895 | m3 | l | 7.97 | exact (1) | Tab4:row8:col1, Tab4:row8:col2 | 0.0365 (28.47% RSE) |
| Absorption rate constant, h−1 | `Q49` · kabs | 1.08 | h−1 | 0.0003 | 1/s | 1/h | 21.14 | exact (1) | Tab4:row9:col1, Tab4:row9:col2 | 0.102 (62.53% RSE) |
| Bioavailability | `Q40` · Fab | 0.456 |  |  |  |  | 7.03 | exact (1) | Tab4:row11:col1, Tab4:row11:col2 |  |
| Mean transit time (fed state), h | `Q81` · MTT | 0.910 | h |  |  | h | 11.03 | llm_confirmed (0.6) | Tab4:row14:col1, Tab4:row14:col2 |  |
| Number of transit compartments | `Q311` · n_transit | 2.24 |  |  |  |  | 27.15 | exact (1) | Tab4:row15:col1, Tab4:row15:col2 |  |
| CLR e (Vmax), μg/h | `Q22` · CL | 0.00280 | μg/h |  |  | µg/h | 25.53 | exact (1) | Tab4:row29:col1, Tab4:row29:col2 |  |
| Apparent hepatic CL, L/hf | `Q27` · CL/F | 653 | L/h | 0.0001814 | m3/s | L/h | 10.64 | exact (1) | Tab4:row31:col1, Tab4:row31:col2 |  |
| Apparent central volume V, Lf | `Q290` · V1/F | 365 | L | 0.365 | m3 | L | 13.27 | exact (1) | Tab4:row32:col1, Tab4:row32:col2 |  |
| theta_q83_category | `Q900` · theta_q83_category | 0.319 |  |  |  |  | 12.41 |  | Tab4:row13:col1, Tab4:row13:col2 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q49 ('Absorption rate constant (unknown/fed state), h−1', value '1.03') — already have one for this compound
- dropped duplicate Q79 ('Fold increase in CLNR in the presence of IFNβ-1a', value '1.21') — already have one for this compound
- unit_dimension_mismatch: 'CLR e (Vmax), μg/h' → Q22 (unit '[mass] / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'CLR e (Km), ng/L' → Q22 (unit '[mass] / [length] ** 3' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q22 ('CLR e (Km), ng/L', value '0.0114') — already have one for this compound
- unit inherited for CL (Q22): 'μg/h' from a same-Q-code sibling (this row's label had no unit)
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- implicit units: 'Apparent hepatic CL, L/hf' → L/h (from the paper text: "The text states: 'Apparent CLNR and volume of distribution for CAde were found to be 653 L/h and 365 L, respectively.' T")
- implicit units: 'Apparent central volume V, Lf' → L (from the paper text: "The text states: 'Apparent CLNR and volume of distribution for CAde were found to be 653 L/h and 365 L, respectively.' T")
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=cladribine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 3, metabolites [1]
- status held at route_to_review — not promoted
- row roles: 2 per-group rows of cladribine absorption_rate_constant but 0 reference group(s) — kept as printed
- row roles: 4 per-group rows of cladribine residual_error but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=compartmental; 32/32 row label(s) assigned, 30 linked by role; re-tagged cladribine→parent ×54, cladribine→2-chloroadenine ×12
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- LLM selected parameter table(s) 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.921 (35/38 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[clr e (km)]` |  | 0.0114 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fold increase in clnr in the presence of ifnβ-1a]` |  | 1.21 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 14 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | fail | [mass] / [time] | μg/h | ['Tab4:row29:col1', 'Tab4:row29:col2'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab4:row31:col1', 'Tab4:row31:col2'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['Tab4:row32:col1', 'Tab4:row32:col2'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tab4:row5:col1', 'Tab4:row5:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tab4:row9:col1', 'Tab4:row9:col2'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tab4:row4:col1', 'Tab4:row4:col2'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tab4:row7:col1', 'Tab4:row7:col2'] |
| C5_dimension_Q77 | pass | [length] ** 3 |  | ['Tab4:row8:col1', 'Tab4:row8:col2'] |
| C5_dimension_Q79 | pass | [length] ** 3 / [time] |  | ['Tab4:row3:col1', 'Tab4:row3:col2'] |
| C5_dimension_Q99 | pass | [length] ** 3 / [time] |  | ['Tab4:row6:col1', 'Tab4:row6:col2'] |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | μg/h | ['Tab4:row2:col1', 'Tab4:row2:col2'] |
| C7_apparent_coherence | fail | F==1, Fm==1, no molar corr. | absolute F=0.456 with apparent parameterization |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 653 L/h | ['Tab4:row31:col1', 'Tab4:row31:col2'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 365 L | ['Tab4:row32:col1', 'Tab4:row32:col2'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 44 L | ['Tab4:row4:col1', 'Tab4:row4:col2'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 347 L | ['Tab4:row7:col1', 'Tab4:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcladribine%5D%20Cladribine_Savic2017_reference&body=Drug%3A%20cladribine%0ARecord%3A%20Cladribine_Savic2017_reference%0APaper%3A%20Savic_2017%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cladribine/Cladribine_Savic2017_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 16:37 UTC</sub>
