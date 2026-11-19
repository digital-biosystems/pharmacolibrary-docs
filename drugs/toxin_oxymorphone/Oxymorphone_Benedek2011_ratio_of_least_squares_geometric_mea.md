<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Oxymorphone&quot;,&quot;href&quot;:&quot;drugs/toxin_oxymorphone/&quot;},{&quot;label&quot;:&quot;Benedek_2011 \u00b7 ratio_of_least_squares_geometric_means_oxy_crf_oxy_er&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Oxymorphone — `Oxymorphone_Benedek2011_ratio_of_least_squares_geometric_mea`

> ## <span class="pk-badge pk-badge--red">Rejected</span>

> C8 unreachable/orphan compartment or unlinked metabolite.

<div class="pk-model-meta" hidden drug="Oxymorphone" model-id="Oxymorphone_Benedek2011_ratio_of_least_squares_geometric_mea" status="rejected" stale="false" population="healthy adults at a clinical research center" measured-compound="Oxymorphone" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Benedek IH, Jobes J, Xiang Q, Fiske WD. Bioequivalence of oxymorphone extended release and crush-resistant oxymorphone extended release. Drug design, development and therapy 5:455–463 (2011).
  ·  DOI: [10.2147/DDDT.S24372](https://doi.org/10.2147/DDDT.S24372)

## Population and dosing

**Population:** healthy adults at a clinical research center · condition healthy, fasted and fed, with naltrexone at 40 mg doses · age group adult · n = 86 (30, 37, 36 safety; 27, 30, 29 PK per study).

**Dosing:** 5, 40 mg, oral, single.

## Model

**Structure:** general linear; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| AUC0–t, ng · h/mL | AUCt | 0.97 | ng · h/mL |
| Cmax, ng/mL | Cmax | 0.94 | ng/mL |
| AUC0–inf, ng · h/mL | AUC∞ | 0.97 | ng · h/mL |
| Hydromorphone Vd (L/kg) | V | 2.9 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**C8 unreachable/orphan compartment or unlinked metabolite.**

Extracted — 6-OH-oxymorphone: AUCt 0.97 ng · h/mL, Cmax 0.94 ng/mL, AUC∞ 0.97 ng · h/mL; oxymorphone: V 2.9 L/kg.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| AUC0–t, ng · h/mL | `Q19` · AUCt | 0.97 | ng · h/mL | 0.003492 | kg*s/m3 | (h·ng)/ml | exact (1) | Benedek_2011_table_4:row1:col1, Benedek_2011_table_4:row4:col1, Benedek_2011_table_4:row8:col1 |
| Cmax, ng/mL | `Q32` · Cmax | 0.94 | ng/mL | 9.4e-07 | kg/m3 | ng/ml | exact (1) | Benedek_2011_table_4:row2:col1, Benedek_2011_table_4:row6:col1, Benedek_2011_table_4:row10:col1 |
| AUC0–inf, ng · h/mL | `Q17` · AUC∞ | 0.97 | ng · h/mL | 0.003492 | kg*s/m3 | (h·ng)/ml | exact (1) | Benedek_2011_table_4:row5:col1, Benedek_2011_table_4:row9:col1 |
| Hydromorphone Vd (L/kg) | `Q61` · V | 2.9 | L/kg | 0.203 | m3 | L | review_gapfill (0.7) | Concheiro_2018:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Oxymorphone
- topology: transfer parameter unlinked (Q100) — add Kfm/formation-rate/rate-constant to the ontology; routing to review
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- population split: 'ratio of least squares geometric means (oxy-crf/oxy-er)' subgroup of Benedek_2011 (paper reports 8 populations: ratio of least squares geometric means (oxy-crf/oxy-er), ratio of least squares mean, oxy-crf/oxy-er, treatment 40 mg, fasted (n = 31) oxy-crf, treatment 40 mg, fasted (n = 31) oxy-er, treatment 40 mg, fed (n = 30) oxy-crf, treatment 40 mg, fed (n = 30) oxy-er, treatment 5 mg, fasted (n = 28) oxy-crf, treatment 5 mg, fasted (n = 28) oxy-er)
- row roles (LLM): model_class=noncompartmental; 0/9 row label(s) assigned, 0 linked by role
- molar mass: none found for '6-OH-oxymorphone' — its concentrations stay mass-only
- gap-filled Q61 (V) from Concheiro_2018's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)

**Extraction notes:**
- table Benedek_2011_table_p7_1: unbound_uncertainty
- table Benedek_2011_table_2: no_numeric_grid
- companion parameter table 2 transcribed (0 record(s))
- table Benedek_2011_table_4: unparsed_numeric_cell
- companion parameter table 4 transcribed (16 record(s))
- table Benedek_2011_table_5: unparsed_numeric_cell
- companion parameter table 5 transcribed (16 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 3 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q17 | pass | [mass] * [time] / [length] ** 3 |  | ['Benedek_2011_table_4:row5:col1', 'Benedek_2011_table_4:row9:col1'] |
| C5_dimension_Q19 | pass | [mass] * [time] / [length] ** 3 |  | ['Benedek_2011_table_4:row1:col1', 'Benedek_2011_table_4:row4:col1', 'Benedek_2011_table_4:row8:col1'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Benedek_2011_table_4:row2:col1', 'Benedek_2011_table_4:row6:col1', 'Benedek_2011_table_4:row10:col1'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Concheiro_2018:review'] |
| C8_topology | fail | ontology-linked transfer parameter on every edge | ['unknown'] |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 203 L | ['Concheiro_2018:review'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Boxymorphone%5D%20Oxymorphone_Benedek2011_ratio_of_least_squares_geometric_mea&body=Drug%3A%20oxymorphone%0ARecord%3A%20Oxymorphone_Benedek2011_ratio_of_least_squares_geometric_mea%0APaper%3A%20Benedek_2011%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_oxymorphone/Oxymorphone_Benedek2011_ratio_of_least_squares_geometric_mea%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 13:49 UTC</sub>
