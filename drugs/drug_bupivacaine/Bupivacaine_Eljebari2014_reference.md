<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;bupivacaine&quot;,&quot;href&quot;:&quot;drugs/drug_bupivacaine/&quot;},{&quot;label&quot;:&quot;Eljebari_2014 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bupivacaine_Araneda2025_reference&quot;,&quot;label&quot;:&quot;Araneda_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bupivacaine/Bupivacaine_Araneda2025_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Bupivacaine_Venkatachalam2022_reference&quot;,&quot;label&quot;:&quot;Venkatachalam_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bupivacaine/Bupivacaine_Venkatachalam2022_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# bupivacaine — `Bupivacaine_Eljebari2014_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> The clearance plausibility check could not be computed.

<div class="pk-model-meta" hidden drug="bupivacaine" model-id="Bupivacaine_Eljebari2014_reference" status="needs_review" stale="false" population="adults scheduled for elective lower extremity surgery" measured-compound="bupivacaine" parameterization="mechanistic" topology="1C"></div>

## Citation
Eljebari H, Jebabli N, Salouage I, Gaies E, Lakhal M, Boussofara M et al. Population pharmacokinetics of bupivacaine in combined lumbar and sciatic nerve block. Indian journal of pharmacology 46(2):201–206 (2014).
  ·  DOI: [10.4103/0253-7613.129318](https://doi.org/10.4103/0253-7613.129318)

## Population and dosing

**Population:** adults scheduled for elective lower extremity surgery · condition elective lower extremity surgery · age group adult · n = 31.

**Dosing:** 150 mg, other, multiple.

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 6 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| T1/2 (min) | t1/2z | 100.43 | min |
| Cmax (µg/ml) | Cmax | 1.347 | µg/ml |
| Tmax (min) | tmax | 29.35 | min |
| population clearance | CL | 930 | ml/min |
| central volume of distribution | V | 134 | L |
| -k 0 /D [h À1 ] 0-order absorption rate constant/Dose = Fr/ τ 0 | kabs | -0.254 | h À1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The clearance plausibility check could not be computed.**

The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — bupivacaine: t1/2z 100 min, Cmax 1.35 µg/ml, tmax 29.4 min, CL 930 ml/min, V 134 L, kabs -0.254 h À1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has bupivacaine, the second reading unknown; it also differs on 6 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| T1/2 (min) | `Q57` · t1/2z | 100.43 | min | 6026 | s | min | exact (1) | Eljebari_2014_table_p4_1:row4:col1 |
| Cmax (µg/ml) | `Q32` · Cmax | 1.347 | µg/ml |  |  | µg/ml | exact (1) | Eljebari_2014_table_p4_1:row5:col1 |
| Tmax (min) | `Q56` · tmax | 29.35 | min | 1761 | s | min | exact (1) | Eljebari_2014_table_p4_1:row6:col1 |
| population clearance | `Q22` · CL | 930 | ml/min | 1.55e-05 | m3/s | L/h | boundary (0.8) | Eljebari_2014:results_prose |
| central volume of distribution | `Q61` · V | 134 | L | 0.134 | m3 | L | boundary_compartment (0.9) | Eljebari_2014:results_prose |
| -k 0 /D [h À1 ] 0-order absorption rate constant/Dose = Fr/ τ 0 | `Q49` · kabs | -0.254 | h À1 | -7.056e-05 | 1/s | 1/h | review_gapfill (0.7) | Storgaard_2024:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- table section iiv: 'CL (ml/min)' routed out of structural estimates ('Inter individual variability (CV %)')
- table section iiv: 'VC (ml)' routed out of structural estimates ('Inter individual variability (CV %)')
- table section iiv: 'Ka2 (min⁻¹)' routed out of structural estimates ('Inter individual variability (CV %)')
- dropped value-less row: 'CL (ml/min)' (captured trailing unit 'ml/min' for child rows)
- dropped value-less row: 'VC (ml)' (captured trailing unit 'ml' for child rows)
- dropped value-less row: 'Ka 1 (min⁻¹)' (captured trailing unit 'min⁻¹' for child rows)
- dropped value-less row: 'Ka2 (min⁻¹)' (captured trailing unit 'min⁻¹' for child rows)
- salvaged Q22 ('population clearance'=930) from results prose — parameter table was unreadable
- salvaged Q63 ('central volume of distribution'=134) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=bupivacaine
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- model equation 'θi = TV (θi)* exp (ηθi)' not bound — neither LHS nor base term 'TV' linked to an ontology parameter
- 1C volume normalization: Q63→Q61 (single-compartment model has no central/peripheral split; 'central volume of distribution' is the general volume)
- status held at route_to_review — not promoted
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)
- gap-filled Q49 (kabs) from Storgaard_2024's review values (primary lacked it)

**Extraction notes:**
- final table T2: grid unusable → re-running vision table extraction for Eljebari_2014
- unparsed cell Eljebari_2014_table_p4_1:row0:col1 = 'θ₁=930 (930±282.24)'
- unparsed cell Eljebari_2014_table_p4_1:row1:col1 = 'θ₂=134 000 (134000±33510)'
- unparsed cell Eljebari_2014_table_p4_1:row2:col1 = 'θ₃=0.0046 (0.0046±0.0023)'
- unparsed cell Eljebari_2014_table_p4_1:row3:col1 = 'θ₄=0.292 (0.292±0.162)'
- captured model equation θi = TV (θi)* exp (ηθi)

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.417 (5/12 fields) | 7 |

<details><summary>7 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[-k 0 /d [h à1 ] 0-order absorption rate constant/dose = fr/ τ 0]` | -0.254 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` | 134 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[central volume of distribution]` |  | 134 | only_one_extracted |
| `gpt-oss-120b` | `parameters[population clearance]` | 930 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[population clearance]` |  | 930 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | bupivacaine | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | bupivacaine | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 5 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 |  | ['Eljebari_2014_table_p4_1:row5:col1'] |
| C5_dimension_Q49 | pass | 1 / [time] |  | ['Storgaard_2024:review'] |
| C5_dimension_Q56 | pass | [time] |  | ['Eljebari_2014_table_p4_1:row6:col1'] |
| C5_dimension_Q57 | pass | [time] |  | ['Eljebari_2014_table_p4_1:row4:col1'] |
| C6_cl_magnitude | fail | &lt;= 90.0 L/h | 930 | ['Eljebari_2014:results_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 55.8 L/h | ['Eljebari_2014:results_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 134 L | ['Eljebari_2014:results_prose'] |

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
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">unavailable</span></td></tr>
</tbody></table>
<p>No model archives available.</p>
</div></div>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbupivacaine%5D%20Bupivacaine_Eljebari2014_reference&body=Drug%3A%20bupivacaine%0ARecord%3A%20Bupivacaine_Eljebari2014_reference%0APaper%3A%20Eljebari_2014%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bupivacaine/Bupivacaine_Eljebari2014_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-07 03:55 UTC</sub>
