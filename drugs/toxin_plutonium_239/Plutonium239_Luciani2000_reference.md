<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Plutonium-239&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/&quot;},{&quot;label&quot;:&quot;Luciani_2000 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Plutonium239_Harrison1980_239pu&quot;,&quot;label&quot;:&quot;Harrison_1980_239pu&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Harrison1980_239pu.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Harrison1980_241am&quot;,&quot;label&quot;:&quot;Harrison_1980_241am&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Harrison1980_241am.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Watts1975_burro&quot;,&quot;label&quot;:&quot;Watts_1975_burro&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_burro.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Watts1975_dog&quot;,&quot;label&quot;:&quot;Watts_1975_dog&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_dog.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Watts1975_man&quot;,&quot;label&quot;:&quot;Watts_1975_man&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_man.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Watts1975_sheep&quot;,&quot;label&quot;:&quot;Watts_1975_sheep&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Watts1975_sheep.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Taylor1985_a&quot;,&quot;label&quot;:&quot;Taylor_1985_a&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Taylor1985_a.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Plutonium239_Taylor1985_tb_days&quot;,&quot;label&quot;:&quot;Taylor_1985_tb_days&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_plutonium_239/Plutonium239_Taylor1985_tb_days.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Plutonium-239 — `Plutonium239_Luciani2000_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q30 unit U ([mass]) vs [length] ** 3 / [time]; Q44 unit d-1 (1 / [time]) vs dimensionless.

<div class="pk-model-meta" hidden drug="Plutonium-239" model-id="Plutonium239_Luciani2000_reference" status="rejected" stale="false" population="male subject 45 y old" measured-compound="Plutonium-239" parameterization="mechanistic" topology="1C"></div>

## Citation
Luciani A, Polig E. Verification and modification of the ICRP-67 model for plutonium dose calculation. Health physics 78(3):303–310 (2000).
  ·  DOI: [10.1097/00004032-200003000-00008](https://doi.org/10.1097/00004032-200003000-00008)

## Population and dosing

**Population:** male subject 45 y old · condition occupational exposure · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| 4 (M) | CL_ratio | 105 | M |
| 208 (U) | Q | 64 | U |
| Blood to cortical surface | k41 | 0.0952 | d-1 |
| Blood to trabecular surface | ktr | 0.226 | d-1 |
| Urinary bladder content to excretion | fe | 12 | d-1 |
| Gonads to blood | n_transit | 0.00019 | d-1 |
| absorption rate | kabs | 2.0 | day -1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**no kinetic quantity — no half-life, rate constant, volume or clearance (exposure/outcome paper); c5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q30 unit U ([mass]) vs [length] ** 3 / [time]; Q44 unit d-1 (1 / [time]) vs dimensionless.**

A reported unit could not be converted (CL_ratio, Q, fe and n_transit), so that value has no SI equivalent. Extracted — plutonium 239: CL_ratio 105 M, Q 64 U, k41 0.0952 d-1, ktr 0.226 d-1, fe 12 d-1, n_transit 0.00019 d-1, kabs 2 day -1.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| 4 (M) | `Q31` · CL_ratio | 105 | M |  |  | m | llm (0.6) | Luciani_2000_table_2:row4:col1, Luciani_2000_table_2:row4:col2, Luciani_2000_table_2:row4:col4, Luciani_2000_table_2:row4:col6 |
| 208 (U) | `Q30` · Q | 64 | U |  |  | u | llm (0.6) | Luciani_2000_table_2:row6:col1, Luciani_2000_table_2:row6:col2, Luciani_2000_table_2:row6:col4, Luciani_2000_table_2:row6:col6 |
| Blood to cortical surface | `Q348` · k41 | 0.0952 | d-1 | 1.102e-06 | 1/s | 1/d | llm (0.6) | Luciani_2000_table_1:row1:col1 |
| Blood to trabecular surface | `Q306` · ktr | 0.226 | d-1 | 2.616e-06 | 1/s | 1/d | llm (0.6) | Luciani_2000_table_1:row2:col1 |
| Urinary bladder content to excretion | `Q44` · fe | 12 | d-1 |  |  | 1/d | llm_confirmed (0.6) | Luciani_2000_table_1:row15:col1 |
| Gonads to blood | `Q311` · n_transit | 0.00019 | d-1 |  |  | 1/d | llm (0.6) | Luciani_2000_table_1:row29:col1 |
| absorption rate | `Q49` · kabs | 2.0 | day -1 | 2.315e-05 | 1/s | 1/h | review_gapfill (0.7) | Birchall_2010:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'number of measurements' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): '242 (U)' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_2:row0:col1', 'Luciani_2000_table_2:row0:col2', 'Luciani_2000_table_2:row0:col4', 'Luciani_2000_table_2:row0:col6'])
- dropped unlinked row (NIL): '193 (U)' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_2:row2:col1', 'Luciani_2000_table_2:row2:col2', 'Luciani_2000_table_2:row2:col4', 'Luciani_2000_table_2:row2:col6'])
- unit_dimension_mismatch: '208 (U)' → Q30 (unit '[mass]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: '25 (M)' → Q30 (unit '[length]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('25 (M)', value '21') — already have one for this compound
- dropped unlinked row (NIL): '10 (M)' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_2:row10:col1', 'Luciani_2000_table_2:row10:col2', 'Luciani_2000_table_2:row10:col4', 'Luciani_2000_table_2:row10:col6'])
- dropped unlinked row (NIL): '18 (M)' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_2:row12:col1', 'Luciani_2000_table_2:row12:col2', 'Luciani_2000_table_2:row12:col4', 'Luciani_2000_table_2:row12:col6'])
- dropped unlinked row (NIL): '7 (M)' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_2:row14:col1', 'Luciani_2000_table_2:row14:col2', 'Luciani_2000_table_2:row14:col4', 'Luciani_2000_table_2:row14:col6'])
- unit_dimension_mismatch: '21 (M)' → Q30 (unit '[length]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('21 (M)', value '8') — already have one for this compound
- dropped unlinked row (NIL): 'Blood to liver' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row0:col1'])
- dropped unlinked row (NIL): 'Blood to cortical volume' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row3:col1'])
- dropped unlinked row (NIL): 'Blood to trabecular volume' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row4:col1'])
- dropped unlinked row (NIL): 'Blood to urinary bladder content' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row5:col1'])
- dropped unlinked row (NIL): 'Blood to urinary path' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row6:col1'])
- dropped unlinked row (NIL): 'Blood to other kidney tissue' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row7:col1'])
- dropped unlinked row (NIL): 'Blood to ULI contents' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row8:col1'])
- dropped unlinked row (NIL): 'Blood to testes' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row9:col1'])
- dropped unlinked row (NIL): 'Blood to ST0' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row10:col1'])
- dropped unlinked row (NIL): 'Blood to ST1' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row11:col1'])
- dropped unlinked row (NIL): 'Blood to ST2' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row12:col1'])
- dropped unlinked row (NIL): 'ST0 to blood' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row13:col1'])
- dropped unlinked row (NIL): 'Urinary path to urinary bladder content' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row14:col1'])
- unit_dimension_mismatch: 'Urinary bladder content to excretion' → Q44 (unit '1 / [time]' vs ontology 'dimensionless') — route to review
- unit_dimension_mismatch: 'Other kidney tissue to blood' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('Other kidney tissue to blood', value '0.00139') — already have one for this compound
- dropped unlinked row (NIL): 'ST1 to blood' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row17:col1'])
- dropped unlinked row (NIL): 'ST2 to blood' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row19:col1'])
- dropped unlinked row (NIL): 'Cortical marrow to blood' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row24:col1'])
- dropped unlinked row (NIL): 'Trabecular marrow to blood' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row25:col1'])
- dropped unlinked row (NIL): 'Liver 1 to Liver 2' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row26:col1'])
- unit_dimension_mismatch: 'Liver 1 to Small Intestine' → Q30 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- dropped duplicate Q30 ('Liver 1 to Small Intestine', value '0.0004') — already have one for this compound
- dropped unlinked row (NIL): 'Liver 2 to blood' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row28:col1'])
- dropped unlinked row (NIL): 'Small intest. to upper large intestine' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row30:col1'])
- dropped unlinked row (NIL): 'Upper large to lower large intest.' — extend the ontology if this is a real PK parameter (source ['Luciani_2000_table_1:row31:col1'])
- unit_dimension_mismatch: 'Lower large intest. to excretion (feces)' → Q44 (unit '1 / [time]' vs ontology 'dimensionless') — route to review
- dropped duplicate Q44 ('Lower large intest. to excretion (feces)', value '1.0') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Plutonium-239
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 1C vs LLM 3C — review compartment count
- status held at "Needs review" — not promoted
- molar mass: none found for 'Plutonium-239' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Birchall_2010's review values (primary lacked it)

**Extraction notes:**
- table Luciani_2000_table_2: missing_label
- table Luciani_2000_table_1: unparsed_numeric_cell
- companion parameter table 1 transcribed (28 record(s))
- LLM selected parameter table(s) 1
- toxin: the located table(s) gave no kinetic value — 3 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q30 | fail | [length] ** 3 / [time] | U ([mass]) | ['Luciani_2000_table_2:row6:col1', 'Luciani_2000_table_2:row6:col2', 'Luciani_2000_table_2:row6:col4', 'Luciani_2000_table_2:row6:col6'] |
| C5_dimension_Q306 | pass | 1 / [time] |  | ['Luciani_2000_table_1:row2:col1'] |
| C5_dimension_Q348 | pass | 1 / [time] |  | ['Luciani_2000_table_1:row1:col1'] |
| C5_dimension_Q44 | fail | dimensionless | d-1 (1 / [time]) | ['Luciani_2000_table_1:row15:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Birchall_2010:review'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bplutonium_239%5D%20Plutonium239_Luciani2000_reference&body=Drug%3A%20plutonium_239%0ARecord%3A%20Plutonium239_Luciani2000_reference%0APaper%3A%20Luciani_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_plutonium_239/Plutonium239_Luciani2000_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 08:52 UTC</sub>
