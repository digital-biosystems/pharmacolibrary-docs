<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Atomoxetine&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/&quot;},{&quot;label&quot;:&quot;R\u00fcdesheim_2025 \u00b7 competitive_inhibitors&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Atomoxetine_Farid1985_reference&quot;,&quot;label&quot;:&quot;Farid_1985_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Farid1985_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Kim2018_cyp2d6_10_10&quot;,&quot;label&quot;:&quot;Kim_2018_cyp2d6_10_10&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_10_10.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Kim2018_cyp2d6_wt_wt&quot;,&quot;label&quot;:&quot;Kim_2018_cyp2d6_wt_wt&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Kim2018_cyp2d6_wt_wt.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Morais2025_reference&quot;,&quot;label&quot;:&quot;Morais_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Morais2025_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Atomoxetine_Sauer2005_reference&quot;,&quot;label&quot;:&quot;Sauer_2005_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_atomoxetine/Atomoxetine_Sauer2005_reference.md&quot;,&quot;status&quot;:&quot;Not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Atomoxetine — `Atomoxetine_Rdesheim2025_competitive_inhibitors`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The values below are the extraction as recorded and are not verified; Evidence & review says what failed.

<div class="pk-model-meta" hidden drug="Atomoxetine" model-id="Atomoxetine_Rdesheim2025_competitive_inhibitors" status="rejected" stale="false" population="virtual European males (30 y, 73 kg) with defined CYP2D6 activity scores 0–3" measured-compound="atomoxetine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Rüdesheim S, Loer HLH, Feick D, Marok FZ, Fuhr LM, Selzer D et al. A Comprehensive CYP2D6 Drug-Drug-Gene Interaction Network for Application in Precision Dosing and Drug Development. Clinical pharmacology and therapeutics 117(6):1718–1731 (2025).
  ·  DOI: [10.1002/cpt.3604](https://doi.org/10.1002/cpt.3604)

## Population and dosing

**Population:** virtual European males (30 y, 73 kg) with defined CYP2D6 activity scores 0–3 · condition healthy (CYP2D6 drug–drug–gene interaction scenarios) · age group adult.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUClast | AUClast | 1.32 |  |
| C max | Cmax | 1.39 |  |
| clearance | CL | 8.96 | mL/min/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has atomoxetine → metabolites (unspecified) (metabolism); metoprolol → alpha-hydroxymetoprolol (metabolism); desipramine → 2-hydroxydesipramine (metabolism) …, the second reading none. That field shapes the model, so the record is marked disputed.

_No reviewer record yet — the status is the scholar's closed-form checks; simulation-based reviewer checks have not been run._

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUClast | `Q74` · AUClast | 1.32 |  |  |  |  | exact (1) | Rüdesheim_2025_table_1:row3:col2, Rüdesheim_2025_table_1:row6:col2 |
| C max | `Q32` · Cmax | 1.39 |  |  |  |  | space_fold (0.95) | Rüdesheim_2025_table_1:row3:col3, Rüdesheim_2025_table_1:row6:col3 |
| clearance | `Q22` · CL | 8.96 | mL/min/kg | 1.045e-05 | m3/s | L/h | review_gapfill (0.7) | Morais_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- transposed table Rüdesheim_2025_table_1: rows are variants (CYP2D6 DGIs, CYP2D6 DDIs, Competitive inhibitors, MBI/other inhibitors, Other DDIs, MBI), the parameters are the column headers (AUClast, C max) — read one record per variant
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=atomoxetine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- estimate-method split: 'Competitive inhibitors' is one of 12 estimates of Rüdesheim_2025's substance matrix (CYP2D6 DGIs, CYP2D6 DDIs, Competitive inhibitors, MBI/other inhibitors, Other DDIs, MBI, Inducers, All DDIs, CYP2D6 DDGIs, Competitive inhibitions, Other DDGIs – MBI, All DDGIs); same population, different estimation method
- row roles (LLM): model_class=pbpk; 0/2 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'dextromethorphan' — its concentrations stay mass-only
- molar mass: none found for 'dextrorphan' — its concentrations stay mass-only
- molar mass: none found for '(R)-metoprolol' — its concentrations stay mass-only
- molar mass: none found for '(S)-metoprolol' — its concentrations stay mass-only
- molar mass: none found for 'alpha-hydroxymetoprolol' — its concentrations stay mass-only
- molar mass: none found for '2-hydroxydesipramine' — its concentrations stay mass-only
- molar mass: none found for '(E)-N-desethylclomiphene' — its concentrations stay mass-only
- molar mass: none found for '(E)-4-hydroxy-N-desethylclomiphene' — its concentrations stay mass-only
- molar mass: none found for '(E)-4-hydroxyclomiphene' — its concentrations stay mass-only
- molar mass: none found for '9-hydroxyrisperidone' — its concentrations stay mass-only
- molar mass: none found for '3-hydroxyquinidine' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Morais_2025's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table Rüdesheim_2025_table_1: units_need_context

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.833 (5/6 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['atomoxetine', 'metabolites (unspecified)', 'metabolism'], ['metoprolol', 'alpha-hydroxymetoprolol', 'metabolism'], ['desipramine', '2-hydroxydesipramine', 'metabolism'], ['dextromethorphan', 'dextrorphan', 'metabolism'], ['risperidone', '9-hydroxyrisperidone', 'metabolism']] | [] | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Morais_2025:review'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['Rüdesheim_2025_table_1:row3:col3', 'Rüdesheim_2025_table_1:row6:col3'] |
| C5_unit_missing_Q74 | fail | [mass] * [time] / [length] ** 3 |  | ['Rüdesheim_2025_table_1:row3:col2', 'Rüdesheim_2025_table_1:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 8.96 | ['Morais_2025:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['CYP2D6-mediated (PBPK model parameter)', 'CYP2D6-mediated (PBPK model parameter)', 'CYP2D6-mediated (PBPK model parameter)', 'CYP2D6-mediated (PBPK model parameter)'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 37.6 L/h | ['Morais_2025:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Batomoxetine%5D%20Atomoxetine_Rdesheim2025_competitive_inhibitors&body=Drug%3A%20atomoxetine%0ARecord%3A%20Atomoxetine_Rdesheim2025_competitive_inhibitors%0APaper%3A%20R%C3%BCdesheim_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_atomoxetine/Atomoxetine_Rdesheim2025_competitive_inhibitors%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 23:23 UTC</sub>
