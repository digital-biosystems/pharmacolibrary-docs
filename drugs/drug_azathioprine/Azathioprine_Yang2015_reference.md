<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;azathioprine&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/&quot;},{&quot;label&quot;:&quot;Yang_2015 \u00b7 reference&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Azathioprine_Lin2021_reference&quot;,&quot;label&quot;:&quot;Lin_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_azathioprine/Azathioprine_Lin2021_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# azathioprine — `Azathioprine_Yang2015_reference`

> ## <span class="pk-badge pk-badge--orange">Needs review</span>

> Only volume was extracted — no clearance; v/F has no unit.

<div class="pk-model-meta" hidden drug="azathioprine" model-id="Azathioprine_Yang2015_reference" status="needs_review" stale="false" population="SLE patients" measured-compound="unknown" parameterization="apparent" topology="2C"></div>

## Citation
Yang X, Sherwin CM, Yu T, Yellepeddi VK, Brunner HI, Vinks AA. Pharmacokinetic modeling of therapies for systemic lupus erythematosus. Expert review of clinical pharmacology 8(5):587–603 (2015).
  ·  DOI: [10.1586/17512433.2015.1059751](https://doi.org/10.1586/17512433.2015.1059751)

## Population and dosing

**Population:** systemic lupus erythematosus patients · condition systemic lupus erythematosus · age group adult.

**Dosing:** 300 mg, oral, multiple, every 24 h.

## Model

**Structure:** 2-compartment; no model was built for this record.  
**Parameterization:** V/F — apparent, F unknown (apparent — bioavailability not identifiable).  
**Parameters:** 4 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Needs review": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

| label | parameter | value | unit |
|---|---|---|---|
| initial volume of distribution | V | 0.18 | l/kg |
| apparent volume of distribution following oral administration (Vd/F) | V/F | 0.78 | 1/kg |
| absorption lag time | tlag | 0.349 | h |
| absorption rate constant (Ka) | kabs | 0.869 | h−1 |

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.889). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**Only volume was extracted — no clearance; v/F has no unit.**

A model needs both clearance and volume; without the clearance it could only be built on a library default, so it was not. Without a unit the value cannot be converted, so the model cannot use it. A reported unit could not be converted (V/F), so that value has no SI equivalent. None of the extracted parameters is azathioprine's own; they describe unknown. Extracted — unknown: V 0.18 l/kg, V/F 0.78 1/kg, tlag 0.349 h, kabs 0.869 h−1.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on the value of oral cl: this record has none, the second reading 0.19. That field does not shape the model.

<sub>reviewed by rule template (no LLM)</sub>

### All parameter columns

| label (paper) | Q-code · name | value | unit | value_si | unit_si | unit_canonical | link | source |
|---|---|---|---|---|---|---|---|---|
| initial volume of distribution | `Q61` · V | 0.18 | l/kg | 0.0126 | m3 | L | boundary (0.8) | Yang_2015:other_prose |
| apparent volume of distribution following oral administration (Vd/F) | `Q76` · V/F | 0.78 | 1/kg |  |  | 1/kg | boundary (0.8) | Yang_2015:other_prose |
| absorption lag time | `Q83` · tlag | 0.349 | h | 1256 | s | h | exact (1) | Yang_2015:other_prose |
| absorption rate constant (Ka) | `Q49` · kabs | 0.869 | h−1 | 0.0002414 | 1/s | 1/h | exact (1) | Yang_2015:other_prose |

<details class="legend">
<summary>Parameter definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>Verbatim source label (label_verbatim).</td></tr><tr><td><code>Q-code · name</code></td><td>Matched ontology identifier and parameter name; e.g. Q22: clearance, Q27: CL/F, Q49: ka.</td></tr><tr><td><code>value</code></td><td>Reported parameter estimate.</td></tr><tr><td><code>unit</code></td><td>Verbatim source unit (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>Normalised estimate in SI base units, 4 significant figures; absent when unit conversion is unavailable.</td></tr><tr><td><code>unit_si</code></td><td>SI unit of value_si (m3/s for a clearance, m3 for a volume, 1/s for a rate constant, s for a time).</td></tr><tr><td><code>unit_canonical</code></td><td>Canonical unit associated with the parameter's Q-code.</td></tr><tr><td><code>link</code></td><td>Ontology-mapping method and confidence. exact/boundary/fuzzy/tv_prefix/caption_compartment/special_case: deterministic; llm/llm_confirmed/llm_corrected: LLM-assisted; review/review_gapfill: secondary-review source; boundary_relink: corrected mapping.</td></tr><tr><td><code>source</code></td><td>Source location: colN (table column), other_prose (text), review (secondary source), or pgx (PGx record).</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- column 'dose' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'no. of patients' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'model variability' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'covariates' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- dropped unlinked row (NIL): 'Filler et al. (2003)' — extend the ontology if this is a real PK parameter (source ['T1:row1:col3', 'T1:row1:col6'])
- dropped unlinked row (NIL): 'Jiao et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row2:col1', 'T1:row2:col3', 'T1:row2:col6', 'T1:row2:col7', 'T1:row2:col8'])
- dropped unlinked row (NIL): 'Neumann et ai. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row3:col1', 'T1:row3:col3', 'T1:row3:col6'])
- dropped unlinked row (NIL): 'Mino et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row4:col1', 'T1:row4:col3', 'T1:row4:col6'])
- dropped unlinked row (NIL): 'Zahr et al. (2008)' — extend the ontology if this is a real PK parameter (source ['T1:row5:col1', 'T1:row5:col3', 'T1:row5:col6'])
- dropped unlinked row (NIL): 'de Winter et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row6:col1', 'T1:row6:col3', 'T1:row6:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2009)' — extend the ontology if this is a real PK parameter (source ['T1:row7:col1', 'T1:row7:col3', 'T1:row7:col6', 'T1:row7:col8'])
- dropped unlinked row (NIL): 'Lertdumrongluk et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row8:col1', 'T1:row8:col3', 'T1:row8:col6'])
- dropped unlinked row (NIL): 'Djabarouti et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row9:col1', 'T1:row9:col3', 'T1:row9:col6'])
- dropped unlinked row (NIL): 'Joy et al. (2010)' — extend the ontology if this is a real PK parameter (source ['T1:row10:col1', 'T1:row10:col3', 'T1:row10:col6', 'T1:row10:col8'])
- dropped unlinked row (NIL): 'Mino et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row11:col1'])
- dropped unlinked row (NIL): 'Fukuda et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row12:col3', 'T1:row12:col6'])
- dropped unlinked row (NIL): 'Sagcal-Gironella et al. (2011)' — extend the ontology if this is a real PK parameter (source ['T1:row13:col3', 'T1:row13:col6'])
- dropped unlinked row (NIL): 'Sherwin et al. (2012)' — extend the ontology if this is a real PK parameter (source ['T1:row14:col3', 'T1:row14:col6'])
- dropped unlinked row (NIL): 'Woillard et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row15:col6'])
- dropped unlinked row (NIL): 'Streicher et al. (2014)' — extend the ontology if this is a real PK parameter (source ['T1:row16:col1', 'T1:row16:col3', 'T1:row16:col6'])
- dropped unlinked row (NIL): 'Kittanamongkolchai et al. (2015)' — extend the ontology if this is a real PK parameter (source ['T1:row17:col1', 'T1:row17:col3', 'T1:row17:col6'])
- table mostly unlinked (17/17 table-cell rows NIL) — likely the wrong table was located, not 0 genuinely-missing ontology parameter(s); route_to_review instead of building a model from the residual linked cell(s)
- salvaged Q61 ('initial volume of distribution'=0.18) from results prose — parameter table was unreadable
- salvaged Q76 ('apparent volume of distribution following oral administration (Vd/F)'=0.78) from results prose — parameter table was unreadable
- salvaged Q83 ('absorption lag time'=0.349) from results prose — parameter table was unreadable
- salvaged Q49 ('absorption rate constant (Ka)'=0.869) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=unknown
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- structure disagreement: deterministic 2C vs LLM 1C — review compartment count
- status held at route_to_review — not promoted
- molar mass: none found for 'unknown' — its concentrations stay mass-only
- review gap-fill skipped: this record measures 'unknown', not azathioprine — the review values are the parent's

