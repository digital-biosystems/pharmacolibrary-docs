<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01E&quot;,&quot;href&quot;:&quot;atc/J01E.md&quot;},{&quot;label&quot;:&quot;sulfadimethoxine&quot;,&quot;href&quot;:&quot;drugs/drug_sulfadimethoxine/&quot;},{&quot;label&quot;:&quot;Boulanger_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# sulfadimethoxine — `Sulfadimethoxine_Boulanger2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

> Sulfadimethoxine clearance was recorded in L/h/kg, a unit that could not be converted to SI, preventing model validation.

<div class="pk-model-meta" hidden drug="sulfadimethoxine" model-id="Sulfadimethoxine_Boulanger2025_reference" status="rejected" stale="false" population="growing pigs" measured-compound="sulfadimethoxine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Boulanger M, Taillandier JF, Henri J, Devreese M, De Baere S, Lacroix M et al. Population pharmacokinetic modeling of sulfadimethoxine, sulfadiazine and sulfamethoxazole combined to trimethoprim in pigs. The veterinary quarterly 45(1):2565351 (2025).
  ·  DOI: [10.1080/01652176.2025.2565351](https://doi.org/10.1080/01652176.2025.2565351)

## Population and dosing

**Population:** growing pigs · condition healthy.

**Dosing:** 875, 1750 mg, oral, multiple, every 12 h.

**Dosed compound ≠ measured compound:** dosed sulfadimethoxine, trimethoprim, measured sulfadimethoxine.

> **Species: pig.** This record comes from an animal study (pig), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T1/2β SDZ (h) | t1/2β | 3.7 | h |
| AUC∞ SDZ (h x µg/mL) | AUC∞ | 99.2 | h x µg/mL |
| clearance | CL | 0.015 | L/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.375). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Sulfadimethoxine clearance was recorded in L/h/kg, a unit that could not be converted to SI, preventing model validation.**

The record lists sulfadimethoxine clearance at 0.015 L/h/kg. This unit was not recognized by the system, so the parameter lacked a standardized value. Consequently, the model was rejected due to the missing standardized clearance, despite the inclusion of a terminal half-life of 3.7 hours. Extracted — sulfadimethoxine: t1/2β 3.7 h, AUC∞ 99.2 h x µg/mL, CL 0.015 L/h/kg.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has sulfadimethoxine, trimethoprim, the second reading unknown; it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by qwen3.8-27b</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T1/2β SDZ (h) | `Q60` · t1/2β | 3.7 | h | 1.332e+04 | s | h | llm_confirmed (0.6) | Boulanger_2025_table_3:row2:col1, Boulanger_2025_table_3:row2:col3 |
| AUC∞ SDZ (h x µg/mL) | `Q17` · AUC∞ | 99.2 | h x µg/mL |  |  | (h·µg)/ml | llm_confirmed (0.6) | Boulanger_2025_table_3:row6:col1, Boulanger_2025_table_3:row6:col3 |
| clearance | `Q22` · CL | 0.015 | L/h/kg | 2.917e-07 | m3/s | L/h | exact (1) | Boulanger_2025:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q60 ('T1/2β SDMX (h)', value '14.8') — already have one for this compound
- dropped duplicate Q60 ('T1/2β SMX (h)', value '2.2') — already have one for this compound
- dropped duplicate Q60 ('T1/2β TMP (h)', value '2.9') — already have one for this compound
- unit_dimension_unknown: 'h x µg/mL' (AUC∞)
- dropped duplicate Q17 ('AUC∞ SDMX (h x µg/mL)', value '1280.3') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ SMX (h x µg/mL)', value '140.93') — already have one for this compound
- dropped duplicate Q17 ('AUC∞ TMP (h x µg/mL)', value '6.9') — already have one for this compound
- salvaged Q22 ('clearance'=0.015) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=sulfadimethoxine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- status held at "Needs review" — not promoted
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell Boulanger_2025_table_3:row2:col2 = '3.1 − 4.2'
- unparsed cell Boulanger_2025_table_3:row2:col4 = '3.2 − 6.0'
- unparsed cell Boulanger_2025_table_3:row3:col2 = '10.9 − 20.2'
- unparsed cell Boulanger_2025_table_3:row3:col4 = '9.8 − 16.5'
- unparsed cell Boulanger_2025_table_3:row4:col2 = '1.9 − 2.5'
- unparsed cell Boulanger_2025_table_3:row4:col4 = '1.8 − 3.2'
- unparsed cell Boulanger_2025_table_3:row5:col2 = '1.2 − 3.7'
- unparsed cell Boulanger_2025_table_3:row5:col4 = '1.8 − 5.8'
- unparsed cell Boulanger_2025_table_3:row6:col2 = '74.6 − 113.8'
- unparsed cell Boulanger_2025_table_3:row6:col4 = '87.2 − 220.6'
- unparsed cell Boulanger_2025_table_3:row7:col2 = '916.5 − 1709.4'
- unparsed cell Boulanger_2025_table_3:row7:col4 = '1048.7 − 2215.8'
- unparsed cell Boulanger_2025_table_3:row8:col2 = '140.92 − 140.93'
- unparsed cell Boulanger_2025_table_3:row8:col4 = '92.39 − 92.39'
- unparsed cell Boulanger_2025_table_3:row9:col2 = '3.1 − 10.7'
- unparsed cell Boulanger_2025_table_3:row9:col4 = '3.3 − 18.2'
- companion parameter table 3 transcribed (16 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.375 (3/8 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['none', 'none', 'none']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[clearance]` | 0.015 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[clearance]` |  | 0.015 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | sulfadimethoxine, trimethoprim | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | sulfadimethoxine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q60 | pass | [time] |  | ['Boulanger_2025_table_3:row2:col1', 'Boulanger_2025_table_3:row2:col3'] |
| C5_unit_missing_Q17 | fail | [mass] * [time] / [length] ** 3 | h x µg/mL | ['Boulanger_2025_table_3:row6:col1', 'Boulanger_2025_table_3:row6:col3'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.015 | ['Boulanger_2025:discussion_prose'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['none'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.05 L/h | ['Boulanger_2025:discussion_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsulfadimethoxine%5D%20Sulfadimethoxine_Boulanger2025_reference&body=Drug%3A%20sulfadimethoxine%0ARecord%3A%20Sulfadimethoxine_Boulanger2025_reference%0APaper%3A%20Boulanger_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_sulfadimethoxine/Sulfadimethoxine_Boulanger2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 10:49 UTC</sub>
