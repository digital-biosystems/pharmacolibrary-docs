<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Ethylphosphate&quot;,&quot;href&quot;:&quot;drugs/toxin_ethylphosphate/&quot;},{&quot;label&quot;:&quot;Valcke_2009 \u00b7 no_of_risk_estimates_1&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ethylphosphate — `Ethylphosphate_Valcke2009_no_of_risk_estimates_1`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Ethylphosphate" model-id="Ethylphosphate_Valcke2009_no_of_risk_estimates_1" status="rejected" stale="false" population="healthy children aged 3-7 (Quebec general population)" measured-compound="ethylphosphate" parameterization="apparent" topology="general_linear"></div>

## Citation
Valcke M, Bouchard M. Determination of no-observed effect level (NOEL)-biomarker equivalents to interpret biomonitoring data for organophosphorus pesticides in children. Environmental health : a global access science source 8:5 (2009).
  ·  DOI: [10.1186/1476-069X-8-5](https://doi.org/10.1186/1476-069X-8-5)

## Population and dosing

**Population:** healthy children aged 3-7 (Quebec general population) · condition chronic environmental exposure to organophosphorus pesticides · age group child · n = 442 urine samples from children aged 3-7 (unknown number of children).

**Dosed compound ≠ measured compound:** dosed chlorpyrifos, measured ethylphosphate.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** Vm/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Methylphosphates | equation variable | 0 |  |
| Sum of methyl+ethylphosphates | equation variable | 0 |  |
| max individual risk estimate from volume-weighted concentrations | Vm/F | 1.6 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.222). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — ethylphosphate: Vm/F 1.6.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on the links between molecules: this record has chlorpyrifos → ethylphosphate (metabolite); malathion → methylphosphate (metabolite), the second reading none; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|
| Methylphosphates | `Q900` · equation variable | 0 |  | 0 |  | llm (0.6) | T3:row4:col5, T3:row8:col5, T3:row12:col5 |
| Sum of methyl+ethylphosphates | `Q900` · equation variable | 0 |  | 0 |  | llm (0.6) | T3:row6:col5, T3:row10:col5, T3:row14:col5 |
| max individual risk estimate from volume-weighted concentrations | `Q367` · Vm/F | 1.6 |  |  | L | boundary (0.8) | Valcke_2009:prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- compound tags: 3 row(s) → methylphosphate (name 3)
- column 'no. of risk estimates &gt;1' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Ethylphosphates' — extend the ontology if this is a real PK parameter (source ['T3:row5:col5', 'T3:row9:col5', 'T3:row13:col5'])
- dropped duplicate Q900 ('1- Comparison of the dose, reconstructed from creatinine-adjusted concentrations, with the ADI', value '130') — already have one for this compound
- dropped unlinked row (NIL): '2- Comparison of the dose, reconstructed from volume-weighted concentrations, with the ADI' — extend the ontology if this is a real PK parameter (source ['Valcke_2009_table_4:row3:col6', 'Valcke_2009_table_4:row4:col6', 'Valcke_2009_table_4:row5:col6'])
- salvaged Q61 ('max individual risk estimate from volume-weighted concentrations'=1.6) from results prose — parameter table was unreadable
- metabolite ethylphosphate: Q61→Q367 — only the metabolite is measured and fm is not identifiable, so its CL/V are apparent (fm-divided)
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=ethylphosphate
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — only the metabolite is modelled — no parent compartment
- status held at "Needs review" — not promoted
- population split: 'no. of risk estimates &gt;1' subgroup of Valcke_2009 (paper reports 3 populations: no. of risk estimates &gt;1, risk estimatea mean, risk estimatea median)
- row roles (LLM): model_class=compartmental; 0/5 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'chlorpyrifos' — its concentrations stay mass-only
- molar mass: none found for 'methylphosphate' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table T3: units_need_context
- table Valcke_2009_table_4: ambiguous_uncertainty_binding
- table Valcke_2009_table_4: units_need_context
- companion parameter table 4 transcribed (30 record(s))
- no LLM table selection; kept 2 deterministically-scored parameter table(s)
- toxin: the located table(s) gave no kinetic value — 11 record(s) read from the paper's prose

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.222 (2/9 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [['chlorpyrifos', 'ethylphosphate', 'metabolite'], ['malathion', 'methylphosphate', 'metabolite']] | [] | mismatch |
| `gpt-oss:120b` | `model.parameterization` | apparent | mechanistic | mismatch |
| `gpt-oss:120b` | `parameters[1- comparison of the dose, reconstructed from creatinine-adjusted concentrations, with the adi]` |  | 130 | only_one_extracted |
| `gpt-oss:120b` | `parameters[2- comparison of the dose, reconstructed from volume-weighted concentrations, with the adi]` |  | 22 | only_one_extracted |
| `gpt-oss:120b` | `parameters[max individual risk estimate from volume-weighted concentrations]` | 1.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[methylphosphates]` | 0 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[sum of methyl+ethylphosphates]` | 0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q367 | fail | [length] ** 3 |  | ['Valcke_2009:prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown', 'unknown'] |  |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bethylphosphate%5D%20Ethylphosphate_Valcke2009_no_of_risk_estimates_1&body=Drug%3A%20ethylphosphate%0ARecord%3A%20Ethylphosphate_Valcke2009_no_of_risk_estimates_1%0APaper%3A%20Valcke_2009%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ethylphosphate/Ethylphosphate_Valcke2009_no_of_risk_estimates_1%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 08:41 UTC</sub>
