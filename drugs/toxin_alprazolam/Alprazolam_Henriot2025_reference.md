<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Alprazolam&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/&quot;},{&quot;label&quot;:&quot;Henriot_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Alprazolam_Yamamoto2019_reference&quot;,&quot;label&quot;:&quot;Yamamoto_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_alprazolam/Alprazolam_Yamamoto2019_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Alprazolam — `Alprazolam_Henriot2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Alprazolam" model-id="Alprazolam_Henriot2025_reference" status="rejected" stale="false" population="healthy adult volunteers" measured-compound="Alprazolam" parameterization="mechanistic" topology="1C"></div>

## Citation
Henriot J, Dallmann A, Dupuis F, Perrier J, Frechen S. PBPK modeling: What is the role of CYP3A4 expression in the gastrointestinal tract to accurately predict first-pass metabolism?. CPT: pharmacometrics & systems pharmacology 14(1):130–141 (2025).
  ·  DOI: [10.1002/psp4.13249](https://doi.org/10.1002/psp4.13249)

## Population and dosing

**Population:** healthy adult volunteers · condition healthy · age group adult.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Felodipine | equation variable | 0.123 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | link | source |
|---|---|---|---|---|---|---|
| Felodipine | `Q900` · equation variable | 0.123 |  | 0.123 | llm (0.6) | Henriot_2025_table_2:row4:col1, Henriot_2025_table_2:row4:col2, Henriot_2025_table_2:row4:col3, Henriot_2025_table_2:row4:col4, Henriot_2025_table_2:row4:col5, Henriot_2025_table_2:row4:col6, Henriot_2025_table_2:row4:col7, Henriot_2025_table_2:row4:col8, Henriot_2025_table_2:row4:col9, Henriot_2025_table_2:row4:col10, Henriot_2025_table_2:row4:col11, Henriot_2025_table_2:row4:col12, Henriot_2025_table_2:row4:col13 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Alfentanil' — extend the ontology if this is a real PK parameter (source ['Henriot_2025_table_2:row2:col1', 'Henriot_2025_table_2:row2:col2', 'Henriot_2025_table_2:row2:col3', 'Henriot_2025_table_2:row2:col4', 'Henriot_2025_table_2:row2:col5', 'Henriot_2025_table_2:row2:col6', 'Henriot_2025_table_2:row2:col7', 'Henriot_2025_table_2:row2:col8', 'Henriot_2025_table_2:row2:col9', 'Henriot_2025_table_2:row2:col10', 'Henriot_2025_table_2:row2:col11', 'Henriot_2025_table_2:row2:col12', 'Henriot_2025_table_2:row2:col13'])
- dropped unlinked row (NIL): 'Alprazolam' — extend the ontology if this is a real PK parameter (source ['Henriot_2025_table_2:row3:col1', 'Henriot_2025_table_2:row3:col2', 'Henriot_2025_table_2:row3:col3', 'Henriot_2025_table_2:row3:col4', 'Henriot_2025_table_2:row3:col5', 'Henriot_2025_table_2:row3:col6', 'Henriot_2025_table_2:row3:col7', 'Henriot_2025_table_2:row3:col8', 'Henriot_2025_table_2:row3:col9', 'Henriot_2025_table_2:row3:col10', 'Henriot_2025_table_2:row3:col11', 'Henriot_2025_table_2:row3:col12', 'Henriot_2025_table_2:row3:col13'])
- dropped unlinked row (NIL): 'Midazolam' — extend the ontology if this is a real PK parameter (source ['Henriot_2025_table_2:row5:col1', 'Henriot_2025_table_2:row5:col2', 'Henriot_2025_table_2:row5:col3', 'Henriot_2025_table_2:row5:col4', 'Henriot_2025_table_2:row5:col5', 'Henriot_2025_table_2:row5:col6', 'Henriot_2025_table_2:row5:col7', 'Henriot_2025_table_2:row5:col8', 'Henriot_2025_table_2:row5:col9', 'Henriot_2025_table_2:row5:col10', 'Henriot_2025_table_2:row5:col11', 'Henriot_2025_table_2:row5:col12', 'Henriot_2025_table_2:row5:col13'])
- dropped unlinked row (NIL): 'Sildenafil' — extend the ontology if this is a real PK parameter (source ['Henriot_2025_table_2:row6:col1', 'Henriot_2025_table_2:row6:col2', 'Henriot_2025_table_2:row6:col3', 'Henriot_2025_table_2:row6:col4', 'Henriot_2025_table_2:row6:col5', 'Henriot_2025_table_2:row6:col6', 'Henriot_2025_table_2:row6:col7', 'Henriot_2025_table_2:row6:col8', 'Henriot_2025_table_2:row6:col9', 'Henriot_2025_table_2:row6:col10', 'Henriot_2025_table_2:row6:col11', 'Henriot_2025_table_2:row6:col12', 'Henriot_2025_table_2:row6:col13'])
- dropped unlinked row (NIL): 'Triazolam' — extend the ontology if this is a real PK parameter (source ['Henriot_2025_table_2:row7:col1', 'Henriot_2025_table_2:row7:col2', 'Henriot_2025_table_2:row7:col3', 'Henriot_2025_table_2:row7:col4', 'Henriot_2025_table_2:row7:col5', 'Henriot_2025_table_2:row7:col6', 'Henriot_2025_table_2:row7:col7', 'Henriot_2025_table_2:row7:col8', 'Henriot_2025_table_2:row7:col9', 'Henriot_2025_table_2:row7:col10', 'Henriot_2025_table_2:row7:col11', 'Henriot_2025_table_2:row7:col12', 'Henriot_2025_table_2:row7:col13'])
- dropped unlinked row (NIL): 'Verapamil' — extend the ontology if this is a real PK parameter (source ['Henriot_2025_table_2:row8:col1', 'Henriot_2025_table_2:row8:col2', 'Henriot_2025_table_2:row8:col3', 'Henriot_2025_table_2:row8:col4', 'Henriot_2025_table_2:row8:col5', 'Henriot_2025_table_2:row8:col6', 'Henriot_2025_table_2:row8:col7', 'Henriot_2025_table_2:row8:col8', 'Henriot_2025_table_2:row8:col9', 'Henriot_2025_table_2:row8:col10', 'Henriot_2025_table_2:row8:col11', 'Henriot_2025_table_2:row8:col12', 'Henriot_2025_table_2:row8:col13'])
- table mostly unlinked (6/7 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Alprazolam
- status held at "Needs review" — not promoted
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- LLM selected parameter table(s) 2
- table Henriot_2025_table_2: units_need_context
- toxin: the located table(s) gave no kinetic value — 1 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Balprazolam%5D%20Alprazolam_Henriot2025_reference&body=Drug%3A%20alprazolam%0ARecord%3A%20Alprazolam_Henriot2025_reference%0APaper%3A%20Henriot_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_alprazolam/Alprazolam_Henriot2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 18:15 UTC</sub>
