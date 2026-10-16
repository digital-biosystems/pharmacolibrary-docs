<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J04A&quot;,&quot;href&quot;:&quot;atc/J04A.md&quot;},{&quot;label&quot;:&quot;protionamide&quot;}]"></div>

# protionamide

- **generic name:** protionamide
- **ATC codes:** `J04AD01`, `J04AM10`, `J04AM11`
- **DrugBank:** [DB12667](https://go.drugbank.com/drugs/DB12667) · **PubChem:** [CID 666418](https://pubchem.ncbi.nlm.nih.gov/compound/666418)
- **molar mass:** 180.27 g/mol (C9H12N2S) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Protionamide is an antituberculous drug used to treat tuberculosis. It is classified for treatment of tuberculosis, both alone and in combination products, though some sources also list it as withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q866657](https://www.wikidata.org/wiki/Q866657) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-13 11:39 | 5:57 | 0/0/0 | 1/0/0 | 0/0/0 | 265,179/4,468 | einfracz / qwen3.8-27b | 12 | 1/11 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). Primary extraction retained.">cross-check: partial</span> | [Cartel_1985_hepatotoxicity](drugs/drug_protionamide/pd_Cartel_1985_hepatotoxicity.md) | hepatotoxicity biomarker turnover ← prothionamide | — | Cartel JL et al., Hepatotoxicity of the daily combination…, International journal of le… (1985) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 43 matched, 42 returned
- **screened:** 4  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yew_1999.pdf` | Yew WW et al., Serum pharmacokinetics of antimycobacte…, International journal of cl… (1999) | popPK | 10 | not captured | [10761535](https://pubmed.ncbi.nlm.nih.gov/10761535) | The paper reports serum pharmacokinetics for prothionamide in humans, but no numeric parameter values are present in the provided evidence. |
| `Yun_2022.pdf` | Yun HY et al., Prothionamide Dose Optimization Using P…, Antimicrobial agents and ch… (2022) | popPK | 10 | [10.1128/aac.01893-21](https://doi.org/10.1128/aac.01893-21) | [35938799](https://pubmed.ncbi.nlm.nih.gov/35938799) | The paper describes a population PK model for prothionamide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Lee_2009.pdf` | Lee HW et al., Pharmacokinetics of prothionamide in pa…, The international journal o… (2009) | popPK | 8 | not captured | [19723408](https://pubmed.ncbi.nlm.nih.gov/19723408) | The paper reports quantitative PK parameters (AUC, Tmax, t1/2) for prothionamide in humans, though CL and V values are not explicitly listed in the text excerpt. |
| `Park_2015.pdf` | Park SI et al., Pharmacokinetics of Second-Line Antitub…, Antimicrobial agents and ch… (2015) | popPK | 7 | [10.1128/AAC.00354-15](https://doi.org/10.1128/AAC.00354-15) | [25987620](https://pubmed.ncbi.nlm.nih.gov/25987620) | Reports Cmax and AUC for prothionamide in humans, but lacks compartmental parameters (CL, V, t1/2). |

<sub>queue written 2026-10-13T11:38:18.933780+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cartel_1985 | irrelevant | 0 | 0 | The paper is a clinical safety study reporting incidence of hepatotoxicity, not a pharmacokinetic study, and contains no quantitative disposition parameters (CL, V, etc.) for prothionamide. |
| popPK | Chirehwa_2021 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of ethionamide, not protionamide. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of tyrosinase inhibition by prothionamide analogues and does not report pharmacokinetic parameters. |
| popPK | Davies_2018 | irrelevant | 0 | 0 | This is a study protocol for a prospective cohort study on multidrug-resistant tuberculosis; it outlines methods to measure prothionamide but reports no quantitative pharmacokinetic parameter values. |
| popPK | Dietrich_1994 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for leprosy treatment comparing chemotherapy regimens and contains no pharmacokinetic parameters for protionamide. |
| popPK | Ellard_1980 | irrelevant | 0 | 0 | The study uses isoniazid as a compliance marker for prothionamide and does not report pharmacokinetic parameters for prothionamide. |
| popPK | Grosset_1982 | irrelevant | 0 | 0 | The study is an in vivo efficacy/toxicity trial in mice focusing on bactericidal activity and resistance, and does not report pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Grosset_1988 | irrelevant | 0 | 0 | The study evaluates the antimicrobial activity of ofloxacin in mice, using prothionamide only as a comparator, and reports no pharmacokinetic parameters for prothionamide. |
| popPK | Hasanuzzaman_2019 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic investigation of P-gp-mediated intracellular accumulation in THP-1 cells, lacking systemic pharmacokinetic parameters such as clearance or volume of distribution. |
| popPK | Jenner_1984 | irrelevant | 2 | 0 | The paper reports only qualitative descriptions of half-life and blood levels (e.g., "slightly less", "substantially higher") without providing specific numeric parameter values for protionamide. |
| popPK | Khan_2019 | irrelevant | 1 | 0 | This is a systematic review that discusses protionamide qualitatively (noting no significant differences in clearance) but provides no original quantitative pharmacokinetic parameter values. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The study is a phenotypic screen for neuroprotection in zebrafish, and protionamide is tested only for its biological effect, with no pharmacokinetic parameters reported. |
| popPK | Lesnic_2021 | irrelevant | 0 | 0 | The study focuses on the clinical outcomes of tuberculosis treatment in diabetic patients and does not report pharmacokinetic parameters for prothionamide. |
| popPK | Musch_1987 | irrelevant | 0 | 0 | The paper is a case report describing a clinical outcome (liver failure) and the mechanism of interaction, but it does not report quantitative pharmacokinetic parameters (CL, V, etc.) for prothionamide. |
| popPK | Ojara_2023 | irrelevant | 0 | 0 | The paper is a systematic review on drug transfer into breast milk for malaria, TB, and NTD drugs (e.g., piperaquine, primaquine, chloroquine) and does not contain any data or mention of protionamide. |
| popPK | Parvez_2018 | irrelevant | 1 | 0 | The study is an in vitro mechanistic investigation of transporter kinetics (Km values) for prothionamide, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for the drug in a biological system. |
| PGx | Shimokawa_2015 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP inhibition) of prothionamide and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Strydom_2019 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for tuberculosis drugs (rifampin, isoniazid, pyrazinamide, etc.), but does not mention or report data for protionamide. |
| popPK | Sturkenboom_2021 | irrelevant | 0 | 0 | The paper is a review of anti-tuberculosis drugs and does not mention protionamide or provide any pharmacokinetic data for it. |
| popPK | Tagami_1983 | irrelevant | 0 | 0 | The paper describes an in-vitro analytical method for determining drug concentration via chemical decomposition, not a pharmacokinetic study with disposition parameters. |
| popPK | Thee_2016 | irrelevant | 0 | 0 | The paper is a clinical review of therapeutic use and dosing recommendations, containing no quantitative pharmacokinetic parameter estimates. |
| popPK | Venkatesan_1989 | irrelevant | 1 | 0 | This is a review paper discussing general pharmacokinetic properties of leprosy drugs (dapsone, rifampicin, clofazimine) without providing specific quantitative disposition parameters for protionamide. |
| PGx | Venkatesan_1989 | not_relevant | 0 | 0 | The text discusses the PK of dapsone, rifampicin, and clofazimine, and mentions acetylation polymorphism for dapsone, but does not report pharmacogenomic effects on protionamide. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of delamanid, not protionamide (which is only listed as a concomitant background therapy). |
| popPK | Wu_2019 | irrelevant | 5 | 8 | The study reports non-compartmental PK parameters (Cmax, AUC, T1/2) for protionamide in beagle dogs, but lacks the specific compartmental parameters (CL, Vd, Q) required by the strict relevance criteria, though numeric values are present in the evidence. |
| popPK | Wu_2020 | irrelevant | 0 | 0 | The paper describes the validation of an analytical method (LC-MS/MS) and only mentions the application to PK studies in the concluding sentence without reporting any quantitative PK parameter values in the provided evidence. |
| popPK | Wu_2025 | irrelevant | 0 | 0 | The paper is a clinical trial protocol for spinal tuberculosis focusing on rifapentine, moxifloxacin, isoniazid, and pyrazinamide, and does not study protionamide. |
| popPK | Yagolovich_2024 | irrelevant | 0 | 0 | This study is about bortezomib-loaded nanoparticles, and prothionamide is only used as a control substance (no PK parameters measured). |
| popPK | Yew_1999 | relevant | 10 | 0 | The paper reports serum pharmacokinetics for prothionamide in humans, but no numeric parameter values are present in the provided evidence. |
| popPK | Yun_2022 | relevant | 10 | 0 | The paper describes a population PK model for prothionamide, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yun_2022_2 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of moxifloxacin, not protionamide. |
| PGx | van_1989 | not_relevant | 0 | 0 | The paper is a general review of the pharmacology and chemistry of anti-leprosy drugs, without discussing pharmacogenomic effects. |
| popPK | van_2018 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of lopinavir and ritonavir, not protionamide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
