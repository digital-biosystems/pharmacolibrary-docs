<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Industrial and workplace toxins&quot;,&quot;href&quot;:&quot;toxins/IND.md&quot;},{&quot;label&quot;:&quot;Tetrabromobisphenol A&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromobisphenol_a/&quot;},{&quot;label&quot;:&quot;Schauer_2006 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TetrabromobisphenolA_Knudsen2014_reference&quot;,&quot;label&quot;:&quot;Knudsen_2014_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromobisphenol_a/TetrabromobisphenolA_Knudsen2014_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TetrabromobisphenolA_Knudsen2018_reference&quot;,&quot;label&quot;:&quot;Knudsen_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromobisphenol_a/TetrabromobisphenolA_Knudsen2018_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;TetrabromobisphenolA_Kang2009_reference&quot;,&quot;label&quot;:&quot;Kang_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_tetrabromobisphenol_a/TetrabromobisphenolA_Kang2009_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Tetrabromobisphenol A — `TetrabromobisphenolA_Schauer2006_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

> Concentration values (103, 25, 694 µmol/L) have units incompatible with the model's required mass-based structure.

<div class="pk-model-meta" hidden drug="Tetrabromobisphenol A" model-id="TetrabromobisphenolA_Schauer2006_reference" status="rejected" stale="false" population="human subjects and rats" measured-compound="Tetrabromobisphenol A" parameterization="mechanistic" topology="retention"></div>

## Citation
Schauer UM, Völkel W, Dekant W. Toxicokinetics of tetrabromobisphenol a in humans and rats after oral administration. Toxicological sciences : an official journal of the Society of Toxicology 91(1):49–58 (2006).
  ·  DOI: [10.1093/toxsci/kfj132](https://doi.org/10.1093/toxsci/kfj132)

## Population and dosing

**Population:** human subjects and rats · condition healthy · age group adult.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from the LLM relevance screen, p(non-human) 0.50).

## Model

**Structure:** retention function; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| TBBPA plasma concentrations peaked at | Cmax | 103 | micromol/l |
| half-life | t1/2z | 13 | h |
| maximal concentrations of TBBPA-glucuronide | Cmax | 25 | micromol/l |
| Peak plasma concentrations of TBBPA-sulfate | Cmax | 694 | micromol/l |
| ka, 1/hr | kabs | 0.95 | 1/hr |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Concentration values (103, 25, 694 µmol/L) have units incompatible with the model's required mass-based structure.**

The record reports peak concentrations of 103, 25, and 694 µmol/L for TBBPA and its metabolites, which use molar units. This conflicts with the structural requirement for mass-based concentration units. Additionally, the model is based solely on abstract summary statistics rather than a fitted pharmacokinetic model. Extracted — tetrabromobisphenol a: Cmax 103 micromol/l, t1/2z 13 h, kabs 0.95 1/hr; TBBPA-glucuronide: Cmax 25 micromol/l; TBBPA-sulfate: Cmax 694 micromol/l.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| TBBPA plasma concentrations peaked at | `Q32` · Cmax | 103 | micromol/l |  |  | µM/l | llm (0.6) | Schauer_2006:abstract |
| half-life | `Q57` · t1/2z | 13 | h | 4.68e+04 | s | h | half_life_rule (0.95) | Schauer_2006:abstract |
| maximal concentrations of TBBPA-glucuronide | `Q32` · Cmax | 25 | micromol/l |  |  | µM/l | llm (0.6) | Schauer_2006:abstract |
| Peak plasma concentrations of TBBPA-sulfate | `Q32` · Cmax | 694 | micromol/l |  |  | µM/l | llm_confirmed (0.6) | Schauer_2006:abstract |
| ka, 1/hr | `Q49` · kabs | 0.95 | 1/hr | 0.0002639 | 1/s | 1/h | review_gapfill (0.7) | Adachi_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'A single oral dose of' — extend the ontology if this is a real PK parameter (source ['Schauer_2006:abstract'])
- dropped unlinked row (NIL): 'five' — extend the ontology if this is a real PK parameter (source ['Schauer_2006:abstract'])
- unit_dimension_mismatch: 'TBBPA plasma concentrations peaked at' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): '3 h after administration' — extend the ontology if this is a real PK parameter (source ['Schauer_2006:abstract', 'Schauer_2006:abstract'])
- unit_dimension_mismatch: 'maximal concentrations of TBBPA-glucuronide' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Peak plasma concentrations of TBBPA-sulfate' → Q32 (unit '[substance] / [length] ** 3' vs ontology '[mass] / [length] ** 3') — route to review
- dropped unlinked row (NIL): 'within 6 h after administration' — extend the ontology if this is a real PK parameter (source ['Schauer_2006:abstract'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Tetrabromobisphenol A
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 6 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 8/8 row label(s) assigned, 0 linked by role; re-tagged Tetrabromobisphenol A→parent ×1, Tetrabromobisphenol A→TBBPA-glucuronide ×1, Tetrabromobisphenol A→TBBPA-sulfate ×1
- molar mass: no plausible PubChem entry for 'TBBPA-glucuronide' ('TBBPA-glucuronide') — left in mass units
- molar mass: none found for 'TBBPA-glucuronide' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Adachi_2024's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Schauer_2006_metadata.yaml (9 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | micromol/l ([substance] / [length] ** 3) | ['Schauer_2006:abstract'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | micromol/l ([substance] / [length] ** 3) | ['Schauer_2006:abstract'] |
| C5_dimension_Q32 | fail | [mass] / [length] ** 3 | micromol/l ([substance] / [length] ** 3) | ['Schauer_2006:abstract'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Adachi_2024:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Schauer_2006:abstract'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btetrabromobisphenol_a%5D%20TetrabromobisphenolA_Schauer2006_reference&body=Drug%3A%20tetrabromobisphenol_a%0ARecord%3A%20TetrabromobisphenolA_Schauer2006_reference%0APaper%3A%20Schauer_2006%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_tetrabromobisphenol_a/TetrabromobisphenolA_Schauer2006_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-19 17:19 UTC</sub>