**Extraction notes:**
- unparsed cell T1:row1:col1 = '15 children (12 ± 3 years)'
- unparsed cell T1:row1:col2 = 'Autoimmune including 10 SLE patients'
- unparsed cell T1:row1:col11 = '[51]'
- unparsed cell T1:row2:col11 = '[47]'
- unparsed cell T1:row3:col2 = 'Autoimmune including 12 SLE patients'
- unparsed cell T1:row3:col7 = 'BSV: Tmax (%) 46.8; Cmax (%) 53.8; AUC0–12 h (%) 33.3; AUC0–24 h (%) 35.6; C12 h (%) 74.2; C24 h (%) 85.8'
- unparsed cell T1:row3:col11 = '[52]'
- unparsed cell T1:row4:col2 = '6 Lupus nephritis versus 24 kidney transplantations'
- unparsed cell T1:row4:col11 = '[53]'
- unparsed cell T1:row5:col11 = '[49]'
- unparsed cell T1:row6:col2 = 'Autoimmune with 12 SLE patients'
- unparsed cell T1:row6:col7 = 'BSV: Tlag, short (%) 32; Ka (%) 182 [40]; CL (%) 34 [41]; Vc (%) 53 [48]; TGB1 (%) 200; EHCP (%) 35; RUV (%) 0.414 [6]'
- unparsed cell T1:row6:col8 = 'CrCL on CL 0.42 [26]'
- unparsed cell T1:row6:col11 = '[46]'
- unparsed cell T1:row7:col11 = '[54]'
- unparsed cell T1:row8:col11 = '[55]'
- unparsed cell T1:row9:col7 = 'BSV: mean MPA AUC0–12 h (%) 44; mean MPAG AUC0–12 h (%) 43'
- unparsed cell T1:row9:col11 = '[56]'
- unparsed cell T1:row10:col11 = '[57]'
- unparsed cell T1:row11:col3 = '1.5 (1.0–2.0) g'
- unparsed cell T1:row11:col7 = 'BSV: MPA free fraction (%) 70; MPAG free faction (%) 59.8'
- unparsed cell T1:row11:col8 = 'Metal medication and CrCL on MPA C0; CrCL on MPAG C0; serum albumin on MPA free fraction; serum albumin, metal medication and CrCL on MPAG free faction'
- unparsed cell T1:row11:col11 = '[58]'
- unparsed cell T1:row12:col1 = '19 children'
- unparsed cell T1:row12:col11 = '[59]'
- unparsed cell T1:row13:col1 = '19 children (16.9 ± 4 years)'
- unparsed cell T1:row13:col11 = '[60]'
- unparsed cell T1:row14:col1 = '19 (10–28 years; mean 16.5 years)'
- unparsed cell T1:row14:col7 = 'BSV (%): CL1MPA 48.6; V3MPA 59.2; CL2-MPA 42.9; V4-MPA 60.0; CLMMPAG 55.9 RUV: MPA (%) 41.2; MPAG (%) 45.4'
- unparsed cell T1:row14:col11 = '[48]'
- unparsed cell T1:row15:col1 = '36 children (4.7–16.7)'
- unparsed cell T1:row15:col3 = '728 ± 255 (300–1250) mg; 544 ± 175 (217–998)'
- unparsed cell T1:row15:col11 = '[50]'
- unparsed cell T1:row16:col2 = 'Autoimmune with 23 SLE and 21 vasculitis'
- unparsed cell T1:row16:col11 = '[61]'
- unparsed cell T1:row17:col11 = '[62]'
- LLM selected parameter table(s) 1

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `qwen3.8-27b`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | partly confirmed | 0.889 (8/9 fields) | 1 |

<details><summary>1 field discrepancy</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `parameters[oral cl]` |  | 0.19 | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | source |
|---|---|---|---|---|
| C0_has_structural_params | pass |  | 4 |  |
| C0b_disposition_core | pass |  |  |  |
| C0c_disposition_complete | fail |  |  |  |
| C5_unit_missing_Q76 | fail | [length] ** 3 | 1/kg | ['Yang_2015:other_prose'] |
| C7_apparent_coherence | pass |  |  |  |
| C8_topology | pass |  |  |  |
| C9_phys_window_Q61 | pass | volume within physiological range | 12.6 L | ['Yang_2015:other_prose'] |

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
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bazathioprine%5D%20Azathioprine_Yang2015_reference&body=Drug%3A%20azathioprine%0ARecord%3A%20Azathioprine_Yang2015_reference%0APaper%3A%20Yang_2015%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_azathioprine/Azathioprine_Yang2015_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · extracted 2026-10-22 09:40 UTC</sub>
