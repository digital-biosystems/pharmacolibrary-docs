<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Topiramate&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/&quot;},{&quot;label&quot;:&quot;Chen_2025_2 \u00b7 cbz_tpm_400_mg_bid_a&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Topiramate_Donovan2016_reference&quot;,&quot;label&quot;:&quot;Donovan_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Donovan2016_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_present_case_report&quot;,&quot;label&quot;:&quot;Hoebregts_2021_present_case_report&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_present_case_report.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Lynch2010_reference&quot;,&quot;label&quot;:&quot;Lynch_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Lynch2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Wei2023_reference&quot;,&quot;label&quot;:&quot;Wei_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Wei2023_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Elewa2023_reference&quot;,&quot;label&quot;:&quot;Elewa_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Elewa2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Topiramate_Hoebregts2021_general_population&quot;,&quot;label&quot;:&quot;Hoebregts_2021_general_population&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_topiramate/Topiramate_Hoebregts2021_general_population.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Topiramate — `Topiramate_Chen2025v2_cbz_tpm_400_mg_bid_a`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Topiramate's Cmax is incorrectly assigned units of time times concentration, creating a dimensional conflict for structural parameters.

<div class="pk-model-meta" hidden drug="Topiramate" model-id="Topiramate_Chen2025v2_cbz_tpm_400_mg_bid_a" status="rejected" stale="false" population="healthy adults; patients with renal and hepatic impairment" measured-compound="Topiramate" parameterization="mechanistic" topology="parent_metabolite"></div>

## Citation
Chen S, Shen C, Tian Y, Peng Y, Hu J, Xie H et al. Physiologically based pharmacokinetic modeling and simulation of topiramate in populations with renal and hepatic impairment and considerations for drug-drug interactions. CPT: pharmacometrics & systems pharmacology 14(3):510–522 (2025).
  ·  DOI: [10.1002/psp4.13292](https://doi.org/10.1002/psp4.13292)

## Population and dosing

**Population:** healthy adults; patients with renal and hepatic impairment · condition healthy; chronic kidney disease; hepatic impairment · age group adult.

**Dosing:** 50, 100, 400 mg, other, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted, plus 1 covariate effect.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| C max | Cmax | 8.60 | h*μg/mL |
| Molecular weight | MW | 339.36 | g/mol |
| Fraction Unbounded (albumin) | fu | 85.96 | albumin |
| Portal 27 | Q | 1.2 | L/min |
| Hepatic arterial 28 | QH | 0.42 | L/min |
| Renal 29 | CLR | 1.32 | L/min |
| theta_q45_cyp3a4 | theta_q45_cyp3a4 | 1 |  |
| Vd (L/kg) | V | 0.8 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Topiramate's Cmax is incorrectly assigned units of time times concentration, creating a dimensional conflict for structural parameters.**

The record lists Topiramate Cmax as 8.60 h*μg/mL, which includes a time dimension incompatible with the required mass per volume units for structural parameters. This unit dimension mismatch caused the record to be rejected. Additionally, the unit 'albumin' for the unbound fraction could not be converted to SI standards, preventing proper normalization of the model parameters. Extracted — topiramate: Cmax 8.6 h*μg/mL, MW 339 g/mol, fu 86 albumin, Q 1.2 L/min, QH 0.42 L/min, CLR 1.32 L/min, V 0.8 L/kg.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| C max | `Q32` · Cmax | 8.60 | h*μg/mL |  |  | (h·µg)/ml | space_fold (0.95) | Chen_2025_2_table_3:row11:col2, Chen_2025_2_table_3:row11:col4, Chen_2025_2_table_3:row11:col6 |
| Molecular weight | `Q374` · MW | 339.36 | g/mol | 0.3394 |  | g/(m·ol) | exact (1) | psp413292-tbl-0001:row3:col2, psp413292-tbl-0001:row3:col4 |
| Fraction Unbounded (albumin) | `Q46` · fu | 85.96 | albumin |  |  | albumin | llm_confirmed (0.6) | psp413292-tbl-0001:row9:col4 |
| Portal 27 | `Q30` · Q | 1.2 | L/min | 2e-05 | m3/s | l/min | llm (0.6) | Chen_2025_2_table_2:row2:col1, Chen_2025_2_table_2:row2:col2, Chen_2025_2_table_2:row2:col3, Chen_2025_2_table_2:row2:col4 |
| Hepatic arterial 28 | `Q369` · QH | 0.42 | L/min | 7e-06 | m3/s | l/min | llm (0.6) | Chen_2025_2_table_2:row3:col1, Chen_2025_2_table_2:row3:col2, Chen_2025_2_table_2:row3:col3, Chen_2025_2_table_2:row3:col4 |
| Renal 29 | `Q26` · CLR | 1.32 | L/min | 2.2e-05 | m3/s | l/min | llm (0.6) | Chen_2025_2_table_2:row4:col1, Chen_2025_2_table_2:row4:col2, Chen_2025_2_table_2:row4:col3, Chen_2025_2_table_2:row4:col4 |
| theta_q45_cyp3a4 | `Q900` · theta_q45_cyp3a4 | 1 |  |  |  |  |  | Chen_2025_2_table_2:row9:col1, Chen_2025_2_table_2:row9:col2, Chen_2025_2_table_2:row9:col3, Chen_2025_2_table_2:row9:col4 |
| Vd (L/kg) | `Q61` · V | 0.8 | L/kg | 0.056 | m3 | L | review_gapfill (0.7) | Donovan_2016:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table Chen_2025_2_table_3: rows are variants (CBZ + TPM 200 mg, SD, TPM 200 mg, SD, Concomitant/monotherapy, CBZ + TPM 100 mg, bid a, TPM monotherapy, CBZ + TPM 200 mg, bid a), the parameters are the column headers (C max) — read one record per variant
- unit_dimension_mismatch: 'C max' → Q32 (unit '[time] * [mass] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'Lipophilicity' — extend the ontology if this is a real PK parameter (source ['psp413292-tbl-0001:row2:col4'])
- dropped unlinked row (NIL): 'Compound type/pKa (Acid)' — extend the ontology if this is a real PK parameter (source ['psp413292-tbl-0001:row4:col2', 'psp413292-tbl-0001:row4:col4'])
- dropped unlinked row (NIL): 'Solubility (Ref‐pH = 7)' — extend the ontology if this is a real PK parameter (source ['psp413292-tbl-0001:row5:col2', 'psp413292-tbl-0001:row5:col4'])
- unit_dimension_unknown: 'albumin' (fu)
- dropped unlinked row (NIL): 'GFR fraction' — extend the ontology if this is a real PK parameter (source ['psp413292-tbl-0001:row15:col4'])
- dropped duplicate Q30 ('Other organs a (fraction of healthy) 30', value '1') — already have one for this compound
- dropped unlinked row (NIL): 'Ontology factor (Albumin) 31 , 32 , 33' — extend the ontology if this is a real PK parameter (source ['Chen_2025_2_table_2:row6:col1', 'Chen_2025_2_table_2:row6:col2', 'Chen_2025_2_table_2:row6:col3', 'Chen_2025_2_table_2:row6:col4'])
- dropped unlinked row (NIL): 'Hematocrit 34' — extend the ontology if this is a real PK parameter (source ['Chen_2025_2_table_2:row7:col1', 'Chen_2025_2_table_2:row7:col2', 'Chen_2025_2_table_2:row7:col3', 'Chen_2025_2_table_2:row7:col4'])
- dropped unlinked row (NIL): 'Functional liver mass (L) 28' — extend the ontology if this is a real PK parameter (source ['Chen_2025_2_table_2:row8:col1', 'Chen_2025_2_table_2:row8:col2', 'Chen_2025_2_table_2:row8:col3', 'Chen_2025_2_table_2:row8:col4'])
- dropped unlinked row (NIL): 'GFR (mL/min/1.73 m2) 28' — extend the ontology if this is a real PK parameter (source ['Chen_2025_2_table_2:row10:col1', 'Chen_2025_2_table_2:row10:col2', 'Chen_2025_2_table_2:row10:col3', 'Chen_2025_2_table_2:row10:col4'])
- covariate effect for Q45 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Topiramate
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- pharmacogenetic covariate 'theta_q45_cyp3a4' (cyp3a4) — PGx domain
- status held at "Needs review" — not promoted
- estimate-method split: 'CBZ + TPM 400 mg, bid a' is one of 7 estimates of Chen_2025_2's substance matrix (CBZ + TPM 200 mg, SD, TPM 200 mg, SD, Concomitant/monotherapy, CBZ + TPM 100 mg, bid a, TPM monotherapy, CBZ + TPM 200 mg, bid a, CBZ + TPM 400 mg, bid a); same population, different estimation method
- gap-filled Q61 (V) from Donovan_2016's review values (primary lacked it)
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)

**Extraction notes:**
- table psp413292-tbl-0001: unbound_uncertainty
- table psp413292-tbl-0001: unparsed_numeric_cell
- companion parameter table 2 transcribed (36 record(s))
- table Chen_2025_2_table_3: ragged_grid
- companion parameter table 3 transcribed (72 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)
- LLM region Chen_2025_2:other_prose: Gateway Timeout
- LLM region Chen_2025_2:results_prose: Gateway Timeout
- LLM region Chen_2025_2:other_prose: Gateway Timeout

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q26 | pass | [length] ** 3 / [time] |  | ['Chen_2025_2_table_2:row4:col1', 'Chen_2025_2_table_2:row4:col2', 'Chen_2025_2_table_2:row4:col3', 'Chen_2025_2_table_2:row4:col4'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Chen_2025_2_table_2:row2:col1', 'Chen_2025_2_table_2:row2:col2', 'Chen_2025_2_table_2:row2:col3', 'Chen_2025_2_table_2:row2:col4'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | h*μg/mL ([time] * [mass] / [length] ** 3) | ['Chen_2025_2_table_3:row11:col2', 'Chen_2025_2_table_3:row11:col4', 'Chen_2025_2_table_3:row11:col6'] |
| C5_dimension_Q369 | pass | [length] ** 3 / [time] |  | ['Chen_2025_2_table_2:row3:col1', 'Chen_2025_2_table_2:row3:col2', 'Chen_2025_2_table_2:row3:col3', 'Chen_2025_2_table_2:row3:col4'] |
| C5_dimension_Q374 | pass | [mass] / [substance] |  | ['psp413292-tbl-0001:row3:col2', 'psp413292-tbl-0001:row3:col4'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Donovan_2016:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 56 L | ['Donovan_2016:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btopiramate%5D%20Topiramate_Chen2025v2_cbz_tpm_400_mg_bid_a&body=Drug%3A%20topiramate%0ARecord%3A%20Topiramate_Chen2025v2_cbz_tpm_400_mg_bid_a%0APaper%3A%20Chen_2025_2%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_topiramate/Topiramate_Chen2025v2_cbz_tpm_400_mg_bid_a%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 13:58 UTC</sub>
