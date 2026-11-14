<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Cigarette toxins&quot;,&quot;href&quot;:&quot;toxins/CIG.md&quot;},{&quot;label&quot;:&quot;Polonium-210&quot;,&quot;href&quot;:&quot;drugs/toxin_polonium_210/&quot;},{&quot;label&quot;:&quot;R\u00e4\u00e4f_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Polonium210_Li2008_reference&quot;,&quot;label&quot;:&quot;Li_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_polonium_210/Polonium210_Li2008_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Polonium-210 — `Polonium210_Rf2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The record fails because the disposition parameters lack required initial amounts A1 and A2, preventing retention function assembly from the abstract-only summary statistics.

<div class="pk-model-meta" hidden drug="Polonium-210" model-id="Polonium210_Rf2015_reference" status="needs_review" stale="false" population="five male volunteers" measured-compound="Polonium" parameterization="mechanistic" topology="retention"></div>

## Citation
Rääf CL, Holstein H, Holm E, Roos P. Hair as an indicator of the body content of polonium in humans: preliminary results from study of five male volunteers. Journal of environmental radioactivity 141:71–75 (2015).
  ·  DOI: [10.1016/j.jenvrad.2014.12.004](https://doi.org/10.1016/j.jenvrad.2014.12.004)

## Population and dosing

**Population:** five male volunteers · condition healthy · age group adult · n = 5.

**Dosed compound ≠ measured compound:** dosed Polonium-209, measured Polonium.

## Model

**Structure:** whole-body retention function, 2 exponential pools (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 2 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| short-term component (74%) ... biological half-time | t1/2α | 16 | d |
| long-term component (26%) ... half-time | t1/2γ | 93 | d |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The record fails because the disposition parameters lack required initial amounts A1 and A2, preventing retention function assembly from the abstract-only summary statistics.**

The disposition model requires initial amounts A1 and A2 to define the retention function, but these parameters are absent from the extracted data. Additionally, the record derives parameters solely from summary statistics in the paper abstract rather than a fitted population model. Although terminal half-life and elimination rate parameters are listed, the incomplete disposition structure blocks model construction. Extracted — Polonium: t1/2α 16 d, t1/2γ 93 d.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| short-term component (74%) ... biological half-time | `Q59` · t1/2α | 16 | d | 1.382e+06 | s | d | llm_corrected (0.6) | Rääf_2015:abstract |
| long-term component (26%) ... half-time | `Q89` · t1/2γ | 93 | d | 8.035e+06 | s | d | llm (0.6) | Rääf_2015:abstract |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| peaking at | Q47 | llm |
| biological half-time | Q57 | exact |

## Departures & gaps

**Interpretation flags:**
- covariate weight for t1/2z from footnote/prose kept as documentation only (['Rääf_2015:abstract'])
- relinked 'half-time' Q100 → Q57: a half-life by its label (the unit decides, not the label)
- dropped duplicate Q57 ('half-time', value '15') — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Polonium
- toxin: 1 screen link(s) set aside — the record holds only half-lives / rate constants, a retention function
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- molar mass: no plausible PubChem entry for 'Polonium' ('polonium') — left in mass units
- molar mass: none found for 'Polonium' — its concentrations stay mass-only
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- review gap-fill skipped: this record measures 'Polonium', not polonium_210 — the review values are the parent's

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Rääf_2015_metadata.yaml (6 record(s)); values are summary statistics, not a fitted model
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review
- 1 value(s) printed only as a range — midpoint taken, record routed to review

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 2 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['Rääf_2015:abstract'] |
| C5_dimension_Q57 | pass | [time] |  | ['Rääf_2015:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Rääf_2015:abstract'] |
| C5_dimension_Q89 | pass | [time] |  | ['Rääf_2015:abstract'] |
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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_polonium_210/Polonium210_Rf2015_reference/Polonium210_Rf2015_reference_matlab.zip" download>Polonium210_Rf2015_reference_matlab.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_polonium_210/Polonium210_Rf2015_reference/Polonium210_Rf2015_reference_sbml.zip" download>Polonium210_Rf2015_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_polonium_210/Polonium210_Rf2015_reference/Polonium210_Rf2015_reference_cellml.zip" download>Polonium210_Rf2015_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Rääf CL, Holstein H, Holm E, Roos P. Hair as an indicator of the body content of polonium in humans: preliminary results from study of five male volunteers. Journal of environmental radioactivity 141:71–75 (2015). [doi:10.1016/j.jenvrad.2014.12.004](https://doi.org/10.1016/j.jenvrad.2014.12.004)

**This record:** Pharmacolibrary, model `Polonium210_Rf2015_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_polonium_210/Polonium210_Rf2015_reference>

```bibtex
@misc{pharmacolibrary_Polonium210Rf2015reference,
  title  = {{Pharmacolibrary model Polonium210_Rf2015_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_polonium_210/Polonium210_Rf2015_reference},
  note   = {Parameters from doi:10.1016/j.jenvrad.2014.12.004},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolonium_210%5D%20Polonium210_Rf2015_reference&body=Drug%3A%20polonium_210%0ARecord%3A%20Polonium210_Rf2015_reference%0APaper%3A%20R%C3%A4%C3%A4f_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_polonium_210/Polonium210_Rf2015_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-12 23:33 UTC</sub>
