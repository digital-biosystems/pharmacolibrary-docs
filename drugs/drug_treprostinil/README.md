# treprostinil

- **generic name:** treprostinil
- **ATC codes:** `B01AC21`
- **DrugBank:** [DB00374](https://go.drugbank.com/drugs/DB00374)
- **groups:** approved, investigational

## About

**Description.** Treprostinil is a stable tricyclic analogue of prostacyclin[A248770] that promotes the vasodilation of pulmonary and systemic arterial vascular beds and the inhibition of platelet aggregation.[L41855,L41860,L41865] It reduces symptoms in patients with pulmonary arterial hypertension (PAH) and pulmonary hypertension associated with interstitial lung disease.[L41855,L41860] The first agent approved for the treatment of PAH was [epoprostenol], a synthetic prostacyclin that significantly increases patients' quality of life. However, the use of epoprostenol is limited due to its short half-life (3-5 min) and instability at room temperature.[A248770,A248775] The use of more stable alternatives such as treprostinil provides patients with PAH with more treatment options.

Treprostinil was approved by the FDA in 2002 for the treatment of pulmonary arterial hypertension.[L41860] It is available in the following routes of administration: subcutaneous, intravenous, inhaled and oral. The first generic form of treprostinil became available in 2019.[A248775]

**Indication.** The FDA has indicated treprostinil for the treatment of pulmonary arterial hypertension[L41855,L41860,L41865] and pulmonary hypertension associated with interstitial lung disease[L41855] to improve exercise ability. It is also used to treat pulmonary arterial hypertension in patients requiring transition from epoprostenol.[L41860] The Health Canada label specifies that treprostinil is indicated for the long-term treatment of pulmonary arterial hypertension in NYHA Class III and IV patients who did not respond adequately to conventional therapy.[L24244]

L24244

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 06:57 | 3:23 | 0/0/0 | 0/0/0 | 1/0/4 | 1,582/280 | ollama / qwen3.8:27b-q4_K_M | 12 | 0/12 | 12/0 | 0 |

## popPK records

_not available_

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_CYP2C9_safety.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CAMK2D** | `Q321` · EC50 | target | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_CAMK2D_Q321.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q27` · CL/F | metabolism | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_CYP2C8_Q27.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **GNG2** | `Q321` · EC50 | target | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_GNG2_Q321.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PFAS** | `Q321` · EC50 | target | [Coons_2023](drugs/drug_treprostinil/pgx_Coons_2023_PFAS_Q321.md) | Coons JC et al., Pharmacogenomics in the Management of P…, Pharmacogenomics and person… (2023) | [10.2147/PGPM.S361222](https://doi.org/10.2147/PGPM.S361222) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 42 matched, 41 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gotzkowsky_2010.pdf` | Gotzkowsky SK et al., Lack of a pharmacokinetic interaction b…, Journal of clinical pharmac… (2010) | pgx | 7 | [10.1177/0091270009351173](https://doi.org/10.1177/0091270009351173) | [20133511](https://www.ncbi.nlm.nih.gov/pubmed/20133511) | metadata signals extractable PGX data (CYP2C9, PK/PD-context) |

<sub>queue written 2026-09-06T06:57:24.566492+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Almazroo_2022 | not_relevant | 0 | 0 | The study investigates the effect of treprostinil on hepatic transporter expression in an animal model of ischemia-reperfusion injury, not the effect of a gene variant on treprostinil pharmacokinetics or pharmacodynamics. |
| popPK | Axelsen_2021 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of selexipag and its metabolite ACT-333679, not treprostinil. |
| PD | Axelsen_2021 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic drug-drug interaction study for selexipag (not treprostinil) and contains no pharmacodynamic or exposure-response modeling. |
| popPK | Briand_2019 | irrelevant | 0 | 0 | The paper is an in-silico and in-vitro enzyme inhibition study (CES1) and does not report pharmacokinetic disposition parameters (CL, V, etc.) for treprostinil. |
| PD | Briand_2019 | not_relevant | 0 | 0 | The paper reports an in vitro enzyme inhibition IC50 for treprostinil against CES1, which is a pharmacological potency metric, not a pharmacodynamic (exposure-response or dose-response) relationship for the drug's therapeutic effect. |
| popPK | Bubb_2014 | irrelevant | 0 | 0 | The study is a mechanistic/pharmacodynamic investigation of PDE2 inhibition in pulmonary hypertension where treprostinil is used only as a co-administered agent to test synergy, with no pharmacokinetic parameters reported. |
| PD | Bubb_2014 | not_relevant | 1 | 0 | The paper describes qualitative pharmacodynamic interactions (augmentation of relaxation) between a PDE2 inhibitor and treprostinil but does not provide numeric PD parameters or concentration-effect curves for treprostinil. |
| popPK | Chapman_2018 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of a prodrug (INS1009) in animals, reporting EC50 values rather than quantitative pharmacokinetic disposition parameters (CL, V, ka) for treprostinil. |
| popPK | Chapman_2021 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of tachyphylaxis in rats and reports only qualitative concentration ranges rather than quantitative PK parameters like clearance or volume. |
| popPK | Coons_2018 | irrelevant | 2 | 1 | This is a clinical review that cites general PK properties (half-life, bioavailability) but does not report original quantitative disposition parameters (CL, V, Q, ka) or population-PK model estimates for treprostinil. |
| PD | Coons_2018 | not_relevant | 2 | 0 | The paper is a clinical review that qualitatively mentions the existence of a dose-response relationship but does not provide specific numeric PD parameters or data curves. |
| PGx | Coons_2021 | not_relevant | 4 | 5 | The study reports an association between CYP2C9 genotype and treatment persistence (clinical outcome) but explicitly states that genetic variants were not significantly associated with dosing or drug concentrations (PK parameters). |
| popPK | Galiè_2003 | irrelevant | 0 | 0 | The paper is a clinical review of prostanoids for PAH that discusses therapeutic outcomes and general pharmacokinetic properties (e.g., half-life) qualitatively but does not report quantitative PK parameters for treprostinil. |
| PD | Galiè_2003 | not_relevant | 1 | 0 | The text is a qualitative review of prostanoids in PAH and contains no numeric PD parameters, concentration-effect curves, or dose-response data for treprostinil. |
| popPK | Gatfield_2017 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics and in vitro efficacy of selexipag's metabolite, with treprostinil serving only as a comparator agent in receptor assays, and no pharmacokinetic parameters are reported. |
| PD | Gatfield_2017 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of selexipag's metabolite (ACT-333679) and only mentions treprostinil as a comparator for full agonism in cAMP assays without providing specific numeric PD parameters or exposure-response data for treprostinil. |
| PGx | Gotzkowsky_2010 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between treprostinil and bosentan, not a pharmacogenomic effect based on gene variants. |
| PGx | Gotzkowsky_2013 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction between treprostinil and sildenafil, not a pharmacogenomic effect based on genetic variants. |
| popPK | Honorato_2017 | irrelevant | 1 | 0 | The paper is a pharmacology review of selexipag that mentions treprostinil only as a comparator without providing original quantitative PK parameter values. |
| PD | Honorato_2017 | not_relevant | 1 | 0 | The text is a qualitative pharmacology review of selexipag and other prostacyclin pathway drugs, containing no numeric PD parameters or exposure-response data for treprostinil. |
| popPK | Isoherranen_2025 | irrelevant | 0 | 0 | The paper is a general review of PBPK modeling methods and does not report specific quantitative pharmacokinetic parameters for treprostinil. |
| PD | Isoherranen_2025 | not_relevant | 0 | 0 | The paper is a review of PBPK modeling methodology and does not report specific pharmacodynamic or exposure-response data for treprostinil. |
| popPK | Lawrence_2018 | irrelevant | 0 | 0 | The study is a clinical efficacy and safety evaluation of treprostinil in infants with CDH, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | LeVarge_2012 | irrelevant | 2 | 0 | The paper is a review article that discusses pharmacokinetics qualitatively but does not provide original quantitative disposition parameters or numeric values for treprostinil. |
| PD | LeVarge_2012 | not_relevant | 2 | 0 | The text is a review summary that qualitatively describes the pharmacodynamics and clinical efficacy of inhaled treprostinil but does not provide specific numeric PD parameters, concentration-effect curves, or detailed PK/PD modeling results. |
| popPK | Lindegaard_2020 | irrelevant | 1 | 0 | The paper is a MiniReview discussing clinical benefits and general properties without reporting original quantitative pharmacokinetic parameter values. |
| PD | Lindegaard_2020 | not_relevant | 2 | 0 | The text is a mini-review summarizing clinical outcomes and general pharmacological properties without providing specific numeric PD parameters or exposure-response data. |
| popPK | Liu_2021 | irrelevant | 0 | 0 | The paper is a narrative review of inhaled pulmonary vasodilators that discusses treprostinil's clinical efficacy and safety but does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Liu_2021 | not_relevant | 1 | 0 | The paper is a narrative review that qualitatively discusses inhaled pulmonary vasodilators, including treprostinil, but does not report any specific numeric pharmacodynamic parameters, exposure-response curves, or dose-response data for treprostinil. |
| popPK | Mubarak_2010 | irrelevant | 1 | 0 | The paper is a review article discussing the physiology and clinical studies of prostaglandin analogs, and the provided evidence contains no original quantitative pharmacokinetic parameter values for treprostinil. |
| PD | Mubarak_2010 | not_relevant | 2 | 0 | The text is a review article summarizing clinical studies and general pharmacological distinctions without providing specific numeric PD parameters or exposure-response data for treprostinil. |
| popPK | Oriaku_2020 | irrelevant | 0 | 0 | The paper is a clinical case report describing hemodynamic improvements and drug transition, containing no pharmacokinetic parameters or quantitative disposition data for treprostinil. |
| PD | Oriaku_2020 | not_relevant | 1 | 0 | The paper is a single case report describing clinical improvement after switching drugs but explicitly states that pharmacodynamic data comparing the agents are lacking and provides no concentration-effect or dose-response analysis. |
| popPK | Paci_2026 | irrelevant | 0 | 0 | The paper describes a drug delivery device mechanism and does not report pharmacokinetic parameters for treprostinil. |
| PD | Paci_2026 | not_relevant | 0 | 0 | The paper describes a drug delivery device mechanism and release rates, but does not report any pharmacodynamic or exposure-response relationship for treprostinil. |
| popPK | Ramani_2020 | irrelevant | 0 | 0 | The paper is a dose-response analysis of clinical outcomes (hospitalization, 6MWD) and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Tella_2020 | irrelevant | 0 | 0 | The study is a clinical retrospective cohort analyzing hemodynamic response and dose-effect relationships, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Thomeas-McEwing_2022 | irrelevant | 0 | 0 | The study is a pharmacogenomic GWAS analyzing dose-response heterogeneity and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for treprostinil. |
| PD | Thomeas-McEwing_2022 | not_relevant | 1 | 0 | The paper is a pharmacogenomic study (GWAS) identifying genetic predictors of treprostinil dose, but it does not report a concentration-effect or dose-response curve with numeric PD parameters (e.g., Emax, EC50). |
| popPK | Wade_2003 | irrelevant | 1 | 0 | The study evaluates the pharmacokinetics of warfarin (the subject drug) in the presence of treprostinil (co-administered agent), and no quantitative PK parameters for treprostinil itself are reported. |
| PD | Wade_2003 | not_relevant | 2 | 2 | The study reports summary statistics (AUEC, Emax) for warfarin's effect (INR) to assess drug-drug interaction, but does not model or report a concentration-effect relationship or PD parameters for treprostinil itself. |
| popPK | Walkey_2011 | irrelevant | 1 | 0 | The study is a clinical case series focusing on hemodynamic responses and pharmacodynamics, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| PD | Walkey_2011 | not_relevant | 2 | 1 | The paper reports a qualitative comparison of hemodynamic changes (PAP) upon drug discontinuation and transition, but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for treprostinil. |
| popPK | Whittle_2012 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding and functional activity data (Ki, EC50), not pharmacokinetic disposition parameters. |
| PGx | Wu_2022 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving CYP enzymes but does not report pharmacogenomic effects (gene variants) on treprostinil PK/PD. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a pharmacovigilance study on PDE5 inhibitors (sildenafil, tadalafil, etc.) and does not study treprostinil or report any pharmacokinetic parameters for it. |
| PD | Zhang_2024 | not_relevant | 0 | 0 | The paper is a pharmacovigilance study analyzing adverse event reports (hearing impairment) for PDE5 inhibitors in the FAERS database and does not contain any PK/PD modeling, exposure-response analysis, or numeric PD parameters for treprostinil. |
| popPK | unknown_2015 | irrelevant | 0 | 0 | The evidence consists only of a conference title with no pharmacokinetic data or specific study content for treprostinil. |
| PD | unknown_2015 | not_relevant | 0 | 0 | The provided text is only a header for a conference abstract collection and contains no specific data, models, or parameters for treprostinil. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_treprostinil`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
