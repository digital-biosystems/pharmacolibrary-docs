# pentazocine

- **generic name:** pentazocine
- **ATC codes:** `N02AD01`, `N02AD51`
- **DrugBank:** [DB00652](https://go.drugbank.com/drugs/DB00652)
- **groups:** approved, vet_approved

## About

**Description.** The first mixed agonist-antagonist analgesic to be marketed. It is an agonist at the kappa and sigma opioid receptors and has a weak antagonist action at the mu receptor. (From AMA Drug Evaluations Annual, 1991, p97)

**Indication.** For the relief of moderate to severe pain.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-28 07:27 | 23:32 | 0/0/0 | 0/4/0 | 0/0/1 | 243,081/3,377 | ollama / qwen3.8:27b-mtp-q8_0 | 18 | 8/10 | 17/1 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Altura_1983](drugs/drug_pentazocine/pd_Altura_1983_contractile_tension.md) | Altura BT et al., Phencyclidine ("angel dust") analogs an…, Proceedings of the National… (1983) | [10.1073/pnas.80.3.865](https://doi.org/10.1073/pnas.80.3.865) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Omori_2022](drugs/drug_pentazocine/pd_Omori_2022_NRS.md) | Omori T et al., Pharmacokinetic/Pharmacodynamic Modelin…, Biological & pharmaceutical… (2022) | [10.1248/bpb.b22-00398](https://doi.org/10.1248/bpb.b22-00398) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rybczynska_2008](drugs/drug_pentazocine/pd_Rybczynska_2008_Choline.md) | Rybczynska AA et al., Cytotoxicity of sigma-receptor ligands…, Journal of nuclear medicine… (2008) | [10.2967/jnumed.108.053876](https://doi.org/10.2967/jnumed.108.053876) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rybczynska_2008](drugs/drug_pentazocine/pd_Rybczynska_2008_FDG.md) | Rybczynska AA et al., Cytotoxicity of sigma-receptor ligands…, Journal of nuclear medicine… (2008) | [10.2967/jnumed.108.053876](https://doi.org/10.2967/jnumed.108.053876) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rybczynska_2008](drugs/drug_pentazocine/pd_Rybczynska_2008_FLT.md) | Rybczynska AA et al., Cytotoxicity of sigma-receptor ligands…, Journal of nuclear medicine… (2008) | [10.2967/jnumed.108.053876](https://doi.org/10.2967/jnumed.108.053876) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rybczynska_2008](drugs/drug_pentazocine/pd_Rybczynska_2008_Methionine.md) | Rybczynska AA et al., Cytotoxicity of sigma-receptor ligands…, Journal of nuclear medicine… (2008) | [10.2967/jnumed.108.053876](https://doi.org/10.2967/jnumed.108.053876) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Rybczynska_2008](drugs/drug_pentazocine/pd_Rybczynska_2008_cell_count.md) | Rybczynska AA et al., Cytotoxicity of sigma-receptor ligands…, Journal of nuclear medicine… (2008) | [10.2967/jnumed.108.053876](https://doi.org/10.2967/jnumed.108.053876) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tyers_1980](drugs/drug_pentazocine/pd_Tyers_1980_unknown.md) | Tyers MB, A classification of opiate receptors th…, British journal of pharmaco… (1980) | [10.1111/j.1476-5381.1980.tb07041.x](https://doi.org/10.1111/j.1476-5381.1980.tb07041.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **OPRM1** | `Q321` · EC50 | target | [Knapman_2014](drugs/drug_pentazocine/pgx_Knapman_2014_OPRM1_Q321.md) | Knapman A et al., Buprenorphine signalling is compromised…, British journal of pharmaco… (2014) | [10.1111/bph.12785](https://doi.org/10.1111/bph.12785) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 156 matched, 70 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Omori_2025.pdf` | Omori T et al., Pentazocine Pharmacodynamics in Childre…, Paediatric anaesthesia (2025) | pd | 5 | [10.1111/pan.15135](https://doi.org/10.1111/pan.15135) | [40482011](https://www.ncbi.nlm.nih.gov/pubmed/40482011) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Barnett_2020.pdf` | Barnett ME et al., Unique Pharmacological Properties of th…, Molecular pharmacology (2020) | pd | 4 | [10.1124/mol.120.119404](https://doi.org/10.1124/mol.120.119404) | [32958572](https://www.ncbi.nlm.nih.gov/pubmed/32958572) | metadata signals extractable PD data (EC50) |
| `Candura_1990.pdf` | Candura SM et al., Interaction of sigma-compounds with rec…, Journal of neurochemistry (1990) | pd | 4 | [10.1111/j.1471-4159.1990.tb04964.x](https://doi.org/10.1111/j.1471-4159.1990.tb04964.x) | [2170583](https://www.ncbi.nlm.nih.gov/pubmed/2170583) | metadata signals extractable PD data (IC50) |
| `Matsuno_1996.pdf` | Matsuno K et al., Binding properties of SA4503, a novel a…, European journal of pharmac… (1996) | pd | 4 | [10.1016/0014-2999(96)00201-4](https://doi.org/10.1016/0014-2999(96)00201-4) | [8813641](https://www.ncbi.nlm.nih.gov/pubmed/8813641) | metadata signals extractable PD data (IC50) |
| `Pathak_2019.pdf` | Pathak S et al., Abuse Potential of Samidorphan: A Phase…, Journal of clinical pharmac… (2019) | pd | 4 | [10.1002/jcph.1343](https://doi.org/10.1002/jcph.1343) | [30476361](https://www.ncbi.nlm.nih.gov/pubmed/30476361) | metadata signals extractable PD data (Emax) |
| `Zevin_1999.pdf` | Zevin S et al., Drug interactions with tobacco smoking.…, Clinical pharmacokinetics (1999) | pgx | 8 | [10.2165/00003088-199936060-00004](https://doi.org/10.2165/00003088-199936060-00004) | [10427467](https://www.ncbi.nlm.nih.gov/pubmed/10427467) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Armstrong_2009.pdf` | Armstrong SC et al., Pharmacokinetic drug interactions of sy…, Psychosomatics (2009) | pgx | 7 | [10.1176/appi.psy.50.2.169](https://doi.org/10.1176/appi.psy.50.2.169) | [19377028](https://www.ncbi.nlm.nih.gov/pubmed/19377028) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-08-28T07:21:38.272168+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agyemang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of diclofenac suppositories for pain management, and pentazocine is only mentioned as a comparator opioid without any pharmacokinetic data. |
| PD | Agyemang_2025 | not_relevant | 0 | 0 | The paper is a systematic review of diclofenac suppositories and does not report any pharmacodynamic or exposure-response analysis for pentazocine. |
| popPK | Alon_2021 | irrelevant | 0 | 0 | The paper is a structural biology and drug discovery study on the sigma-2 receptor, not a pharmacokinetic study of pentazocine. |
| PD | Alon_2021 | not_relevant | 0 | 0 | The paper focuses on the sigma-2 receptor and novel ligands (Z-series, PB28), not pentazocine, and does not report PD parameters for pentazocine. |
| popPK | Altura_1983 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of cerebral vascular contraction, not a pharmacokinetic study, and reports no disposition parameters for pentazocine. |
| popPK | Colin_2024 | irrelevant | 0 | 0 | The paper is a review of Cassia alata bioactive compounds and does not contain any pharmacokinetic data or parameters for pentazocine. |
| PD | Colin_2024 | not_relevant | 0 | 0 | The paper is a review of Cassia alata bioactive compounds and does not mention pentazocine or report any pharmacodynamic parameters for it. |
| popPK | Corlatti_2026 | irrelevant | 0 | 0 | The paper is a review of the phytochemistry and biological activities of the Helianthus genus (sunflowers) and does not contain any pharmacokinetic data for pentazocine. |
| PD | Corlatti_2026 | not_relevant | 0 | 0 | The paper is a review of phytochemicals in the Helianthus genus and does not contain any pharmacodynamic or exposure-response data for pentazocine. |
| popPK | Elliott_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of opioid tolerance in cell membranes and does not report pharmacokinetic parameters for pentazocine. |
| popPK | Kendzerska_2023 | irrelevant | 0 | 0 | The paper is a retrospective epidemiological study analyzing health administrative data for adverse outcomes, not a pharmacokinetic study, and contains no PK parameters for pentazocine. |
| PD | Kendzerska_2023 | not_relevant | 0 | 0 | The study is a retrospective administrative data analysis examining the association between opioid prescription characteristics (e.g., dose, type) and clinical outcomes (mortality, hospitalization) using hazard ratios; it does not report pharmacokinetic data, drug concentrations, or a pharmacodynamic exposure-response model for pentazocine. |
| popPK | Mather_1987 | irrelevant | 2 | 2 | The paper is a review that lists typical reported ranges for pentazocine in Table 2, but it does not present original quantitative PK data or a specific population PK model for pentazocine as the subject. |
| PD | Mather_1987 | not_relevant | 1 | 0 | The text is a qualitative review discussing why pentazocine's blood concentrations are not determinants of its analgesic response, without providing any numeric PD parameters or concentration-effect data. |
| popPK | Muratspahić_2023 | irrelevant | 0 | 0 | The paper focuses on the design and structural validation of peptide-drug conjugates for the kappa-opioid receptor, and pentazocine is used only as a reference ligand in in vitro binding and functional assays, with no pharmacokinetic parameters reported. |
| PD | Muratspahić_2023 | not_relevant | 0 | 0 | The paper focuses on the design and structural validation of a new peptide-drug conjugate (DNCP-β-NalA) and does not report pharmacodynamic or exposure-response data for pentazocine. |
| popPK | Nguyen_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of dextromethorphan, using pentazocine only as a radioligand for in-vitro binding assays rather than as a subject drug for pharmacokinetic analysis. |
| PD | Nguyen_2014 | not_relevant | 0 | 0 | The paper studies dextromethorphan, not pentazocine; pentazocine is only used as a radioligand in binding assays. |
| popPK | Omori_2022 | relevant | 10 | 2 | The paper is a population PK study for pentazocine, but the specific numeric parameter values (CL, V, Q) are located in Table 2, which is not included in the provided evidence. |
| popPK | Rybczynska_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of sigma receptor binding and cytotoxicity in cell lines, not a pharmacokinetic study reporting disposition parameters for pentazocine. |
| popPK | Shram_2022 | irrelevant | 1 | 0 | Pentazocine is used only as a positive control/comparator in an abuse potential study for difelikefalin, and no quantitative PK parameters for pentazocine are reported in the evidence. |
| PD | Shram_2022 | not_relevant | 2 | 1 | The study reports treatment differences in peak effects (Emax) for pentazocine compared to placebo and difelikefalin, but does not provide a concentration-effect or dose-response curve, nor does it report specific PD parameters (like EC50 or slope) for pentazocine. |
| popPK | Suzuki_1997 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding pentazocine pharmacokinetics. |
| PD | Suzuki_1997 | not_relevant | 0 | 0 | The provided text is metadata from a document processing tool (GROBID) and does not contain any scientific content, data, or analysis regarding pentazocine or pharmacodynamics. |
| popPK | Tyers_1980 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of antinociception in rodents and does not report any pharmacokinetic parameters for pentazocine. |
| popPK | Valodia_2022 | irrelevant | 0 | 0 | The paper is a review focused on phenytoin pharmacokinetics and smoking effects, with no mention of pentazocine. |
| PD | Valodia_2022 | not_relevant | 0 | 0 | The paper is a literature review regarding phenytoin and smoking/nicotine, and does not contain any pharmacodynamic or exposure-response data for pentazocine. |
| popPK | Zeng_2019 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on sigma-2 receptor ligands where pentazocine is used only as a sigma-1 receptor probe/antagonist, and no pharmacokinetic parameters for pentazocine are reported. |
| PD | Zeng_2019 | not_relevant | 4 | 4 | The paper reports dose-response curves and EC50 values for sigma-2 ligands (e.g., siramesine, SW43) and binding affinities for pentazocine, but pentazocine is used only as a sigma-1 ligand to mask binding sites or test for blockade, and no PD parameters (EC50, Emax) are reported for pentazocine itself. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_pentazocine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
