<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;asparaginase&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/&quot;},{&quot;label&quot;:&quot;Lin_2023 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asparaginase_Borghorst2012_reference&quot;,&quot;label&quot;:&quot;Borghorst_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Borghorst2012_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asparaginase_Sassen2017_estimate&quot;,&quot;label&quot;:&quot;Sassen_2017_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Sassen2017_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Asparaginase_Sassen2017_median&quot;,&quot;label&quot;:&quot;Sassen_2017_median&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asparaginase/Asparaginase_Sassen2017_median.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# asparaginase — `Asparaginase_Lin2023_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter.

<div class="pk-model-meta" hidden drug="asparaginase" model-id="Asparaginase_Lin2023_reference" status="rejected" stale="false" population="patients with acute lymphoblastic leukemia/lymphoblastic lymphoma" measured-compound="serum asparaginase activity" parameterization="mechanistic" topology="1C"></div>

## Citation
Lin T, Whigham T, Fernando I, Choi MR, Wang Q, Silverman JA. Population pharmacokinetics of intramuscular recombinant Erwinia chrysanthemi asparaginase (JZP458) in patients with acute lymphoblastic leukemia. Clinical and translational science 16(5):898–909 (2023).
  ·  DOI: [10.1111/cts.13499](https://doi.org/10.1111/cts.13499)

## Population and dosing

**Population:** patients with acute lymphoblastic leukemia/lymphoblastic lymphoma · condition acute lymphoblastic leukemia/lymphoblastic lymphoma · age group mixed · n = &gt;=166.

**Dosing:** 25, 37.5, 50 mg/m2, im, multiple.

**Dosed compound ≠ measured compound:** dosed JZP458, measured serum asparaginase activity.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% | IIV |
|---|---|---|---|---|---|
| CL (mL/h) | CL | 146 | mL/h | 3.38 | 0.125 (13.8% RSE) |
| Central compartment V (mL) | V | 445 | mL | 7.85 |  |
| Absorption rate constant (l/h) | kabs | 0.0369 | l/h |  |  |
| Relative bioavailability (%) | Frel | 0.359 |  |  |  |
| black_african_american_race_on_cl | black_african_american_race_on_cl | 0.674 |  | 10.6 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.625). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter.**

A reported unit could not be converted (kabs), so that value has no SI equivalent. None of the extracted parameters is asparaginase's own; they describe JZP458. Extracted — JZP458: CL 146 mL/h, V 445 mL, kabs 0.0369 l/h, Frel 0.359.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has JZP458, the second reading unknown; it also differs on 5 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL (mL/h) | `Q22` · CL | 146 | mL/h | 4.056e-08 | m3/s | ml/h | 3.38 | exact (1) | cts13499-tbl-0002:row1:col2, cts13499-tbl-0002:row1:col4, cts13499-tbl-0002:row1:col5, cts13499-tbl-0002:row1:col6, cts13499-tbl-0002:row1:col7 | 0.125 (13.8% RSE) |
| Central compartment V (mL) | `Q61` · V | 445 | mL | 0.000445 | m3 | ml | 7.85 | llm (0.6) | cts13499-tbl-0002:row2:col2, cts13499-tbl-0002:row2:col4, cts13499-tbl-0002:row2:col5, cts13499-tbl-0002:row2:col6, cts13499-tbl-0002:row2:col7 |  |
| Absorption rate constant (l/h) | `Q49` · kabs | 0.0369 | l/h |  |  | l/h |  | exact (1) | cts13499-tbl-0002:row3:col2 |  |
| Relative bioavailability (%) | `Q87` · Frel | 0.359 |  |  |  |  |  | exact (1) | cts13499-tbl-0002:row5:col2 |  |
| black_african_american_race_on_cl | `Q900` · black_african_american_race_on_cl | 0.674 |  |  |  |  | 10.6 |  | cts13499-tbl-0002:row10:col2, cts13499-tbl-0002:row10:col4, cts13499-tbl-0002:row10:col5, cts13499-tbl-0002:row10:col6, cts13499-tbl-0002:row10:col7 |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'Absorption rate constant (l/h)' → Q49 (unit '[length] ** 3 / [time]' vs ontology '1 / [time]') — route to review
- dropped unlinked row (NIL): 'Zero‐order rate (IU/h)' — extend the ontology if this is a real PK parameter (source ['cts13499-tbl-0002:row4:col2'])
- dropped unlinked row (NIL): 'BSA on CL' — extend the ontology if this is a real PK parameter (source ['cts13499-tbl-0002:row6:col2', 'cts13499-tbl-0002:row6:col4', 'cts13499-tbl-0002:row6:col5', 'cts13499-tbl-0002:row6:col6', 'cts13499-tbl-0002:row6:col7'])
- dropped unlinked row (NIL): 'BSA on V' — extend the ontology if this is a real PK parameter (source ['cts13499-tbl-0002:row7:col2', 'cts13499-tbl-0002:row7:col4', 'cts13499-tbl-0002:row7:col5', 'cts13499-tbl-0002:row7:col6', 'cts13499-tbl-0002:row7:col7'])
- covariate level 'Black/African American race on CL' → Q900:black_african_american_race_on_cl = 0.674 (linear_fractional on Q22)
- dropped unlinked row (NIL): 'Disease subtype (T‐ALL) on CL' — extend the ontology if this is a real PK parameter (source ['cts13499-tbl-0002:row11:col2', 'cts13499-tbl-0002:row11:col4', 'cts13499-tbl-0002:row11:col5', 'cts13499-tbl-0002:row11:col6', 'cts13499-tbl-0002:row11:col7'])
- routed 'Within‐subject variability' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=serum asparaginase activity
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'Central compartment V (mL)' is the general volume)
- status held at route_to_review — not promoted
- molar mass: no plausible PubChem entry for 'serum asparaginase activity' ('serum asparaginase activity') — left in mass units
- molar mass: none found for 'asparaginase' — its concentrations stay mass-only
- molar mass: none found for 'serum asparaginase activity' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- unparsed cell cts13499-tbl-0002:row12:col3 = '36.5%'
- unparsed cell cts13499-tbl-0002:row13:col3 = '78.4%'
- unparsed cell cts13499-tbl-0002:row14:col3 = '100%'
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.625 (10/16 fields) | 6 |

