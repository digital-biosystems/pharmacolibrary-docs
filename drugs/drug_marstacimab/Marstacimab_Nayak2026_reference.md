<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;marstacimab&quot;,&quot;href&quot;:&quot;drugs/drug_marstacimab/&quot;},{&quot;label&quot;:&quot;Nayak_2026 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# marstacimab — `Marstacimab_Nayak2026_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span>

> The reviewer's verdict (Needs review, 2026-09-28 14:38 UTC) predates the latest extraction (2026-10-05 19:00 UTC); the status shown comes from the current checks. The marstacimab record was held back because the absorption lag time (tlag, 2 h) was not extracted or defaulted, leaving only 5 of 6 expected parameters covered, and the intercompartmental rate constants k13/k31 had no source values.

<div class="pk-model-meta" hidden drug="marstacimab" model-id="Marstacimab_Nayak2026_reference" status="needs_review" stale="true" population="adolescent and adult participants with hemophilia and healthy volunteers" measured-compound="marstacimab" parameterization="mechanistic" topology="3C"></div>

## Citation
Nayak S, Suzuki A, Ravva P, Raje S. Clinical Pharmacokinetics and Pharmacodynamics of Marstacimab, an Anti-tissue Factor Pathway Inhibitor Monoclonal Antibody, in Adolescent and Adult Participants with Hemophilia. Clinical pharmacokinetics (2026).
  ·  DOI: [10.1007/s40262-026-01695-5](https://doi.org/10.1007/s40262-026-01695-5)

## Population and dosing

**Population:** adolescent and adult participants with hemophilia and healthy volunteers · condition hemophilia · age group mixed.

**Dosing:** 150, 300 mg, sc, multiple, every 168 h.

## Model

**Structure:** 3-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 7 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit | RSE% |
|---|---|---|---|---|
| Maximum peak TGA, P MAX (nM) 91.4 | Cmax | 12.2 |  | 13.3 |
| V c (L) | V1 | 3.61 | L |  |
| -CL (L/h) | CL | 0.0188 | L/h |  |
| -Lag time (h) | tlag | 2 | h |  |
| V p | V2 | 4.99 | L |  |
| total volume of distribution | V | 8.6 | L |  |
| -Q (L/h) | Q | 0.00489 | L/h |  |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.167). Primary extraction retained.">cross-check: disputed</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**The marstacimab record was held back because the absorption lag time (tlag, 2 h) was not extracted or defaulted, leaving only 5 of 6 expected parameters covered, and the intercompartmental rate constants k13/k31 had no source values.**

For marstacimab (3-compartment structure), the coverage check expected 6 parameters but found 5, with tlag (2 h) neither emitted nor given a placeholder value. The model builder substituted assumed placeholder values for the missing first-order transfer rate constants k13 and k31, which describe distribution between the central (V1, 3.61 L) and peripheral (V2, 4.99 L) compartments and correspond to the intercompartmental clearance Q (0.00489 L/h). A second reader returned null for all six parameters — CL (0.0188 L/h), tlag, Q, total volume of distribution (8.6 L), Vc, and Vp — so no independent confirmation of any value exists. Extracted — marstacimab: Cmax 12.2, V1 3.61 L, CL 0.0188 L/h, tlag 2 h, V2 4.99 L, V 8.6 L, Q 0.00489 L/h.

A second, independent reading of the paper (`gpt-oss:120b`) disagrees on which compound was dosed: this record has marstacimab, the second reading unknown; it also differs on 14 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by glm-5.3-flash</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | RSE% | link | source |
|---|---|---|---|---|---|---|---|---|---|
| Maximum peak TGA, P MAX (nM) 91.4 | `Q32` · Cmax | 12.2 |  |  |  |  | 13.3 | llm_confirmed (0.6) | tab_6:row5:col1, tab_6:row5:col2, tab_6:row5:col3, tab_6:row5:col4 |
| V c (L) | `Q63` · V1 | 3.61 | L | 0.00361 | m3 | L |  | space_fold (0.95) | Nayak_2026:other_prose |
| -CL (L/h) | `Q22` · CL | 0.0188 | L/h | 5.222e-09 | m3/s | L/h |  | boundary (0.8) | Nayak_2026:other_prose |
| -Lag time (h) | `Q83` · tlag | 2 | h | 7200 | s | h |  | boundary (0.8) | Nayak_2026:other_prose |
| V p | `Q64` · V2 | 4.99 | L | 0.00499 | m3 | L |  | space_fold (0.95) | Nayak_2026:results_prose |
| total volume of distribution | `Q61` · V | 8.6 | L | 0.0086 | m3 | L |  | boundary (0.8) | Nayak_2026:results_prose |
| -Q (L/h) | `Q30` · Q | 0.00489 | L/h | 1.358e-09 | m3/s | L/h |  | review_gapfill (0.7) | Nayak_2026:review |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>RSE%</code></td><td>Reported relative standard error (%).</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- dropped value-less row: 'Parameter'
- dropped PD-category row 'Baseline peak TGA, P BASE (nM) 37.8' → Q324 (E0, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_6:row3:col1', 'tab_6:row3:col2', 'tab_6:row3:col3', 'tab_6:row3:col4'])
- dropped PD-category row 'EC 50 (nM)' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_6:row4:col1', 'tab_6:row4:col3', 'tab_6:row4:col4'])
- dropped PD-category row 'Hill coefficient (fixed)' → Q325 (Hill, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['tab_6:row6:col1', 'tab_6:row6:col2', 'tab_6:row6:col3', 'tab_6:row6:col4', 'tab_6:row6:col5'])
- salvaged Q63 ('V c (L)'=3.61) from results prose — parameter table was unreadable
- salvaged Q22 ('-CL (L/h)'=0.0188) from results prose — parameter table was unreadable
- salvaged Q83 ('-Lag time (h)'=2) from results prose — parameter table was unreadable
- salvaged Q64 ('V p'=4.99) from results prose — parameter table was unreadable
- salvaged Q61 ('total volume of distribution'=8.6) from results prose — parameter table was unreadable
- implicit units: 'Maximum peak TGA, P MAX (nM) 91.4' — the LLM proposed 'nM', whose dimension does not fit Q32; left unset
- apparent-by-design (ADVISORY, codes unchanged): extravascular dosing with no identifiable F, so these reported disposition parameters are likely apparent unless the model puts first-pass in its structure — Q63 (V c (L)); Q22 (-CL (L/h)); Q64 (V p); Q61 (total volume of distribution)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=marstacimab
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 3C vs LLM 2C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'marstacimab' — its concentrations stay mass-only
- gap-filled Q30 (Q) from Nayak_2026's review values (primary lacked it)

**Extraction notes:**
- unparsed cell tab_6:row4:col2 = '0.359 12.3'
- unparsed cell tab_6:row8:col2 = '0.0863 32.2'
- unparsed cell tab_6:row9:col2 = '0.0351 16.8'
- unparsed cell tab_6:row10:col2 = '0.0473 33.3'
- companion parameter table 2 transcribed (0 record(s))

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss:120b` | not confirmed | 0.167 (3/18 fields) | 15 |

<details><summary>15 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss:120b` | `model.links` | [] | [['marstacimab', 'total tfpi', 'none']] | mismatch |
| `gpt-oss:120b` | `parameters[-cl]` | 0.0188 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[-lag time]` | 2 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[cl]` |  | 0.0188 | only_one_extracted |
| `gpt-oss:120b` | `parameters[k a]` |  | 0.00742 | only_one_extracted |
| `gpt-oss:120b` | `parameters[lag time]` |  | 2 | only_one_extracted |
| `gpt-oss:120b` | `parameters[q]` |  | 0.00489 | only_one_extracted |
| `gpt-oss:120b` | `parameters[total volume of distribution]` | 8.6 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[total volume of distribution]` |  | 8.60 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c]` | 3.61 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[v c]` |  | 3.61 | only_one_extracted |
| `gpt-oss:120b` | `parameters[v p]` | 4.99 |  | only_one_extracted |
| `gpt-oss:120b` | `parameters[vp]` |  | 4.99 | only_one_extracted |
| `gpt-oss:120b` | `screen.dose_compound` | marstacimab | unknown | mismatch |
| `gpt-oss:120b` | `screen.primary_analyte` | marstacimab | unknown | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 7 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | pass |  |  |  |
| C5_dimension_Q30 | pass | [length] ** 3 / [time] |  | ['Nayak_2026:review'] |
| C5_unit_missing_Q32 | fail | [mass] / [length] ** 3 |  | ['tab_6:row5:col1', 'tab_6:row5:col2', 'tab_6:row5:col3', 'tab_6:row5:col4'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0188 | ['Nayak_2026:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 0.0188 L/h | ['Nayak_2026:other_prose'] |
| C9_phys_window_Q61 | pass | volume within physiological range | 8.6 L | ['Nayak_2026:results_prose'] |
| C9_phys_window_Q63 | pass | volume within physiological range | 3.61 L | ['Nayak_2026:other_prose'] |
| C9_phys_window_Q64 | pass | volume within physiological range | 4.99 L | ['Nayak_2026:results_prose'] |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | note |
|---|---|---|---|---|---|
| T0_analyte_identity |  | pass |  |  | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates |  | skipped |  |  | no covariate effects in record |
| T3_output_variable |  | pass | C_central (measured=marstacimab) | central.C | output must be the measured/analyte compartment |
| T3_param_coverage |  | fail | 6 scholar param(s) emitted or defaulted | 5 covered | neither emitted nor in defaulted[]: ['tlag'] |
| T3_topology_template |  | pass | 3C → PK_3C* | PK_3C | engineer template must match the scholar topology |
| T6_deviations |  | pass |  | all deviations documented+quantified | LLM adjudication → deterministic rule |
| T1_t_half_beta | reference | skipped |  | 5692 | non-numeric value |
| T1_t_half_terminal | reference | skipped |  | 5692 | non-numeric value |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Model downloads

<div class="pk-models-grid"><div class="pk-models-table">
<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_modelica.zip" download>Marstacimab_Nayak2026_reference_modelica.zip</a> <span class="pk-size">(4.7 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_fmi.zip" download>Marstacimab_Nayak2026_reference_fmi.zip</a> <span class="pk-size">(4.2 kB)</span></td></tr>
<tr><td><b>MATLAB &amp; GNU Octave</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_matlab.zip" download>Marstacimab_Nayak2026_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_matlab_simbio.zip" download>Marstacimab_Nayak2026_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_sbml.zip" download>Marstacimab_Nayak2026_reference_sbml.zip</a> <span class="pk-size">(2.6 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_marstacimab/Marstacimab_Nayak2026_reference/Marstacimab_Nayak2026_reference_cellml.zip" download>Marstacimab_Nayak2026_reference_cellml.zip</a> <span class="pk-size">(3.1 kB)</span></td></tr>
</tbody></table>
<p>Archives contain model source, a simulation script, and execution instructions.</p>
</div></div>

## How to cite

**Source paper** (the parameters are its): Nayak S, Suzuki A, Ravva P, Raje S. Clinical Pharmacokinetics and Pharmacodynamics of Marstacimab, an Anti-tissue Factor Pathway Inhibitor Monoclonal Antibody, in Adolescent and Adult Participants with Hemophilia. Clinical pharmacokinetics (2026). [doi:10.1007/s40262-026-01695-5](https://doi.org/10.1007/s40262-026-01695-5)

**This record:** Pharmacolibrary v26.09, model `Marstacimab_Nayak2026_reference`. <https://pharmacolibrary.github.io/#/drugs/drug_marstacimab/Marstacimab_Nayak2026_reference>

```bibtex
@misc{pharmacolibrary_MarstacimabNayak2026reference,
  title  = {{Pharmacolibrary model Marstacimab_Nayak2026_reference}},
  author = {{Pharmacolibrary}},
  version = {v26.09},
  url    = {https://pharmacolibrary.github.io/#/drugs/drug_marstacimab/Marstacimab_Nayak2026_reference},
  note   = {Parameters from doi:10.1007/s40262-026-01695-5},
}
```

Licence of the model files: not set yet. The parameter values belong to the cited paper.

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmarstacimab%5D%20Marstacimab_Nayak2026_reference&body=Drug%3A%20marstacimab%0ARecord%3A%20Marstacimab_Nayak2026_reference%0APaper%3A%20Nayak_2026%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_marstacimab/Marstacimab_Nayak2026_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-05 19:00 UTC</sub>
