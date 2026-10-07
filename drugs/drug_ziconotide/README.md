<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;ziconotide&quot;}]"></div>

# ziconotide

- **generic name:** ziconotide
- **ATC codes:** `N02BG08`
- **DrugBank:** [DB06283](https://go.drugbank.com/drugs/DB06283) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Ziconotide is a non-opioid painkiller used for severe chronic pain, including complex regional pain syndrome. It is authorised in the European Union and given as an injection into the spinal fluid, so its use is restricted to specialist care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q198473](https://www.wikidata.org/wiki/Q198473) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:18 | 0:37 | 0/0/0 | 0/0/0 | 0/0/0 | 60,212/1,284 | einfracz / qwen3.8-27b | 4 | 2/5 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ziconotide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1A (inhibitor), CACNA1B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 5  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Manda_2016.pdf` | Manda P et al., Delivery of ziconotide to cerebrospinal…, Journal of controlled relea… (2016) | popPK | 10 | [10.1016/j.jconrel.2015.12.044](https://doi.org/10.1016/j.jconrel.2015.12.044) | [26732557](https://pubmed.ncbi.nlm.nih.gov/26732557) | The paper is a preclinical PK study in rats reporting specific numeric parameters (elimination rate constants, Cmax, Tmax) for ziconotide in CSF. |
| `Wermeling_2003.pdf` | Wermeling D et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2003) | popPK | 10 | not captured | [12817525](https://pubmed.ncbi.nlm.nih.gov/12817525) | The paper reports specific quantitative PK parameters for ziconotide (half-life, clearance, volume of distribution) in the abstract, derived from a clinical study. |
| `Yaksh_2012.pdf` | Yaksh TL et al., Pharmacokinetic analysis of ziconotide…, Neuromodulation : journal o… (2012) | popPK | 10 | [10.1111/j.1525-1403.2012.00479.x](https://doi.org/10.1111/j.1525-1403.2012.00479.x) | [22748108](https://pubmed.ncbi.nlm.nih.gov/22748108) | The study reports quantitative pharmacokinetic parameters for ziconotide in dogs, including half-lives (0.14, 1.77, 2.47 hours) and concentration ratios, which are explicitly provided in the abstract. |
| `Swensen_2014.pdf` | Swensen AM et al., Characterization of the triazine, T4, a…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.10.037](https://doi.org/10.1016/j.ejphar.2014.10.037) | [25446431](https://www.ncbi.nlm.nih.gov/pubmed/25446431) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T06:18:52.010138+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbadie_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and mechanism of action of TROX-1, with ziconotide mentioned only as a background comparator, and no pharmacokinetic parameters for ziconotide are reported. |
| PD | Abbadie_2010 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of a new compound (TROX-1) and only mentions ziconotide qualitatively as a comparator without providing any exposure-response or dose-response data for ziconotide. |
| popPK | Antunes_2020 | irrelevant | 0 | 0 | The study evaluates the antinociceptive efficacy of a new spider-derived peptide using ziconotide only as a comparator, and explicitly states that pharmacokinetics were not determined. |
| popPK | Davran_2026 | irrelevant | 0 | 0 | The paper is a review of marine bioactive compounds and contains no data or parameters for the drug ziconotide. |
| PD | Davran_2026 | not_relevant | 0 | 0 | The paper is a general review of marine bioactive compounds and does not contain specific pharmacodynamic modeling or numeric exposure-response data for ziconotide. |
| popPK | Deer_2017 | irrelevant | 0 | 0 | The paper is a consensus guideline on intrathecal drug delivery safety and does not report quantitative pharmacokinetic parameters for ziconotide. |
| PD | Deer_2017 | not_relevant | 1 | 0 | The paper is a consensus guideline and literature review regarding intrathecal drug delivery safety, not a primary study reporting specific pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Finley_2010 | irrelevant | 0 | 0 | The paper is a mechanistic/drug discovery study on small-molecule calcium channel antagonists where ziconotide is used only as a reference compound, with no pharmacokinetic parameters reported. |
| PD | Finley_2010 | not_relevant | 0 | 0 | The paper focuses on the discovery of small-molecule Cav2.2 inhibitors using in vitro assays and does not report any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Fong_2025 | irrelevant | 0 | 0 | The study is an in silico modeling study of montelukast targeting T-type calcium channels and does not report pharmacokinetic parameters for ziconotide. |
| PD | Fong_2025 | not_relevant | 0 | 0 | The paper focuses on in silico docking and MCell simulations for montelukast targeting Cav3.1 channels; it does not report any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Hamadou_2026 | irrelevant | 0 | 0 | The paper is a review of bioactive peptide pharmacology where ziconotide is cited only as a clinical precedent/comparator, with no original PK data reported for ziconotide itself. |
| popPK | Hirasawa_2022 | irrelevant | 0 | 0 | The study is a PBPK modeling study in rats focusing on CSF flow dynamics and using sucrose as a marker, not a study of ziconotide's pharmacokinetics. |
| PD | Hirasawa_2022 | not_relevant | 0 | 0 | The paper focuses on a physiologically based pharmacokinetic (PBPK) model for CSF flow and does not report any pharmacodynamic (PD) or exposure-response analysis for ziconotide. |
| popPK | Hu_1999 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on analogues of ziconotide, reporting in vitro and in vivo efficacy (IC50, ED50) but no pharmacokinetic disposition parameters for ziconotide. |
| PD | Hu_1999 | not_relevant | 3 | 2 | The paper reports IC50 and ED50 values for a novel analogue (compound 11), not for ziconotide, and does not provide a concentration-effect curve or PK/PD model for ziconotide. |
| popPK | Jain_2000 | irrelevant | 0 | 0 | The text is a qualitative review of intrathecal ziconotide that discusses mechanisms and clinical approval without reporting quantitative pharmacokinetic parameters. |
| popPK | Karri_2021 | irrelevant | 1 | 0 | This is a narrative review of combination intrathecal drug therapy strategies and does not report original quantitative pharmacokinetic parameter values for ziconotide. |
| PD | Karri_2021 | not_relevant | 1 | 0 | The paper is a narrative review of combination intrathecal drug therapy strategies and does not report specific numeric PD parameters or exposure-response curves for ziconotide. |
| popPK | Klotz_2006 | irrelevant | 4 | 3 | This is a short review that provides a single qualitative clearance value for ziconotide in the CSF but lacks a compartmental population-PK model, volume of distribution, or detailed quantitative disposition parameters. |
| popPK | Kolosov_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of leconotide (a different drug) and morphine, not the pharmacokinetics of ziconotide. |
| popPK | Lin_2024 | irrelevant | 2 | 0 | This is a comprehensive review article summarizing the literature on ziconotide pharmacokinetics and does not present original quantitative parameter values in the provided evidence. |
| popPK | Luo_2015 | irrelevant | 0 | 0 | The paper focuses on the characterization of a new conotoxin (GeXIVA) and only mentions ziconotide as a structural comparator, providing no pharmacokinetic parameters for ziconotide. |
| PD | Luo_2015 | not_relevant | 0 | 0 | The paper focuses on the characterization of a new conotoxin (GeXIVA) and only mentions ziconotide as a structural comparison without providing any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | McDowell_2016 | irrelevant | 1 | 0 | This is a clinical review of dosing and administration strategies for ziconotide that lacks original pharmacokinetic studies and specific quantitative disposition parameters (CL, V, half-life). |
| popPK | Pope_2013 | irrelevant | 2 | 0 | This is a narrative review that discusses pharmacokinetics in general terms but does not present original quantitative disposition parameters or numeric values for ziconotide. |
| PD | Pope_2013 | not_relevant | 2 | 1 | The text is a qualitative review summary that mentions pharmacodynamics and the therapeutic window but does not provide specific numeric PD parameters or concentration-effect data. |
| popPK | Pope_2017 | irrelevant | 0 | 0 | The paper is a narrative review summarizing existing literature and does not report original quantitative pharmacokinetic parameter values for ziconotide. |
| popPK | Samii_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium accumulation following traumatic brain injury and does not report any pharmacokinetic parameters for ziconotide. |
| popPK | Schroeder_2004 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on small molecule mimics of omega-conotoxins and does not report pharmacokinetic parameters for ziconotide. |
| PD | Schroeder_2004 | not_relevant | 1 | 1 | The paper reports an IC50 for newly synthesized small molecule analogs, not for ziconotide, and does not provide a concentration-effect curve or population PD model for the drug of interest. |
| popPK | Swensen_2012 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study characterizing TROX-1, with ziconotide serving only as a comparator and no pharmacokinetic parameters reported. |
| PD | Swensen_2012 | not_relevant | 0 | 0 | The paper reports in vitro electrophysiology and IC50 values for TROX-1, not pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Swensen_2014 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| PD | Swensen_2014 | not_relevant | 0 | 0 | The paper characterizes a novel triazine compound (T4) and does not report any pharmacodynamic or exposure-response data for ziconotide. |
| popPK | Verweij_2000 | irrelevant | 0 | 0 | The study is a preclinical efficacy trial in rats focusing on mitochondrial function and dose-response, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Wang_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of antinociception and drug interactions in rats, reporting no quantitative pharmacokinetic parameters for ziconotide. |
| PD | Wang_2000 | not_relevant | 4 | 2 | The paper describes dose-dependent effects and shifts in dose-response curves but does not provide specific numeric PD parameters (e.g., ED50, Emax) or concentration-effect data in the provided text. |
| popPK | Williams_2008 | irrelevant | 0 | 0 | The paper is a review of safety and efficacy without original quantitative pharmacokinetic parameter values for ziconotide. |
| PD | Williams_2008 | not_relevant | 2 | 0 | The paper is a qualitative review that mentions a steep dose-response curve but does not provide numeric PD parameters or extractable concentration-effect data. |
| popPK | Yang_2017 | irrelevant | 0 | 0 | The paper studies a novel conotoxin (TsIIIA) and uses ziconotide only as a comparator in an analgesic assay, reporting no pharmacokinetic parameters for ziconotide. |
| PD | Yang_2017 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for a novel conotoxin (TsIIIA), not for ziconotide; ziconotide is only mentioned as a comparator in a qualitative statement. |
| popPK | Yaseen_2026 | irrelevant | 0 | 0 | This is a review article on peptide therapeutics that mentions ziconotide only as an example of a venom-derived peptide, providing no original pharmacokinetic data or quantitative parameters. |
| PD | Yaseen_2026 | not_relevant | 1 | 0 | The text is a general review of peptide therapeutics that mentions ziconotide only as an example of a venom-derived peptide, without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Zhou_2024 | irrelevant | 0 | 0 | The paper discusses the discovery of an EGFR inhibitor (CDDO-Me) for lung cancer and contains no data or mention of ziconotide pharmacokinetics. |
| PD | Zhou_2024 | not_relevant | 0 | 0 | The paper investigates CDDO-Me, not ziconotide. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
