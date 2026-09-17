<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;floxuridine&quot;}]"></div>

# floxuridine

- **generic name:** floxuridine
- **ATC codes:** `L01BC09`
- **DrugBank:** [DB00322](https://go.drugbank.com/drugs/DB00322)
- **groups:** approved, investigational

## About

**Description.** An antineoplastic antimetabolite that is metabolized to fluorouracil when administered by rapid injection. Floxuridine is available as a sterile, nonpyrogenic, lyophilized powder for reconstitution. When administered by slow, continuous, intra-arterial infusion, it is converted to floxuridine monophosphate. It has been used to treat hepatic metastases of gastrointestinal adenocarcinomas and for palliation in malignant neoplasms of the liver and gastrointestinal tract.

**Indication.** For palliative management of gastrointestinal adenocarcinoma metastatic to the liver, when given by continuous regional intra-arterial infusion in carefully selected patients who are considered incurable by surgery or other means. Also for the palliative management of liver cancer (usually administered by hepatic intra-arterial infusion).

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 07:29 | 5:53 | 0/0/0 | 1/0/0 | 0/0/0 | 28,529/1,136 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Port_1999](drugs/drug_floxuridine/Floxuridine_Port1999_rats_with_morris_hepatoma_m3924a.md) | Port R et al., Local disposition kinetics of floxuridi…, Cancer chemotherapy and pha… (1999) | [10.1007/s002800050946](https://doi.org/10.1007/s002800050946) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yeo_2018](drugs/drug_floxuridine/pd_Yeo_2018_Human_neutrophil_viability.md) | Yeo WS et al., The FDA-approved anti-cancer drugs, str…, Scientific reports (2018) | [10.1038/s41598-018-20617-5](https://doi.org/10.1038/s41598-018-20617-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yeo_2018](drugs/drug_floxuridine/pd_Yeo_2018_Murine_survival.md) | Yeo WS et al., The FDA-approved anti-cancer drugs, str…, Scientific reports (2018) | [10.1038/s41598-018-20617-5](https://doi.org/10.1038/s41598-018-20617-5) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yeo_2018](drugs/drug_floxuridine/pd_Yeo_2018_Sae_regulated_promoter_activity.md) | Yeo WS et al., The FDA-approved anti-cancer drugs, str…, Scientific reports (2018) | [10.1038/s41598-018-20617-5](https://doi.org/10.1038/s41598-018-20617-5) |

## Coverage

- **PubMed hits:** 22 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Port_1999.pdf` | Port R et al., Local disposition kinetics of floxuridi…, Cancer chemotherapy and pha… (1999) | popPK | 8 | [10.1007/s002800050946](https://doi.org/10.1007/s002800050946) | [10367751](https://pubmed.ncbi.nlm.nih.gov/10367751) | The study reports quantitative local disposition parameters (half-lives) for floxuridine in rats using compartmental models, with specific numeric values provided in the text. |
| `Chen_2018.pdf` | Chen M et al., Ultrasound Triggered Conversion of Porp…, ACS nano (2018) | pgx | 7 | [10.1021/acsnano.8b03674](https://doi.org/10.1021/acsnano.8b03674) | [29901986](https://www.ncbi.nlm.nih.gov/pubmed/29901986) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |

<sub>queue written 2026-09-15T07:27:35.933556+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Attilio_1984 | not_relevant | 0 | 0 | The text is a bibliography description for ambulatory infusion therapy and does not contain any pharmacodynamic data, models, or numeric parameters for floxuridine. |
| PGx | Chen_2018 | not_relevant | 0 | 0 | The paper describes a drug delivery system and mechanism of action for overcoming multidrug resistance, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PD | Galmarini_2008 | not_relevant | 2 | 1 | The paper reports qualitative cytotoxicity and dose comparisons (e.g., 4x lower dose) but does not provide numeric PD parameters (Emax, EC50) or extractable concentration-effect curves for floxuridine. |
| popPK | Heath_1989 | irrelevant | 0 | 0 | The study focuses on fluorodeoxyuridine (FdUR) and fluorodeoxyuridine monophosphate (FdUMP) in an in-vitro liposome delivery assay, not floxuridine pharmacokinetics. |
| PD | Hu_2015 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro efficacy of a drug-drug conjugate but does not report any pharmacokinetic data, concentration-effect curves, or numeric PD parameters for floxuridine. |
| PD | Newman_2002 | not_relevant | 0 | 0 | The paper is a clinical trial report on neoadjuvant chemotherapy outcomes and does not contain any pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for floxuridine. |
| PD | ODonnell_2025 | not_relevant | 0 | 0 | The paper is a clinical review of locoregional therapies (radiation, TARE, HAIP, transplant) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for floxuridine. |
| PD | Shahraki_2024 | not_relevant | 0 | 0 | The paper investigates in vitro protein binding and fluorescence quenching (molecular interaction), not pharmacodynamic exposure-response or dose-effect relationships in a biological system. |
| PD | Wilkinson_1993 | not_relevant | 2 | 1 | The paper reports clinical dose-response outcomes (response rates at specific dose levels) but lacks pharmacokinetic data or a formal pharmacodynamic model with numeric parameters like Emax or EC50. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_floxuridine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
