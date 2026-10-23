<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07A&quot;,&quot;href&quot;:&quot;atc/A07A.md&quot;},{&quot;label&quot;:&quot;polymyxin B&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/&quot;},{&quot;label&quot;:&quot;Lakota_2018 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;PolymyxinB_Li2023_reference&quot;,&quot;label&quot;:&quot;Li_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Li2023_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;PolymyxinB_Manchandani2018_reference&quot;,&quot;label&quot;:&quot;Manchandani_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/PolymyxinB_Manchandani2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Akrong_2022_CFU&quot;,&quot;label&quot;:&quot;Akrong_2022 \u00b7 CFU&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/pd_Akrong_2022_CFU.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Soeorg_2026_cfu&quot;,&quot;label&quot;:&quot;Soeorg_2026 \u00b7 cfu&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_polymyxin_b/pd_Soeorg_2026_cfu.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# polymyxin B — `PolymyxinB_Lakota2018_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

> This record was reviewed on 2026-09-28 14:39 UTC (Needs review), but the paper was screened again on 2026-10-07 19:53 UTC, so that review may no longer match the record. Until it is reviewed again, the status shown comes from the automatic checks. Only clearance was extracted — no volume; cL has no unit (+1 more).

<div class="pk-model-meta" hidden drug="polymyxin B" model-id="PolymyxinB_Lakota2018_reference" status="needs_review" stale="true" population="patients with multidrug-resistant Gram-negative bacterial infections" measured-compound="polymyxin_b" parameterization="mechanistic" topology="1C"></div>

## Citation
Lakota EA, Landersdorfer CB, Nation RL, Li J, Kaye KS, Rao GG et al. Personalizing Polymyxin B Dosing Using an Adaptive Feedback Control Algorithm. Antimicrobial agents and chemotherapy 62(7) (2018).
  ·  DOI: [10.1128/AAC.00483-18](https://doi.org/10.1128/AAC.00483-18)

## Population and dosing

**Population:** patients with multidrug-resistant Gram-negative bacterial infections · condition multidrug-resistant Gram-negative bacterial infections · age group adult.

**Dosing:** 105, 175 mg, iv, multiple, every 12 h.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 1 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| population average polymyxin B clearance | CL | 0.0276 | liters/h/kg |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only clearance was extracted — no volume; cL has no unit (+1 more).**

A model needs both clearance and volume; without the volume it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. The check had no reference to compare the clearance against, so the value is unverified rather than shown to be wrong. Extracted — polymyxin b: CL 100 mg · h/liter.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has polymyxin_b, the second reading unknown; it also differs on 3 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| population average polymyxin B clearance | `Q22` · CL | 0.0276 | liters/h/kg | 5.367e-07 | m3/s | L/h | boundary (0.8) | Lakota_2018:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column '% of subjects with ≥25% decrease in clcr' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped value-less row: 'Author (yr)' (captured trailing unit 'yr' for child rows)
- dropped value-less row: 'Ouderkirk et al. (2003)' (captured trailing unit '2003' for child rows)
- dropped unlinked row (NIL): 'Holloway et al. (2006)' — extend the ontology if this is a real PK parameter (source ['T2:row2:col1', 'T2:row2:col2', 'T2:row2:col3', 'T2:row2:col4'])
- dropped unlinked row (NIL): 'Teng et al. (2007)' — extend the ontology if this is a real PK parameter (source ['T2:row3:col1', 'T2:row3:col2', 'T2:row3:col3', 'T2:row3:col4'])
- dropped unlinked row (NIL): 'Pastewski et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T2:row4:col1', 'T2:row4:col2', 'T2:row4:col3', 'T2:row4:col4'])
- dropped unlinked row (NIL): 'Ramasubban et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T2:row5:col1', 'T2:row5:col2', 'T2:row5:col3', 'T2:row5:col4'])
- dropped unlinked row (NIL): 'Mendes et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T2:row6:col1', 'T2:row6:col2', 'T2:row6:col3', 'T2:row6:col4'])
- dropped value-less row: 'Oliveira et al. (2009)' (captured trailing unit '2009' for child rows)
- dropped unlinked row (NIL): 'Elias et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T2:row8:col1', 'T2:row8:col2', 'T2:row8:col3', 'T2:row8:col4'])
- dropped unlinked row (NIL): 'Kvitko et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T2:row9:col1', 'T2:row9:col2', 'T2:row9:col3', 'T2:row9:col4'])
- dropped unlinked row (NIL): 'Esaian et al. (2012)' — extend the ontology if this is a real PK parameter (source ['T2:row10:col1', 'T2:row10:col2', 'T2:row10:col3', 'T2:row10:col4'])
- dropped unlinked row (NIL): 'Kubin et al. (2012)' — extend the ontology if this is a real PK parameter (source ['T2:row11:col1', 'T2:row11:col2', 'T2:row11:col3', 'T2:row11:col4'])
- dropped unlinked row (NIL): 'Tuon et al. (2013)' — extend the ontology if this is a real PK parameter (source ['T2:row12:col1', 'T2:row12:col2', 'T2:row12:col3', 'T2:row12:col4'])
- dropped unlinked row (NIL): 'Nandha et al. (2013)' — extend the ontology if this is a real PK parameter (source ['T2:row13:col1', 'T2:row13:col2', 'T2:row13:col3', 'T2:row13:col4'])
- dropped unlinked row (NIL): 'Akajagbor et al. (2013)' — extend the ontology if this is a real PK parameter (source ['T2:row14:col1', 'T2:row14:col2', 'T2:row14:col3', 'T2:row14:col4'])
- dropped unlinked row (NIL): 'Phe et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T2:row15:col1', 'T2:row15:col2', 'T2:row15:col3', 'T2:row15:col4'])
- dropped unlinked row (NIL): 'Rigatto et al. (2016)' — extend the ontology if this is a real PK parameter (source ['T2:row16:col1', 'T2:row16:col2', 'T2:row16:col3', 'T2:row16:col4'])
- dropped unlinked row (NIL): 'Non-cystic fibrosis patients' — extend the ontology if this is a real PK parameter (source ['T2:row18:col1', 'T2:row18:col2', 'T2:row18:col3', 'T2:row18:col4'])
- dropped unlinked row (NIL): 'Cystic fibrosis patients' — extend the ontology if this is a real PK parameter (source ['T2:row19:col1', 'T2:row19:col2', 'T2:row19:col3', 'T2:row19:col4'])
- table mostly unlinked (16/16 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); "Needs review" instead of building a model from the residual linked cell(s)
- salvaged Q22 ('population average polymyxin B clearance'=0.0276) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=polymyxin_b
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- status held at "Needs review" — not promoted
- molar mass: none found for 'polymyxin_b' — its concentrations stay mass-only
- skipped review gap-fill of V2: primary is 1C (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is 1C (peripheral family needs ≥2C)

**Extraction notes:**
- unparsed cell T2:row0:col1 = '% of subjects with ≥25% decrease in CLCR'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.333 (2/6 fields) | 4 |

<details><summary>4 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[population average polymyxin b clearance]` | 0.0276 |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[ssauc0-24 that resulted in rates of mild nephrotoxicity (≤25% decreases in creatinine clearance [clcr]) in ≤40% of subjects]` |  | 100 | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | polymyxin_b | unknown | mismatch |
| `gpt-oss-120b` | `screen.primary_analyte` | polymyxin_b | unknown | mismatch |

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
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.0276 | ['Lakota_2018:other_prose'] |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q22 | pass | clearance within physiological range | 1.93 L/h | ['Lakota_2018:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpolymyxin_b%5D%20PolymyxinB_Lakota2018_reference&body=Drug%3A%20polymyxin_b%0ARecord%3A%20PolymyxinB_Lakota2018_reference%0APaper%3A%20Lakota_2018%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_polymyxin_b/PolymyxinB_Lakota2018_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-10-07 19:53 UTC</sub>
