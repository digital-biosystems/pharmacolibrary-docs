<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Ibandronate&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/&quot;},{&quot;label&quot;:&quot;Klawitter_2025 \u00b7 ib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Ibandronate_Barrett2004_reference&quot;,&quot;label&quot;:&quot;Barrett_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Barrett2004_reference.md&quot;,&quot;status&quot;:&quot;Simulated&quot;,&quot;css&quot;:&quot;pk-badge--blue&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Hanif2020_reference_formulation_bonish_150_mg_ta&quot;,&quot;label&quot;:&quot;Hanif_2020_reference_formulation_bonish_150_mg_tablets&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Hanif2020_reference_formulation_bonish_150_mg_ta.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Hanif2020_test_formulation_ppr5&quot;,&quot;label&quot;:&quot;Hanif_2020_test_formulation_ppr5&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Hanif2020_test_formulation_ppr5.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Klawitter2025_gem_ib&quot;,&quot;label&quot;:&quot;Klawitter_2025_gem_ib&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Klawitter2025_gem_ib.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Nakai2016_healthy_postmenopausal_women&quot;,&quot;label&quot;:&quot;Nakai_2016_healthy_postmenopausal_women&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Nakai2016_healthy_postmenopausal_women.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Ibandronate_Nakai2016_postmenopausal_women_with_osteoporosis&quot;,&quot;label&quot;:&quot;Nakai_2016_postmenopausal_women_with_osteoporosis&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_ibandronate/Ibandronate_Nakai2016_postmenopausal_women_with_osteoporosis.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Ibandronate — `Ibandronate_Klawitter2025_ib`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="Ibandronate" model-id="Ibandronate_Klawitter2025_ib" status="needs_review" stale="false" population="mice (i.p.) and dogs (i.v.)" measured-compound="gemcitabine-ibandronate conjugate (GEM-IB) and metabolites (IB, GEM, etc.)" parameterization="mechanistic" topology="general_linear"></div>

## Citation
Klawitter J, Easton M, Karpeisky A, Farrell KB, Thamm DH, Shokati T et al. Novel Approaches to Monitor Pharmacokinetics and Metabolism of Gemcitabine-Ibandronate Conjugate in Mice and Dogs. Molecules (Basel, Switzerland) 30(2) (2025).
  ·  DOI: [10.3390/molecules30020354](https://doi.org/10.3390/molecules30020354)

## Population and dosing

**Population:** mice (i.p.) and dogs (i.v.) · condition healthy (proof-of-concept PK study) · n = 24 mice (8 per timepoint, 3 groups) and 3 dogs.

**Dosing:** 350 mg, i.p., single.

**Dosed compound ≠ measured compound:** dosed gemcitabine-ibandronate conjugate (GEM-IB), measured gemcitabine-ibandronate conjugate (GEM-IB) and metabolites (IB, GEM, etc.).

> **Species: mouse.** This record comes from an animal study (mouse), not from people. The values, the model and its simulation are shown as the paper reports them — they describe that system, not human pharmacology (read from the LLM relevance screen, p(non-human) 1.00).

## Model

**Structure:** 1-compartment general linear model (non-mammillary edges) — template `PK_General_Linear`.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** Model available in **Models**; browser simulation unavailable.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| Cmax | Cmax | 4737 | ng/mL |
| Tmax | tmax | 0.5 | h |
| AUC | AUC | 5725 | h·ng/mL |
| Rate Constant | kel | 0.7 | 1/h |
| T1/2 | t1/2z | 0.932 | h |
| CL | CL | 956 | mL/h/kg |
| Vdss | Vss | 1037 | mL/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — ibandronate: Cmax 4.74e+03 ng/mL, tmax 0.5 h, AUC 5.72e+03 h·ng/mL, kel 0.7 1/h, t1/2z 0.932 h, CL 956 mL/h/kg, Vss 1.04e+03 mL/kg.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| Cmax | `Q32` · Cmax | 4737 | ng/mL | 0.004737 | kg/m3 | ng/ml | exact (1) | molecules-30-00354-t003:row1:col3 |
| Tmax | `Q56` · tmax | 0.5 | h | 1800 | s | h | exact (1) | molecules-30-00354-t003:row2:col3 |
| AUC | `Q88` · AUC | 5725 | h·ng/mL | 20.61 | kg*s/m3 | (h·ng)/ml | exact (1) | molecules-30-00354-t003:row3:col3 |
| Rate Constant | `Q47` · kel | 0.7 | 1/h | 0.0001944 | 1/s | 1/h | llm (0.6) | molecules-30-00354-t003:row6:col3 |
| T1/2 | `Q57` · t1/2z | 0.932 | h | 3355 | s | h | half_life_rule (0.95) | molecules-30-00354-t003:row7:col3 |
| CL | `Q22` · CL | 956 | mL/h/kg | 1.859e-05 | m3/s | ml/(h·kg) | exact (1) | molecules-30-00354-t003:row10:col3 |
| Vdss | `Q65` · Vss | 1037 | mL/kg | 0.07259 | m3 | ml/kg | llm (0.6) | molecules-30-00354-t003:row11:col3 |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Deviations:**
- `vss_as_v`: Vss (Q65) used as the distribution volume — no Vc/V reported

**Interpretation flags:**
- dropped unlinked row (NIL): 'R-Squared' — extend the ontology if this is a real PK parameter (source ['molecules-30-00354-t003:row4:col3'])
- dropped unlinked row (NIL): 'No points' — extend the ontology if this is a real PK parameter (source ['molecules-30-00354-t003:row5:col3'])
- dropped unlinked row (NIL): 'Infusion Time' — extend the ontology if this is a real PK parameter (source ['molecules-30-00354-t003:row9:col3'])
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gemcitabine-ibandronate conjugate (GEM-IB) and metabolites (IB, GEM, etc.)
- topology: 6 first-order transfer(s) across 6 compounds → general_linear
- template fit: none — noncompartmental model — not a compartmental parent–metabolite model
- population split: 'ib' subgroup of Klawitter_2025 (paper reports 2 populations: gem-ib, ib)
- row roles: 4 per-group rows of gemcitabine-ibandronate conjugate (GEM-IB) summary_statistic but 0 reference group(s) — kept as printed
- row roles: 2 per-group rows of none summary_statistic but 0 reference group(s) — kept as printed
- row roles (LLM): model_class=noncompartmental; 10/10 row label(s) assigned, 12 linked by role
- molar mass: no plausible PubChem entry for 'gemcitabine-ibandronate conjugate (GEM-IB)' ('gemcitabine-ibandronate conjugate') — left in mass units
- molar mass: no plausible PubChem entry for "2',2'-difluoro-2'-deoxyuridine-5'-phosphate (dFdUMP)" ("2',2'-difluoro-2'-deoxyuridine-5'-phosphate") — left in mass units
- molar mass: no plausible PubChem entry for 'gemcitabine-ibandronate conjugate (GEM-IB) and metabolites (IB, GEM, etc.)' ('gemcitabine-ibandronate conjugate') — left in mass units
- molar mass: none found for 'gemcitabine-ibandronate conjugate (GEM-IB)' — its concentrations stay mass-only
- molar mass: none found for "2',2'-difluoro-2'-deoxyuridine-5'-phosphate (dFdUMP)" — its concentrations stay mass-only
- molar mass: none found for 'gemcitabine-ibandronate conjugate (GEM-IB) and metabolites (IB, GEM, etc.)' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'gemcitabine-ibandronate conjugate (GEM-IB) and metabolites (IB, GEM, etc.)', not ibandronate — the review values are the parent's
- engineer: built from a record validation left at "Needs review" (toxins) — not yet confirmed by a reviewer (C6_cl_magnitude failed (ratio None))

**Extraction notes:**
- table molecules-30-00354-t003: missing_unit_binding
- table molecules-30-00354-t003: ambiguous_numeric_format
- table Klawitter_2025_table_2: ambiguous_numeric_format
- table Klawitter_2025_table_2: missing_unit_binding
- companion parameter table 2 transcribed (54 record(s))
- LLM selected parameter table(s) 2, 3

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['molecules-30-00354-t003:row10:col3'] |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['molecules-30-00354-t003:row1:col3'] |
| C5_dimension_Q47 | pass | 1 / [time] |  | ['molecules-30-00354-t003:row6:col3'] |
| C5_dimension_Q56 | pass | [time] |  | ['molecules-30-00354-t003:row2:col3'] |
| C5_dimension_Q57 | pass | [time] |  | ['molecules-30-00354-t003:row7:col3'] |
| C5_dimension_Q65 | pass | [length] ** 3 |  | ['molecules-30-00354-t003:row11:col3'] |
| C5_dimension_Q88 | pass | [mass] * [time] / [length] ** 3 |  | ['molecules-30-00354-t003:row3:col3'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 956 | ['molecules-30-00354-t003:row10:col3'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 66.9 L/h | ['molecules-30-00354-t003:row10:col3'] |
| C9_phys_window_Q65 | pass | volume within physiological range | 72.6 L | ['molecules-30-00354-t003:row11:col3'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib/Ibandronate_Klawitter2025_ib_modelica.zip" download>Ibandronate_Klawitter2025_ib_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib/Ibandronate_Klawitter2025_ib_matlab.zip" download>Ibandronate_Klawitter2025_ib_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib/Ibandronate_Klawitter2025_ib_matlab_simbio.zip" download>Ibandronate_Klawitter2025_ib_matlab_simbio.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib/Ibandronate_Klawitter2025_ib_sbml.zip" download>Ibandronate_Klawitter2025_ib_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib/Ibandronate_Klawitter2025_ib_cellml.zip" download>Ibandronate_Klawitter2025_ib_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Klawitter J, Easton M, Karpeisky A, Farrell KB, Thamm DH, Shokati T et al. Novel Approaches to Monitor Pharmacokinetics and Metabolism of Gemcitabine-Ibandronate Conjugate in Mice and Dogs. Molecules (Basel, Switzerland) 30(2) (2025). [doi:10.3390/molecules30020354](https://doi.org/10.3390/molecules30020354)

**This record:** Pharmacolibrary, model `Ibandronate_Klawitter2025_ib`. <https://pharmacolibrary.github.io/#/drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib>

```bibtex
@misc{pharmacolibrary_IbandronateKlawitter2025ib,
  title  = {{Pharmacolibrary model Ibandronate_Klawitter2025_ib}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib},
  note   = {Parameters from doi:10.3390/molecules30020354},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bibandronate%5D%20Ibandronate_Klawitter2025_ib&body=Drug%3A%20ibandronate%0ARecord%3A%20Ibandronate_Klawitter2025_ib%0APaper%3A%20Klawitter_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_ibandronate/Ibandronate_Klawitter2025_ib%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-11-14 23:27 UTC</sub>
