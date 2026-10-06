<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;tienilic acid&quot;}]"></div>

# tienilic acid

- **generic name:** tienilic acid
- **ATC codes:** `C03CC02`
- **DrugBank:** [DB04831](https://go.drugbank.com/drugs/DB04831) · **PubChem:** [CID 38409](https://pubchem.ncbi.nlm.nih.gov/compound/38409)
- **molar mass:** 331.171 g/mol (C13H8Cl2O4S) — DrugBank
- **groups:** approved, withdrawn

## About

Tienilic acid (ticrynafen) is a diuretic that was used to treat high blood pressure and fluid retention, and also promotes uric acid excretion. It was withdrawn from the market after approval because of safety concerns, so it is no longer used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7801054](https://www.wikidata.org/wiki/Q7801054) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 19:40 | 3:28 | 0/0/0 | 0/0/0 | 0/0/0 | 52,221/3,655 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tienilic_acid) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C9` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 94 matched, 93 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kerremans_1982.pdf` | Kerremans AL et al., Pharmacokinetic and pharmacodynamic stu…, European journal of clinica… (1982) | popPK | 9 | [10.1007/BF00609624](https://doi.org/10.1007/BF00609624) | [7128663](https://pubmed.ncbi.nlm.nih.gov/7128663) | The study reports pharmacokinetic parameters for tienilic acid in humans, but the specific numeric values are not present in the provided abstract text. |
| `Kahma_2021.pdf` | Kahma H et al., An automated cocktail method for in vit…, European journal of pharmac… (2021) | pd | 4 | [10.1016/j.ejps.2021.105810](https://doi.org/10.1016/j.ejps.2021.105810) | [33753217](https://www.ncbi.nlm.nih.gov/pubmed/33753217) | metadata signals extractable PD data (IC50) |
| `Perloff_2009.pdf` | Perloff ES et al., Validation of cytochrome P450 time-depe…, Xenobiotica; the fate of fo… (2009) | pd | 4 | [10.1080/00498250802638155](https://doi.org/10.1080/00498250802638155) | [19255936](https://www.ncbi.nlm.nih.gov/pubmed/19255936) | metadata signals extractable PD data (IC50) |
| `Roch-Ramel_1997.pdf` | Roch-Ramel F et al., Effects of uricosuric and antiuricosuri…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9023298](https://www.ncbi.nlm.nih.gov/pubmed/9023298) | metadata signals extractable PD data (IC50) |
| `Flora_2012.pdf` | Flora DR et al., Development of an in vitro system with…, Drug metabolism and disposi… (2012) | pgx | 8 | [10.1124/dmd.111.043372](https://doi.org/10.1124/dmd.111.043372) | [22205778](https://www.ncbi.nlm.nih.gov/pubmed/22205778) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Doran_2022.pdf` | Doran AC et al., Defining the Selectivity of Chemical In…, Drug metabolism and disposi… (2022) | pgx | 7 | [10.1124/dmd.122.000884](https://doi.org/10.1124/dmd.122.000884) | [35777846](https://www.ncbi.nlm.nih.gov/pubmed/35777846) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Fujita_2025.pdf` | Fujita Y et al., Quantitative prediction of CYP2C9-media…, Drug metabolism and disposi… (2025) | pgx | 7 | [10.1016/j.dmd.2025.100185](https://doi.org/10.1016/j.dmd.2025.100185) | [41218298](https://www.ncbi.nlm.nih.gov/pubmed/41218298) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |
| `Smith_2021.pdf` | Smith S et al., Reaction Phenotyping of Low-Turnover Co…, Drug metabolism and disposi… (2021) | pgx | 7 | [10.1124/dmd.121.000601](https://doi.org/10.1124/dmd.121.000601) | [34407991](https://www.ncbi.nlm.nih.gov/pubmed/34407991) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Uehara_2022.pdf` | Uehara S et al., Cytochrome P450s in chimeric mice with…, Advances in pharmacology (S… (2022) | pgx | 7 | [10.1016/bs.apha.2022.05.004](https://doi.org/10.1016/bs.apha.2022.05.004) | [35953159](https://www.ncbi.nlm.nih.gov/pubmed/35953159) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Hamitouche_2006.pdf` | Hamitouche S et al., Ethanol oxidation into acetaldehyde by…, Toxicology letters (2006) | pgx | 5 | [10.1016/j.toxlet.2006.09.011](https://doi.org/10.1016/j.toxlet.2006.09.011) | [17084997](https://www.ncbi.nlm.nih.gov/pubmed/17084997) | metadata signals extractable PGX data (CYP2C) |

<sub>queue written 2026-10-06T19:39:02.050866+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Doran_2022 | irrelevant | 0 | 0 | no_text gate: only 184 chars of text extracted (&lt; 400) |
| PD | Doran_2022 | not_relevant | 0 | 0 | The paper focuses on CYP450 inhibitor selectivity and curve-fitting methodology, not on the pharmacodynamic or exposure-response relationship of tienilic acid. |
| PGx | Doran_2022 | not_relevant | 0 | 0 | The paper focuses on CYP450 inhibitor selectivity and curve-fitting methods, not on pharmacogenomic effects on tienilic acid PK/PD. |
| popPK | Dubb_1979 | irrelevant | 4 | 2 | The study reports only peak plasma concentrations and urinary recovery percentages, lacking quantitative compartmental parameters (CL, V, ka) required for population PK modeling. |
| popPK | Eason_1990 | irrelevant | 1 | 0 | The paper is a review discussing the importance of PK studies and mentions tienilic acid only as an example of a drug requiring specific clinical studies, without providing any quantitative PK parameter values. |
| popPK | Eisalo_1982 | irrelevant | 0 | 0 | The study reports clinical efficacy (uricosuric effect) and safety data, but contains no pharmacokinetic parameters (CL, V, t1/2, etc.) for tienilic acid. |
| popPK | Flora_2012 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PGx | Flora_2012 | not_relevant | 0 | 0 | The paper focuses on CYP2C9 phenotyping using a mechanism-based inactivator and does not report pharmacokinetic or pharmacodynamic parameters for tienilic acid. |
| popPK | Frohlich_1979 | irrelevant | 0 | 0 | The paper reports clinical efficacy and renal physiological effects (blood pressure, creatinine clearance) but does not report pharmacokinetic parameters (CL, V, t1/2) for tienilic acid. |
| popPK | Fujita_2025 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PGx | Fujita_2025 | not_relevant | 0 | 0 | The paper focuses on CYP2C9-mediated drug disposition in humanized mice and does not mention tienilic acid. |
| popPK | Furrer_1978 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy (blood pressure, uric acid levels) of tienilic acid, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume of distribution. |
| PGx | Hamitouche_2006 | not_relevant | 0 | 0 | The paper uses tienilic acid as a mechanism-based inhibitor to study ethanol metabolism, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Hu_2010 | not_relevant | 0 | 0 | The paper discusses the metabolic activation of a novel anti-inflammatory agent and mentions tienilic acid only as a historical example of toxicity, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Iwamura_2011 | not_relevant | 0 | 0 | The paper focuses on CYP2C9-mediated metabolic activation of losartan and does not report pharmacogenomic effects on the PK or PD parameters of tienilic acid. |
| popPK | Kahma_2021 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on CYP inhibition where tienilic acid is used only as a probe inhibitor, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Kahma_2021 | not_relevant | 0 | 0 | The paper describes an in vitro CYP inhibition assay and reports IC50 values for enzyme inhibition, which is a pharmacokinetic/metabolic parameter, not a pharmacodynamic (exposure-response) relationship for the drug's therapeutic effect. |
| PGx | Kahma_2021 | not_relevant | 0 | 0 | The paper describes an in vitro CYP inhibition method and does not report pharmacogenomic effects on tienilic acid PK/PD. |
| popPK | Kerremans_1982 | relevant | 9 | 2 | The study reports pharmacokinetic parameters for tienilic acid in humans, but the specific numeric values are not present in the provided abstract text. |
| PD | Kerremans_1982 | not_relevant | 4 | 2 | The paper reports qualitative correlations and a single dose (250 mg) in 8 subjects, but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve. |
| PGx | Kobayashi_2012 | not_relevant | 0 | 0 | The paper studies benzbromarone metabolism and uses tienilic acid only as a chemical inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Lechi_1979 | irrelevant | 0 | 0 | The study is a clinical trial evaluating antihypertensive and metabolic effects, reporting no pharmacokinetic parameters (CL, V, t1/2) for tienilic acid. |
| PGx | Lecoeur_1996 | not_relevant | 0 | 0 | The paper investigates the immunological mechanism of tienilic acid-induced hepatitis and epitope mapping on CYP2C9, but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Lee_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on CYP inhibition where tienilic acid is used only as a probe inhibitor, not a subject of pharmacokinetic analysis. |
| PD | Lee_2013 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for CYP inhibition, which are pharmacological potency metrics, but does not provide in vivo exposure-response or dose-response PD parameters (e.g., Emax, EC50) for a clinical effect. |
| PGx | Lee_2013 | not_relevant | 0 | 0 | The paper describes in vitro CYP inhibition assays and does not report pharmacogenomic effects on the PK or PD of tienilic acid. |
| popPK | Maass_1982 | irrelevant | 2 | 0 | The paper is a review of tienilic acid pharmacokinetics in multiple species, but the provided evidence contains no specific quantitative parameter values (CL, V, t1/2, etc.). |
| PGx | Mancy_1995 | not_relevant | 0 | 0 | The paper investigates the structural requirements for CYP2C9 substrate binding using tienilic acid derivatives, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Martin_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fenfluramine, using tienilic acid only as a CYP2C9 inhibitor in in vitro assays. |
| PGx | Martin_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of fenfluramine and norfenfluramine, not tienilic acid, and does not report pharmacogenomic effects. |
| PGx | Masubuchi_2007 | not_relevant | 0 | 0 | The paper discusses the mechanism of tienilic acid-induced autoimmunity via CYP2C9 inactivation but does not report pharmacogenomic effects on PK or PD parameters. |
| popPK | Matsuda_1982 | irrelevant | 0 | 0 | The paper is a case report on familial renal hypouricemia and does not study tienilic acid or report its pharmacokinetic parameters. |
| PGx | Matsunaga_2016 | not_relevant | 0 | 0 | The paper focuses on the metabolism and toxicity of bosentan; tienilic acid is used only as a CYP2C9 inhibitor in the experimental setup, and no pharmacogenomic effects on tienilic acid's PK/PD are reported. |
| PGx | McGinnity_2006 | not_relevant | 0 | 0 | The paper evaluates time-dependent CYP450 inhibition by tienilic acid in vitro but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Meier_1987 | not_relevant | 0 | 0 | The paper discusses the genetic polymorphism of mephenytoin metabolism and the role of tienilic acid in inducing autoantibodies against the enzyme, but it does not report pharmacokinetic or pharmacodynamic parameters of tienilic acid itself. |
| popPK | Minor_1979 | irrelevant | 0 | 0 | The study investigates the renal physiology of ticrynafen in rats, not the pharmacokinetics of tienilic acid. |
| popPK | Miura_2020 | irrelevant | 0 | 0 | Tienilic acid is used only as a P450 2C9 inhibitor/probe to study warfarin and diclofenac pharmacokinetics, not as the subject drug for PK parameter estimation. |
| PGx | Mizutani_2005 | not_relevant | 0 | 0 | The paper discusses autoantibodies against drug-metabolizing enzymes in autoimmune hepatitis and does not report pharmacogenomic effects of gene variants on the PK/PD of tienilic acid. |
| PGx | Mo_2009 | not_relevant | 0 | 0 | The paper is a structural review of CYP2C9 and mentions tienilic acid only as a substrate example, without reporting any pharmacogenomic effects on PK/PD parameters. |
| popPK | Morgan_1979 | irrelevant | 0 | 0 | The study is a clinical trial assessing diuretic and uricosuric efficacy in nephrotic syndrome, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PGx | Mori_2009 | not_relevant | 0 | 0 | The paper describes an in vitro assay system for CYP inhibition using tienilic acid as a probe inhibitor, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Murray_1980 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ticrynafen, not tienilic acid. |
| popPK | Myers_1980 | irrelevant | 0 | 0 | The study focuses on renal function and antihypertensive efficacy, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for tienilic acid. |
| popPK | OReilly_1982 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic interaction between ticrynafen and warfarin, not tienilic acid. |
| popPK | Obach_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of covalent binding and does not report pharmacokinetic disposition parameters for tienilic acid. |
| PGx | Obermayer-Straub_2000 | not_relevant | 0 | 0 | The paper discusses autoantibodies against CYP enzymes in autoimmune diseases and mentions tienilic acid only as an example of a drug causing immune-mediated hepatitis, without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Perloff_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay for CYP2C9 inhibition where tienilic acid serves as an inhibitor, not a subject drug for pharmacokinetic parameter estimation. |
| PD | Perloff_2009 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition kinetics (IC50, Ki, kinact) for CYP450, which is a pharmacokinetic/metabolic parameter, not a pharmacodynamic (exposure-response) relationship for the drug's therapeutic effect. |
| PGx | Perloff_2009 | not_relevant | 0 | 0 | The paper focuses on CYP450 assay validation methodology and does not report pharmacogenomic effects on tienilic acid PK/PD. |
| popPK | Pihlaja_2024 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP inhibition using human liver microsomes, not a pharmacokinetic study reporting disposition parameters for tienilic acid. |
| PD | Pihlaja_2024 | not_relevant | 3 | 5 | The paper reports an in vitro IC50 for tienilic acid as a CYP2C9 inhibitor, which is a mechanistic enzyme kinetic parameter, not a pharmacodynamic exposure-response relationship for a therapeutic effect in a biological system. |
| PGx | Pihlaja_2024 | not_relevant | 0 | 0 | The paper describes a microfluidic method for studying CYP inhibition and reports IC50 values for tienilic acid, but it does not investigate the impact of genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Roberts_1979 | irrelevant | 0 | 0 | The study reports clinical efficacy (natriuresis, blood pressure, urate levels) but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for tienilic acid. |
| popPK | Roch-Ramel_1997 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Roch-Ramel_1997 | not_relevant | 0 | 0 | The paper focuses on the mechanism of urate transport in brush-border membrane vesicles and does not report pharmacodynamic or exposure-response relationships for tienilic acid. |
| PGx | Rodrigues_1996 | not_relevant | 0 | 0 | The paper studies the metabolism of naproxen and uses tienilic acid only as a CYP2C inhibitor, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Schlatter_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of diuretic action on renal transport, not a pharmacokinetic study reporting disposition parameters for tienilic acid. |
| popPK | Smith_1979 | irrelevant | 0 | 0 | The study is a clinical trial comparing diuretic efficacy and uric acid clearance, not a pharmacokinetic study of tienilic acid (ticrynafen) disposition parameters. |
| popPK | Smith_1992 | irrelevant | 0 | 0 | The paper is a review on cytochrome P450 structure-activity relationships and mentions tienilic acid only as a substrate example without reporting any pharmacokinetic parameters. |
| PD | Smith_1992 | not_relevant | 1 | 0 | The paper is a review on cytochrome P450 substrate structure-activity relationships and mentions tienilic acid only as a substrate for P4502C9, without reporting any pharmacodynamic or exposure-response data. |
| popPK | Smith_2021 | irrelevant | 0 | 0 | no_text gate: only 139 chars of text extracted (&lt; 400) |
| PGx | Smith_2021 | not_relevant | 0 | 0 | The paper focuses on reaction phenotyping of low-turnover compounds in hepatocytes and does not mention tienilic acid or specific pharmacogenomic effects on its PK/PD parameters. |
| popPK | Steele_1979 | irrelevant | 0 | 0 | The study focuses on the drug ticrynafen, not tienilic acid, and does not report PK parameters for the target drug. |
| popPK | Stote_1979 | irrelevant | 0 | 0 | The study focuses on the renal site of action and electrolyte excretion (pharmacodynamics) rather than reporting quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Tanaka_1990 | irrelevant | 0 | 0 | Tienilic acid is used only as a comparator agent to evaluate the uricosuric activity of the subject drug DR-3438, with no PK parameters reported for tienilic acid. |
| PGx | Tay_2014 | not_relevant | 0 | 0 | The paper investigates the structural determinants of CYP2C9 metabolism using chemical analogs, not the effect of human genetic variants on tienilic acid pharmacokinetics or pharmacodynamics. |
| popPK | Tobert_1981 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of indacrinone enantiomers on urate clearance, not the pharmacokinetics of tienilic acid. |
| popPK | Uehara_2022 | irrelevant | 0 | 0 | no_text gate: only 54 chars of text extracted (&lt; 400) |
| PGx | Uehara_2022 | not_relevant | 0 | 0 | The paper focuses on cytochrome P450s in chimeric mice and does not report pharmacogenomic effects on tienilic acid PK/PD parameters. |
| PGx | Villeneuve_2004 | not_relevant | 0 | 0 | The paper discusses tienilic acid only as an example of immune-mediated hepatotoxicity via CYP activation, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Yang_2016 | irrelevant | 0 | 0 | Tienilic acid is used as an in-vitro mechanism-based inhibitor for CYP2C9 phenotyping, not as the subject drug for pharmacokinetic parameter estimation. |
| PGx | Yang_2016 | not_relevant | 0 | 0 | The paper uses tienilic acid as a mechanism-based inhibitor for CYP2C9 phenotyping, not as the drug of interest for pharmacogenomic analysis. |
| popPK | Yonetani_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of uric acid excretion in rats, using tienilic acid only as a comparator agent to induce hyperuricosuria, without reporting any pharmacokinetic parameters for tienilic acid itself. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper is a review of CYP2C9 properties and mentions tienilic acid only as a mechanism-based inhibitor of the enzyme, not as a drug whose PK/PD is altered by a genetic variant. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