<details><summary>6 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[black_african_american_race_on_cl]` | 0.674 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[bsa on v]` |  | 1.61 | only_one_extracted |
| `gpt-oss-120b` | `parameters[central compartment v].parameter_id` | Q61 | Q63 | mismatch |
| `gpt-oss-120b` | `parameters[theta_cl_race]` |  | 0.674 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | JZP458 | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | serum asparaginase activity | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['cts13499-tbl-0002:row1:col2', 'cts13499-tbl-0002:row1:col4', 'cts13499-tbl-0002:row1:col5', 'cts13499-tbl-0002:row1:col6', 'cts13499-tbl-0002:row1:col7'] |
| C5_dimension_Q49 | fail | [length] ** 3 / [time] | l/h | ['cts13499-tbl-0002:row3:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['cts13499-tbl-0002:row2:col2', 'cts13499-tbl-0002:row2:col4', 'cts13499-tbl-0002:row2:col5', 'cts13499-tbl-0002:row2:col6', 'cts13499-tbl-0002:row2:col7'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 146 | ['cts13499-tbl-0002:row1:col2', 'cts13499-tbl-0002:row1:col4', 'cts13499-tbl-0002:row1:col5', 'cts13499-tbl-0002:row1:col6', 'cts13499-tbl-0002:row1:col7'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.146 L/h | ['cts13499-tbl-0002:row1:col2', 'cts13499-tbl-0002:row1:col4', 'cts13499-tbl-0002:row1:col5', 'cts13499-tbl-0002:row1:col6', 'cts13499-tbl-0002:row1:col7'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 0.445 L | ['cts13499-tbl-0002:row2:col2', 'cts13499-tbl-0002:row2:col4', 'cts13499-tbl-0002:row2:col5', 'cts13499-tbl-0002:row2:col6', 'cts13499-tbl-0002:row2:col7'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Basparaginase%5D%20Asparaginase_Lin2023_reference&body=Drug%3A%20asparaginase%0ARecord%3A%20Asparaginase_Lin2023_reference%0APaper%3A%20Lin_2023%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_asparaginase/Asparaginase_Lin2023_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 23:15 UTC</sub>
