<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D01A&quot;,&quot;href&quot;:&quot;atc/D01A.md&quot;},{&quot;label&quot;:&quot;terbinafine&quot;}]"></div>

# terbinafine

- **generic name:** terbinafine
- **ATC codes:** `D01AE15`, `D01BA02`
- **DrugBank:** [DB00857](https://go.drugbank.com/drugs/DB00857) · **PubChem:** [CID 1549008](https://pubchem.ncbi.nlm.nih.gov/compound/1549008)
- **molar mass:** 291.4299 g/mol (C21H25N) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Terbinafine is an antifungal medicine used to treat fungal skin and nail infections such as ringworm, athlete's foot, and nail fungus. It is widely used, both as a topical and an oral treatment, and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415259](https://www.wikidata.org/wiki/Q415259) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:52 | 12:21 | 0/0/0 | 0/0/0 | 0/0/0 | 215,113/5,334 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 4/5 | 17/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=terbinafine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` substrate, `CYP2C19` substrate, `CYP2C8` substrate, `CYP2C9` substrate, `CYP2D6` inhibitor, `CYP3A4` inducer/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGS1 (substrate), SQLE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 249 matched, 132 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kovarik_1992.pdf` | Kovarik JM et al., Dose-proportional pharmacokinetics of t…, The British journal of derm… (1992) | popPK | 10 | [10.1111/j.1365-2133.1992.tb00002.x](https://doi.org/10.1111/j.1365-2133.1992.tb00002.x) | [1543677](https://pubmed.ncbi.nlm.nih.gov/1543677) | The study reports quantitative PK parameters for terbinafine in humans, but the specific numeric values are not present in the provided abstract text. |
| `Wang_2012.pdf` | Wang A et al., Single dose pharmacokinetics of terbina…, Journal of feline medicine… (2012) | popPK | 10 | [10.1177/1098612X12442280](https://doi.org/10.1177/1098612X12442280) | [22403416](https://pubmed.ncbi.nlm.nih.gov/22403416) | The study reports quantitative non-compartmental pharmacokinetic parameters (half-life, AUC, Vd, bioavailability) for terbinafine in cats, with all numeric values explicitly provided in the text. |
| `Nedelman_1996.pdf` | Nedelman JR et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (1996) | popPK | 9 | [10.1002/j.1552-4604.1996.tb05032.x](https://doi.org/10.1002/j.1552-4604.1996.tb05032.x) | [8739024](https://pubmed.ncbi.nlm.nih.gov/8739024) | The study reports a population PK model for terbinafine in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only a qualitative half-life estimate. |
| `Nedelman_1997.pdf` | Nedelman J et al., The effect of food on the pharmacokinet…, Biopharmaceutics & drug dis… (1997) | popPK | 9 | [10.1002/(sici)1099-081x(199703)18:2&lt;127::aid-bdd6&gt;3.0.co;2-8](https://doi.org/10.1002/(sici)1099-081x(199703)18:2<127::aid-bdd6>3.0.co;2-8) | [9099449](https://pubmed.ncbi.nlm.nih.gov/9099449) | The study reports a three-compartment model and clearance estimates for terbinafine, but the specific numeric parameter values are not present in the provided text. |

<sub>queue written 2026-10-07T13:48:19.398563+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abdel-Rahman_1999 | not_relevant | 0 | 0 | The study investigates terbinafine as a CYP2D6 inhibitor affecting the PK of a probe drug (dextromethorphan), not how a gene variant affects the PK/PD of terbinafine itself. |
| PGx | Abdel-Rahman_1999_2 | not_relevant | 0 | 0 | The paper reports in vitro CYP2D6 inhibition by terbinafine, not a pharmacogenomic effect of a gene variant on terbinafine's PK or PD parameters. |
| popPK | Almeida_2004 | irrelevant | 4 | 0 | The study reports only non-compartmental bioequivalence metrics (AUC, Cmax) and confidence intervals, lacking the specific quantitative disposition parameters (CL, V, ka, t1/2) required for population PK modeling. |
| PGx | Barnette_2019 | not_relevant | 2 | 0 | The paper identifies CYP2C9 and CYP3A4 as major metabolic enzymes for terbinafine using in vitro recombinant systems and modeling, but it does not report in vivo pharmacogenomic data (e.g., genotype-specific PK/PD changes) or fitted effect sizes for specific variants. |
| PGx | Castberg_2005 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (terbinafine inhibiting CYP2D6 affecting amitriptyline) in a patient with normal CYP2D6 capacity, not a pharmacogenomic effect of a gene variant on terbinafine's PK/PD. |
| PGx | Davis_2019 | not_relevant | 0 | 0 | The paper characterizes the enzymes (CYP2C19/3A4) responsible for terbinafine metabolism but does not report pharmacogenomic data linking specific gene variants or genotypes to changes in PK/PD parameters. |
| PGx | Debruyne_2001 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics of antifungals in nails and mentions CYP inhibition but does not report any gene variant or genotype effects on PK/PD parameters. |
| PGx | Dong_2019 | not_relevant | 0 | 0 | The study characterizes CYP2D6 variants using terbinafine as an inhibitor probe, but does not report the pharmacokinetic or pharmacodynamic parameters of terbinafine itself. |
| PGx | Dong_2022 | not_relevant | 2 | 5 | The paper reports in vitro enzyme kinetics and inhibition data for CYP2D6 variants using terbinafine as a probe inhibitor, but does not report in vivo pharmacokinetic or pharmacodynamic parameters of terbinafine itself. |
| PGx | Dybro_2016 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between simvastatin and itraconazole, not a pharmacogenomic effect on terbinafine. |
| PGx | Dürrbeck_2016 | not_relevant | 2 | 0 | The paper discusses drug-drug interactions and mentions CYP2D6 metabolism in the context of tamoxifen efficacy, but it does not report specific pharmacogenomic effects on terbinafine's PK or PD parameters. |
| PGx | Elewski_2005 | not_relevant | 0 | 0 | The paper is a general review of safety and pharmacokinetics of oral antifungals and does not report any pharmacogenomic effects (gene variants) on terbinafine PK/PD parameters. |
| PGx | Hosomi_2011 | not_relevant | 0 | 0 | The paper describes a general cell-based assay for CYP3A4-mediated cytotoxicity and mentions terbinafine as one of several drugs tested, but it does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of terbinafine. |
| PGx | Hynninen_2008 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (terbinafine affecting venlafaxine PK) in a general population, not a pharmacogenomic effect of a gene variant on terbinafine's PK/PD. |
| PGx | Katz_1999 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions and general safety profiles of antifungals but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Kovarik_1992 | relevant | 10 | 0 | The study reports quantitative PK parameters for terbinafine in humans, but the specific numeric values are not present in the provided abstract text. |
| PGx | Kumar_2021 | not_relevant | 0 | 0 | The paper reports fungal genome sequences and drug resistance mechanisms (erg1 mutation), not human pharmacogenomics affecting terbinafine PK/PD. |
| PGx | Kämmerer_2025 | not_relevant | 0 | 0 | The paper is a clinical cohort study on Trichophyton mentagrophytes type VII infections and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of terbinafine. |
| PGx | Madani_2002 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (terbinafine inhibiting CYP2D6) in a fixed genotype group, rather than reporting how a genetic variant alters the PK/PD of terbinafine itself. |
| PGx | Maideen_2021 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions of beta-blockers and mentions terbinafine only as a CYP2D6 inhibitor affecting metoprolol, without reporting any pharmacogenomic effects on terbinafine's PK/PD. |
| PGx | McGrane_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (terbinafine inhibiting aripiprazole metabolism) and mentions patient genotypes, but it does not report how a gene variant changes the PK/PD of terbinafine. |
| PGx | Meletiadis_2008 | not_relevant | 2 | 0 | The paper is a review discussing candidate genes for adverse drug reactions (toxicity) rather than reporting specific pharmacokinetic or pharmacodynamic parameter changes for terbinafine. |
| PGx | Mikami_2017 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (terbinafine inhibiting CYP2D6 metabolism of TCAs) and does not report pharmacogenomic effects (gene variants) on terbinafine's PK or PD parameters. |
| PGx | Molden_2005 | not_relevant | 0 | 0 | The paper analyzes the frequency of co-prescribing drug interactions (terbinafine as a CYP2D6 inhibitor) and does not report pharmacogenomic effects on terbinafine's PK or PD parameters. |
| PGx | Nagao_2001 | not_relevant | 0 | 0 | The paper reports a clinical case of chromomycosis treated with terbinafine, focusing on fungal MIC and dose adjustment, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Nedelman_1996 | relevant | 9 | 2 | The study reports a population PK model for terbinafine in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only a qualitative half-life estimate. |
| popPK | Nedelman_1997 | relevant | 9 | 2 | The study reports a three-compartment model and clearance estimates for terbinafine, but the specific numeric parameter values are not present in the provided text. |
| PGx | Noguchi_2022 | not_relevant | 0 | 0 | The paper reports clinical treatment outcomes for phaeohyphomycosis and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of terbinafine. |
| PGx | Paramasivan_2021 | not_relevant | 0 | 0 | The paper studies adaptive evolution in yeast for squalene production, not human pharmacogenomics or PK/PD parameters of terbinafine. |
| PGx | Park_2012 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (terbinafine inhibiting CYP2D6 affecting perphenazine) in a single case, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of terbinafine itself. |
| PGx | Saarikoski_2015 | not_relevant | 2 | 10 | The study investigates a drug-drug interaction (terbinafine inhibiting CYP2D6) rather than a pharmacogenomic effect of a specific gene variant on terbinafine's own PK/PD parameters. |
| PGx | Sheikh_2014 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (terbinafine inhibiting CYP2D6 affecting perhexiline PK), not a pharmacogenomic effect of a gene variant on terbinafine's PK/PD. |
| PGx | Singh_2021 | not_relevant | 0 | 0 | The paper evaluates a diagnostic PCR assay for detecting fungal resistance mutations (SQLE) in Trichophyton species, not human pharmacogenomics or PK/PD parameters. |
| PGx | Sinz_2006 | not_relevant | 0 | 0 | The paper reports that terbinafine is a transactivator of hPXR (a drug-drug interaction mechanism), but it does not report a pharmacogenomic effect (gene variant/genotype) on terbinafine's PK or PD parameters. |
| PGx | Tavares_2020 | not_relevant | 0 | 0 | The study investigates toxicity in microphysiological systems and does not report pharmacogenomic effects on PK or PD parameters. |
| PGx | Tod_2011 | not_relevant | 0 | 0 | The paper focuses on CYP2D6-mediated drug-drug interactions and predictive modeling, not on pharmacogenomic effects (gene variants) on terbinafine PK/PD. |
| PGx | Tonani_2018 | not_relevant | 0 | 0 | The paper investigates fungal genotypes and antifungal susceptibility, not human pharmacogenomics or PK/PD parameters of terbinafine. |
| PGx | Trépanier_1998 | not_relevant | 0 | 0 | The study investigates the effect of terbinafine on the activity of other enzymes (CYP1A2, NAT-2, XO) using caffeine as a probe, rather than how genetic variants affect the PK/PD of terbinafine itself. |
| popPK | Umemura_2026 | irrelevant | 2 | 0 | This is a case report measuring tissue and fluid concentrations (partition coefficients) rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for terbinafine. |
| PGx | Van_2002 | not_relevant | 2 | 5 | The paper reports a drug-drug interaction (terbinafine inhibiting nortriptyline metabolism) and mentions CYP2D6 genotyping to rule out genetic influence, but does not report a pharmacogenomic effect on terbinafine's PK/PD parameters. |
| PGx | Varhe_1996 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (terbinafine vs. triazolam) in a general population, not a pharmacogenomic effect based on gene variants. |
| PGx | Venkatakrishnan_2000 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions (CYP inhibition) of antifungals, not pharmacogenomic effects of genetic variants on terbinafine PK/PD. |
| PGx | Vickers_1999 | not_relevant | 0 | 0 | The paper characterizes the metabolic pathways and drug-drug interaction potential of terbinafine using in vitro systems but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Yasui-Furukori_2007 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (terbinafine inhibiting paroxetine metabolism) in a general population, not a pharmacogenomic effect of a gene variant on terbinafine's PK/PD. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of RSV entry and the antiviral effect of terbinafine as a cholesterol-depleting agent, but does not report any pharmacogenomic effects on the PK or PD parameters of terbinafine. |
| PGx | Štětkářová_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (terbinafine inducing warfarin metabolism) in a single case, but does not report a pharmacogenomic effect (gene variant/genotype) on the PK or PD of terbinafine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
