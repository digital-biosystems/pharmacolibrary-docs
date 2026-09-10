# prednisolone

- **generic name:** prednisolone
- **ATC codes:** `A01AC04`, `A07EA01`, `C05AA04`, `D07AA03`, `D07BA01`, `D07CA03`, `D07XA02`, `H02AB06`, `R01AD02`, `S01BA04`, `S01BB02`, `S01CA02`, `S01CB02`, `S02BA03`, `S02CA01`, `S03BA02`, `S03CA02`, `V03AB05`
- **DrugBank:** [DB00860](https://go.drugbank.com/drugs/DB00860)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Prednisolone is a glucocorticoid similar to [cortisol] used for its anti-inflammatory, immunosuppressive, anti-neoplastic, and vasoconstrictive effects.[A187463]

Prednisolone was granted FDA approval on 21 June 1955.[L9431]

**Indication.** Prednisolone is indicated to treat endocrine, rheumatic, and hematologic disorders; collagen, dermatologic, ophthalmic, respiratory, and gastrointestinal diseases; allergic and edematous states; and other conditions like tuberculous meningitis.[L9542]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-10 10:58 | 30:01 | 1/7/0 | 2/1/0 | 0/0/5 | 380,467/32,278 | ollama / qwen3.8:27b-mtp-q8_0 | 29 | 10/19 | 27/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Tan_2024](drugs/drug_prednisolone/Prednisolone_Tan2024_reference.md) | Tan JM et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2024) | [10.1111/bcp.16158](https://doi.org/10.1111/bcp.16158) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Bouazza_2025](drugs/drug_prednisolone/Prednisolone_Bouazza2025_covariate_effect.md) | Bouazza N et al., Population pharmacokinetic modelling of…, British journal of clinical… (2025) | [10.1002/bcp.70103](https://doi.org/10.1002/bcp.70103) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bouazza_2025](drugs/drug_prednisolone/Prednisolone_Bouazza2025_estimate_rse.md) | Bouazza N et al., Population pharmacokinetic modelling of…, British journal of clinical… (2025) | [10.1002/bcp.70103](https://doi.org/10.1002/bcp.70103) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Magee_2002](drugs/drug_prednisolone/Prednisolone_Magee2002_reference.md) | Magee MH et al., Pharmacokinetic/pharmacodynamic model f…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Purcell_2025](drugs/drug_prednisolone/Prednisolone_Purcell2025_5_crl.md) | Purcell BL et al., Influence of bodyweight on prednisolone…, PloS one (2025) | [10.1371/journal.pone.0326586](https://doi.org/10.1371/journal.pone.0326586) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Purcell_2025](drugs/drug_prednisolone/Prednisolone_Purcell2025_95_crl.md) | Purcell BL et al., Influence of bodyweight on prednisolone…, PloS one (2025) | [10.1371/journal.pone.0326586](https://doi.org/10.1371/journal.pone.0326586) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Purcell_2025](drugs/drug_prednisolone/Prednisolone_Purcell2025_posterior_median.md) | Purcell BL et al., Influence of bodyweight on prednisolone…, PloS one (2025) | [10.1371/journal.pone.0326586](https://doi.org/10.1371/journal.pone.0326586) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [de_2023](drugs/drug_prednisolone/Prednisolone_de2023_reference.md) | de Truchis C et al., Prednisolone pharmacokinetics after ora…, British journal of clinical… (2023) | [10.1111/bcp.15610](https://doi.org/10.1111/bcp.15610) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Magee_2002](drugs/drug_prednisolone/pd_Magee_2002_WBLP.md) | Magee MH et al., Pharmacokinetic/pharmacodynamic model f…, British journal of clinical… (2002) | [10.1046/j.1365-2125.2002.01567.x](https://doi.org/10.1046/j.1365-2125.2002.01567.x) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Tan_2024](drugs/drug_prednisolone/pd_Tan_2024_DAS_28_3.md) | Tan JM et al., Pharmacokinetic-pharmacodynamic modelli…, British journal of clinical… (2024) | [10.1111/bcp.16158](https://doi.org/10.1111/bcp.16158) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Snaterse_2023](drugs/drug_prednisolone/pd_Snaterse_2023_AR_nuclear_fraction.md) | Snaterse G et al., Androgen receptor mutations modulate ac…, Prostate cancer and prostat… (2023) | [10.1038/s41391-022-00491-z](https://doi.org/10.1038/s41391-022-00491-z) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Snaterse_2023](drugs/drug_prednisolone/pd_Snaterse_2023_cell_proliferation.md) | Snaterse G et al., Androgen receptor mutations modulate ac…, Prostate cancer and prostat… (2023) | [10.1038/s41391-022-00491-z](https://doi.org/10.1038/s41391-022-00491-z) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Snaterse_2023](drugs/drug_prednisolone/pd_Snaterse_2023_luciferase_activity.md) | Snaterse G et al., Androgen receptor mutations modulate ac…, Prostate cancer and prostat… (2023) | [10.1038/s41391-022-00491-z](https://doi.org/10.1038/s41391-022-00491-z) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **HSD11B1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Blaschke_2025](drugs/drug_prednisolone/pgx_Blaschke_2025_HSD11B1_Q100.md) | Blaschke M et al., The local inactivation of glucocorticoi…, PNAS nexus (2025) | [10.1093/pnasnexus/pgaf315](https://doi.org/10.1093/pnasnexus/pgaf315) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **FRMD4B** | `Q322` · IC50 | unknown | [Shinohara_2020](drugs/drug_prednisolone/pgx_Shinohara_2020_FRMD4B_Q322.md) | Shinohara T et al., Inherited genetic variants associated w…, Journal of cellular and mol… (2020) | [10.1111/jcmm.15882](https://doi.org/10.1111/jcmm.15882) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **MITF** | `Q322` · IC50 | unknown | [Shinohara_2020](drugs/drug_prednisolone/pgx_Shinohara_2020_MITF_Q322.md) | Shinohara T et al., Inherited genetic variants associated w…, Journal of cellular and mol… (2020) | [10.1111/jcmm.15882](https://doi.org/10.1111/jcmm.15882) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **PLEKHA8** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Shinohara_2020](drugs/drug_prednisolone/pgx_Shinohara_2020_PLEKHA8_Q100.md) | Shinohara T et al., Inherited genetic variants associated w…, Journal of cellular and mol… (2020) | [10.1111/jcmm.15882](https://doi.org/10.1111/jcmm.15882) |
| <span class="pk-badge pk-badge--neutral">evidence_only</span> | **TGFBR3** | `Q322` · IC50 | unknown | [Shinohara_2020](drugs/drug_prednisolone/pgx_Shinohara_2020_TGFBR3_Q322.md) | Shinohara T et al., Inherited genetic variants associated w…, Journal of cellular and mol… (2020) | [10.1111/jcmm.15882](https://doi.org/10.1111/jcmm.15882) |

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>—(suppressed)</code></td><td>the record is not in an accepted state, so its numbers are withheld. Labels, links and provenance stay visible for audit.</td></tr></tbody></table>
</details>

## Coverage

- **PubMed hits:** 340 matched, 78 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 8  ·  extracted 1  ·  needs_review 0  ·  rejected 7  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_18 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Magee_2001.pdf` | Magee MH et al., Prednisolone pharmacokinetics and pharm…, Journal of clinical pharmac… (2001) | popPK | 10 | [10.1177/00912700122012733](https://doi.org/10.1177/00912700122012733) | [11697751](https://pubmed.ncbi.nlm.nih.gov/11697751) | The title indicates a study on prednisolone pharmacokinetics, but the provided evidence contains no numeric parameter values. |
| `Xu_2007.pdf` | Xu J et al., A pharmacokinetic/pharmacodynamic appro…, Journal of pharmacokinetics… (2007) | popPK | 10 | [10.1007/s10928-007-9050-8](https://doi.org/10.1007/s10928-007-9050-8) | [17318442](https://pubmed.ncbi.nlm.nih.gov/17318442) | The title indicates a PK/PD study for prednisolone, but the provided evidence contains only the title and no numeric parameter values. |
| `Oosterhuis_1984.pdf` | Oosterhuis B et al., Pharmacokinetic-pharmacodynamic modelin…, The Journal of pharmacology… (1984) | popPK | 9 | not captured | [6716275](https://pubmed.ncbi.nlm.nih.gov/6716275) | The paper describes a PK-PD study of prednisolone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| `Honoré_2014.pdf` | Honoré PM et al., What do we know about steroids metaboli…, Blood purification (2014) | pd | 5 | [10.1159/000368390](https://doi.org/10.1159/000368390) | [25471548](https://www.ncbi.nlm.nih.gov/pubmed/25471548) | metadata signals extractable PD data (PK/PD) |
| `Möllmann_1995.pdf` | Möllmann H et al., Pharmacokinetic/pharmacodynamic evaluat…, Pharmaceutical research (1995) | pd | 5 | [10.1023/a:1016287104656](https://doi.org/10.1023/a:1016287104656) | [7494809](https://www.ncbi.nlm.nih.gov/pubmed/7494809) | metadata signals extractable PD data (PK-PD) |
| `Benkali_2010.pdf` | Benkali K et al., Population pharmacokinetics and Bayesia…, Clinical pharmacokinetics (2010) | pgx | 8 | [10.2165/11535950-000000000-00000](https://doi.org/10.2165/11535950-000000000-00000) | [20818834](https://www.ncbi.nlm.nih.gov/pubmed/20818834) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Miura_2008.pdf` | Miura M et al., Influence of CYP3A5, ABCB1 and NR1I2 po…, Steroids (2008) | pgx | 8 | [10.1016/j.steroids.2008.04.002](https://doi.org/10.1016/j.steroids.2008.04.002) | [18502461](https://www.ncbi.nlm.nih.gov/pubmed/18502461) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Moes_2012.pdf` | Moes DJ et al., Population pharmacokinetics and pharmac…, Clinical pharmacokinetics (2012) | pgx | 8 | [10.2165/11599710-000000000-00000](https://doi.org/10.2165/11599710-000000000-00000) | [22624503](https://www.ncbi.nlm.nih.gov/pubmed/22624503) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Press_2009.pdf` | Press RR et al., Explaining variability in tacrolimus ph…, Therapeutic drug monitoring (2009) | pgx | 8 | [10.1097/FTD.0b013e31819c3d6d](https://doi.org/10.1097/FTD.0b013e31819c3d6d) | [19258929](https://www.ncbi.nlm.nih.gov/pubmed/19258929) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Skauby_2017.pdf` | Skauby RH et al., Prednisolone and Prednisone Pharmacokin…, Therapeutic drug monitoring (2017) | pgx | 8 | [10.1097/FTD.0000000000000439](https://doi.org/10.1097/FTD.0000000000000439) | [28749817](https://www.ncbi.nlm.nih.gov/pubmed/28749817) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Tsuji_2026.pdf` | Tsuji H et al., The influence of CYP3A5 genotype on tac…, Rheumatology (Oxford, Engla… (2026) | pgx | 8 | [10.1093/rheumatology/keag183](https://doi.org/10.1093/rheumatology/keag183) | [41967124](https://www.ncbi.nlm.nih.gov/pubmed/41967124) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Udomkarnjananun_2025.pdf` | Udomkarnjananun S et al., Prediction of the Intra-T Lymphocyte Ta…, Clinical pharmacology and t… (2025) | pgx | 8 | [10.1002/cpt.3419](https://doi.org/10.1002/cpt.3419) | [39139076](https://www.ncbi.nlm.nih.gov/pubmed/39139076) | metadata signals extractable PGX data (CYP3A4*22, PK/PD-context) |
| `Yap_2020.pdf` | Yap DYH et al., Pharmacokinetics and pharmacogenomics o…, Nephrology, dialysis, trans… (2020) | pgx | 8 | [10.1093/ndt/gfy284](https://doi.org/10.1093/ndt/gfy284) | [30215770](https://www.ncbi.nlm.nih.gov/pubmed/30215770) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Farooq_2016.pdf` | Farooq M et al., CYP2D6 Is Inducible by Endogenous and E…, Drug metabolism and disposi… (2016) | pgx | 7 | [10.1124/dmd.115.069229](https://doi.org/10.1124/dmd.115.069229) | [26965986](https://www.ncbi.nlm.nih.gov/pubmed/26965986) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Noda_2013.pdf` | Noda S et al., Pharmacokinetic interaction between sor…, Cancer chemotherapy and pha… (2013) | pgx | 7 | [10.1007/s00280-013-2187-9](https://doi.org/10.1007/s00280-013-2187-9) | [23673446](https://www.ncbi.nlm.nih.gov/pubmed/23673446) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Truong_2023.pdf` | Truong B et al., Screening for clinically relevant drug-…, Journal of thrombosis and t… (2023) | pgx | 7 | [10.1007/s11239-023-02879-7](https://doi.org/10.1007/s11239-023-02879-7) | [37563503](https://www.ncbi.nlm.nih.gov/pubmed/37563503) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Zhang_2009.pdf` | Zhang ZY et al., Biotransformation and in vitro assessme…, Journal of pharmaceutical a… (2009) | pgx | 7 | [10.1016/j.jpba.2009.04.013](https://doi.org/10.1016/j.jpba.2009.04.013) | [19467820](https://www.ncbi.nlm.nih.gov/pubmed/19467820) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `van_2003.pdf` | van Duijnhoven EM et al., Increase in tacrolimus trough levels af…, Transplant international :… (2003) | pgx | 7 | [10.1007/s00147-003-0615-1](https://doi.org/10.1007/s00147-003-0615-1) | [12827231](https://www.ncbi.nlm.nih.gov/pubmed/12827231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-10T10:42:05.919866+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Appanna_2021 | not_relevant | 0 | 0 | The study investigates the metabolic activity of AKR1D1 splice variants in vitro but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters in humans. |
| PGx | Ardizzone_2002 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for sulfasalazine (acetylator phenotype) and azathioprine (TPMT), but does not report any pharmacogenomic effects on the PK or PD of prednisolone. |
| PGx | Benkali_2010 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus pharmacokinetics, not prednisolone. |
| PGx | Berends_2019 | not_relevant | 0 | 0 | The paper discusses pharmacokinetics of prednisolone but does not report any gene variant or genotype affecting its PK or PD parameters. |
| popPK | Bergmann_2012 | irrelevant | 2 | 0 | The text is a review article summarizing the complexity of prednisolone pharmacokinetics in transplantation but does not report original quantitative disposition parameters or specific numeric values. |
| popPK | Bloemena_1990 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling of lymphocyte responses rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for prednisolone, and no numeric PK values are present in the evidence. |
| PGx | Boddy_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of cyclophosphamide metabolism, not prednisolone. |
| PGx | Chocair_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of azathioprine (TPMT activity), not prednisolone. |
| PGx | Choong_2024 | not_relevant | 0 | 0 | The study analyzes the cost-effectiveness of genetic polymorphisms and does not report pharmacokinetic or pharmacodynamic parameters for prednisolone. |
| popPK | Conolly_1991 | irrelevant | 1 | 0 | The paper is a review of biologically based pharmacodynamic models that mentions prednisolone only as an example of a model, without providing any original quantitative pharmacokinetic parameter values. |
| PD | Conolly_1991 | not_relevant | 2 | 0 | The text is a review discussing the conceptual framework of biologically based PD models and mentions prednisolone only as an example of a system where such models exist, without providing any specific numeric PD parameters or data. |
| PGx | Cortellini_2025 | not_relevant | 0 | 0 | The paper reports on the efficacy and safety of pembrolizumab in NSCLC patients and does not investigate pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of prednisolone. |
| popPK | Czock_2005 | irrelevant | 2 | 0 | The paper is a review discussing general glucocorticoid PK/PD principles and simulations for methylprednisolone, without reporting specific quantitative PK parameter values for prednisolone. |
| PGx | Dai_2026 | not_relevant | 0 | 0 | The paper is a genomic study on IgA nephropathy and cardiometabolic diseases; it mentions prednisolone only as a candidate drug for repurposing based on gene-drug matching scores, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Dorji_2022 | not_relevant | 0 | 0 | The paper reports a case of omeprazole-induced galactorrhea and discusses CYP interactions, but it does not report a pharmacogenomic effect (gene variant) on the PK or PD of prednisolone. |
| PGx | Fakhfakh_2021 | not_relevant | 0 | 0 | The study investigates the association between CYP27B1 polymorphism and Vitamin D levels in SLE patients, not the pharmacokinetics or pharmacodynamics of prednisolone. |
| PGx | Farooq_2016 | not_relevant | 0 | 0 | The paper investigates the induction of CYP2D6 by corticosteroids (including prednisolone) but does not report how a gene variant or genotype affects the PK/PD of prednisolone. |
| PGx | Gummert_1995 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of azathioprine (TPMT), not prednisolone. |
| PGx | Hessels_2019 | not_relevant | 0 | 0 | The paper investigates azathioprine hypersensitivity and TPMT activity, not the pharmacokinetics or pharmacodynamics of prednisolone. |
| popPK | Honoré_2014 | irrelevant | 0 | 0 | The provided evidence consists only of a title indicating a review of steroid metabolism in renal disease, with no original quantitative pharmacokinetic parameters for prednisolone present. |
| PD | Honoré_2014 | not_relevant | 1 | 0 | The paper is a review discussing the status of PK/PD approaches in 2014 and does not present original data or numeric PD parameters for prednisolone. |
| PGx | Jacqz-Aigrain_1994 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of thiopurine drugs (TPMT activity) and only tests prednisolone as a potential inhibitor of TPMT in vitro, finding no effect; it does not report how genetic variants affect the PK/PD of prednisolone. |
| PGx | Kawase_2020 | not_relevant | 0 | 0 | The paper investigates the effect of inflammation and prednisolone on transporter expression in an animal model, not the effect of a specific gene variant on prednisolone pharmacokinetics or pharmacodynamics. |
| popPK | Kojima_2025 | irrelevant | 0 | 0 | The study is a clinical retrospective analysis of belimumab efficacy in SLE, not a pharmacokinetic study, and prednisolone is only mentioned as a concomitant medication dose. |
| PGx | Komenkul_2026 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus pharmacokinetics, not prednisolone. |
| popPK | Leber_2023 | irrelevant | 2 | 0 | Prednisolone is a co-administered drug in a hemoperfusion study where negligible clearance was observed, and no quantitative PK parameters (CL, V, etc.) for prednisolone are reported in the evidence. |
| popPK | Magee_2001 | relevant | 10 | 0 | The title indicates a study on prednisolone pharmacokinetics, but the provided evidence contains no numeric parameter values. |
| PD | Magee_2001 | not_relevant | 0 | 0 | The provided text is only the title of the paper and does not contain the full text, abstract, or data required to determine if numeric PD parameters are reported or derivable. |
| PGx | Mao_2024 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (prednisolone inducing UGTs affecting MMF) in vitro, not pharmacogenomic effects of gene variants on prednisolone PK/PD. |
| PGx | Mao_2024_2 | not_relevant | 0 | 0 | The study focuses on tacrolimus pharmacokinetics and mentions prednisolone only as a covariate affecting tacrolimus variability, not as the primary drug of interest for pharmacogenomic analysis. |
| PGx | Meyer_2013 | not_relevant | 0 | 0 | The paper investigates the metabolism of bupropion by 11b-HSD1 and does not report pharmacogenomic effects on the PK/PD of prednisolone. |
| popPK | Moes_2012 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of everolimus, not prednisolone. |
| PGx | Moes_2012 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenetics of everolimus, not prednisolone. |
| popPK | Möllmann_1995 | irrelevant | 2 | 0 | The paper compares deflazacort to prednisolone, making prednisolone a comparator rather than the primary subject, and no quantitative PK parameter values are present in the provided evidence. |
| PD | Möllmann_1995 | not_relevant | 0 | 0 | The provided text is only the title of a paper and does not contain the full text, data, or numeric PD parameters required to evaluate the pharmacodynamic relationship. |
| PGx | Noda_2013 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (prednisolone inducing sorafenib metabolism) in a single patient, not a pharmacogenomic effect of a gene variant on prednisolone's PK/PD. |
| popPK | Oosterhuis_1984 | relevant | 9 | 0 | The paper describes a PK-PD study of prednisolone in humans, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract/evidence. |
| PGx | Pedersen_2016 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (simvastatin and fluconazole) and mentions prednisolone only as a treatment, without reporting any pharmacogenomic effects on prednisolone PK/PD. |
| PGx | Pham_2008 | not_relevant | 0 | 0 | The paper reports a case where CYP3A5 genotyping was negative, and the issue was resolved by correcting drug administration timing, not by identifying a pharmacogenomic effect on prednisolone PK/PD. |
| PGx | Press_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus pharmacokinetics, not prednisolone. |
| PGx | Press_2010 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on Ciclosporin A, not prednisolone. |
| PGx | Schijvens_2019 | not_relevant | 2 | 0 | The paper is a review that discusses the potential role of pharmacogenetics but explicitly states that current knowledge is limited and does not report specific quantitative effects of gene variants on PK/PD parameters. |
| PGx | Shibata_1998 | not_relevant | 0 | 0 | The paper describes an analytical method for measuring glucocorticoids and does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Skauby_2017 | not_relevant | 3 | 2 | The study analyzes genetic variants (CYP3A5, ABCB1) but explicitly states that causality cannot be definitive due to the limited sample size, and does not report specific quantitative pharmacogenomic effect sizes. |
| PGx | Skauby_2021 | not_relevant | 0 | 0 | The study is an in vitro investigation of recombinant enzymes and does not report pharmacogenomic effects on PK/PD parameters in humans. |
| popPK | Snaterse_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of androgen receptor mutations and ligand binding, not a pharmacokinetic study, and reports no disposition parameters (CL, V, ka, etc.) for prednisolone. |
| PGx | Sogabe_2025 | not_relevant | 0 | 0 | The paper reports a clinical case of Erdheim-Chester disease treated with targeted therapy and prednisolone, but does not investigate or report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of prednisolone. |
| PGx | Sridhar_2022 | not_relevant | 0 | 0 | The paper describes an animal model of chronic hepatitis E infection using immunosuppressive drugs but does not report any pharmacogenomic effects on the PK or PD of prednisolone. |
| PGx | Størset_2014 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects (CYP3A5) on tacrolimus pharmacokinetics, not prednisolone. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate polyglutamates, and prednisolone is only mentioned as a concomitant medication/covariate, not as the subject drug. |
| PGx | Torubarova_1992 | not_relevant | 0 | 0 | The study examines the relationship between glucocorticoid receptor levels and prednisolone response, but does not report a pharmacogenomic effect of a specific gene variant on a PK or PD parameter. |
| PGx | Truong_2023 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions between DOACs and antineoplastic agents using pharmacovigilance data, not pharmacogenomic effects on prednisolone PK/PD. |
| PGx | Tsuji_2026 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus, not prednisolone. |
| PGx | Udomkarnjananun_2025 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on tacrolimus pharmacokinetics, not prednisolone. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance and explicitly states that prednisolone was not found to influence theophylline disposition; it does not report pharmacogenomic effects on prednisolone. |
| PGx | Varis_2000 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (itraconazole) rather than a pharmacogenomic effect (gene variant/genotype). |
| popPK | Xu_2007 | relevant | 10 | 0 | The title indicates a PK/PD study for prednisolone, but the provided evidence contains only the title and no numeric parameter values. |
| PD | Xu_2007 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic modeling to predict plasma concentrations, with no reported pharmacodynamic or exposure-response analysis. |
| PGx | Yap_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of mycophenolic acid, not prednisolone. |
| PGx | Yoshimura_2024 | not_relevant | 2 | 0 | The paper reports ex vivo drug sensitivity and clinical outcomes associated with age and molecular subtypes, but does not report specific pharmacokinetic or pharmacodynamic parameter changes driven by gene variants for prednisolone. |
| PGx | Zetterberg_2016 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (DDI) involving VX-509 and methyl-prednisolone, not a pharmacogenomic effect of a gene variant on prednisolone PK/PD. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper investigates in vitro metabolism and drug-drug interactions of prednisolone but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | van_2003 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (prednisolone affecting tacrolimus PK) but does not report any pharmacogenomic effect (gene variant/genotype) on a PK or PD parameter. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_prednisolone`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
