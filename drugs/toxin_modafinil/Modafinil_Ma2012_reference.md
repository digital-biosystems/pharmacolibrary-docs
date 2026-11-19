<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Modafinil&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/&quot;},{&quot;label&quot;:&quot;Ma_2012 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Modafinil_Darwish2009_reference&quot;,&quot;label&quot;:&quot;Darwish_2009_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Darwish2009_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Tao2010_reference&quot;,&quot;label&quot;:&quot;Tao_2010_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Tao2010_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Thorpy2020_reference&quot;,&quot;label&quot;:&quot;Thorpy_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Thorpy2020_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Willavize2017_reference&quot;,&quot;label&quot;:&quot;Willavize_2017_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Willavize2017_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Wong1999v2_reference&quot;,&quot;label&quot;:&quot;Wong_1999_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Wong1999v2_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Liu2026_control_group&quot;,&quot;label&quot;:&quot;Liu_2026_control_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Liu2026_control_group.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Modafinil_Liu2026_gz_group&quot;,&quot;label&quot;:&quot;Liu_2026_gz_group&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_modafinil/Modafinil_Liu2026_gz_group.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Modafinil — `Modafinil_Ma2012_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> Retention function incomplete: distribution parameters A1 and A2 are missing, preventing calculation of compartmental volume ratios.

<div class="pk-model-meta" hidden drug="Modafinil" model-id="Modafinil_Ma2012_reference" status="needs_review" stale="false" population="Male mice (Kunming strain)" measured-compound="Modafinil" parameterization="mechanistic" topology="retention"></div>

## Citation
Ma ZQ, Hong ZY, Wang WS, Tao F. [Pharmacokinetics--pharmacodynamics of modafinil in mice]. Yao xue xue bao = Acta pharmaceutica Sinica 47(1):101–104 (2012).

## Population and dosing

**Population:** Male mice (Kunming strain).

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** whole-body retention function, 2 exponential pools (burden and retained fraction; no volume) — template `TK_Retention`.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** Model withheld: a core parameter is unspecified.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| t1/2alpha | t1/2α | 0.42 | h |
| t1/2beta | t1/2β | 3.1 | h |
| t(max) | tmax | 1.0 | h |
| C(max) | Cmax | 41.34 | mg x L(-1) |
| AUC(0-inifinity) | AUC | 142.22 | mg x L(-1) x h |
| apparent total clearance | CL | 19.5 | L/h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Retention function incomplete: distribution parameters A1 and A2 are missing, preventing calculation of compartmental volume ratios.**

The model was constructed solely from abstract summary statistics rather than a full parameter fit. Although distribution and terminal half-lives are reported, the record lacks the specific distribution coefficients (A1, A2) required to define the retention function. Consequently, the volume of distribution cannot be properly resolved from the provided clearance and half-life data. Extracted — modafinil: t1/2α 0.42 h, t1/2β 3.1 h, tmax 1 h, Cmax 41.3 mg x L(-1), AUC 142 mg x L(-1) x h, CL 19.5 L/h.

<sub>reviewed by qwen3.8-flash-next</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| t1/2alpha | `Q59` · t1/2α | 0.42 | h | 1512 | s | h | half_life_rule (0.95) | Ma_2012:abstract |
| t1/2beta | `Q60` · t1/2β | 3.1 | h | 1.116e+04 | s | h | half_life_rule (0.95) | Ma_2012:abstract |
| t(max) | `Q56` · tmax | 1.0 | h | 3600 | s | h | llm (0.6) | Ma_2012:abstract |
| C(max) | `Q32` · Cmax | 41.34 | mg x L(-1) | 0.04134 | kg/m3 | mg/l | llm (0.6) | Ma_2012:abstract |
| AUC(0-inifinity) | `Q88` · AUC | 142.22 | mg x L(-1) x h | 512 | kg*s/m3 | mg/(h·l) | exact (1) | Ma_2012:abstract |
| apparent total clearance | `Q22` · CL | 19.5 | L/h | 5.417e-06 | m3/s | L/h | review_gapfill (0.7) | Thorpy_2020:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=Modafinil
- topology: phase rates/half-lives with no volume or clearance — a retention function (TK_Retention)
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Thorpy_2020's review values (primary lacked it)
- skipped review gap-fill of V2: primary is RETENTION (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is RETENTION (peripheral family needs ≥2C)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Ma_2012_metadata.yaml (5 record(s)); values are summary statistics, not a fitted model
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
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Thorpy_2020:review'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Ma_2012:abstract'] |
| C5_dimension_Q56 | pass | [time] |  | ['Ma_2012:abstract'] |
| C5_dimension_Q59 | pass | [time] |  | ['Ma_2012:abstract'] |
| C5_dimension_Q60 | pass | [time] |  | ['Ma_2012:abstract'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['Ma_2012:abstract'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 19.5 | ['Thorpy_2020:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 19.5 L/h | ['Thorpy_2020:review'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_modafinil/Modafinil_Ma2012_reference/Modafinil_Ma2012_reference_matlab.zip" download>Modafinil_Ma2012_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_modafinil/Modafinil_Ma2012_reference/Modafinil_Ma2012_reference_sbml.zip" download>Modafinil_Ma2012_reference_sbml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_modafinil/Modafinil_Ma2012_reference/Modafinil_Ma2012_reference_cellml.zip" download>Modafinil_Ma2012_reference_cellml.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Ma ZQ, Hong ZY, Wang WS, Tao F. [Pharmacokinetics--pharmacodynamics of modafinil in mice]. Yao xue xue bao = Acta pharmaceutica Sinica 47(1):101–104 (2012).

**This record:** Pharmacolibrary, model `Modafinil_Ma2012_reference`. <https://pharmacolibrary.github.io/#/drugs/toxin_modafinil/Modafinil_Ma2012_reference>

```bibtex
@misc{pharmacolibrary_ModafinilMa2012reference,
  title  = {{Pharmacolibrary model Modafinil_Ma2012_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_modafinil/Modafinil_Ma2012_reference},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmodafinil%5D%20Modafinil_Ma2012_reference&body=Drug%3A%20modafinil%0ARecord%3A%20Modafinil_Ma2012_reference%0APaper%3A%20Ma_2012%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_modafinil/Modafinil_Ma2012_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-15 13:04 UTC</sub>
