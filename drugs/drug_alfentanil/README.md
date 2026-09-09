# alfentanil

- **generic name:** alfentanil
- **ATC codes:** `N01AH02`
- **DrugBank:** [DB00802](https://go.drugbank.com/drugs/DB00802)
- **groups:** approved, illicit, investigational

## About

**Description.** A short-acting opioid anesthetic and analgesic derivative of fentanyl. It produces an early peak analgesic effect and fast recovery of consciousness. Alfentanil is effective as an anesthetic during surgery, for supplementation of analgesia during surgical procedures, and as an analgesic for critically ill patients.

**Indication.** For the management of postoperative pain and the maintenance of general anesthesia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/1/0 | 1/1/0 | 0/0/9 | not captured | not captured | 39 | 34/0 | 11/28 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Davis_1986](drugs/drug_alfentanil/Alfentanil_Davis1986_reference.md) | Davis PJ et al., Clinical pharmacokinetics of the newer…, Clinical pharmacokinetics (1986) | [10.2165/00003088-198611010-00002](https://doi.org/10.2165/00003088-198611010-00002) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Vozeh_1990](drugs/drug_alfentanil/Alfentanil_Vozeh1990_reference.md) | Vozeh S et al., Evaluation of population (NONMEM) pharm…, Journal of pharmacokinetics… (1990) | [10.1007/BF01063558](https://doi.org/10.1007/BF01063558) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Medina-Aymerich_2025](drugs/drug_alfentanil/Alfentanil_MedinaAymerich2025_reference.md) | Medina-Aymerich L et al., Population Pharmacokinetics of Alfentan…, Journal of clinical pharmac… (2025) | [10.1002/jcph.70044](https://doi.org/10.1002/jcph.70044) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Bouillon_1999](drugs/drug_alfentanil/pd_Bouillon_1999_PaCO2.md) | Bouillon T et al., Pharmacokinetic-pharmacodynamic modelin…, Anesthesiology (1999) | [10.1097/00000542-199907000-00023](https://doi.org/10.1097/00000542-199907000-00023) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Liou_2023](drugs/drug_alfentanil/pd_Liou_2023_LOR.md) | Liou JY et al., Pharmacodynamic modeling of moderate se…, BMC pharmacology & toxicolo… (2023) | [10.1186/s40360-023-00642-5](https://doi.org/10.1186/s40360-023-00642-5) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q321` · EC50 | target | [Ginosar_2009](drugs/drug_alfentanil/pgx_Ginosar_2009_OPRM1_Q321.md) | Ginosar Y et al., Mu-opioid receptor (A118G) single-nucle…, British journal of anaesthe… (2009) | [10.1093/bja/aep192](https://doi.org/10.1093/bja/aep192) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP3A5** | `Q22` · CL | metabolism | [Klees_2005](drugs/drug_alfentanil/pgx_Klees_2005_CYP3A5_Q22.md) | Klees TM et al., Pharmacogenetic determinants of human l…, Anesthesiology (2005) | [10.1097/00000542-200503000-00012](https://doi.org/10.1097/00000542-200503000-00012) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Lilic_2024](drugs/drug_alfentanil/pgx_Lilic_2024_OPRM1_Q100.md) | Lilic J et al., The Impact of Opioid Receptor Gene Poly…, Pharmacogenomics and person… (2024) | [10.2147/PGPM.S443035](https://doi.org/10.2147/PGPM.S443035) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q22` · CL | metabolism | [Lötsch_2004](drugs/drug_alfentanil/pgx_L_tsch_2004_CYP2D6_Q22.md) | Lötsch J et al., Genetic predictors of the clinical resp…, Clinical pharmacokinetics (2004) | [10.2165/00003088-200443140-00003](https://doi.org/10.2165/00003088-200443140-00003) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q305` · kfm | formation | [Lötsch_2004](drugs/drug_alfentanil/pgx_L_tsch_2004_CYP2D6_Q305.md) | Lötsch J et al., Genetic predictors of the clinical resp…, Clinical pharmacokinetics (2004) | [10.2165/00003088-200443140-00003](https://doi.org/10.2165/00003088-200443140-00003) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **MDR1** | `Q22` · CL | transport | [Lötsch_2004](drugs/drug_alfentanil/pgx_L_tsch_2004_MDR1_Q22.md) | Lötsch J et al., Genetic predictors of the clinical resp…, Clinical pharmacokinetics (2004) | [10.2165/00003088-200443140-00003](https://doi.org/10.2165/00003088-200443140-00003) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q321` · EC50 | target | [Lötsch_2004](drugs/drug_alfentanil/pgx_L_tsch_2004_OPRM1_Q321.md) | Lötsch J et al., Genetic predictors of the clinical resp…, Clinical pharmacokinetics (2004) | [10.2165/00003088-200443140-00003](https://doi.org/10.2165/00003088-200443140-00003) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q321` · EC50 | target | [Lötsch_2005_2](drugs/drug_alfentanil/pgx_L_tsch_2005_2_OPRM1_Q321.md) | Lötsch (2005) | — |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q321` · EC50 | target | [Oertel_2008](drugs/drug_alfentanil/pgx_Oertel_2008_OPRM1_Q321.md) | Oertel BG et al., Differential opioid action on sensory a…, Clinical pharmacology and t… (2008) | [10.1038/sj.clpt.6100441](https://doi.org/10.1038/sj.clpt.6100441) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 466 matched, 87 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Medina-Aymerich_2025.pdf` | Medina-Aymerich L et al., Population Pharmacokinetics of Alfentan…, Journal of clinical pharmac… (2025) | popPK | 10 | [10.1002/jcph.70044](https://doi.org/10.1002/jcph.70044) | [40377652](https://pubmed.ncbi.nlm.nih.gov/40377652) | The abstract explicitly reports a NONMEM-based population pharmacokinetic analysis of alfentanil in children, providing quantitative clearance parameters and model structure. |

<sub>queue written 2026-07-22T06:01:43.134129+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Angst_2010 | not_relevant | 0 | 0 | The paper describes a study protocol and feasibility results for estimating heritability of opioid response using twins, but does not report specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| PD | Beers_2004 | not_relevant | 1 | 0 | The text is a review of remifentanil pharmacokinetics and pharmacodynamics, mentioning alfentanil only for comparison; it does not report a population PD model or estimated parameters for alfentanil. |
| PGx | Bodenham_1988 | not_relevant | 1 | 0 | The text explicitly states that the importance of pharmacogenetic differences remains to be elucidated and discusses only physiological factors (age, disease) affecting PK/PD. |
| PGx | Cottrill_2021 | not_relevant | 2 | 1 | The paper reports genotype-phenotype classifications (e.g., poor metabolizer) based on literature for alfentanil metabolism via CYP3A4/5, but does not present original experimental data measuring actual pharmacokinetic or pharmacodynamic parameters of alfentanil in the study subjects. |
| PD | Cox_1997 | not_relevant | 2 | 8 | The study reports individual PK/PD modeling (n=7) rather than population pharmacodynamic modeling, although it provides estimated PD parameters. |
| PD | Egan_1995 | not_relevant | 2 | 1 | The paper is a review of remifentanil (not alfentanil) and focuses on pharmacokinetics; it mentions PD parameters like EC50 and t1/2ke0 as descriptive values rather than reporting a fitted population exposure-response model. |
| PGx | Henthorn_1989 | not_relevant | 0 | 0 | no full text |
| PGx | Hohmann_2016 | not_relevant | 2 | 1 | The text mentions alfentanil only as a probe drug for CYP3A phenotyping and does not report specific pharmacogenomic effects of gene variants on its PK/PD parameters. |
| PD | Ing_2012 | not_relevant | 2 | 0 | This is a review article summarizing PK/PD concepts and literature for various opioids; it does not report original population PD modeling or estimated parameters for alfentanil. |
| PGx | Lavrijsen_1988 | not_relevant | 0 | 0 | no full text |
| PD | Lemmens_1994 | not_relevant | 2 | 8 | The paper focuses on trefentanil and uses alfentanil only as a comparator in a small crossover study (n=5) using individual subject modeling rather than population pharmacodynamic analysis. |
| PD | Lemmens_1995 | not_relevant | 2 | 1 | The text is a narrative review summarizing pharmacokinetic and pharmacodynamic characteristics of opioids, citing literature values (e.g., Cp50) rather than reporting original population PD modeling or estimated parameters. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper focuses on voriconazole pharmacokinetics and its interaction with CYP3A4 substrates; alfentanil is only mentioned as a probe substrate for model validation of the drug-drug interaction, not as the primary subject of pharmacogenomic analysis. |
| popPK | Liu_2024 | irrelevant | not captured | not captured | Alfentanil is only co-administered and influences the PK of NH600001, with no quantitative PK parameters reported for alfentanil itself. |
| PD | Liu_2024 | not_relevant | 0 | 0 | The paper reports a population PK/PD model for NH600001, not alfentanil; alfentanil is only mentioned as a co-administered drug influencing NH600001 pharmacokinetics. |
| PGx | Lv_2018 | not_relevant | 2 | 10 | The study investigates sufentanil, not alfentanil; although alfentanil is mentioned in the background as a CYP3A4 substrate, no data on alfentanil PK/PD parameters are reported. |
| PD | Lötsch_2005 | not_relevant | 2 | 0 | The text is a review article describing general PK/PD modeling principles and citing historical studies, but it does not report new population PD model fitting or estimated parameters for alfentanil. |
| popPK | Mertens_2004 | irrelevant | 2 | 0 | The study reports population pharmacokinetic parameters for propofol, with alfentanil serving only as a covariate/comparator drug. |
| PGx | Meuldermans_1988 | not_relevant | 0 | 0 | no full text |
| PGx | Miller_1995 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on mivacurium metabolism, while alfentanil is only used as part of the background anesthesia regimen without any reported genetic interaction. |
| PD | Minto_2000 | not_relevant | 2 | 1 | The paper proposes a response-surface methodology for drug interactions using previously published data and simulations, rather than reporting a new population pharmacodynamic model with estimated parameters from primary data. |
| PD | Scholz_1996 | not_relevant | 2 | 1 | The text is a review article summarizing pharmacokinetic properties and clinical effects of opioids, but it does not report a new population pharmacodynamic model or estimated PD parameters for alfentanil. |
| PD | Sneyd_2022 | not_relevant | 0 | 0 | The paper is an editorial discussing clinical strategies for remifentanil shortages and does not report any population pharmacodynamic modeling or exposure-response analysis for alfentanil. |
| PD | Sundal_2020 | not_relevant | 0 | 0 | The text is a clinical case report discussing GHB withdrawal management and does not contain any population pharmacodynamic modeling or exposure-response analysis for alfentanil. |
| PD | Vuyk_1997 | not_relevant | 2 | 1 | The text is a review article summarizing existing literature and simulation results rather than reporting a new primary study with estimated population PD parameters for alfentanil. |
| PD | Willens_1993 | not_relevant | 0 | 0 | The paper is a general review of pharmacology and nursing care, not a primary research article reporting population PD modeling or exposure-response analysis. |
| PGx | Yun_1992 | not_relevant | 0 | 0 | no full text |
| PD | van_2020 | not_relevant | 2 | 1 | The paper is a review discussing utility functions and citing previous studies, but it does not report new population pharmacodynamic modeling or estimated PD parameters for alfentanil. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_alfentanil`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
