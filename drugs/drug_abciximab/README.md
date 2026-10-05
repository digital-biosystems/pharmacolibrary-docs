<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;abciximab&quot;}]"></div>

# abciximab

- **generic name:** abciximab
- **ATC codes:** `B01AC13`
- **DrugBank:** [DB00054](https://go.drugbank.com/drugs/DB00054) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Abciximab is a platelet aggregation inhibitor used to treat unstable angina and acute myocardial infarction, mainly during and after coronary artery procedures. It is a hospital-administered injectable drug used mainly in cardiac care settings during angioplasty procedures.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q307088](https://www.wikidata.org/wiki/Q307088) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 12:10 | 5:18 | 0/0/0 | 1/0/1 | 0/0/0 | 160,930/4,433 | ollama / qwen3.8:27b-mtp-q8_0 | 12 | 9/5 | 4/8 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Abernethy_2002_GP_IIb_IIIa_RO](drugs/drug_abciximab/pd_Abernethy_2002_GP_IIb_IIIa_RO.md) | GP IIb/IIIa receptor occupancy ← abciximab · direct Emax (saturable) effect | — | Abernethy DR et al., Pharmacodynamics of abciximab during an…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.121775](https://doi.org/10.1067/mcp.2002.121775) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abernethy_2002_PA_20_mol_L_ADP](drugs/drug_abciximab/pd_Abernethy_2002_PA_20_mol_L_ADP.md) | Inhibition of platelet aggregation (20-µmol/L adenosine diphosphate) ← abciximab · direct Emax (saturable) effect | — | Abernethy DR et al., Pharmacodynamics of abciximab during an…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.121775](https://doi.org/10.1067/mcp.2002.121775) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Abernethy_2002_PA_5_mol_L_ADP](drugs/drug_abciximab/pd_Abernethy_2002_PA_5_mol_L_ADP.md) | Inhibition of platelet aggregation (5-µmol/L adenosine diphosphate) ← abciximab · direct Emax (saturable) effect | — | Abernethy DR et al., Pharmacodynamics of abciximab during an…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.121775](https://doi.org/10.1067/mcp.2002.121775) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mager_2003_E](drugs/drug_abciximab/pd_Mager_2003_E.md) | ex vivo platelet aggregation ← abciximab · direct sigmoid Emax (Hill) effect | — | Mager DE et al., Simultaneous modeling of abciximab plas…, The Journal of pharmacology… (2003) | [10.1124/jpet.103.057299](https://doi.org/10.1124/jpet.103.057299) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=abciximab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: FCGR2A (unknown), FCGR2B (unknown), ITGA2B (target), ITGB3 (target), VTN (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 127 matched, 56 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cox_2004.pdf` | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | pd | 5 | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) | [15317826](https://www.ncbi.nlm.nih.gov/pubmed/15317826) | metadata signals extractable PD data (PK-PD) |
| `Knight_2004.pdf` | Knight DM et al., Pharmacodynamic enhancement of the anti…, Platelets (2004) | pd | 5 | [10.1080/09537100410001723135](https://doi.org/10.1080/09537100410001723135) | [15745312](https://www.ncbi.nlm.nih.gov/pubmed/15745312) | metadata signals extractable PD data (IC50) |
| `Klinkhardt_2000.pdf` | Klinkhardt U et al., Differential in vitro effects of the pl…, Thrombosis research (2000) | pd | 4 | [10.1016/s0049-3848(99)00155-3](https://doi.org/10.1016/s0049-3848(99)00155-3) | [10674406](https://www.ncbi.nlm.nih.gov/pubmed/10674406) | metadata signals extractable PD data (EC50) |
| `Tselepis_1999.pdf` | Tselepis AD et al., Platelet aggregatory response to platel…, Cardiovascular research (1999) | pd | 4 | [10.1016/s0008-6363(99)00078-4](https://doi.org/10.1016/s0008-6363(99)00078-4) | [10536703](https://www.ncbi.nlm.nih.gov/pubmed/10536703) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-05T12:07:09.556401+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bergstrand_2022 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for caplacizumab, not abciximab. |
| PGx | Bougie_2016 | not_relevant | 0 | 0 | The paper studies the pharmacodynamics of abciximab in a mouse model to validate the model's utility, not the effect of a human gene variant on abciximab's PK/PD. |
| popPK | Bugelski_2012 | irrelevant | 1 | 0 | The paper is a review of concordance between preclinical and clinical data for multiple biologics, including abciximab, but does not report original quantitative pharmacokinetic parameters for abciximab. |
| PD | Bugelski_2012 | not_relevant | 1 | 0 | The paper is a review discussing the concordance of preclinical and clinical pharmacology for 15 biopharmaceuticals, including abciximab, but it does not report specific numeric PD parameters or exposure-response curves for abciximab. |
| popPK | Casterella_2001 | irrelevant | 0 | 0 | The study evaluates platelet function dose-response (pharmacodynamics) rather than pharmacokinetic disposition parameters. |
| popPK | Cox_2004 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for argatroban, while abciximab is only a co-administered comparator agent. |
| popPK | Davé_2016 | irrelevant | 0 | 0 | The paper describes a novel antibody format (Fab-dsFv) and does not study the pharmacokinetics of abciximab. |
| PD | Davé_2016 | not_relevant | 0 | 0 | not captured |
| popPK | Dua_2015 | irrelevant | 0 | 0 | The paper is a general tutorial on Target-Mediated Drug Disposition (TMDD) models and does not report specific pharmacokinetic parameters for abciximab. |
| PD | Dua_2015 | not_relevant | 1 | 0 | The paper is a general tutorial on Target-Mediated Drug Disposition (TMDD) models and does not report specific pharmacodynamic or exposure-response data for abciximab. |
| popPK | El-Omar_2001 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing outcomes, not a pharmacokinetic study, and contains no quantitative PK parameters for abciximab. |
| PD | El-Omar_2001 | not_relevant | 0 | 0 | The text is a clinical trial summary comparing efficacy outcomes (death, MI, revascularization) and does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| popPK | Escher_2009 | irrelevant | 0 | 0 | The study focuses on the in vitro and in vivo characterization of novel recombinant Fab fragments, with abciximab serving only as a comparator for competitive inhibition, and no pharmacokinetic parameters are reported. |
| PD | Escher_2009 | not_relevant | 0 | 0 | The paper characterizes novel recombinant Fab fragments and mentions abciximab only as a competitive inhibitor in binding assays, without reporting any exposure-response or dose-response PD parameters for abciximab itself. |
| popPK | Freedman_2002 | irrelevant | 1 | 0 | The study reports only pharmacodynamic endpoints (receptor blockade and platelet aggregation) and does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Gorchakova_2004 | not_relevant | 0 | 0 | The study investigates the effect of the Pl A polymorphism on myocardial salvage and clinical outcomes, not on the pharmacokinetic or pharmacodynamic parameters of abciximab itself. |
| popPK | Hall_2007 | irrelevant | 0 | 0 | The paper describes the structure of a hantavirus inhibitor peptide and does not involve abciximab or pharmacokinetic parameters. |
| PD | Hall_2007 | not_relevant | 0 | 0 | The paper reports the structure and IC50 of a cyclic pentapeptide inhibitor for hantaviruses, not a pharmacodynamic or exposure-response analysis for abciximab. |
| popPK | Jinesh_2015 | irrelevant | 0 | 0 | The paper is a review of anti-TNF drugs and mentions abciximab only as a historical example of a monoclonal antibody, without providing any pharmacokinetic parameters for it. |
| PD | Jinesh_2015 | not_relevant | 0 | 0 | The paper is a review of anti-TNF drugs and mentions abciximab only as a historical example of a monoclonal antibody, providing no pharmacodynamic data or exposure-response analysis for it. |
| popPK | Kageyama_2002 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of AJW200, with abciximab serving only as a comparator agent without reported quantitative PK parameters. |
| PD | Kageyama_2002 | not_relevant | 2 | 1 | The paper focuses on AJW200; abciximab is only mentioned qualitatively as a comparator with no numeric PD parameters or dose-response curves provided. |
| popPK | Kawasaki_1996 | irrelevant | 0 | 0 | The paper characterizes a snake venom disintegrin (flavostatin) and its binding to GPIIb/IIIa, with no pharmacokinetic data for abciximab. |
| PD | Kawasaki_1996 | not_relevant | 0 | 0 | The paper characterizes a new disintegrin (flavostatin) and does not report any pharmacodynamic or exposure-response data for abciximab. |
| popPK | Kereiakes_1996 | irrelevant | 1 | 0 | The study focuses on the pharmacodynamics of xemilofiban with abciximab as a co-administered agent, and no quantitative PK parameters for abciximab are reported. |
| popPK | Kereiakes_1999 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic platelet inhibition profiles rather than pharmacokinetic disposition parameters for abciximab. |
| popPK | Kereiakes_2000 | irrelevant | 1 | 0 | The paper is a qualitative review discussing pharmacodynamic differences and receptor affinity without reporting quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for abciximab. |
| PD | Kereiakes_2000 | not_relevant | 2 | 0 | The text is a qualitative review comparing the pharmacodynamic profiles of GP IIb/IIIa inhibitors without providing specific numeric PD parameters or concentration-effect data for abciximab. |
| popPK | Kereiakes_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for RUC-4, not abciximab. |
| popPK | Kleiman_1995 | irrelevant | 2 | 0 | The study focuses on pharmacodynamics (platelet aggregation and receptor blockade) rather than quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for abciximab. |
| popPK | Klinkhardt_2000 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of platelet function and does not report pharmacokinetic parameters for abciximab. |
| popPK | Klinkhardt_2001 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of platelet inhibition and bleeding time, reporting no pharmacokinetic parameters (clearance, volume, half-life) for abciximab. |
| popPK | Knight_2004 | irrelevant | 1 | 0 | The paper focuses on pharmacodynamic effects (platelet aggregation inhibition) and binding affinity of PEGylated constructs, without reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for abciximab. |
| popPK | Ma_2011 | irrelevant | 0 | 0 | The paper studies a novel disintegrin (Tablysin-15) and uses abciximab only as a blocking antibody in mechanistic assays, reporting no pharmacokinetic parameters for abciximab. |
| PD | Ma_2011 | not_relevant | 0 | 0 | The paper studies a novel disintegrin (Tablysin-15) and only mentions abciximab as a control antibody in an adhesion assay; it does not report any pharmacodynamic or exposure-response relationship for abciximab. |
| popPK | Marathe_2011 | irrelevant | 0 | 0 | The study focuses on interferon-beta (IFN-β) pharmacokinetics and does not involve abciximab. |
| PD | Marathe_2011 | not_relevant | 0 | 0 | The paper is a simulation study on PK parameter estimation for interferon-beta, not a PD analysis for abciximab. |
| popPK | Marciniak_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet inhibition and receptor binding kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Mascelli_2000 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (platelet reactivity and receptor blockade) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Matsumoto_2007 | irrelevant | 0 | 0 | The paper focuses on the development of anti-GPVI antibodies and uses abciximab only as a comparator for potency in in-vitro assays, reporting no pharmacokinetic parameters. |
| PD | Matsumoto_2007 | not_relevant | 1 | 1 | The paper reports an IC50 for abciximab only as a comparative benchmark for new antibodies, not as a PD analysis of abciximab itself. |
| popPK | Matzdorff_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic comparison of platelet function assays and does not report pharmacokinetic disposition parameters for abciximab. |
| PGx | Meisel_2004 | not_relevant | 2 | 0 | The paper is a review of genetic associations with disease risk (CAD, MI) and general drug response variability, but it does not report specific quantitative changes in PK or PD parameters of abciximab linked to specific genotypes. |
| PGx | Nordeen_2013 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotyping, not the pharmacokinetics or pharmacodynamics of abciximab. |
| popPK | Pedicord_1998 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on platelet procoagulant activity and does not report any pharmacokinetic parameters for abciximab. |
| popPK | Rebello_2000 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assessment of platelet inhibition potency (IC50) and does not report pharmacokinetic disposition parameters for abciximab. |
| PGx | Rose_2013 | not_relevant | 0 | 0 | The paper discusses clopidogrel pharmacogenomics (CYP2C19) and obesity effects, but does not report any pharmacogenomic effect on the PK or PD of abciximab. |
| PGx | Sagulkoo_2025 | not_relevant | 0 | 0 | The paper identifies abciximab as a potential drug repurposing candidate for AAA via molecular docking, but does not report any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Sanchez-Pena_2005 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for enoxaparin, not abciximab. |
| PD | Sanchez-Pena_2005 | not_relevant | 0 | 0 | The paper analyzes the pharmacokinetics of enoxaparin, not abciximab, and does not report a pharmacodynamic model or exposure-response relationship for the target drug. |
| popPK | Saucedo_2004 | irrelevant | 1 | 0 | The study reports pharmacodynamic parameters (platelet aggregation inhibition and receptor occupancy) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| PGx | Schrör_2003 | not_relevant | 0 | 0 | The paper explicitly states there is no clear evidence that the biological activity of the agents is modified by gene polymorphism (HPA-1). |
| PGx | Sibbing_2005 | not_relevant | 0 | 0 | The study investigates the effect of the PAI-1 4G/5G polymorphism on myocardial salvage (clinical outcome) and does not report changes in pharmacokinetic or pharmacodynamic parameters of abciximab. |
| popPK | Stone_2002 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial comparing outcomes (MI, mortality) of abciximab and tirofiban, containing no pharmacokinetic parameters or disposition data. |
| PD | Stone_2002 | not_relevant | 0 | 0 | The paper reports clinical outcomes (MI rates, survival) comparing two drugs but does not provide any pharmacokinetic data, concentration-effect curves, or numeric pharmacodynamic parameters (e.g., Emax, EC50, platelet inhibition percentages). |
| popPK | Tcheng_1994 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (platelet inhibition) and clinical outcomes, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for abciximab. |
| popPK | Tcheng_1995 | irrelevant | 0 | 0 | The paper is a review of clinical outcomes and safety for antithrombotic agents, containing no quantitative pharmacokinetic parameters for abciximab. |
| PD | Tcheng_1995 | not_relevant | 1 | 0 | The text is a qualitative review of clinical trial outcomes and safety profiles for antithrombotic agents, including abciximab (c7E3 Fab), but it does not report any specific pharmacokinetic or pharmacodynamic data, concentration-effect curves, or numeric PD parameters. |
| popPK | Trikha_2002 | irrelevant | 0 | 0 | The paper investigates the mechanistic roles of integrins in tumor growth and angiogenesis using antibody fragments, not the pharmacokinetics of abciximab. |
| popPK | Tselepis_1999 | irrelevant | 0 | 0 | The study investigates platelet aggregation and PAF-acetylhydrolase activity, not the pharmacokinetic disposition parameters (CL, V, etc.) of abciximab. |
| PD | Tselepis_1999 | not_relevant | 3 | 2 | The study reports qualitative inhibition percentages (90-96%) at specific time points after a fixed dose, but does not provide concentration-effect data, EC50/Emax parameters, or a PK/PD model linking drug exposure to the pharmacodynamic effect. |
| popPK | Urquidi-Macdonald_2004 | irrelevant | 2 | 0 | The study focuses on a pharmacodynamic model (neural network) for platelet aggregation inhibition and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for abciximab. |
| popPK | Van_2019 | irrelevant | 0 | 0 | The paper is a clinical review of perioperative bridging strategies and does not report original quantitative pharmacokinetic parameters for abciximab. |
| PD | Van_2019 | not_relevant | 1 | 0 | The paper is a narrative review of clinical efficacy and safety, containing no quantitative pharmacodynamic modeling, concentration-effect data, or numeric PD parameters for abciximab. |
| popPK | Wegert_2002 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of thrombin generation where abciximab is used as an in-vitro inhibitor, not a pharmacokinetic study reporting disposition parameters. |
| PD | Wegert_2002 | not_relevant | 3 | 2 | The study reports qualitative/percentage changes in Endogenous Thrombin Potential (ETP) for abciximab in vitro but does not provide a concentration-effect curve, Emax, or EC50 values for the drug itself. |
| popPK | Wittke_1999 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of sibrafiban (Ro 44-3888), not abciximab. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for abciximab. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 48 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of abciximab pharmacodynamics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
