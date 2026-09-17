<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11G&quot;,&quot;href&quot;:&quot;atc/A11G.md&quot;},{&quot;label&quot;:&quot;ascorbic acid (vit C)&quot;}]"></div>

# ascorbic acid (vit C)

- **generic name:** ascorbic acid (vit C)
- **ATC codes:** `A11GA01`
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-16 04:59 | 5:22 | 0/0/0 | 0/0/0 | 0/0/0 | 28,400/2,266 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Löscher_1984](drugs/drug_ascorbic_acid_vit_c/AscorbicAcidVitC_Lscher1984_horses.md) | Löscher W et al., Pharmacokinetics of ascorbic acid in ho…, Equine veterinary journal (1984) | [10.1111/j.2042-3306.1984.tb01855.x](https://doi.org/10.1111/j.2042-3306.1984.tb01855.x) |

## Coverage

- **PubMed hits:** 549 matched, 23 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Löscher_1984.pdf` | Löscher W et al., Pharmacokinetics of ascorbic acid in ho…, Equine veterinary journal (1984) | popPK | 10 | [10.1111/j.2042-3306.1984.tb01855.x](https://doi.org/10.1111/j.2042-3306.1984.tb01855.x) | [6714208](https://pubmed.ncbi.nlm.nih.gov/6714208) | The study reports quantitative PK parameters (Vd, t1/2, bioavailability) for ascorbic acid in horses, with specific numeric values provided in the text. |
| `Dalley_1989.pdf` | Dalley JW et al., Interaction of L-ascorbic acid on the d…, Pharmacology & toxicology (1989) | popPK | 9 | [10.1111/j.1600-0773.1989.tb00665.x](https://doi.org/10.1111/j.1600-0773.1989.tb00665.x) | [2748544](https://pubmed.ncbi.nlm.nih.gov/2748544) | The study reports PK parameters for ascorbic acid in rats, but the specific numeric values are not present in the provided text, only the target steady-state concentration and qualitative descriptions of the parameters. |
| `Padayatty_2004.pdf` | Padayatty SJ et al., Vitamin C pharmacokinetics: implication…, Annals of internal medicine (2004) | popPK | 9 | [10.7326/0003-4819-140-7-200404060-00010](https://doi.org/10.7326/0003-4819-140-7-200404060-00010) | [15068981](https://pubmed.ncbi.nlm.nih.gov/15068981) | The paper is a primary pharmacokinetic study of ascorbic acid, but the evidence provided only contains peak concentration data (Cmax) and lacks specific quantitative disposition parameters like clearance (CL), volume of distribution (V), or half-life (t1/2). |
| `Piotrovskij_1993.pdf` | Piotrovskij VK et al., The use of a nonlinear absorption model…, Biopharmaceutics & drug dis… (1993) | popPK | 9 | [10.1002/bdd.2510140509](https://doi.org/10.1002/bdd.2510140509) | [8218961](https://pubmed.ncbi.nlm.nih.gov/8218961) | The paper describes a two-compartment PK model for ascorbic acid in humans, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence, only qualitative descriptions and a single absorption duration value. |
| `Levine_1996.pdf` | Levine M et al., Vitamin C pharmacokinetics in healthy v…, Proceedings of the National… (1996) | popPK | 8 | [10.1073/pnas.93.8.3704](https://doi.org/10.1073/pnas.93.8.3704) | [8623000](https://pubmed.ncbi.nlm.nih.gov/8623000) | The study reports qualitative pharmacokinetic findings (sigmoid kinetics, saturation, bioavailability) for ascorbic acid but lacks specific numeric compartmental parameters (CL, V, ka) in the provided text. |

<sub>queue written 2026-09-16T04:58:58.359197+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnieszka_2022 | irrelevant | 0 | 0 | The paper is a systematic review of drug-food interactions in Parkinson's disease, not a primary pharmacokinetic study of ascorbic acid, and contains no quantitative PK parameters for the subject drug. |
| popPK | Carr_2017 | irrelevant | 0 | 0 | The paper is a review of vitamin C's immune function and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Chen_1998 | irrelevant | 0 | 0 | The study investigates the protective effects of ascorbic acid on nickel-induced lipid peroxidation in mice and does not report any pharmacokinetic parameters for ascorbic acid. |
| PD | Chen_1998 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects of nickel and protective effects of ascorbic acid on lipid peroxidation, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for ascorbic acid. |
| popPK | Cohen_1997 | irrelevant | 0 | 0 | The paper is an epidemiological study on social ties and cold susceptibility, not a pharmacokinetic study of ascorbic acid. |
| popPK | Dalley_1989 | relevant | 9 | 2 | The study reports PK parameters for ascorbic acid in rats, but the specific numeric values are not present in the provided text, only the target steady-state concentration and qualitative descriptions of the parameters. |
| popPK | Endresen_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 6-mercaptopurine, with ascorbic acid serving only as a co-administered reducing agent without reported PK parameters. |
| popPK | Kiely_1987 | irrelevant | 0 | 0 | The study investigates the effect of ascorbic acid on the pharmacokinetics of amphetamine, not the pharmacokinetic parameters of ascorbic acid itself. |
| popPK | Levine_1996 | relevant | 8 | 2 | The study reports qualitative pharmacokinetic findings (sigmoid kinetics, saturation, bioavailability) for ascorbic acid but lacks specific numeric compartmental parameters (CL, V, ka) in the provided text. |
| popPK | Lu_2025 | irrelevant | 0 | 0 | The paper describes a nanozyme therapeutic agent and its mechanism of action, not a pharmacokinetic study of ascorbic acid. |
| popPK | Lykkesfeldt_2019 | irrelevant | 2 | 0 | The paper is a review of vitamin C pharmacokinetics that discusses mechanisms and qualitative trends but does not report specific quantitative PK parameter values (e.g., CL, V, ka) in the provided evidence. |
| popPK | Mitch_1981 | irrelevant | 0 | 0 | The study focuses on the effect of ascorbic acid on uric acid excretion and measurement interference, not on the pharmacokinetic disposition parameters (CL, V, ka) of ascorbic acid itself. |
| popPK | Moores_2013 | irrelevant | 0 | 0 | The paper is a review of vitamin C's role in wound healing and does not report quantitative pharmacokinetic parameters or original PK data. |
| popPK | Nelson_1992 | irrelevant | 0 | 0 | The study focuses on metabolic and immune outcomes (body weight, infection clearance) rather than pharmacokinetic parameters like CL, V, or half-life for ascorbic acid. |
| popPK | Padayatty_2004 | relevant | 9 | 2 | The paper is a primary pharmacokinetic study of ascorbic acid, but the evidence provided only contains peak concentration data (Cmax) and lacks specific quantitative disposition parameters like clearance (CL), volume of distribution (V), or half-life (t1/2). |
| popPK | Piotrovskij_1993 | relevant | 9 | 2 | The paper describes a two-compartment PK model for ascorbic acid in humans, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided evidence, only qualitative descriptions and a single absorption duration value. |
| popPK | Shahini_2023 | irrelevant | 0 | 0 | The paper is a review of bowel preparation quality for colonoscopy and does not report pharmacokinetic parameters for ascorbic acid. |
| popPK | Storring_1988 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of Luteinizing Hormone (LH) in rats, not ascorbic acid. |
| popPK | Trang_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of caffeine, with vitamin C serving only as a co-administered agent to test for interactions, not as the subject drug. |
| popPK | Wiesner_2021 | irrelevant | 0 | 0 | The paper is a systematic review of levothyroxine interactions, and ascorbic acid is only mentioned as a co-administered agent affecting levothyroxine absorption, not as the subject drug for PK parameter extraction. |
| popPK | Wilson_1976 | irrelevant | 1 | 0 | The study investigates the effect of vitamin C on the pharmacokinetics of antipyrine and diphenylhydantoin, not the pharmacokinetic parameters of vitamin C itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_ascorbic_acid_vit_c`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
