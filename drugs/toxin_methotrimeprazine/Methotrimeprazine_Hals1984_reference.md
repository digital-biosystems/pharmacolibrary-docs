<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methotrimeprazine&quot;,&quot;href&quot;:&quot;drugs/toxin_methotrimeprazine/&quot;},{&quot;label&quot;:&quot;Hals_1984 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Methotrimeprazine_Bagli1995_reference&quot;,&quot;label&quot;:&quot;Bagli_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methotrimeprazine/Methotrimeprazine_Bagli1995_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrimeprazine_Dahl1976_reference&quot;,&quot;label&quot;:&quot;Dahl_1976_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methotrimeprazine/Methotrimeprazine_Dahl1976_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrimeprazine_Hals1982_reference&quot;,&quot;label&quot;:&quot;Hals_1982_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methotrimeprazine/Methotrimeprazine_Hals1982_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Methotrimeprazine_ter2003_reference&quot;,&quot;label&quot;:&quot;ter_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_methotrimeprazine/Methotrimeprazine_ter2003_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Methotrimeprazine — `Methotrimeprazine_Hals1984_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Nortriptyline is an orphan metabolite formed from Amitriptyline, an unmeasured molecule, while Levomepromazine metabolites lack elimination pathways.

<div class="pk-model-meta" hidden drug="Methotrimeprazine" model-id="Methotrimeprazine_Hals1984_reference" status="rejected" stale="false" population="two poisoned patients" measured-compound="Levomepromazine" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Hals PA, Jacobsen D. Resin haemoperfusion in levomepromazine poisoning: evaluation of effect on plasma drug and metabolite levels. Human toxicology 3(6):497–503 (1984).
  ·  DOI: [10.1177/096032718400300604](https://doi.org/10.1177/096032718400300604)

## Population and dosing

**Population:** two poisoned patients · condition acute poisoning · n = 2.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The mean haemoperfusion clearance of levomepromazine | CL_HD | 114 | ml/min |
| N-desmethyl-levomepromazine | CL | 123 | ml/min |
| levomepromazine sulphoxide | CL | 151 | ml/min |
| The mean haemoperfusion clearance of amitriptyline | CL | 183 | ml/min |
| nortriptyline | CL | 183 | ml/min |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Nortriptyline is an orphan metabolite formed from Amitriptyline, an unmeasured molecule, while Levomepromazine metabolites lack elimination pathways.**

The record defines Nortriptyline as a metabolite of Amitriptyline, but Amitriptyline is not a modeled parent compound, leaving Nortriptyline unreachable from the dose. The model targets Levomepromazine, yet its metabolites, N-desmethyl-levomepromazine and Levomepromazine sulphoxide, have no clearance parameters defined in the structure. Additionally, the model relies on abstract-only data, meaning reported summary statistics serve as placeholders for a fitted pharmacokinetic model. Extracted — methotrimeprazine: CL_HD 114 ml/min; N-desmethyl-levomepromazine: CL 123 ml/min; Levomepromazine sulphoxide: CL 151 ml/min; Amitriptyline: CL 183 ml/min; Nortriptyline: CL 183 ml/min.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The mean haemoperfusion clearance of levomepromazine | `Q356` · CL_HD | 114 | ml/min | 1.9e-06 | m3/s | ml/min | llm_corrected (0.6) | Hals_1984:abstract |
| N-desmethyl-levomepromazine | `Q22` · CL | 123 | ml/min | 2.05e-06 | m3/s | ml/min | exact (1) | Hals_1984:abstract |
| levomepromazine sulphoxide | `Q22` · CL | 151 | ml/min | 2.517e-06 | m3/s | ml/min | exact (1) | Hals_1984:abstract |
| The mean haemoperfusion clearance of amitriptyline | `Q22` · CL | 183 | ml/min | 3.05e-06 | m3/s | ml/min | llm_confirmed (0.6) | Hals_1984:abstract |
| nortriptyline | `Q22` · CL | 183 | ml/min | 3.05e-06 | m3/s | ml/min | exact (1) | Hals_1984:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Levomepromazine
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 5/5 row label(s) assigned, 5 linked by role; re-tagged Levomepromazine→parent ×1, Levomepromazine→N-desmethyl-levomepromazine ×1, Levomepromazine→Levomepromazine sulphoxide ×1, Levomepromazine→Amitriptyline ×1, Levomepromazine→Nortriptyline ×1
- molar mass: none of 1 PubChem candidate(s) is 'Levomepromazine sulphoxide' (LLM) — left in mass units
- molar mass: none of 1 PubChem candidate(s) is 'Nortriptyline' (LLM) — left in mass units
- molar mass: none found for 'Levomepromazine sulphoxide' — its concentrations stay mass-only
- molar mass: none found for 'Nortriptyline' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Hals_1984_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review
- 0 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hals_1984:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hals_1984:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hals_1984:abstract'] |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Hals_1984:abstract'] |
| C5_dimension_Q356 | pass | [length] ** 3 / [time] |  | ['Hals_1984:abstract'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 123 | ['Hals_1984:abstract'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown', 'unknown'] |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 7.38 L/h | ['Hals_1984:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 9.06 L/h | ['Hals_1984:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11 L/h | ['Hals_1984:abstract'] |
| C9_phys_window_Q22 | pass | clearance within physiological range | 11 L/h | ['Hals_1984:abstract'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethotrimeprazine%5D%20Methotrimeprazine_Hals1984_reference&body=Drug%3A%20methotrimeprazine%0ARecord%3A%20Methotrimeprazine_Hals1984_reference%0APaper%3A%20Hals_1984%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methotrimeprazine/Methotrimeprazine_Hals1984_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 07:22 UTC</sub>
