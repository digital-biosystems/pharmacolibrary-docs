<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Cholecalciferol&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/&quot;},{&quot;label&quot;:&quot;Mentaverri_2019 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cholecalciferol_Deb2020_reference&quot;,&quot;label&quot;:&quot;Deb_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_Deb2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_Dueland1983_reference&quot;,&quot;label&quot;:&quot;Dueland_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_Dueland1983_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_urek2023_liposome_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_liposome_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_urek2023_liposome_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Cholecalciferol_urek2023_oil_formulation&quot;,&quot;label&quot;:&quot;\u017burek_2023_oil_formulation&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_cholecalciferol/Cholecalciferol_urek2023_oil_formulation.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Cholecalciferol — `Cholecalciferol_Mentaverri2019_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> Record rejected: the sole entry is an AUC of 2499.4 nmol·mL for 25-hydroxyvitamin D, lacking kinetic parameters like clearance or volume for model implementation.

<div class="pk-model-meta" hidden drug="Cholecalciferol" model-id="Cholecalciferol_Mentaverri2019_reference" status="rejected" stale="false" population="healthy young adults" measured-compound="25-hydroxyvitamin D" parameterization="mechanistic" topology="1C"></div>

## Citation
Mentaverri R, Souberbielle JC, Brami G, Daniel C, Fardellone P. Pharmacokinetics of a New Pharmaceutical Form of Vitamin D3 100,000 IU in Soft Capsule. Nutrients 11(3) (2019).
  ·  DOI: [10.3390/nu11030703](https://doi.org/10.3390/nu11030703)

## Population and dosing

**Population:** healthy young adults · condition healthy · age group adult · n = 53.

**Dosing:** 100000 IU, oral, single.

**Dosed compound ≠ measured compound:** dosed Cholecalciferol, measured 25-hydroxyvitamin D.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC on Day 112 (nmol.mL) | AUC | 2499.4 | nmol.mL |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Record rejected: the sole entry is an AUC of 2499.4 nmol·mL for 25-hydroxyvitamin D, lacking kinetic parameters like clearance or volume for model implementation.**

The record lists only the exposure metric 2499.4 nmol·mL for 25-hydroxyvitamin D, with no rate constants, volumes, or clearances present. This unit is dimensionally incompatible with the pharmacokinetic parameters required to define the model structure, which demand mass per time per volume. Furthermore, the specific unit could not be translated into standard SI units compatible with the simulation engine, preventing its quantitative use. Extracted — 25-hydroxyvitamin D: AUC 2.5e+03 nmol.mL.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| AUC on Day 112 (nmol.mL) | `Q88` · AUC | 2499.4 | nmol.mL | ml·nM | llm_confirmed (0.6) | Mentaverri_2019_table_2:row0:col1, Mentaverri_2019_table_2:row0:col2 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_mismatch: 'AUC on Day 112 (nmol.mL)' → Q88 (unit '[substance] * [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- unit_dimension_mismatch: 'Log AUC on Day 112 (nmol.mL)' → Q88 (unit '[substance] * [length] ** 3' vs ontology '[mass] * [time] / [length] ** 3') — route to review
- dropped duplicate Q88 ('Log AUC on Day 112 (nmol.mL)', value '7.8') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=25-hydroxyvitamin D
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles: 2 per-group rows of 25-hydroxyvitamin D summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 2/2 row label(s) assigned, 0 linked by role
- review gap-fill skipped: this record measures '25-hydroxyvitamin D', not cholecalciferol — the review values are the parent's

**Extraction notes:**
- LLM selected parameter table(s) 2
- toxin: the located table(s) gave no kinetic value — 2 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q88 | fail | [mass] * [time] / [length] ** 3 | nmol.mL ([substance] * [length] ** 3) | ['Mentaverri_2019_table_2:row0:col1', 'Mentaverri_2019_table_2:row0:col2'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcholecalciferol%5D%20Cholecalciferol_Mentaverri2019_reference&body=Drug%3A%20cholecalciferol%0ARecord%3A%20Cholecalciferol_Mentaverri2019_reference%0APaper%3A%20Mentaverri_2019%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_cholecalciferol/Cholecalciferol_Mentaverri2019_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-17 13:09 UTC</sub>
