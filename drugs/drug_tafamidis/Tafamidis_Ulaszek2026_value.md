<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;tafamidis&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/&quot;},{&quot;label&quot;:&quot;Ulaszek_2026 \u00b7 value&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafamidis_Parkinson2013_reference&quot;,&quot;label&quot;:&quot;Parkinson_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafamidis/Tafamidis_Parkinson2013_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# tafamidis — `Tafamidis_Ulaszek2026_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The tafamidis model was rejected because its structure leaves a compartment or metabolite with no path from the dose, so the topology is not a valid connected pharmacokinetic model.

<div class="pk-model-meta" hidden drug="tafamidis" model-id="Tafamidis_Ulaszek2026_value" status="rejected" stale="false" population="virtual healthy male subjects aged 30-40 years" measured-compound="tafamidis" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Ulaszek S, Lisowski B, Wiśniowska B, Polak S. Exploring Tafamidis Effects Through PBPK-QSP Modelling. Pharmaceutics 18(3) (2026).
  ·  DOI: [10.3390/pharmaceutics18030367](https://doi.org/10.3390/pharmaceutics18030367)

## Population and dosing

**Population:** virtual healthy male subjects aged 30-40 years · condition healthy · age group adult · n = 30.

**Dosing:** 20, 400 mg, oral, multiple.

**Dosed compound ≠ measured compound:** dosed tafamidis meglumine, measured tafamidis.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted, plus 3 covariate effects.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dissociation rate of unbound TTR | koff | 0.0024 | 1/h |
| Association rate of unbound TTR | kon | 360000 |  |
| theta_kon_category | theta_kon_category | 16200 |  |
| theta_kon_albumin | theta_kon_albumin | 1000 |  |
| theta_koff_albumin | theta_koff_albumin | 1800 |  |
| CL | CL | 0.12 | l/h/kg |
| K A (oral) | kabs | 0.41 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The tafamidis model was rejected because its structure leaves a compartment or metabolite with no path from the dose, so the topology is not a valid connected pharmacokinetic model.**

The record describes a general linear tafamidis model with clearance 0.12 l/h/kg, absorption rate constant 0.41 1/h, and binding to transthyretin via kon 360000 and koff 0.0024 1/h. The refusal is based on the model structure: an unreachable or orphan compartment or an unlinked metabolite, meaning part of the model cannot be reached from the administered dose. No parameter-value or unit checks are reported as failing, so the structural disconnection is the sole stated cause. Extracted — tafamidis: koff 0.0024 1/h, kon 3.6e+05, CL 0.12 l/h/kg, kabs 0.41 1/h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has tafamidis meglumine, the second reading tafamidis; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dissociation rate of unbound TTR | `Q330` · koff | 0.0024 | 1/h | 6.667e-07 | 1/s | 1/h | llm_corrected (0.6) | Ulaszek_2026_table_2:row2:col1 |
| Association rate of unbound TTR | `Q329` · kon | 360000 |  |  |  |  | llm_corrected (0.6) | Ulaszek_2026_table_2:row3:col1 |
| theta_kon_category | `Q900` · theta_kon_category | 16200 |  |  |  |  |  | Ulaszek_2026_table_2:row5:col1 |
| theta_kon_albumin | `Q900` · theta_kon_albumin | 1000 |  |  |  |  |  | Ulaszek_2026_table_2:row9:col1 |
| theta_koff_albumin | `Q900` · theta_koff_albumin | 1800 |  |  |  |  |  | Ulaszek_2026_table_2:row10:col1 |
| CL | `Q22` · CL | 0.12 | l/h/kg | 2.333e-06 | m3/s | L/h | review_gapfill (0.7) | Parkinson_2013:review |
| K A (oral) | `Q49` · kabs | 0.41 | 1/h | 0.0001139 | 1/s | 1/h | review_gapfill (0.7) | Parkinson_2013:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped PD-category row 'Monomer degradation rate' → Q328 (kout, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['Ulaszek_2026_table_2:row4:col1'])
- dropped duplicate covariate effect 'category'/'' on Q329 — ambiguous identity (two shifts cannot share one category)
- implicit units: 'Dissociation rate of unbound TTR' → 1/h (from the popPK convention: "The paper states units for first-order rate constants in the QSP model (e.g., 'kdiss represents the dissociation rate of")
- implicit units: 'Association rate of unbound TTR' — the LLM proposed '1/(M*h)', whose dimension does not fit Q329; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=tafamidis
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at route_to_review — not promoted
- population split: 'value' subgroup of Ulaszek_2026 (paper reports 2 populations: dosing regimen, value)
- gap-filled Q22 (CL) from Parkinson_2013's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Parkinson_2013's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pharmaceutics-18-00367-t002:row2:col2 = '171,000 (125,000–258,000)'
- unparsed cell pharmaceutics-18-00367-t002:row2:col3 = '179,721 (127,744–254,519)'
- unparsed cell pharmaceutics-18-00367-t002:row5:col2 = '8950 (6580–14,600)'
- unparsed cell pharmaceutics-18-00367-t002:row5:col3 = '9085 (6819.28–12,840.15)'
- unparsed cell pharmaceutics-18-00367-t002:row7:col2 = '2.0 (0.5–6.0)'
- unparsed cell pharmaceutics-18-00367-t002:row7:col3 = '1.90 (1.18–3.84)'
- unparsed cell pharmaceutics-18-00367-t002:row10:col3 = '1.5 (0.5–4.05)'
- unparsed cell pharmaceutics-18-00367-t002:row10:col4 = '2.26 (1.33–4.53)'
- unparsed cell pharmaceutics-18-00367-t002:row15:col3 = '2.0 (1–6)'
- unparsed cell pharmaceutics-18-00367-t002:row15:col4 = '2.3 (1.37–5.07)'
- unparsed cell Ulaszek_2026_table_2:row1:col3 = 'Based on Ingenbleek et al. dataset, as explained in “Population-level sampling of TTR concentrations” section [9,14,42].'
- unparsed cell Ulaszek_2026_table_2:row2:col3 = '[8]'
- unparsed cell Ulaszek_2026_table_2:row3:col2 = '1μM3·h'
- unparsed cell Ulaszek_2026_table_2:row3:col3 = '[46]'
- unparsed cell Ulaszek_2026_table_2:row4:col3 = 'There are no data on this parameter available in the literature. We assume that for healthy volunteers it is the same as the average degradation rate of TTR [14].'
- unparsed cell Ulaszek_2026_table_2:row5:col2 = '1μM·h'
- unparsed cell Ulaszek_2026_table_2:row5:col3 = '[37]'
- unparsed cell Ulaszek_2026_table_2:row6:col1 = '50.2OR28.8'
- unparsed cell Ulaszek_2026_table_2:row6:col3 = 'Two alternative values presented: one fitted using KD from Nelson et al. (2020) combined with kon from Corazza et al. (2019); the other directly using koff from Corazza et al. (2019) [37,39].'
- unparsed cell Ulaszek_2026_table_2:row7:col2 = '1μM·h'
- unparsed cell Ulaszek_2026_table_2:row7:col3 = '[37]'
- unparsed cell Ulaszek_2026_table_2:row8:col1 = '2998.8OR216'
- unparsed cell Ulaszek_2026_table_2:row8:col3 = 'Two alternative values presented: one fitted using KD from Nelson et al. (2020) combined with kon from Corazza et al. (2019); the other directly using koff from Corazza et al. (2019) [37,39].'
- unparsed cell Ulaszek_2026_table_2:row9:col2 = '1μM·h'
- unparsed cell Ulaszek_2026_table_2:row12:col1 = 'Tdeg × 0.75'
- unparsed cell Ulaszek_2026_table_2:row12:col3 = 'Analytically solved for ~33% increase in total TTR concentration.'
- companion parameter table 2 transcribed (17 record(s))
- LLM selected parameter table(s) 2, 4

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `glm-5.3-flash`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.643 (9/14 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['tafamidis', 'transthyretin (ttr)', 'binding/stabilization']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl]` | 0.12 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[k a]` | 0.41 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[monomer degradation rate]` |  | 0.016 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | tafamidis meglumine | tafamidis | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0c_disposition_complete | fail |  |  |  |
| C2_reference | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Parkinson_2013:review'] |
| C5_dimension_Q330 | pass | 1 / [time] |  | ['Ulaszek_2026_table_2:row2:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Parkinson_2013:review'] |
| C5_unit_missing_Q329 | fail | [length] ** 3 / [mass] / [time] |  | ['Ulaszek_2026_table_2:row3:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.12 | ['Parkinson_2013:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['kon/koff'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 8.4 L/h | ['Parkinson_2013:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btafamidis%5D%20Tafamidis_Ulaszek2026_value&body=Drug%3A%20tafamidis%0ARecord%3A%20Tafamidis_Ulaszek2026_value%0APaper%3A%20Ulaszek_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_tafamidis/Tafamidis_Ulaszek2026_value%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 04:51 UTC</sub>
