<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Fungal toxins&quot;,&quot;href&quot;:&quot;toxins/FUNG.md&quot;},{&quot;label&quot;:&quot;HT-2 Toxin&quot;,&quot;href&quot;:&quot;drugs/toxin_ht_2_toxin/&quot;},{&quot;label&quot;:&quot;McKeon_2025 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ht2Toxin_Sun2015_reference&quot;,&quot;label&quot;:&quot;Sun_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ht_2_toxin/Ht2Toxin_Sun2015_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ht2Toxin_Guerre2015_reference&quot;,&quot;label&quot;:&quot;Guerre_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ht_2_toxin/Ht2Toxin_Guerre2015_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# HT-2 Toxin — `Ht2Toxin_McKeon2025_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> T1/2z has no unit; the clearance plausibility check could not be computed (+1 more).

<div class="pk-model-meta" hidden drug="HT-2 Toxin" model-id="Ht2Toxin_McKeon2025_reference" status="needs_review" stale="false" population="Norwegian adults" measured-compound="total HT-2 toxin (HT-2 and its glucuronides)" parameterization="mechanistic" topology="retention"></div>

## Citation
McKeon HP, Hoogenveen R, Sopel MM, Schepens MAA, Mengelers MJB, van den Brand AD et al. Exploring the relationship between daily intake and urinary excretion of the mycotoxins T-2 and HT-2 toxin in humans. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 201:115491 (2025).
  ·  DOI: [10.1016/j.fct.2025.115491](https://doi.org/10.1016/j.fct.2025.115491)

## Population and dosing

**Population:** Norwegian adults · condition healthy (background dietary exposure) · age group adult · n = 32.

**Dosed compound ≠ measured compound:** dosed T-2 toxin and HT-2 toxin, measured total HT-2 toxin (HT-2 and its glucuronides).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 3 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Median (half-life) | t1/2z | 4.0 | half-life |
| CL (mL/min/kg) | CL | 191.0 | mL/min/kg |
| volumes of distribution | V | 4.99 | L/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**T1/2z has no unit; the clearance plausibility check could not be computed (+1 more).**

Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — ht 2 toxin: t1/2z 4 half-life; total HT-2 toxin (HT-2 and its glucuronides): CL 191 mL/min/kg, V 4.99 L/kg.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has T-2 toxin and HT-2 toxin, the second reading HT-2 toxin; it also differs on 2 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Median (half-life) | `Q57` · t1/2z | 4.0 | half-life |  |  | h·l·alf·ife | llm (0.6) | tab_1:row5:col1 |
| CL (mL/min/kg) | `Q22` · CL | 191.0 | mL/min/kg | 0.0002228 | m3/s | L/h | review_gapfill (0.7) | Broekaert_2017:review |
| volumes of distribution | `Q61` · V | 4.99 | L/kg | 0.3493 | m3 | L | review_gapfill (0.7) | Escrivá_2017:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'Mean' — extend the ontology if this is a real PK parameter (source ['tab_1:row4:col1'])
- unit_dimension_unknown: 'half-life' (t1/2z)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=total HT-2 toxin (HT-2 and its glucuronides)
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 2 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- template fit: none — other model — not a compartmental parent–metabolite model
- status held at "Needs review" — not promoted
- row roles (LLM): model_class=other; 0/2 row label(s) assigned, 0 linked by role
- molar mass: LLM call failed (JSONDecodeError) — metabolites left in mass units
- molar mass: none found for 'T-2 toxin' — its concentrations stay mass-only
- molar mass: none found for 'HT-2 glucuronides' — its concentrations stay mass-only
- molar mass: none found for 'total HT-2 toxin (HT-2 and its glucuronides)' — its concentrations stay mass-only
- gap-filled Q22 (CL) from Broekaert_2017's review values (primary lacked it)
- gap-filled Q61 (V) from Escrivá_2017's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- table tab_1: unbound_uncertainty
- table tab_1: units_need_context
- table tab_1: unparsed_numeric_cell

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.5 (3/6 fields) | 3 |

<details><summary>3 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[mean]` |  | 4.9 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | T-2 toxin and HT-2 toxin | HT-2 toxin | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | total HT-2 toxin (HT-2 and its glucuronides) | total HT-2 (HT-2 + glucuronides) | mismatch |

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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Broekaert_2017:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Escrivá_2017:review'] |
| C5_unit_missing_Q57 | fail | [time] | half-life | ['tab_1:row5:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 191 | ['Broekaert_2017:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 802 L/h | ['Broekaert_2017:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 349 L | ['Escrivá_2017:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ht_2_toxin/Ht2Toxin_McKeon2025_reference/Ht2Toxin_McKeon2025_reference_matlab.zip" download>Ht2Toxin_McKeon2025_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ht_2_toxin/Ht2Toxin_McKeon2025_reference/Ht2Toxin_McKeon2025_reference_sbml.zip" download>Ht2Toxin_McKeon2025_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ht_2_toxin/Ht2Toxin_McKeon2025_reference/Ht2Toxin_McKeon2025_reference_cellml.zip" download>Ht2Toxin_McKeon2025_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): McKeon HP, Hoogenveen R, Sopel MM, Schepens MAA, Mengelers MJB, van den Brand AD et al. Exploring the relationship between daily intake and urinary excretion of the mycotoxins T-2 and HT-2 toxin in humans. Food and chemical toxicology : an international journal published for the British Industrial Biological Research Association 201:115491 (2025). [doi:10.1016/j.fct.2025.115491](https://doi.org/10.1016/j.fct.2025.115491)

**This record:** Pharmacolibrary, model `Ht2Toxin_McKeon2025_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_ht_2_toxin/Ht2Toxin_McKeon2025_reference>

```bibtex
@misc{pharmacolibrary_Ht2ToxinMcKeon2025reference,
  title  = {{Pharmacolibrary model Ht2Toxin_McKeon2025_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ht_2_toxin/Ht2Toxin_McKeon2025_reference},
  note   = {Parameters from doi:10.1016/j.fct.2025.115491},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bht_2_toxin%5D%20Ht2Toxin_McKeon2025_reference&body=Drug%3A%20ht_2_toxin%0ARecord%3A%20Ht2Toxin_McKeon2025_reference%0APaper%3A%20McKeon_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ht_2_toxin/Ht2Toxin_McKeon2025_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 13:46 UTC</sub>
