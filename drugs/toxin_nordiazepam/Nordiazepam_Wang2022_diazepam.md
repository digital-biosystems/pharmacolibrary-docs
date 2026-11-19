<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Nordiazepam&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/&quot;},{&quot;label&quot;:&quot;Wang_2022 \u00b7 diazepam&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nordiazepam_Greenblatt1988_reference&quot;,&quot;label&quot;:&quot;Greenblatt_1988_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Greenblatt1988_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Malgorn2004_reference&quot;,&quot;label&quot;:&quot;Malgorn_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Malgorn2004_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Norman1981_reference&quot;,&quot;label&quot;:&quot;Norman_1981_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Norman1981_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Wang2022_nordiazepam&quot;,&quot;label&quot;:&quot;Wang_2022_nordiazepam&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Wang2022_nordiazepam.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Wang2022_og&quot;,&quot;label&quot;:&quot;Wang_2022_og&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Wang2022_og.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Nordiazepam_Wilensky1978_reference&quot;,&quot;label&quot;:&quot;Wilensky_1978_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_nordiazepam/Nordiazepam_Wilensky1978_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Nordiazepam — `Nordiazepam_Wang2022_diazepam`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Nordiazepam" model-id="Nordiazepam_Wang2022_diazepam" status="rejected" stale="false" population="healthy Chinese adult volunteers" measured-compound="nordiazepam" parameterization="apparent" topology="general_linear"></div>

## Citation
Wang LL, Ren XX, He Y, Cui GF, Liu JJ, Jia J et al. Pharmacokinetics of Diazepam and Its Metabolites in Urine of Chinese Participants. Drugs in R&D 22(1):43–50 (2022).
  ·  DOI: [10.1007/s40268-021-00375-y](https://doi.org/10.1007/s40268-021-00375-y)

## Population and dosing

**Population:** healthy Chinese adult volunteers · condition healthy · age group adult · n = 28.

**Dosing:** 5 mg, oral, single.

**Dosed compound ≠ measured compound:** dosed diazepam, measured nordiazepam.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** CL/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUCt (µg/L*h) | AUCt | 77.86 | µg/L*h |
| t½z (h) | t1/2z | 119.58 | h |
| Tmax (h) | tmax | 1.93 | h |
| Cmax (µg/L) | Cmax | 2.38 | µg/L |
| CLz/F (L/h) | CL/F | 65.77 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.778). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

None of the extracted parameters is nordiazepam's own; they describe diazepam. Extracted — diazepam: AUCt 77.9 µg/L*h, t1/2z 120 h, tmax 1.93 h, Cmax 2.38 µg/L, CL/F 65.8 L/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which molecule was measured: this record has nordiazepam, the second reading diazepam; it also differs on 1 more field. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUCt (µg/L*h) | `Q19` · AUCt | 77.86 | µg/L*h | 0.2803 | kg*s/m3 | µg/(h·l) | exact (1) | Tab5:row1:col1 |
| t½z (h) | `Q57` · t1/2z | 119.58 | h | 4.305e+05 | s | h | half_life_rule (0.95) | Tab5:row2:col1 |
| Tmax (h) | `Q56` · tmax | 1.93 | h | 6948 | s | h | exact (1) | Tab5:row3:col1 |
| Cmax (µg/L) | `Q32` · Cmax | 2.38 | µg/L | 2.38e-06 | kg/m3 | µg/l | exact (1) | Tab5:row4:col1 |
| CLz/F (L/h) | `Q27` · CL/F | 65.77 | L/h | 1.827e-05 | m3/s | l/h | llm (0.6) | Tab5:row5:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'TG temazepam glucuronide, OG oxazepam glucuronide, AUCt area under the curve, t½z elimination half-life, Tmax time to Cmax, Cmax maximum concentration, CLz/F clearance'
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=nordiazepam
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'diazepam' subgroup of Wang_2022 (paper reports 3 populations: diazepam, nordiazepam, og)
- row roles (LLM): model_class=noncompartmental; 0/6 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'diazepam' — its concentrations stay mass-only
- molar mass: none found for 'temazepam glucuronide' — its concentrations stay mass-only
- molar mass: none found for 'oxazepam glucuronide' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- LLM selected parameter table(s) 5

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.778 (7/9 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['diazepam', 'nordiazepam', 'metabolism'], ['diazepam', 'temazepam glucuronide', 'metabolism'], ['temazepam glucuronide', 'oxazepam glucuronide', 'metabolism']] | [] | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | nordiazepam | diazepam | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Tab5:row1:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['Tab5:row5:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Tab5:row4:col1'] |
| C5_dimension_Q56 | pass | [time] |  | ['Tab5:row3:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Tab5:row2:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown', 'unknown'] |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 65.8 L/h | ['Tab5:row5:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnordiazepam%5D%20Nordiazepam_Wang2022_diazepam&body=Drug%3A%20nordiazepam%0ARecord%3A%20Nordiazepam_Wang2022_diazepam%0APaper%3A%20Wang_2022%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_nordiazepam/Nordiazepam_Wang2022_diazepam%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 08:45 UTC</sub>
