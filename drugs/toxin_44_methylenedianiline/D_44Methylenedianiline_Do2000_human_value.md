<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;4,4&#x27;-Methylenedianiline&quot;,&quot;href&quot;:&quot;drugs/toxin_44_methylenedianiline/&quot;},{&quot;label&quot;:&quot;Do_2000 \u00b7 human_value&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# 4,4'-Methylenedianiline — `D_44Methylenedianiline_Do2000_human_value`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> Rejected because the fecal excretion parameter was assigned units of mol/mL instead of a mass fraction, and the model structure includes a non-standard metabolite pathway.

<div class="pk-model-meta" hidden drug="4,4&#39;-Methylenedianiline" model-id="D_44Methylenedianiline_Do2000_human_value" status="rejected" stale="false" population="healthy individual; polyurethane plant workers; hemodialysis patients" measured-compound="4,4&#39;-Methylenedianiline and metabolites" parameterization="mechanistic" topology="manual_model_class"></div>

## Citation
Do Luu HM, Hutter JC. Pharmacokinetic modeling of 4,4'-methylenedianiline released from reused polyurethane dialyzer potting materials. Journal of biomedical materials research 53(3):276–286 (2000).
  ·  DOI: [10.1002/(sici)1097-4636(2000)53:3<276::aid-jbm13>3.0.co;2-e](https://doi.org/10.1002/(sici)1097-4636(2000)53:3<276::aid-jbm13>3.0.co;2-e)

## Population and dosing

**Population:** healthy individual; polyurethane plant workers; hemodialysis patients · condition occupational exposure; hemodialysis exposure; IV administration (rat) · age group adult.

**Dosed compound ≠ measured compound:** dosed 4,4'-Methylenedianiline, measured 4,4'-Methylenedianiline and metabolites.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** nonlinear / manual; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Dfeces | Ae | 1.0 | mol/mL |
| t 1/2 | t1/2z | 1.668 | h |
| V d | V | 201 | L |
| clearance | CL | 42 | mL/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Rejected because the fecal excretion parameter was assigned units of mol/mL instead of a mass fraction, and the model structure includes a non-standard metabolite pathway.**

The parameter representing the fraction of dose excreted unchanged was extracted with a value of 1.0 and units of mol/mL, creating a dimensional conflict with the required mass dimension. Furthermore, the model topology defines a specific metabolic sequence from 4,4'-Methylenedianiline to N-hydroxymethylenedianiline and then to N-Acetyl MDA that does not fit the standard structural configurations available for modeling. Extracted — 44 methylenedianiline: Ae 1 mol/mL; 4,4'-Methylenedianiline and metabolites: t1/2z 1.67 h, V 201 L, CL 42 mL/min.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Dfeces | `Q91` · Ae | 1.0 | mol/mL |  |  | (m·ol)/ml | llm (0.6) | Do_2000_table_p4_2:row6:col2 |
| t 1/2 | `Q57` · t1/2z | 1.668 | h | 6005 | s | h | half_life_rule (0.95) | Do_2000:other_prose |
| V d | `Q61` · V | 201 | L | 0.201 | m3 | L | space_fold (0.95) | Do_2000:discussion_prose |
| clearance | `Q22` · CL | 42 | mL/min | 7e-07 | m3/s | L/h | exact (1) | Do_2000:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Urine flow (mL/h)' — extend the ontology if this is a real PK parameter (source ['Do_2000_table_p4_2:row2:col2'])
- dropped unlinked row (NIL): 'MDA Durine' — extend the ontology if this is a real PK parameter (source ['Do_2000_table_p4_2:row3:col2'])
- dropped unlinked row (NIL): 'Metabolites Durine' — extend the ontology if this is a real PK parameter (source ['Do_2000_table_p4_2:row4:col2'])
- dropped unlinked row (NIL): 'Feces flow (mL/h)' — extend the ontology if this is a real PK parameter (source ['Do_2000_table_p4_2:row5:col2'])
- unit_dimension_mismatch: 'Dfeces' → Q91 (unit '[substance] / [length] ** 3' vs ontology '[mass]') — route to review
- table mostly unlinked (4/5 table-cell rows NIL) — likely the wrong table was located, not 1 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q57 ('t 1/2'=1.668) from results prose — parameter table was unreadable
- salvaged Q61 ('V d'=201) from results prose — parameter table was unreadable
- salvaged Q22 ('clearance'=42) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=4,4'-Methylenedianiline and metabolites
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: prose indicates saturable/MM/TMDD/time-varying kinetics — manual_model_class
- template fit: none — nonlinear / manual model class
- status held at "Needs review" — not promoted
- population split: 'human value' subgroup of Do_2000 (paper reports 2 populations: human value, rat value)
- row roles (LLM): model_class=pbpk; 9/9 row label(s) assigned, 22 linked by role; re-tagged parent→MDA metabolites ×2
- molar mass: no plausible PubChem entry for 'MDA metabolites' ('no full name in the paper') — left in mass units
- molar mass: none found for 'MDA metabolites' — its concentrations stay mass-only
- review gap-fill skipped: this record measures "4,4'-Methylenedianiline and metabolites", not 44_methylenedianiline — the review values are the parent's

**Extraction notes:**
- no TEI final-model table id; trying text-pointer table recovery
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- table Do_2000_table_p4_1: unbound_uncertainty
- table Do_2000_table_p4_1: unparsed_numeric_cell
- transposed table Do_2000_table_p4_1: logical view retains original source coordinates
- table Do_2000_table_p4_2: unparsed_numeric_cell

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q91 | fail | [mass] | mol/mL ([substance] / [length] ** 3) | ['Do_2000_table_p4_2:row6:col2'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 42 | ['Do_2000:discussion_prose'] |
| C8_topology | fail |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 2.52 L/h | ['Do_2000:discussion_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 201 L | ['Do_2000:discussion_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5B44_methylenedianiline%5D%20D_44Methylenedianiline_Do2000_human_value&body=Drug%3A%2044_methylenedianiline%0ARecord%3A%20D_44Methylenedianiline_Do2000_human_value%0APaper%3A%20Do_2000%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_44_methylenedianiline/D_44Methylenedianiline_Do2000_human_value%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 02:33 UTC</sub>
