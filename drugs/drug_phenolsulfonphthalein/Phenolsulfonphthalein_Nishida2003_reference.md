<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;phenolsulfonphthalein&quot;,&quot;href&quot;:&quot;drugs/drug_phenolsulfonphthalein/&quot;},{&quot;label&quot;:&quot;Nishida_2003 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# phenolsulfonphthalein — `Phenolsulfonphthalein_Nishida2003_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The phenolsulfonphthalein clearance (0.63 ml/min) and volume of distribution (20.4 ml) were judged physiologically implausible, indicating a unit or scale extraction error, so the record was rejected.

<div class="pk-model-meta" hidden drug="phenolsulfonphthalein" model-id="Phenolsulfonphthalein_Nishida2003_reference" status="rejected" stale="false" population="normal and liver-intoxicated rats (CCl4 or D-galactosamine)" measured-compound="phenolsulfonphthalein" parameterization="mechanistic" topology="1C"></div>

## Citation
Nishida K, Honda T, Nakashima M, Sasaki H, Nakamura J. Influence of liver disease on phenolsulfonphthalein absorption from liver surface to examine possibility of direct liver surface application for drug targeting. Biological & pharmaceutical bulletin 26(7):988–993 (2003).
  ·  DOI: [10.1248/bpb.26.988](https://doi.org/10.1248/bpb.26.988)

## Population and dosing

**Population:** normal and liver-intoxicated rats (CCl4 or D-galactosamine) · condition liver disease (CCl4- or D-galactosamine-induced hepatic injury) · age group adult.

**Dosing:** 0.3, 1 mg, other, single.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC p (mg • min/ml) | AUC | 1695.1 | mg·min/ml |
| MRT p (min) | MRT | 267.2 | min |
| K el (min Ϫ1 ) | kel | 0.033 | min Ϫ1 |
| V c (ml) | V | 20.4 | ml |
| CL total (ml/min) | CL | 0.63 | ml/min |
| Free | fu | 39.1 |  |
| Bile Metabolite | Ae | 19.8 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The phenolsulfonphthalein clearance (0.63 ml/min) and volume of distribution (20.4 ml) were judged physiologically implausible, indicating a unit or scale extraction error, so the record was rejected.**

The reported total clearance of 0.63 ml/min and central volume of 20.4 ml for phenolsulfonphthalein in rats fall outside the accepted physiological window, consistent with a unit/scale extraction error. The unit 'min Ϫ1' for the elimination rate constant (0.033) could not be converted to SI, so the parameter reached the model builder without an SI value. The remaining parameters (AUC 1695.1 mg·min/ml, MRT 267.2 min, fu 39.1, biliary metabolite excretion 19.8) were extracted but could not resolve the implausibility of the clearance and volume values. Extracted — phenolsulfonphthalein: AUC 1.7e+03 mg·min/ml, MRT 267 min, kel 0.033 min Ϫ1, V 20.4 ml, CL 0.63 ml/min, fu 39.1, Ae 19.8.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC p (mg • min/ml) | `Q88` · AUC | 1695.1 | mg·min/ml |  |  | mg·min/ml | llm_confirmed (0.6) | tab_2:row0:col2 |
| MRT p (min) | `Q53` · MRT | 267.2 | min | 1.603e+04 | s | min | llm_confirmed (0.6) | tab_2:row1:col2 |
| K el (min Ϫ1 ) | `Q47` · kel | 0.033 | min Ϫ1 | 0.00055 | 1/s | 1/min | space_fold (0.95) | Nishida_2003_table_1:row0:col1 |
| V c (ml) | `Q61` · V | 20.4 | ml | 2.04e-05 | m3 | ml | space_fold (0.95) | Nishida_2003_table_1:row1:col1 |
| CL total (ml/min) | `Q22` · CL | 0.63 | ml/min | 1.05e-08 | m3/s | ml/min | llm_confirmed (0.6) | Nishida_2003_table_1:row2:col1 |
| Free | `Q46` · fu | 39.1 |  |  |  |  | llm (0.6) | Nishida_2003_table_1:row3:col1, Nishida_2003_table_1:row6:col1 |
| Bile Metabolite | `Q91` · Ae | 19.8 |  |  |  |  | llm (0.6) | Nishida_2003_table_1:row4:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'mg • min/ml' (AUC)
- unit_dimension_mismatch: 'AUC b,f (mg)' → Q88 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('AUC b,f (mg)', value '356.5') — already have one for this compound
- dropped duplicate Q53 ('MRT b,f (min)', value '190.6') — already have one for this compound
- unit_dimension_mismatch: 'AUC b,m (mg)' → Q88 (unit '[mass]' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('AUC b,m (mg)', value '225.2') — already have one for this compound
- dropped duplicate Q53 ('MRT b,m (min)', value '235.0') — already have one for this compound
- dropped unlinked row (NIL): 'Total' — extend the ontology if this is a real PK parameter (source ['Nishida_2003_table_1:row5:col1', 'Nishida_2003_table_1:row8:col1'])
- dropped duplicate Q91 ('Urine Metabolite', value '6.8') — already have one for this compound
- implicit units: 'AUC p (mg • min/ml)' → mg·min/ml (from the paper text: "Table 1 lists 'AUC p (mg • min/ml)' explicitly in the parameter name.")
- implicit units: 'Bile Metabolite' — the LLM proposed '% of dose', whose dimension does not fit Q91; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=phenolsulfonphthalein
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'V c (ml)' is the general volume)

**Extraction notes:**
- transposed table tab_2: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell tab_2:row0:col3 = 'Ϯ237.0'
- unparsed cell tab_2:row0:col5 = 'Ϯ124.7'
- unparsed cell tab_2:row0:col7 = 'Ϯ378.1'
- unparsed cell tab_2:row1:col3 = 'Ϯ53.2'
- unparsed cell tab_2:row1:col5 = 'Ϯ64.5'
- unparsed cell tab_2:row1:col7 = 'Ϯ81.1'
- unparsed cell tab_2:row2:col3 = 'Ϯ29.2'
- unparsed cell tab_2:row2:col5 = 'Ϯ42.4'
- unparsed cell tab_2:row2:col7 = 'Ϯ73.2'
- unparsed cell tab_2:row3:col3 = 'Ϯ22.3'
- unparsed cell tab_2:row3:col5 = 'Ϯ26.7'
- unparsed cell tab_2:row3:col7 = 'Ϯ22.4'
- unparsed cell tab_2:row4:col3 = 'Ϯ34.9'
- unparsed cell tab_2:row4:col5 = 'Ϯ46.1'
- unparsed cell tab_2:row4:col7 = 'Ϯ53.3'
- unparsed cell tab_2:row5:col3 = 'Ϯ42.0'
- unparsed cell tab_2:row5:col5 = 'Ϯ58.1'
- unparsed cell tab_2:row5:col7 = 'Ϯ143.7'
- transposed table Nishida_2003_table_1: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Nishida_2003_table_1:row0:col2 = 'Ϯ0.007'
- unparsed cell Nishida_2003_table_1:row0:col4 = 'Ϯ0.001'
- unparsed cell Nishida_2003_table_1:row0:col6 = 'Ϯ0.004'
- unparsed cell Nishida_2003_table_1:row1:col2 = 'Ϯ3.4'
- unparsed cell Nishida_2003_table_1:row1:col4 = 'Ϯ0.6'
- unparsed cell Nishida_2003_table_1:row1:col6 = 'Ϯ2.0'
- unparsed cell Nishida_2003_table_1:row2:col2 = 'Ϯ0.06'
- unparsed cell Nishida_2003_table_1:row2:col4 = 'Ϯ0.01'
- unparsed cell Nishida_2003_table_1:row2:col6 = 'Ϯ0.14'
- unparsed cell Nishida_2003_table_1:row3:col2 = 'Ϯ4.0'
- unparsed cell Nishida_2003_table_1:row3:col4 = 'Ϯ3.8'
- unparsed cell Nishida_2003_table_1:row3:col6 = 'Ϯ4.0'
- unparsed cell Nishida_2003_table_1:row4:col2 = 'Ϯ1.3'
- unparsed cell Nishida_2003_table_1:row4:col3 = '8.5*'
- unparsed cell Nishida_2003_table_1:row4:col4 = 'Ϯ2.3'
- unparsed cell Nishida_2003_table_1:row4:col6 = 'Ϯ2.6'
- unparsed cell Nishida_2003_table_1:row5:col2 = 'Ϯ4.8'
- unparsed cell Nishida_2003_table_1:row5:col4 = 'Ϯ5.7'
- unparsed cell Nishida_2003_table_1:row5:col6 = 'Ϯ5.2'
- unparsed cell Nishida_2003_table_1:row6:col2 = 'Ϯ6.3'
- unparsed cell Nishida_2003_table_1:row6:col4 = 'Ϯ4.9'
- unparsed cell Nishida_2003_table_1:row6:col6 = 'Ϯ4.9'
- unparsed cell Nishida_2003_table_1:row7:col2 = 'Ϯ0.6'
- unparsed cell Nishida_2003_table_1:row7:col4 = 'Ϯ1.0'
- unparsed cell Nishida_2003_table_1:row7:col6 = 'Ϯ1.2'
- unparsed cell Nishida_2003_table_1:row8:col2 = 'Ϯ6.6'
- unparsed cell Nishida_2003_table_1:row8:col4 = 'Ϯ4.8'
- unparsed cell Nishida_2003_table_1:row8:col6 = 'Ϯ5.9'
- companion parameter table 1 transcribed (26 record(s))
- LLM selected parameter table(s) 1, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Nishida_2003_table_1:row2:col1'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Nishida_2003_table_1:row0:col1'] |
| C5_dimension_Q53 | pass | [time] |  | ['tab_2:row1:col2'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Nishida_2003_table_1:row1:col1'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['tab_2:row0:col2'] |
| C5_unit_missing_Q91 | fail | [mass] |  | ['Nishida_2003_table_1:row4:col1'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.63 | ['Nishida_2003_table_1:row2:col1'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0378 L/h | ['Nishida_2003_table_1:row2:col1'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0204 L | ['Nishida_2003_table_1:row1:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenolsulfonphthalein%5D%20Phenolsulfonphthalein_Nishida2003_reference&body=Drug%3A%20phenolsulfonphthalein%0ARecord%3A%20Phenolsulfonphthalein_Nishida2003_reference%0APaper%3A%20Nishida_2003%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_phenolsulfonphthalein/Phenolsulfonphthalein_Nishida2003_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 21:19 UTC</sub>
