# butylscopolamine

- **generic name:** butylscopolamine
- **ATC codes:** `A03BB01`, `A03DB04`
- **DrugBank:** [DB09300](https://go.drugbank.com/drugs/DB09300)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Butylscopolamine is a peripherally acting antimuscarinic, anticholinergic agent. It is used to treat pain and discomfort caused by abdominal cramps, menstrual cramps, or other spasmodic activity in the digestive system. It is also effective at preventing bladder spasms. It is not a pain medication in the normal sense, since it does not directly affect pain, but rather works to prevent painful cramps and spasms from occurring. It is on the WHO Model List of Essential Medicines, the most important medications needed in a basic health system.

**Indication.** Used to treat abdmoninal cramping and pain [FDA Label].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-11 00:44 | 12:59 | 0/0/0 | 0/0/0 | 0/0/0 | 57,614/18,686 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 3/2 | 5/0 | 0 |

## popPK records

_not available_

## Coverage

- **PubMed hits:** 18 matched, 27 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morris_2018.pdf` | Morris T et al., The pharmacokinetics of orally administ…, Journal of veterinary pharm… (2018) | popPK | 8 | [10.1111/jvp.12701](https://doi.org/10.1111/jvp.12701) | [30076627](https://pubmed.ncbi.nlm.nih.gov/30076627) | The study reports quantitative PK parameters (half-life) for butylscopolamine in greyhounds, but lacks detailed compartmental model parameters like clearance or volume of distribution. |
| `Müller_2005.pdf` | Müller J et al., Drug specificity and intestinal membran…, Biochemical pharmacology (2005) | pd | 4 | [10.1016/j.bcp.2005.09.011](https://doi.org/10.1016/j.bcp.2005.09.011) | [16263091](https://www.ncbi.nlm.nih.gov/pubmed/16263091) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-11T00:43:59.826620+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Goerg_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastrointestinal motility where butylscopolamine serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Goerg_2003 | not_relevant | 2 | 1 | The study reports qualitative pharmacodynamic effects (e.g., prolonged gastric emptying) of n-butylscopolamine compared to placebo, but it does not provide concentration-effect data, dose-response curves, or numeric PD parameters (Emax, EC50, etc.). |
| PGx | Gratzke_2007 | not_relevant | 0 | 0 | The study investigates in vitro pharmacodynamics of PDE5 inhibitors and butylscopolamine on smooth muscle but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hart_2015 | irrelevant | 0 | 0 | The study is an ex vivo biomechanical investigation of smooth muscle contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Krueger_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pharmacodynamic effects (muscle activity, secretion) and does not report any pharmacokinetic parameters for butylscopolamine. |
| popPK | Kubo_1981 | irrelevant | 0 | 0 | The study is a pharmacological investigation of ganglion blocking activity in animals, not a pharmacokinetic study, and butylscopolamine is used only as a comparator agent. |
| PD | Kubo_1981 | not_relevant | 1 | 0 | The paper provides only a qualitative ranking of potency and mentions dose-response curves for a different compound (HSR-902), but does not report numeric PD parameters or extractable concentration-effect data for butylscopolamine. |
| popPK | LINSALATA_1956 | irrelevant | 0 | 0 | The paper describes pharmacodynamic/radiological studies of buscopan (butylscopolamine) and does not report quantitative pharmacokinetic parameters. |
| PD | LINSALATA_1956 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Mainguy-Seers_2019 | irrelevant | 0 | 0 | The study focuses on dexamethasone pharmacokinetics/efficacy, and butylscopolamine is only used as a diagnostic agent to assess bronchospasm, with no PK parameters reported for it. |
| popPK | Matzkies_1992 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gall-bladder kinetics where butylscopolamine serves only as a comparator agent, with no pharmacokinetic parameters reported. |
| popPK | McDermott_2025 | irrelevant | 0 | 0 | The paper is a case report on thallium intoxication where butylscopolamine is used only as a supportive analgesic/antispasmodic, with no pharmacokinetic parameters reported for it. |
| popPK | Meyer_2022 | irrelevant | 2 | 3 | The study is an in-vitro mechanistic characterization of transporter kinetics (vmax, KM, intrinsic clearance) rather than a pharmacokinetic study reporting systemic disposition parameters (CL, V, t1/2) for butylscopolamine. |
| popPK | Miyauchi_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methamphetamine, with butylscopolamine serving only as a pretreatment agent to test for interactions, and no PK parameters for butylscopolamine are reported. |
| popPK | Morris_2018 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life) for butylscopolamine in greyhounds, but lacks detailed compartmental model parameters like clearance or volume of distribution. |
| popPK | Müller_2005 | irrelevant | 0 | 0 | The paper focuses on the localization of organic cation transporters and does not report pharmacokinetic parameters for butylscopolamine. |
| PD | Müller_2005 | not_relevant | 0 | 0 | The paper focuses on the drug specificity and membrane localization of organic cation transporters, not on pharmacodynamic or exposure-response modeling for butylscopolamine. |
| popPK | Pfaffendorf_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of spasmolytic potency in guinea-pig bile ducts, not a pharmacokinetic study, and reports no disposition parameters for butylscopolamine. |
| popPK | Saitoh_1986 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding butylscopolamine. |
| popPK | Sasaki_2020 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nilotinib and acetaminophen, using butylscopolamine only as a tool to suppress gastrointestinal motility, and does not report PK parameters for butylscopolamine itself. |
| popPK | Tytgat_2007 | irrelevant | 2 | 0 | The paper is a review that discusses the pharmacokinetic profile qualitatively (e.g., low bioavailability &lt;1%) but does not report specific quantitative disposition parameters like clearance, volume, or half-life. |
| popPK | Voicu_1976 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of hypothermia in rats where butylscopolamine is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Voicu_1976 | not_relevant | 1 | 0 | The text is an abstract describing qualitative pharmacological correlations and mechanisms without providing any numeric PD parameters, dose-response curves, or quantitative data for butylscopolamine. |
| popPK | Weiser_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding in cell lines and does not report any pharmacokinetic disposition parameters. |
| popPK | Zhang_2016 | irrelevant | 0 | 0 | The study is an ex vivo pharmacological investigation of smooth muscle contractility and receptor affinity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | The evidence consists only of a conference title and contains no pharmacokinetic data or parameters for butylscopolamine. |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a header for conference abstracts and contains no specific data, results, or PD parameters for butylscopolamine. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | The provided evidence is only a conference title and contains no pharmacokinetic data or parameters for butylscopolamine. |
| PD | unknown_2021 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of butylscopolamine pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_butylscopolamine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
