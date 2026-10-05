<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;ancrod&quot;}]"></div>

# ancrod

- **generic name:** ancrod
- **ATC codes:** `B01AD09`
- **DrugBank:** [DB05099](https://go.drugbank.com/drugs/DB05099) · **PubChem:** not captured
- **groups:** approved, withdrawn

## About

Ancrod is an anticoagulant enzyme derived from snake venom that was used to treat thrombotic conditions by lowering fibrinogen levels. It has been withdrawn and is no longer in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2846011](https://www.wikidata.org/wiki/Q2846011) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 13:37 | 1:18 | 0/0/0 | 0/0/0 | 0/0/0 | 49,890/843 | ollama / qwen3.8:27b-mtp-q8_0 | 25 | 2/4 | 3/22 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ancrod) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: FGA (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alving_1977 | irrelevant | 1 | 0 | The study focuses on fibrinogen synthesis and catabolism in rabbits using ancrod to induce afibrinogenemia, rather than reporting pharmacokinetic parameters (CL, V, ka) for ancrod itself. |
| popPK | Ariaratnam_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of an antivenom (Fab fragment) for Russell's viper envenoming, not the drug ancrod. |
| popPK | Asadi_2014 | irrelevant | 0 | 0 | The paper is a review article on stroke treatments that discusses ancrod's clinical efficacy but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Barcelli_1982 | irrelevant | 0 | 0 | The study investigates the effect of ancrod on reticuloendothelial clearance of immune complexes, not the pharmacokinetic disposition parameters (CL, V, t1/2) of ancrod itself. |
| popPK | Barrie_1974 | irrelevant | 0 | 0 | The paper is a clinical trial assessing the efficacy of ancrod for thrombosis prevention and reports fibrinogen levels, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Bell_1978 | irrelevant | 2 | 0 | The study focuses on the pharmacodynamic effects of ancrod on coagulation factors (fibrinogen/prothrombin) and reports half-lives for ancrod-induced complexes/metabolites, not the pharmacokinetic disposition parameters (CL, V, ka) of the ancrod enzyme itself. |
| popPK | Binder_1979 | irrelevant | 0 | 0 | The study uses ancrod as a tool to deplete fibrinogen in sheep to test lung permeability, and does not report pharmacokinetic parameters (CL, V, t1/2) for ancrod itself. |
| popPK | Brennan_1994 | irrelevant | 0 | 0 | The paper is a clinical case report describing the therapeutic use of ancrod for heparin-induced thrombosis and does not contain any pharmacokinetic data or quantitative disposition parameters. |
| popPK | Bunnage_2007 | irrelevant | 0 | 0 | The paper describes the discovery of TAFIa inhibitors (Compound 21) and does not study the pharmacokinetics of ancrod. |
| popPK | Burkhart_1992 | irrelevant | 0 | 0 | The paper reports the amino acid sequence and structural characterization of Ancrod, not pharmacokinetic parameters. |
| popPK | Carter_1996 | irrelevant | 0 | 0 | The paper is a review of anticoagulation therapies that mentions ancrod only as a clinical agent for heparin-induced thrombocytopenia, without reporting any quantitative pharmacokinetic parameters for it. |
| popPK | Chang_1994 | irrelevant | 0 | 0 | The study is mechanistic/in-vitro, focusing on prostacyclin production and cyclooxygenase synthesis, with no pharmacokinetic parameters reported. |
| popPK | Cheng_2008 | irrelevant | 0 | 0 | The study focuses on a different drug (earthworm fibrinolytic enzyme EFE-d) and does not report pharmacokinetic parameters for ancrod. |
| popPK | Cooley_1992 | irrelevant | 0 | 0 | The study is a microvascular surgery experiment assessing vein patency and fibrinogen levels, not a pharmacokinetic study, and reports no PK parameters for ancrod. |
| popPK | Dempfle_2000 | irrelevant | 2 | 0 | The study focuses on the mechanism of fibrin formation and proteolysis (fibrinogen depletion) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, t1/2) for ancrod. |
| popPK | Dhainaut_2001 | irrelevant | 0 | 0 | The paper is a review of hepatic physiology in sepsis and does not study the pharmacokinetics of ancrod. |
| popPK | Elger_1998 | irrelevant | 0 | 0 | The study investigates the effect of ancrod on intracerebral hemorrhage volume and plasma fibrinogen levels, but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Glas-Greenwalt_1985 | irrelevant | 0 | 0 | The paper is a clinical study focusing on the normalization of fibrinolytic enzyme abnormalities (IPA, PI) and histologic outcomes, reporting no quantitative pharmacokinetic parameters (CL, V, t1/2) for ancrod. |
| popPK | Green_2025 | irrelevant | 0 | 0 | The paper is a general review of snake venom products and does not report any quantitative pharmacokinetic parameters for ancrod. |
| popPK | Hazare_2025 | irrelevant | 0 | 0 | The paper is a bibliometric review of fibrinolytic enzymes and does not report any quantitative pharmacokinetic parameters for ancrod. |
| popPK | Hinder_2006 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of otamixaban, not ancrod. |
| popPK | Ho_1990 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antivenoms, not ancrod, and ancrod is not the subject drug. |
| popPK | Hotz_2025 | irrelevant | 0 | 0 | The paper is a comprehensive review of thrombolytic agents and does not report original quantitative pharmacokinetic parameters for ancrod. |
| popPK | Iqbal_2001 | irrelevant | 0 | 0 | The paper is a review of anticoagulant drugs where ancrod is only mentioned as a class member, and no specific pharmacokinetic parameters for ancrod are reported. |
| popPK | Isbister_2015 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for snake antivenom, not ancrod. |
| popPK | Kelton_1999 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating the interaction of ancrod with platelets and does not report any pharmacokinetic parameters. |
| popPK | Koch_1993 | irrelevant | 0 | 0 | The study uses ancrod as a tool to induce defibrination in rabbits to study bacterial clearance, not to characterize the pharmacokinetics of ancrod itself. |
| popPK | Koch_1997 | irrelevant | 0 | 0 | The study uses ancrod as a tool to induce defibrination to investigate bacterial clearance, not to characterize the pharmacokinetic parameters of ancrod itself. |
| popPK | Krishnamurthy_2018 | irrelevant | 0 | 0 | The paper describes the in vitro characterization of a novel enzyme from Serratia marcescens, not the pharmacokinetics of ancrod. |
| popPK | Larsson_2008 | irrelevant | 0 | 0 | The paper investigates the effects of cytokines on t-PA expression in endothelial cells and does not involve ancrod or pharmacokinetic parameters. |
| popPK | Lees_2000 | irrelevant | 0 | 0 | The paper is a review of thrombolysis trials in stroke where ancrod is mentioned only as a therapeutic agent for fibrinogen depletion, with no pharmacokinetic parameters reported. |
| popPK | Lipitsä_2019 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mast cell chymase and fibrinogen degradation, with no pharmacokinetic data for ancrod. |
| popPK | Liu_1998 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy and safety outcomes in stroke patients, containing no pharmacokinetic parameters or disposition data for ancrod. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | The study focuses on earthworm fibrinolytic enzyme (EFE) and cubosome delivery, not ancrod. |
| popPK | Lowe_1978 | irrelevant | 2 | 0 | The study is a clinical feasibility/dose-ranging trial reporting pharmacodynamic effects (fibrinogen depletion) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for ancrod. |
| popPK | Lowe_1979 | irrelevant | 0 | 0 | The study reports clinical outcomes (viscosity, blood flow) and fibrinogen levels, but does not provide pharmacokinetic parameters (CL, V, t1/2) for ancrod. |
| popPK | Marx_2008 | irrelevant | 0 | 0 | The paper is a structural biology study on TAFI (Thrombin-activatable fibrinolysis inhibitor) and does not involve the drug ancrod or report pharmacokinetic parameters. |
| popPK | McCandless_1988 | irrelevant | 0 | 0 | Ancrod is used only as a tool to deplete fibrinogen in a platelet kinetics study, not as the subject of pharmacokinetic analysis. |
| popPK | Naish_1975 | irrelevant | 0 | 0 | The paper is a mechanistic study on the effects of ancrod-induced defibrination on glomerular injury in rabbits and does not report any pharmacokinetic parameters for ancrod. |
| popPK | Nasim_2017 | irrelevant | 0 | 0 | The study investigates Russell's viper venom-induced acute kidney injury and immune response in mice, not the pharmacokinetics of ancrod. |
| popPK | Nelsestuen_1976 | irrelevant | 0 | 0 | The paper is a mechanistic study on prothrombin and Factor X binding, not a pharmacokinetic study of ancrod. |
| popPK | Nielsen_2016 | irrelevant | 0 | 0 | The paper is an in-vitro thrombelastography study analyzing coagulation kinetics, not a pharmacokinetic study reporting disposition parameters like clearance or volume for ancrod. |
| popPK | Owen_2010 | irrelevant | 0 | 0 | The paper studies TAFIa inhibitors (UK-396082 and analogues), not ancrod. |
| popPK | Paul_2007 | irrelevant | 0 | 0 | The study uses ancrod as a therapeutic agent to deplete fibrinogen in Alzheimer's mouse models and reports pathological outcomes (inflammation, BBB damage), but does not report pharmacokinetic parameters (CL, V, t1/2) for ancrod itself. |
| popPK | Phillips_1988 | irrelevant | 0 | 0 | The paper is a clinical case series on Russell's viper envenoming and antivenom efficacy, not a pharmacokinetic study of ancrod. |
| popPK | Piechowski-Jozwiak_2022 | irrelevant | 0 | 0 | The paper discusses the pharmacokinetics of desmoteplase, not ancrod. |
| popPK | Prentice_1993 | irrelevant | 1 | 0 | The study characterizes the fibrinolytic response and clearance of fibrin/fibrinogen degradation products, not the pharmacokinetic parameters (CL, V, t1/2) of ancrod itself. |
| popPK | Ratcliffe_1989 | irrelevant | 0 | 0 | The study investigates the nephrotoxicity of Russell's viper venom in an isolated perfused rat kidney model and does not report pharmacokinetic parameters for ancrod. |
| popPK | Rattner_2014 | irrelevant | 0 | 0 | The study investigates the toxicokinetics of diphacinone, not ancrod. |
| popPK | Rattner_2020 | irrelevant | 0 | 0 | The paper studies brodifacoum toxicity in kestrels and does not involve ancrod or report pharmacokinetic parameters for it. |
| popPK | Sanhajariya_2020 | irrelevant | 0 | 0 | The study is an in silico simulation of generic snake venom toxins, not a pharmacokinetic study of the specific drug ancrod. |
| PD | Sanhajariya_2020 | not_relevant | 0 | 0 | The paper is a purely pharmacokinetic (PK) simulation study focusing on the disposition of snake venom components and does not report any pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Schumacher_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of ancrod's effect on thrombosis and bleeding in rats, reporting no pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Sherman_1982 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of fibronectin, not ancrod, which is used only as a defibrinating agent to test fibronectin binding. |
| popPK | Sherman_2002 | irrelevant | 0 | 0 | The text is a general overview of ancrod's mechanism and clinical use in stroke, containing no quantitative pharmacokinetic parameters or disposition data. |
| popPK | Singh_1971 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical trial in calves measuring fibrinogen levels and thrombus formation, not a pharmacokinetic study reporting clearance, volume, or half-life parameters. |
| popPK | Spellman_1977 | irrelevant | 0 | 0 | The paper is a mechanistic study of fibrin monomer polymerization and does not report any pharmacokinetic parameters for ancrod. |
| popPK | Stocker_1982 | irrelevant | 0 | 0 | The paper is a mechanistic review of snake venom proteinases and does not report quantitative pharmacokinetic parameters for ancrod. |
| PD | Stocker_1982 | not_relevant | 1 | 0 | The text is a qualitative review of thrombin-like proteinases that mentions dose-response relationships exist but provides no numeric PD parameters, curves, or specific exposure-response data for ancrod. |
| popPK | Surette_2011 | irrelevant | 0 | 0 | The paper studies the role of S100A10 in fibrinolysis and angiogenesis using batroxobin (a different drug) to induce thrombi, and does not report pharmacokinetic parameters for ancrod. |
| popPK | Swenson_2004 | irrelevant | 0 | 0 | The paper is a review of alpha-fibrinogenases (specifically fibrolase and alfimeprase) and does not report quantitative pharmacokinetic parameters for ancrod. |
| popPK | Tan_2019 | irrelevant | 0 | 0 | The paper is a venomics and toxicity study of a snake species, not a pharmacokinetic study of the drug ancrod. |
| PD | Tan_2019 | not_relevant | 0 | 0 | The paper focuses on the venomics and antivenom neutralization of a snake species, not on the pharmacodynamics of the drug ancrod. |
| popPK | Tun_1984 | irrelevant | 0 | 0 | The study measures Russell's viper venom antigen levels, not the pharmacokinetics of the drug ancrod. |
| popPK | Wang_2007 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of a TAFIa inhibitor (BX 528), not ancrod, and does not report PK parameters for ancrod. |
| popPK | Yu_2007 | irrelevant | 0 | 0 | The paper describes the recombinant expression and purification of ancrod in yeast, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Zhang_2011 | irrelevant | 0 | 0 | The paper describes the recombinant expression and purification of ancrod in Pichia pastoris, not a pharmacokinetic study. |
| popPK | Zhao_2001 | irrelevant | 0 | 0 | The study investigates a thrombin-like enzyme from Agkistrodon halys ussuriensis venom, not the drug ancrod. |
| popPK | unknown_1977 | irrelevant | 0 | 0 | The evidence contains only the drug name and no pharmacokinetic data, parameters, or study details. |
| popPK | unknown_1996 | irrelevant | 0 | 0 | The paper studies renal biomarkers (NAG) in Russell's viper envenomation, not the pharmacokinetics of ancrod. |
| popPK | unknown_1998 | irrelevant | 0 | 0 | The paper studies renal function markers in snake bite victims and does not report pharmacokinetic parameters for ancrod. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, results, or PD parameters for ancrod. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
