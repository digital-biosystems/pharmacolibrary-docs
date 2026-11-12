<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;L-Leucine&quot;,&quot;href&quot;:&quot;drugs/toxin_l_leucine/&quot;},{&quot;label&quot;:&quot;Sherwin_1978 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;LLeucine_Kim2025_reference&quot;,&quot;label&quot;:&quot;Kim_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_l_leucine/LLeucine_Kim2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;LLeucine_Lu2022_reference&quot;,&quot;label&quot;:&quot;Lu_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_l_leucine/LLeucine_Lu2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# L-Leucine — `LLeucine_Sherwin1978_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The L-Leucine clearance of 133 ml/min is flagged as physiologically implausible for this molecule.

<div class="pk-model-meta" hidden drug="L-Leucine" model-id="LLeucine_Sherwin1978_reference" status="rejected" stale="false" population="nonobese and obese subjects" measured-compound="L-Leucine" parameterization="mechanistic" topology="1C"></div>

## Citation
Sherwin RS. Effect of starvation on the turnover and metabolic response to leucine. The Journal of clinical investigation 61(6):1471–1481 (1978).
  ·  DOI: [10.1172/JCI109067](https://doi.org/10.1172/JCI109067)

## Population and dosing

**Population:** nonobese and obese subjects · condition postabsorptive state; 3-day and 4-wk fast · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Glucose clearance | CL | 133 | ml/min |
| BAT volume | V | 100.0 | cm3 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The L-Leucine clearance of 133 ml/min is flagged as physiologically implausible for this molecule.**

The record assigns a total clearance of 133 ml/min to L-Leucine, a small amino acid, which falls outside the expected physiological range. This magnitude suggests a unit or scale error in the extraction process rather than a valid kinetic property. Consequently, the parameter value is deemed inconsistent with the known pharmacokinetics of the compound. Extracted — l leucine: CL 133 ml/min, V 100 cm3.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Glucose clearance | `Q22` · CL | 133 | ml/min | 2.217e-06 | m3/s | L/h | boundary (0.8) | Sherwin_1978:prose |
| BAT volume | `Q61` · V | 100.0 | cm3 | 0.0001 | m3 | L | review_gapfill (0.7) | Abdelhafez_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Isoleucine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row1:col2'])
- dropped unlinked row (NIL): 'Valine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row2:col2'])
- dropped unlinked row (NIL): 'Taurine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row3:col2', 'Sherwin_1978_table_1:row3:col3', 'Sherwin_1978_table_1:row3:col4', 'Sherwin_1978_table_1:row3:col5', 'Sherwin_1978_table_1:row3:col6'])
- dropped unlinked row (NIL): 'Threonine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row4:col2'])
- dropped unlinked row (NIL): 'Serine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row5:col2', 'Sherwin_1978_table_1:row5:col4'])
- dropped unlinked row (NIL): 'Proline' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row6:col2', 'Sherwin_1978_table_1:row6:col3', 'Sherwin_1978_table_1:row6:col4', 'Sherwin_1978_table_1:row6:col5', 'Sherwin_1978_table_1:row6:col6'])
- dropped unlinked row (NIL): 'Citrulline' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row7:col2', 'Sherwin_1978_table_1:row7:col3', 'Sherwin_1978_table_1:row7:col4', 'Sherwin_1978_table_1:row7:col5', 'Sherwin_1978_table_1:row7:col6'])
- dropped unlinked row (NIL): 'Glycine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row8:col2', 'Sherwin_1978_table_1:row8:col4', 'Sherwin_1978_table_1:row8:col6'])
- dropped unlinked row (NIL): 'Alanine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row9:col2', 'Sherwin_1978_table_1:row9:col3', 'Sherwin_1978_table_1:row9:col4', 'Sherwin_1978_table_1:row9:col5', 'Sherwin_1978_table_1:row9:col6'])
- dropped unlinked row (NIL): 'α-Aminobutyrate' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row10:col2', 'Sherwin_1978_table_1:row10:col3', 'Sherwin_1978_table_1:row10:col4', 'Sherwin_1978_table_1:row10:col5', 'Sherwin_1978_table_1:row10:col6'])
- dropped unlinked row (NIL): 'Cystine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row11:col2', 'Sherwin_1978_table_1:row11:col4', 'Sherwin_1978_table_1:row11:col5', 'Sherwin_1978_table_1:row11:col6'])
- dropped unlinked row (NIL): 'Methionine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row12:col2', 'Sherwin_1978_table_1:row12:col3'])
- dropped unlinked row (NIL): 'Tyrosine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row13:col2'])
- dropped unlinked row (NIL): 'Phenylalanine' — extend the ontology if this is a real PK parameter (source ['Sherwin_1978_table_1:row14:col2'])
- table mostly unlinked (14/14 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q22 ('Glucose clearance'=133) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=L-Leucine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- gap-filled Q61 (V) from Abdelhafez_2024's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- table Sherwin_1978_table_1: unknown_column_role
- table Sherwin_1978_table_1: units_need_context
- table Sherwin_1978_table_1: unparsed_numeric_cell
- toxin: the located table(s) gave no kinetic value — 13 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q61 | pass |  |  | ['Abdelhafez_2024:review'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 133 | ['Sherwin_1978:prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.98 L/h | ['Sherwin_1978:prose'] |
| C9_phys_window_Q61 | fail | volume within physiological range | 0.1 L | ['Abdelhafez_2024:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bl_leucine%5D%20LLeucine_Sherwin1978_reference&body=Drug%3A%20l_leucine%0ARecord%3A%20LLeucine_Sherwin1978_reference%0APaper%3A%20Sherwin_1978%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_l_leucine/LLeucine_Sherwin1978_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-10 21:40 UTC</sub>
