<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;acetylsalicylic acid&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/&quot;},{&quot;label&quot;:&quot;Zapadniuk_1987 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AcetylsalicylicAcid_Bayoumy2025_reference&quot;,&quot;label&quot;:&quot;Bayoumy_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Bayoumy2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Thoueille2023_reference&quot;,&quot;label&quot;:&quot;Thoueille_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Thoueille2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Dziubina2026_reference&quot;,&quot;label&quot;:&quot;Dziubina_2026_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Dziubina2026_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Koh2025_reference&quot;,&quot;label&quot;:&quot;Koh_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Koh2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;AcetylsalicylicAcid_Shi2008_reference&quot;,&quot;label&quot;:&quot;Shi_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Shi2008_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# acetylsalicylic acid — `AcetylsalicylicAcid_Zapadniuk1987_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> This paper's disposition core is incomplete.

<div class="pk-model-meta" hidden drug="acetylsalicylic acid" model-id="AcetylsalicylicAcid_Zapadniuk1987_reference" status="needs_review" stale="false" population="young, elderly, and old patients" measured-compound="acetylsalicylic acid" parameterization="mechanistic" topology="1C"></div>

## Citation
Zapadniuk VI, Korkushko OV, Bezverkhaia IS, Belyĭ AA. [Age-related characteristics of the pharmacokinetics of acetylsalicylic acid]. Farmakologiia i toksikologiia 50(2):79–82 (1987).

## Population and dosing

**Population:** young, elderly, and old patients · age group mixed.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 5 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| The half-life in elderly patients | t1/2z | 6.19 | hrs |
| 6-TGN clearance | CL | 4.6 | L/h |
| VTFV | V | 2660.0 | L |
| first-order absorption rate constant (ka) | kabs | 1.1 | h -1 |
| Lag 0 (h) | tlag | 2.81 | h |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.556). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**This paper's disposition core is incomplete.**

A volume and a clearance/elimination estimate from this paper are needed to build its model. Review values from other papers (Bayoumy_2025, Hong_2008, Koh_2025, Thoueille_2023) cannot stand in for this paper's evidence. Only the abstract was available, so reported summary statistics stand in for a fitted model. Extracted — acetylsalicylic acid: t1/2z 6.19 hrs, CL 4.6 L/h, V 2.66e+03 L, kabs 1.1 h -1, tlag 2.81 h.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of cl m /f: this record has 2.76, the second reading none; it also differs on 3 more fields. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| The half-life in elderly patients | `Q57` · t1/2z | 6.19 | hrs | 2.228e+04 | s | h | llm (0.6) | Zapadniuk_1987:abstract |
| 6-TGN clearance | `Q22` · CL | 4.6 | L/h | 1.278e-06 | m3/s | L/h | review_gapfill (0.7) | Bayoumy_2025:review |
| VTFV | `Q61` · V | 2660.0 | L | 2.66 | m3 | L | review_gapfill (0.7) | Thoueille_2023:review |
| first-order absorption rate constant (ka) | `Q49` · kabs | 1.1 | h -1 | 0.0003056 | 1/s | 1/h | review_gapfill (0.7) | Hong_2008:review |
| Lag 0 (h) | `Q83` · tlag | 2.81 | h | 1.012e+04 | s | h | review_gapfill (0.7) | Koh_2025:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped duplicate Q57 ('The half-life in old patients', value 12.2) — already have one for this compound
- dropped duplicate Q57 ('The half-life in young patients', value 4.47) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=acetylsalicylic acid
- abstract-only: no full text was available, so these values were read from the abstract's prose — reported summary statistics, not a fitted model
- gap-filled Q22 (CL) from Bayoumy_2025's review values (primary lacked it)
- gap-filled Q61 (V) from Thoueille_2023's review values (primary lacked it)
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Hong_2008's review values (primary lacked it)
- gap-filled Q83 (tlag) from Koh_2025's review values (primary lacked it)

**Extraction notes:**
- no GROBID TEI available — transcribed from abstract in Zapadniuk_1987_metadata.yaml (3 record(s)); values are summary statistics, not a fitted model

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.556 (5/9 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[cl m /f]` | 2.76 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ka]` | 0.33 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[lag 0]` | 2.81 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[vtfv]` | 2660.0 |  | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 1 |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] |  | ['Bayoumy_2025:review'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Hong_2008:review'] |
| C5_dimension_Q57 | pass | [time] |  | ['Zapadniuk_1987:abstract'] |
| C5_dimension_Q61 | pass | [length] ** 3 |  | ['Thoueille_2023:review'] |
| C5_dimension_Q83 | pass | [time] |  | ['Koh_2025:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 4.6 | ['Bayoumy_2025:review'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 4.6 L/h | ['Bayoumy_2025:review'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 2.66e+03 L | ['Thoueille_2023:review'] |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference/AcetylsalicylicAcid_Zapadniuk1987_reference_modelica.zip" download>AcetylsalicylicAcid_Zapadniuk1987_reference_modelica.zip</a> <span class="pk-size">(4.1 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference/AcetylsalicylicAcid_Zapadniuk1987_reference_fmi.zip" download>AcetylsalicylicAcid_Zapadniuk1987_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference/AcetylsalicylicAcid_Zapadniuk1987_reference_matlab.zip" download>AcetylsalicylicAcid_Zapadniuk1987_reference_matlab.zip</a> <span class="pk-size">(3.5 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference/AcetylsalicylicAcid_Zapadniuk1987_reference_matlab_simbio.zip" download>AcetylsalicylicAcid_Zapadniuk1987_reference_matlab_simbio.zip</a> <span class="pk-size">(2.9 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference/AcetylsalicylicAcid_Zapadniuk1987_reference_sbml.zip" download>AcetylsalicylicAcid_Zapadniuk1987_reference_sbml.zip</a> <span class="pk-size">(2.7 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference/AcetylsalicylicAcid_Zapadniuk1987_reference_cellml.zip" download>AcetylsalicylicAcid_Zapadniuk1987_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Zapadniuk VI, Korkushko OV, Bezverkhaia IS, Belyĭ AA. [Age-related characteristics of the pharmacokinetics of acetylsalicylic acid]. Farmakologiia i toksikologiia 50(2):79–82 (1987).

**This record:** Pharmacolibrary v26.09, model `AcetylsalicylicAcid_Zapadniuk1987_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference>

```bibtex
@misc{pharmacolibrary_AcetylsalicylicAcidZapadniuk1987reference,
  title  = {{Pharmacolibrary model AcetylsalicylicAcid_Zapadniuk1987_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacetylsalicylic_acid%5D%20AcetylsalicylicAcid_Zapadniuk1987_reference&body=Drug%3A%20acetylsalicylic_acid%0ARecord%3A%20AcetylsalicylicAcid_Zapadniuk1987_reference%0APaper%3A%20Zapadniuk_1987%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_acetylsalicylic_acid/AcetylsalicylicAcid_Zapadniuk1987_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 12:54 UTC</sub>
