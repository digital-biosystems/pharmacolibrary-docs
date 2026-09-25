<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;celecoxib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Celecoxib_Dhondt2017_reference&quot;,&quot;label&quot;:&quot;Dhondt_2017_reference&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Dhondt2017_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Hannam2023_reference&quot;,&quot;label&quot;:&quot;Hannam_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Hannam2023_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Celecoxib_Vaddady2011_reference&quot;,&quot;label&quot;:&quot;Vaddady_2011_reference&quot;,&quot;href&quot;:&quot;drugs/drug_celecoxib/Celecoxib_Vaddady2011_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# celecoxib

- **generic name:** celecoxib
- **ATC codes:** `C08CA51`, `L01XX33`, `M01AH01`, `N02AJ16`
- **DrugBank:** [DB00482](https://go.drugbank.com/drugs/DB00482)
- **groups:** approved, investigational

## About

**Description.** Celecoxib, a selective cyclooxygenase-2 (COX-2) inhibitor, is a nonsteroidal anti-inflammatory drug (NSAID) which is known for its decreased risk of causing gastrointestinal bleeding compared to other NSAIDS.[A181544] It is used to manage symptoms of various types of arthritis pain and in familial adenomatous polyposis (FAP) to reduce precancerous polyps in the colon.[A181532] It is marketed by Pfizer under the brand name Celebrex, and was initially granted FDA approval in 1998.[L7604] 

Interestingly, selective COX-2 inhibitors (especially celecoxib), have been evaluated as potential cancer chemopreventive and therapeutic drugs in clinical trials for a variety of malignancies.[A34124]

**Indication.** Celecoxib is indicated for symptomatic treatment of adult osteoarthritis (OA) and adult rheumatoid arthritis (RA).[L7646] Celecoxib is not a substitute for aspirin for cardiovascular event prophylaxis.[L7646] 

It may be also be used to treat acute pain from various sources, juvenile rheumatoid arthritis in children over 2, ankylosing spondylitis, and primary dysmenorrhea.[L7646]

Celecoxib, in combination with [tramadol], is indicated for the management of acute pain in adults severe enough to require an opioid analgesic and in whom alternative treatments are inadequate.[L38949]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 3/0/0 | 0/0/0 | 0/0/9 | not captured | not captured | 43 | 41/0 | 14/29 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.455). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Dhondt_2017_reference](drugs/drug_celecoxib/Celecoxib_Dhondt2017_reference.md) | Dhondt L et al., Comparative population pharmacokinetics…, Scientific reports (2017) | [10.1038/s41598-017-12159-z](https://doi.org/10.1038/s41598-017-12159-z) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Hannam_2023_reference](drugs/drug_celecoxib/Celecoxib_Hannam2023_reference.md) | Hannam JA et al., Modeling adult COX-2 cerebrospinal flui…, Paediatric anaesthesia (2023) | [10.1111/pan.14590](https://doi.org/10.1111/pan.14590) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.429). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Vaddady_2011_reference](drugs/drug_celecoxib/Celecoxib_Vaddady2011_reference.md) | Vaddady PK et al., Pharmacokinetics of a combination of Δ9…, Biopharmaceutics & drug dis… (2011) | [10.1002/bdd.740](https://doi.org/10.1002/bdd.740) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C8** | `Q22` · CL | metabolism | [Agúndez_2009](drugs/drug_celecoxib/pgx_Ag_ndez_2009_CYP2C8_Q22.md) | Agúndez JA et al., Genetically based impairment in CYP2C8-…, Expert opinion on drug meta… (2009) | [10.1517/17425250902970998](https://doi.org/10.1517/17425250902970998) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C9** | `Q22` · CL | metabolism | [Agúndez_2009](drugs/drug_celecoxib/pgx_Ag_ndez_2009_CYP2C9_Q22.md) | Agúndez JA et al., Genetically based impairment in CYP2C8-…, Expert opinion on drug meta… (2009) | [10.1517/17425250902970998](https://doi.org/10.1517/17425250902970998) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C9** | `Q22` · CL | metabolism | [Kim_2017](drugs/drug_celecoxib/pgx_Kim_2017_CYP2C9_Q22.md) | Kim SH et al., Effects of CYP2C9 genetic polymorphisms…, Archives of pharmacal resea… (2017) | [10.1007/s12272-016-0861-2](https://doi.org/10.1007/s12272-016-0861-2) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **CYP2C9** | `Q22` · CL | metabolism | [Kirchheiner_2005](drugs/drug_celecoxib/pgx_Kirchheiner_2005_CYP2C9_Q22.md) | Kirchheiner J et al., Clinical consequences of cytochrome P45…, Clinical pharmacology and t… (2005) | [10.1016/j.clpt.2004.08.009](https://doi.org/10.1016/j.clpt.2004.08.009) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2C19** | `Q22` · CL | metabolism | [Lagishetty_2016](drugs/drug_celecoxib/pgx_Lagishetty_2016_CYP2C19_Q22.md) | Lagishetty CV et al., How Informative Are Drug-Drug Interacti…, Journal of clinical pharmac… (2016) | [10.1002/jcph.743](https://doi.org/10.1002/jcph.743) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2C9** | `Q22` · CL | metabolism | [Lagishetty_2016](drugs/drug_celecoxib/pgx_Lagishetty_2016_CYP2C9_Q22.md) | Lagishetty CV et al., How Informative Are Drug-Drug Interacti…, Journal of clinical pharmac… (2016) | [10.1002/jcph.743](https://doi.org/10.1002/jcph.743) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2D6** | `Q22` · CL | metabolism | [Lagishetty_2016](drugs/drug_celecoxib/pgx_Lagishetty_2016_CYP2D6_Q22.md) | Lagishetty CV et al., How Informative Are Drug-Drug Interacti…, Journal of clinical pharmac… (2016) | [10.1002/jcph.743](https://doi.org/10.1002/jcph.743) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2C8** | `Q22` · CL | metabolism | [Martínez_2006](drugs/drug_celecoxib/pgx_Mart_nez_2006_CYP2C8_Q22.md) | Martínez C et al., [Clinical pharmacogenomics for CYP2C8 a…, Farmacia hospitalaria : org… (2006) | [10.1016/s1130-6343(06)73982-4](https://doi.org/10.1016/s1130-6343(06)73982-4) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span> | **CYP2C9** | `Q22` · CL | metabolism | [Martínez_2006](drugs/drug_celecoxib/pgx_Mart_nez_2006_CYP2C9_Q22.md) | Martínez C et al., [Clinical pharmacogenomics for CYP2C8 a…, Farmacia hospitalaria : org… (2006) | [10.1016/s1130-6343(06)73982-4](https://doi.org/10.1016/s1130-6343(06)73982-4) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=celecoxib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` metabolism, `CYP2C8` metabolism/substrate, `CYP2C9` metabolism/substrate, `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…nts (&lt;3%) of the unchanged drug found in both the urine and feces.[A4983] About 57% of an…”</sub> | prose |
| excretion | kidney | `ABCC4` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor, `ABCC4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CA2 (inhibitor), CA3 (inhibitor), CDH11 (inhibitor), NEU1 (inhibitor), PDPK1 (inhibitor), PTGS2 (inhibitor), STAT3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 800 matched, 70 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahlström_2007 | not_relevant | 0 | 0 | The paper investigates computational docking and in vitro metabolism of celecoxib by recombinant CYP2C9, but does not report clinical pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Amrite_2008 | relevant | 9 | 2 | The study reports quantitative compartmental PK parameters for celecoxib, but the specific numeric values are located in Table 1, which is not included in the provided evidence. |
| PD | Arzuk_2024 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study investigating NLRP1 inflammasome pathways and cytotoxicity, lacking any population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| popPK | Balap_2016 | irrelevant | 0 | 0 | Celecoxib is used only as an internal standard for HPLC analysis, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Baothman_2018 | not_relevant | 0 | 0 | The paper is an in vitro mechanistic study investigating COX isoform expression and inhibition in human lung mast cells, not a population pharmacodynamic or exposure-response modeling study. |
| popPK | Choy_2026 | irrelevant | not captured | not captured | The paper only reports mean trough plasma concentrations at two time points and lacks any population or compartmental pharmacokinetic modeling or disposition parameters. |
| PGx | Costa_2019 | not_relevant | 2 | 8 | The study reports no significant difference in plasma protein binding for celecoxib between albumin genotypes, thus failing to demonstrate a pharmacogenomic effect. |
| PD | Davies_2000 | not_relevant | 0 | 0 | The text is a clinical review summarizing pharmacokinetic properties and in vitro PD data (IC50), but it does not report a population pharmacodynamic or exposure-response model with estimated parameters. |
| PGx | Davies_2000 | not_relevant | 0 | 0 | The text describes general clinical pharmacokinetics and analytical methods for celecoxib but does not report any gene variants or pharmacogenomic effects on PK/PD parameters. |
| PD | Du_2011 | not_relevant | 0 | 0 | The paper reports in vitro electrophysiology experiments on ion channels, not a population pharmacodynamic or exposure-response model. |
| PGx | Fung_1999 | not_relevant | 1 | 0 | The paper mentions that celecoxib is metabolized by CYP2C9 but does not report any study data on how genetic variants in this gene affect pharmacokinetic or pharmacodynamic parameters. |
| PGx | Grimsrud_2022 | not_relevant | 2 | 1 | The paper lists celecoxib as a drug metabolized by CYP2C9 and reports genotype frequencies in patients, but does not present any measured or modeled pharmacokinetic/pharmacodynamic data for celecoxib itself. |
| PD | Grosser_2017 | not_relevant | 0 | 0 | The text is a review article discussing mechanisms and clinical trial outcomes, not a primary research paper reporting a population pharmacodynamic model with estimated parameters for celecoxib. |
| PGx | He_2018 | not_relevant | 0 | 10 | The study investigates a drug-drug interaction (celecoxib inhibiting agomelatine metabolism) rather than a pharmacogenomic effect of a gene variant on celecoxib's PK/PD parameters. |
| PGx | Hersh_2004 | not_relevant | 2 | 1 | The paper mentions CYP2C9 polymorphisms for celecoxib only as a theoretical background for potential toxicity in poor metabolizers, without reporting specific data or effects on PK/PD parameters. |
| PGx | Imbimbo_2009 | not_relevant | 0 | 0 | The paper discusses the interaction between ApoE genotype and clinical efficacy (AD risk) of NSAIDs, but does not report changes in pharmacokinetic or pharmacodynamic parameters of celecoxib. |
| PGx | Jayasagar_2003 | not_relevant | 0 | 10 | The study investigates a drug-drug interaction (rifampicin inducing CYP2C9) rather than a pharmacogenomic effect based on genetic variants. |
| popPK | Jiang_2020 | relevant | 8 | 2 | The study reports PK parameters for celecoxib, but specific disposition values (CL, V) are not explicitly listed in the text; only AUC and Cmax are provided, with other parameters likely residing in excluded figures or supplementary material. |
| PD | Johnsen_2005 | not_relevant | 1 | 0 | The paper reports preclinical in vitro and in vivo efficacy studies (IC50, tumor growth inhibition) but does not perform population pharmacodynamic or exposure-response modeling with estimated parameters. |
| PD | Klein_2007 | not_relevant | 0 | 0 | The paper reports in vitro and ex vivo mechanistic studies (isolated organs, enzyme assays) rather than a population pharmacodynamic or exposure-response model in humans or animals with estimated PD parameters. |
| PD | Loiola_2011 | not_relevant | 0 | 0 | The paper is an in vitro/ex vivo mechanistic study using isolated rat tissues, not a population pharmacodynamic modeling study estimating exposure-response parameters for celecoxib. |
| PD | Lomnicka_2003 | not_relevant | 2 | 3 | The study reports on dose-response relationships in an animal model (rabbits) using administered doses rather than measured drug exposures, and lacks population pharmacokinetic/pharmacodynamic modeling or inter-individual variability analysis. |
| PD | Maier_2008 | not_relevant | 1 | 2 | The paper reports in vitro and ex vivo pharmacological assays with simple curve fitting for IC50/ED50, but does not perform population pharmacodynamic or exposure-response modeling. |
| PD | Moon_2022 | not_relevant | 1 | 0 | The study is a pharmacokinetic interaction trial reporting exposure metrics (AUC, Cmax) but does not develop or report a population pharmacodynamic or exposure-response model for celecoxib. |
| PD | Park_2025 | not_relevant | 0 | 0 | The paper is a preclinical mechanistic study using in vitro assays and animal models, lacking population pharmacokinetic/pharmacodynamic modeling or exposure-response analysis. |
| PGx | Ramírez_2019 | not_relevant | 0 | 10 | The study investigates a drug-drug interaction (capecitabine affecting celecoxib PK), not a pharmacogenomic effect driven by gene variants or genotypes. |
| PGx | Rodrigues_2005 | not_relevant | 2 | 1 | The text discusses celecoxib only in the context of theoretical expectations and literature review, without reporting original data on how genotype changes its PK or PD parameters. |
| PD | Slattery_2001 | not_relevant | 1 | 2 | This is an in vitro pharmacology study measuring direct concentration-response (EC50) on isolated tissue, not a population pharmacokinetic/pharmacodynamic modeling study estimating exposure-response parameters in vivo. |
| PD | Vera_2014 | not_relevant | 0 | 0 | The paper describes the development and characterization of celecoxib delivery systems (microspheres and nanoparticles) using in vitro release studies and cell culture assays, but does not report a population pharmacodynamic or exposure-response model. |
| PGx | Wang_2009 | not_relevant | 2 | 1 | The text identifies celecoxib as a CYP2C9 substrate and discusses general enzyme kinetics for variants, but does not report specific PK/PD parameter changes for celecoxib associated with genotypes. |
| popPK | Yan_2025 | irrelevant | not captured | not captured | Celecoxib is used only as a receptor-blocking agent to validate a PET radioligand, with no quantitative pharmacokinetic parameters reported for it. |
| popPK | Yellepeddi_2018 | irrelevant | not captured | not captured | The study reports non-compartmental prostate tissue pharmacokinetics in rats rather than population or compartmental systemic disposition parameters. |
| PGx | Zhou_2009 | not_relevant | 0 | 0 | The paper is a review of CYP2C9 structure and function that lists celecoxib as a substrate but does not report specific pharmacogenomic data or quantitative PK/PD effects for celecoxib. |
| PGx | Zobdeh_2022 | not_relevant | 2 | 1 | The paper is a systematic review that lists celecoxib/CYP2C9 as a relevant interaction but does not report specific quantitative PK/PD parameter changes or effect sizes for this pair. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-22 20:45 UTC</sub>
