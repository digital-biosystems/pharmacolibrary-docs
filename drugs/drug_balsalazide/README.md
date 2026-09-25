<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;balsalazide&quot;}]"></div>

# balsalazide

- **generic name:** balsalazide
- **ATC codes:** `A07EC04`
- **DrugBank:** [DB01014](https://go.drugbank.com/drugs/DB01014)
- **groups:** approved

## About

**Description.** Balsalazide is an anti-inflammatory drug used in the treatment of Inflammatory Bowel Disease. It is sold under the name "Colazal" in the US and "Colazide" in the UK.

The chemical name is (E)-5-[[-4-(2-carboxyethyl) aminocarbonyl] phenyl]azo] -2-hydroxybenzoic acid. It is usually administered as the disodium salt.

Balsalazide works by deliverying mesalazine to the large intestine to act directly on ulcerative colitis. Mesalazine is also known as 5-aminosalicylic acid, or 5-ASA.

**Indication.** For the treatment of mildly to moderately active ulcerative colitis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 04:28 | 4:27 | 0/0/0 | 0/0/0 | 0/0/0 | 69,213/3,353 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=balsalazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>“…lated metabolites have been identified in plasma, urine and feces. Following single-dose a…”</sub> | prose |
| excretion | kidney | <sub>“…ir N-acetylated metabolites have been identified in plasma, urine and feces. Following sin…”</sub> | prose |

