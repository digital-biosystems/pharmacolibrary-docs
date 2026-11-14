<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Clonidine&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/&quot;},{&quot;label&quot;:&quot;Tang_2021 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clonidine_Cloesmeijer2020_reference&quot;,&quot;label&quot;:&quot;Cloesmeijer_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Cloesmeijer2020_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q6h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q6h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q6h.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_dog&quot;,&quot;label&quot;:&quot;Pflaum_2026_dog&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_dog.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Pflaum2026_human&quot;,&quot;label&quot;:&quot;Pflaum_2026_human&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Pflaum2026_human.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Clonidine_Gauda2022_clon_q8h&quot;,&quot;label&quot;:&quot;Gauda_2022_clon_q8h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_clonidine/Clonidine_Gauda2022_clon_q8h.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Clonidine — `Clonidine_Tang2021_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Clonidine" model-id="Clonidine_Tang2021_reference" status="rejected" stale="false" population="neonates/infants treated for neonatal opioid withdrawal syndrome (compared with adults)" measured-compound="clonidine" parameterization="apparent" topology="3C"></div>

## Citation
Tang F, Ng CM, Bada HS, Leggas M. Clinical pharmacology and dosing regimen optimization of neonatal opioid withdrawal syndrome treatments. Clinical and translational science 14(4):1231–1249 (2021).
  ·  DOI: [10.1111/cts.12994](https://doi.org/10.1111/cts.12994)

## Population and dosing

**Population:** neonates/infants treated for neonatal opioid withdrawal syndrome (compared with adults) · condition neonatal opioid withdrawal syndrome · age group neonate.

**Dosing:** 3.5, 7 mg, oral, multiple, every 6 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean volume of distribution (neonates and children) | V | 2.8 | L/kg |
| time to reach 50% of adult value of central volume | V1 | 9.65 | weeks PNA |
| 2 peripheral volumes | V2 | 75.1 | /70 kg |
| estimated standardized apparent volume | V/F | 177 | L/70 kg |
| absorption rate constant | kabs | 0.533 | /h |
| pooled estimates of clearance | pooled estimates of clearance | 2.2 | ml/min/kg |
| Estimated standardized apparent clearance | Estimated standardized apparent clearance | 8.94 | L/h/70 kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| mean volume of distribution (neonates and children) | `Q61` · V | 2.8 | L/kg | 0.196 | m3 | L | boundary (0.8) | Tang_2021:other_prose |
| time to reach 50% of adult value of central volume | `Q63` · V1 | 9.65 | weeks PNA |  |  | weeks PNA | boundary (0.8) | Tang_2021:other_prose |
| 2 peripheral volumes | `Q64` · V2 | 75.1 | /70 kg |  |  | /70 kg | fuzzy (0.92) | Tang_2021:other_prose |
| estimated standardized apparent volume | `Q76` · V/F | 177 | L/70 kg | 0.177 | m3 | L | boundary (0.8) | Tang_2021:other_prose |
| absorption rate constant | `Q49` · kabs | 0.533 | /h | 0.0001481 | 1/s | 1/h | exact (1) | Tang_2021:other_prose |
| pooled estimates of clearance | `Q900` · pooled estimates of clearance | 2.2 | ml/min/kg | 2.567e-06 | m3/s |  |  | Tang_2021:other_prose |
| Estimated standardized apparent clearance | `Q900` · Estimated standardized apparent clearance | 8.94 | L/h/70 kg | 2.483e-06 | m3/s |  |  | Tang_2021:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| pooled estimates of clearance (preterm neonates, lower bound) | Q22 | boundary |
| Estimated standardized apparent clearance | Q27 | boundary |

## Departures & gaps

**Interpretation flags:**
- column 'parameterizationa' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Liu et al.44,46' — extend the ontology if this is a real PK parameter (source ['Tang_2021_table_1:row0:col3'])
- dropped unlinked row (NIL): 'Wiles et al.60' — extend the ontology if this is a real PK parameter (source ['Tang_2021_table_1:row1:col3'])
- dropped unlinked row (NIL): 'Ng et al.73' — extend the ontology if this is a real PK parameter (source ['Tang_2021_table_1:row3:col3'])
- dropped unlinked row (NIL): 'Moore et al.74' — extend the ontology if this is a real PK parameter (source ['Tang_2021_table_1:row4:col3'])
- dropped unlinked row (NIL): 'Xie et al.92' — extend the ontology if this is a real PK parameter (source ['Tang_2021_table_1:row6:col3'])
- dropped value-less row: 'Abbreviations: CL, clearance; CL/F, total apparent clearance; Emax, maximum effect; GA, gestational age; PK, pharmacokinetic; PMA, postmenstrual age; PNA, postnatal age. a Parameters with standard subscript: parameter value standardized to 70 kg adults.'
- table mostly unlinked (5/5 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q61 ('mean volume of distribution (neonates and children)'=2.8) from results prose — parameter table was unreadable
- salvaged Q22 ('pooled estimates of clearance (preterm neonates, lower bound)'=2.2) from results prose — parameter table was unreadable
- salvaged Q63 ('time to reach 50% of adult value of central volume'=9.65) from results prose — parameter table was unreadable
- salvaged Q64 ('2 peripheral volumes'=75.1) from results prose — parameter table was unreadable
- salvaged Q27 ('Estimated standardized apparent clearance'=8.94) from results prose — parameter table was unreadable
- salvaged Q76 ('estimated standardized apparent volume'=177) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate constant'=0.533) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=clonidine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: PK_3M_9C — formed from central; parent 2, metabolites [0]
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- bound model equation to Q22 (CL): CL = CLstd * (Wt/70)^0.75 * PMA_HILL/(PMA_HILL + CLmat_HILL*(1+βvol*e^(-PNA/SL^t½)))
V1 = V1std * (Wt/70) * (Wt/70)^0.75
Q2 = Q2std * (Wt/70)^0.75
V2 = V2std * (Wt/70)^0.75
Q3 = Q3std * (Wt/70)^0.75
V3 = V3std * (Wt/70)
- bound model equation to Q27 (CL/F): CL/F = CL/Fstd * (Wt/70)^0.75
V/F = V/Fstd * (Wt/70)
- Q22 (CL) is equation-defined: value moved to equation-variable 'pooled estimates of clearance (preterm neonates, lower bound)'; equation kept verbatim
- Q27 (CL/F) is equation-defined: value moved to equation-variable 'Estimated standardized apparent clearance'; equation kept verbatim
- status held at "Needs review" — not promoted
- base model from table(s) without population columns (Tang_2021:methods_prose, Tang_2021:other_prose, Tang_2021_table_1, cts12994-tbl-0001:footnote); populations adults, neonates/infants kept as separate records
- row roles (LLM): model_class=compartmental; 0/9 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'buprenorphine' — its concentrations stay mass-only
- molar mass: none found for 'norbuprenorphine' — its concentrations stay mass-only
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Tang_2021_table_1: unparsed_numeric_cell
- table Tang_2021_table_2: unbound_uncertainty
- table Tang_2021_table_2: no_point_estimates
- table Tang_2021_table_2: unparsed_numeric_cell
- companion parameter table 2 transcribed (4 record(s))
- table Tang_2021_table_3: unbound_uncertainty
- table Tang_2021_table_3: no_point_estimates
- table Tang_2021_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (6 record(s))
- table Tang_2021_table_4: unbound_uncertainty
- table Tang_2021_table_4: no_point_estimates
- companion parameter table 4 transcribed (6 record(s))
- no LLM table selection; kept 3 deterministically-scored parameter table(s)
- captured model equation CL = CLstd * (Wt/70)^0.75 * PMA_HILL/(PMA_HILL + CLmat_HILL*(1+βvol*e^(-PNA/SL^t½)))
V1 = V1std * (Wt/70) * (Wt/70)^0.75
Q2 = Q2std * (Wt/70)^0.75
V2 = V2std * (Wt/70)^0.75
Q3 = Q3std * (Wt/70)^0.75
V3 = V3std * (Wt/70)
- captured model equation CL/F = CL/Fstd * (Wt/70)^0.75
V/F = V/Fstd * (Wt/70)

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q63 | fail | [length] ** 3 | weeks PNA | ['Tang_2021:other_prose'] |
| C5_unit_missing_Q64 | fail | [length] ** 3 | /70 kg | ['Tang_2021:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 196 L | ['Tang_2021:other_prose'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 177 L | ['Tang_2021:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bclonidine%5D%20Clonidine_Tang2021_reference&body=Drug%3A%20clonidine%0ARecord%3A%20Clonidine_Tang2021_reference%0APaper%3A%20Tang_2021%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_clonidine/Clonidine_Tang2021_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 15:57 UTC</sub>
