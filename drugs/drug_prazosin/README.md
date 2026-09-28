<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02C&quot;,&quot;href&quot;:&quot;atc/C02C.md&quot;},{&quot;label&quot;:&quot;prazosin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Prazosin_Grahnn1981_reference&quot;,&quot;label&quot;:&quot;Grahn\u00e9n_1981_reference&quot;,&quot;href&quot;:&quot;drugs/drug_prazosin/Prazosin_Grahnn1981_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prazosin_Meredith1985_reference&quot;,&quot;label&quot;:&quot;Meredith_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_prazosin/Prazosin_Meredith1985_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Prazosin_Rubin1979_reference&quot;,&quot;label&quot;:&quot;Rubin_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_prazosin/Prazosin_Rubin1979_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# prazosin

- **generic name:** prazosin
- **ATC codes:** `C02CA01`, `C02LE01`
- **DrugBank:** [DB00457](https://go.drugbank.com/drugs/DB00457) · **PubChem:** [CID 4893](https://pubchem.ncbi.nlm.nih.gov/compound/4893)
- **molar mass:** 383.4011 g/mol (C19H21N5O4) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Prazosin is a drug used to treat hypertension.  Prazosin is marketed by _Pfizer_ and was initially approved by the FDA in 1988.[L5828]  It belongs to the class of drugs known as alpha-1 antagonists.

Recently, many studies have evaluated the benefits of this drug in controlling the symptoms of post-traumatic stress disorder (PTSD) and associated nightmares.[A176618, A176621, A176624]

**Indication.** This drug is indicated for the treatment of hypertension (high blood pressure). Prazosin can be given alone or given with other blood pressure-lowering drugs, including diuretics or beta-adrenergic blocking agents [FDA label].

Prazosin does not negatively impact lung function, and therefore may be used to manage hypertension in patients who are asthmatic or patients with chronic obstructive lung disease (COPD)[A176630].

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prazosin | parent | 383.401 | C19H21N5O4 | DrugBank | [4893](https://pubchem.ncbi.nlm.nih.gov/compound/4893) | Grahnén_1981, Meredith_1985, Rubin_1979 |
| 1-hydroxy trimazosin | metabolite | 451.48 | C20H29N5O7 | PubChem | [139356](https://pubchem.ncbi.nlm.nih.gov/compound/139356) | Meredith_1985 |
| trimazosin | metabolite | 435.481 | C20H29N5O6 | PubChem | [37264](https://pubchem.ncbi.nlm.nih.gov/compound/37264) | Meredith_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-27 23:51 | 22:51 | 1/0/2 | 0/0/0 | 0/0/0 | 122,760/19,419 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 3/1 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.133). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Grahnén_1981_reference](drugs/drug_prazosin/Prazosin_Grahnn1981_reference.md) | 1-compartment, oral | 3 | Grahnén A et al., Prazosin kinetics in hypertension, Clinical pharmacology and t… (1981) | [10.1038/clpt.1981.186](https://doi.org/10.1038/clpt.1981.186) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Meredith_1985_reference](drugs/drug_prazosin/Prazosin_Meredith1985_reference.md) | parent + metabolite (no model) | 2 | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.231). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Rubin_1979_reference](drugs/drug_prazosin/Prazosin_Rubin1979_reference.md) | 1-compartment (no model) | 4 | Rubin P et al., Prazosin first-pass metabolism and hepa…, Journal of cardiovascular p… (1979) | [10.1097/00005344-197911000-00005](https://doi.org/10.1097/00005344-197911000-00005) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=prazosin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/modulator/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/modulator/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/modulator/substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/modulator/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/modulator/substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood | `ORM1` substrate | DrugBank actor |
| distribution | liver | `SLC22A3` inhibitor | DrugBank actor |
| distribution | placenta | `SLC22A3` inhibitor | DrugBank actor |
| distribution | skeletal muscle | `SLC22A3` inhibitor | DrugBank actor |
| metabolism | liver | `SLC22A1` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>“…This drug is mainly excreted in the bile and the feces [FDA label].…”</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (target), ADRA1D (target), ADRA2A (binder), ADRA2B (binder), KCNH2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 471 matched, 50 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Grahnén_1981.pdf` | Grahnén A et al., Prazosin kinetics in hypertension, Clinical pharmacology and t… (1981) | popPK | 10 | [10.1038/clpt.1981.186](https://doi.org/10.1038/clpt.1981.186) | [7285477](https://pubmed.ncbi.nlm.nih.gov/7285477) | The text explicitly reports quantitative PK parameters for prazosin including half-life, volume of distribution, clearance, and bioavailability. |
| `Rubin_1979.pdf` | Rubin P et al., Prazosin first-pass metabolism and hepa…, Journal of cardiovascular p… (1979) | popPK | 10 | [10.1097/00005344-197911000-00005](https://doi.org/10.1097/00005344-197911000-00005) | [94630](https://pubmed.ncbi.nlm.nih.gov/94630) | The study reports quantitative pharmacokinetic parameters (half-lives, volume of distribution, bioavailability, hepatic extraction) for prazosin in dogs, with all numeric values explicitly present in the text. |
| `Meredith_1985.pdf` | Meredith PA et al., Application of pharmacokinetic-pharmaco…, Journal of cardiovascular p… (1985) | popPK | 9 | [10.1097/00005344-198505000-00019](https://doi.org/10.1097/00005344-198505000-00019) | [2410686](https://pubmed.ncbi.nlm.nih.gov/2410686) | The study reports quantitative pharmacokinetic parameters (clearance and half-life) for prazosin in humans, with specific numeric values provided in the text. |
| `Huber_1998.pdf` | Huber TB et al., Catecholamines modulate podocyte functi…, Journal of the American Soc… (1998) | pd | 5 | [10.1681/ASN.V93335](https://doi.org/10.1681/ASN.V93335) | [9513895](https://www.ncbi.nlm.nih.gov/pubmed/9513895) | metadata signals extractable PD data (EC50) |
| `Snelder_2013.pdf` | Snelder N et al., PKPD modelling of the interrelationship…, British journal of pharmaco… (2013) | pd | 5 | [10.1111/bph.12190](https://doi.org/10.1111/bph.12190) | [23849040](https://www.ncbi.nlm.nih.gov/pubmed/23849040) | metadata signals extractable PD data (PKPD) |
| `Banks_2006.pdf` | Banks FC et al., The purinergic component of human vas d…, Fertility and sterility (2006) | pd | 4 | [10.1016/j.fertnstert.2005.09.024](https://doi.org/10.1016/j.fertnstert.2005.09.024) | [16580377](https://www.ncbi.nlm.nih.gov/pubmed/16580377) | metadata signals extractable PD data (EC50) |
| `Dantas_2014.pdf` | Dantas da Silva Júnior E et al., Effects of clonidine in the isolated ra…, European journal of pharmac… (2014) | pd | 4 | [10.1016/j.ejphar.2014.01.027](https://doi.org/10.1016/j.ejphar.2014.01.027) | [24485887](https://www.ncbi.nlm.nih.gov/pubmed/24485887) | metadata signals extractable PD data (Emax) |
| `Gupta_2006.pdf` | Gupta A et al., Cyclosporin A, tacrolimus and sirolimus…, Cancer chemotherapy and pha… (2006) | pgx | 7 | [10.1007/s00280-005-0173-6](https://doi.org/10.1007/s00280-005-0173-6) | [16404634](https://www.ncbi.nlm.nih.gov/pubmed/16404634) | metadata signals extractable PGX data (ABCG2, PK/PD-context) |

<sub>queue written 2026-09-27T23:41:21.756222+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Banks_2006 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| PD | Banks_2006 | not_relevant | 0 | 0 | The paper focuses on the purinergic component of vas deferens contraction and does not report any pharmacodynamic or exposure-response data for prazosin. |
| PGx | Cai_2010 | not_relevant | 0 | 0 | The paper investigates BCRP transporter mutations and their effect on drug transport, but does not report pharmacogenomic effects on the PK or PD parameters of prazosin itself. |
| PGx | Cerveny_2006 | not_relevant | 0 | 0 | The paper investigates antiepileptic drugs and uses prazosin only as a reference substrate for BCRP transport assays; it does not report pharmacogenomic effects on prazosin PK/PD. |
| popPK | Choi_2022 | irrelevant | 0 | 0 | The study is a pharmacodynamic pain model in rats where prazosin is used only as a receptor antagonist probe, not a pharmacokinetic study. |
| popPK | Choi_2023 | irrelevant | 0 | 0 | Prazosin is used only as a pharmacological tool to probe receptor mechanisms in an analgesic study, with no pharmacokinetic parameters reported. |
| popPK | Dale_1986 | irrelevant | 0 | 0 | The study is an in-vitro binding and distribution experiment using a dialysis system, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume for prazosin. |
| popPK | Dantas_2014 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| PD | Dantas_2014 | not_relevant | 0 | 0 | The paper investigates the effects of clonidine, not prazosin, and does not report any pharmacodynamic parameters for prazosin. |
| PGx | Dickens_2018 | not_relevant | 0 | 0 | The paper studies clozapine uptake and mentions prazosin only as a chemical inhibitor of that process, not as the subject of a pharmacogenomic study. |
| popPK | Donnelly_1989 | irrelevant | 2 | 0 | The text is a review or summary discussing PK-PD concepts without reporting specific quantitative pharmacokinetic parameter values (CL, V, ka, etc.) for prazosin. |
| PD | Donnelly_1989 | not_relevant | 3 | 0 | The text is a qualitative summary or abstract describing the existence of PK/PD relationships and integrated analysis methods, but it does not provide any specific numeric PD parameters (such as Emax, EC50, or slope) or data points from which they can be derived. |
| PGx | Giri_2009 | not_relevant | 0 | 0 | The paper investigates in vitro transporter interactions (BCRP) and does not report pharmacogenomic effects on prazosin PK/PD parameters. |
| PGx | Gupta_2006 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions involving BCRP inhibition by immunosuppressants, not the effect of a gene variant on prazosin pharmacokinetics or pharmacodynamics. |
| PGx | Henriksen_2005 | not_relevant | 0 | 0 | The paper investigates the structural role of cysteine residues in the ABCG2 transporter using BODIPY-prazosin as a substrate, but does not report pharmacogenomic effects on prazosin PK/PD parameters in humans. |
| PGx | Hiwase_2008 | not_relevant | 0 | 0 | The paper focuses on dasatinib and imatinib; prazosin is used only as a tool compound to inhibit OCT-1, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Horsey_2020 | not_relevant | 0 | 0 | The paper studies the biophysical binding of a fluorescent prazosin analog to the ABCG2 transporter in vitro, not the effect of genetic variants on prazosin pharmacokinetics or pharmacodynamics in humans. |
| popPK | Huber_1998 | irrelevant | 0 | 0 | no_text gate: only 41 chars of text extracted (&lt; 400) |
| PD | Huber_1998 | not_relevant | 0 | 0 | The provided text is a title regarding catecholamines and podocyte function, with no mention of prazosin or any pharmacodynamic parameters. |
| popPK | Juarez_2017 | irrelevant | 0 | 0 | The study is a mechanistic vascular physiology experiment using prazosin as a pharmacological tool to block receptors, not a pharmacokinetic study reporting disposition parameters. |
| PD | Juarez_2017 | not_relevant | 0 | 0 | The paper studies the effect of diet on vascular contractility using prazosin as a pharmacological tool to block receptors, but it does not report a pharmacodynamic exposure-response or dose-response relationship for prazosin itself (e.g., prazosin concentration vs. effect). |
| popPK | Keeshin_2017 | irrelevant | 0 | 0 | The paper is a retrospective clinical chart review of prazosin's efficacy and tolerability in pediatric PTSD, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Kester_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of isolated human prostate tissue focusing on receptor binding and contractile responses, not a pharmacokinetic study reporting disposition parameters for prazosin. |
| PGx | Konstandi_2006 | not_relevant | 0 | 0 | The paper investigates the regulation of CYP1A2 expression by adrenergic signaling and uses prazosin as a tool to block alpha-1 receptors, but it does not report a pharmacogenomic effect (gene variant) on the PK or PD of prazosin. |
| PGx | Litman_2000 | not_relevant | 0 | 0 | The paper studies the effect of ABCG2 overexpression on intracellular drug accumulation in cancer cell lines, not the pharmacokinetics or pharmacodynamics of prazosin in humans based on genetic variants. |
| popPK | Martins_2024 | irrelevant | 0 | 0 | The study focuses on the effects of prazosin on liver enzymes in alcohol use disorder and does not report any pharmacokinetic parameters. |
| PGx | Ni_2011 | not_relevant | 0 | 0 | The paper investigates the structural role of proline residues in the BCRP transporter using BODIPY-prazosin as a substrate, but does not report pharmacogenomic effects on prazosin PK/PD parameters in humans. |
| PGx | Pál_2007 | not_relevant | 0 | 0 | The paper investigates the role of cholesterol in ABCG2 transporter activity in vitro and does not report any pharmacogenomic effects of gene variants on prazosin pharmacokinetics or pharmacodynamics. |
| PGx | Ramirez_2011 | not_relevant | 0 | 0 | The paper investigates the genetic basis of fluoroquinolone toxicity in cats, using BODIPY-prazosin only as a fluorescent substrate to measure ABCG2 transporter function, not as the drug of interest for PK/PD analysis. |
| PGx | Robey_2009 | not_relevant | 0 | 0 | The paper investigates the interaction between becatecarin and the ABCG2 transporter in cancer cells, using prazosin derivatives only as probes for the transporter, not as the subject of pharmacogenomic analysis. |
| PGx | Robinson_2019 | not_relevant | 0 | 0 | The paper studies transporter coexpression in a cell line model using BODIPY-prazosin as a fluorescent substrate, not the pharmacokinetics or pharmacodynamics of the drug prazosin in humans. |
| PGx | Runwal_2025 | not_relevant | 0 | 0 | The paper investigates the effect of iron overload on BBB transporters and tight junctions, using prazosin only as a substrate to measure BCRP function, and does not report any pharmacogenomic effects on prazosin PK/PD. |
| popPK | Santagostino-Barbone_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of melatonin receptors where prazosin is used only as a comparator antagonist, with no pharmacokinetic parameters reported. |
| PD | Santagostino-Barbone_2000 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of 2-phenylmelatonin; prazosin is used only as a reference antagonist with no specific PD parameters reported for it. |
| popPK | Seda_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy for PTSD nightmares and contains no pharmacokinetic parameters for prazosin. |
| PGx | Shi_2009 | not_relevant | 0 | 0 | The paper investigates the interaction of AG1478 with ABC transporters using prazosin only as a fluorescent probe (BODIPY-prazosin) or photolabeling agent, not as the subject of pharmacogenomic analysis for its own PK/PD parameters. |
| PGx | Shukla_2014 | not_relevant | 0 | 0 | The paper focuses on pharmacophore modeling of nilotinib analogues and does not report pharmacogenomic effects on prazosin PK/PD. |
| popPK | Simpson_2018 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for alcohol use disorder and does not report any pharmacokinetic parameters for prazosin. |
| popPK | Snelder_2013 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| PD | Snelder_2013 | not_relevant | 0 | 0 | The paper focuses on the physiological interrelationship between BP, CO, and TPR in rats and does not mention prazosin or report any drug-specific exposure-response or dose-response parameters. |
| popPK | Sonders_1986 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of terazosin, with prazosin mentioned only as a comparator for half-life and bioavailability without providing quantitative PK parameters for prazosin. |
| PGx | Staud_2006 | not_relevant | 0 | 0 | The study investigates the role of the Bcrp transporter in transplacental pharmacokinetics using cimetidine as the primary model substrate and does not report pharmacogenomic effects on prazosin PK/PD parameters. |
| PGx | Sun_2023 | not_relevant | 2 | 5 | The study investigates transporter function in murine choroid plexus using a fluorescent probe (BODIPY FL-Prazosin) rather than the clinical pharmacokinetics of prazosin itself. |
| PGx | Ueda_2026 | not_relevant | 0 | 0 | The paper investigates placental transfer of lacosamide and perampanel and their effects on transporters, using prazosin only as a fluorescent substrate for BCRP assays, not as the drug of interest for pharmacogenomic analysis. |
| PGx | Valdameri_2012 | not_relevant | 0 | 0 | The paper focuses on ABCG2 inhibitors and uses prazosin only as a transport substrate for mechanistic studies, not as the primary drug for pharmacogenomic analysis. |
| popPK | Weiss_2009 | irrelevant | 1 | 0 | Prazosin is used as a radiolabeled probe to study receptor binding and pharmacodynamics in an in-vitro rat heart model, not as the subject drug for population pharmacokinetic parameter estimation. |
| PGx | Zaja_2016 | not_relevant | 0 | 0 | The paper characterizes the ABCG2 transporter in rainbow trout and notes prazosin as an activator, but it does not report a pharmacogenomic effect of a human gene variant on prazosin PK or PD parameters. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper investigates the inhibition of ABC transporters by HhAntag691, not the effect of a gene variant on the PK/PD of prazosin. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-27 23:41 UTC</sub>