<sub>Actors without a tissue in the table: ALOX5 (inhibitor), PPARG (target), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 33 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Green_1992.pdf` | Green JR et al., Short report: comparison of two doses o…, Alimentary pharmacology & t… (1992) | pd | 4 | [10.1111/j.1365-2036.1992.tb00578.x](https://doi.org/10.1111/j.1365-2036.1992.tb00578.x) | [1420754](https://www.ncbi.nlm.nih.gov/pubmed/1420754) | metadata signals extractable PD data (sigmoid) |
| `Levine_2002.pdf` | Levine DS et al., A randomized, double blind, dose-respon…, The American journal of gas… (2002) | pd | 4 | [10.1111/j.1572-0241.2002.05781.x](https://doi.org/10.1111/j.1572-0241.2002.05781.x) | [12094857](https://www.ncbi.nlm.nih.gov/pubmed/12094857) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-09-22T04:27:09.135040+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Feagan_2012 | irrelevant | 0 | 0 | This is a clinical efficacy review of 5-ASA preparations for ulcerative colitis maintenance and does not report any pharmacokinetic parameters for balsalazide. |
| PD | Feagan_2012 | not_relevant | 2 | 1 | The paper is a systematic review reporting clinical dose-response trends (relative risks for relapse at different doses) but does not provide pharmacokinetic data, concentration-effect curves, or formal PD parameters (Emax, EC50) for balsalazide. |
| popPK | Glas_2022 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on Sirt5 inhibitors where balsalazide serves only as a reference compound, and no quantitative pharmacokinetic parameters for balsalazide are reported. |
| PD | Glas_2022 | not_relevant | 1 | 0 | The paper reports in vitro IC50 values for Sirt5 inhibition, which is a pharmacological potency metric, but does not report a pharmacodynamic (exposure-response or dose-response) relationship for the drug in a biological system with numeric PD parameters like Emax or EC50 in the context of PK/PD modeling. |
| popPK | Green_1992 | irrelevant | 0 | 0 | no_text gate: only 114 chars of text extracted (&lt; 400) |
| PD | Green_1992 | not_relevant | 0 | 0 | The text describes a clinical trial comparing two doses for maintenance of remission but does not report any pharmacokinetic data, concentration-effect relationships, or numeric pharmacodynamic parameters. |
| popPK | Hanauer_2006 | irrelevant | 0 | 0 | The paper is a clinical review of aminosalicylates for ulcerative colitis and contains no pharmacokinetic data or quantitative disposition parameters for balsalazide. |
| PD | Hanauer_2006 | not_relevant | 2 | 0 | The text is a qualitative review discussing general dose-response trends and efficacy thresholds for aminosalicylates, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model for balsalazide. |
| popPK | Kedia_2007 | irrelevant | 0 | 0 | The paper is a review of mesalamine formulations for ulcerative colitis and does not report any quantitative pharmacokinetic parameters for balsalazide. |
| PD | Kedia_2007 | not_relevant | 0 | 0 | The text is a review/overview of MMX mesalamine and mentions balsalazide only as a related drug in the context of delivery systems, without reporting any specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters. |
| popPK | Levine_2002 | irrelevant | 0 | 0 | no_text gate: only 186 chars of text extracted (&lt; 400) |
| popPK | Lowry_2001 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of azathioprine/6-mercaptopurine (specifically 6-thioguanine nucleotides) in the presence of balsalazide, rather than reporting disposition parameters for balsalazide itself. |
| PD | Lowry_2001 | not_relevant | 2 | 1 | The paper reports qualitative changes in pharmacokinetics (6-TGN levels) and clinical outcomes (leucopenia frequency) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for balsalazide. |
| popPK | Muijsers_2002 | irrelevant | 0 | 0 | The paper is a therapeutic review of balsalazide for ulcerative colitis and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Muijsers_2002 | not_relevant | 1 | 0 | The text is a qualitative review of therapeutic efficacy and dosing comparisons without reporting any numeric pharmacodynamic parameters (e.g., Emax, EC50) or concentration-effect curves. |
| popPK | Murray_2020 | irrelevant | 0 | 0 | This is a Cochrane review of clinical efficacy for 5-ASA formulations, not a pharmacokinetic study, and contains no quantitative PK parameters for balsalazide. |
| PD | Murray_2020 | not_relevant | 2 | 0 | The paper is a Cochrane review that mentions a qualitative dose-response trend for 5-ASA but does not provide specific numeric PD parameters (e.g., Emax, EC50) or an extractable concentration-effect curve for balsalazide. |
| popPK | Nugent_2001 | irrelevant | 0 | 0 | The paper is a review of intestinal luminal pH and its implications for drug therapy, containing no original pharmacokinetic data or quantitative disposition parameters for balsalazide. |
| popPK | Prakash_1999 | irrelevant | 0 | 0 | The paper is a clinical review of mesalazine efficacy and does not report any pharmacokinetic parameters for balsalazide. |
| PD | Prakash_1999 | not_relevant | 1 | 0 | The text is a clinical review summarizing efficacy outcomes and dose comparisons without providing any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50). |
| popPK | Quiros_2009 | irrelevant | 0 | 0 | no_text gate: only 168 chars of text extracted (&lt; 400) |
| PGx | Russell_2024 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (balsalazide inhibiting TPMT) but does not report a pharmacogenomic effect (gene variant) on the PK/PD of balsalazide. |
| popPK | Sandborn_2003 | irrelevant | 2 | 1 | This is a systematic review reporting only urinary and faecal excretion percentages, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population PK modeling. |
| PD | Sandborn_2003 | not_relevant | 1 | 0 | The paper is a systematic review of pharmacokinetic profiles (excretion data) and does not report any pharmacodynamic or exposure-response models or numeric PD parameters. |
| popPK | Sandborn_2004 | irrelevant | 0 | 0 | no_text gate: only 191 chars of text extracted (&lt; 400) |
| popPK | Sandborn_2006 | irrelevant | 0 | 0 | The paper is a clinical review of efficacy and formulation for ulcerative colitis treatments and does not report any quantitative pharmacokinetic parameters for balsalazide. |
| PD | Sandborn_2006 | not_relevant | 1 | 0 | The text is a review summarizing general dose-response findings for mesalamine and related drugs but does not provide specific numeric PD parameters or extractable concentration-effect curves for balsalazide. |
| popPK | Schroeder_2002 | irrelevant | 0 | 0 | The paper is a clinical review of mesalazine and its prodrugs for ulcerative colitis treatment, containing no pharmacokinetic data or quantitative disposition parameters for balsalazide. |
| PD | Schroeder_2002 | not_relevant | 1 | 0 | The text is a qualitative review of mesalazine and its prodrugs that mentions a dose-response benefit but provides no numeric PD parameters, concentration-effect data, or specific PK/PD model fits. |
| PGx | Sim_2014 | not_relevant | 0 | 0 | The paper is a review of NAT enzymes and mentions balsalazide only in the context of azoreductase metabolism, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | This is a clinical efficacy review of 5-ASA preparations for ulcerative colitis maintenance, not a pharmacokinetic study, and it reports no quantitative PK parameters for balsalazide. |
| PD | Wang_2016 | not_relevant | 2 | 1 | The paper is a systematic review reporting clinical dose-response trends (relapse rates at different doses) but does not provide pharmacokinetic data, concentration-effect curves, or formal PD parameters (Emax, EC50) for balsalazide. |
| popPK | Wirawan_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on balsalazide-derived sirtuin 5 inhibitors, reporting in-vitro IC50 values but no pharmacokinetic parameters. |
| PD | Wirawan_2025 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition (IC50) of Sirtuin 5 by balsalazide derivatives, which is a pharmacological potency assay, not a pharmacodynamic (exposure-response) or dose-response relationship for the drug balsalazide in a biological system. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for IBD and contains no specific data, models, or numeric parameters for balsalazide. |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| PD | unknown_2021 | not_relevant | 0 | 0 | The paper discusses Ozanimod, not balsalazide, and does not report any pharmacodynamic or exposure-response data for balsalazide. |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 36 chars of text extracted (&lt; 400) |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title for a review article on drugs for IBD and contains no specific data, models, or numeric parameters for balsalazide. |
| popPK | unknown_2023_2 | irrelevant | 0 | 0 | no_text gate: only 57 chars of text extracted (&lt; 400) |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The text is a title of a table listing drugs for IBD and contains no data, analysis, or numeric parameters regarding balsalazide pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
