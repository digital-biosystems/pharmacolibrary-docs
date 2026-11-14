<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Vinblastine&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/&quot;},{&quot;label&quot;:&quot;Noble_2009 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Vinblastine_Malik2016_reference&quot;,&quot;label&quot;:&quot;Malik_2016_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Malik2016_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Malik2016_vinblastine&quot;,&quot;label&quot;:&quot;Malik_2016_vinblastine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Malik2016_vinblastine.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_van1996_reference&quot;,&quot;label&quot;:&quot;van_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_van1996_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Owellen1975_reference&quot;,&quot;label&quot;:&quot;Owellen_1975_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Owellen1975_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Vinblastine_Sethi1984_reference&quot;,&quot;label&quot;:&quot;Sethi_1984_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_vinblastine/Vinblastine_Sethi1984_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Vinblastine — `Vinblastine_Noble2009_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Vinblastine" model-id="Vinblastine_Noble2009_reference" status="rejected" stale="false" population="Sprague Dawley rats" measured-compound="Vinblastine" parameterization="mechanistic" topology="1C"></div>

## Citation
Noble CO, Guo Z, Hayes ME, Marks JD, Park JW, Benz CC et al. Characterization of highly stable liposomal and immunoliposomal formulations of vincristine and vinblastine. Cancer chemotherapy and pharmacology 64(4):741–751 (2009).
  ·  DOI: [10.1007/s00280-008-0923-3](https://doi.org/10.1007/s00280-008-0923-3)

## Population and dosing

**Population:** Sprague Dawley rats · condition healthy · age group adult.

**Dosing:** 350 mg, iv, single.

**Dosed compound ≠ measured compound:** dosed Vinblastine sulfate, measured Vinblastine.

> **Species: rat.** This record comes from an animal study (rat), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2 (h) | t1/2z | 18.8 | h |
| CLb (ml/h) | CLb | 2.6 | ml/h |
| Vdc (ml) | V | 70.5 | ml |
| MRTd (h) | MRT | 27.1 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2 (h) | `Q57` · t1/2z | 18.8 | h | 6.768e+04 | s | h | half_life_rule (0.95) | Noble_2009_table_1:row1:col3, Noble_2009_table_1:row2:col3, Noble_2009_table_1:row3:col3, Noble_2009_table_1:row4:col3, Noble_2009_table_1:row5:col3, Noble_2009_table_1:row6:col3 |
| CLb (ml/h) | `Q23` · CLb | 2.6 | ml/h | 7.222e-10 | m3/s | ml/h | exact (1) | Noble_2009_table_1:row1:col5, Noble_2009_table_1:row2:col5, Noble_2009_table_1:row3:col5, Noble_2009_table_1:row4:col5, Noble_2009_table_1:row5:col5, Noble_2009_table_1:row6:col5 |
| Vdc (ml) | `Q61` · V | 70.5 | ml | 7.05e-05 | m3 | ml | llm (0.6) | Noble_2009_table_1:row1:col6, Noble_2009_table_1:row2:col6, Noble_2009_table_1:row3:col6, Noble_2009_table_1:row4:col6, Noble_2009_table_1:row5:col6, Noble_2009_table_1:row6:col6 |
| MRTd (h) | `Q53` · MRT | 27.1 | h | 9.756e+04 | s | h | llm (0.6) | Noble_2009_table_1:row1:col7, Noble_2009_table_1:row2:col7, Noble_2009_table_1:row3:col7, Noble_2009_table_1:row4:col7, Noble_2009_table_1:row5:col7, Noble_2009_table_1:row6:col7 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Size (nm)' — extend the ontology if this is a real PK parameter (source ['Noble_2009_table_1:row1:col1', 'Noble_2009_table_1:row2:col1', 'Noble_2009_table_1:row3:col1', 'Noble_2009_table_1:row4:col1', 'Noble_2009_table_1:row5:col1', 'Noble_2009_table_1:row6:col1'])
- dropped unlinked row (NIL): 'D/L (g/mol)' — extend the ontology if this is a real PK parameter (source ['Noble_2009_table_1:row1:col2', 'Noble_2009_table_1:row2:col2', 'Noble_2009_table_1:row3:col2', 'Noble_2009_table_1:row4:col2', 'Noble_2009_table_1:row5:col2', 'Noble_2009_table_1:row6:col2'])
- dropped value-less row: 'aArea under the time-concentration curve'
- dropped value-less row: 'bBlood clearance'
- dropped value-less row: 'cVolume of distribution'
- dropped value-less row: 'dMean residence time ± standard deviation'
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Vinblastine
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- table Noble_2009_table_1: ambiguous_numeric_format
- transposed table Noble_2009_table_1: logical view retains original source coordinates
- LLM selected parameter table(s) 1

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q23 | pass | [length] ** 3 / [time] |  | ['Noble_2009_table_1:row1:col5', 'Noble_2009_table_1:row2:col5', 'Noble_2009_table_1:row3:col5', 'Noble_2009_table_1:row4:col5', 'Noble_2009_table_1:row5:col5', 'Noble_2009_table_1:row6:col5'] |
| C5_dimension_Q53 | pass | [time] |  | ['Noble_2009_table_1:row1:col7', 'Noble_2009_table_1:row2:col7', 'Noble_2009_table_1:row3:col7', 'Noble_2009_table_1:row4:col7', 'Noble_2009_table_1:row5:col7', 'Noble_2009_table_1:row6:col7'] |
| C5_dimension_Q57 | pass | [time] |  | ['Noble_2009_table_1:row1:col3', 'Noble_2009_table_1:row2:col3', 'Noble_2009_table_1:row3:col3', 'Noble_2009_table_1:row4:col3', 'Noble_2009_table_1:row5:col3', 'Noble_2009_table_1:row6:col3'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Noble_2009_table_1:row1:col6', 'Noble_2009_table_1:row2:col6', 'Noble_2009_table_1:row3:col6', 'Noble_2009_table_1:row4:col6', 'Noble_2009_table_1:row5:col6', 'Noble_2009_table_1:row6:col6'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 2.6 | ['Noble_2009_table_1:row1:col5', 'Noble_2009_table_1:row2:col5', 'Noble_2009_table_1:row3:col5', 'Noble_2009_table_1:row4:col5', 'Noble_2009_table_1:row5:col5', 'Noble_2009_table_1:row6:col5'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q23 | pass | clearance within physiological range | 0.0026 L/h | ['Noble_2009_table_1:row1:col5', 'Noble_2009_table_1:row2:col5', 'Noble_2009_table_1:row3:col5', 'Noble_2009_table_1:row4:col5', 'Noble_2009_table_1:row5:col5', 'Noble_2009_table_1:row6:col5'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.0705 L | ['Noble_2009_table_1:row1:col6', 'Noble_2009_table_1:row2:col6', 'Noble_2009_table_1:row3:col6', 'Noble_2009_table_1:row4:col6', 'Noble_2009_table_1:row5:col6', 'Noble_2009_table_1:row6:col6'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bvinblastine%5D%20Vinblastine_Noble2009_reference&body=Drug%3A%20vinblastine%0ARecord%3A%20Vinblastine_Noble2009_reference%0APaper%3A%20Noble_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_vinblastine/Vinblastine_Noble2009_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-13 14:03 UTC</sub>
