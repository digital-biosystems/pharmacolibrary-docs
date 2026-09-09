# paracetamol — `Paracetamol_Brookhuis2021_nimmo_et_al_1975_26`

> ## <span class="pk-badge pk-badge--green">extracted</span>

> ℹ️ No reviewer record yet — status shown is the scholar **validate** result; simulation-based reviewer checks have not been run.

<div class="pk-tab-mark" data-tab="Information"></div>

## Citation
Brookhuis SAM; Allegaert K; Hanff LM; Lub-de Hooge MN; Dallmann A; Mian P et al. (2021). Pharmaceutics 13
  ·  DOI: [10.3390/pharmaceutics13081302](https://doi.org/10.3390/pharmaceutics13081302)

## Model component
<dbs-pgx drug="paracetamol" model-id="Paracetamol_Brookhuis2021_nimmo_et_al_1975_26" status="extracted" stale="false" population="pregnant women" measured-compound="acetaminophen" parameterization="apparent" topology="general_linear"></dbs-pgx>

**Parameterization:** CL/F, V/F — apparent, F unknown (apparent — bioavailability not identifiable).

## Parameters
| label (paper) | Q-code · name | value | unit | value_si | unit_canonical | RSE% | link | source | covariates | IIV |
|---|---|---|---|---|---|---|---|---|---|---|
| increase in acetaminophen CL/F in the first | `Q27` · CL/F | 36.8 | % | not captured | % | not captured | boundary (0.8) | Brookhuis_2021:discussion_prose | — | not captured |
| apparent volume of distribution of the S(-) enantiomer | `Q76` · V/F | 0.82 | L/kg | 0.0574 | L | not captured | review_gapfill (0.7) | Anderson_2015:review | — | not captured |
| Tlag | `Q83` · tlag | 4.2 | min | 252.0 | h | not captured | review_gapfill (0.7) | Gibb_2008:review | — | not captured |

<details class="legend">
<summary>Column legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>label (paper)</code></td><td>the row or statistic label exactly as printed in the paper (label_verbatim) — never normalised, so it can be found in the PDF.</td></tr><tr><td><code>Q-code · name</code></td><td>the ontology parameter this label was matched to (Q22 = clearance, Q27 = CL/F, Q49 = ka, Q57 = half-life, …) and its canonical name. The Q-code, not the label, is what scoring and cross-paper merging use.</td></tr><tr><td><code>value</code></td><td>the estimate as reported in the paper.</td></tr><tr><td><code>unit</code></td><td>the unit as printed (unit_verbatim).</td></tr><tr><td><code>value_si</code></td><td>the value converted to the canonical unit. Empty when no conversion was possible — usually an unparseable or missing unit.</td></tr><tr><td><code>unit_canonical</code></td><td>the canonical unit for that Q-code, i.e. what value_si is expressed in.</td></tr><tr><td><code>RSE%</code></td><td>relative standard error of the estimate, when the paper reports one.</td></tr><tr><td><code>link</code></td><td>how the label was matched to the Q-code, with confidence. exact / boundary / fuzzy / tv_prefix / caption_compartment / special_case are deterministic string matches; llm, llm_confirmed, llm_corrected involved the model; review and review_gapfill come from the secondary review tier, the latter filling a parameter the primary extraction missed; boundary_relink is a corrected match.</td></tr><tr><td><code>source</code></td><td>where in the paper the number came from: colN = that column of the located table, other_prose = running text, review = the secondary tier, pgx = a pharmacogenomic record.</td></tr><tr><td><code>covariates</code></td><td>covariate effects attached to this parameter (e.g. weight on CL).</td></tr><tr><td><code>IIV</code></td><td>inter-individual variability reported for this parameter.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

### Unresolved rows _(no Q-code or no value — not parameters)_
| label (paper) | Q-code | value | link |
|---|---|---|---|
| Cmax (µg/mL) | Q32 | not captured | exact |
| tmax (min) | Q56 | not captured | exact |

## Departures & gaps

**Interpretation flags:**
- column 'nimmo et al. (1975) [26]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- column 'nimmo et al. (1975) [26]' classified 'other' by the LLM but kept: the deterministic diagnostic-column test disagrees (a stratum column is a value column, not a statistic)
- salvaged Q27 ('increase in acetaminophen CL/F in the first'=36.8) from results prose — parameter table was unreadable
- apparent-ness (ontology-grounded): parameterization=apparent, measured_compound=acetaminophen
- held at status:extracted — NIL link or unit issue (mismatch/unknown/normalisation-failed) present
- topology: 3 first-order transfer(s) across 3 compounds → general_linear
- status held at route_to_review — not promoted
- population split: 'nimmo et al. (1975) [26]' subgroup of Brookhuis_2021 (paper reports 11 populations: allegaert et al. (2015) [16], beaulac-baillargeon et al. (1993) [12], beaulac-baillargeon et al. (1994) [22], clark and seagel (1983) [23], kulo et al. (2012) [31], kulo et al. (2013) [15], miners et al. (1986) [28], nimmo et al. (1975) [26], simpson et al. (1988) [34], stanley et al. (1995) [33], whitehead et al. (1993) [14])
- gap-filled Q76 (V/F) from Anderson_2015's review values (primary lacked it)
- skipped review gap-fill of V2: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- skipped review gap-fill of Q: primary is GENERAL_LINEAR (peripheral family needs ≥2C)
- gap-filled Q83 (tlag) from Gibb_2008's review values (primary lacked it)

**Extraction notes:**
- unparsed cell pharmaceutics-13-01302-t005:row1:col1 = 'D: 39PP: 8'
- unparsed cell Brookhuis_2021_table_2:row0:col2 = 'NP: 11.6 (1.57) aP1: 11.16 (1.02)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_2:row0:col5 = 'PP1 (day 1): 39.49 (8.44) aPP1 (day 3): 34.16 (3.64)PP2 (week 6): 37.34 (8.60)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_2:row0:col6 = 'NP: 29.9 (11.5) P1: 23.3 (7.5) p &lt; 0.05'
- unparsed cell Brookhuis_2021_table_2:row1:col2 = 'NP: 46.0 (6.5) aP1: 48.0 (8.1)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_2:row1:col5 = 'PP1 (day 1): 20.63 bPP1 (day 3): 20.63PP2 (week 6): 27.50p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_2:row1:col6 = 'NP: 48.0 (28.2) P1: 69 (29.0) p &lt; 0.05'
- unparsed cell Brookhuis_2021_table_2:row5:col2 = 'NP: 0.85 (0.05) aP1: 0.88 (0.08)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_2:row7:col2 = 'NP: 2.02 (0.08) a P1: 1.62 (0.06) p &lt; 0.005'
- companion parameter table 2 transcribed (11 record(s))
- unparsed cell Brookhuis_2021_table_3:row0:col1 = 'NP: 28.19 (1.62) aP1: 23.01 (2.18)P2: 26.70 (2.54)P3: 28.10(2.12)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_3:row0:col4 = 'D: 12.3'
- unparsed cell Brookhuis_2021_table_3:row0:col5 = 'P3: 20.8 (6.9)PP2: 23.7 (6)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_3:row1:col1 = 'NP: 61 (6.85) aP1: 74 (8.54)P2: 59 (9.32)P3: 45 (4.89)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_3:row1:col5 = 'P3: 48 (24)PP2: 48 (24)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_3:row3:col4 = 'D: 57.5'
- unparsed cell Brookhuis_2021_table_3:row3:col5 = 'P3: 116. 93 bPP2: 68.89'
- unparsed cell Brookhuis_2021_table_3:row4:col4 = 'D: 0.70 b'
- companion parameter table 3 transcribed (7 record(s))
- unparsed cell Brookhuis_2021_table_4:row0:col3 = 'P3 (50 mL): 9.9 (7.2)P3 (300 mL): 9.2 (3.6)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_4:row0:col4 = 'P3 (50 mL): 32.9 (11.2)P3 (300 mL): 30.7 (13.0)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_4:row0:col6 = 'D: 34.6 (12.7–46.6) a'
- unparsed cell Brookhuis_2021_table_4:row1:col3 = 'P3 (50 mL): 53.4 (37.2)P3 (300 mL): 57.5 (38.8)p &gt; 0.05'
- unparsed cell Brookhuis_2021_table_4:row1:col4 = 'P3 (50 mL): 40.9 (19.2) P3 (300 mL): 24.6 (12.1) p &lt; 0.05'
- unparsed cell Brookhuis_2021_table_4:row4:col6 = 'D: 58.3 (42.9–156) a'
- unparsed cell Brookhuis_2021_table_4:row8:col6 = 'D: 20.3 (11.8–62.8) a'
- unparsed cell Brookhuis_2021_table_4:row9:col6 = 'D: 0.26 (0.15–0.79) b'
- companion parameter table 4 transcribed (7 record(s))
- LLM selected parameter table(s) 2, 3, 4, 5

## Validation

**Scholar closed-form checks:**

| check | status | expected | obtained | ratio | tol | source |
|---|---|---|---|---|---|---|
| C0_has_structural_params | pass | not captured | 3 | not captured | not captured | not captured |
| C0b_disposition_core | pass | not captured | not captured | not captured | not captured | not captured |
| C5_dimension_Q32 | pass | [mass] / [length] ** 3 | not captured | not captured | not captured | ['Brookhuis_2021_table_3:row0:col3'] |
| C5_dimension_Q56 | pass | [time] | not captured | not captured | not captured | ['Brookhuis_2021_table_3:row1:col3'] |
| C5_dimension_Q76 | pass | [length] ** 3 | not captured | not captured | not captured | ['Anderson_2015:review'] |
| C5_dimension_Q83 | pass | [time] | not captured | not captured | not captured | ['Gibb_2008:review'] |
| C7_apparent_coherence | pass | not captured | not captured | not captured | not captured | not captured |
| C8_topology | pass | not captured | not captured | not captured | not captured | not captured |
| C9_phys_window_Q76 | pass | volume within physiological range | 57.4 L | not captured | not captured | ['Anderson_2015:review'] |

<details class="legend">
<summary>Check legend — what each column means</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>check</code></td><td>the check id. C0_has_structural_params = at least one numeric structural parameter; C0b_disposition_core = both a volume and a clearance/elimination term; C1_half_life(_beta) = reported half-life against V and CL; C2_reference = covariate scenarios are sign-plausible; C3_cl_dose_auc = CL against dose/AUC; C4_auc_closed_form = AUC recomputed in closed form; C5_dimension_&lt;Qcode&gt; = the parameter's units carry the dimension its Q-code requires.</td></tr><tr><td><code>status</code></td><td>pass, fail, or skipped. A skipped check had nothing to compare — the paper did not report the input it needs — and is not evidence against the record. The scholar table lists only pass and fail; the reviewer table also shows skipped, with the reason in note.</td></tr><tr><td><code>expected</code></td><td>the value the check required, from the paper or from the ontology.</td></tr><tr><td><code>obtained</code></td><td>what the record actually yields.</td></tr><tr><td><code>ratio</code></td><td>obtained / expected, where the check is a numeric comparison.</td></tr><tr><td><code>tol</code></td><td>the tolerance the ratio had to fall within to pass.</td></tr><tr><td><code>source</code></td><td>the artifact the expected value was taken from.</td></tr><tr><td><code>scenario</code></td><td>reviewer table only — the covariate scenario the check was run under.</td></tr><tr><td><code>note</code></td><td>why a check was skipped, or how it was judged.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Raw artifacts

- scholar stages: `../../../knowledgebase/drugs/drug_paracetamol/papers/_screenv2.yaml`, `_locatev2.yaml`, `_transcribev2.yaml`, `_interpretv2.yaml`, `_validatev2.yaml`, `_reviewv2.yaml` (keys `Brookhuis_2021` / `Brookhuis_2021::nimmo_et_al_1975_26`)


<div class="pk-tab-mark" data-tab="Models"></div>

## Downloadable models

No bundles have been generated for this record yet. When the engineer emits them they appear here automatically — this page reports what is on disk and generates nothing itself.

<table class="pk-models"><thead><tr><th>format</th><th>archive contents</th><th>download</th></tr></thead><tbody>
<tr><td><b>Modelica</b></td><td><code>.mo</code> + Modelica script</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>FMI 2.0 (FMU)</b></td><td><code>.fmu</code> + fmpy driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (pure)</b></td><td><code>.m</code> ODE function + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>MATLAB (SimBiology)</b></td><td><code>.sbproj</code> + driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>SBML</b></td><td><code>.xml</code> (L3V2) + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
<tr><td><b>CellML</b></td><td><code>.cellml</code> + Python driver</td><td><span class="pk-missing">not generated yet</span></td></tr>
</tbody></table>

<div class="pk-tab-mark" data-tab="Simulation"></div>

## Web simulation

> 🚧 Not yet wired up — this tab will host an in-browser run of the model above, with editable parameters and dosing.

The simulator will be built on **bodylight.js**, which compiles a model to WebAssembly and drives it from the page, so a simulation runs entirely in the browser with nothing to install: <https://bodylight.physiome.cz/>

<div class="pk-tab-end"></div>

---
<sub>Generated by `docs.py` (scholarv2). This page is a browsable view of the KB artifacts, not a replacement for them.</sub>
