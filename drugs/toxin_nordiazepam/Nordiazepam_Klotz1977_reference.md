<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nordiazepam&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/&quot;},{&quot;label&quot;:&quot;Klotz_1977 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nordiazepam_Greenblatt1988_reference&quot;,&quot;label&quot;:&quot;Greenblatt_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Greenblatt1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Malgorn2004_reference&quot;,&quot;label&quot;:&quot;Malgorn_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Malgorn2004_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Norman1981_reference&quot;,&quot;label&quot;:&quot;Norman_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Norman1981_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Wang2022_nordiazepam&quot;,&quot;label&quot;:&quot;Wang_2022_nordiazepam&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Wang2022_nordiazepam.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Wang2022_og&quot;,&quot;label&quot;:&quot;Wang_2022_og&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Wang2022_og.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Wilensky1978_reference&quot;,&quot;label&quot;:&quot;Wilensky_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Wilensky1978_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nordiazepam — `Nordiazepam_Klotz1977_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit ml/min ([length] ** 3 / [time]) vs [time].

<div class="pk-model-meta" hidden drug="Nordiazepam" model-id="Nordiazepam_Klotz1977_reference" status="rejected" stale="false" population="patients with liver disease (cirrhosis and fibrosis) and healthy subjects" measured-compound="desmethyldiazepam (nordiazepam)" parameterization="apparent" topology="1C"></div>

## Citation
Klotz U, Antonin KH, Brügel H, Bieck PR. Disposition of diazepam and its major metabolite desmethyldiazepam in patients with liver disease. Clinical pharmacology and therapeutics 21(4):430–436 (1977).
  ·  DOI: [10.1002/cpt1977214430](https://doi.org/10.1002/cpt1977214430)

## Population and dosing

**Population:** patients with liver disease (cirrhosis and fibrosis) and healthy subjects · condition hepatic dysfunction (liver cirrhosis and fibrosis); healthy controls · age group adult · n = 15 (liver disease patients), 4 (healthy subjects for DD cross-over).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** CLm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T 1/2(beta) liver disease single intravenous bolus of D | t1/2β | 99.2 | hr |
| D, T 1/2(beta) | t1/2z | 32.6 | hr |
| D, Cl | D1 | 32.3 | ml/min |
| DD, Cl | CLm/F | 11.3 | ml/min |
| p (decrease in Cl) | equation variable | 0.003 | decrease in Cl |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.143). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q310 unit ml/min ([length] ** 3 / [time]) vs [time].**

Only the abstract was available, so reported summary statistics stand in for a fitted model. None of the extracted parameters is nordiazepam's own; they describe desmethyldiazepam (nordiazepam). Extracted — desmethyldiazepam (nordiazepam): t1/2β 99.2 hr, t1/2z 32.6 hr, D1 32.3 ml/min, CLm/F 11.3 ml/min.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has desmethyldiazepam (nordiazepam), the second reading desmethyldiazepam; it also differs on 11 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T 1/2(beta) liver disease single intravenous bolus of D | `Q60` · t1/2β | 99.2 | hr | 3.571e+05 | s | h | half_life_rule (0.95) | Klotz_1977:abstract |
| D, T 1/2(beta) | `Q57` · t1/2z | 32.6 | hr | 1.174e+05 | s | h | half_life_rule (0.95) | Klotz_1977:abstract |
| D, Cl | `Q310` · D1 | 32.3 | ml/min |  |  | ml/min | exact (1) | Klotz_1977:abstract |
| DD, Cl | `Q351` · CLm/F | 11.3 | ml/min | 1.883e-07 | m3/s | ml/min | llm (0.6) | Klotz_1977:abstract |
| p (decrease in Cl) | `Q900` · equation variable | 0.003 | decrease in Cl |  |  | d·cl·ecrease·in | llm (0.6) | Klotz_1977:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q60 ('T 1/2(beta) age-matched normal subjects', value 46.6) — already have one for this compound
- covariate category for t1/2β from footnote/prose kept as documentation only (['Klotz_1977:abstract'])
- dropped unlinked row (NIL): 'p (prolongation after subchronic treatment)' — extend the ontology if this is a real PK parameter (source ['Klotz_1977:abstract'])
- unit_dimension_mismatch: 'D, Cl' → Q310 (unit '[length] ** 3 / [time]' vs ontology '[time]') — route to review
- dropped duplicate Q60 ('DD, T 1/2(beta)', value 50.9) — already have one for this compound
- covariate category for CL from footnote/prose kept as documentation only (['Klotz_1977:abstract'])
- unit_dimension_unknown: 'decrease in Cl' (equation variable)
- metabolite desmethyldiazepam (nordiazepam): Q22→Q351 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=desmethyldiazepam (nordiazepam)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=noncompartmental; 0/12 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'diazepam' — its concentrations stay mass-only
- molar mass: none found for 'desmethyldiazepam (nordiazepam)' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Klotz_1977_metadata.yaml (12 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
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

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.143 (2/14 fields) | 12 |

<details><summary>12 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cl]` |  | 32.3 | only_one_extracted |
| `gpt-oss:120b` | `parameters[d, t 1/2]` | 32.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[d]` | 32.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dd]` | 11.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[dose]` |  | 0.1 | only_one_extracted |
| `gpt-oss:120b` | `parameters[p]` |  | 0.043 | only_one_extracted |
| `gpt-oss:120b` | `parameters[p]` | 0.003 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2(beta) liver disease single intravenous bolus of d]` | 99.2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2(beta)]` |  | 32.6 | only_one_extracted |
| `gpt-oss:120b` | `parameters[t 1/2]` |  | 99.2 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | desmethyldiazepam (nordiazepam) | desmethyldiazepam | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | desmethyldiazepam (nordiazepam) | desmethyldiazepam | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q310 | fail | [time] | ml/min ([length] ** 3 / [time]) | ['Klotz_1977:abstract'] |
| C5_dimension_Q351 | pass | [length] ** 3 / [time] |  | ['Klotz_1977:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Klotz_1977:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Klotz_1977:abstract'] |
| C7_apparent_coherence | pass |  |  |  |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnordiazepam%5D%20Nordiazepam_Klotz1977_reference&body=Drug%3A%20nordiazepam%0ARecord%3A%20Nordiazepam_Klotz1977_reference%0APaper%3A%20Klotz_1977%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nordiazepam/Nordiazepam_Klotz1977_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 08:45 UTC</sub>
