<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Bacterial toxins&quot;,&quot;href&quot;:&quot;toxins/BACT.md&quot;},{&quot;label&quot;:&quot;Saxitoxin&quot;,&quot;href&quot;:&quot;drugs/toxin_saxitoxin/&quot;},{&quot;label&quot;:&quot;Pereira_2004 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Saxitoxin_Bakke2010_reference&quot;,&quot;label&quot;:&quot;Bakke_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_saxitoxin/Saxitoxin_Bakke2010_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Saxitoxin_Naseem1996_reference&quot;,&quot;label&quot;:&quot;Naseem_1996_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_saxitoxin/Saxitoxin_Naseem1996_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Saxitoxin — `Saxitoxin_Pereira2004_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

> Kint and kel have no unit; disposition incomplete — retention function missing λ1 or its half-life — TK_Retention cannot be filled.

<div class="pk-model-meta" hidden drug="Saxitoxin" model-id="Saxitoxin_Pereira2004_reference" status="needs_review" stale="false" population="freshwater mussels ( Anodonta cygnea ) exposed to toxic cyanobacteria" measured-compound="saxitoxin" parameterization="mechanistic" topology="retention"></div>

## Citation
Pereira P, Dias E, Franca S, Pereira E, Carolino M, Vasconcelos V. Accumulation and depuration of cyanobacterial paralytic shellfish toxins by the freshwater mussel Anodonta cygnea. Aquatic toxicology (Amsterdam, Netherlands) 68(4):339–350 (2004).
  ·  DOI: [10.1016/j.aquatox.2004.04.001](https://doi.org/10.1016/j.aquatox.2004.04.001)

## Population and dosing

**Population:** freshwater mussels ( Anodonta cygnea ) exposed to toxic cyanobacteria · condition chronic dietary exposure via filter feeding.

**Dosed compound ≠ measured compound:** dosed paralytic shellfish toxins from Aphanizomenon issatschenkoi ( dietary exposure ), measured saxitoxin.

> **Species: other animal.** This record comes from an animal study (other animal), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 1 exponential pool (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| mean | equation variable | 1.4 | cells1(-1) |
| cells clearance | kint | 65.3 |  |
| depuration efficiencies (starved) | kel | 6.9 | % day(-1) |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.364). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Kint and kel have no unit; disposition incomplete — retention function missing λ1 or its half-life — TK_Retention cannot be filled.**

Without a unit the value cannot be converted, so the model cannot use it. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — saxitoxin: kint 65.3, kel 6.9 % day(-1).

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has paralytic shellfish toxins from Aphanizomenon issatschenkoi ( dietary exposure ), the second reading paralytic shellfish toxins (PST); it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>the checker's own wording — not yet put into words by an LLM</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | unit_canonical | link | source |
|---|---|---|---|---|---|---|
| mean | `Q900` · equation variable | 1.4 | cells1(-1) | 1/cells1 | llm (0.6) | Pereira_2004:abstract |
| cells clearance | `Q334` · kint | 65.3 |  |  | llm_corrected (0.6) | Pereira_2004:abstract |
| depuration efficiencies (starved) | `Q47` · kel | 6.9 | % day(-1) | %/d | toxin_unit_relink (0.85) | Pereira_2004:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- unit_dimension_unknown: 'cells1(-1)' (equation variable)
- dropped duplicate Q900 ('total PST daily provided', value 40.36) — already have one for this compound
- relinked 'depuration efficiencies (starved)' Q50 → Q47: a pool's clearance rate constant, not excretion into urine or faeces (the unit decides, not the label)
- unit_dimension_unknown: '% day(-1)' (kel)
- relinked 'depuration efficiencies (fed with A. falcatus)' Q50 → Q47: a pool's clearance rate constant, not excretion into urine or faeces (the unit decides, not the label)
- dropped duplicate Q47 ('depuration efficiencies (fed with A. falcatus)', value 8.2) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=saxitoxin
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- status held at "Needs review" — not promoted
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- skipped review gap-fill of CL: primary's parameterization (rate-constant / ka-only) does not use it
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Pereira_2004_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
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
| `gpt-oss:120b` | not confirmed | 0.364 (4/11 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `parameters[cells clearance]` | 65.3 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[depurating period]` |  | 14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[exposed over a]` |  | 14 | only_one_extracted |
| `gpt-oss:120b` | `parameters[mean]` | 1.4 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[of total pst daily provided]` |  | 40.36 | only_one_extracted |
| `gpt-oss:120b` | `parameters[removed on average]` |  | 65.3 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | paralytic shellfish toxins from Aphanizomenon issatschenkoi ( dietary exposure ) | paralytic shellfish toxins (PST) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q334 | fail | 1 / [time] |  | ['Pereira_2004:abstract'] |
| C5_unit_missing_Q47 | fail | 1 / [time] | % day(-1) | ['Pereira_2004:abstract'] |
| C8_topology | pass |  |  |  |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_saxitoxin/Saxitoxin_Pereira2004_reference/Saxitoxin_Pereira2004_reference_matlab.zip" download>Saxitoxin_Pereira2004_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_saxitoxin/Saxitoxin_Pereira2004_reference/Saxitoxin_Pereira2004_reference_sbml.zip" download>Saxitoxin_Pereira2004_reference_sbml.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_saxitoxin/Saxitoxin_Pereira2004_reference/Saxitoxin_Pereira2004_reference_cellml.zip" download>Saxitoxin_Pereira2004_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Pereira P, Dias E, Franca S, Pereira E, Carolino M, Vasconcelos V. Accumulation and depuration of cyanobacterial paralytic shellfish toxins by the freshwater mussel Anodonta cygnea. Aquatic toxicology (Amsterdam, Netherlands) 68(4):339–350 (2004). [doi:10.1016/j.aquatox.2004.04.001](https://doi.org/10.1016/j.aquatox.2004.04.001)

**This record:** Pharmacolibrary, model `Saxitoxin_Pereira2004_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_saxitoxin/Saxitoxin_Pereira2004_reference>

```bibtex
@misc{pharmacolibrary_SaxitoxinPereira2004reference,
  title  = {{Pharmacolibrary model Saxitoxin_Pereira2004_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_saxitoxin/Saxitoxin_Pereira2004_reference},
  note   = {Parameters from doi:10.1016/j.aquatox.2004.04.001},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bsaxitoxin%5D%20Saxitoxin_Pereira2004_reference&body=Drug%3A%20saxitoxin%0ARecord%3A%20Saxitoxin_Pereira2004_reference%0APaper%3A%20Pereira_2004%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_saxitoxin/Saxitoxin_Pereira2004_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-11 16:12 UTC</sub>
