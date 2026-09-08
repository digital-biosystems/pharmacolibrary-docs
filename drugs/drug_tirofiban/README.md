# tirofiban

- **generic name:** tirofiban
- **ATC codes:** `B01AC17`
- **DrugBank:** [DB00775](https://go.drugbank.com/drugs/DB00775)
- **groups:** approved, investigational

## About

**Description.** Tirofiban prevents the blood from clotting during episodes of chest pain or a heart attack, or while the patient is undergoing a procedure to treat a blocked coronary artery. It is a non-peptide reversible antagonist of the platelet glycoprotein (GP) IIb/IIIa receptor, and inhibits platelet aggregation.

**Indication.** For treatment, in combination with heparin, of acute coronary syndrome, including patients who are to be managed medically and those undergoing PTCA or atherectomy.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 00:56 | 3:21 | 0/1/0 | 0/0/0 | 0/0/0 | 23,229/1,140 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Emani_2020](drugs/drug_tirofiban/Tirofiban_Emani2020_reference.md) | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Emani_2020.pdf` | Emani S et al., Platelet Inhibition With IV Glycoprotei…, Pediatric critical care med… (2020) | popPK | 9 | [10.1097/PCC.0000000000002292](https://doi.org/10.1097/PCC.0000000000002292) | [32168298](https://pubmed.ncbi.nlm.nih.gov/32168298) | The study reports quantitative PK parameters for tirofiban (half-life, steady-state concentration) and identifies covariates for clearance, but specific numeric values for clearance and volume are not explicitly listed in the provided text. |
| `Moriguchi_2005.pdf` | Moriguchi A et al., FK419, a novel nonpeptide GPIIb/IIIa an…, Journal of cerebral blood f… (2005) | pd | 4 | [10.1038/sj.jcbfm.9600009](https://doi.org/10.1038/sj.jcbfm.9600009) | [15678114](https://www.ncbi.nlm.nih.gov/pubmed/15678114) | metadata signals extractable PD data (IC50) |
| `Zhou_2020.pdf` | Zhou MC et al., Subacute stent thrombosis in a patient…, International journal of cl… (2020) | pgx | 5 | [10.5414/CP203547](https://doi.org/10.5414/CP203547) | [32352367](https://www.ncbi.nlm.nih.gov/pubmed/32352367) | metadata signals extractable PGX data (CYP2C19*2) |
| `Zhou_2024.pdf` | Zhou Y et al., Use of Tirofiban to Prevent Ischemic Ev…, Translational stroke resear… (2024) | pgx | 5 | [10.1007/s12975-023-01171-3](https://doi.org/10.1007/s12975-023-01171-3) | [37523134](https://www.ncbi.nlm.nih.gov/pubmed/37523134) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-09-06T06:53:51.926186+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ding_2017 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on clopidogrel, not tirofiban. |
| popPK | Hantgan_2002 | irrelevant | 0 | 0 | The paper is a biophysical/mechanistic study of receptor binding and structure, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Marciniak_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and receptor binding, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Meisel_2004 | not_relevant | 2 | 0 | The text is a review abstract discussing platelet glycoprotein polymorphisms and drug response in general, but it does not report specific quantitative pharmacokinetic or pharmacodynamic effects of a genotype on tirofiban. |
| PGx | Meyer_2023 | not_relevant | 0 | 0 | The paper is a systematic review of clinical outcomes (complications) for antiplatelet therapies and does not report pharmacokinetic or pharmacodynamic parameters or specific gene-variant effects on tirofiban. |
| popPK | Moriguchi_2005 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy comparison in an animal model and does not report pharmacokinetic disposition parameters for tirofiban. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotyping; tirofiban is only listed as a commercial product and is not the subject of any pharmacogenomic analysis. |
| PGx | Schrör_2003 | not_relevant | 0 | 0 | The paper explicitly states there is no clear evidence that the biological activity of the agents is modified by gene polymorphism (HPA-1). |
| popPK | Talreja_2004 | irrelevant | 0 | 0 | The study is an in-vitro platelet aggregometry experiment examining pharmacodynamic effects, not a pharmacokinetic study reporting disposition parameters for tirofiban. |
| PGx | Wang_2021 | not_relevant | 0 | 0 | The paper discusses pharmacogenomic effects on clopidogrel and aspirin, but tirofiban is only mentioned as a rescue therapy without any analysis of its PK/PD parameters or genetic influence. |
| PGx | Zhang_2021 | not_relevant | 0 | 0 | The paper reports a clinical case of stent thrombosis and mentions CYP2C19 genotype to justify switching from tirofiban to ticagrelor, but it does not report any pharmacokinetic or pharmacodynamic parameters of tirofiban or a pharmacogenomic effect on them. |
| PGx | Zhou_2020 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect of CYP2C19 on clopidogrel, not tirofiban. |
| PGx | Zhou_2024 | not_relevant | 2 | 5 | The study reports a clinical outcome (ischemic events) and platelet function (PD) for clopidogrel, but does not report a pharmacokinetic or pharmacodynamic parameter of tirofiban itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_tirofiban`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
