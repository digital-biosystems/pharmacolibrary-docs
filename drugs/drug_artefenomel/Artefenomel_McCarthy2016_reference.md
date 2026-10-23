<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;Artefenomel&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/&quot;},{&quot;label&quot;:&quot;McCarthy_2016 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Artefenomel_AbdRahman2020_reference&quot;,&quot;label&quot;:&quot;Abd-Rahman_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_AbdRahman2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artefenomel_McCarthy2019_reference&quot;,&quot;label&quot;:&quot;McCarthy_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_McCarthy2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Artefenomel_McCarthy2020_reference&quot;,&quot;label&quot;:&quot;McCarthy_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_artefenomel/Artefenomel_McCarthy2020_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Artefenomel — `Artefenomel_McCarthy2016_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> CL has no unit.

<div class="pk-model-meta" hidden drug="Artefenomel" model-id="Artefenomel_McCarthy2016_reference" status="needs_review" stale="false" population="healthy adults" measured-compound="artefenomel" parameterization="apparent" topology="2C"></div>

## Citation
McCarthy JS, Baker M, O'Rourke P, Marquart L, Griffin P, Hooft van Huijsduijnen R et al. Efficacy of OZ439 (artefenomel) against early Plasmodium falciparum blood-stage malaria infection in healthy volunteers. The Journal of antimicrobial chemotherapy 71(9):2620–2627 (2016).
  ·  DOI: [10.1093/jac/dkw174](https://doi.org/10.1093/jac/dkw174)

## Population and dosing

**Population:** healthy adults · condition healthy · age group adult.

**Dosing:** 100, 200, 500 mg, oral, single.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** CL/F, Q/F, V1/F, V2/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Vc/F (L) | V1/F | 189 | L |
| Vp/F (L) | V2/F | 1573 | L |
| CL/F (L/h) | CL/F | 40.9 | L/h |
| Q/F (L/h) | Q/F | 12.7 | L/h |
| Ka (h−1) | kabs | 0.18 | h−1 |
| parasite clearance half-life | CL | 3.6 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**CL has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (CL), so that value has no SI equivalent. Extracted — artefenomel: V1/F 189 L, V2/F 1.57e+03 L, CL/F 40.9 L/h, Q/F 12.7 L/h, kabs 0.18 h−1, CL 3.6 h.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Vc/F (L) | `Q290` · V1/F | 189 | L | 0.189 | m3 | L | exact (1) | McCarthy_2016:other_prose |
| Vp/F (L) | `Q82` · V2/F | 1573 | L | 1.573 | m3 | L | exact (1) | McCarthy_2016:other_prose |
| CL/F (L/h) | `Q27` · CL/F | 40.9 | L/h | 1.136e-05 | m3/s | L/h | exact (1) | McCarthy_2016:other_prose |
| Q/F (L/h) | `Q69` · Q/F | 12.7 | L/h | 3.528e-06 | m3/s | L/h | exact (1) | McCarthy_2016:other_prose |
| Ka (h−1) | `Q49` · kabs | 0.18 | h−1 | 5e-05 | 1/s | 1/h | exact (1) | McCarthy_2016:other_prose |
| parasite clearance half-life | `Q22` · CL | 3.6 | h |  |  | h | boundary (0.8) | McCarthy_2016:discussion_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- salvaged Q290 ('Vc/F (L)'=189) from results prose — parameter table was unreadable
- salvaged Q82 ('Vp/F (L)'=1573) from results prose — parameter table was unreadable
- salvaged Q27 ('CL/F (L/h)'=40.9) from results prose — parameter table was unreadable
- salvaged Q69 ('Q/F (L/h)'=12.7) from results prose — parameter table was unreadable
- salvaged Q49 ('Ka (h−1)'=0.18) from results prose — parameter table was unreadable
- salvaged Q22 ('parasite clearance half-life'=3.6) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=artefenomel
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- skipped review gap-fill of TLAG: primary's parameterization (rate-constant / ka-only) does not use it

**Extraction notes:**
- table DKW174TB2: unbound_uncertainty
- table DKW174TB2: unparsed_numeric_cell
- final table DKW174TB2: no supported point estimates; targeted recovery unresolved
- table McCarthy_2016_table_1: ragged_grid
- table McCarthy_2016_table_1: unparsed_numeric_cell
- transposed table McCarthy_2016_table_1: logical view retains original source coordinates
- companion parameter table 1 transcribed (51 record(s))
- LLM selected parameter table(s) 1, 2

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 6 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_unit_missing_Q22 | fail | [length] ** 3 / [time] | h | ['McCarthy_2016:discussion_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q27 | pass | clearance within physiological range | 40.9 L/h | ['McCarthy_2016:other_prose'] |
| C9_phys_window_Q290 | pass | volume within physiological range | 189 L | ['McCarthy_2016:other_prose'] |
| C9_phys_window_Q82 | pass | volume within physiological range | 1.57e+03 L | ['McCarthy_2016:other_prose'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference/Artefenomel_McCarthy2016_reference_modelica.zip" download>Artefenomel_McCarthy2016_reference_modelica.zip</a> <span class="pk-size">(3.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference/Artefenomel_McCarthy2016_reference_fmi.zip" download>Artefenomel_McCarthy2016_reference_fmi.zip</a> <span class="pk-size">(4.3 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference/Artefenomel_McCarthy2016_reference_matlab.zip" download>Artefenomel_McCarthy2016_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference/Artefenomel_McCarthy2016_reference_matlab_simbio.zip" download>Artefenomel_McCarthy2016_reference_matlab_simbio.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference/Artefenomel_McCarthy2016_reference_sbml.zip" download>Artefenomel_McCarthy2016_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference/Artefenomel_McCarthy2016_reference_cellml.zip" download>Artefenomel_McCarthy2016_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): McCarthy JS, Baker M, O'Rourke P, Marquart L, Griffin P, Hooft van Huijsduijnen R et al. Efficacy of OZ439 (artefenomel) against early Plasmodium falciparum blood-stage malaria infection in healthy volunteers. The Journal of antimicrobial chemotherapy 71(9):2620–2627 (2016). [doi:10.1093/jac/dkw174](https://doi.org/10.1093/jac/dkw174)

**This record:** Pharmacolibrary v26.09, model `Artefenomel_McCarthy2016_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference>

```bibtex
@misc{pharmacolibrary_ArtefenomelMcCarthy2016reference,
  title  = {{Pharmacolibrary model Artefenomel_McCarthy2016_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference},
  note   = {Parameters from doi:10.1093/jac/dkw174},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bartefenomel%5D%20Artefenomel_McCarthy2016_reference&body=Drug%3A%20artefenomel%0ARecord%3A%20Artefenomel_McCarthy2016_reference%0APaper%3A%20McCarthy_2016%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_artefenomel/Artefenomel_McCarthy2016_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-22 10:47 UTC</sub>
