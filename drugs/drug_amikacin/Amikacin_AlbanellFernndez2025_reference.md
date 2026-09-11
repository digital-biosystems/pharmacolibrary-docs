# amikacin — `Amikacin_AlbanellFernndez2025_reference`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

> **Dose compound ≠ measured compound:** dosed `vancomycin, gentamicin, amikacin`, measured `amikacin`.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Albanell-Fernández M; Rodríguez-Reyes M; Bastida C; Soy D et al. (2025). Clinical pharmacokinetics 64
  ·  DOI: [10.1007/s40262-024-01459-z](https://doi.org/10.1007/s40262-024-01459-z)

## Model component
<dbs-pgx drug="amikacin" model-id="Amikacin_AlbanellFernndez2025_reference" status="extracted" stale="false" population="neonates and infants with no previous pathologies" measured-compound="amikacin" parameterization="mechanistic" topology="1C"></dbs-pgx>

**Parameterization:** mechanistic.

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| CL | `Q22` · CL | 0.05 | L/kg/h | 9.722222222222224e-07 | L/h | not captured | review (0.7) | amikacin:review | — | not captured |
| V d | `Q61` · V | 1.19 | L | 0.0011899999999999999 | L | not captured | review (0.7) | amikacin:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Departures & gaps

**Interpretation flags:**
- built from REVIEW reference values (Albanell-Fernández_2025) — secondary source
- volume reported by review

**Extraction notes:**
- unparsed cell tab_4:row0:col3 = '1.18 (for mean weight 2 kg, PCA'
- unparsed cell tab_4:row0:col4 = '40 wks, Cr)'
- unparsed cell tab_4:row0:col9 = 'M1:'
- unparsed cell tab_4:row0:col11 = 'M2:'
- unparsed cell tab_4:row0:col20 = '0.562 (PMA ≤32 wks)'
- unparsed cell tab_4:row0:col21 = '0.498 (PMA &gt;32 wks)'
- unparsed cell tab_4:row1:col9 = 'M1:'
- unparsed cell tab_4:row1:col11 = 'M2:'
- unparsed cell tab_4:row4:col3 = 'M1 and 2: WT'
- unparsed cell tab_4:row4:col9 = 'M1 and 2: WT'
- unparsed cell tab_4:row5:col3 = 'M1: 0.129'
- unparsed cell tab_4:row5:col4 = 'M2: 0.069 (for mean weight'
- unparsed cell tab_4:row5:col5 = '2 kg, PCA 40 wks, Cr 0.62'
- unparsed cell tab_4:row5:col9 = 'M1: 1-CMT: 0.063'
- unparsed cell tab_4:row5:col10 = 'M2: 2-CMT: 0.059 (if no DA'
- unparsed cell tab_4:row5:col21 = '0.07 presence or 0.086 absence'
- unparsed cell tab_4:row5:col26 = 'and weight 1.52 kg)'
- unparsed cell tab_4:row5:col33 = '0.075 (for median weight 1.38'
- unparsed cell tab_4:row5:col35 = '37 wks)'
- unparsed cell tab_4:row6:col27 = '0.000127 × PNA + 0.0123 ×'
- unparsed cell tab_4:row6:col28 = 'GA28) + 0.006'
- unparsed cell tab_4:row6:col30 = 'GA &lt;28 wks'
- unparsed cell tab_4:row6:col33 = 'PCA &lt;34 wks'
- unparsed cell tab_4:row6:col35 = 'for PCA ≥34 wks'
- unparsed cell tab_4:row7:col3 = 'Schaible et al., 1986 [33] M1: PCA'
- unparsed cell tab_4:row7:col4 = 'M2: WT, Cr'
- unparsed cell tab_4:row7:col7 = 'Asbury et al., 1993 [34] PCA'
- unparsed cell tab_4:row7:col9 = 'Seay et al., 1994 [21] M1 and 2: WT, DA, GA'
- unparsed cell tab_4:row7:col17 = 'Rodvold et al., 1995 [35] CLCr'
- unparsed cell tab_4:row7:col19 = 'Burstein et al., 1997 [22] WT'
- unparsed cell tab_4:row7:col21 = 'Silva et al., 1998 [36] IND, VENT'
- unparsed cell tab_4:row7:col25 = 'Grimsley et al., 1999 [37] WT, Cr'
- unparsed cell tab_4:row7:col27 = 'De Hoog et al., 2000 [38] WT'
- unparsed cell tab_4:row7:col28 = 'Capparelli et al., 2001 [23] WT, Cr, PNA, GA'
- unparsed cell tab_4:row7:col33 = 'Kimura et al., 2004 [39] WT, Cr'

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 2 | not captured | not captured | not captured |
| C5_dimension_Q22 | pass | [length] ** 3 / [time] | not captured | not captured | not captured | ['amikacin:review'] |
| C5_dimension_Q61 | pass | [length] ** 3 | not captured | not captured | not captured | ['amikacin:review'] |
| C6_cl_magnitude | pass | &lt;= 90.0 L/h | 0.05 | not captured | not captured | ['amikacin:review'] |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_amikacin/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Albanell-Fernández_2025` / `Albanell-Fernández_2025::reference`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

Each archive holds the model source, a script that simulates it against the appropriate library, and a README describing both and how to run them.

**FMI is two downloads.** The archive holds this record's parameters and its driver; the simulator itself is `PK_1C.fmu`, one compiled template shared by every model of this structure. Take the FMU once, keep it beside the script (or pass `--fmu PATH`). Running it reproduces the model-specific FMU exactly.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><a href="drugs/drug_amikacin/Amikacin_AlbanellFernndez2025_reference/Amikacin_AlbanellFernndez2025_reference_modelica.zip" download>Amikacin_AlbanellFernndez2025_reference_modelica.zip</a> <span class="pk-size">(3.2 kB)</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td>parameters + fmpy driver (FMU below)</td><td><a href="drugs/drug_amikacin/Amikacin_AlbanellFernndez2025_reference/Amikacin_AlbanellFernndez2025_reference_fmi.zip" download>Amikacin_AlbanellFernndez2025_reference_fmi.zip</a> <span class="pk-size">(4.1 kB)</span><br><a href="models/fmu/PK_1C.fmu" download>PK_1C.fmu</a> <span class="pk-size">(1.3 MB, shared)</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><a href="drugs/drug_amikacin/Amikacin_AlbanellFernndez2025_reference/Amikacin_AlbanellFernndez2025_reference_matlab.zip" download>Amikacin_AlbanellFernndez2025_reference_matlab.zip</a> <span class="pk-size">(3.4 kB)</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><a href="drugs/drug_amikacin/Amikacin_AlbanellFernndez2025_reference/Amikacin_AlbanellFernndez2025_reference_matlab_simbio.zip" download>Amikacin_AlbanellFernndez2025_reference_matlab_simbio.zip</a> <span class="pk-size">(2.8 kB)</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><a href="drugs/drug_amikacin/Amikacin_AlbanellFernndez2025_reference/Amikacin_AlbanellFernndez2025_reference_sbml.zip" download>Amikacin_AlbanellFernndez2025_reference_sbml.zip</a> <span class="pk-size">(2.5 kB)</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><a href="drugs/drug_amikacin/Amikacin_AlbanellFernndez2025_reference/Amikacin_AlbanellFernndez2025_reference_cellml.zip" download>Amikacin_AlbanellFernndez2025_reference_cellml.zip</a> <span class="pk-size">(3.0 kB)</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
