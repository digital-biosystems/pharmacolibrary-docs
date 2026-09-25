<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;224_trimethylpentane&quot;}]"></div>

# 224_trimethylpentane

- **generic name:** not captured
- **ATC codes:** not captured
- **DrugBank:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-08 10:38 | 0:36 | 0/0/0 | 0/0/0 | 0/0/0 | 1,364/230 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/0 | 1/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `El-Masri_2009.pdf` | El-Masri HA et al., Development of an inhalation physiologi…, Inhalation toxicology (2009) | popPK | 9 | [10.3109/08958370903005751](https://doi.org/10.3109/08958370903005751) | [19922404](https://pubmed.ncbi.nlm.nih.gov/19922404) | The paper describes a PBPK model for 2,2,4-trimethylpentane in rats, but the specific numeric parameter values (partition coefficients, metabolic rates) are not present in the provided evidence text. |

<sub>queue written 2026-09-08T10:38:54.323938+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bednarek_1976 | irrelevant | 0 | 0 | The paper discusses dosimetry using an iso-octane-filled ionization chamber for 252Cf sources and does not report pharmacokinetic parameters for 224_trimethylpentane. |
| PD | Bednarek_1976 | not_relevant | 0 | 0 | The paper discusses radiation dosimetry using an ionization chamber and does not report any pharmacodynamic or exposure-response relationships for 224_trimethylpentane. |
| popPK | Boyes_2010 | irrelevant | 2 | 0 | The study focuses on neurotoxicity (VEPs and behavior) and only mentions a PBPK model to estimate brain concentrations, without reporting quantitative PK parameters like clearance or volume. |
| popPK | Charbonneau_1987 | irrelevant | 2 | 0 | The study reports tissue concentrations and urinary excretion percentages for a toxicological/metabolic study, but does not provide quantitative compartmental PK parameters (CL, V, ka) or a population PK model. |
| popPK | Ding_2021 | irrelevant | 0 | 0 | The paper describes oil/water separation membranes and does not involve the drug 224_trimethylpentane or any pharmacokinetic parameters. |
| popPK | El-Masri_2009 | relevant | 9 | 0 | The paper describes a PBPK model for 2,2,4-trimethylpentane in rats, but the specific numeric parameter values (partition coefficients, metabolic rates) are not present in the provided evidence text. |
| popPK | Guirguis_2001 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of celecoxib, not 224_trimethylpentane. |
| popPK | Hernandez-Muñoz_2001 | irrelevant | 0 | 0 | The paper studies food aroma partitioning in packaging materials and does not involve the drug 224_trimethylpentane or pharmacokinetic parameters. |
| popPK | Hong_2015 | irrelevant | 0 | 0 | The paper investigates the thermal stability of an enzyme (lipase) in reverse micelles and does not report pharmacokinetic parameters for 224_trimethylpentane. |
| popPK | Jamali_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of etodolac, not 224_trimethylpentane. |
| popPK | Jia_2002 | irrelevant | 0 | 0 | The paper describes the preparation of enzyme-carrying nanofibers for biocatalysis and does not involve the drug 224_trimethylpentane or any pharmacokinetic parameters. |
| popPK | Matte_2014 | irrelevant | 0 | 0 | The paper describes the immobilization and characterization of a lipase enzyme for biocatalysis, not the pharmacokinetics of 224_trimethylpentane. |
| popPK | Morales_2012 | irrelevant | 0 | 0 | The paper studies the chemical degradation of carbofuran derivatives in microemulsions and does not involve the drug 224_trimethylpentane or pharmacokinetic parameters. |
| popPK | Murty_2004 | irrelevant | 0 | 0 | The paper studies enzymatic hydrolysis kinetics in isooctane (2,2,4-trimethylpentane) as a solvent, not the pharmacokinetics of the drug 224_trimethylpentane. |
| popPK | Park_2013 | irrelevant | 0 | 0 | The paper studies the thermal deactivation kinetics of an enzyme (lipase) and does not involve the drug 224_trimethylpentane or any pharmacokinetic parameters. |
| popPK | Rajendran_2017 | irrelevant | 0 | 0 | The paper studies the biodegradation of 4-tert-octylphenol by yeast, which is unrelated to the pharmacokinetics of 224_trimethylpentane. |
| popPK | Schothorst_2005 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting trichothecenes in food samples and does not involve the drug 224_trimethylpentane or pharmacokinetic parameters. |
| PD | Schothorst_2005 | not_relevant | 0 | 0 | The paper describes an analytical method for detecting mycotoxins in food samples and reports dietary intake levels, but it does not contain any pharmacokinetic or pharmacodynamic data, exposure-response modeling, or numeric PD parameters for 224_trimethylpentane or any other drug. |
| popPK | Sebastião_1993 | irrelevant | 0 | 0 | The paper describes enzyme kinetics and stability in a chemical synthesis context, not pharmacokinetics of 224_trimethylpentane. |
| popPK | Setti_1995 | irrelevant | 0 | 0 | The paper studies peroxidase enzyme activity in reversed micelles and does not involve the drug 224_trimethylpentane or pharmacokinetic parameters. |
| popPK | Talukder_2003 | irrelevant | 0 | 0 | The paper studies enzyme kinetics in reverse micelles and does not involve the drug 224_trimethylpentane or pharmacokinetic parameters. |
| popPK | Talukder_2007 | irrelevant | 0 | 0 | The paper studies the thermostability of a lipase enzyme in reverse micelles and does not involve the drug 224_trimethylpentane or pharmacokinetic parameters. |
| popPK | Talukder_2015 | irrelevant | 0 | 0 | The paper is a study on enzyme stabilization (lipase) and does not involve the drug 224_trimethylpentane or any pharmacokinetic parameters. |
| popPK | Teng_2003 | irrelevant | 0 | 0 | The study focuses on flurbiprofen pharmacokinetics, and 2,2,4-trimethylpentane is used only as an extraction solvent, not as the subject drug. |
| popPK | Triantafyllou_1993 | irrelevant | 0 | 0 | The paper is a study on enzyme kinetics in bio-organic synthesis using 2,2,4-trimethylpentane as a solvent, not a pharmacokinetic study of the drug. |
| popPK | Yang_1992 | irrelevant | 0 | 0 | The paper describes an enzymatic reaction in organic solvents and does not involve the drug 224_trimethylpentane or pharmacokinetic parameters. |
| popPK | Zhang_2006 | irrelevant | 0 | 0 | The paper studies the enzymatic activity of lignin peroxidase in reverse micelles and does not involve the drug 224_trimethylpentane or any pharmacokinetic parameters. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The paper concerns the safety evaluation of zinc oxide nanoparticles for food contact materials and does not involve the drug 224_trimethylpentane or any pharmacokinetic parameters. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The paper is a safety assessment of zinc oxide nanoparticles in food contact materials and does not contain any pharmacodynamic or exposure-response data for 224_trimethylpentane. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
