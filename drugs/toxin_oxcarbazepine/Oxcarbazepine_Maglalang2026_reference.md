<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Oxcarbazepine&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/&quot;},{&quot;label&quot;:&quot;Maglalang_2026 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Oxcarbazepine_Chen2021v2_reference&quot;,&quot;label&quot;:&quot;Chen_2021_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Chen2021v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Rodrigues2017_reference&quot;,&quot;label&quot;:&quot;Rodrigues_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Rodrigues2017_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_final_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_final_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_final_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Sinha2022_initial_estimate&quot;,&quot;label&quot;:&quot;Sinha_2022_initial_estimate&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Sinha2022_initial_estimate.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Oxcarbazepine_Yu2025_reference&quot;,&quot;label&quot;:&quot;Yu_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_oxcarbazepine/Oxcarbazepine_Yu2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxcarbazepine — `Oxcarbazepine_Maglalang2026_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q351 unit μL/min/pmol ([length] ** 3 / [time] / [substance]) vs [length] ** 3 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Oxcarbazepine" model-id="Oxcarbazepine_Maglalang2026_reference" status="rejected" stale="false" population="children aged 2-20 years with and without obesity" measured-compound="MHD (10-monohydroxy derivative)" parameterization="apparent" topology="general_linear"></div>

## Citation
Maglalang PD, Sinha J, Helfer VE, Edginton A, Zimmerman K, Hornik CD et al. Physiologically Based Pharmacokinetic Modeling of Oxcarbazepine to Characterize Its Disposition in Children with Obesity. Journal of clinical pharmacology 66(2):e70107 (2026).
  ·  DOI: [10.1002/jcph.70107](https://doi.org/10.1002/jcph.70107)

## Population and dosing

**Population:** children aged 2-20 years with and without obesity · condition epilepsy treatment (adjunctive therapy for focal-onset and generalized tonic-clonic seizures); children with and without obesity · age group mixed · n = 41.

**Dosed compound ≠ measured compound:** dosed Oxcarbazepine, measured MHD (10-monohydroxy derivative).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 2 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Metabolism and excretion | CLm/F | 0.13 | μL/min/pmol |
| Absorption | Fab | 0.8 | - |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q351 unit μL/min/pmol ([length] ** 3 / [time] / [substance]) vs [length] ** 3 / [time]; c8 unreachable/orphan compartment or unlinked metabolite.**

A reported unit could not be converted (CLm/F), so that value has no SI equivalent. Extracted — oxcarbazepine: CLm/F 0.13 μL/min/pmol, Fab 0.8 -.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| Metabolism and excretion | `Q351` · CLm/F | 0.13 | μL/min/pmol |  | µl/(min·pM) | llm_corrected (0.6) | Maglalang_2026_table_2:row0:col4, Maglalang_2026_table_2:row1:col4, Maglalang_2026_table_2:row2:col4, Maglalang_2026_table_2:row3:col4 |
| Absorption | `Q40` · Fab | 0.8 | - | 0.8 | - | exact (1) | Maglalang_2026_table_2:row8:col4, Maglalang_2026_table_2:row9:col4, Maglalang_2026_table_2:row10:col4 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table representations disagree for 'Metabolism and excretion'; source reconciliation required
- table representations disagree for 'Absorption'; source reconciliation required
- table representations disagree for 'Distribution'; source reconciliation required
- unit_dimension_mismatch: 'Metabolism and excretion' → Q351 (unit '[length] ** 3 / [time] / [substance]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_unknown: '-' (Fab)
- dropped unlinked row (NIL): 'Distribution' — extend the ontology if this is a real PK parameter (source ['Maglalang_2026_table_2:row13:col4', 'Maglalang_2026_table_2:row14:col4', 'Maglalang_2026_table_2:row15:col4', 'Maglalang_2026_table_2:row16:col4', 'Maglalang_2026_table_2:row17:col4', 'Maglalang_2026_table_2:row18:col4'])
- dropped value-less row: 'a'
- dropped value-less row: 'b'
- dropped value-less row: 'c'
- dropped value-less row: 'CLint,AKR1C1 to CLint,AKR1C4'
- dropped value-less row: 'CLint,UGT1A9'
- dropped value-less row: 'CLint,UGT2B7'
- dropped value-less row: 'CLint,H'
- dropped value-less row: 'fGFR'
- dropped value-less row: 'fu,p'
- dropped value-less row: 'LogP'
- dropped value-less row: 'MHD'
- dropped value-less row: 'OXC'
- dropped value-less row: 'PBPK'
- dropped value-less row: 'Peff,trans'
- dropped value-less row: 'T50%'
- dropped value-less row: 'compound type/pKa'
- dropped value-less row: 'partition coefficient used'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=MHD (10-monohydroxy derivative)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 1 first-order transfer(s) across 2 compounds → general_linear
- template fit: none — pbpk model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=pbpk; 0/20 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'Oxcarbazepine (OXC)' — its concentrations stay mass-only
- molar mass: none found for 'MHD (10-monohydroxy derivative of oxcarbazepine)' — its concentrations stay mass-only
- molar mass: none found for 'MHD (10-monohydroxy derivative)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'MHD (10-monohydroxy derivative)', not oxcarbazepine — the review values are the parent's

**Extraction notes:**
- table Maglalang_2026_table_2: unparsed_numeric_cell
- table jcph70107-tbl-0002: representations disagree; selected evidence retained, not merged
- LLM selected parameter table(s) 2
- dropped sensitivity-analysis table(s) 3 from the LLM selection — perturbations of a model, not a model

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q351 | fail | [length] ** 3 / [time] | μL/min/pmol ([length] ** 3 / [time] / [substance]) | ['Maglalang_2026_table_2:row0:col4', 'Maglalang_2026_table_2:row1:col4', 'Maglalang_2026_table_2:row2:col4', 'Maglalang_2026_table_2:row3:col4'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail |  |  |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxcarbazepine%5D%20Oxcarbazepine_Maglalang2026_reference&body=Drug%3A%20oxcarbazepine%0ARecord%3A%20Oxcarbazepine_Maglalang2026_reference%0APaper%3A%20Maglalang_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxcarbazepine/Oxcarbazepine_Maglalang2026_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 12:12 UTC</sub>
