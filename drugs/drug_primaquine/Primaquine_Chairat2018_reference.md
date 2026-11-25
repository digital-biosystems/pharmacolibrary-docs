<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;primaquine&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/&quot;},{&quot;label&quot;:&quot;Chairat_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Primaquine_Sridharan2019_reference&quot;,&quot;label&quot;:&quot;Sridharan_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_primaquine/Primaquine_Sridharan2019_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# primaquine — `Primaquine_Chairat2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> MTT has no unit.

<div class="pk-model-meta" hidden drug="primaquine" model-id="Primaquine_Chairat2018_reference" status="needs_review" stale="false" population="healthy adult volunteers" measured-compound="primaquine" parameterization="apparent" topology="parent_metabolite"></div>

## Citation
Chairat K, Jittamala P, Hanboonkunupakarn B, Pukrittayakamee S, Hanpithakpong W, Blessborn D et al. Enantiospecific pharmacokinetics and drug-drug interactions of primaquine and blood-stage antimalarial drugs. The Journal of antimicrobial chemotherapy 73(11):3102–3113 (2018).
  ·  DOI: [10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297)

## Population and dosing

**Population:** healthy adult volunteers · condition healthy · age group adult · n = 49.

**Dosing:** 30 mg, oral, single.

## Model

**Structure:** parent + metabolite; no model was built for this record.  
**Parameterization:** CL/F, V/F, V3/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 10 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | IIV |
|---|---|---|---|---|
| F (%) | Fab | 100 |  | 13.8 (None% RSE) |
| MTT (h) | MTT | 0.833 | h |  |
| No. of transit compartments | n_transit | 5 |  |  |
| CL/FPRQ (L/h) | CL/F | 23.1 | L/h |  |
| V/FPRQ (L) | V3/F | 160 | L |  |
| Fm (%) | fm | 0.460 |  |  |
| CL/FCPRQ (L/h) | CL | 0.377 | L/h |  |
| V/FCPRQ (L) | V | 10.5 | L |  |
| V/FPRQ | V/F | 22.3 | L |  |
| Lag time (h) | tlag | 0.0 | h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**MTT has no unit.**

Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (MTT), so that value has no SI equivalent. Extracted — primaquine: Fab 100, MTT 0.833 h, n_transit 5, CL/F 23.1 L/h, V3/F 160 L, V/F 22.3 L, tlag 0 h; carboxyprimaquine: fm 0.46, CL 0.377 L/h, V 10.5 L.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the links between molecules: this record has primaquine → carboxyprimaquine (metabolism), the second reading none; it also differs on 15 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source | IIV |
|---|---|---|---|---|---|---|---|---|---|
| F (%) | `Q40` · Fab | 100 |  |  |  |  | exact (1) | dky297-T1:row3:col5 | 13.8 (None% RSE) |
| MTT (h) | `Q81` · MTT | 0.833 | h |  |  | h | exact (1) | dky297-T1:row4:col5, dky297-T1:row4:col6 |  |
| No. of transit compartments | `Q311` · n_transit | 5 |  |  |  |  | llm_corrected (0.6) | dky297-T1:row5:col5 |  |
| CL/FPRQ (L/h) | `Q27` · CL/F | 23.1 | L/h | 6.417e-06 | m3/s | l/h | llm (0.6) | dky297-T1:row6:col5, dky297-T1:row6:col6 |  |
| V/FPRQ (L) | `Q78` · V3/F | 160 | L | 0.16 | m3 | l | llm (0.6) | dky297-T1:row7:col5, dky297-T1:row7:col6 |  |
| Fm (%) | `Q45` · fm | 0.460 |  |  |  |  | exact (1) | dky297-T1:row8:col5, dky297-T1:row8:col6 |  |
| CL/FCPRQ (L/h) | `Q22` · CL | 0.377 | L/h | 1.047e-07 | m3/s | l/h | exact (1) | dky297-T1:row9:col5, dky297-T1:row9:col6 |  |
| V/FCPRQ (L) | `Q61` · V | 10.5 | L | 0.0105 | m3 | l | exact (1) | dky297-T1:row10:col5, dky297-T1:row10:col6 |  |
| V/FPRQ | `Q76` · V/F | 22.3 | L | 0.0223 | m3 | L | llm (0.6) | dky297-T1:row15:col5, dky297-T1:row15:col6, dky297-T1:row18:col5, dky297-T1:row18:col6 |  |
| Lag time (h) | `Q83` · tlag | 0.0 | h | 0 | s | h | review_gapfill (0.7) | Fasinu_2022_2:review |  |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><td><code>IIV</code></td><td>Reported interindividual variability.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'NA'
- NIL: refused to back-fill base 'NIL' from footnote/prose loose number 1000 (source ['dky297-T1:footnote']); the table cell was unparseable — needs review
- implicit units: 'V/FPRQ' → L (from the paper text: "Table 1 lists the parameter as 'V/FPRQ (L)', i.e. volume of distribution adjusted for bioavailability in litres (text: '")
- metabolite volume: 'V/FCPRQ (L)' Q63→Q61 for carboxyprimaquine — it is 1-compartment, so its central volume is its only volume
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=primaquine
- template fit: PK_3M_3C — first-pass formation; parent 2 + hepatic, metabolites [1] (site presystemic: 'Incorporation of hepatic first-pass metabolism showed a significant improvement (P &lt; 0.05) in model fit (ΔOFV of −260, −')
- row roles (LLM): model_class=compartmental; 22/22 row label(s) assigned, 39 linked by role; re-tagged primaquine→parent ×68, primaquine→carboxyprimaquine ×36
- skipped review gap-fill of V2: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is PARENT_METABOLITE (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Fasinu_2022_2's review values (primary lacked it)

**Extraction notes:**
- companion parameter table 2 transcribed (0 record(s), model stage 'final')
- LLM selected parameter table(s) 1, 2
- LLM region Chairat_2018:other_prose: no JSON records returned

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.2 (4/20 fields) | 16 |

<details><summary>16 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [['primaquine', 'carboxyprimaquine', 'metabolism']] | [] | mismatch |
| `gpt-oss-120b` | `parameters[cl/fcprq]` | 0.377 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/fprq]` | 23.1 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[cl/fprq]` |  | 23.1 | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` | 100 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[f]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` | 0.460 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[fm]` |  | 0.460 | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag time]` | 0.0 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` | 0.833 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[mtt]` |  | 0.833 | only_one_extracted |
| `gpt-oss-120b` | `parameters[no. of transit compartments]` | 5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[no. of transit compartments]` |  | 5 | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fcprq]` | 10.5 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fprq]` | 160 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[v/fprq]` |  | 160 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 9 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['dky297-T1:row9:col5', 'dky297-T1:row9:col6'] |
| C5_dimension_Q27 | pass | [length] ** 3 / [time] |  | ['dky297-T1:row6:col5', 'dky297-T1:row6:col6'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['dky297-T1:row10:col5', 'dky297-T1:row10:col6'] |
| C5_dimension_Q76 | pass | [length] ** 3 |  | ['dky297-T1:row15:col5', 'dky297-T1:row15:col6', 'dky297-T1:row18:col5', 'dky297-T1:row18:col6'] |
| C5_dimension_Q78 | pass | [length] ** 3 |  | ['dky297-T1:row7:col5', 'dky297-T1:row7:col6'] |
| C5_dimension_Q83 | pass | [time] |  | ['Fasinu_2022_2:review'] |
| C5_unit_missing_Q81 | fail | [time] | h | ['dky297-T1:row4:col5', 'dky297-T1:row4:col6'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.377 L/h | ['dky297-T1:row9:col5', 'dky297-T1:row9:col6'] |
| C9_phys_window_Q27 | pass | clearance within physiological range | 23.1 L/h | ['dky297-T1:row6:col5', 'dky297-T1:row6:col6'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 10.5 L | ['dky297-T1:row10:col5', 'dky297-T1:row10:col6'] |
| C9_phys_window_Q76 | pass | volume within physiological range | 22.3 L | ['dky297-T1:row15:col5', 'dky297-T1:row15:col6', 'dky297-T1:row18:col5', 'dky297-T1:row18:col6'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference_modelica.zip" download>Primaquine_Chairat2018_reference_modelica.zip</a> <span class="pk-size">(5.5 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference_fmi.zip" download>Primaquine_Chairat2018_reference_fmi.zip</a> <span class="pk-size">(4.5 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference_matlab.zip" download>Primaquine_Chairat2018_reference_matlab.zip</a> <span class="pk-size">(3.8 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference_sbml.zip" download>Primaquine_Chairat2018_reference_sbml.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_primaquine/Primaquine_Chairat2018_reference/Primaquine_Chairat2018_reference_cellml.zip" download>Primaquine_Chairat2018_reference_cellml.zip</a> <span class="pk-size">(3.6 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Chairat K, Jittamala P, Hanboonkunupakarn B, Pukrittayakamee S, Hanpithakpong W, Blessborn D et al. Enantiospecific pharmacokinetics and drug-drug interactions of primaquine and blood-stage antimalarial drugs. The Journal of antimicrobial chemotherapy 73(11):3102–3113 (2018). [doi:10.1093/jac/dky297](https://doi.org/10.1093/jac/dky297)

**This record:** Pharmacolibrary, model `Primaquine_Chairat2018_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_primaquine/Primaquine_Chairat2018_reference>

```bibtex
@misc{pharmacolibrary_PrimaquineChairat2018reference,
  title  = {{Pharmacolibrary model Primaquine_Chairat2018_reference}},
  author = {{Pharmacolibrary}},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_primaquine/Primaquine_Chairat2018_reference},
  note   = {Parameters from doi:10.1093/jac/dky297},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no model was built for this record. The engineer builds a model only from a record that passed validation; see the record's status and the checks that blocked it._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprimaquine%5D%20Primaquine_Chairat2018_reference&body=Drug%3A%20primaquine%0ARecord%3A%20Primaquine_Chairat2018_reference%0APaper%3A%20Chairat_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_primaquine/Primaquine_Chairat2018_reference%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · extracted 2026-10-07 07:50 UTC</sub>
