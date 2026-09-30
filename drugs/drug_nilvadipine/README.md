<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nilvadipine&quot;}]"></div>

# nilvadipine

- **generic name:** nilvadipine
- **ATC codes:** `C08CA10`
- **DrugBank:** [DB06712](https://go.drugbank.com/drugs/DB06712) · **PubChem:** [CID 4494](https://pubchem.ncbi.nlm.nih.gov/compound/4494)
- **molar mass:** 385.3707 g/mol (C19H19N3O6) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Nilvadipine is a calcium channel blocker (CCB) for the treatment of hypertension.

**Indication.** For the management of vasospastic angina, chronic stable angina and hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 10:54 | 25:08 | 0/0/0 | 0/0/0 | 0/0/0 | 72,586/3,547 | ollama / qwen3.8:27b-mtp-q8_0 | 8 | 6/2 | 7/1 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nilvadipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2A6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2E1` substrate, `CYP3A4` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor), CACNA1S (inhibitor), CACNA2D1 (inhibitor), CACNA2D3 (inhibitor), CACNB2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Wu_1988.pdf` | Wu WH et al., Relationship between the pharmacokineti…, Drug metabolism and disposi… (1988) | popPK | 8 | not captured | [2898337](https://pubmed.ncbi.nlm.nih.gov/2898337) | The study reports quantitative PK parameters (half-life, bioavailability) for nilvadipine in dogs, but lacks specific values for clearance, volume, or absorption rate constants. |
| `Cheung_1988.pdf` | Cheung WK et al., Importance of oral dosing rate on the h…, Journal of clinical pharmac… (1988) | pd | 5 | [10.1002/j.1552-4604.1988.tb03121.x](https://doi.org/10.1002/j.1552-4604.1988.tb03121.x) | [3243913](https://www.ncbi.nlm.nih.gov/pubmed/3243913) | metadata signals extractable PD data (Emax) |
| `Ishibashi_1998.pdf` | Ishibashi H et al., Effect of nilvadipine on the voltage-de…, Brain research (1998) | pd | 4 | [10.1016/s0006-8993(98)01018-x](https://doi.org/10.1016/s0006-8993(98)01018-x) | [9824683](https://www.ncbi.nlm.nih.gov/pubmed/9824683) | metadata signals extractable PD data (IC50) |
| `Nomoto_1988.pdf` | Nomoto A et al., Smooth muscle cell migration induced by…, Atherosclerosis (1988) | pd | 4 | [10.1016/0021-9150(88)90083-4](https://doi.org/10.1016/0021-9150(88)90083-4) | [2850808](https://www.ncbi.nlm.nih.gov/pubmed/2850808) | metadata signals extractable PD data (IC50) |
| `Türkeş_2019.pdf` | Türkeş C et al., Anti-diabetic Properties of Calcium Cha…, Applied biochemistry and bi… (2019) | pd | 4 | [10.1007/s12010-019-03009-x](https://doi.org/10.1007/s12010-019-03009-x) | [30980289](https://www.ncbi.nlm.nih.gov/pubmed/30980289) | metadata signals extractable PD data (IC50) |
| `Türkeş_2021.pdf` | Türkeş C et al., Calcium channel blockers: molecular doc…, Journal of biomolecular str… (2021) | pd | 4 | [10.1080/07391102.2020.1736631](https://doi.org/10.1080/07391102.2020.1736631) | [32107977](https://www.ncbi.nlm.nih.gov/pubmed/32107977) | metadata signals extractable PD data (IC50) |
| `Türkeş_2022.pdf` | Türkeş C et al., Some calcium-channel blockers: kinetic…, Journal of biomolecular str… (2022) | pd | 4 | [10.1080/07391102.2020.1806927](https://doi.org/10.1080/07391102.2020.1806927) | [32783605](https://www.ncbi.nlm.nih.gov/pubmed/32783605) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-29T10:52:58.521494+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_1988 | irrelevant | 1 | 0 | The paper is a review of calcium antagonists that discusses nilvadipine qualitatively but does not report specific quantitative pharmacokinetic parameter values. |
| PD | Abernethy_1988 | not_relevant | 1 | 0 | The text is a review of pharmacokinetics and mentions that pharmacodynamic data have not been reported for the racemates, providing no numeric PD parameters or exposure-response relationships. |
| popPK | Berger_1992 | irrelevant | 2 | 0 | The abstract mentions pharmacokinetics were examined but provides no quantitative disposition parameters (CL, V, t1/2, etc.) for nilvadipine. |
| PD | Berger_1992 | not_relevant | 2 | 1 | The study reports mean blood pressure changes and PK parameters but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD parameters linking exposure to response. |
| popPK | Breithaupt-Grögler_2001 | irrelevant | 2 | 1 | Nilvadipine is a co-administered comparator in a drug interaction study focused on imidapril, and only relative bioequivalence ratios (AUC%) are reported, not absolute quantitative disposition parameters like clearance or volume. |
| PD | Breithaupt-Grögler_2001 | not_relevant | 2 | 1 | The study reports only qualitative additive pharmacodynamic effects and PK parameters (AUC, Cmax) without any concentration-effect modeling or numeric PD parameters (e.g., Emax, EC50) for nilvadipine. |
| popPK | Brogden_1995 | irrelevant | 0 | 0 | The provided text is a collection of errata and references, not the full text of the nilvadipine review, and contains no quantitative pharmacokinetic parameter values. |
| PD | Brogden_1995 | not_relevant | 0 | 0 | The provided text consists of a list of references and errata notes; it does not contain the main body of a study reporting pharmacodynamic data or numeric PD parameters for nilvadipine. |
| PGx | Brogden_1995 | not_relevant | 0 | 0 | The text consists of a list of references and errata notes regarding streptokinase, thrombolytic therapy, and a minor correction to a nilvadipine review, containing no pharmacogenomic data. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report any quantitative pharmacokinetic parameters for nilvadipine. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | The text is a narrative review of cardiovascular pharmacotherapy and does not contain specific data, models, or numeric parameters for nilvadipine. |
| popPK | Cheung_1988 | irrelevant | 0 | 0 | no_text gate: only 92 chars of text extracted (&lt; 400) |
| PD | Cheung_1988 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to assess PD relationships. |
| popPK | Hoffmann_1997 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure outcomes and adverse events, with no pharmacokinetic parameters or disposition data for nilvadipine. |
| popPK | Honerjäger_1992 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamics and qualitative comparisons, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nilvadipine. |
| PD | Honerjäger_1992 | not_relevant | 2 | 1 | The text is a qualitative summary comparing nilvadipine to nifedipine and mentions potency ratios, but it does not provide specific numeric PD parameters (like EC50, Emax) or an extractable concentration-effect curve. |
| popPK | Ikemura_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2J2 inhibition by antihypertensive drugs, not a pharmacokinetic study reporting disposition parameters for nilvadipine. |
| PD | Ikemura_2019 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki) for CYP2J2, not pharmacodynamic exposure-response or dose-response relationships for the drug's clinical effect. |
| popPK | Ishibashi_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of calcium channel inhibition in rat neurons, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| PGx | Kennelly_2012 | not_relevant | 2 | 5 | The paper reports a pharmacogenomic interaction on clinical cognitive outcomes (MMSE/EXIT25), not on pharmacokinetic or pharmacodynamic parameters of nilvadipine. |
| popPK | Lago_2022 | irrelevant | 0 | 0 | The paper is a review of schizophrenia drug targets and mentions nilvadipine only as a comparator in clinical trials, without reporting any pharmacokinetic parameters. |
| PD | Lago_2022 | not_relevant | 0 | 0 | The paper is a review on the druggable schizophrenia genome and does not report any pharmacodynamic or exposure-response data for nilvadipine. |
| PGx | Naritomi_2001 | not_relevant | 0 | 0 | The paper focuses on in vitro-in vivo extrapolation (IVIVE) for hepatic clearance prediction and does not investigate the impact of genetic variants or genotypes on pharmacokinetics. |
| PGx | Niwa_2004 | not_relevant | 0 | 0 | The study investigates the in vitro inhibition of CYP enzymes by nilvadipine to predict drug-drug interactions, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD of nilvadipine. |
| popPK | Nomoto_1987 | irrelevant | 0 | 0 | The study focuses on antiatherogenic activity and in-vitro mechanisms (IC50 values) rather than pharmacokinetic disposition parameters. |
| popPK | Nomoto_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of smooth muscle cell migration and does not report any pharmacokinetic parameters for nilvadipine. |
| popPK | Ohtsuka_1988 | irrelevant | 0 | 0 | The study investigates cardiovascular pharmacodynamics (hemodynamics and isolated organ responses) rather than pharmacokinetic disposition parameters. |
| popPK | Oyanagui_1991 | irrelevant | 0 | 0 | The study reports pharmacodynamic endpoints (edema, superoxide production) and potency metrics (ED30, IC50) rather than pharmacokinetic disposition parameters. |
| popPK | Ren_2022 | irrelevant | 0 | 0 | The paper is a review/tutorial on slow reversible binding PK/PD models and does not report pharmacokinetic parameters for nilvadipine. |
| PD | Ren_2022 | not_relevant | 4 | 4 | The paper is a review/tutorial on slow reversible binding models and does not report PD parameters for nilvadipine; it focuses on candesartan, noberastine, and other drugs. |
| popPK | Rosenthal_1994 | irrelevant | 2 | 1 | The paper is a review/overview that provides only qualitative descriptions and broad ranges (e.g., half-life 15-20 h, bioavailability 14-19%) without reporting specific quantitative compartmental PK parameters (CL, V, Q, ka) or population model estimates. |
| PD | Rosenthal_1994 | not_relevant | 2 | 1 | The text is a qualitative overview/review that mentions pharmacodynamic properties (e.g., vasodilatory effect magnitude, vascular/cardiac quotient) but does not provide a concentration-effect curve, dose-response data, or numeric PD parameters (Emax, EC50) for nilvadipine. |
| popPK | Saima_2002 | irrelevant | 2 | 0 | The study reports only AUC and pharmacodynamic effects, lacking the specific quantitative disposition parameters (CL, V, ka, half-life) required for population PK modeling. |
| PD | Saima_2002 | not_relevant | 2 | 1 | The study reports qualitative changes in blood pressure and PK parameters (AUC) due to drug interaction, but does not provide a concentration-effect curve or numeric PD parameters (e.g., EC50, Emax) for nilvadipine. |
| popPK | Shimada_1996 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content or pharmacokinetic data for nilvadipine. |
| PD | Shimada_1996 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any information regarding nilvadipine or pharmacodynamic parameters. |
| popPK | Sugawara_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects on lipid peroxidation, not a pharmacokinetic study, and reports no disposition parameters for nilvadipine. |
| PD | Sugawara_1996 | not_relevant | 0 | 0 | The text describes in vitro lipid peroxidation assays and lists nilvadipine as a reagent, but contains no pharmacokinetic or pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters. |
| popPK | Türkeş_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aldose reductase inhibition and does not report any pharmacokinetic parameters for nilvadipine. |
| popPK | Türkeş_2021 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PD | Türkeş_2021 | not_relevant | 0 | 0 | The paper focuses on molecular docking and inhibition of carbonic anhydrase by calcium channel blockers, not on pharmacodynamic exposure-response or dose-response relationships for nilvadipine. |
| popPK | Türkeş_2022 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Türkeş_2022 | not_relevant | 0 | 0 | The paper focuses on kinetic and in silico studies of calcium-channel blockers on paraoxonase-I, not on pharmacodynamic exposure-response relationships for nilvadipine in a clinical or physiological context. |
| popPK | Weir_1990 | irrelevant | 2 | 0 | The study reports clinical efficacy and blood pressure responses but does not provide quantitative pharmacokinetic parameters (CL, V, ka, etc.) for nilvadipine. |
| popPK | Worley_2015 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of perfluorooctanoic acid (PFOA) in rats, not nilvadipine. |
| PD | Worley_2015 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PBPK modeling) of perfluorooctanoic acid (PFOA) in rats, not nilvadipine, and does not report any pharmacodynamic or exposure-response relationships. |
| popPK | Yao_2000 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding nilvadipine pharmacokinetics. |
| PD | Yao_2000 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain the scientific content of the paper, nor any data regarding nilvadipine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
