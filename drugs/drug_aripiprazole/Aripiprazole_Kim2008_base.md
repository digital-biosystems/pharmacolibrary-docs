<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;aripiprazole&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/&quot;},{&quot;label&quot;:&quot;Kim_2008 \u00b7 base&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Aripiprazole_Kim2008_final&quot;,&quot;label&quot;:&quot;Kim_2008_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Kim2008_final.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Simon2015_reference&quot;,&quot;label&quot;:&quot;Simon_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Simon2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_base&quot;,&quot;label&quot;:&quot;Hermans_2023_base&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_base.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Aripiprazole_Hermans2023_final&quot;,&quot;label&quot;:&quot;Hermans_2023_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_aripiprazole/Aripiprazole_Hermans2023_final.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# aripiprazole — `Aripiprazole_Kim2008_base`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit m ([length]) vs [mass] / [length] ** 3.

<div class="pk-model-meta" hidden drug="aripiprazole" model-id="Aripiprazole_Kim2008_base" status="rejected" stale="false" population="psychiatric patients with schizophrenia, schizophreniform disorder, and schizoaffective disorder" measured-compound="aripiprazole" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Kim JR, Seo HB, Cho JY, Kang DH, Kim YK, Bahk WM et al. Population pharmacokinetic modelling of aripiprazole and its active metabolite, dehydroaripiprazole, in psychiatric patients. British journal of clinical pharmacology 66(6):802–810 (2008).
  ·  DOI: [10.1111/j.1365-2125.2008.03223.x](https://doi.org/10.1111/j.1365-2125.2008.03223.x)

## Population and dosing

**Population:** psychiatric patients with schizophrenia, schizophreniform disorder, and schizoaffective disorder · condition schizophrenia, schizophreniform disorder, schizoaffective disorder · age group adult · n = 80.

**Dosing:** 5, 15, 45 mg, oral, multiple, every 24 h.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F, V1/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| CL/F (l h -1 ) | CL/F | 2.37 | l h -1 |
| V/F (l) | V/F | 192 | l |
| ka (h -1 ) | kabs | 1.06 | h -1 |
| CL(m)/fm (l h -1 ) | CL/F | 7.90 | l h -1 |
| V(m)/fm (l) | V1/F | 950 | l |
| s 2 m | Km | 0.00490 | m |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.9). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C5 dimension mismatch on a structural parameter — unit dimension conflicts with the parameter: Q1 unit m ([length]) vs [mass] / [length] ** 3.**

A reported unit could not be converted (Km), so that value has no SI equivalent. Extracted — aripiprazole: CL/F 2.37 l h -1, V/F 192 l, kabs 1.06 h -1; dehydroaripiprazole: CL/F 7.9 l h -1, V1/F 950 l, Km 0.0049 m.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of s 2 m: this record has 0.00490, the second reading none. That field does not shape the model.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| CL/F (l h -1 ) | `Q27` · CL/F | 2.37 | l h -1 | 6.583e-07 | m3/s | l/h | exact (1) | tab_1:row3:col1 |
| V/F (l) | `Q76` · V/F | 192 | l | 0.192 | m3 | l | exact (1) | tab_1:row8:col1 |
| ka (h -1 ) | `Q49` · kabs | 1.06 | h -1 | 0.0002944 | 1/s | 1/h | exact (1) | tab_1:row9:col1 |
| CL(m)/fm (l h -1 ) | `Q27` · CL/F | 7.90 | l h -1 | 2.194e-06 | m3/s | l/h | exact (1) | tab_1:row14:col1 |
| V(m)/fm (l) | `Q290` · V1/F | 950 | l | 0.95 | m3 | l | exact (1) | tab_1:row15:col1 |
| s 2 m | `Q1` · Km | 0.00490 | m |  |  | m | llm (0.6) | tab_1:row17:col1 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- routed 's 2' → Q315 (sigma) to residual_error — variability estimate, not a structural parameter
- unit_dimension_mismatch: 's 2 m' → Q1 (unit '[length]' vs ontology '[mass] / [length] ** 3') — route to review
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=aripiprazole
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- template fit: PK_3M_9C — formed from central; parent 1, metabolites [1]
- status held at "Needs review" — not promoted
- model-stage split: 'base model / estimate (se)' is the base model of Kim_2008 (paper reports 2 stages: base model / estimate (se), final model / estimate (se)); same population, different model-building step
- row roles: per-genotype parameters — typical value from the reference group: CL/FI (l h -1 ) †
- row roles (LLM): model_class=compartmental; 14/14 row label(s) assigned, 10 linked by role; re-tagged parent→dehydroaripiprazole ×8

**Extraction notes:**
- table tab_1: unbound_uncertainty
- LLM selected parameter table(s) 2

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.9 (9/10 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[s 2 m]` | 0.00490 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q1 | fail | [mass] / [length] ** 3 | m ([length]) | ['tab_1:row17:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row3:col1'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['tab_1:row14:col1'] |
| C5_dimension_Q290 | pass | [length] ** 3 |  | ['tab_1:row15:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['tab_1:row9:col1'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['tab_1:row8:col1'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 2.37 L/h | ['tab_1:row3:col1'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 7.9 L/h | ['tab_1:row14:col1'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 950 L | ['tab_1:row15:col1'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 192 L | ['tab_1:row8:col1'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Baripiprazole%5D%20Aripiprazole_Kim2008_base&body=Drug%3A%20aripiprazole%0ARecord%3A%20Aripiprazole_Kim2008_base%0APaper%3A%20Kim_2008%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_aripiprazole/Aripiprazole_Kim2008_base%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-23 11:22 UTC</sub>
