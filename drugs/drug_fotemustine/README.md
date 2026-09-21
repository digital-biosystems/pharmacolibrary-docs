<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01A&quot;,&quot;href&quot;:&quot;atc/L01A.md&quot;},{&quot;label&quot;:&quot;fotemustine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fotemustine_Hartmann1997_patients_with_liver_metastases_from&quot;,&quot;label&quot;:&quot;Hartmann_1997_patients with liver metastases from colorectal carcinoma&quot;,&quot;href&quot;:&quot;drugs/drug_fotemustine/Fotemustine_Hartmann1997_patients_with_liver_metastases_from.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# fotemustine

- **generic name:** fotemustine
- **ATC codes:** `L01AD05`
- **DrugBank:** [DB04106](https://go.drugbank.com/drugs/DB04106)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 04:19 | 3:46 | 0/0/0 | 0/0/0 | 0/0/0 | 24,657/1,049 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hartmann_1997_patients with liver metastases from colorectal carcinoma](drugs/drug_fotemustine/Fotemustine_Hartmann1997_patients_with_liver_metastases_from.md) | Hartmann J et al., Hepatic arterial infusion of the nitros…, Oncology reports (1997) | [10.3892/or.4.1.167](https://doi.org/10.3892/or.4.1.167) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fotemustine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: TXNRD1 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 14 matched, 13 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Iliadis_1996.pdf` | Iliadis A et al., Pharmacokinetics and pharmacodynamics o…, European journal of cancer… (1996) | popPK | 10 | [10.1016/0959-8049(95)00565-x](https://doi.org/10.1016/0959-8049(95)00565-x) | [8814692](https://pubmed.ncbi.nlm.nih.gov/8814692) | The study reports quantitative pharmacokinetic parameters for fotemustine, specifically mean clearance values (85.3 and 101.3 l/h) for one- and two-compartment models, directly in the text. |
| `Hartmann_1997.pdf` | Hartmann J et al., Hepatic arterial infusion of the nitros…, Oncology reports (1997) | popPK | 9 | [10.3892/or.4.1.167](https://doi.org/10.3892/or.4.1.167) | [21590035](https://pubmed.ncbi.nlm.nih.gov/21590035) | The paper reports quantitative pharmacokinetic parameters (half-life and clearance) for fotemustine in a clinical trial, with values explicitly stated in the text. |

<sub>queue written 2026-09-15T04:17:17.203522+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Addeo_2011 | not_relevant | 0 | 0 | The paper is a clinical phase II trial reporting efficacy (response rates, PFS) and safety, but it does not contain any pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| PD | Binder_1992 | not_relevant | 0 | 0 | The paper reports only clinical response rates and toxicity in a small cohort without any pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Comella_1997 | not_relevant | 0 | 0 | The paper reports clinical efficacy and toxicity outcomes for a fixed-dose combination regimen but contains no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PD | Dine_1998 | not_relevant | 0 | 0 | The paper is a chemical stability and compatibility study of fotemustine in solution, reporting no pharmacodynamic or exposure-response data. |
| PD | Fabi_2009 | not_relevant | 3 | 2 | The paper reports a clinical dose-response comparison (response rates across three dose groups) but lacks pharmacokinetic data, concentration-effect modeling, or formal PD parameters (Emax, EC50), making it a clinical efficacy study rather than a pharmacodynamic analysis. |
| PD | Lee_1993_2 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response relationship for dacarbazine (response rates at 3 dose levels) but provides no numeric PD parameters (e.g., Emax, EC50) or concentration-effect data for fotemustine. |
| PD | McBain_2021 | not_relevant | 0 | 0 | The paper is a network meta-analysis of clinical outcomes (OS/PFS) and does not report any pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for fotemustine. |
| PD | Silvani_2008 | not_relevant | 0 | 0 | The paper reports clinical efficacy outcomes (PFS, OS, response rates) for a fixed-dose regimen but contains no pharmacokinetic data, exposure-response analysis, or numeric PD parameters. |
| PGx | Sinha_2003 | not_relevant | 0 | 0 | The paper investigates proteomic changes associated with chemoresistance in cell lines but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_fotemustine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
