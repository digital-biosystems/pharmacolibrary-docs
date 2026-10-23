<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;spirapril&quot;}]"></div>

# spirapril

- **generic name:** spirapril
- **ATC codes:** `C09AA11`
- **DrugBank:** [DB01348](https://go.drugbank.com/drugs/DB01348) · **PubChem:** [CID 5311447](https://pubchem.ncbi.nlm.nih.gov/compound/5311447)
- **molar mass:** 466.614 g/mol (C22H30N2O5S2) — DrugBank
- **groups:** approved, investigational

## About

Spirapril is an ACE inhibitor used as an antihypertensive drug to treat high blood pressure. It is an approved medicine, but it does not appear to be widely marketed today and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q835757](https://www.wikidata.org/wiki/Q835757) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| spirapril | parent | 466.614 | C22H30N2O5S2 | DrugBank | [5311447](https://pubchem.ncbi.nlm.nih.gov/compound/5311447) | Krähenbühl_1993 |
| spiraprilat | metabolite | 438.557 | C20H26N2O5S2 | PubChem | [3033702](https://pubchem.ncbi.nlm.nih.gov/compound/3033702) | Krähenbühl_1993 |

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| t½ | t1/2z | 1.53 | h | 1.53 h | patients with chronic liver disease and healthy subjects | &gt;=34 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Krähenbühl_1993_reference](drugs/drug_spirapril/Spirapril_Krhenbhl1993_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q331, Q86 — no SI value to build fr…</sub> | [Krähenbühl_1993_reference](drugs/drug_spirapril/Spirapril_Krhenbhl1993_reference.md) | — | parent + metabolite (no model) | 10 | Krähenbühl S et al., Pharmacokinetics and haemodynamic effec…, European journal of clinica… (1993) | [10.1007/BF00315391](https://doi.org/10.1007/BF00315391) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Bellissant_1997_BBF](drugs/drug_spirapril/pd_Bellissant_1997_BBF.md) | brachial blood flow ← spiraprilat · direct sigmoid Emax (Hill) effect | — | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Bellissant_1997_PCEA](drugs/drug_spirapril/pd_Bellissant_1997_PCEA.md) | plasma converting enzyme activity ← spiraprilat · direct sigmoid Emax (Hill) effect | — | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Bellissant_1997_PCWP](drugs/drug_spirapril/pd_Bellissant_1997_PCWP.md) | pulmonary capillary wedge pressure ← spiraprilat · direct sigmoid Emax (Hill) effect | — | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=spirapril).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:35 | 9:05 | 1/0/0 | 1/0/0 | 0/0/0 | 125,599/27,563 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 3/1 | 2/2 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 4  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grass_1994.pdf` | Grass P et al., Spirapril: pharmacokinetic properties a…, Blood pressure. Supplement (1994) | popPK | 10 |  | [8061850](https://pubmed.ncbi.nlm.nih.gov/8061850) | The text explicitly reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for spirapril and its active metabolite spiraprilat. |
| `Meredith_1994.pdf` | Meredith PA et al., Pharmacokinetics of spirapril in renal…, Blood pressure. Supplement (1994) | popPK | 9 |  | [8061840](https://pubmed.ncbi.nlm.nih.gov/8061840) | The study reports quantitative PK parameters for spirapril and its metabolite in humans, but the specific numeric values are not present in the provided abstract text. |
| `Bellissant_1997.pdf` | Bellissant E et al., Pharmacokinetic-pharmacodynamic model r…, Journal of cardiovascular p… (1997) | popPK | 8 | [10.1097/00005344-199708000-00016](https://doi.org/10.1097/00005344-199708000-00016) | [9269955](https://pubmed.ncbi.nlm.nih.gov/9269955) | The study models the active metabolite spiraprilat (relevant as spirapril PK) but the provided evidence only contains pharmacodynamic parameters (Emax, EC50, Hill coefficients) and lacks specific quantitative PK parameters like clearance or volume of distribution. |
| `Haufe_1994.pdf` | Haufe CC et al., [Kidney function in hypertensive patien…, Medizinische Klinik (Munich… (1994) | popPK | 8 |  | [7968874](https://pubmed.ncbi.nlm.nih.gov/7968874) | The study reports a linear correlation between the total plasma clearance of the active metabolite spiraprilate and creatinine clearance, but specific numeric parameter values are not provided in the text. |
| `Stein_1994.pdf` | Stein G et al., Pharmacokinetics of spirapril and spira…, Blood pressure. Supplement (1994) | popPK | 8 |  | [8061846](https://pubmed.ncbi.nlm.nih.gov/8061846) | The study reports pharmacokinetic parameters for spirapril and its metabolite spiraprilat in humans, but the specific numeric values are not present in the provided abstract text. |
| `Sybertz_1987.pdf` | Sybertz EJ et al., Angiotensin converting enzyme inhibitor…, Archives internationales de… (1987) | pd | 4 |  | [3036028](https://www.ncbi.nlm.nih.gov/pubmed/3036028) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07 07:27 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellissant_1997 | relevant | 8 | 2 | The study models the active metabolite spiraprilat (relevant as spirapril PK) but the provided evidence only contains pharmacodynamic parameters (Emax, EC50, Hill coefficients) and lacks specific quantitative PK parameters like clearance or volume of distribution. |
| popPK | Ding_2000 | irrelevant | 0 | 0 | The paper is a review of ACE inhibitors in Chinese vs Caucasian populations, and spirapril is only mentioned in a clinical efficacy table (Table 4) without any pharmacokinetic parameter values. |
| PD | Ding_2000 | not_relevant | 3 | 2 | This is a narrative review of ACEI PK/PD differences between Chinese and Caucasians; no spirapril-specific concentration-effect or dose-response data with numeric PD parameters are reported. |
| PGx | Ding_2000 | not_relevant | 0 | 0 | The paper discusses ACE inhibitors in general (cilazapril, fosinopril, perindopril) and does not report data for spirapril. |
| popPK | Fischler_1999 | irrelevant | 2 | 0 | This is a review article that discusses spirapril's half-life (30 h) and elimination routes qualitatively but does not report quantitative population PK parameters like clearance or volume of distribution. |
| PD | Fischler_1999 | not_relevant | 1 | 0 | Narrative review of ACE inhibitors; only qualitative PK/PD comparisons (e.g., half-life 30 h for spirapril), no concentration-effect or dose-response data or PD parameters. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | The paper is a computational study on drug repurposing for COVID-19 and does not contain any pharmacokinetic data for spirapril. |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Network-based drug repurposing algorithm; spirapril appears only as a predicted ACE-inhibitor candidate with no exposure-, dose-, or concentration-effect data or PD parameters. |
| popPK | Haas_2002 | irrelevant | 0 | 0 | The study focuses on the antiproteinuric and antihypertensive clinical effects of spirapril, not on its pharmacokinetic disposition parameters. |
| popPK | Haufe_1994 | relevant | 8 | 2 | The study reports a linear correlation between the total plasma clearance of the active metabolite spiraprilate and creatinine clearance, but specific numeric parameter values are not provided in the text. |
| popPK | Hossein-Nia_1992 | irrelevant | 2 | 0 | The paper describes the development and validation of radioimmunoassays for spirapril and spiraprilate, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Hossein-Nia_1992 | not_relevant | 2 | 1 | Paper describes radioimmunoassays and only qualitatively mentions relating plasma concentrations to ACE inhibition; no numeric PD parameters or effect-vs-concentration data are reported. |
| popPK | Iakusevich_2000 | irrelevant | 0 | 0 | The study is a clinical efficacy trial reporting blood pressure and safety outcomes, not a pharmacokinetic study with disposition parameters. |
| popPK | Jardine_1999 | irrelevant | 1 | 0 | The paper is a clinical review discussing the therapeutic use of spirapril in renal failure and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Johnson_1991 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of digoxin, with spirapril serving only as a co-administered agent to test for drug interactions, and no PK parameters for spirapril are reported. |
| popPK | Meredith_1994 | relevant | 9 | 2 | The study reports quantitative PK parameters for spirapril and its metabolite in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Noble_1995 | irrelevant | 1 | 0 | The paper is a preliminary review of pharmacology and therapeutic efficacy that discusses qualitative clearance mechanisms but does not report quantitative pharmacokinetic parameter values (CL, V, t1/2). |
| PD | Noble_1995 | not_relevant | 3 | 2 | Review article describing only qualitative dose-response (flat 6–24 mg) with BP ranges; no concentration-effect data or numeric PD parameters derivable. |
| popPK | Nørgaard_1993 | irrelevant | 0 | 0 | The study is a clinical trial assessing blood pressure and renal outcomes, not a pharmacokinetic study reporting disposition parameters for spirapril. |
| popPK | Petersen_2001 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the effect of spirapril on renal function (GFR decline) and blood pressure, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Schürer_2003 | irrelevant | 2 | 0 | The study is a bioequivalence trial reporting only relative confidence intervals for AUC and Cmax, with no absolute quantitative disposition parameters (CL, V, t1/2) provided in the evidence. |
| PD | Smith_1989 | not_relevant | 2 | 3 | This is a medicinal chemistry synthesis paper; the only numeric values are in vitro ACE IC50 (spiraprilat 0.8 nM) and animal dose ranges, not a concentration-effect or exposure-response PD relationship with derivable PD parameters (Emax/EC50/slope) in subjects. |
| popPK | Song_2002 | irrelevant | 1 | 0 | This is a review article that discusses spirapril qualitatively but does not provide specific quantitative pharmacokinetic parameter values (such as clearance or volume) in the text. |
| PD | Song_2002 | not_relevant | 2 | 1 | Review article only qualitatively notes ACE inhibitors (including spirapril) have flat dose-response curves, with no numeric PD parameters or effect-concentration data for spirapril. |
| popPK | Stein_1994 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for spirapril and its metabolite spiraprilat in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Stein_1994_2 | irrelevant | 0 | 0 | The study reports clinical efficacy and renal function parameters (GFR, RPF) but does not report pharmacokinetic disposition parameters (CL, V, t1/2) for spirapril. |
| popPK | Umemura_1992 | irrelevant | 0 | 0 | The study evaluates the effect of spirapril on left ventricular hypertrophy and hemodynamics in rats, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Umemura_1992 | not_relevant | 3 | 2 | Only a single fixed dose (10 mg/kg/day) with qualitative group comparisons and a rightward ANGI dose-response shift; no numeric PD parameters (Emax, EC50, slope) or effect-vs-concentration relationship reported. |
| popPK | Wittenberg_1994 | irrelevant | 0 | 0 | The study investigates renal function parameters (inulin and PAH clearance) rather than the pharmacokinetic disposition parameters (CL, V, ka) of spirapril itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bspirapril%5D&body=Drug%3A%20spirapril%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_spirapril/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 07:27 UTC</sub>
