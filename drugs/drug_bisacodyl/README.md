<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;bisacodyl&quot;}]"></div>

# bisacodyl

- **generic name:** bisacodyl
- **ATC codes:** `A06AB02`, `A06AG02`
- **DrugBank:** [DB09020](https://go.drugbank.com/drugs/DB09020)
- **groups:** approved, investigational

## About

**Description.** Bisacodyl, a diphenylmethane derivative, is a commonly used over the counter stimulant laxative for occasional constipation.[A233300,L13362] Both bisacodyl and [picosulfate] are metabolized to the same active metabolite bis-(p-hydroxyphenyl)-pyridyl-2-methane (BHPM).[A233290,A233300,A207700]

Bisacodyl was patented on 25 September 1956[L33045] but has been used as a laxative since 1952.[A233300]

**Indication.** Bisacodyl is indicated to relieve occasional constipation and irregularity.[L13362]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 14:55 | 2:52 | 0/0/0 | 0/0/0 | 0/0/0 | 65,277/2,400 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bisacodyl) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | small intestine | <sub>“…active bis-(p-hydroxyphenyl)-pyridyl-2-methane (BHPM) by an intestinal deacetylase.[A23329…”</sub> | prose |
| excretion | bile duct | <sub>“…The majority of bisacodyl is eliminated in the feces. 13.8-17.0% of a bisacodyl dose is el…”</sub> | prose |
| excretion | kidney | <sub>“…feces. 13.8-17.0% of a bisacodyl dose is eliminated in the urine as the active metabolite…”</sub> | prose |

<sub>Actors without a tissue in the table: AQP3 (negative modulator), ATP1A1 (inhibitor).</sub>

## Coverage

- **PubMed hits:** 34 matched, 21 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Roth_1988.pdf` | Roth W et al., [Pharmacokinetics and laxative effect o…, Arzneimittel-Forschung (1988) | popPK | 9 | not captured | [3401271](https://pubmed.ncbi.nlm.nih.gov/3401271) | The study reports quantitative PK parameters for bisacodyl (specifically its metabolite BHPM), including Cmax, Tmax, and half-life, directly in the abstract text. |

<sub>queue written 2026-09-18T14:54:36.230465+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Battaglia_2018 | irrelevant | 0 | 0 | The study uses bisacodyl as a diagnostic probe for colonic motility and reports clinical outcomes, not pharmacokinetic parameters. |
| PD | Battaglia_2018 | not_relevant | 1 | 0 | The paper reports a qualitative diagnostic test (presence/absence of response) and clinical outcomes, but does not provide numeric concentration-effect data, dose-response curves, or PD parameters like Emax or EC50. |
| popPK | Beubler_1985 | irrelevant | 0 | 0 | The study investigates the physiological effects of bisacodyl on water and electrolyte transport in the rat colon, not its pharmacokinetic disposition parameters. |
| PD | Beubler_1985 | not_relevant | 3 | 2 | The study reports qualitative changes in transport fluxes after chronic pretreatment and acute dosing, but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for bisacodyl. |
| popPK | Farack_1984 | irrelevant | 1 | 0 | The study focuses on the mechanism of action (fluid transport and permeability) in rat colonic loops rather than systemic pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Farack_1985 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of bisacodyl on mucus secretion and electrolyte transport in rat colon, not its pharmacokinetic disposition parameters. |
| popPK | Ghorpade_2026 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of polysaccharides from Delonix regia, using bisacodyl only as a comparator for laxative efficacy, and does not report any pharmacokinetic parameters for bisacodyl. |
| PD | Ghorpade_2026 | not_relevant | 0 | 0 | The paper studies polysaccharides from Delonix regia and only mentions bisacodyl as a positive control for laxative efficacy; it does not report any pharmacodynamic or exposure-response data for bisacodyl. |
| popPK | Ibrahim_2022 | irrelevant | 0 | 0 | The paper describes a thin-layer chromatography (TLC) method for the qualitative and quantitative analysis of bisacodyl in pharmaceutical formulations, not a pharmacokinetic study, and contains no disposition parameters. |
| PD | Ibrahim_2022 | not_relevant | 0 | 0 | The paper describes an analytical method (smartphone-based TLC) for quantifying drug concentrations in formulations, not a pharmacodynamic or exposure-response study. |
| popPK | Jordan-Ely_2015 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy of a disimpaction protocol using PEG and sodium picosulphate, not a pharmacokinetic study of bisacodyl. |
| popPK | Kim_2020 | irrelevant | 0 | 0 | The study is a clinical trial evaluating bowel cleansing efficacy and tolerability, not a pharmacokinetic study, and reports no disposition parameters for bisacodyl. |
| PD | Kim_2020 | not_relevant | 0 | 0 | The paper is a clinical trial comparing bowel cleansing efficacy and tolerability, reporting no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for bisacodyl. |
| popPK | Leng-Peschlow_1989 | irrelevant | 1 | 0 | The study focuses on pharmacodynamic effects (transit time, fluid absorption) in rats and mentions pharmacokinetics only qualitatively without reporting any quantitative PK parameters. |
| popPK | Müller-Lissner_2013 | irrelevant | 0 | 0 | The paper is a review of pharmacology and efficacy without original quantitative pharmacokinetic parameter values for bisacodyl. |
| PD | Müller-Lissner_2013 | not_relevant | 1 | 0 | The paper is a qualitative review of pharmacology and efficacy without reporting specific numeric PD parameters or exposure-response models for bisacodyl. |
| popPK | Puckett_2012 | irrelevant | 0 | 0 | The paper is a review of colonoscopy preparation protocols and does not report any pharmacokinetic parameters for bisacodyl. |
| PD | Puckett_2012 | not_relevant | 1 | 0 | The text is a review of colonoscopy preparation regimes and only qualitatively mentions bisacodyl as an adjunct with an undefined role, providing no numeric PD parameters or exposure-response data. |
| popPK | Reinhold_2025 | irrelevant | 2 | 0 | The study focuses on Acetalax pharmacokinetics (reporting CL, Vss, T1/2 for Acetalax), while bisacodyl is only used as a comparator for efficacy and transcriptomic analysis without reported PK parameters. |
| PD | Roth_1988 | not_relevant | 2 | 1 | The study reports PK parameters and qualitative observations of laxative effect timing, but explicitly states there is "no apparent relationship between effect and plasma level" for the dragee and provides no numeric PD parameters (Emax, EC50, etc.) or quantitative concentration-effect curve. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The paper is a pharmacodynamic meta-analysis focusing on bowel movement frequency, not a pharmacokinetic study reporting disposition parameters like clearance or volume for bisacodyl. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 70 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The paper focuses on sodium picosulfate (Clenpiq), not bisacodyl, and does not report pharmacodynamic or exposure-response parameters for bisacodyl. |
| popPK | unknown_2019 | irrelevant | 0 | 0 | no_text gate: only 55 chars of text extracted (&lt; 400) |
| PD | unknown_2019 | not_relevant | 0 | 0 | The paper describes a colonoscopy preparation (Plenvu) and does not report any pharmacodynamic or exposure-response analysis for bisacodyl. |
| popPK | unknown_2019_2 | irrelevant | 0 | 0 | no_text gate: only 60 chars of text extracted (&lt; 400) |
| PD | unknown_2019_2 | not_relevant | 0 | 0 | The paper discusses prucalopride, not bisacodyl, and does not report any pharmacodynamic or exposure-response data for bisacodyl. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 0 | 0 | The paper describes a mechanical device (vibrating capsule) for constipation, not a pharmacological drug like bisacodyl, and contains no pharmacodynamic or exposure-response data. |
| popPK | van_2016 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for prucalopride, not bisacodyl. |
| PD | van_2016 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PK) model for prucalopride, not bisacodyl, and contains no pharmacodynamic (PD) or exposure-response analysis. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_bisacodyl`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
