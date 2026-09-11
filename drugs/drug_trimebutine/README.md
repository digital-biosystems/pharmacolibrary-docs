# trimebutine

- **generic name:** trimebutine
- **ATC codes:** `A03AA05`
- **DrugBank:** [DB09089](https://go.drugbank.com/drugs/DB09089)
- **groups:** approved, investigational

## About

**Description.** Trimebutine is a spasmolytic agent that regulates intestinal and colonic motility and relieves abdominal pain with antimuscarinic and weak mu opioid agonist effects. It is marketed for the treatment of irritable bowel syndrome (IBS) and lower gastrointestinal tract motility disorders, with IBS being one of the most common multifactorial GI disorders [A19691]. It is used to restore normal bowel function and is commonly present in pharmaceutical mixtures as trimebutine maleate salt form. Trimebutine is not a FDA-approved drug, but it is available in Canada and several other international countries.

**Indication.** Indicated for symptomatic treatment of irritable bowel syndrome (IBS) and treatment of postoperative paralytic ileus following abdominal surgery.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 00:37 | 5:35 | 0/0/0 | 0/0/0 | 0/0/0 | 22,896/1,813 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 19 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jiang_2004.pdf` | Jiang H et al., [Pharmacokinetics and bioequivalence of…, Yao xue xue bao = Acta phar… (2004) | popPK | 8 | not captured | [15171657](https://pubmed.ncbi.nlm.nih.gov/15171657) | The study reports quantitative pharmacokinetic parameters (T1/2, Tmax, Cmax) for trimebutine in humans, with values clearly present in the text. |
| `Paquette_2014.pdf` | Paquette JM et al., Safety, tolerability and pharmacokineti…, Clinical therapeutics (2014) | popPK | 8 | [10.1016/j.clinthera.2014.08.005](https://doi.org/10.1016/j.clinthera.2014.08.005) | [25224876](https://pubmed.ncbi.nlm.nih.gov/25224876) | The study reports PK parameters for trimebutine (GIC-1001) but the evidence text only provides qualitative ranges and food effect ratios, lacking specific numeric values for clearance, volume, or half-life. |
| `Nagasaki_1993.pdf` | Nagasaki M et al., Effect of trimebutine on voltage-activa…, British journal of pharmaco… (1993) | pd | 4 | [10.1111/j.1476-5381.1993.tb13823.x](https://doi.org/10.1111/j.1476-5381.1993.tb13823.x) | [8220900](https://www.ncbi.nlm.nih.gov/pubmed/8220900) | metadata signals extractable PD data (IC50) |
| `Pascaud_1987.pdf` | Pascaud X et al., [Involvement of opiate receptors in the…, Gastroenterologie clinique… (1987) | pd | 4 | not captured | [3038655](https://www.ncbi.nlm.nih.gov/pubmed/3038655) | metadata signals extractable PD data (IC50) |
| `Pascaud_1989.pdf` | Pascaud X et al., [Mode of action of trimebutine: involve…, Presse medicale (Paris, Fra… (1989) | pd | 4 | not captured | [2537972](https://www.ncbi.nlm.nih.gov/pubmed/2537972) | metadata signals extractable PD data (IC50) |
| `Schuurkes_1985.pdf` | Schuurkes JA et al., A comparative study on the effects of d…, Japanese journal of pharmac… (1985) | pd | 4 | [10.1254/jjp.39.123](https://doi.org/10.1254/jjp.39.123) | [4087563](https://www.ncbi.nlm.nih.gov/pubmed/4087563) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T00:36:53.892805+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cho_2010 | irrelevant | 2 | 0 | The study is a formulation development paper that reports bioavailability comparisons (AUC/Cmax ratios) rather than specific quantitative disposition parameters (CL, V, ka) for trimebutine. |
| popPK | Iwase_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP inhibition by trimebutine and does not report pharmacokinetic disposition parameters (CL, V, ka, etc.) for trimebutine. |
| PGx | Iwase_2017 | not_relevant | 0 | 0 | The study investigates the inhibitory effects of trimebutine on CYP enzymes in vitro, not the effect of genetic variants on trimebutine's pharmacokinetics or pharmacodynamics. |
| popPK | Miyata_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic comparison of stress-induced defecation and does not report any pharmacokinetic parameters for trimebutine. |
| popPK | Nagasaki_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of binding interactions and lacks any pharmacokinetic disposition parameters. |
| popPK | Nagasaki_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium currents in smooth muscle cells, not a pharmacokinetic study. |
| popPK | Nagasaki_1993_2 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of trimebutine's effect on ion channels, not a pharmacokinetic study. |
| popPK | Paquette_2014 | relevant | 8 | 2 | The study reports PK parameters for trimebutine (GIC-1001) but the evidence text only provides qualitative ranges and food effect ratios, lacking specific numeric values for clearance, volume, or half-life. |
| popPK | Pascaud_1987 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action (opiate receptors) rather than pharmacokinetic parameters, and no quantitative PK data is provided. |
| PD | Pascaud_1987 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to extract a PD relationship. |
| popPK | Pascaud_1989 | irrelevant | 0 | 0 | The paper focuses on the mode of action and opioid receptor involvement, not pharmacokinetic parameters. |
| PD | Pascaud_1989 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action (opioid receptor involvement) and does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters. |
| popPK | Roman_1999 | irrelevant | 0 | 0 | The paper is a mechanistic/pharmacological study reporting binding affinities and electrophysiological effects, not pharmacokinetic disposition parameters. |
| popPK | Saivin_2000 | irrelevant | 2 | 0 | The study reports that no trimebutine concentrations were measured, focusing instead on the metabolite desmethyl-trimebutine for bioequivalence, and provides no quantitative PK parameters for the parent drug. |
| popPK | Schuurkes_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastrointestinal motility in guinea pigs, not a pharmacokinetic study reporting quantitative disposition parameters for trimebutine. |
| popPK | Takenaga_1984 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contraction mechanisms and does not report any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_trimebutine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
