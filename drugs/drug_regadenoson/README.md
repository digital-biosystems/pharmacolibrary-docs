<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01E&quot;,&quot;href&quot;:&quot;atc/C01E.md&quot;},{&quot;label&quot;:&quot;regadenoson&quot;}]"></div>

# regadenoson

- **generic name:** regadenoson
- **ATC codes:** `C01EB21`
- **DrugBank:** [DB06213](https://go.drugbank.com/drugs/DB06213) · **PubChem:** [CID 219024](https://pubchem.ncbi.nlm.nih.gov/compound/219024)
- **molar mass:** 390.354 g/mol (C15H18N8O5) — DrugBank
- **groups:** approved, investigational

## About

Regadenoson is a cardiac drug used to help with myocardial perfusion imaging, a heart scan that shows blood flow to the heart muscle. It is an approved medicine, with one product authorised in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7307897](https://www.wikidata.org/wiki/Q7307897) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 04:59 | 1:27 | 0/0/0 | 0/0/0 | 0/0/0 | 1,776/170 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 0/4 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=regadenoson) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADORA2A (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 26 matched, 20 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gordi_2007.pdf` | Gordi T et al., Regadenoson pharmacokinetics and tolera…, Journal of clinical pharmac… (2007) | popPK | 9 | [10.1177/0091270007301620](https://doi.org/10.1177/0091270007301620) | [17585115](https://pubmed.ncbi.nlm.nih.gov/17585115) | The paper describes a population PK study for regadenoson, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Liu_2026.pdf` | Liu Y et al., Safety, pharmacokinetics, and pharmacod…, International journal of cl… (2026) | popPK | 8 | [10.5414/CP204644](https://doi.org/10.5414/CP204644) | [41424325](https://pubmed.ncbi.nlm.nih.gov/41424325) | The study reports PK parameters for regadenoson, but the evidence only provides bioequivalence ratios and qualitative statements about differences in T1/2 and Vss without listing the actual numeric values for clearance, volume, or half-life. |
| `Gordi_2006.pdf` | Gordi T et al., A population pharmacokinetic/pharmacody…, Clinical pharmacokinetics (2006) | pd | 5 | [10.2165/00003088-200645120-00005](https://doi.org/10.2165/00003088-200645120-00005) | [17112296](https://www.ncbi.nlm.nih.gov/pubmed/17112296) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Tejani_2011.pdf` | Tejani FH et al., Effect of caffeine on SPECT myocardial…, Journal of nuclear cardiolo… (2011) | pd | 5 | [10.1007/s12350-010-9311-6](https://doi.org/10.1007/s12350-010-9311-6) | [21082298](https://www.ncbi.nlm.nih.gov/pubmed/21082298) | metadata signals extractable PD data (exposure-response) |
| `Noël_2017.pdf` | Noël F et al., Validation of a Na+-shift binding assay…, Journal of pharmacological… (2017) | pd | 4 | [10.1016/j.vascn.2016.10.009](https://doi.org/10.1016/j.vascn.2016.10.009) | [27810394](https://www.ncbi.nlm.nih.gov/pubmed/27810394) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T04:59:38.279086+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abudiab_2014 | irrelevant | 0 | 0 | The paper is a case report focusing on the pharmacodynamic reversal of regadenoson with aminophylline and does not report quantitative pharmacokinetic parameters. |
| PD | Abudiab_2014 | not_relevant | 1 | 0 | The text is a case report describing the clinical efficacy of late aminophylline reversal without providing numeric concentration-effect data, dose-response curves, or PD parameters. |
| popPK | Baksa_2025 | irrelevant | 0 | 0 | The paper is a systematic review of diagnostic imaging (SPECT/PET) where regadenoson is used only as a vasodilator agent to induce hyperemia, and no pharmacokinetic parameters for regadenoson are reported. |
| PD | Baksa_2025 | not_relevant | 0 | 0 | The paper is a systematic review and meta-analysis of the diagnostic and prognostic value of SPECT-derived myocardial flow reserve; it does not report pharmacokinetic or pharmacodynamic modeling, exposure-response relationships, or numeric PD parameters for regadenoson. |
| popPK | Bastarrika_2025 | irrelevant | 0 | 0 | The study investigates myocardial blood flow and perfusion reserve using regadenoson as a vasodilator for imaging, but does not report pharmacokinetic parameters (CL, V, ka, etc.) for the drug itself. |
| popPK | Bengs_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the PET tracer 18F-flurpiridaz, using regadenoson only as a vasodilator stress agent without reporting its disposition parameters. |
| popPK | Gordi_2006 | irrelevant | 0 | 0 | no_text gate: only 131 chars of text extracted (&lt; 400) |
| popPK | Gordi_2007 | relevant | 9 | 2 | The paper describes a population PK study for regadenoson, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Gómez-Perales_2021 | not_relevant | 0 | 0 | The paper discusses the concept of iodine allergy in nuclear medicine and does not contain any pharmacodynamic or exposure-response data for regadenoson. |
| popPK | Liu_2026 | relevant | 8 | 2 | The study reports PK parameters for regadenoson, but the evidence only provides bioequivalence ratios and qualitative statements about differences in T1/2 and Vss without listing the actual numeric values for clearance, volume, or half-life. |
| PD | Liu_2026 | not_relevant | 2 | 1 | The study reports only summary statistics (mean/SD) for heart rate and blood pressure changes in a single-dose bioequivalence study, without providing concentration-effect data, dose-response curves, or fitted PD parameters (e.g., Emax, EC50). |
| popPK | Muñiz-Sáenz-Diez_2023 | irrelevant | 0 | 0 | The study evaluates the safety, hemodynamic response, and diagnostic performance of regadenoson for stress CMR, but does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug. |
| PD | Muñiz-Sáenz-Diez_2023 | not_relevant | 1 | 0 | The paper reports clinical hemodynamic responses (HR, BP) and diagnostic accuracy but does not provide drug concentrations or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| popPK | Noël_2017 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study validating a binding assay for intrinsic efficacy and does not report any pharmacokinetic parameters for regadenoson. |
| PD | Noël_2017 | not_relevant | 2 | 2 | The paper reports binding assay parameters (IC50 ratios) for intrinsic efficacy estimation, not a pharmacodynamic exposure-response or dose-response relationship in a biological system. |
| popPK | Pogosyan_2026 | irrelevant | 0 | 0 | The study evaluates hemodynamic and imaging safety of ferumoxytol and regadenoson, not pharmacokinetic parameters. |
| popPK | Shrestha_2021 | irrelevant | 0 | 0 | The study uses regadenoson as a stress agent for cardiac PET imaging to assess myocardial blood flow, not to characterize the pharmacokinetic parameters of regadenoson itself. |
| popPK | Tan_2020 | irrelevant | 0 | 0 | Regadenoson (Lexiscan) is used only as a blood-brain barrier regulator/co-administered agent, not as the subject drug for PK parameter extraction. |
| PD | Tan_2020 | not_relevant | 0 | 0 | The paper focuses on the mechanism of action (pyroptosis/apoptosis) and biodistribution of HSYA with Lexiscan, but does not report any quantitative exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Tejani_2011 | irrelevant | 0 | 0 | no_text gate: only 166 chars of text extracted (&lt; 400) |
| PD | Tejani_2011 | not_relevant | 0 | 0 | The paper is a rationale and design document for a clinical trial and does not report any pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Van_2013 | irrelevant | 0 | 0 | The study uses regadenoson as a pharmacologic stress agent for PET imaging and reports hemodynamic parameters (CFR, LVEF), not pharmacokinetic disposition parameters (CL, V, ka) for regadenoson. |
| popPK | Zhu_2012 | irrelevant | 0 | 0 | The study is a hemodynamic/physiological investigation of hepatic artery flow in a porcine model and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for regadenoson. |
| PD | Zhu_2012 | not_relevant | 3 | 2 | The paper mentions a dose-response curve to select a single dose (0.1 ug/kg/min) but does not provide numeric PD parameters (Emax, EC50) or a concentration-effect curve in the text. |
| popPK | Zoghbi_2012 | irrelevant | 2 | 0 | The paper is a review article summarizing pharmacokinetics without providing original quantitative parameter values for regadenoson. |
| PD | Zoghbi_2012 | not_relevant | 2 | 1 | The text is an abstract for a review article summarizing pharmacology and clinical data, but it does not present specific numeric PD parameters or extractable concentration-effect curves for regadenoson. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
