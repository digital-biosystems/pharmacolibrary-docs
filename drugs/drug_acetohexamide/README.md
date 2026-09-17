<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;acetohexamide&quot;}]"></div>

# acetohexamide

- **generic name:** acetohexamide
- **ATC codes:** `A10BB31`
- **DrugBank:** [DB00414](https://go.drugbank.com/drugs/DB00414)
- **groups:** approved, withdrawn

## About

**Description.** A sulfonylurea hypoglycemic agent that is metabolized in the liver to 1-hydrohexamide. Acetohexamide has been discontinued in the US market.

**Indication.** Used in the management of diabetes mellitus type 2 (adult-onset).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 15:38 | 9:25 | 0/0/0 | 0/0/0 | 0/0/0 | 76,498/5,852 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 0/0 | 7/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 14 matched, 27 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Imamura_1990.pdf` | Imamura Y et al., Mechanism of pharmacodynamic and pharma…, Pharmacology & toxicology (1990) | popPK | 8 | [10.1111/j.1600-0773.1990.tb00855.x](https://doi.org/10.1111/j.1600-0773.1990.tb00855.x) | [2096386](https://pubmed.ncbi.nlm.nih.gov/2096386) | The paper is a pharmacokinetic study of acetohexamide in rabbits reporting clearance changes, but the specific numeric parameter values are not present in the provided evidence. |
| `Inoue_1995.pdf` | Inoue Y et al., Characterization of the binding sites f…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0014-2999(95)00368-u](https://doi.org/10.1016/0014-2999(95)00368-u) | [8549639](https://www.ncbi.nlm.nih.gov/pubmed/8549639) | metadata signals extractable PD data (IC50) |
| `Ortiz-Pérez_2025.pdf` | Ortiz-Pérez E et al., Repositioning FDA-Approved Sulfonamide-…, Pharmaceuticals (Basel, Swi… (2025) | pd | 4 | [10.3390/ph18050669](https://doi.org/10.3390/ph18050669) | [40430488](https://www.ncbi.nlm.nih.gov/pubmed/40430488) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-15T15:37:43.960496+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_1991 | irrelevant | 1 | 0 | The paper is a simulation study on bioequivalency assessment using metabolites, and acetohexamide is only mentioned as a case where simulated results agreed with existing data, without reporting original quantitative PK parameters. |
| popPK | Ferner_1987 | irrelevant | 0 | 0 | The paper is a review discussing general pharmacokinetic properties and adverse effects of oral hypoglycaemic agents without reporting original quantitative PK parameters for acetohexamide. |
| PD | Ferner_1987 | not_relevant | 1 | 0 | The text is a qualitative review discussing general PK/PD concepts and adverse effects of sulfonylureas, including acetohexamide, but provides no numeric PD parameters, concentration-effect curves, or specific dose-response data. |
| PGx | Ferner_1987 | not_relevant | 0 | 0 | The paper is a general review of oral hypoglycaemic drugs and does not report specific pharmacogenomic effects on acetohexamide PK/PD parameters. |
| popPK | Harrower_1996 | irrelevant | 1 | 0 | The paper is a review discussing the general pharmacokinetics of oral antidiabetic agents in renal insufficiency without reporting original quantitative disposition parameters for acetohexamide. |
| popPK | Imamura_1990 | relevant | 8 | 0 | The paper is a pharmacokinetic study of acetohexamide in rabbits reporting clearance changes, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Imamura_1999 | irrelevant | 0 | 0 | The provided evidence contains no text, data, or parameters, making it impossible to assess relevance or extractability. |
| popPK | Imamura_2002 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of the metabolite S(-)-hydroxyhexamide, not acetohexamide itself, and no quantitative parameter values for acetohexamide are provided in the evidence. |
| popPK | Inoue_1995 | irrelevant | 0 | 0 | The paper focuses on the binding sites for glibenclamide in rat liver membranes and does not report pharmacokinetic parameters for acetohexamide. |
| PD | Inoue_1995 | not_relevant | 0 | 0 | The paper characterizes the binding sites for [3H]glibenclamide (a different drug) in rat liver membranes and does not report pharmacodynamic or exposure-response data for acetohexamide. |
| popPK | Kishimoto_1995 | irrelevant | 2 | 0 | The study focuses on in-vitro enzyme kinetics (carbonyl reductase activity) rather than in-vivo pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Kleber_1977 | irrelevant | 2 | 0 | The paper describes a GLC analytical method and mentions bioavailability data but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for acetohexamide in the provided evidence. |
| popPK | Kurşun_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on hydrazone derivatives where acetohexamide is used only as a synthetic starting material, not as the subject of pharmacokinetic analysis. |
| PD | Kurşun_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) and cytotoxicity data for novel hydrazone derivatives, but does not report any pharmacodynamic or exposure-response relationship for the drug acetohexamide itself. |
| popPK | Kurşun_2026 | irrelevant | 0 | 0 | The paper is an in-vitro study on novel chalcone and pyrazole derivatives, using acetohexamide only as a structural starting material, and reports no pharmacokinetic parameters. |
| PD | Kurşun_2026 | not_relevant | 0 | 0 | The paper focuses on the design and in vitro evaluation of novel chalcone and pyrazole derivatives, using acetohexamide only as a structural starting material; it does not report any pharmacodynamic or exposure-response data for acetohexamide itself. |
| popPK | Mazouzi_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on DNA repair and does not report any pharmacokinetic parameters for acetohexamide. |
| popPK | Michalcová_2016 | irrelevant | 0 | 0 | The study is an in-vitro binding affinity analysis using capillary electrophoresis, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Michalcová_2016 | not_relevant | 0 | 0 | The paper reports protein binding affinities (Kd) via capillary electrophoresis, not a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters like Emax or EC50. |
| popPK | Naggar_1980 | irrelevant | 0 | 0 | The study is an in-vitro adsorption/dissolution interaction study and does not report pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for acetohexamide. |
| popPK | Ortiz-Pérez_2025 | irrelevant | 0 | 0 | The paper focuses on virtual screening and in vitro studies of sulfonamide drugs as carbonic anhydrase inhibitors in Trypanosoma cruzi, not on the pharmacokinetics of acetohexamide. |
| popPK | Rasheed_2025 | irrelevant | 0 | 0 | The paper is a mechanistic and structural study on carbonic anhydrase inhibition, not a pharmacokinetic study, and reports no disposition parameters for acetohexamide. |
| popPK | Shibutani_1991 | relevant | 4 | 3 | The paper is a case report describing the pharmacokinetics of acetohexamide and its metabolite in a single patient, reporting specific half-life values (16h and 13h for the metabolite) but lacking a full compartmental model or clearance/volume parameters for the parent drug. |
| popPK | Skillman_1981 | irrelevant | 1 | 0 | The paper is a review of sulfonylurea pharmacology that mentions acetohexamide but does not report original quantitative pharmacokinetic parameter values. |
| popPK | Szkudlarek_2020 | irrelevant | 0 | 0 | The study is an in-vitro investigation of drug-protein binding affinity (association constants) and does not report pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PD | Szkudlarek_2020 | not_relevant | 0 | 0 | The paper reports in vitro binding affinity (Kd) of acetohexamide to albumin, which is a physicochemical property, not a pharmacodynamic exposure-response or dose-response relationship for a biological effect. |
| popPK | Uekama_1980 | irrelevant | 0 | 0 | The provided evidence contains no text, data, or parameters, only library service headers. |
| popPK | Yokoyama_1979 | irrelevant | 0 | 0 | The provided evidence contains no text, data, or parameters, making it impossible to assess relevance or extractability. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_acetohexamide`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
