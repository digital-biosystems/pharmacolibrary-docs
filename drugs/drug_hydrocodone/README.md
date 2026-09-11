# hydrocodone

- **generic name:** hydrocodone
- **ATC codes:** `N02AJ22`, `N02AJ23`, `R05DA03`
- **DrugBank:** [DB00956](https://go.drugbank.com/drugs/DB00956)
- **groups:** approved, illicit, investigational

## About

**Description.** Hydrocodone is a synthetic opioid derivative of codeine.[T116] It is commonly used in combination with [acetaminophen] to control moderate to severe pain. Historically, hydrocodone has been used as a cough suppressant although this has largely been replaced by [dextromethorphan] in current cough and cold formulations. Hydrocodone's more potent metabolite, [hydromorphone] has also found wide use as an analgesic and is frequently used in cases of severe pain. The FDA first approved Hydrocodone for use as part of the cough suppressant syrup Hycodan in March of 1943.[L9025]

**Indication.** Hydrocodone is indicated for the management of acute pain, sometimes in combination with [acetaminophen] or [ibuprofen], as well as the symptomatic treatment of the common cold and allergic rhinitis in combination with decongestants, antihistamines, and expectorants.[label,L7991]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 19:59 | 14:47 | 1/0/0 | 0/1/0 | 0/0/1 | 148,644/4,767 | ollama / qwen3.8:27b-mtp-q8_0 | 21 | 0/1 | 13/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Melhem_2013](drugs/drug_hydrocodone/Hydrocodone_Melhem2013_reference.md) | Melhem MR et al., Population pharmacokinetic analysis for…, Clinical pharmacokinetics (2013) | [10.1007/s40262-013-0081-6](https://doi.org/10.1007/s40262-013-0081-6) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2004](drugs/drug_hydrocodone/pd_Zhao_2004_Clinically_Meaningful_Events_CMEs_count.md) | Zhao SZ et al., Dose-response relationship between opio…, Journal of pain and symptom… (2004) | [10.1016/j.jpainsymman.2003.11.001](https://doi.org/10.1016/j.jpainsymman.2003.11.001) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2004](drugs/drug_hydrocodone/pd_Zhao_2004_Patient_CME_days.md) | Zhao SZ et al., Dose-response relationship between opio…, Journal of pain and symptom… (2004) | [10.1016/j.jpainsymman.2003.11.001](https://doi.org/10.1016/j.jpainsymman.2003.11.001) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Zhao_2004](drugs/drug_hydrocodone/pd_Zhao_2004_Symptom_Distress_Scale_SDS_composite_score.md) | Zhao SZ et al., Dose-response relationship between opio…, Journal of pain and symptom… (2004) | [10.1016/j.jpainsymman.2003.11.001](https://doi.org/10.1016/j.jpainsymman.2003.11.001) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | formation | [Armstrong_2025](drugs/drug_hydrocodone/pgx_Armstrong_2025_CYP2D6_Q100.md) | Armstrong SJ et al., Precision medicine for Defence?, BMJ military health (2025) | [10.1136/military-2024-002721](https://doi.org/10.1136/military-2024-002721) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 186 matched, 69 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_12 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Graziani_2016.pdf` | Graziani M et al., Gender difference in prescription opioi…, Pharmacological research (2016) | pgx | 8 | [10.1016/j.phrs.2016.04.012](https://doi.org/10.1016/j.phrs.2016.04.012) | [27107788](https://www.ncbi.nlm.nih.gov/pubmed/27107788) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Linares_2015.pdf` | Linares OA et al., Individualized Hydrocodone Therapy Base…, The Clinical journal of pain (2015) | pgx | 8 | [10.1097/AJP.0000000000000214](https://doi.org/10.1097/AJP.0000000000000214) | [25621429](https://www.ncbi.nlm.nih.gov/pubmed/25621429) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nahid_2025.pdf` | Nahid NA et al., CYP2D6 Phenotypes and Emergency Departm…, JAMA network open (2025) | pgx | 8 | [10.1001/jamanetworkopen.2025.23543](https://doi.org/10.1001/jamanetworkopen.2025.23543) | [40720122](https://www.ncbi.nlm.nih.gov/pubmed/40720122) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Nahid_2026.pdf` | Nahid NA et al., Hydrocodone vs Oxycodone and Postoperat…, JAMA network open (2026) | pgx | 8 | [10.1001/jamanetworkopen.2026.23079](https://doi.org/10.1001/jamanetworkopen.2026.23079) | [42446879](https://www.ncbi.nlm.nih.gov/pubmed/42446879) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Otton_1993.pdf` | Otton SV et al., CYP2D6 phenotype determines the metabol…, Clinical pharmacology and t… (1993) | pgx | 8 | [10.1038/clpt.1993.177](https://doi.org/10.1038/clpt.1993.177) | [7693389](https://www.ncbi.nlm.nih.gov/pubmed/7693389) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Reizine_2021.pdf` | Reizine N et al., Impact of CYP2D6 Pharmacogenomic Status…, The oncologist (2021) | pgx | 8 | [10.1002/onco.13953](https://doi.org/10.1002/onco.13953) | [34423496](https://www.ncbi.nlm.nih.gov/pubmed/34423496) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Stauble_2014.pdf` | Stauble ME et al., Hydrocodone in postoperative personaliz…, Clinica chimica acta; inter… (2014) | pgx | 8 | [10.1016/j.cca.2013.11.015](https://doi.org/10.1016/j.cca.2013.11.015) | [24269714](https://www.ncbi.nlm.nih.gov/pubmed/24269714) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Overholser_2011.pdf` | Overholser BR et al., Opioid pharmacokinetic drug-drug intera…, The American journal of man… (2011) | pgx | 7 | not captured | [21999760](https://www.ncbi.nlm.nih.gov/pubmed/21999760) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Cavallari_2026.pdf` | Cavallari LH et al., CYP2D6-Guided Opioid Management and Pos…, JAMA network open (2026) | pgx | 5 | [10.1001/jamanetworkopen.2025.58299](https://doi.org/10.1001/jamanetworkopen.2025.58299) | [41719044](https://www.ncbi.nlm.nih.gov/pubmed/41719044) | metadata signals extractable PGX data (CYP2D6) |
| `Grimsrud_2022.pdf` | Grimsrud KN et al., Pharmacogenetic Gene-Drug Associations…, Journal of burn care & rese… (2022) | pgx | 5 | [10.1093/jbcr/irac062](https://doi.org/10.1093/jbcr/irac062) | [35639664](https://www.ncbi.nlm.nih.gov/pubmed/35639664) | metadata signals extractable PGX data (CYP2C9) |
| `Patel_2021.pdf` | Patel JN et al., Potentially actionable pharmacogenetic…, Supportive care in cancer :… (2021) | pgx | 5 | [10.1007/s00520-021-06170-4](https://doi.org/10.1007/s00520-021-06170-4) | [33758969](https://www.ncbi.nlm.nih.gov/pubmed/33758969) | metadata signals extractable PGX data (CYP2B6) |
| `Stamer_2010.pdf` | Stamer UM et al., Personalized therapy in pain management…, Pharmacogenomics (2010) | pgx | 5 | [10.2217/pgs.10.47](https://doi.org/10.2217/pgs.10.47) | [20504256](https://www.ncbi.nlm.nih.gov/pubmed/20504256) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-08-27T19:53:49.793167+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Armstrong_2025 | not_relevant | 5 | 2 | The paper is a narrative review discussing the general impact of CYP2D6 phenotypes on opioid metabolism but does not report specific fitted quantitative effect sizes (e.g., AUC ratios) for hydrocodone. |
| PD | Bea_2025 | not_relevant | 0 | 0 | The paper is a pharmacoepidemiological cohort study using claims data to assess comparative overdose risk; it does not report pharmacokinetic or pharmacodynamic modeling, concentration-effect relationships, or numeric PD parameters. |
| PD | Bell_2015 | not_relevant | 1 | 0 | The paper is a review of pharmacogenomic associations with opioid response and does not report any concentration-effect or dose-response PD models or numeric PD parameters for hydrocodone. |
| PGx | Bell_2015 | not_relevant | 0 | 0 | The paper is a review that explicitly states evidence is limited for hydrocodone and does not report specific pharmacogenomic effects on its PK or PD parameters. |
| PD | Coates_2023 | not_relevant | 2 | 0 | The paper is a minireview of drug-drug interactions and metabolism; it does not report original pharmacodynamic data or numeric PD parameters (e.g., Emax, EC50) for hydrocodone. |
| PGx | Crews_2021 | not_relevant | 2 | 0 | The paper is a clinical guideline that explicitly states there is limited and/or weak data for CYP2D6 and hydrocodone, and does not report specific quantitative pharmacokinetic or pharmacodynamic effect sizes for hydrocodone. |
| popPK | Guenther_2018 | irrelevant | 2 | 1 | The study reports only non-compartmental PK parameters (Cmax, AUC, Tmax) for hydrocodone as a comparator to benzhydrocodone, lacking the specific disposition parameters (CL, V, Q, ka) required for population-PK extraction. |
| PD | Guenther_2018 | not_relevant | 2 | 1 | The study reports PK parameters and PD endpoint means (Drug Liking VAS) but does not provide a concentration-effect model, Emax/EC50 parameters, or a derivable exposure-response curve. |
| PGx | Hendrickson_2012 | not_relevant | 0 | 0 | The paper is a review of opioid transfer into breast milk and infant toxicity, discussing CYP2D6 polymorphisms qualitatively but providing no quantitative pharmacokinetic or pharmacodynamic data for hydrocodone. |
| PD | Manca_2023 | not_relevant | 0 | 0 | The paper describes a UHPLC-MS/MS analytical method for quantifying opioids in tissues and reports concentration data, but it does not model or report any pharmacodynamic (exposure-response or dose-response) relationships or PD parameters. |
| PD | Manchikanti_2015 | not_relevant | 2 | 1 | The paper is a narrative review discussing the history, regulation, and general pharmacology of hydrocodone, but it does not present original data or specific numeric PD parameters (e.g., EC50, Emax) for an exposure-response relationship. |
| PGx | Michaud_2021 | not_relevant | 0 | 0 | The study analyzes healthcare costs and medication risk scores associated with CYP2D6 drug-drug interactions, but does not report pharmacokinetic or pharmacodynamic parameters or specific genotype-based effects on hydrocodone. |
| PD | Mickle_2018 | not_relevant | 3 | 2 | The study compares PK and PD (Drug Liking) between two formulations but does not model the relationship between hydrocodone concentration and effect (no Emax/EC50 or concentration-effect curve), only reporting group-level differences in exposure and subjective scores. |
| PGx | Nimmagadda_2020 | not_relevant | 0 | 0 | The paper reports the frequency of drug-drug interactions (CYP inhibitors/inducers) in a patient cohort but does not report pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Overholser_2011 | not_relevant | 0 | 0 | The paper reviews pharmacokinetic drug-drug interactions (DDIs) involving opioids, not pharmacogenomic effects of gene variants on hydrocodone PK/PD. |
| PD | Singla_2013 | not_relevant | 2 | 1 | The paper is a review summarizing general knowledge and does not report a specific new PD model or extractable numeric PD parameters for hydrocodone. |
| PGx | Smith_2025 | not_relevant | 2 | 5 | The paper reports clinical outcomes (pain intensity) rather than direct pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, receptor binding) for hydrocodone. |
| PD | Yuan_2026 | not_relevant | 0 | 0 | The paper is a review of suzetrigine, not hydrocodone, and does not report specific numeric PD parameters for the target drug. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_hydrocodone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
