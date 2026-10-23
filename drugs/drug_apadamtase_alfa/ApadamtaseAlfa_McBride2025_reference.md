<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;Apadamtase alfa&quot;,&quot;href&quot;:&quot;drugs/drug_apadamtase_alfa/&quot;},{&quot;label&quot;:&quot;McBride_2025 \u00b7 reference&quot;}]"></div>

<div class="pk-tab-mark" data-tab="Information"></div>

# Apadamtase alfa — `ApadamtaseAlfa_McBride2025_reference`

> ## <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

> No model parameters were extracted from this paper.

<div class="pk-model-meta" hidden drug="Apadamtase alfa" model-id="ApadamtaseAlfa_McBride2025_reference" status="rejected" stale="false" population="patients with congenital thrombotic thrombocytopenic purpura" measured-compound="rADAMTS13" parameterization="mechanistic" topology="1C"></div>

## Citation
McBride C, Jiang J, Zhang Z, Tolsma J, Patwari P, Mellgård B et al. Quantitative Systems Pharmacology Modeling of Platelet Responses to Recombinant ADAMTS13 in Patients With Congenital Thrombotic Thrombocytopenic Purpura. CPT: pharmacometrics & systems pharmacology 14(10):1575–1586 (2025).
  ·  DOI: [10.1002/psp4.70063](https://doi.org/10.1002/psp4.70063)

## Population and dosing

**Population:** patients with congenital thrombotic thrombocytopenic purpura · condition congenital thrombotic thrombocytopenic purpura · age group adult · n = 40.

**Dosing:** 5, 50 IU/kg, iv, multiple, every 168 h.

> **Species: human + animal.** The paper reports both human and animal data; check which group this record describes before reading it as human pharmacology (read from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).

## Model

**Structure:** 1-compartment; no model was built for this record.  
**Parameterization:** mechanistic.  
**Parameters:** 0 extracted.  
**Availability:** No model was generated from this record.

## Parameters
> ⚠️ Status "Rejected": these are the values as extracted, **not verified**. Any model or simulator on the other tabs runs on these numbers.

_No resolved parameters._

<details class="pk-evidence"><summary>Evidence &amp; review</summary>

**Status and checks:** <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.583). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

### Reviewer guidance

**No model parameters were extracted from this paper.**

Nothing in the extracted data describes the drug's disposition, so there is no model to build.

A second, independent reading of the paper (`gpt-oss-120b`) disagrees on which compound was dosed: this record has rADAMTS13, the second reading recombinant ADAMTS13 (rADAMTS13); it also differs on 4 more fields. That field shapes the model, so the record is marked disputed.

<sub>reviewed by rule template (no LLM)</sub>

### Unresolved rows _(no Q-code or no value — not parameters)_

| label (paper) | Q-code | link |
|---|---|---|
| konVE_ADAM | Q329 | llm |
| CL | Q22 | exact |
| CLD | Q30 | exact |
| V1 | Q63 | exact |
| V2 | Q64 | exact |

## Departures & gaps

**Interpretation flags:**
- dropped unlinked row (NIL): 'ADAM_Activity_UperUg' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row0:col1'])
- dropped unlinked row (NIL): 'KdegHb' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row2:col1'])
- dropped unlinked row (NIL): 'VEFrac' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row4:col1'])
- dropped duplicate Q329 ('konVE_platelet', value None) — already have one for this compound
- dropped unlinked row (NIL): 'kcatE' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row9:col1'])
- dropped unlinked row (NIL): 'kcatS_ag' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row10:col1'])
- dropped unlinked row (NIL): 'kag' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row11:col1'])
- dropped PD-category row 'rADAM_Ag_EC50' → Q321 (EC50, category G11) — pharmacodynamic parameters belong to scholarpd, not the PK model (source ['McBride_2025_table_S2:row12:col1'])
- dropped unlinked row (NIL): 'ksynPlate_human' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row13:col1'])
- dropped unlinked row (NIL): 'ksynPlate_mouse' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row14:col1'])
- dropped unlinked row (NIL): 'n_pl' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row15:col1'])
- dropped duplicate Q329 ('konVE_Hb', value None) — already have one for this compound
- dropped duplicate Q329 ('konVE_TSP', value None) — already have one for this compound
- dropped unlinked row (NIL): 'KonVG_ADAM' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row19:col1'])
- dropped unlinked row (NIL): 'KonVG_Hb' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row20:col1'])
- dropped unlinked row (NIL): 'kdegADAM' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row21:col1'])
- dropped unlinked row (NIL): 'kdegVWF' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row22:col1'])
- dropped unlinked row (NIL): 'kdegAg' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row23:col1'])
- dropped unlinked row (NIL): 'kdegPlatelet' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row24:col1'])
- dropped unlinked row (NIL): 'kdegTSP' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row25:col1'])
- dropped unlinked row (NIL): 'kcatG' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row27:col1'])
- dropped unlinked row (NIL): 'TSP1_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row28:col1'])
- dropped unlinked row (NIL): 'VWF_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row29:col1'])
- dropped unlinked row (NIL): 'ADAMTS13_SS' — extend the ontology if this is a real PK parameter (source ['McBride_2025_table_S2:row30:col1'])
- dropped duplicate Q30 ('Q', value None) — already have one for this compound
- apparent-ness (ontology-grounded): parameterization=mechanistic, measured_compound=rADAMTS13
- structure disagreement: deterministic 1C vs LLM 2C — review compartment count

