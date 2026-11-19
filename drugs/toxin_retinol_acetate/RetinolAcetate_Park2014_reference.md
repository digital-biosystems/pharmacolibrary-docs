<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Retinol acetate&quot;,&quot;href&quot;:&quot;drugs/toxin_retinol_acetate/&quot;},{&quot;label&quot;:&quot;Park_2014 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Retinol acetate — `RetinolAcetate_Park2014_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> The record is rejected because it contains no genuine pharmacokinetic parameters for retinol acetate, listing only non-kinetic variables like infusion duration and undefined equation coefficients.

<div class="pk-model-meta" hidden drug="Retinol acetate" model-id="RetinolAcetate_Park2014_reference" status="rejected" stale="false" population="nine subjects" measured-compound="retinol" parameterization="mechanistic" topology="1C"></div>

## Citation
Park H, Green MH. Parameter identifiability and Extended Multiple Studies Analysis of a compartmental model for human vitamin A kinetics: fixing fractional transfer coefficients for the initial steps in the absorptive process. The British journal of nutrition 111(6):1004–1010 (2014).
  ·  DOI: [10.1017/S0007114513003450](https://doi.org/10.1017/S0007114513003450)

## Population and dosing

**Population:** nine subjects · condition healthy · age group adult · n = 9.

**Dosed compound ≠ measured compound:** dosed [2H8]retinyl acetate, measured retinol.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| L(2,1) | k12 | 56.371 | 1/d |
| L(5,2) | equation variable | 0.3447 |  |
| DT(3) | D1 | 0.2333 | d |
| L(5,4) | Q | 0.6749 |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record is rejected because it contains no genuine pharmacokinetic parameters for retinol acetate, listing only non-kinetic variables like infusion duration and undefined equation coefficients.**

The sole kinetic parameter is k12, a transfer rate constant between central and peripheral compartments, which implies a two-compartment structure despite the reported one-compartment topology. The remaining entries for retinol, including an infusion duration and an undefined 'equation variable,' do not constitute valid clearance or volume estimates. Consequently, the record fails to provide the necessary kinetic quantities to describe retinol acetate disposition. Extracted — retinol acetate: k12 56.4 1/d, D1 0.233 d, Q 0.675.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| L(2,1) | `Q301` · k12 | 56.371 | 1/d | 0.0006524 | 1/s | 1/h | llm (0.6) | Park_2014_table_3:row0:col1 |
| L(5,2) | `Q900` · equation variable | 0.3447 |  | 0.3447 |  |  | llm (0.6) | Park_2014_table_3:row1:col1 |
| DT(3) | `Q310` · D1 | 0.2333 | d | 2.016e+04 | s | h | llm (0.6) | Park_2014_table_3:row2:col1, Park_2014_table_3:row2:col3 |
| L(5,4) | `Q30` · Q | 0.6749 |  |  |  |  | exact (1) | Park_2014_table_3:row3:col1, Park_2014_table_3:row3:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q30 ('L(6,5)', value '10.640') — already have one for this compound
- dropped duplicate Q30 ('L(5,6)', value '0.0336') — already have one for this compound
- dropped duplicate Q30 ('L(0,6)', value '0.0197') — already have one for this compound
- implicit units: 'L(2,1)' → 1/d (from the paper text: "The table footnote states that L(I,J) represents 'the fraction of retinol in compartment J that is transferred to compar")
- implicit units: 'DT(3)' → d (from the paper text: "The text defines DT(3) as the 'delay in the appearance of retinol...'. The figure axes in the paper show 'Time (d)', and")
- implicit units: 'L(5,4)' — the LLM proposed '1/d', whose dimension does not fit Q30; left unset
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=retinol
- toxin: 1 screen link(s) set aside — no transfer parameter and no metabolite row; one substance's kinetics
- template fit: none — only the metabolite is modelled — no parent compartment
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count
- row roles (LLM): model_class=compartmental; 7/7 row label(s) assigned, 8 linked by role; re-tagged parent→retinol ×11
- molar mass: no plausible PubChem entry for '[2H8]retinyl acetate' ('[2H8]retinyl acetate') — left in mass units
- molar mass: none found for '[2H8]retinyl acetate' — its concentrations stay mass-only

**Extraction notes:**
- LLM selected parameter table(s) 3
- toxin: the located table(s) gave no kinetic value — 4 record(s) read from the paper's prose

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0b_disposition_core | fail |  |  |  |
| C5_dimension_Q301 | pass | 1 / [time] |  | ['Park_2014_table_3:row0:col1'] |
| C5_dimension_Q310 | pass | [time] |  | ['Park_2014_table_3:row2:col1', 'Park_2014_table_3:row2:col3'] |
| C5_unit_missing_Q30 | fail | [length] ** 3 / [time] |  | ['Park_2014_table_3:row3:col1', 'Park_2014_table_3:row3:col3'] |
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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bretinol_acetate%5D%20RetinolAcetate_Park2014_reference&body=Drug%3A%20retinol_acetate%0ARecord%3A%20RetinolAcetate_Park2014_reference%0APaper%3A%20Park_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_retinol_acetate/RetinolAcetate_Park2014_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-16 01:21 UTC</sub>
