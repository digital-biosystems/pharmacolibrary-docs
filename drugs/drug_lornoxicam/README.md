<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M01A&quot;,&quot;href&quot;:&quot;atc/M01A.md&quot;},{&quot;label&quot;:&quot;lornoxicam&quot;}]"></div>

# lornoxicam

- **generic name:** lornoxicam
- **ATC codes:** `M01AC05`
- **DrugBank:** [DB06725](https://go.drugbank.com/drugs/DB06725) · **PubChem:** [CID 54690031](https://pubchem.ncbi.nlm.nih.gov/compound/54690031)
- **molar mass:** 371.81 g/mol (C13H10ClN3O4S2) — DrugBank
- **groups:** approved

## About

It is an approved medicine, though it is not authorised across the whole European Union and is used mainly in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2734874](https://www.wikidata.org/wiki/Q2734874) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:52 | 0:14 | 0/0/0 | 0/0/0 | 0/0/0 | 32,127/2,270 | einfracz / qwen3.8-27b | 23 | 9/0 | 9/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lornoxicam) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP2C9` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Choi_2011.pdf` | Choi CI et al., Effects of the CYP2C9*1/*13 genotype on…, Basic & clinical pharmacolo… (2011) | popPK | 8 | [10.1111/j.1742-7843.2011.00751.x](https://doi.org/10.1111/j.1742-7843.2011.00751.x) | [21726410](https://pubmed.ncbi.nlm.nih.gov/21726410) | The study reports qualitative PK differences (higher CL, longer half-life) for lornoxicam in humans based on genotype, but specific numeric parameter values are not present in the provided text. |
| `Diakonis_2013.pdf` | Diakonis VF et al., Evaluation of vitreous clearance and po…, Journal of ocular pharmacol… (2013) | popPK | 8 | [10.1089/jop.2012.0194](https://doi.org/10.1089/jop.2012.0194) | [23556534](https://pubmed.ncbi.nlm.nih.gov/23556534) | Reports first-order vitreous clearance and a specific half-life (1.7 h) for lornoxicam in rabbits, but lacks explicit clearance (CL) or volume (V) values typically required for population PK. |
| `Zaid_2017.pdf` | Zaid AN et al., Lornoxicam Immediate-Release Tablets: F…, Clinical pharmacology in dr… (2017) | popPK | 8 | [10.1002/cpdd.333](https://doi.org/10.1002/cpdd.333) | [28176487](https://pubmed.ncbi.nlm.nih.gov/28176487) | The study reports quantitative PK parameters for lornoxicam, but the specific values (other than Cmax, AUC, and ratios) are not explicitly listed in the provided text. |
| `Teaima_2021.pdf` | Teaima MH et al., A Promising Single Oral Disintegrating…, Drug design, development an… (2021) | popPK | 7 | [10.2147/DDDT.S332729](https://doi.org/10.2147/DDDT.S332729) | [34675486](https://pubmed.ncbi.nlm.nih.gov/34675486) | The study reports an in-vivo pharmacokinetic comparison for lornoxicam in rats, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, only relative bioavailability percentages. |
| `Guo_2005.pdf` | Guo Y et al., Role of CYP2C9 and its variants (CYP2C9…, Drug metabolism and disposi… (2005) | popPK | 5 | [10.1124/dmd.105.003616](https://doi.org/10.1124/dmd.105.003616) | [15764711](https://pubmed.ncbi.nlm.nih.gov/15764711) | The study provides in vivo pharmacokinetic parameters (AUC and oral clearance CL/F) for lornoxicam in humans, though based on a very small sample size (n=3) and mixed with in vitro enzymatic data. |
| `Liu_2006.pdf` | Liu YL et al., Effect of the CYP2C9*3 allele on lornox…, Clinica chimica acta; inter… (2006) | popPK | 5 | [10.1016/j.cca.2005.07.013](https://doi.org/10.1016/j.cca.2005.07.013) | [16182270](https://pubmed.ncbi.nlm.nih.gov/16182270) | The paper is a PK study in humans reporting relative changes in AUC and t1/2 for lornoxicam, but absolute numeric values for clearance, volume, or half-life are not provided in the text. |

<sub>queue written 2026-10-07T01:52:45.579140+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baviskar_2013_2 | relevant | 4 | 0 | The paper describes pharmacokinetic studies in rats, but the provided evidence contains no specific quantitative PK parameter values (such as CL, Vd, or t1/2), only release data and bioavailability multiples. |
| popPK | Bonnabry_1996 | irrelevant | 2 | 0 | This is an in-vitro mechanistic study of CYP2C9 metabolism (reporting KM, Vmax, Ki) rather than a pharmacokinetic study reporting disposition parameters like CL, V, or half-life for lornoxicam in a biological system. |
| popPK | Choi_2011 | relevant | 8 | 2 | The study reports qualitative PK differences (higher CL, longer half-life) for lornoxicam in humans based on genotype, but specific numeric parameter values are not present in the provided text. |
| popPK | Diakonis_2013 | relevant | 8 | 4 | Reports first-order vitreous clearance and a specific half-life (1.7 h) for lornoxicam in rabbits, but lacks explicit clearance (CL) or volume (V) values typically required for population PK. |
| popPK | Dittrich_1990 | irrelevant | 4 | 0 | The study investigates pharmacokinetic interactions but the abstract only states that parameters were not significantly changed without providing the specific numeric values for clearance, volume, or half-life. |
| popPK | Freestone_1991 | irrelevant | 0 | 0 | This paper is about tenoxicam, not lornoxicam, and no lornoxicam PK parameters are present. |
| popPK | Guo_2005_2 | irrelevant | 0 | 0 | The study is an in-vitro enzyme kinetics analysis of CYP2C9 variants using various substrates (luciferin, tolbutamide, diclofenac) and does not report pharmacokinetic disposition parameters for lornoxicam. |
| popPK | Hartmann_1990 | irrelevant | 0 | 0 | The paper is about tenoxicam, with lornoxicam not mentioned as a subject drug and no lornoxicam PK values present. |
| popPK | Idkaidek_2012 | irrelevant | 2 | 1 | Lornoxicam is one of 12 drugs used as a comparator in a classification system study; the abstract states it showed no salivary excretion but does not provide specific numeric PK parameters (CL, V, half-life) for it in the text. |
| popPK | Iida_2004 | irrelevant | 1 | 0 | The study is an in-vitro/in-silico mechanistic investigation of enzyme kinetics (Km, Vmax, intrinsic clearance) and does not report in-vivo population pharmacokinetic parameters like CL, V, or half-life. |
| popPK | Jeong_2022 | relevant | 10 | 2 | This is a PBPK pharmacokinetic study of lornoxicam, but the evidence shown only gives exposure ratios and mentions clinical PK results, not readable numeric disposition parameters. |
| popPK | Jones_2000 | irrelevant | 1 | 8 | This is a renal safety study of tenoxicam with no pharmacokinetic disposition model or PK parameters for lornoxicam, and the numeric values shown are renal function measures rather than PK. |
| popPK | Kim_2009_2 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding experiment and lornoxicam is only a test compound, not the subject of a pharmacokinetic study; no PK parameters for lornoxicam are reported. |
| popPK | Kohl_2000 | irrelevant | 2 | 0 | The study is an in-vitro mechanistic prediction of drug interactions (inhibitory Ki and predicted concentration ratios) and does not report in-vivo quantitative disposition parameters (CL, V, half-life) for lornoxicam. |
| popPK | Nagaya_2025 | irrelevant | 0 | 0 | Lornoxicam is used as a probe substrate for in vitro CYP2C9 characterization, not as the subject drug in a pharmacokinetic study. |
| popPK | Naumov_2019 | irrelevant | 2 | 1 | This is a clinical review/pilot safety piece with only non-PK statements about lornoxicam; no quantitative disposition parameters are provided, and any detailed data are not shown here. |
| popPK | Pruss_1990 | irrelevant | 3 | 1 | Only a review/overview with a human plasma half-life mentioned; no readable numeric PK disposition parameters or population model values are provided here. |
| popPK | Radhofer-Welte_2008 | irrelevant | 4 | 0 | The study reports bioequivalence metrics (AUC ratios, Cmax/tmax comparisons) rather than specific quantitative compartmental parameters like clearance (CL) or volume of distribution (V). |
| popPK | Ravic_1993_2 | irrelevant | 0 | 0 | no_text gate: only 340 chars of text extracted (&lt; 400) |
| popPK | Said_2024 | irrelevant | 0 | 0 | The study focuses on the formulation and in vitro release/in vivo anti-inflammatory efficacy of lornoxicam nanocarriers, with no report of quantitative pharmacokinetic parameters such as clearance or volume. |
| popPK | Si_2004 | irrelevant | 1 | 0 | The study focuses on identifying a novel CYP2C9 allele and its frequency in a specific population, providing no quantitative pharmacokinetic parameter values (such as clearance, volume, or half-life) for lornoxicam. |
| popPK | Stoeckel_1985 | irrelevant | 0 | 0 | The paper is about glibornuride and tenoxicam, not lornoxicam, and no lornoxicam PK values are present. |
| popPK | Teaima_2021 | relevant | 7 | 0 | The study reports an in-vivo pharmacokinetic comparison for lornoxicam in rats, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, only relative bioavailability percentages. |
| popPK | Turner_1990 | relevant | 4 | 4 | This is a PK paper on lornoxicam with one numeric half-life value in the text, but it is a brief review and no full compartmental/population parameters are provided. |
| popPK | Varghese_2016_2 | relevant | 3 | 2 | The study involves lornoxicam as a model drug for nanocomposite evaluation, but quantitative PK parameters (CL, V, t1/2) are only reported for the co-formulated drug Daunorubicin, not for lornoxicam. |
| popPK | Zaid_2017 | relevant | 8 | 2 | The study reports quantitative PK parameters for lornoxicam, but the specific values (other than Cmax, AUC, and ratios) are not explicitly listed in the provided text. |
| popPK | Zhou_2006 | irrelevant | 1 | 0 | This is an in-vitro molecular dynamics and docking study of the CYP2C9*13 enzyme variant, not a pharmacokinetic study reporting quantitative disposition parameters for lornoxicam. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