**Extraction notes:**
- LLM selected parameter table(s) S2
- unparsed cell McBride_2025_table_S2:row0:col2 = 'ADAMTS13 activity conversion between IU and µg'
- unparsed cell McBride_2025_table_S2:row0:col3 = 'Rieger et al. (2006)4 Inherited from previous SCD model,model derived, fixed'
- unparsed cell McBride_2025_table_S2:row7:col2 = 'Association rate constant of ADAMTS13 with VE'
- unparsed cell McBride_2025_table_S2:row8:col2 = 'Association rate constant of ADAMTS13 with platelet'
- unparsed cell McBride_2025_table_S2:row9:col2 = 'Cleavage rate of elongated VWF by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row10:col2 = 'Cleavage rate of VWF aggregates by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row12:col2 = 'Cleavage EC50 of VWF aggregates by ADAMTS13'
- unparsed cell McBride_2025_table_S2:row14:col2 = 'Synthesis rate of platelet for mice for248.220.5098 and Kopic et al. (2016)5 studies, respectively'
- unparsed cell McBride_2025_table_S2:row14:col3 = 'Calculated based on pretreatment level for in-house study #248.220.5098and Kopic et al. (2016)5, fitted'
- unparsed cell McBride_2025_table_S2:row15:col3 = 'Assumed nonlinear dependency in Step 2, fixed'
- unparsed cell McBride_2025_table_S2:row17:col3 = 'Schlosshauer & Baker (2004)7'
- unparsed cell McBride_2025_table_S2:row18:col2 = 'Association rate constant of plasma free Hb with TSP-1'
- unparsed cell McBride_2025_table_S2:row19:col2 = 'Association rate constant of ADAMTS13 with VGb'
- unparsed cell McBride_2025_table_S2:row21:col2 = 'Degradation rate of endogenous ADAMTS13'
- unparsed cell McBride_2025_table_S2:row21:col3 = 'Half-life: 60 hoursKremer Hovinga & Lämmle (2012)8 Crawley et al. (2011)9'
- unparsed cell McBride_2025_table_S2:row22:col3 = 'Half-life: 15 hrDenis et al. (2008)10'
- unparsed cell McBride_2025_table_S2:row23:col3 = 'Assume half-life of 24 hoursClot lysis in the range of hoursBoudjeltia et al. (2002)11'
- unparsed cell McBride_2025_table_S2:row24:col3 = 'Half-life: 7 daysGrossman et al. (1960)12'
- unparsed cell McBride_2025_table_S2:row25:col2 = 'Degradation rate of TSP-1'
- unparsed cell McBride_2025_table_S2:row25:col3 = 'Half-life: 9 hoursBarclay et al. (2016)13'
- unparsed cell McBride_2025_table_S2:row27:col2 = 'Cleavage rate of ADAMTS13 for VG'
- unparsed cell McBride_2025_table_S2:row27:col3 = 'Crawley et al. (2011)9'
- unparsed cell McBride_2025_table_S2:row28:col2 = 'Baseline TSP-1 level in patients with cTTPand healthy individuals'
- unparsed cell McBride_2025_table_S2:row28:col3 = 'Liu et al. (2005)16 Gonzalez et al. (2004)17 Tan et al. (2008)18'
- unparsed cell McBride_2025_table_S2:row29:col3 = 'Zeigler et al. (1996)19 Yagi et al. (2007)20 Stufano et al. (2012)21'
- unparsed cell McBride_2025_table_S2:row30:col2 = 'Baseline ADAMTS13 level in patients with cTTPand healthy individuals'
- unparsed cell McBride_2025_table_S2:row30:col3 = 'Yagi et al. (2007)20'
- unparsed cell McBride_2025_table_S2:row32:col3 = 'Calibrated with Taylor et al. (2019)22, fitted'
- unparsed cell McBride_2025_table_S2:row37:col3 = 'Allometrically scaled from human PK parameters using data from a Phase 1 TTP study (Scully et al. 2017)23, fitted'
- unparsed cell McBride_2025_table_S2:row47:col3 = 'Patel et al. (2023)29'

