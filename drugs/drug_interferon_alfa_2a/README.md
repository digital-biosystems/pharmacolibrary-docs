<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L03A&quot;,&quot;href&quot;:&quot;atc/L03A.md&quot;},{&quot;label&quot;:&quot;interferon alfa-2a&quot;}]"></div>

# interferon alfa-2a

- **generic name:** interferon alfa-2a
- **ATC codes:** `L03AB04`
- **DrugBank:** [DB00034](https://go.drugbank.com/drugs/DB00034) · **PubChem:** not captured
- **groups:** approved, investigational, withdrawn

## About

Interferon alfa-2a is a recombinant immunostimulant medicine that was used to treat chronic hepatitis C. It is no longer in use: a marketing application for it was refused in the European Union, and it is listed as withdrawn.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801761](https://www.wikidata.org/wiki/Q20801761) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:55 | 15:27 | 0/0/0 | 0/1/1 | 0/0/0 | 385,294/15,757 | einfracz / qwen3.8-27b | 22 | 2/18 | 22/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Jeon_2013_neopterin](drugs/drug_interferon_alfa_2a/pd_Jeon_2013_neopterin.md) | neopterin ← interferon_alfa_2a · direct sigmoid Emax (Hill) effect | — | Jeon S et al., Saturable human neopterin response to i…, Journal of translational me… (2013) | [10.1186/1479-5876-11-240](https://doi.org/10.1186/1479-5876-11-240) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Adiwijaya_2012_HCV_RNA](drugs/drug_interferon_alfa_2a/pd_Adiwijaya_2012_HCV_RNA.md) | HCV RNA ← peginterferon alfa-2a · disease-progression model | — | Adiwijaya BS et al., A viral dynamic model for treatment reg…, PLoS computational biology (2012) | [10.1371/journal.pcbi.1002339](https://doi.org/10.1371/journal.pcbi.1002339) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=interferon_alfa_2a) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: IFNAR1 (unknown), IFNAR2 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 121 matched, 85 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jung_2018.pdf` | Jung YS et al., Population PK-PD Model of Pegylated Int…, Journal of pharmaceutical s… (2018) | popPK | 10 | [10.1016/j.xphs.2018.08.017](https://doi.org/10.1016/j.xphs.2018.08.017) | [30179597](https://pubmed.ncbi.nlm.nih.gov/30179597) | The paper is a population PK model study of interferon alfa-2a, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-10-06T22:53:18.326765+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adiwijaya_2012 | irrelevant | 1 | 0 | The study focuses on viral dynamic modeling for Hepatitis C treatment with telaprevir and peginterferon alfa-2a, but does not report quantitative pharmacokinetic parameters (CL, V, t1/2) for interferon alfa-2a itself, referencing them only as inputs to the model or citing external sources. |
| PGx | Andersohn_2016 | not_relevant | 0 | 0 | The paper compares clinical efficacy (SVR24) and safety outcomes in HCV/HIV coinfection but does not report any gene variants or genotypes influencing pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bi_2017 | irrelevant | 1 | 8 | The study reports population pharmacokinetic parameters (CL, V, Ka) for peginterferon alfa-2a (a pegylated conjugate), which is a distinct molecular entity from the subject drug interferon_alfa_2a. |
| popPK | Brennan_2016 | irrelevant | 2 | 0 | The study models peginterferon alfa-2a (a pegylated prodrug/derivative) rather than free interferon alfa-2a, and no specific numeric parameter values are provided in the evidence. |
| PGx | Bronowicki_2006 | not_relevant | 0 | 0 | The study investigates the clinical efficacy of adding/stopping ribavirin, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of interferon_alfa_2a. |
| PGx | Bruchfeld_2006 | not_relevant | 0 | 0 | The study describes clinical outcomes and dosing in haemodialysis patients but does not report any genetic variants or pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Brunetto_2009 | not_relevant | 0 | 0 | The study investigates HBV surface antigen levels as a predictor of response, not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of interferon. |
| popPK | Canini_2017 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for lonafarnib, not interferon_alfa_2a. |
| PGx | Carrión_2013 | not_relevant | 0 | 0 | The paper evaluates a multidisciplinary support program for adherence and reports SVR rates by hepatitis C genotype, but it does not report pharmacogenomic effects on PK or PD parameters of the drug itself. |
| PGx | Chung_2004 | not_relevant | 1 | 0 | The paper compares two interferon formulations and analyzes response based on viral genotype (HCV), not human pharmacogenomic variants affecting drug PK or PD. |
| PGx | Chung_2010 | not_relevant | 0 | 0 | The study reports associations between hematologic PD parameters (neutropenia) and virologic response, but it does not investigate or report any gene variants or genotypes as the cause of these effects. |
| PGx | Dominguez_2006 | not_relevant | 0 | 0 | The study evaluates clinical efficacy in a specific patient population (HIV/HCV) but does not analyze gene variants (pharmacogenomics) or their effect on PK/PD parameters. |
| PGx | El_2009 | not_relevant | 0 | 0 | The paper reports clinical outcomes (Sustained Virological Response) based on HCV genotype, not the effect of a patient's pharmacogenomic variant on the PK or PD parameters of interferon_alfa_2a. |
| PGx | El_2012 | not_relevant | 0 | 0 | The study investigates the clinical efficacy of interferon-alfa-2a in HCV patients but does not analyze the impact of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Farnik_2015 | not_relevant | 0 | 0 | The study investigates pharmacokinetic differences due to drug-drug interactions (telaprevir vs. immunosuppressants) and patient populations (post-transplant vs. non-transplant), but does not report on any pharmacogenomic effects (gene variants) on the PK or PD of interferon_alfa_2a. |
| PGx | Ferenci_2003 | not_relevant | 0 | 0 | The text describes clinical efficacy and general pharmacokinetic benefits of peginterferon alfa-2a compared to conventional interferon, but does not report any genetic variants or pharmacogenomic effects. |
| PGx | Fried_2002 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety comparisons between treatment regimens in chronic hepatitis C patients but does not contain any pharmacogenomic data (gene variants/genotypes) influencing PK or PD parameters of interferon alfa-2a. |
| popPK | Hang_2016 | irrelevant | 0 | 0 | The study investigates peginterferon beta-1a, not interferon alfa-2a. |
| PGx | Helal_2016 | not_relevant | 0 | 0 | The paper reports the additive effect of hydroxychloroquine on interferon response but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Helbling_2002 | not_relevant | 0 | 0 | The paper reports a clinical trial comparing interferon and amantadine but does not contain any pharmacogenomic analysis or data linking genetic variants to PK or PD parameters. |
| popPK | Hu_2015 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of peginterferon beta-1a, not interferon alfa-2a, which is only mentioned as a reference in the bibliography. |
| popPK | Hu_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of peginterferon beta-1a, not interferon alfa 2a. |
| popPK | Jian_2025 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of peginterferon alpha-2b (Pegbing), not the subject drug interferon_alfa_2a. |
| popPK | Jiang_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of ruzotolimod (a TLR7 agonist), not interferon_alfa_2a, which is only mentioned as a background comparator for Hepatitis B treatment. |
| popPK | Jung_2018 | relevant | 10 | 3 | The paper is a population PK model study of interferon alfa-2a, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Kang_2008 | not_relevant | 0 | 0 | The study examines clinical outcomes (SVR) and clinical predictors (genotype, cirrhosis) in a clinical trial, but does not report a pharmacogenomic effect on a pharmacokinetic (PK) or pharmacodynamic (PD) parameter of interferon_alfa_2a. |
| PGx | Lenz_2012 | not_relevant | 0 | 0 | The paper reports clinical efficacy and viral resistance to TMC435 and interferon in HCV patients, not pharmacogenomic effects on PK/PD parameters. |
| PGx | Litwin_2011 | not_relevant | 0 | 0 | The paper describes a trial design for directly observed therapy in a methadone clinic and does not analyze pharmacogenomic variants or genetic associations. |
| PGx | Malone_2005 | not_relevant | 0 | 0 | The paper is a cost-effectiveness analysis comparing two interferon formulations and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Mangia_2014 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety outcomes of sofosbuvir-based therapies but does not analyze the impact of specific gene variants on the pharmacokinetic or pharmacodynamic parameters of interferon_alfa_2a. |
| PGx | Melikyan_2018 | not_relevant | 0 | 0 | The paper discusses clinical efficacy and safety of pegylated interferon alfa-2b in myeloproliferative diseases and mentions JAK2 mutation status, but it does not report a pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of interferon alfa-2a. |
| popPK | Mensing_2016 | irrelevant | 0 | 0 | The paper is a population pharmacokinetic study for the HCV direct-acting antiviral regimen (ombitasvir, paritaprevir, ritonavir, dasabuvir, ribavirin), and interferon alfa-2a is only mentioned as a comparator in prior therapy descriptions, with no PK parameters reported for it. |
| popPK | Mensing_2017 | irrelevant | 0 | 0 | The study characterizes the pharmacokinetics of hepatitis C antivirals (paritaprevir, ombitasvir, dasabuvir, ritonavir, ribavirin), not interferon_alfa_2a. |
| popPK | Navid_2016 | irrelevant | 1 | 1 | The study focuses on interferon alpha-2b, not the target drug interferon alpha-2a. |
| PGx | Nelson_2009 | not_relevant | 0 | 0 | The paper investigates the efficacy and safety of albinterferon alfa-2b in a general patient population but does not report any pharmacogenomic analyses or links between genetic variants and pharmacokinetic/pharmacodynamic parameters. |
| PGx | Nishiguchi_2014 | not_relevant | 0 | 0 | The study evaluates the safety, pharmacokinetics, and efficacy of the drug combination in Japanese patients but does not report how a specific gene variant or genotype affects the PK or PD parameters of interferon alfa-2a. |
| popPK | Parrot_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic modeling for nanoparticles and does not study interferon_alfa_2a or report any PK parameters for it. |
| PGx | Pedersen_2011 | not_relevant | 0 | 0 | The paper reports the correlation between ribavirin plasma levels and viral response, but does not investigate how genetic variants affect the PK or PD of interferon_alfa_2a. |
| popPK | Qin_2025 | irrelevant | 0 | 0 | The paper investigates the population pharmacokinetics of ropeginterferon alfa-2b, while interferon_alfa_2a is mentioned only as a comparator in a background study. |
| popPK | Qin_2026 | irrelevant | 0 | 0 | The study reports population PK parameters for ropeginterferon alfa-2b, not interferon alfa-2a (which is only used as a comparator). |
| PGx | Rajender_2002 | not_relevant | 0 | 0 | The paper is a general review of peginterferon alfa-2a for hepatitis C and does not report any pharmacogenomic effects of gene variants on PK or PD parameters. |
| PGx | Rodriguez-Torres_2014 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of filibuvir combined with interferon and ribavirin, and does not report any pharmacogenomic effects of gene variants on the PK or PD parameters of interferon alfa-2a. |
| PGx | Roeder_2014 | not_relevant | 0 | 0 | The study investigates age-related differences in response, not pharmacogenomic variants. |
| PGx | Rubin_2018 | not_relevant | 2 | 1 | The paper reports clinical efficacy and PK of telaprevir, but does not characterize the pharmacogenomic effects of genetic variants on the PK or PD parameters of interferon_alfa_2a. |
| PGx | Rustgi_2009 | not_relevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy and safety of adding merimepodib to interferon therapy, with no assessment of how genetic variants affect pharmacokinetic or pharmacodynamic parameters. |
| PGx | Sauk_2006 | not_relevant | 0 | 0 | The paper evaluates clinical efficacy in a specific population but does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Shobokshi_2003 | not_relevant | 1 | 1 | The text discusses HCV genotype 4 as a clinical predictor for required treatment duration, not a host pharmacogenomic variant affecting the PK/PD of interferon. |
| PGx | Sokal_2010 | not_relevant | 0 | 0 | The paper reports differences in treatment response (SVR) based on HCV genotype, not a patient's pharmacogenomic variant affecting the pharmacokinetics or pharmacodynamics of the drug. |
| PGx | Sulkowski_2013 | not_relevant | 0 | 0 | The paper reports clinical efficacy and safety of faldaprevir combination therapy but does not analyze the impact of host genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Sørensen_2024 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a drug combination for polycythemia vera and does not investigate how genetic variants affect the pharmacokinetics or pharmacodynamics of interferon alfa-2a. |
| PGx | Tekin_2008 | not_relevant | 0 | 0 | The paper evaluates clinical outcomes in a patient population but does not report any pharmacogenomic analysis or effects of gene variants on PK/PD parameters. |
| PGx | Torres_2014 | not_relevant | 2 | 0 | The paper is a small case series (n=3) reporting clinical outcomes (viral load, safety) rather than pharmacokinetic parameters or pharmacogenomic analyses (IL28B genotypes are mentioned but not linked to PK/PD changes in a quantitative manner). |
| PGx | Torriani_2004 | not_relevant | 0 | 0 | The paper is a clinical trial comparing treatment efficacy (Sustained Virologic Response) in HIV/HCV patients and does not investigate the effect of host gene variants on the pharmacokinetics or pharmacodynamics of interferon alfa-2a. |
| PGx | Urquijo_2013 | not_relevant | 0 | 0 | The paper reports efficacy based on HCV genotype, not the effect of a human gene variant on PK or PD. |
| popPK | Wade_2006 | irrelevant | 0 | 0 | The study analyzes the pharmacokinetics of ribavirin, not interferon_alfa_2a. |
| PGx | Wagner_2011 | not_relevant | 0 | 0 | The paper reports on the antiviral activity and pharmacokinetics of filibuvir, not interferon_alfa_2a, and does not investigate the impact of genetic variants on PK/PD parameters. |
| popPK | Zhu_2018 | irrelevant | 0 | 0 | The paper reports population pharmacokinetic parameters for asunaprevir (an HCV protease inhibitor), not for interferon_alfa_2a, which is only mentioned as part of a combination regimen. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | The study reports population PK parameters for ropeginterferon alfa-2b, not interferon alfa-2a. |
| PGx | de_2012 | not_relevant | 0 | 0 | The study reports a lack of association between IL28B variants and clinical treatment outcomes (HBeAg seroconversion/HBsAg clearance), not a specific pharmacokinetic or pharmacodynamic parameter alteration of the drug itself. |
| PGx | van_2008 | not_relevant | 0 | 0 | The study reports clinical outcomes and standard pharmacokinetic monitoring in a specific population (hemodialysis), but it does not report any pharmacogenomic effects (gene variants or genotypes) on the PK or PD parameters of interferon alfa-2a. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
