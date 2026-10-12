<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D06A&quot;,&quot;href&quot;:&quot;atc/D06A.md&quot;},{&quot;label&quot;:&quot;gentamicin&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/&quot;},{&quot;label&quot;:&quot;Albanell-Fern\u00e1ndez_2025 \u00b7 alsultan_et_al_2023_58&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Gentamicin_Crcek2019_reference&quot;,&quot;label&quot;:&quot;Crcek_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Crcek2019_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Gentamicin_Abbasi2023_reference&quot;,&quot;label&quot;:&quot;Abbasi_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_gentamicin/Gentamicin_Abbasi2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# gentamicin — `Gentamicin_AlbanellFernndez2025_alsultan_et_al_2023_58`

> ## <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--orange" title="re-read by qwen3.8-27b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

**Model:** Model withheld: a core parameter is unspecified.

### Reviewer guidance

**Gentamicin’s clearance and volume of distribution have no extracted values, leaving placeholder defaults and causing the model to be held back.**

No value for gentamicin's clearance and volume of distribution. The model was built, but gentamicin's clearance and volume of distribution had no value, so a library placeholder stood in and the model was held back rather than published with an invented number. The record assigns vancomycin as the dose compound and primary analyte, while the second reader marked both as unknown. No parameter values were extracted.

A second, independent reading of the paper (`qwen3.8-27b`) disagrees on the value of v: this record has none, the second reading none; it also differs on 1 more field. That field does not shape the model.

<sub>reviewed by gpt-6-luna</sub>

## Citation
Albanell-Fernández M et al., A Review of Vancomycin, Gentamicin, and…, Clinical pharmacokinetics (2025)
  ·  DOI: [10.1007/s40262-024-01459-z](https://doi.org/10.1007/s40262-024-01459-z)

<div class="pk-model-meta" hidden drug="gentamicin" model-id="Gentamicin_AlbanellFernndez2025_alsultan_et_al_2023_58" status="model_quarantined" stale="false" population="neonates and infants with no previous pathologies" measured-compound="gentamicin" parameterization="mechanistic" topology="1C"></div>

**Model structure:** 1-compartment, IV mammillary model — template `PK_1C`.  
**Parameters:** 0 extracted.

**Parameterization:** mechanistic.

## Parameters
> ⚠️ This record is not accepted (current status `model_quarantined`) — the values below are the extraction as recorded, **not verified**; see the reviewer guidance above for what failed. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| CL equation | Q900 | not captured | llm_corrected |
| Mean CL in L/h/kg | Q22 | not captured | llm_confirmed |
| Vd equation | Q61 | not captured | llm_confirmed |
| Mean Vd in L/kg | Q352 | not captured | llm_corrected |
| Vc | Q63 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'alsultan et al., 2023 [58]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=gentamicin
- bound model equation to Q22 (CL): CL = 1.0 * (WT/70)^0.75 * (PMA/30)^3.16 * [0.83 * GA + 1.03 * (1 - GA)]GA = 1 for SGA infants and 0 for appropriate-for-GA infants
- bound model equation to Q61 (V): V = 0.791 * (WT/1.416)^0.898
- bound model equation to Q63 (V1): Vc = 0.913 * (WT/1.75)^0.919Vc = Vp
- Q22 (CL) is equation-defined: value moved to equation-variable 'Mean CL in L/h/kg'; equation kept verbatim
- Q61 (V) is equation-defined: value moved to equation-variable 'Vd equation'; equation kept verbatim
- Q63 (V1) is equation-defined: value moved to equation-variable 'Vc'; equation kept verbatim
- 1C volume Q63 kept: Q61 already present — review duplicate volume
- population split: 'alsultan et al., 2023 [58]' subgroup of Albanell-Fernández_2025 (paper reports 57 populations: allegaert et al., 2006 [79], allegaert et al., 2007 [40], allegaert et al., 2008 [80], alsultan et al., 2023 [58], amponsah et al., 2017 [82], anderson et al., 2007 [41], asbury et al., 1993 [34], back et al., 2019 [54], bhongsatiern et al., 2015 [46], botha et al., 1998 [78], botha et al., 2003 [67], burstein et al., 1997 [22], capparelli et al., 2001 [23], chen et al., 2018 [51], chung et al., 2023 [59], cristea et al., 2019 [19], dao et al., 2020 [55], de cock et al., 2012 [29], de hoog et al., 2000 [38], frymoyer et al., 2014 [86], garcía et al., 2006 [71], germovsek et al., 2016 [74], germovsek et al., 2019 [53], grimsley et al., 1999 [37], illamola et al., 2016 [30], izquierdo et al., 1992 [27], jarugula et al., 2022 [20], jensen et al., 1992 [61], kato et al., 2017 [47], kelman et al., 1984 [26], kimura et al., 2004 [39], lanao et al., 2004 [69], lee et al., 2021 [6], li et al., 2018 [50], lingvall et al., 2005 [70], lo et al., 2010 [43], marqués-miñana et al., 2010 [42], mehrotra et al., 2012 [85], mulubwa et al., 2020 [56], nielsen et al., 2009 [72], reilly et al., 2019 [52], rodvold et al., 1993 [62], rodvold et al., 1995 [35], sasano et al., 2021 [57], seay et al., 1994 [21], severino et al., 2023 [84], sherwin et al., 2009 [73], sherwin et al., 2009 [81], silva et al., 1998 [36], smits et al., 2015 [32], song et al., 2017 [48], thomson et al., 1988 [26], touw et al., 2001 [28], tseng et al., 2018 [49], vervelde et al., 1999 [64], weber et al., 1993 [63], zhao et al., 2013 [44])
- review gap-fill skipped: this record carries no value of its own, and a model assembled entirely from other papers is not this paper's model

**Extraction notes:**
- transposed table Tab5: parameters were across the columns, populations/subgroups down the first column — transposed for parsing
- unparsed cell Tab5:row2:col4 = '0.072a'
- unparsed cell Tab5:row2:col8 = '0.07 presence or 0.086 absence of concomitant treatment with IND or VENT'
- unparsed cell Tab5:row2:col13 = '0.079 (for mean weight 1.3 kg, 30 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row2:col14 = '0.049 (for mean weight 1.3 kg, 34 wks PMA and no VENT)'
- unparsed cell Tab5:row2:col29 = '1.46 (for mean weight 3.2 kg and PMA 41 weeks)'
- unparsed cell Tab5:row2:col31 = '0.102 (for mean weight 1.48 kg)'
- unparsed cell Tab5:row2:col38 = 'M1: 0.057M2: 0.063'
- unparsed cell Tab5:row2:col39 = '0.053 if PCA &gt;34 wks and AP ≥7; 0.044 if PCA ≤34 wks and AP &lt;7; 0.036 if PCA ≤34 wks and AP &lt;7'
- unparsed cell Tab5:row2:col40 = '0.046 if GA ≤31 wks, 0.094 if GA 31–34 wks'
- unparsed cell Tab5:row2:col41 = '0.069c'
- unparsed cell Tab5:row2:col46 = '0.046 (for mean weight 2.4 kg)'
- unparsed cell Tab5:row2:col47 = '0.0387 (It2B modeling) − 0.0404 (STS modeling)'
- unparsed cell Tab5:row2:col50 = '0.076 (for median BW 1.92 kg and GA 32 wks)'
- unparsed cell Tab5:row2:col55 = '0.037 (for mean weight 2.3 kg, PNA 3 days)'
- unparsed cell Tab5:row2:col63 = '0.028 (for mean weight 1 kg, PCA 27 wks, and no NSAID)'
- unparsed cell Tab5:row2:col64 = '0.040 (for mean weight 1 kg, 28 wks PMA and appropriate forGA)'
- unparsed cell Tab5:row2:col65 = '0.0497 (for mean weight 1 kg, PMA 34 wks, PNA 1 day, no INO, no VENT)'
- unparsed cell Tab5:row2:col66 = '0.091 (for mean weight 2 kg, PMA 30 wks)'
- unparsed cell Tab5:row5:col3 = '1.18 (for mean weight 2 kg, PCA 40 wks, Cr)'
- unparsed cell Tab5:row5:col4 = '0.52a'
- unparsed cell Tab5:row5:col8 = '0.562 (PMA ≤32 wks)0.498 (PMA &gt;32 wks)'
- unparsed cell Tab5:row5:col13 = '0.730 (for mean weight 1.3 kg, 30 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row5:col14 = '0.724 (for mean weight 1.3 kg, 34 wks PMA and no artificial ventilation)'
- unparsed cell Tab5:row5:col29 = '0.148 (for mean weight 3.2 kg)'
- unparsed cell Tab5:row5:col31 = '0.884 (for mean weight 1.48 kg)'
- unparsed cell Tab5:row5:col40 = '0.703 – 0.767 if GA ≤31 wks0.643–0.653 if GA 31−34 wks'
- unparsed cell Tab5:row5:col41 = '0.547c'
- unparsed cell Tab5:row5:col46 = '0.46 (for mean weight 2.4 kg)'
- unparsed cell Tab5:row5:col47 = '0.586 (It2B modeling) − 0.623 (STS modeling)'
- unparsed cell Tab5:row5:col48 = '0.631c'
- unparsed cell Tab5:row5:col50 = '0.136 (for median BW 1.92 kg)'
- unparsed cell Tab5:row5:col55 = '0.687 (for mean weight 2.3kg and no sepsis)'
- unparsed cell Tab5:row5:col64 = '0.561 (for mean weight 1 kg, 28 wks PMA and appropriate for GA)'
- unparsed cell Tab5:row5:col65 = '0.455 (for mean weight 1 kg, PMA 34 wks, PNA 1 day, no INO, no VENT)'
- unparsed cell Tab5:row5:col66 = '0.957 (for mean weight 2 kg PMA 30 wks)'
- companion parameter table 2 transcribed (5 record(s))
- companion parameter table 3 transcribed (11 record(s))
- companion parameter table 4 transcribed (5 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5
- LLM region Albanell-Fernández_2025:other_prose: no JSON records returned
- captured model equation CL = 1.0 * (WT/70)^0.75 * (PMA/30)^3.16 * [0.83 * GA + 1.03 * (1 - GA)]GA = 1 for SGA infants and 0 for appropriate-for-GA infants
- captured model equation V = 0.791 * (WT/1.416)^0.898
- captured model equation Vc = 0.913 * (WT/1.75)^0.919Vc = Vp

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--orange">cross-check: partial</span>  
Primary extraction: `gpt-6-luna`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `qwen3.8-27b` | partly confirmed | 0.8 (8/10 fields) | 2 |

<details><summary>2 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `qwen3.8-27b` | `parameters[v]` | not captured | not captured | only_one_extracted |
| `qwen3.8-27b` | `parameters[vd equation]` | not captured | not captured | only_one_extracted |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C0c_disposition_complete | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

**Reviewer per-scenario checks:**

| check | scenario | status | expected | obtained | ratio | note |
|---|---|---|---|---|---|---|
| T0_analyte_identity | not captured | pass | not captured | not captured | not captured | V/CL labels are the drug's (or a metabolite's), no biomarker signal |
| T2_covariates | not captured | skipped | not captured | not captured | not captured | no covariate effects in record |
| T3_param_coverage | not captured | skipped | not captured | not captured | not captured | no structural disposition parameters in record |
| T3_topology_template | not captured | pass | 1C → PK_1C* | PK_1C | not captured | engineer template must match the scholar topology |
| T6_deviations | not captured | fail | not captured | defaulted_parameters: not acceptable | not captured | LLM adjudication → deterministic rule |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gentamicin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Albanell-Fernández_2025` / `Albanell-Fernández_2025::alsultan_et_al_2023_58`)
- model: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gentamicin/models/modelica/_needs_review/Gentamicin_AlbanellFernndez2025_alsultan_et_al_2023_58.mo`
- deviation: `../../..//mnt/Pharmacolibrary/knowledgebase/drugs/drug_gentamicin/models/modelica/_needs_review/Gentamicin_AlbanellFernndez2025_alsultan_et_al_2023_58.deviation.json`


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
<sub>Generated by `docs.py` (scholarv2) · extracted 2026-10-07 22:09 UTC</sub>
