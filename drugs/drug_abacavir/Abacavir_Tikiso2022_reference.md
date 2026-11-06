<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;abacavir&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/&quot;},{&quot;label&quot;:&quot;Tikiso_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Abacavir_Chupradit2024_reference&quot;,&quot;label&quot;:&quot;Chupradit_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Rabie2020_reference&quot;,&quot;label&quot;:&quot;Rabie_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Rabie2020_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Archary2019_reference&quot;,&quot;label&quot;:&quot;Archary_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Archary2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Cella2011_model_1_mean&quot;,&quot;label&quot;:&quot;Cella_2011_model_1_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Cella2011_model_1_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Cella2011_model_2_mean&quot;,&quot;label&quot;:&quot;Cella_2011_model_2_mean&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Cella2011_model_2_mean.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Chupradit2023_reference&quot;,&quot;label&quot;:&quot;Chupradit_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Chupradit2023_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Fauchet2014_reference&quot;,&quot;label&quot;:&quot;Fauchet_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Fauchet2014_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Abacavir_Zhang2015_reference&quot;,&quot;label&quot;:&quot;Zhang_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_abacavir/Abacavir_Zhang2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# abacavir — `Abacavir_Tikiso2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The abacavir record was rejected because a reported unit could not be converted to SI units, and covariate effects produced negative clearance or volume values.

<div class="pk-model-meta" hidden drug="abacavir" model-id="Abacavir_Tikiso2022_reference" status="rejected" stale="false" population="HIV-infected African children" measured-compound="abacavir" parameterization="mechanistic" topology="2C"></div>

## Citation
Tikiso T, McIlleron H, Burger D, Gibb D, Rabie H, Lee J et al. Abacavir pharmacokinetics in African children living with HIV: A pooled analysis describing the effects of age, malnutrition and common concomitant medications. British journal of clinical pharmacology 88(2):403–415 (2022).
  ·  DOI: [10.1111/bcp.14984](https://doi.org/10.1111/bcp.14984)

## Population and dosing

**Population:** HIV-infected African children · condition HIV · age group child · n = 230.

**Dosing:** 560 mg, oral, multiple, every 12 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 9 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Clearance (L/h) [CL]a | CL | 10.7 | L/h |
| Central volume of distribution (L)a | V1 | 11.0 | L |
| First-order absorption rate constant (1/h) [Ka] | kabs | 2.29 | 1/h |
| Relative oral bioavailability [F] | Frel | 1 | F |
| Peripheral volume of distribution (L)a | V2 | 3.33 | L |
| Inter-compartmental clearance (L/h)a | Q | 1.10 | L/h |
| PMAGE50 b (months) | equation variable | 8.10 | months |
| Mean absorption transit time (mins) | MAT | 6.24 | mins |
| Number of absorption transit compartments | n_transit | 11.9 | 4:1 |
| Change in F of malnourished children at start of supplementation (%) | fe | +115 |  |
| theta_cl_category | theta_cl_category | -18.4 | L/h |
| theta_kabs_category | theta_kabs_category | -24.9 | 1/h |
| theta_q83_category | theta_q83_category | 2.52 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.818). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The abacavir record was rejected because a reported unit could not be converted to SI units, and covariate effects produced negative clearance or volume values.**

A parameter value arrived without a recognized unit system, so its magnitude could not be evaluated in standard pharmacokinetic terms. The covariate adjustments for specific patient subgroups, such as age or nutritional status, resulted in calculated clearance or volume estimates that were negative, which is physically impossible. Second readers disagreed on the presence and values of parameters related to efavirenz co-administration and malnutrition, leaving parts of the model definition unresolved. Extracted — abacavir: CL 10.7 L/h, V1 11 L, kabs 2.29 1/h, Frel 1 F, V2 3.33 L, Q 1.1 L/h, MAT 6.24 mins, n_transit 11.9 4:1, … (+1).

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of change in cl when on efv: this record has none, the second reading +12.0; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Clearance (L/h) [CL]a | `Q22` · CL | 10.7 | L/h | 2.972e-06 | m3/s | l/h | llm_confirmed (0.6) | Tikiso_2022_table_p9_1:row0:col1 |
| Central volume of distribution (L)a | `Q63` · V1 | 11.0 | L | 0.011 | m3 | l | boundary_compartment (0.9) | Tikiso_2022_table_p9_1:row2:col1 |
| First-order absorption rate constant (1/h) [Ka] | `Q49` · kabs | 2.29 | 1/h | 0.0006361 | 1/s | 1/h | llm_confirmed (0.6) | Tikiso_2022_table_p9_1:row3:col1 |
| Relative oral bioavailability [F] | `Q87` · Frel | 1 | F |  |  |  | llm_confirmed (0.6) | Tikiso_2022_table_p9_1:row4:col1 |
| Peripheral volume of distribution (L)a | `Q64` · V2 | 3.33 | L | 0.00333 | m3 | l | boundary_compartment (0.9) | Tikiso_2022_table_p9_1:row5:col1 |
| Inter-compartmental clearance (L/h)a | `Q30` · Q | 1.10 | L/h | 3.056e-07 | m3/s | l/h | llm_confirmed (0.6) | Tikiso_2022_table_p9_1:row6:col1 |
| PMAGE50 b (months) | `Q900` · equation variable | 8.10 | months |  |  | month | llm (0.6) | Tikiso_2022_table_p9_1:row8:col1 |
| Mean absorption transit time (mins) | `Q73` · MAT | 6.24 | mins |  |  | min | llm_corrected (0.6) | Tikiso_2022_table_p9_1:row9:col1 |
| Number of absorption transit compartments | `Q311` · n_transit | 11.9 | 4:1 |  |  | 4 | llm_corrected (0.6) | Tikiso_2022_table_p9_1:row10:col1 |
| Change in F of malnourished children at start of supplementation (%) | `Q44` · fe | +115 |  |  |  |  | llm (0.6) | Tikiso_2022_table_p9_1:row16:col1 |
| theta_cl_category | `Q900` · theta_cl_category | -18.4 | L/h |  |  |  |  | Tikiso_2022_table_p9_1:row14:col1 |
| theta_kabs_category | `Q900` · theta_kabs_category | -24.9 | 1/h |  |  |  |  | Tikiso_2022_table_p9_1:row19:col1 |
| theta_q83_category | `Q900` · theta_q83_category | 2.52 |  |  |  |  |  | Tikiso_2022_table_p9_1:row20:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'y_maturation functionb' — extend the ontology if this is a real PK parameter (source ['Tikiso_2022_table_p9_1:row7:col1'])
- dropped unlinked row (NIL): 'Change in F when on rifampicin + super-boosted lopinavir' — extend the ontology if this is a real PK parameter (source ['Tikiso_2022_table_p9_1:row13:col1'])
- dropped duplicate Q22 ('Change in CL when on EFV (%)', value '+12.0') — already have one for this compound
- dropped duplicate Q22 ('Change in CL of malnourished children at start of supplementation (%)', value '-64.0') — already have one for this compound
- dropped PD-category row 'Malnutrition effect half-life d (/day)' → Q335 (slope, category G13) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Tikiso_2022_table_p9_1:row18:col1'])
- routed 'Extra BVV CL in MATCH (fold change)' → Q313 (IOV) to iov — variability estimate, not a structural parameter
- covariate effect for Q83 has no base parameter row (kept as unattached equation-variable)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=abacavir
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tikiso_2022_table_p9_1: unparsed_numeric_cell
- LLM selected parameter table(s) 1
- skipped illustrative/example figure caption(s) bcp14984-fig-0002 — per-individual fit, not model parameters

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.818 (18/22 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[change in cl when on efv]` |  | +12.0 | only_one_extracted |
| `gpt-oss-120b` | `parameters[change in f of malnourished children at start of supplementation]` | +115 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[malnutrition effect half-life d]` |  | 12.2 | only_one_extracted |
| `gpt-oss-120b` | `parameters[pmage50 b]` | 8.10 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C2_sign_Q22_category | fail | -7.7 |  | base 10.7 + shift -18.4 (category) |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Tikiso_2022_table_p9_1:row0:col1'] |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Tikiso_2022_table_p9_1:row6:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Tikiso_2022_table_p9_1:row3:col1'] |
| C5_dimension_Q63 | pass | [length] ** 3 |  | ['Tikiso_2022_table_p9_1:row2:col1'] |
| C5_dimension_Q64 | pass | [length] ** 3 |  | ['Tikiso_2022_table_p9_1:row5:col1'] |
| C5_dimension_Q73 | pass | [time] |  | ['Tikiso_2022_table_p9_1:row9:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 10.7 | ['Tikiso_2022_table_p9_1:row0:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 10.7 L/h | ['Tikiso_2022_table_p9_1:row0:col1'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 11 L | ['Tikiso_2022_table_p9_1:row2:col1'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 3.33 L | ['Tikiso_2022_table_p9_1:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Babacavir%5D%20Abacavir_Tikiso2022_reference&body=Drug%3A%20abacavir%0ARecord%3A%20Abacavir_Tikiso2022_reference%0APaper%3A%20Tikiso_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_abacavir/Abacavir_Tikiso2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-03 08:53 UTC</sub>
