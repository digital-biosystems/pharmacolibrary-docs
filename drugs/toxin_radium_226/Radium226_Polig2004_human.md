<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Airborne pollutants&quot;,&quot;href&quot;:&quot;toxins/AIR.md&quot;},{&quot;label&quot;:&quot;Radium-226&quot;,&quot;href&quot;:&quot;drugs/toxin_radium_226/&quot;},{&quot;label&quot;:&quot;Polig_2004 \u00b7 human&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Radium226_Arazi2010_reference&quot;,&quot;label&quot;:&quot;Arazi_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_radium_226/Radium226_Arazi2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Radium226_Donaher2023_reference&quot;,&quot;label&quot;:&quot;Donaher_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_radium_226/Radium226_Donaher2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Radium-226 — `Radium226_Polig2004_human`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q308 unit d⁻¹ (1 / [time]) vs [length] ** 3 / [time]; Q44 unit d⁻¹ (1 / [time]) vs dimensionless.

<div class="pk-model-meta" hidden drug="Radium-226" model-id="Radium226_Polig2004_human" status="rejected" stale="false" population="humans and beagle dogs" measured-compound="Radium-226" parameterization="mechanistic" topology="retention"></div>

## Citation
Polig E, Lloyd RD, Bruenger FW, Miller SC. Biokinetic model of radium in humans and beagles. Health physics 86(1):42–55 (2004).
  ·  DOI: [10.1097/00004032-200401000-00007](https://doi.org/10.1097/00004032-200401000-00007)

## Population and dosing

**Population:** humans and beagle dogs · condition exposure · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Blood to soft tissues | Q3 | 1.18 | d⁻¹ |
| Excretion | fe | 26.0 | d⁻¹ |
| total clearance rate from blood | kel | 157 | d Ϫ1 |
| half-life | t1/2z | 6.4 | min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q308 unit d⁻¹ (1 / [time]) vs [length] ** 3 / [time]; Q44 unit d⁻¹ (1 / [time]) vs dimensionless.**

A reported unit could not be converted (Q3 and fe), so that value has no SI equivalent. Extracted — radium 226: Q3 1.18 d⁻¹, fe 26 d⁻¹, kel 157 d Ϫ1, t1/2z 6.4 min.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Blood to soft tissues | `Q308` · Q3 | 1.18 | d⁻¹ |  |  | 1/d | llm (0.6) | Polig_2004_table_2:row11:col3 |
| Excretion | `Q44` · fe | 26.0 | d⁻¹ |  |  | 1/d | exact (1) | Polig_2004_table_2:row13:col3 |
| total clearance rate from blood | `Q47` · kel | 157 | d Ϫ1 | 0.001817 | 1/s | 1/h | toxin_unit_relink (0.85) | Polig_2004:other_prose |
| half-life | `Q57` · t1/2z | 6.4 | min | 384 | s | h | half_life_rule (0.95) | Polig_2004:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'human' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Blood to bone surfaces' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row0:col3'])
- dropped unlinked row (NIL): 'Bone surfaces to blood' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row1:col3'])
- dropped unlinked row (NIL): 'Blood to forming trabecular bone (apposition)' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row2:col3'])
- dropped unlinked row (NIL): 'Blood to resting trabecular bone (augmentation)' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row3:col3'])
- dropped unlinked row (NIL): 'Diminution bone to blood' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row4:col3'])
- dropped unlinked row (NIL): 'Blood to forming cortical bone (apposition)' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row6:col3'])
- dropped unlinked row (NIL): 'Blood to resting cortical bone (augmentation)' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row7:col3'])
- routed 'Augmentation' → Q312 (IIV) to iiv — variability estimate, not a structural parameter
- dropped unlinked row (NIL): 'Diminution' — extend the ontology if this is a real PK parameter (source ['Polig_2004_table_2:row10:col3'])
- unit_dimension_mismatch: 'Blood to soft tissues' → Q308 (unit '1 / [time]' vs ontology '[length] ** 3 / [time]') — route to review
- unit_dimension_mismatch: 'Excretion' → Q44 (unit '1 / [time]' vs ontology 'dimensionless') — route to review
- salvaged Q47 ('total clearance rate from blood'=157) from results prose — parameter table was unreadable
- salvaged Q57 ('half-life'=6.4) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Radium-226
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- population split: 'human' subgroup of Polig_2004 (paper reports 2 populations: beagle, human)
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table Polig_2004_table_2: unparsed_numeric_cell
- LLM selected parameter table(s) 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q308 | fail | [length] ** 3 / [time] | d⁻¹ (1 / [time]) | ['Polig_2004_table_2:row11:col3'] |
| C5_dimension_Q44 | fail | dimensionless | d⁻¹ (1 / [time]) | ['Polig_2004_table_2:row13:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bradium_226%5D%20Radium226_Polig2004_human&body=Drug%3A%20radium_226%0ARecord%3A%20Radium226_Polig2004_human%0APaper%3A%20Polig_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_radium_226/Radium226_Polig2004_human%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-09 11:16 UTC</sub>
