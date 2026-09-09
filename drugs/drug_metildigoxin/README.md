# metildigoxin

- **generic name:** metildigoxin
- **ATC codes:** `C01AA08`
- **DrugBank:** [DB13401](https://go.drugbank.com/drugs/DB13401)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-09 07:20 | 6:09 | 0/1/0 | 0/0/0 | 0/0/0 | 63,844/11,838 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hinderling_1977](drugs/drug_metildigoxin/Metildigoxin_Hinderling1977_reference.md) | Hinderling PH et al., Pharmacokinetics of beta-methyldigoxin…, Journal of pharmaceutical s… (1977) | [10.1002/jps.2600660304](https://doi.org/10.1002/jps.2600660304) |

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Modrić_1981.pdf` | Modrić B et al., [Pharmacokinetics of beta-methyl-digoxi…, Vojnosanitetski pregled (1981) | popPK | 10 | not captured | [7257229](https://pubmed.ncbi.nlm.nih.gov/7257229) | The title indicates a pharmacokinetic study of beta-methyl-digoxin (metildigoxin) in dialysis patients, but no numeric parameter values are present in the provided evidence. |
| `Twittenhoff_1981.pdf` | Twittenhoff WD et al., Extrarenal clearance, distribution volu…, International journal of cl… (1981) | popPK | 10 | not captured | [7298247](https://pubmed.ncbi.nlm.nih.gov/7298247) | The paper reports specific quantitative pharmacokinetic parameters (clearance, volume, elimination rate, half-life) for metildigoxin in anuric patients. |
| `Haasis_1975.pdf` | Haasis R et al., [Cardiac effects and glycoside concentr…, Klinische Wochenschrift (1975) | popPK | 9 | [10.1007/BF01468758](https://doi.org/10.1007/BF01468758) | [1152344](https://pubmed.ncbi.nlm.nih.gov/1152344) | The study reports quantitative pharmacokinetic parameters (renal clearance and half-life) for metildigoxin (beta-methyl-digoxin) in healthy humans. |
| `Hinderling_1977.pdf` | Hinderling PH et al., Pharmacokinetics of beta-methyldigoxin…, Journal of pharmaceutical s… (1977) | popPK | 9 | [10.1002/jps.2600660304](https://doi.org/10.1002/jps.2600660304) | [845795](https://pubmed.ncbi.nlm.nih.gov/845795) | The paper reports quantitative pharmacokinetic parameters for beta-methyldigoxin (metildigoxin), including absorption half-life (16 min), bioavailability (59-60%), and renal excretion percentages, directly in the text. |
| `Yukawa_1995.pdf` | Yukawa E, New and simple method for estimating me…, International journal of cl… (1995) | popPK | 9 | not captured | [8688985](https://pubmed.ncbi.nlm.nih.gov/8688985) | The paper describes a population PK study for metildigoxin using NONMEM, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided text, only variability percentages. |
| `Angelino_1977.pdf` | Angelino PF et al., [Kinetics of beta-methyl-digoxin in var…, Giornale italiano di cardio… (1977) | popPK | 8 | not captured | [892276](https://pubmed.ncbi.nlm.nih.gov/892276) | The study reports quantitative clearance rates for metildigoxin in humans, but specific numeric values are not present in the provided abstract text. |
| `Dotti_1977.pdf` | Dotti C et al., Study of the influence of haemodialysis…, La Ricerca in clinica e in… (1977) | popPK | 8 | [10.1007/BF02886650](https://doi.org/10.1007/BF02886650) | [615333](https://pubmed.ncbi.nlm.nih.gov/615333) | The study reports pharmacokinetic parameters (half-lives, disappearance rates) for metildigoxin, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the text, only peak concentrations and qualitative comparisons. |
| `Kaufmann_1981.pdf` | Kaufmann B et al., Pharmacokinetics of metildigoxin and di…, Clinical pharmacokinetics (1981) | popPK | 8 | [10.2165/00003088-198106060-00004](https://doi.org/10.2165/00003088-198106060-00004) | [7318305](https://pubmed.ncbi.nlm.nih.gov/7318305) | The study investigates the pharmacokinetics of metildigoxin and mentions parameters like volume of distribution and clearance, but the provided evidence lacks specific numeric values for these parameters. |
| `Marinow_1977.pdf` | Marinow J et al., Serum glycoside concentrations after si…, European journal of clinica… (1977) | popPK | 8 | [10.1007/BF00606413](https://doi.org/10.1007/BF00606413) | [856604](https://pubmed.ncbi.nlm.nih.gov/856604) | The study reports quantitative renal clearance values for beta-methyl-digoxin (96 +- 9 ml) and discusses total body clearance relationships, providing extractable PK parameters for the subject drug. |
| `Rameis_1984.pdf` | Rameis H et al., Changes in metildigoxin pharmacokinetic…, International journal of cl… (1984) | popPK | 8 | not captured | [6715083](https://pubmed.ncbi.nlm.nih.gov/6715083) | The study reports qualitative changes in metildigoxin clearance and volume in cirrhosis, but specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-09-09T07:18:27.928858+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Angelino_1977 | relevant | 8 | 2 | The study reports quantitative clearance rates for metildigoxin in humans, but specific numeric values are not present in the provided abstract text. |
| popPK | Angelino_1979 | irrelevant | 2 | 0 | The abstract describes qualitative correlations and trends in renal function but does not report specific quantitative pharmacokinetic parameter values (such as CL, V, or t1/2) for metildigoxin. |
| popPK | Dotti_1977 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (half-lives, disappearance rates) for metildigoxin, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the text, only peak concentrations and qualitative comparisons. |
| popPK | Kaufmann_1981 | relevant | 8 | 2 | The study investigates the pharmacokinetics of metildigoxin and mentions parameters like volume of distribution and clearance, but the provided evidence lacks specific numeric values for these parameters. |
| popPK | Kelman_1980 | relevant | 10 | 2 | The study reports quantitative PK parameters for fl-methyl digoxin, but the specific numeric values for clearance and half-life are contained in Table 4, which is not included in the provided evidence. |
| popPK | Modrić_1981 | relevant | 10 | 0 | The title indicates a pharmacokinetic study of beta-methyl-digoxin (metildigoxin) in dialysis patients, but no numeric parameter values are present in the provided evidence. |
| popPK | Rameis_1984 | relevant | 8 | 2 | The study reports qualitative changes in metildigoxin clearance and volume in cirrhosis, but specific numeric parameter values are not present in the provided evidence. |
| PD | Rameis_1984 | not_relevant | 0 | 0 | The paper reports pharmacokinetic changes (clearance, volume, serum concentrations) in cirrhosis but does not provide any pharmacodynamic data, exposure-response analysis, or numeric PD parameters. |
| popPK | Risler_1983 | irrelevant | 2 | 0 | The study focuses on digoxin and its derivatives (including beta-methyl-digoxin) rather than metildigoxin specifically, and it reports qualitative mechanisms and relative clearances without providing quantitative PK parameter values for the target drug. |
| popPK | Yukawa_1995 | relevant | 9 | 2 | The paper describes a population PK study for metildigoxin using NONMEM, but the specific numeric parameter values (clearance, volume, etc.) are not present in the provided text, only variability percentages. |
| popPK | Zilly_1975 | irrelevant | 2 | 0 | The study focuses on the metabolic rate of demethylation in acute hepatitis and does not report quantitative pharmacokinetic parameters (CL, V, ka) for metildigoxin. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_metildigoxin`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
