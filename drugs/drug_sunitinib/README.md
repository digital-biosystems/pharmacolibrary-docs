<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;sunitinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Sunitinib_Wang2020_reference&quot;,&quot;label&quot;:&quot;Wang_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Wang2020_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Sunitinib_Yang2025_reference&quot;,&quot;label&quot;:&quot;Yang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_sunitinib/Sunitinib_Yang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# sunitinib

- **generic name:** sunitinib
- **ATC codes:** `L01EX01`
- **DrugBank:** [DB01268](https://go.drugbank.com/drugs/DB01268) · **PubChem:** [CID 5329102](https://pubchem.ncbi.nlm.nih.gov/compound/5329102)
- **molar mass:** 398.4738 g/mol (C22H27FN4O2) — DrugBank
- **groups:** approved, investigational

## About

Sunitinib is a protein kinase inhibitor used to treat several cancers, including kidney cancer, gastrointestinal stromal tumors, and neuroendocrine tumors. It is an approved medicine, authorised in the European Union, and widely used in cancer care.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q417542](https://www.wikidata.org/wiki/Q417542) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| sunitinib | parent | 398.474 | C22H27FN4O2 | DrugBank | [5329102](https://pubchem.ncbi.nlm.nih.gov/compound/5329102) | Liu_2020, Liu_2026, Valderrama_2025, Wang_2020, Yu_2015, de_2014 |
| SU12662 (SU012662) | metabolite | 370.428 | C20H23FN4O2 | PubChem | [10292573](https://pubchem.ncbi.nlm.nih.gov/compound/10292573) | Liu_2026, Valderrama_2025, Wang_2020, Yu_2015, de_2014 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:59 | 39:56 | 3/1/3 | 6/1/1 | 1/0/2 | 724,665/146,682 | openai / gpt-6-luna | 31 | 4/23 | 30/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Valderrama_2025_reference](drugs/drug_sunitinib/Sunitinib_Valderrama2025_reference.md) | held back | 1-compartment, oral | 3 | Valderrama D et al., Comparing Scientific Machine Learning W…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13313](https://doi.org/10.1002/psp4.13313) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Wang_2020_reference](drugs/drug_sunitinib/Sunitinib_Wang2020_reference.md) | ▶ model + simulator | 1-compartment, oral | 7 | Wang E et al., Population pharmacokinetics-pharmacodyn…, Cancer chemotherapy and pha… (2020) | [10.1007/s00280-020-04106-z](https://doi.org/10.1007/s00280-020-04106-z) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Yang_2025_reference](drugs/drug_sunitinib/Sunitinib_Yang2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Yang G et al., Translational Model-Informed Dose Selec…, Clinical and translational… (2025) | [10.1111/cts.70287](https://doi.org/10.1111/cts.70287) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — volume from this paper; review-gap-filled from other p…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Liu_2020_reference](drugs/drug_sunitinib/Sunitinib_Liu2020_reference.md) | — | 1-compartment (no model) | 3 | Liu HC et al., PK/PD modeling based on NO-ET homeostas…, Acta pharmacologica Sinica (2020) | [10.1038/s41401-019-0331-8](https://doi.org/10.1038/s41401-019-0331-8) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q27, Q76 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Liu_2026_reference](drugs/drug_sunitinib/Sunitinib_Liu2026_reference.md) | — | parent + metabolite (no model) | 3 | Liu H et al., Time-Dependent Bias and Prognostic Conf…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70447](https://doi.org/10.1002/cpt.70447) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [de_2014_reference](drugs/drug_sunitinib/Sunitinib_de2014_reference.md) | — | parent + metabolite (no model) | 3 | de Wit D et al., Effect of gastrointestinal resection on…, BMC cancer (2014) | [10.1186/1471-2407-14-575](https://doi.org/10.1186/1471-2407-14-575) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Yu_2015_reference](drugs/drug_sunitinib/Sunitinib_Yu2015_reference.md) | — | parent + metabolite (no model) | 5 | Yu H et al., Integrated semi-physiological pharmacok…, British journal of clinical… (2015) | [10.1111/bcp.12550](https://doi.org/10.1111/bcp.12550) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Hansson_2013_dBP](drugs/drug_sunitinib/pd_Hansson_2013_dBP.md) | diastolic blood pressure ← sunitinib · indirect response — drug stimulates the production of diastolic blood pressure | — | Hansson EK et al., PKPD Modeling of Predictors for Adverse…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.62](https://doi.org/10.1038/psp.2013.62) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 1.00).">human + animal</span> | [Hoshino-Yoshino_2011_efficacy](drugs/drug_sunitinib/pd_Hoshino_Yoshino_2011_efficacy.md) | efficacy ← sunitinib · direct Emax (saturable) effect | — | Hoshino-Yoshino A et al., Bridging from preclinical to clinical s…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-11-RG-043](https://doi.org/10.2133/dmpk.DMPK-11-RG-043) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kuburas_2022_MTT](drugs/drug_sunitinib/pd_Kuburas_2022_MTT.md) | Cell viability in hepatoma G2 cells ← sunitinib · inhibition effect | — | Kuburas R et al., Metformin Protects Against Sunitinib-in…, Journal of cardiovascular p… (2022) | [10.1097/FJC.0000000000001256](https://doi.org/10.1097/FJC.0000000000001256) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Kuburas_2022_MTT_2](drugs/drug_sunitinib/pd_Kuburas_2022_MTT_2.md) | Cell viability in HL-60 cells ← sunitinib · inhibition effect | — | Kuburas R et al., Metformin Protects Against Sunitinib-in…, Journal of cardiovascular p… (2022) | [10.1097/FJC.0000000000001256](https://doi.org/10.1097/FJC.0000000000001256) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lagache_2026_cell_viability](drugs/drug_sunitinib/pd_Lagache_2026_cell_viability.md) | cell viability ← sunitinib · inhibition effect | — | Lagache L et al., Clone-By-Clone Therapy Guidance in Lumi…, Molecular & cellular proteo… (2026) | [10.1016/j.mcpro.2026.101639](https://doi.org/10.1016/j.mcpro.2026.101639) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Lagache_2026_cell_viability_2](drugs/drug_sunitinib/pd_Lagache_2026_cell_viability_2.md) | cell viability ← sunitinib · inhibition effect | — | Lagache L et al., Clone-By-Clone Therapy Guidance in Lumi…, Molecular & cellular proteo… (2026) | [10.1016/j.mcpro.2026.101639](https://doi.org/10.1016/j.mcpro.2026.101639) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Liu_2020_ET_1](drugs/drug_sunitinib/pd_Liu_2020_ET_1.md) | ET-1 biomarker turnover ← sunitinib | — | Liu HC et al., PK/PD modeling based on NO-ET homeostas…, Acta pharmacologica Sinica (2020) | [10.1038/s41401-019-0331-8](https://doi.org/10.1038/s41401-019-0331-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Liu_2020_NO](drugs/drug_sunitinib/pd_Liu_2020_NO.md) | NO biomarker turnover ← sunitinib | — | Liu HC et al., PK/PD modeling based on NO-ET homeostas…, Acta pharmacologica Sinica (2020) | [10.1038/s41401-019-0331-8](https://doi.org/10.1038/s41401-019-0331-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Liu_2020_SBP](drugs/drug_sunitinib/pd_Liu_2020_SBP.md) | SBP biomarker turnover ← sunitinib | — | Liu HC et al., PK/PD modeling based on NO-ET homeostas…, Acta pharmacologica Sinica (2020) | [10.1038/s41401-019-0331-8](https://doi.org/10.1038/s41401-019-0331-8) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2020_2_CSC](drugs/drug_sunitinib/pd_Wang_2020_2_CSC.md) | estimated CSC frequency ← sunitinib · stimulation effect | — | Wang S et al., Mechanistic Pharmacokinetic/Pharmacodyn…, The AAPS journal (2020) | [10.1208/s12248-020-0428-5](https://doi.org/10.1208/s12248-020-0428-5) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Wang_2020_2_tumour_size](drugs/drug_sunitinib/pd_Wang_2020_2_tumour_size.md) | tumour size ← sunitinib · stimulation effect | — | Wang S et al., Mechanistic Pharmacokinetic/Pharmacodyn…, The AAPS journal (2020) | [10.1208/s12248-020-0428-5](https://doi.org/10.1208/s12248-020-0428-5) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Hansson_2013_OS](drugs/drug_sunitinib/pd_Hansson_2013_OS.md) | overall survival · time-to-event model | — | Hansson EK et al., PKPD Modeling of Predictors for Adverse…, CPT: pharmacometrics & syst… (2013) | [10.1038/psp.2013.62](https://doi.org/10.1038/psp.2013.62) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Liu_2026_14](drugs/drug_sunitinib/pd_Liu_2026_14.md) | Treatment discontinuation due to AEs ← sunitinib and SU12662 · time-to-event model | — | Liu H et al., Time-Dependent Bias and Prognostic Conf…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70447](https://doi.org/10.1002/cpt.70447) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Liu_2026_OS](drugs/drug_sunitinib/pd_Liu_2026_OS.md) | Overall survival ← sunitinib and SU12662 · time-to-event model | — | Liu H et al., Time-Dependent Bias and Prognostic Conf…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70447](https://doi.org/10.1002/cpt.70447) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Liu_2026_TTP](drugs/drug_sunitinib/pd_Liu_2026_TTP.md) | Time to progression ← sunitinib and SU12662 · time-to-event model | — | Liu H et al., Time-Dependent Bias and Prognostic Conf…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70447](https://doi.org/10.1002/cpt.70447) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Liu_2026_resp](drugs/drug_sunitinib/pd_Liu_2026_resp.md) | Time to first dose reduction ← sunitinib and SU12662 · time-to-event model | — | Liu H et al., Time-Dependent Bias and Prognostic Conf…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70447](https://doi.org/10.1002/cpt.70447) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lindauer_2010_DBP](drugs/drug_sunitinib/pd_Lindauer_2010_DBP.md) | diastolic blood pressure · model not identified | — | Lindauer A et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical pharmacology and t… (2010) | [10.1038/clpt.2010.20](https://doi.org/10.1038/clpt.2010.20) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lindauer_2010_SBP](drugs/drug_sunitinib/pd_Lindauer_2010_SBP.md) | systolic blood pressure · model not identified | — | Lindauer A et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical pharmacology and t… (2010) | [10.1038/clpt.2010.20](https://doi.org/10.1038/clpt.2010.20) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lindauer_2010_VEGF_A](drugs/drug_sunitinib/pd_Lindauer_2010_VEGF_A.md) | VEGF-A level · model not identified | — | Lindauer A et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical pharmacology and t… (2010) | [10.1038/clpt.2010.20](https://doi.org/10.1038/clpt.2010.20) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Lindauer_2010_sVEGFR_2](drugs/drug_sunitinib/pd_Lindauer_2010_sVEGFR_2.md) | sVEGFR-2 level · model not identified | — | Lindauer A et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical pharmacology and t… (2010) | [10.1038/clpt.2010.20](https://doi.org/10.1038/clpt.2010.20) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> | **UGT1A1** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Terada_2016](drugs/drug_sunitinib/pgx_Terada_2016_UGT1A1_safety.md) | Terada T, [Pharmaceutical Investigation for Indiv…, Yakugaku zasshi : Journal o… (2016) | [10.1248/yakushi.16-00181](https://doi.org/10.1248/yakushi.16-00181) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **FLT3** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Kato_2017](drugs/drug_sunitinib/pgx_Kato_2017_FLT3_Q100.md) | Kato R et al., Characteristics of early-onset hematoto…, BMC cancer (2017) | [10.1186/s12885-017-3205-9](https://doi.org/10.1186/s12885-017-3205-9) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> | **ABCB1** | `Q27` · CL/F | transport | [Zhang_2018](drugs/drug_sunitinib/pgx_Zhang_2018_ABCB1_Q27.md) | Zhang Y et al., Association analysis of SNPs present in…, Oncotarget (2018) | [10.18632/oncotarget.23881](https://doi.org/10.18632/oncotarget.23881) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sunitinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/transport, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/transport | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/transport, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/transport | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/transport, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/transport, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `UGT1A1` safety_allele | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `UGT1A1` safety_allele | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | liver | `ABCC2` inhibitor, `ABCC4` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CSF1R (inhibitor), FLT1 (inhibitor), FLT3 (inhibitor), FLT3 (unknown), FLT4 (inhibitor), KDR (inhibitor), KIT (inhibitor), MET (inhibitor), PDGFRA (inhibitor), PDGFRB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 846 matched, 87 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 7  ·  extracted 3  ·  needs_review 3  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_15 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yu_2015.pdf` | Yu H et al., Integrated semi-physiological pharmacok…, British journal of clinical… (2015) | popPK | 10 | [10.1111/bcp.12550](https://doi.org/10.1111/bcp.12550) | [25393890](https://pubmed.ncbi.nlm.nih.gov/25393890) | The human population-PK model reports numeric clearance values for sunitinib and SU12662. |
| `Lindauer_2010.pdf` | Lindauer A et al., Pharmacokinetic/pharmacodynamic modelin…, Clinical pharmacology and t… (2010) | popPK | 8 | [10.1038/clpt.2010.20](https://doi.org/10.1038/clpt.2010.20) | [20376000](https://pubmed.ncbi.nlm.nih.gov/20376000) | This is a human sunitinib PK/PD modeling study, but the provided evidence contains no numeric disposition parameter values. |
| `Hamuro_2022.pdf` | Hamuro L et al., Exposure-Response Analysis to Support N…, Clinical cancer research :… (2022) | pd | 5 | [10.1158/1078-0432.CCR-21-3149](https://doi.org/10.1158/1078-0432.CCR-21-3149) | [34980597](https://www.ncbi.nlm.nih.gov/pubmed/34980597) | metadata signals extractable PD data (Exposure-Response) |
| `Chen_2024.pdf` | Chen Y et al., Development of a new class of potent an…, European journal of medicin… (2024) | pd | 4 | [10.1016/j.ejmech.2023.115931](https://doi.org/10.1016/j.ejmech.2023.115931) | [38016297](https://www.ncbi.nlm.nih.gov/pubmed/38016297) | metadata signals extractable PD data (IC50) |
| `Mashkani_2016.pdf` | Mashkani B et al., FMS-like tyrosine kinase 3 (FLT3) inhib…, European journal of pharmac… (2016) | pd | 4 | [10.1016/j.ejphar.2016.02.048](https://doi.org/10.1016/j.ejphar.2016.02.048) | [26896780](https://www.ncbi.nlm.nih.gov/pubmed/26896780) | metadata signals extractable PD data (EC50) |
| `van_2016.pdf` | van der Mijn JC et al., Sunitinib activates Axl signaling in re…, International journal of ca… (2016) | pd | 4 | [10.1002/ijc.30022](https://doi.org/10.1002/ijc.30022) | [26815723](https://www.ncbi.nlm.nih.gov/pubmed/26815723) | metadata signals extractable PD data (IC50) |
| `Chae_2016.pdf` | Chae JW et al., BSA and ABCB1 polymorphism affect the p…, Cancer chemotherapy and pha… (2016) | pgx | 8 | [10.1007/s00280-016-3104-9](https://doi.org/10.1007/s00280-016-3104-9) | [27485537](https://www.ncbi.nlm.nih.gov/pubmed/27485537) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Diekstra_2014.pdf` | Diekstra MH et al., Association analysis of genetic polymor…, Clinical pharmacology and t… (2014) | pgx | 8 | [10.1038/clpt.2014.47](https://doi.org/10.1038/clpt.2014.47) | [24566734](https://www.ncbi.nlm.nih.gov/pubmed/24566734) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Shah_2025.pdf` | Shah HN et al., Factors Affecting Pharmacokinetics of S…, European journal of drug me… (2025) | pgx | 8 | [10.1007/s13318-025-00966-z](https://doi.org/10.1007/s13318-025-00966-z) | [41023290](https://www.ncbi.nlm.nih.gov/pubmed/41023290) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |
| `Adams_2007.pdf` | Adams VR et al., Sunitinib malate for the treatment of m…, Clinical therapeutics (2007) | pgx | 7 | [10.1016/j.clinthera.2007.07.022](https://doi.org/10.1016/j.clinthera.2007.07.022) | [17825686](https://www.ncbi.nlm.nih.gov/pubmed/17825686) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Chee_2016.pdf` | Chee EL et al., Sunitinib tissue distribution changes a…, European journal of drug me… (2016) | pgx | 7 | [10.1007/s13318-015-0264-7](https://doi.org/10.1007/s13318-015-0264-7) | [25656737](https://www.ncbi.nlm.nih.gov/pubmed/25656737) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ding_2013.pdf` | Ding JF et al., [Clinical pharmacokinetics of small mol…, Yao xue xue bao = Acta phar… (2013) | pgx | 7 | not captured | [24133973](https://www.ncbi.nlm.nih.gov/pubmed/24133973) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jiang_2020.pdf` | Jiang L et al., The pharmacokinetic interaction between…, Cancer chemotherapy and pha… (2020) | pgx | 7 | [10.1007/s00280-019-03985-1](https://doi.org/10.1007/s00280-019-03985-1) | [31691077](https://www.ncbi.nlm.nih.gov/pubmed/31691077) | metadata signals extractable PGX data (UGT1A1, PK/PD-context) |
| `Kloth_2014.pdf` | Kloth JS et al., Predictive value of CYP3A and ABCB1 phe…, Clinical pharmacokinetics (2014) | pgx | 7 | [10.1007/s40262-013-0111-4](https://doi.org/10.1007/s40262-013-0111-4) | [24234588](https://www.ncbi.nlm.nih.gov/pubmed/24234588) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Szałek_2013.pdf` | Szałek E et al., Pharmacokinetics of sunitinib in combin…, Pharmacological reports : PR (2013) | pgx | 7 | [10.1016/s1734-1140(13)71497-x](https://doi.org/10.1016/s1734-1140(13)71497-x) | [24399735](https://www.ncbi.nlm.nih.gov/pubmed/24399735) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T07:30:58.205318+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Adams_2007 | not_relevant | 0 | 0 | This review does not report a gene variant, genotype, or phenotype changing a sunitinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | Beretta_2017 | not_relevant | 0 | 0 | The review discusses sunitinib interactions with ABC transporters and drug resistance, but reports no gene-variant/genotype/phenotype effect on a sunitinib PK or PD parameter. |
| PGx | Bilbao-Meseguer_2015 | not_relevant | 0 | 0 | The paper reviews drug–drug interactions with sunitinib and does not report effects of genetic variants or phenotypes on its PK or PD parameters. |
| PGx | Cassol_2014 | not_relevant | 0 | 0 | The paper examines FGFR4 genotype and tumor-marker associations, but does not report an effect of genotype on sunitinib pharmacokinetics or pharmacodynamics. |
| popPK | Castellano_2009 | irrelevant | 0 | 0 | This is a human quality-of-life study and reports no quantitative sunitinib pharmacokinetic parameters. |
| popPK | Cella_2008 | irrelevant | 0 | 0 | This reports quality-of-life outcomes, not quantitative sunitinib pharmacokinetic parameters. |
| PGx | Chee_2016 | not_relevant | 0 | 0 | Reports a ketoconazole drug interaction in mice, not a gene variant, genotype, or phenotype effect on sunitinib PK/PD. |
| PGx | Cheng_2020 | not_relevant | 0 | 0 | The study examines acquired cellular resistance mediated by LINC00160/SAA1 expression and ABCB1 transport, not an effect of a gene variant, genotype, or phenotype on a sunitinib PK/PD parameter. |
| popPK | Czyrski_2015 | irrelevant | 1 | 0 | The study models levofloxacin, not sunitinib, and provides no numeric sunitinib parameters. |
| PGx | Diekstra_2015 | not_relevant | 2 | 8 | Genotypes are associated with dose reductions and clinical outcomes, but the paper does not report effects on a sunitinib PK or PD parameter. |
| PGx | Ding_2013 | not_relevant | 0 | 0 | The review describes sunitinib metabolism and transport but does not report how a genetic variant, genotype, or phenotype affects its PK or PD. |
| PGx | Duckett_2010 | not_relevant | 0 | 0 | This review discusses sunitinib metabolism and transport but reports no gene variant, genotype, or phenotype effect on its PK or PD parameters. |
| popPK | Eun_2026 | irrelevant | 0 | 0 | Sunitinib is included for kinase-selectivity predictions, with no quantitative pharmacokinetic disposition parameters reported. |
| PGx | Fernandes_2009 | not_relevant | 0 | 0 | The review discusses GIST treatment and KIT mutations but does not report genotype effects on sunitinib pharmacokinetic or pharmacodynamic parameters. |
| PGx | Giuliano_2015 | not_relevant | 0 | 0 | The study examines cellular sunitinib resistance and ABCB1 expression, not effects of a gene variant, genotype, or phenotype on a PK/PD parameter. |
| PGx | Grgic_2011 | not_relevant | 0 | 0 | This review discusses everolimus, but reports no pharmacogenomic effect on a sunitinib PK or PD parameter. |
| popPK | Hamuro_2022 | irrelevant | 0 | 0 | no_text gate: only 130 chars of text extracted (&lt; 400) |
| popPK | Hansson_2013 | irrelevant | 4 | 1 | Sunitinib exposure uses CL/F values from a previously developed PK model, but no numeric disposition parameter estimates are provided here. |
| PGx | Hassanein_2016 | not_relevant | 0 | 0 | The review discusses FLT3 inhibitors and FLT3-mutated AML but reports no genotype effect on a sunitinib PK or PD parameter. |
| popPK | Hoshino-Yoshino_2011 | irrelevant | 2 | 0 | It compares exposure but reports no numeric sunitinib disposition parameters in the provided evidence. |
| popPK | Ibrahim_2025 | irrelevant | 0 | 0 | The study reports pharmacometric results for ibrutinib, not sunitinib. |
| PGx | Iida_2021 | not_relevant | 0 | 0 | The paper discusses GIST targets and DS-6157a, but does not report a gene variant or genotype effect on sunitinib pharmacokinetics or pharmacodynamics. |
| PGx | Jiang_2020 | not_relevant | 0 | 0 | The paper concerns a drug–drug interaction between irinotecan and sunitinib, not a pharmacogenomic effect. |
| PGx | Katoh_2006 | not_relevant | 0 | 0 | The paper discusses VEGFD promoter evolution and signaling but reports no genetic effect on any sunitinib pharmacokinetic or pharmacodynamic parameter. |
| popPK | Kuburas_2022 | irrelevant | 0 | 0 | The study examines cardiotoxicity and cell responses, with no quantitative sunitinib disposition parameters reported. |
| popPK | Lagache_2026 | irrelevant | 0 | 0 | This is a breast-cancer proteomics and tumoroid drug-testing study with no quantitative sunitinib disposition parameters. |
| PGx | Li_2012 | not_relevant | 0 | 0 | KIT mutation status was associated with progression-free survival, but the paper reports no pharmacokinetic or pharmacodynamic parameter of sunitinib. |
| popPK | Lindauer_2010 | relevant | 8 | 1 | This is a human sunitinib PK/PD modeling study, but the provided evidence contains no numeric disposition parameter values. |
| PGx | Loulergue_2017 | not_relevant | 0 | 0 | The paper reports no gene variant, genotype, or phenotype effect on a sunitinib PK or PD parameter. |
| popPK | Mashkani_2016 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PGx | Minematsu_2011 | not_relevant | 0 | 0 | The paper studies sunitinib as a transporter inhibitor, but reports no genotype-dependent effect on sunitinib PK or PD. |
| PGx | Mulet-Margalef_2016 | not_relevant | 0 | 0 | KIT genotype is discussed in relation to clinical response, but no gene variant or phenotype is reported to change a sunitinib PK or PD parameter. |
| popPK | Narayan_2017 | irrelevant | 0 | 0 | This study evaluates cardiotoxicity and reports no quantitative sunitinib disposition parameters. |
| PGx | Nishida_2009 | not_relevant | 2 | 2 | The review links GIST tumor mutations to sunitinib sensitivity or resistance but does not report a genotype effect on a sunitinib PK/PD parameter. |
| PGx | Overton_2014 | not_relevant | 0 | 0 | The text mentions sunitinib only as second-line therapy and reports no genotype-dependent effect on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Pal_2020 | irrelevant | 0 | 0 | Sunitinib is used as a mechanistic inhibitor, and no quantitative pharmacokinetic parameters are reported. |
| PGx | Pellat_2021 | not_relevant | 0 | 0 | Sunitinib is mentioned as a treatment, but no gene variant, genotype, or phenotype effect on its pharmacokinetic or pharmacodynamic parameters is reported. |
| popPK | Ravaud_2011 | irrelevant | 0 | 0 | This review reports exposure-response findings but no quantitative sunitinib disposition parameters. |
| PGx | Reichardt_2010 | not_relevant | 0 | 0 | The text discusses tumour genotype and clinical response to sunitinib, but reports no genotype effect on a sunitinib PK or PD parameter. |
| popPK | Shahraz_2026 | irrelevant | 0 | 0 | The population-PK model and parameter values are for savolitinib, not sunitinib. |
| popPK | Stein_2012 | irrelevant | 0 | 0 | This models everolimus tumor response; sunitinib is mentioned only as prior therapy, with no sunitinib PK parameters. |
| PGx | Swiatek_2020 | not_relevant | 0 | 0 | The study reports cell-line responses to sunitinib but no gene-associated change in a sunitinib PK or PD parameter. |
| PGx | Szałek_2013 | not_relevant | 0 | 0 | The study reports fluoroquinolone drug–drug interactions in rabbits, not a gene variant, genotype, or phenotype effect. |
| popPK | Tan_2024 | irrelevant | 0 | 0 | This is a human cabozantinib population-PK study, not a sunitinib study. |
| PGx | Terada_2015 | not_relevant | 2 | 0 | The text mentions transporter polymorphisms as a general source of TKI variability but reports no sunitinib-specific genotype effect on a PK or PD parameter. |
| popPK | Wang_2020_2 | irrelevant | 3 | 0 | The study models drug effects in xenografts but reports no quantitative sunitinib disposition parameters in the provided evidence. |
| PGx | Wellmann_2018 | not_relevant | 0 | 0 | The paper mentions a CYP3A5–sunitinib association but does not report an effect on a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Widmer_2014 | not_relevant | 0 | 0 | The review mentions pharmacogenetics generally but reports no gene-variant effect on a sunitinib PK or PD parameter. |
| popPK | Wu_2026 | irrelevant | 0 | 0 | The quantitative PK model is for bosutinib, not sunitinib. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The quantitative PK models are for iruplinalkib, not sunitinib. |
| popPK | Yao_2025 | irrelevant | 0 | 0 | This is a bibliometric analysis, not a sunitinib PK study, and it reports no sunitinib disposition parameters. |
| PGx | van_2009 | not_relevant | 1 | 8 | Genetic variants are associated with toxicity rates, but the paper does not report changes in a sunitinib pharmacokinetic or pharmacodynamic parameter. |
| PGx | van_2011 | not_relevant | 0 | 0 | The paper reports a grapefruit-juice interaction with sunitinib exposure, not an effect of a gene variant, genotype, or phenotype. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:32 UTC</sub>
