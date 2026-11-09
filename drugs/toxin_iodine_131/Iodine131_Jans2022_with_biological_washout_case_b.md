<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Iodine-131&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/&quot;},{&quot;label&quot;:&quot;Jans_2022 \u00b7 with_biological_washout_case_b&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Iodine131_Kelly2017_reference&quot;,&quot;label&quot;:&quot;Kelly_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Kelly2017_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ly2023_reference&quot;,&quot;label&quot;:&quot;Ly_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ly2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2014_0_and_24_h&quot;,&quot;label&quot;:&quot;Ravichandran_2014_0_and_24_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2014_0_and_24_h.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2014_0_and_48_h&quot;,&quot;label&quot;:&quot;Ravichandran_2014_0_and_48_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2014_0_and_48_h.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2014_0_and_72_h&quot;,&quot;label&quot;:&quot;Ravichandran_2014_0_and_72_h&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2014_0_and_72_h.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Iodine131_Ravichandran2010_reference&quot;,&quot;label&quot;:&quot;Ravichandran_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_iodine_131/Iodine131_Ravichandran2010_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Iodine-131 — `Iodine131_Jans2022_with_biological_washout_case_b`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q368 unit RT ([mass]) vs [length] ** 3; Q53 unit RT ([mass]) vs [time].

<div class="pk-model-meta" hidden drug="Iodine-131" model-id="Iodine131_Jans2022_with_biological_washout_case_b" status="rejected" stale="false" population="six healthy volunteers" measured-compound="Iodine-131 (as [131I]IAZA)" parameterization="mechanistic" topology="1C"></div>

## Citation
Jans HS, Stypinski D, Kumar P, Mercer JR, McQuarrie SA, McEwan AJB et al. Radiation Dosimetry of Theragnostic Pairs for Isotopes of Iodine in IAZA. Pharmaceutics 14(8) (2022).
  ·  DOI: [10.3390/pharmaceutics14081655](https://doi.org/10.3390/pharmaceutics14081655)

## Population and dosing

**Population:** six healthy volunteers · condition healthy · age group adult · n = 6.

**Dosed compound ≠ measured compound:** dosed Iodine-123 (as [123I]IAZA), measured Iodine-131 (as [131I]IAZA).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Liver | VH | 0.502 | RT |
| Thyroid | MRT | 0.039 | RT |
| Ka | kabs | 3.39 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q368 unit RT ([mass]) vs [length] ** 3; Q53 unit RT ([mass]) vs [time].**

A reported unit could not be converted (VH and MRT), so that value has no SI equivalent. Extracted — iodine 131: VH 0.502 RT, MRT 0.039 RT; Iodine-131 (as [131I]IAZA): kabs 3.39 h−1.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Liver | `Q368` · VH | 0.502 | RT |  |  | rt | llm_confirmed (0.6) | Jans_2022_table_3:row2:col4, Jans_2022_table_3:row2:col5, Jans_2022_table_3:row2:col6 |
| Thyroid | `Q53` · MRT | 0.039 | RT |  |  | rt | llm (0.6) | Jans_2022_table_3:row3:col4, Jans_2022_table_3:row3:col5, Jans_2022_table_3:row3:col6 |
| Ka | `Q49` · kabs | 3.39 | h−1 | 0.0009417 | 1/s | 1/h | review_gapfill (0.7) | Ly_2023:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Kidneys' — extend the ontology if this is a real PK parameter (source ['Jans_2022_table_3:row1:col4', 'Jans_2022_table_3:row1:col5', 'Jans_2022_table_3:row1:col6'])
- unit_dimension_mismatch: 'Liver' → Q368 (unit '[mass]' vs ontology '[length] ** 3') — route to review
- unit_dimension_mismatch: 'Thyroid' → Q53 (unit '[mass]' vs ontology '[time]') — route to review
- dropped unlinked row (NIL): 'LLI Contents *' — extend the ontology if this is a real PK parameter (source ['Jans_2022_table_3:row4:col4', 'Jans_2022_table_3:row4:col5', 'Jans_2022_table_3:row4:col6'])
- unit_dimension_mismatch: 'SI Contents *' → Q53 (unit '[mass]' vs ontology '[time]') — route to review
- dropped duplicate Q53 ('SI Contents *', value '0.407') — already have one for this compound
- dropped unlinked row (NIL): 'ULI Contents *' — extend the ontology if this is a real PK parameter (source ['Jans_2022_table_3:row6:col4', 'Jans_2022_table_3:row6:col5', 'Jans_2022_table_3:row6:col6'])
- dropped unlinked row (NIL): 'UB Contents **' — extend the ontology if this is a real PK parameter (source ['Jans_2022_table_3:row7:col4', 'Jans_2022_table_3:row7:col5', 'Jans_2022_table_3:row7:col6'])
- dropped unlinked row (NIL): 'Rem. Body' — extend the ontology if this is a real PK parameter (source ['Jans_2022_table_3:row8:col4', 'Jans_2022_table_3:row8:col5', 'Jans_2022_table_3:row8:col6'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Iodine-131 (as [131I]IAZA)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- population split: 'with biological washout (case b)' subgroup of Jans_2022 (paper reports 2 populations: physical decay only (case a), with biological washout (case b))
- molar mass: none found for 'Iodine-131 (as [131I]IAZA)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Ly_2023's review values (primary lacked it)

**Extraction notes:**
- LLM selected parameter table(s) 3
- table Jans_2022_table_3: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q368 | fail | [length] ** 3 | RT ([mass]) | ['Jans_2022_table_3:row2:col4', 'Jans_2022_table_3:row2:col5', 'Jans_2022_table_3:row2:col6'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Ly_2023:review'] |
| C5_dimension_Q53 | fail | [time] | RT ([mass]) | ['Jans_2022_table_3:row3:col4', 'Jans_2022_table_3:row3:col5', 'Jans_2022_table_3:row3:col6'] |
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

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Biodine_131%5D%20Iodine131_Jans2022_with_biological_washout_case_b&body=Drug%3A%20iodine_131%0ARecord%3A%20Iodine131_Jans2022_with_biological_washout_case_b%0APaper%3A%20Jans_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_iodine_131/Iodine131_Jans2022_with_biological_washout_case_b%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 14:47 UTC</sub>
