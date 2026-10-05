<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nimodipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nimodipine_Foucher2025_reference&quot;,&quot;label&quot;:&quot;Foucher_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_nimodipine/Nimodipine_Foucher2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# nimodipine

- **generic name:** nimodipine
- **ATC codes:** `C08CA06`
- **DrugBank:** [DB00393](https://go.drugbank.com/drugs/DB00393) · **PubChem:** [CID 4497](https://pubchem.ncbi.nlm.nih.gov/compound/4497)
- **molar mass:** 418.4403 g/mol (C21H26N2O7) — DrugBank
- **groups:** approved, investigational

## About

Nimodipine is a calcium channel blocker used to treat subarachnoid hemorrhage. It is an approved drug that remains in use, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421429](https://www.wikidata.org/wiki/Q421429) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nimodipine | parent | 418.44 | C21H26N2O7 | DrugBank | [4497](https://pubchem.ncbi.nlm.nih.gov/compound/4497) | Foucher_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 11:16 | 21:22 | 1/0/0 | 1/0/0 | 0/0/0 | 133,490/11,099 | ollama / qwen3.8:27b-mtp-q8_0 | 9 | 4/5 | 8/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Foucher_2025_reference](drugs/drug_nimodipine/Nimodipine_Foucher2025_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Foucher A et al., Impact of cerebral vasospasm therapy on…, Journal of the neurological… (2025) | [10.1016/j.jns.2025.125666](https://doi.org/10.1016/j.jns.2025.125666) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Román_2021_Emax](drugs/drug_nimodipine/pd_Rom_n_2021_Emax.md) | 5-HT-induced vascular contraction (Emax) ← serotonin (5-HT) · direct sigmoid Emax (Hill) effect | — | Román M et al., The combination of dantrolene and nimod…, Scientific reports (2021) | [10.1038/s41598-021-89338-6](https://doi.org/10.1038/s41598-021-89338-6) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Román_2021_M](drugs/drug_nimodipine/pd_Rom_n_2021_M.md) | 5-HT-induced contraction EC50 ← serotonin (5-HT) · direct sigmoid Emax (Hill) effect | — | Román M et al., The combination of dantrolene and nimod…, Scientific reports (2021) | [10.1038/s41598-021-89338-6](https://doi.org/10.1038/s41598-021-89338-6) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nimodipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: AHR (target), CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1F (inhibitor), CACNA1S (inhibitor), CACNB1 (inhibitor), CACNB2 (inhibitor), CACNB3 (inhibitor), CACNB4 (inhibitor), NR3C2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 122 matched, 58 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_17 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bellapart_2026.pdf` | Bellapart J et al., Nimodipine dosing and pharmacokinetic v…, Journal of clinical neurosc… (2026) | popPK | 10 | [10.1016/j.jocn.2026.111940](https://doi.org/10.1016/j.jocn.2026.111940) | [41712995](https://pubmed.ncbi.nlm.nih.gov/41712995) | The paper describes a population PK study for nimodipine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Terziivanov_1999.pdf` | Terziivanov D et al., Pharmacokinetic variability of nimodipi…, International journal of cl… (1999) | popPK | 10 | not captured | [10475143](https://pubmed.ncbi.nlm.nih.gov/10475143) | The paper is a population PK study of nimodipine, but the evidence only provides variability metrics (CVs) and model validation statistics, lacking the specific central parameter estimates (CL, V, Q, ka) required for extraction. |
| `Yan_1993.pdf` | Yan XF et al., [Studies on the bioavailability and pha…, Yao xue xue bao = Acta phar… (1993) | popPK | 10 | not captured | [8328270](https://pubmed.ncbi.nlm.nih.gov/8328270) | The paper reports quantitative pharmacokinetic parameters (ka, t1/2, Vd, AUC) for nimodipine in humans, and all numeric values are explicitly present in the text. |
| `Shi_1997.pdf` | Shi XJ et al., [Comparison of bioavailability between…, Yao xue xue bao = Acta phar… (1997) | popPK | 9 | not captured | [11596299](https://pubmed.ncbi.nlm.nih.gov/11596299) | The study reports a two-compartment PK model for nimodipine, but the specific numeric parameter values are located in Table 1 and Figure 1, which are not included in the provided evidence. |
| `Seker_2017.pdf` | Seker F et al., Pharmacokinetic Modeling of Intra-arter…, Clinical neuroradiology (2017) | popPK | 8 | [10.1007/s00062-015-0464-1](https://doi.org/10.1007/s00062-015-0464-1) | [26350588](https://pubmed.ncbi.nlm.nih.gov/26350588) | The paper describes a pharmacokinetic model for nimodipine and mentions a clearance value (70 l/h) in the abstract, but lacks the full set of quantitative disposition parameters (V, Q, ka) typically required for extraction. |
| `Wu_2014.pdf` | Wu C et al., Effect of natural borneol on the pharma…, European journal of drug me… (2014) | popPK | 8 | [10.1007/s13318-013-0135-z](https://doi.org/10.1007/s13318-013-0135-z) | [23673491](https://pubmed.ncbi.nlm.nih.gov/23673491) | The study reports quantitative PK parameters (AUC) for nimodipine in mice, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| `Diochot_1995.pdf` | Diochot S et al., Dihydropyridines, phenylalkylamines and…, Pflugers Archiv : European… (1995) | pd | 4 | [10.1007/BF00374372](https://doi.org/10.1007/BF00374372) | [8584405](https://www.ncbi.nlm.nih.gov/pubmed/8584405) | metadata signals extractable PD data (EC50) |
| `Hamilton_1987.pdf` | Hamilton SL et al., A comparison between the binding and el…, Molecular pharmacology (1987) | pd | 4 | not captured | [2436031](https://www.ncbi.nlm.nih.gov/pubmed/2436031) | metadata signals extractable PD data (EC50) |
| `Hu_2022.pdf` | Hu X et al., The effect of CYP3A4 genetic polymorphi…, Chemico-biological interact… (2022) | pgx | 8 | [10.1016/j.cbi.2022.110123](https://doi.org/10.1016/j.cbi.2022.110123) | [36007633](https://www.ncbi.nlm.nih.gov/pubmed/36007633) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Liu_2000.pdf` | Liu XQ et al., Enzyme kinetics and inhibition of nimod…, Acta pharmacologica Sinica (2000) | pgx | 8 | not captured | [11501176](https://www.ncbi.nlm.nih.gov/pubmed/11501176) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Ye_2024.pdf` | Ye F et al., Gene Polymorphisms and Drug-Drug Intera…, The Journal of pharmacology… (2024) | pgx | 8 | [10.1124/jpet.123.001767](https://doi.org/10.1124/jpet.123.001767) | [37863485](https://www.ncbi.nlm.nih.gov/pubmed/37863485) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhao_2009.pdf` | Zhao Y et al., Effects of CYP3A5, MDR1 and CACNA1C pol…, European journal of clinica… (2009) | pgx | 8 | [10.1007/s00228-009-0619-6](https://doi.org/10.1007/s00228-009-0619-6) | [19205682](https://www.ncbi.nlm.nih.gov/pubmed/19205682) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Zhou_2014.pdf` | Zhou YT et al., Pharmacokinetic drug-drug interactions…, Therapeutics and clinical r… (2014) | pgx | 8 | [10.2147/TCRM.S55512](https://doi.org/10.2147/TCRM.S55512) | [24379677](https://www.ncbi.nlm.nih.gov/pubmed/24379677) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Bailey_2004.pdf` | Bailey DG et al., Interactions between grapefruit juice a…, American journal of cardiov… (2004) | pgx | 7 | [10.2165/00129784-200404050-00002](https://doi.org/10.2165/00129784-200404050-00002) | [15449971](https://www.ncbi.nlm.nih.gov/pubmed/15449971) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chen_2025.pdf` | Chen X et al., Inhibitory effects of nimodipine, nitre…, Biochemical pharmacology (2025) | pgx | 7 | [10.1016/j.bcp.2025.116854](https://doi.org/10.1016/j.bcp.2025.116854) | [40054784](https://www.ncbi.nlm.nih.gov/pubmed/40054784) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Cho_2011.pdf` | Cho YA et al., Effects of the antioxidant baicalein on…, Pharmacological reports : PR (2011) | pgx | 7 | [10.1016/s1734-1140(11)70624-7](https://doi.org/10.1016/s1734-1140(11)70624-7) | [22001996](https://www.ncbi.nlm.nih.gov/pubmed/22001996) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lee_2012.pdf` | Lee CK et al., Effects of pravastatin on the pharmacok…, Indian journal of pharmacol… (2012) | pgx | 7 | [10.4103/0253-7613.100395](https://doi.org/10.4103/0253-7613.100395) | [23112426](https://www.ncbi.nlm.nih.gov/pubmed/23112426) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-29T11:08:26.239103+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Bailey_2004 | not_relevant | 0 | 0 | The paper discusses drug-food interactions (grapefruit juice) and does not report any pharmacogenomic effects (gene variants) on nimodipine PK/PD. |
| popPK | Bellapart_2026 | relevant | 10 | 0 | The paper describes a population PK study for nimodipine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| PGx | Bozdag_2024 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (dexamethasone) in an animal model, not a pharmacogenomic effect of a gene variant on nimodipine PK/PD. |
| PGx | Chen_2023 | not_relevant | 0 | 0 | The study investigates the mechanism of breviscapine in cerebral ischemia and does not report any pharmacogenomic effects on the PK or PD of nimodipine. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP3A4 inhibition) affecting tamoxifen PK, not the effect of a gene variant on nimodipine PK/PD. |
| PGx | Cho_2011 | not_relevant | 0 | 0 | The study investigates the effect of a chemical inhibitor (baicalein) on nimodipine pharmacokinetics, not the effect of a genetic variant or genotype. |
| PGx | Clough_2022 | not_relevant | 2 | 0 | The text is an abstract for a review article that mentions pharmacogenetic impact but does not report specific gene variants or quantitative PK/PD effect sizes. |
| popPK | Crespo_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of vascular reactivity in aortic rings, not a pharmacokinetic study, and reports no disposition parameters for nimodipine. |
| popPK | Cui_2016 | irrelevant | 0 | 0 | The paper is a virology study on cyclopiazonic acid where nimodipine is only mentioned as a negative control calcium channel blocker, with no pharmacokinetic data reported. |
| PD | Cui_2016 | not_relevant | 0 | 0 | The paper focuses on cyclopiazonic acid and only mentions nimodipine as a negative control (calcium channel blocker) that did not inhibit RSV, providing no PD parameters or exposure-response data for nimodipine. |
| popPK | Diochot_1995 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Diochot_1995 | not_relevant | 0 | 0 | The paper describes electrophysiological mechanisms of calcium channel blockers on different calcium current types and does not report pharmacokinetic or pharmacodynamic exposure-response relationships or numeric PD parameters for nimodipine. |
| popPK | Fleishaker_1994 | irrelevant | 2 | 0 | The study focuses on tirilazad mesylate as the primary subject with specific PK values, while nimodipine is a co-administered agent for which no quantitative disposition parameters (CL, V, etc.) are reported in the evidence. |
| PD | Fleishaker_1994 | not_relevant | 1 | 0 | The paper reports only qualitative hemodynamic changes (slight heart rate increase) and PK parameters, without providing numeric PD parameters or a quantitative exposure-response relationship. |
| PGx | Fuhr_1998 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with grapefruit juice, not pharmacogenomic effects of gene variants on nimodipine PK/PD. |
| PGx | Gepdiremen_2002 | not_relevant | 0 | 0 | The paper investigates the neuroprotective effects of nimodipine in a cell culture model and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Hamilton_1987 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| popPK | Hirasawa_2003 | irrelevant | 0 | 0 | The study focuses on the neurophysiological mechanism of nifedipine, with nimodipine serving only as a negative comparator, and contains no pharmacokinetic data. |
| PD | Hirasawa_2003 | not_relevant | 0 | 0 | The paper reports PD parameters for nifedipine, not nimodipine; nimodipine is only mentioned as a control that did not mimic the effect. |
| PGx | Hu_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of istradefylline, not nimodipine; nimodipine is only mentioned as an interacting drug. |
| PGx | James_2020 | not_relevant | 3 | 2 | The paper is a case report describing an adverse event (bradycardia) in a patient with CYP3A5*3/*3 genotype, but it does not report quantitative pharmacokinetic or pharmacodynamic parameter changes attributable to the genotype. |
| PGx | Kaamini_2024 | not_relevant | 0 | 0 | The text is a letter to the editor discussing alternative drugs and the general concept of personalized medicine, without reporting specific pharmacogenomic data or PK/PD parameters for nimodipine. |
| popPK | Kenny_1990 | irrelevant | 0 | 0 | The study is a pharmacological investigation of calcium channel antagonism in isolated tissues and binding assays, not a pharmacokinetic study, and nimodipine is used only as a comparator agent. |
| PD | Kenny_1990 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of fluspirilene; nimodipine is only mentioned as a reference compound for potency in a functional assay, with no exposure-response or PD model parameters reported for it. |
| PGx | Kong_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of cyclosporine (CYP3A4 variants) and the drug-drug interaction of nimodipine on cyclosporine, but does not report how genetic variants affect the pharmacokinetics or pharmacodynamics of nimodipine itself. |
| PGx | Lee_2012 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (pravastatin) in rats, not a pharmacogenomic effect of a gene variant on nimodipine PK/PD. |
| PGx | Liu_2000 | not_relevant | 2 | 0 | The paper reports in vitro enzyme kinetics and inhibitor studies in pooled/individual liver microsomes but does not report a specific gene variant/genotype effect on a PK or PD parameter. |
| PGx | Mahmoud_2020 | not_relevant | 5 | 0 | The paper mentions CYP3A5 genetic polymorphism as a source of variability but does not provide specific quantitative data or fitted effect sizes for genotype-specific PK parameters. |
| PGx | Onoda_1989 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interaction between calcium channel blockers and cisplatin in tumor models, but does not report any pharmacogenomic effects (gene variants) on the PK or PD of nimodipine. |
| PGx | Pachl_2005 | not_relevant | 0 | 0 | The study evaluates the clinical efficacy of sodium nitroprusside in subarachnoid hemorrhage and does not investigate pharmacogenomic effects on nimodipine pharmacokinetics or pharmacodynamics. |
| popPK | Pottkämper_2024 | irrelevant | 0 | 0 | The study is a clinical trial assessing the therapeutic effects of nimodipine on postictal recovery, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Román_2021 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contraction in aortic rings, not a pharmacokinetic study, and reports no disposition parameters for nimodipine. |
| popPK | Sczekan_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium release in rat brain microsomes, not a pharmacokinetic study, and nimodipine is used as a comparator agent. |
| popPK | Seker_2017 | relevant | 8 | 2 | The paper describes a pharmacokinetic model for nimodipine and mentions a clearance value (70 l/h) in the abstract, but lacks the full set of quantitative disposition parameters (V, Q, ka) typically required for extraction. |
| popPK | Shi_1997 | relevant | 9 | 1 | The study reports a two-compartment PK model for nimodipine, but the specific numeric parameter values are located in Table 1 and Figure 1, which are not included in the provided evidence. |
| PGx | Siller-Matula_2008 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction between clopidogrel and calcium channel blockers (including nimodipine) affecting clopidogrel's pharmacodynamics, but it does not report any pharmacogenomic effects (gene variants) on nimodipine's PK or PD parameters. |
| popPK | Song_2022 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology investigation using nimodipine as a pharmacological tool to block calcium channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Stoehr_2025 | irrelevant | 0 | 0 | The study is a clinical observational analysis of hemodynamic effects (blood pressure and autoregulation) and functional outcomes, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Terziivanov_1999 | relevant | 10 | 2 | The paper is a population PK study of nimodipine, but the evidence only provides variability metrics (CVs) and model validation statistics, lacking the specific central parameter estimates (CL, V, Q, ka) required for extraction. |
| PGx | Vetulani_2001 | not_relevant | 0 | 0 | The paper is a review of pharmacotherapy strategies for addiction and mentions nimodipine only as a mechanism-based example, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Vázquez-Medina_2024 | not_relevant | 0 | 0 | The paper investigates the association between dose reductions and clinical outcomes, not the effect of specific gene variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Wu_2014 | relevant | 8 | 2 | The study reports quantitative PK parameters (AUC) for nimodipine in mice, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text. |
| popPK | Xia_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of calcium channels in cell lines where nimodipine is used only as a pharmacological probe, not a PK study. |
| PGx | Xia_2024 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (nimodipine inhibiting ivacaftor metabolism) and does not report any pharmacogenomic effects (gene variants) on nimodipine's PK or PD parameters. |
| PGx | Ye_2024 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of blonanserin, not nimodipine; nimodipine is only mentioned as an inhibitor of blonanserin metabolism. |
| PGx | Zhou_2001 | not_relevant | 0 | 0 | The paper studies the metabolism of propafenone in rat microsomes and mentions nimodipine only as an inhibitor of propafenone metabolism, not as the subject of a pharmacogenomic study. |
| PGx | Zhou_2014 | not_relevant | 2 | 0 | The paper is a review of drug-drug interactions between DHP-CCBs and statins; it mentions CYP3A5 status only as a general factor in DDI strength without reporting specific pharmacogenomic effect sizes on nimodipine PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 11:08 UTC</sub>