## Validation

**Cross-check (independent readings):** <span class="pk-badge pk-badge--red">cross-check: disputed</span>  
Primary extraction: `qwen3.8:27b-mtp-q8_0`; retained regardless of cross-check verdict.

| second reader | verdict | agreement | disagreements |
|---|---|---|---|
| `gpt-oss-120b` | not confirmed | 0.583 (7/12 fields) | 5 |

<details><summary>5 field discrepancies</summary>

| second reader | field | first reading | second reading | agreement |
|---|---|---|---|---|
| `gpt-oss-120b` | `model.links` | [] | [['radamts13', 'vwf', 'metabolism']] | mismatch |
| `gpt-oss-120b` | `parameters[kag]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[kdeghb]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `parameters[tsp1_ss]` |  |  | only_one_extracted |
| `gpt-oss-120b` | `screen.dose_compound` | rADAMTS13 | recombinant ADAMTS13 (rADAMTS13) | mismatch |

</details>

<details class="legend">
<summary>Cross-check definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>second reader</code></td><td>Additional extraction model; the default uses a different model family. Multiple readers are supported.</td></tr><tr><td><code>agreement</code></td><td>Proportion of compared fields in agreement.</td></tr><tr><td><code>verdict</code></td><td>confirmed: full agreement; partly confirmed: non-structural discrepancy; not confirmed: structural discrepancy; primary re-run: hinted retry after an empty primary extraction.</td></tr><tr><td><code>combined</code></td><td>Confirmed only when all responding readers agree; a structural discrepancy makes the result disputed.</td></tr><tr><td><code>kept</code></td><td>Primary extraction retained; discrepancies require review rather than automatic replacement.</td></tr></tbody></table>
</details>


**Scholar closed-form checks:**

| check | status | obtained |
|---|---|---|
| C0_has_structural_params | fail | 0 |
| C0b_disposition_core | fail |  |
| C8_topology | pass |  |

<details class="legend">
<summary>Validation definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>check</code></td><td>Validation identifier. C0: structural parameters; C0b: volume or clearance/elimination; C0c: both; C1: half-life consistency; C2: covariate-effect plausibility; C3: clearance–dose–AUC consistency; C4: analytic AUC; C5: dimensional consistency.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. Skipped checks lack required inputs and provide no validation evidence.</td></tr><tr><td><code>expected</code></td><td>Source- or ontology-derived reference value.</td></tr><tr><td><code>obtained</code></td><td>Value derived from the extracted record or simulation.</td></tr><tr><td><code>ratio</code></td><td>Obtained/reference value.</td></tr><tr><td><code>tol</code></td><td>Acceptance tolerance.</td></tr><tr><td><code>source</code></td><td>Reference-value provenance.</td></tr><tr><td><code>scenario</code></td><td>Evaluated covariate scenario (reviewer checks).</td></tr><tr><td><code>note</code></td><td>Evaluation or exclusion rationale.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>


</details>

<div class="pk-tab-mark" data-tab="Models"></div>

## Models

<p>Downloads unavailable: the record is <b>rejected</b>. Previously generated model archives are removed.</p>

<div class="pk-tab-mark" data-tab="Simulation"></div>

_Browser simulation unavailable: no shared WebAssembly template. The **Models** tab provides the record-specific FMI archive._

<div class="pk-tab-end"></div>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this record](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bapadamtase_alfa%5D%20ApadamtaseAlfa_McBride2025_reference&body=Drug%3A%20apadamtase_alfa%0ARecord%3A%20ApadamtaseAlfa_McBride2025_reference%0APaper%3A%20McBride_2025%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_apadamtase_alfa/ApadamtaseAlfa_McBride2025_reference%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · extracted 2026-09-06 16:29 UTC</sub>
