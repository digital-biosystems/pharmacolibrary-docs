# diclofenac

- **generic name:** diclofenac
- **ATC codes:** `D11AX18`, `M01AB05`, `M02AA15`, `S01BC03`, `S01CC01`
- **DrugBank:** [DB00586](https://go.drugbank.com/drugs/DB00586)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Diclofenac is a phenylacetic acid derivative and non-steroidal anti-inflammatory drug (NSAID).[label] NSAIDs inhibit cyclooxygenase (COX)-1 and-2 which are the enzyme responsible for producing prostaglandins (PGs). PGs contribute to inflammation and pain signalling. Diclofenac, like other NSAIDs, is often used as first line therapy for acute and chronic pain and inflammation from a variety of causes. Diclofenac was the product of rational drug design based on the structures of [phenylbutazone], [mefenamic acid], and [indomethacin].[A180796] The addition of two chlorine groups in the ortho position of the phenyl ring locks the ring in maximal torsion which appears to be related to increased potency. It is often used in combination with [misoprostol] to prevent NSAID-induced gastric ulcers. Diclofenac was first approved by the FDA in July 1988 under the trade name Voltaren, marketed by Novartis (previously Ciba-Geigy).[L7360]

**Indication.** Diclofenac is indicated for use in the treatment of pain and inflammation from varying sources including inflammatory conditions such as osteoarthritis, rheumatoid arthritis, and ankylosing spondylitis, as well as injury-related inflammation due to surgery and physical trauma. It is often used in combination with [misoprostol] as a gastro-protective agent in patients with high risk of developing NSAID-induced ulcers.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-08-27 02:30 | 20:20 | 1/3/0 | 2/3/0 | 3/0/12 | 626,858/41,676 | ollama / qwen3.8:27b-mtp-q8_0 | 40 | 13/16 | 26/14 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yuan_2017](drugs/drug_diclofenac/Diclofenac_Yuan2017_reference.md) | Yuan J et al., A pharmacokinetic study of diclofenac s…, Biomedical reports (2017) | [10.3892/br.2017.942](https://doi.org/10.3892/br.2017.942) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Karunanidhi_2026](drugs/drug_diclofenac/Diclofenac_Karunanidhi2026_reference.md) | Karunanidhi A et al., Ceftazidime/avibactam and aztreonam com…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01540-25](https://doi.org/10.1128/aac.01540-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Singh_2026](drugs/drug_diclofenac/Diclofenac_Singh2026_reference.md) | Singh N et al., Aminoglycosides enhance meropenem/vabor…, Antimicrobial agents and ch… (2026) | [10.1128/aac.01365-25](https://doi.org/10.1128/aac.01365-25) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Standing_2008](drugs/drug_diclofenac/Diclofenac_Standing2008_reference.md) | Standing JF et al., Population pharmacokinetics of oral dic…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03289.x](https://doi.org/10.1111/j.1365-2125.2008.03289.x) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Auler_1997](drugs/drug_diclofenac/pd_Auler_1997_VAS.md) | Auler Júnior JO et al., Diclofenac plasma protein binding: PK-P…, Brazilian journal of medica… (1997) | [10.1590/s0100-879x1997000300010](https://doi.org/10.1590/s0100-879x1997000300010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Auler_1997](drugs/drug_diclofenac/pd_Auler_1997_visual_analogue_scale.md) | Auler Júnior JO et al., Diclofenac plasma protein binding: PK-P…, Brazilian journal of medica… (1997) | [10.1590/s0100-879x1997000300010](https://doi.org/10.1590/s0100-879x1997000300010) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Zhang_2012](drugs/drug_diclofenac/pd_Zhang_2012_PGE2.md) | Zhang J et al., Pharmacokinetic-pharmacodynamic modelin…, Acta pharmacologica Sinica (2012) | [10.1038/aps.2012.67](https://doi.org/10.1038/aps.2012.67) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bouwmeester_2023](drugs/drug_diclofenac/pd_Bouwmeester_2023_resp.md) | Bouwmeester MC et al., Drug Metabolism of Hepatocyte-like Orga…, Molecules (Basel, Switzerla… (2023) | [10.3390/molecules28020621](https://doi.org/10.3390/molecules28020621) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Bouwmeester_2023](drugs/drug_diclofenac/pd_Bouwmeester_2023_unknown.md) | Bouwmeester MC et al., Drug Metabolism of Hepatocyte-like Orga…, Molecules (Basel, Switzerla… (2023) | [10.3390/molecules28020621](https://doi.org/10.3390/molecules28020621) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_EC10.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_EC50.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_Heartbeat_rate.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_LC50.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_LOEC.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_NOEC.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_Pigmentation.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_Yolk_sac_volume.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_affected.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_bpm.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_observation.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Chabchoubi_2023](drugs/drug_diclofenac/pd_Chabchoubi_2023_ratio.md) | Chabchoubi IB et al., Short-term effects of various non-stero…, MethodsX (2023) | [10.1016/j.mex.2023.102215](https://doi.org/10.1016/j.mex.2023.102215) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Matharoo_2025](drugs/drug_diclofenac/pd_Matharoo_2025_SC_thickness.md) | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Matharoo_2025](drugs/drug_diclofenac/pd_Matharoo_2025_epidermal_thickness.md) | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Matharoo_2025](drugs/drug_diclofenac/pd_Matharoo_2025_keratinocyte_number.md) | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Matharoo_2025](drugs/drug_diclofenac/pd_Matharoo_2025_pilosebaceous_unit_area.md) | Matharoo NS et al., A Mechanistic Physiologically Based Pha…, Pharmaceutics (2025) | [10.3390/pharmaceutics17091108](https://doi.org/10.3390/pharmaceutics17091108) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Krasniqi_2016](drugs/drug_diclofenac/pgx_Krasniqi_2016_CYP2C9_safety.md) | Krasniqi V et al., How polymorphisms of the cytochrome P45…, Arhiv za higijenu rada i to… (2016) | [10.1515/aiht-2016-67-2754](https://doi.org/10.1515/aiht-2016-67-2754) |
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID32189324_2020](drugs/drug_diclofenac/pgx_PMID32189324_2020_CYP2C9_safety.md) | PMID32189324, Clinical Pharmacogenetics Implementatio… (2020) | [10.1002/cpt.1830](https://doi.org/10.1002/cpt.1830) |
| <span class="pk-badge pk-badge--green">extracted</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_CYP2C9_safety.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q22` · CL | metabolism | [Krasniqi_2016](drugs/drug_diclofenac/pgx_Krasniqi_2016_CYP2C8_Q22.md) | Krasniqi V et al., How polymorphisms of the cytochrome P45…, Arhiv za higijenu rada i to… (2016) | [10.1515/aiht-2016-67-2754](https://doi.org/10.1515/aiht-2016-67-2754) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCB1** | `Q22` · CL | transport | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_ABCB1_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **ABCC2** | `Q22` · CL | transport | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_ABCC2_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CHST2** | `Q322` · IC50 | target | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_CHST2_Q322.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP1A2** | `Q22` · CL | metabolism | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_CYP1A2_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C19** | `Q22` · CL | metabolism | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_CYP2C19_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2C8** | `Q22` · CL | metabolism | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_CYP2C8_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **CYP2D6** | `Q22` · CL | metabolism | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_CYP2D6_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **HTR2C** | `Q322` · IC50 | target | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_HTR2C_Q322.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **SLCO1B1** | `Q22` · CL | transport | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_SLCO1B1_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **UGT2B7** | `Q22` · CL | metabolism | [Zobdeh_2022](drugs/drug_diclofenac/pgx_Zobdeh_2022_UGT2B7_Q22.md) | Zobdeh F et al., Pharmacogenetics and Pain Treatment wit…, Pharmaceutics (2022) | [10.3390/pharmaceutics14061190](https://doi.org/10.3390/pharmaceutics14061190) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 1588 matched, 107 returned
- **screened:** 4  ·  **relevant:** 8
- **records:** 4  ·  extracted 1  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hannam_2014.pdf` | Hannam JA et al., Postoperative analgesia using diclofena…, Paediatric anaesthesia (2014) | popPK | 10 | [10.1111/pan.12422](https://doi.org/10.1111/pan.12422) | [24815417](https://pubmed.ncbi.nlm.nih.gov/24815417) | The paper presents a population PK model for diclofenac using NONMEM and explicitly reports quantitative parameters including clearance, volume of distribution, and absorption half-time in humans. |
| `Rahal_2008.pdf` | Rahal A et al., Pharmacokinetics of diclofenac and its…, Research in veterinary scie… (2008) | popPK | 10 | [10.1016/j.rvsc.2007.06.002](https://doi.org/10.1016/j.rvsc.2007.06.002) | [17692878](https://pubmed.ncbi.nlm.nih.gov/17692878) | The paper explicitly reports quantitative compartmental pharmacokinetic parameters (clearance, volume of distribution, absorption rate constant, and half-life) for diclofenac in sheep. |
| `Standing_2011.pdf` | Standing JF et al., Diclofenac pharmacokinetic meta-analysi…, Paediatric anaesthesia (2011) | popPK | 10 | [10.1111/j.1460-9592.2010.03509.x](https://doi.org/10.1111/j.1460-9592.2010.03509.x) | [21276131](https://pubmed.ncbi.nlm.nih.gov/21276131) | The paper presents a NONMEM-based population pharmacokinetic analysis of diclofenac in children, reporting quantitative compartmental model parameters including clearance, volume, and bioavailability. |
| `van_2004.pdf` | van der Marel CD et al., Diclofenac and metabolite pharmacokinet…, Paediatric anaesthesia (2004) | popPK | 10 | [10.1111/j.1460-9592.2004.01232.x](https://doi.org/10.1111/j.1460-9592.2004.01232.x) | [15153204](https://pubmed.ncbi.nlm.nih.gov/15153204) | The paper presents a complete population pharmacokinetic analysis of diclofenac in children using NONMEM, explicitly reporting quantitative estimates for clearance, volume of distribution, absorption half-life, and parameter variability. |

<sub>queue written 2026-08-27T02:11:38.802530+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agyemang_2025 | irrelevant | 0 | 0 | The paper is a systematic review of clinical efficacy (pain scores) for diclofenac suppositories and does not report any pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Agyemang_2025 | not_relevant | 1 | 0 | The paper is a systematic review of clinical trials reporting pain scores (VAS) over time, but it does not report any pharmacokinetic data (concentrations) or fit a pharmacodynamic model (e.g., Emax, EC50) to derive numeric PD parameters. |
| popPK | Altan_2020 | irrelevant | not captured | not captured | Diclofenac is only co-administered as an interacting agent, and all reported pharmacokinetic parameters are for moxifloxacin. |
| PD | Arfè_2016 | not_relevant | 3 | 2 | The paper reports a dose-response relationship for heart failure risk using defined daily doses (DDD) in a large epidemiological study, but it does not provide pharmacokinetic concentration data or formal pharmacodynamic parameters (e.g., EC50, Emax) derived from exposure-response modeling. |
| popPK | Bouwmeester_2023 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assessment using diclofenac as a probe compound to determine EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Chabchoubi_2023 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of NSAIDs in zebrafish embryos reporting LC50/EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Chulak_1995 | irrelevant | 0 | 0 | The study is a pharmacological investigation of bradykinin receptors in rat atria where diclofenac is used only as a cyclo-oxygenase inhibitor control, with no pharmacokinetic parameters reported. |
| PD | Chulak_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacology of bradykinin on noradrenaline release; diclofenac is used only as a control agent to rule out cyclo-oxygenase involvement, and no PD parameters for diclofenac are reported. |
| PD | Gan_2010 | not_relevant | 2 | 1 | The paper is a narrative review of mechanisms of action and mentions IC80 values for COX inhibition, but it does not report a pharmacokinetic/pharmacodynamic model, exposure-response analysis, or derivable PD parameters for the drug's clinical effect. |
| popPK | Junkert_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ciprofloxacin, with diclofenac mentioned only as a drug interaction covariate. |
| PD | Junkert_2024 | not_relevant | 0 | 0 | The paper is a scoping review of ciprofloxacin pharmacokinetics; diclofenac is only mentioned as a covariate affecting ciprofloxacin PK, and no PD parameters for diclofenac are reported. |
| popPK | Karunanidhi_2026 | irrelevant | 0 | 0 | Diclofenac is used only as an internal standard for LC-MS/MS analysis, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Karunanidhi_2026 | not_relevant | 0 | 0 | The paper focuses on the pharmacodynamics of ceftazidime/avibactam, aztreonam, and aminoglycosides; diclofenac is mentioned only as an internal standard for the analytical method. |
| popPK | Lad_2026 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro bioactivity study of Eucalyptus globulus essential oil, where diclofenac is used only as a reference standard for anti-inflammatory assays, and no pharmacokinetic parameters are reported. |
| PD | Lad_2026 | not_relevant | 0 | 0 | The paper studies Eucalyptus globulus essential oil, not diclofenac; diclofenac is only used as a reference standard in in vitro assays. |
| popPK | Lischke_1995 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of barbiturates on vascular relaxation where diclofenac is used only as a cyclo-oxygenase inhibitor, and no pharmacokinetic parameters are reported. |
| PD | Lischke_1995 | not_relevant | 0 | 0 | The paper investigates the effects of barbiturates on EDHF release; diclofenac is used only as a fixed-dose pretreatment to block prostaglandin synthesis, and no exposure-response or dose-response relationship for diclofenac is reported. |
| PGx | Maréchal_2008 | not_relevant | 0 | 0 | The paper is a review of structural modeling and mutagenesis of CYP2D6, not a clinical study reporting pharmacogenomic effects on diclofenac PK/PD parameters. |
| popPK | Matharoo_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of adapalene, not diclofenac. |
| PD | Matharoo_2025 | not_relevant | 0 | 0 | The paper focuses on adapalene, not diclofenac. |
| popPK | Nakijoba_2025 | irrelevant | 0 | 0 | The paper is a qualitative study on stakeholder perspectives regarding medicine use during breastfeeding and does not report any pharmacokinetic parameters for diclofenac. |
| PD | Nakijoba_2025 | not_relevant | 0 | 0 | The paper is a qualitative study on stakeholder perspectives regarding medicine use during breastfeeding and contains no pharmacokinetic or pharmacodynamic data. |
| popPK | Ramazanova_2026 | irrelevant | 0 | 0 | The study focuses on the phytochemical profiling of Iris songarica, using diclofenac only as a positive control for anti-inflammatory activity without reporting any pharmacokinetic parameters for diclofenac. |
| PD | Ramazanova_2026 | not_relevant | 0 | 0 | The paper focuses on phytochemical profiling of Iris songarica and uses diclofenac only as a single-dose positive control in an in vivo ear oedema assay, without reporting any PK/PD modeling, concentration-effect curves, or numeric PD parameters for diclofenac. |
| PD | Rana_2023 | not_relevant | 0 | 0 | The paper uses diclofenac only as a standard for in vitro protein denaturation (IC50) and in vivo comparison, but does not report a pharmacokinetic or pharmacodynamic exposure-response relationship for diclofenac itself. |
| popPK | Reinshagen_2025 | irrelevant | 0 | 0 | The paper describes bioinformatics workflows for drug repurposing and does not contain any pharmacokinetic data or parameters for diclofenac. |
| PD | Reinshagen_2025 | not_relevant | 0 | 0 | The paper describes bioinformatics annotation pipelines for drug repurposing and uses diclofenac only as a visual example in a dashboard; it does not report any pharmacodynamic or exposure-response data. |
| PGx | Sakaki_2018 | not_relevant | 0 | 0 | The paper investigates a drug-food interaction (sesamin) on diclofenac PK, not a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | Singh_2026 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of meropenem/vaborbactam and aminoglycosides, using diclofenac only as an internal standard for the analytical assay. |
| PD | Singh_2026 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of meropenem/vaborbactam and aminoglycosides; diclofenac is mentioned only as an internal standard for the analytical method. |
| popPK | Singhai_2024 | irrelevant | 0 | 0 | The paper is a clinical trial protocol comparing the efficacy of aescin and diclofenac for postoperative pain and inflammation markers, containing no pharmacokinetic data or disposition parameters for diclofenac. |
| PD | Singhai_2024 | not_relevant | 0 | 0 | The text is a protocol for a clinical trial comparing efficacy and biomarkers, containing no pharmacokinetic data, concentration-effect analysis, or numeric PD parameters. |
| PGx | Srinivas_2013 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions between cranberry juice and diclofenac, not pharmacogenomic effects of gene variants on diclofenac PK/PD. |
| popPK | Wen_2026 | irrelevant | 2 | 0 | The study is a mechanistic modeling paper using diclofenac as a probe drug to validate liver distribution models, and it does not report standard population PK parameters (CL, V, ka) for diclofenac. |
| PD | Wen_2026 | not_relevant | 0 | 0 | The paper focuses on physiologically based pharmacokinetic (PBPK) modeling of drug distribution (Kp) and protein binding, not on pharmacodynamic (PD) or exposure-response relationships. |
| popPK | Zhang_2012 | relevant | 9 | 2 | The paper is a PK-PD study of diclofenac in rats with a compartmental model, but the specific numeric PK parameter values (CL, V, etc.) are contained in Table 1, which is not provided in the evidence. |
| PGx | Zobdeh_2022 | not_relevant | 5 | 5 | The paper is a systematic review that summarizes existing literature and identifies gene-drug interactions (e.g., diclofenac/CYP2C9) but does not report original experimental data or fitted effect sizes for PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_diclofenac`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
