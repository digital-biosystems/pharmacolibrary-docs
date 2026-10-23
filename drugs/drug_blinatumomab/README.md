<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;blinatumomab&quot;}]"></div>

# blinatumomab

- **generic name:** blinatumomab
- **ATC codes:** `L01FX07`
- **DrugBank:** [DB09052](https://go.drugbank.com/drugs/DB09052) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Blinatumomab is a monoclonal antibody anticancer medicine used to treat a form of lymphoblastic leukaemia-lymphoma. It is authorised in the European Union and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q410189](https://www.wikidata.org/wiki/Q410189) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | species | status | record |
|---|---|---|---|---|---|---|---|---|
| CL | CL | 2.25 | L/h | 2.25 L/h | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hijazi_2018_reference](drugs/drug_blinatumomab/Blinatumomab_Hijazi2018_reference.md) |
| CL | CL | 3.11 | L/h | 3.11 L/h | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kuchimanchi_2019_reference](drugs/drug_blinatumomab/Blinatumomab_Kuchimanchi2019_reference.md) |
| V | V | 4.35 | L | 4.35 L | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kuchimanchi_2019_reference](drugs/drug_blinatumomab/Blinatumomab_Kuchimanchi2019_reference.md) |
| V | V | 7.92 | L | 7.9204 L | review reference | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hijazi_2018_reference](drugs/drug_blinatumomab/Blinatumomab_Hijazi2018_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Hijazi_2018 · CL</text><circle cx="313.3" cy="30.0" r="4" fill="#78909c"><title>Hijazi_2018 · CL: 2.25 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Kuchimanchi_2019 · CL</text><circle cx="362.5" cy="46.0" r="4" fill="#78909c"><title>Kuchimanchi_2019 · CL: 3.11 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Kuchimanchi_2019 · V</text><circle cx="413.5" cy="30.0" r="4" fill="#78909c"><title>Kuchimanchi_2019 · V: 4.35 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Hijazi_2018 · V</text><circle cx="504.6" cy="46.0" r="4" fill="#78909c"><title>Hijazi_2018 · V: 7.92 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hijazi_2018_reference](drugs/drug_blinatumomab/Blinatumomab_Hijazi2018_reference.md) | — | 1-compartment (no model) | 2 | Hijazi Y et al., Pharmacokinetic and Pharmacodynamic Rel…, Current clinical pharmacolo… (2018) | [10.2174/1574884713666180518102514](https://doi.org/10.2174/1574884713666180518102514) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Not simulated" data-sim="no"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> | [Kuchimanchi_2019_reference](drugs/drug_blinatumomab/Blinatumomab_Kuchimanchi2019_reference.md) | — | 1-compartment (no model) | 2 | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Clements_2020_45_kg](drugs/drug_blinatumomab/Blinatumomab_Clements2020_45_kg.md) | — | 1-compartment (no model) | 0 | Clements JD et al., Population Pharmacokinetics of Blinatum…, Clinical pharmacokinetics (2020) | [10.1007/s40262-019-00823-8](https://doi.org/10.1007/s40262-019-00823-8) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [↳ 45_kg_2](drugs/drug_blinatumomab/Blinatumomab_Clements2020_45_kg_2.md) | — | 1-compartment (no model) | 0 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Flowers_2023_trimer_formation](drugs/drug_blinatumomab/pd_Flowers_2023_trimer_formation.md) | trimer formation ← blinatumomab · stimulation effect | — | Flowers D et al., A next generation mathematical model fo…, Journal of pharmacokinetics… (2023) | [10.1007/s10928-023-09846-y](https://doi.org/10.1007/s10928-023-09846-y) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hijazi_2018_SPD](drugs/drug_blinatumomab/pd_Hijazi_2018_SPD.md) | fold-change in SPD from screening to treatment end ← blinatumomab · direct sigmoid Emax (Hill) effect | — | Hijazi Y et al., Pharmacokinetic and Pharmacodynamic Rel…, Current clinical pharmacolo… (2018) | [10.2174/1574884713666180518102514](https://doi.org/10.2174/1574884713666180518102514) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Hijazi_2018_kdep](drugs/drug_blinatumomab/pd_Hijazi_2018_kdep.md) | B-cell–specific depletion rate ← blinatumomab · direct Emax (saturable) effect | — | Hijazi Y et al., Pharmacokinetic and Pharmacodynamic Rel…, Current clinical pharmacolo… (2018) | [10.2174/1574884713666180518102514](https://doi.org/10.2174/1574884713666180518102514) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jiang_2020_B_cell_depletion](drugs/drug_blinatumomab/pd_Jiang_2020_B_cell_depletion.md) | B cell depletion ← blinatumomab · model not identified | — | Jiang X et al., Development of a minimal physiologicall…, European journal of pharmac… (2020) | [10.1016/j.ejps.2020.105260](https://doi.org/10.1016/j.ejps.2020.105260) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Jiang_2020_IL_6](drugs/drug_blinatumomab/pd_Jiang_2020_IL_6.md) | interleukin 6 ← blinatumomab · model not identified | — | Jiang X et al., Development of a minimal physiologicall…, European journal of pharmac… (2020) | [10.1016/j.ejps.2020.105260](https://doi.org/10.1016/j.ejps.2020.105260) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhu_2018_CRS](drugs/drug_blinatumomab/pd_Zhu_2018_CRS.md) | cytokine release syndrome ← blinatumomab · model not identified | — | Zhu M et al., Blinatumomab Pharmacodynamics and Expos…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1006](https://doi.org/10.1002/jcph.1006) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Zhu_2018_CR_CRh](drugs/drug_blinatumomab/pd_Zhu_2018_CR_CRh.md) | complete remission or CR with partial hematologic recovery ← blinatumomab · model not identified | — | Zhu M et al., Blinatumomab Pharmacodynamics and Expos…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1006](https://doi.org/10.1002/jcph.1006) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kuchimanchi_2019_CR](drugs/drug_blinatumomab/pd_Kuchimanchi_2019_CR.md) | Complete remission ← blinatumomab · categorical (graded) response model | — | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kuchimanchi_2019_CRS](drugs/drug_blinatumomab/pd_Kuchimanchi_2019_CRS.md) | Cytokine release syndrome ← blinatumomab · categorical (graded) response model | — | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kuchimanchi_2019_NEs](drugs/drug_blinatumomab/pd_Kuchimanchi_2019_NEs.md) | Neurological events ← blinatumomab · categorical (graded) response model | — | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Kuchimanchi_2019_OS](drugs/drug_blinatumomab/pd_Kuchimanchi_2019_OS.md) | Duration of overall survival ← blinatumomab · time-to-event model | — | Kuchimanchi M et al., Exposure-response analysis of blinatumo…, British journal of clinical… (2019) | [10.1111/bcp.13864](https://doi.org/10.1111/bcp.13864) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Zhu_2018_NEs](drugs/drug_blinatumomab/pd_Zhu_2018_NEs.md) | time to NEs ← blinatumomab · time-to-event model | — | Zhu M et al., Blinatumomab Pharmacodynamics and Expos…, Journal of clinical pharmac… (2018) | [10.1002/jcph.1006](https://doi.org/10.1002/jcph.1006) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:32 | 9:32 | 0/2/2 | 4/0/1 | 0/0/0 | 220,424/40,994 | openai / gpt-6-luna | 5 | 1/4 | 4/1 | 0 |

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiang_2020.pdf` | Jiang X et al., Development of a minimal physiologicall…, European journal of pharmac… (2020) | popPK | 9 | [10.1016/j.ejps.2020.105260](https://doi.org/10.1016/j.ejps.2020.105260) | [32058058](https://pubmed.ncbi.nlm.nih.gov/32058058) | The human mPBPK/PD model characterizes blinatumomab PK, but no numeric disposition parameter values appear in the provided evidence. |

<sub>queue written 2026-10-07T10:24:05.364063+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Flowers_2023 | irrelevant | 0 | 0 | This is an in vitro binding and dose-prediction model, with no quantitative blinatumomab disposition parameters reported. |
| popPK | Jiang_2020 | relevant | 9 | 1 | The human mPBPK/PD model characterizes blinatumomab PK, but no numeric disposition parameter values appear in the provided evidence. |
| popPK | Roskopf_2014 | irrelevant | 0 | 0 | Blinatumomab is only a comparator; the half-life mentioned is background information about triplebodies, not blinatumomab PK. |
| popPK | Zhu_2016 | relevant | 10 | 2 | A human population-PK model is reported, but the numeric CL and V estimates are only referenced in a table not provided. |
| popPK | Zhu_2018 | irrelevant | 2 | 0 | The human PK study reports Css but no quantitative disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 10:24 UTC</sub>
