<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V08C&quot;,&quot;href&quot;:&quot;atc/V08C.md&quot;},{&quot;label&quot;:&quot;gadoteric acid&quot;,&quot;href&quot;:&quot;drugs/drug_gadoteric_acid/&quot;},{&quot;label&quot;:&quot;Scala_2018 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gadoteric acid — `GadotericAcid_Scala2018_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The gadoteric acid record was rejected because reported clearance (2.51 L/h) and volume (0.161 L) were flagged as physiologically implausible, consistent with unit/scale extraction error.

<div class="pk-model-meta" hidden drug="gadoteric acid" model-id="GadotericAcid_Scala2018_reference" status="rejected" stale="false" population="pediatric subjects younger than 2 years with normal estimated glomerular filtration rate" measured-compound="gadoteric acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Scala M, Koob M, de Buttet S, Bourrinet P, Felices M, Jurkiewicz E. A Pharmacokinetics, Efficacy, and Safety Study of Gadoterate Meglumine in Pediatric Subjects Aged Younger Than 2 Years. Investigative radiology 53(2):70–79 (2018).
  ·  DOI: [10.1097/RLI.0000000000000412](https://doi.org/10.1097/RLI.0000000000000412)

## Population and dosing

**Population:** pediatric subjects younger than 2 years with normal estimated glomerular filtration rate · condition normal estimated glomerular filtration rate · age group infant · n = 45.

**Dosing:** 0.1 mmol/kg, iv, single.

**Dosed compound ≠ measured compound:** dosed gadoterate meglumine, measured gadoteric acid.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC, h µmol/L | AUC | 1591.1 |  |
| CL/kg, L/h per kg* | CLnorm | 0.0602 | L/h/kg |
| Vss/kg, L/kg* | Vss | 0.0473 | L/kg |
| t1/2β, h | t1/2β | 1.3545 | h |
| CL | CL | 2.51 | L/h |
| V1 | V | 0.161 | L |
| Q | Q | 0.335 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The gadoteric acid record was rejected because reported clearance (2.51 L/h) and volume (0.161 L) were flagged as physiologically implausible, consistent with unit/scale extraction error.**

The record reports total clearance of 2.51 L/h and volume of distribution of 0.161 L for gadoteric acid. The finding attributes the clearance/volume failure to an implausible magnitude from a unit/scale extraction error but does not identify which value triggered it. Extracted — gadoteric acid: AUC 1.59e+03, CLnorm 0.0602 L/h/kg, Vss 0.0473 L/kg, t1/2β 1.35 h, CL 2.51 L/h, V 0.161 L, Q 0.335 L/h.

<sub>reviewed by gpt-6-luna</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC, h µmol/L | `Q88` · AUC | 1591.1 |  |  |  |  | llm_confirmed (0.6) | Scala_2018_table_p4_3:row0:col1, Scala_2018_table_p4_3:row0:col2, Scala_2018_table_p4_3:row0:col3 |
| CL/kg, L/h per kg* | `Q354` · CLnorm | 0.0602 | L/h/kg | 1.171e-06 | m3/s | L/h | llm (0.6) | Scala_2018_table_p4_3:row1:col1, Scala_2018_table_p4_3:row1:col2, Scala_2018_table_p4_3:row1:col3 |
| Vss/kg, L/kg* | `Q65` · Vss | 0.0473 | L/kg | 0.003311 | m3 | L | llm (0.6) | Scala_2018_table_p4_3:row2:col1, Scala_2018_table_p4_3:row2:col2, Scala_2018_table_p4_3:row2:col3 |
| t1/2β, h | `Q60` · t1/2β | 1.3545 | h | 4876 | s | h | exact (1) | Scala_2018_table_p4_3:row3:col1, Scala_2018_table_p4_3:row3:col2, Scala_2018_table_p4_3:row3:col3 |
| CL | `Q22` · CL | 2.51 | L/h | 6.972e-07 | m3/s | L/h | exact (1) | Scala_2018:results_prose |
| V1 | `Q61` · V | 0.161 | L | 0.000161 | m3 | L | exact (1) | Scala_2018:results_prose |
| Q | `Q30` · Q | 0.335 | L/h | 9.306e-08 | m3/s | L/h | exact (1) | Scala_2018:results_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'L/kg*' (Vss)
- salvaged Q22 ('CL'=2.51) from results prose — parameter table was unreadable
- salvaged Q63 ('V1'=0.161) from results prose — parameter table was unreadable
- salvaged Q30 ('Q'=0.335) from results prose — parameter table was unreadable
- implicit units: 'AUC, h µmol/L' — the LLM proposed 'μmol·h/L', whose dimension does not fit Q88; left unset
- implicit units: 'CL/kg, L/h per kg*' → L/h/kg (from the paper text: 'The paper states “The median CL adjusted to BW was estimated at 0.06 L/h per kg.”')
- implicit units: 'Vss/kg, L/kg*' → L/kg (from the paper text: 'The paper states “The median Vss adjusted to BW was estimated at 0.047 L/kg.”')
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gadoteric acid
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V1' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- final table T3: grid unusable → re-running vision table extraction for Scala_2018
- LLM region Scala_2018:other_prose: no JSON records returned

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |  |  |
| C0b_disposition_core | pass |  |  |  |  |  |
| C0c_disposition_complete | pass |  |  |  |  |  |
| C1_half_life_beta | fail | 1.35 | 0.044 | 0.0326 | 0.25 | reported t½β |
| C5_dimension_Q354 | pass | [length] ** 3 / [time] |  |  |  | ['Scala_2018_table_p4_3:row1:col1', 'Scala_2018_table_p4_3:row1:col2', 'Scala_2018_table_p4_3:row1:col3'] |
| C5_dimension_Q60 | pass | [time] |  |  |  | ['Scala_2018_table_p4_3:row3:col1', 'Scala_2018_table_p4_3:row3:col2', 'Scala_2018_table_p4_3:row3:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  |  |  | ['Scala_2018_table_p4_3:row2:col1', 'Scala_2018_table_p4_3:row2:col2', 'Scala_2018_table_p4_3:row2:col3'] |
| C5_unit_missing_Q88 | fail | [mass] * [time] / [length] ** 3 |  |  |  | ['Scala_2018_table_p4_3:row0:col1', 'Scala_2018_table_p4_3:row0:col2', 'Scala_2018_table_p4_3:row0:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.51 |  |  | ['Scala_2018:results_prose'] |
| C8_topology | pass |  |  |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.51 L/h |  |  | ['Scala_2018:results_prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.161 L |  |  | ['Scala_2018:results_prose'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 3.31 L |  |  | ['Scala_2018_table_p4_3:row2:col1', 'Scala_2018_table_p4_3:row2:col2', 'Scala_2018_table_p4_3:row2:col3'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bgadoteric_acid%5D%20GadotericAcid_Scala2018_reference&body=Drug%3A%20gadoteric_acid%0ARecord%3A%20GadotericAcid_Scala2018_reference%0APaper%3A%20Scala_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_gadoteric_acid/GadotericAcid_Scala2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 18:32 UTC</sub>
