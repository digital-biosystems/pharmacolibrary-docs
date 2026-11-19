<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Risperidone&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/&quot;},{&quot;label&quot;:&quot;Perlstein_2022 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Risperidone_Kneller2020v2_reference&quot;,&quot;label&quot;:&quot;Kneller_2020_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Kneller2020v2_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks&quot;,&quot;label&quot;:&quot;Mahdy_2023_gestation_of_pregnancy_40_weeks&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_risperidone/Risperidone_Mahdy2023_gestation_of_pregnancy_40_weeks.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Risperidone — `Risperidone_Perlstein2022_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected for an orphan 9-OH-risperidone metabolite lacking an absorption rate constant and a 'week 1' intercompartmental clearance unit incompatible with conversion to SI units.

<div class="pk-model-meta" hidden drug="Risperidone" model-id="Risperidone_Perlstein2022_reference" status="rejected" stale="false" population="Patients with a diagnosis of schizophrenia or schizoaffective disorder" measured-compound="Total active moiety (TAM; sum of risperidone and 9-OH-risperidone)" parameterization="apparent" topology="general_linear"></div>

## Citation
Perlstein I, Merenlender Wagner A, Gomeni R, Lamson M, Harary E, Spiegelstein O et al. Population Pharmacokinetic Modeling and Simulation of TV-46000: A Long-Acting Injectable Formulation of Risperidone. Clinical pharmacology in drug development 11(7):865-877 (2022).
  ·  DOI: [10.1002/cpdd.1078](https://doi.org/10.1002/cpdd.1078)

## Population and dosing

**Population:** Patients with a diagnosis of schizophrenia or schizoaffective disorder · condition schizophrenia or schizoaffective disorder · age group adult · n = 97.

**Dosing:** 2, 3, 4, 5, 6, 50, 75, 100, 150, 225 mg, sc, multiple, every 720 h.

**Dosed compound ≠ measured compound:** dosed TV-46000 (risperidone subcutaneous formulation), measured Total active moiety (TAM; sum of risperidone and 9-OH-risperidone).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| td (week) | Frel | 2.69 | week |
| ff, % | kfm | 0.511 |  |
| CL/F, L/wk | CL/F | 354 | L/wk |
| V/F, L | V/F | 374 | L |
| k23 (week 1) | Q | 1.48 | week 1 |
| 2 mg | equation variable | 428 | ng · h/mL |
| KaSC-RIS | kabs | 2.84 | 1/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected for an orphan 9-OH-risperidone metabolite lacking an absorption rate constant and a 'week 1' intercompartmental clearance unit incompatible with conversion to SI units.**

The 9-OH-risperidone metabolite is assigned to compartment zero with no linked absorption rate constant, rendering it unreachable from the dose. Additionally, the intercompartmental clearance Q is reported with the non-standard unit 'week 1', which prevents conversion to standard international units. These structural and unit inconsistencies led to the rejection of the model record. Extracted — Total active moiety (TAM): Frel 2.69 week, kfm 0.511, CL/F 354 L/wk, V/F 374 L, Q 1.48 week 1; Total active moiety (TAM; sum of risperidone and 9-OH-risperidone): kabs 2.84 1/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| td (week) | `Q87` · Frel | 2.69 | week |  |  | week | llm (0.6) | cpdd1078-tbl-0002:row1:col2 |
| ff, % | `Q305` · kfm | 0.511 |  |  |  |  | llm (0.6) | cpdd1078-tbl-0002:row5:col2 |
| CL/F, L/wk | `Q27` · CL/F | 354 | L/wk | 5.853e-07 | m3/s | l/week | exact (1) | cpdd1078-tbl-0002:row6:col2 |
| V/F, L | `Q76` · V/F | 374 | L | 0.374 | m3 | l | exact (1) | cpdd1078-tbl-0002:row7:col2 |
| k23 (week 1) | `Q30` · Q | 1.48 | week 1 |  |  | week1 | exact (1) | cpdd1078-tbl-0002:row8:col2 |
| 2 mg | `Q900` · equation variable | 428 | ng · h/mL |  |  | (h·ng)/ml | llm (0.6) | Perlstein_2022_table_3:row2:col1, Perlstein_2022_table_3:row2:col2, Perlstein_2022_table_3:row2:col3 |
| KaSC-RIS | `Q49` · kabs | 2.84 | 1/h | 0.0007889 | 1/s | 1/h | review_gapfill (0.7) | Kozielska_2012:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'td1 (week)' — extend the ontology if this is a real PK parameter (source ['cpdd1078-tbl-0002:row2:col2'])
- dropped PD-category row 'ss' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['cpdd1078-tbl-0002:row3:col2'])
- dropped unlinked row (NIL): 'ss1' — extend the ontology if this is a real PK parameter (source ['cpdd1078-tbl-0002:row4:col2'])
- unit_dimension_unknown: 'week 1' (Q)
- dropped duplicate Q30 ('k32 (week 1)', value '2.34') — already have one for this compound
- implicit units: 'k23 (week 1)' — the LLM proposed '1/week', whose dimension does not fit Q30; left unset
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=Total active moiety (TAM; sum of risperidone and 9-OH-risperidone)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [0]
- status held at "Needs review" — not promoted
- row roles: per-genotype parameters — typical value from the reference group: 2 mg
- row roles: 12 row(s) kept on the molecule their table section names, against the LLM's assignment
- row roles (LLM): model_class=compartmental; 13/13 row label(s) assigned, 4 linked by role; re-tagged parent→Total active moiety (TAM) ×9
- molar mass: no plausible PubChem entry for 'Total active moiety (TAM; sum of risperidone and 9-OH-risperidone)' ('Total active moiety') — left in mass units
- molar mass: none found for 'Total active moiety (TAM; sum of risperidone and 9-OH-risperidone)' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Kozielska_2012's review values (primary lacked it)
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table cpdd1078-tbl-0002: unbound_uncertainty
- table Perlstein_2022_table_3: unparsed_numeric_cell
- companion parameter table 3 transcribed (12 record(s))
- LLM selected parameter table(s) 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['cpdd1078-tbl-0002:row6:col2'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Kozielska_2012:review'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['cpdd1078-tbl-0002:row7:col2'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] | week 1 | ['cpdd1078-tbl-0002:row8:col2'] |
| C5_unit_missing_Q305 | fail | 1 / [time] |  | ['cpdd1078-tbl-0002:row5:col2'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['Weibull release function (td, ss, ff)', 'unknown'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.11 L/h | ['cpdd1078-tbl-0002:row6:col2'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 374 L | ['cpdd1078-tbl-0002:row7:col2'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Brisperidone%5D%20Risperidone_Perlstein2022_reference&body=Drug%3A%20risperidone%0ARecord%3A%20Risperidone_Perlstein2022_reference%0APaper%3A%20Perlstein_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_risperidone/Risperidone_Perlstein2022_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:51 UTC</sub>
