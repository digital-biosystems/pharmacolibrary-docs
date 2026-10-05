<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;protein C&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ProteinC_Cojutti2024_reference&quot;,&quot;label&quot;:&quot;Cojutti_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Cojutti2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ProteinC_Troisi2024_reference&quot;,&quot;label&quot;:&quot;Troisi_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Troisi2024_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# protein C

- **generic name:** protein C
- **ATC codes:** `B01AD12`
- **DrugBank:** [DB11312](https://go.drugbank.com/drugs/DB11312) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Protein C concentrate is used to treat purpura fulminans and protein C deficiency, acting as an antithrombotic agent. It is authorised in the European Union but appears to be a niche product, used only in these rare conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q28852357](https://www.wikidata.org/wiki/Q28852357) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 15:41 | 22:00 | 2/1/5 | 0/0/0 | 0/0/0 | 385,276/53,737 | ollama / qwen3.8:27b-mtp-q8_0 | 27 | 4/23 | 27/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Cojutti_2024_reference](drugs/drug_protein_c/ProteinC_Cojutti2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Cojutti PG et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01410-2](https://doi.org/10.1007/s40262-024-01410-2) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.125). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Troisi_2024_reference](drugs/drug_protein_c/ProteinC_Troisi2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Troisi C et al., Impact of Continuous Infusion Meropenem…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01436-6](https://doi.org/10.1007/s40262-024-01436-6) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_adolescents_12_to_16_y](drugs/drug_protein_c/ProteinC_Li2025_adolescents_12_to_16_y.md) | held back | 1-compartment, IV | 4 | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_adults_16_y](drugs/drug_protein_c/ProteinC_Li2025_adults_16_y.md) | held back | 1-compartment, IV | 4 | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_neonates_and_infants_birth_to_2_y](drugs/drug_protein_c/ProteinC_Li2025_neonates_and_infants_birth_to_2_y.md) | — | 1-compartment (no model) | 2 | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: C1_half_life_beta failed (ratio 2.2407)</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_population_estimate](drugs/drug_protein_c/ProteinC_Li2025_population_estimate.md) | — | 1-compartment (no model) | 2 (+2 cov.) | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.812). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_2_reference](drugs/drug_protein_c/ProteinC_Li2025v2_reference.md) | held back | 1-compartment, oral | 4 (+2 cov.) | Li Z et al., Pharmacokinetic Evidence Supporting Sub…, TH open : companion journal… (2025) | [10.1055/a-2731-5372](https://doi.org/10.1055/a-2731-5372) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Macias_2002_reference](drugs/drug_protein_c/ProteinC_Macias2002_reference.md) | — | 1-compartment (no model) | 0 | Macias WL et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.128148](https://doi.org/10.1067/mcp.2002.128148) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=protein_c) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: F5 (inactivator), F8 (inactivator).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 143 matched, 62 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 8  ·  extracted 2  ·  needs_review 5  ·  rejected 1  ·  stale 4
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Matsunaga_2012.pdf` | Matsunaga N et al., Time-dependent interaction between diff…, Molecular pharmacology (2012) | pgx | 7 | [10.1124/mol.111.076406](https://doi.org/10.1124/mol.111.076406) | [22355045](https://www.ncbi.nlm.nih.gov/pubmed/22355045) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-05T15:21:43.824639+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ali_2025 | not_relevant | 0 | 0 | The paper investigates the transcriptomic effects of MYBPC3 mutations on hypertrophic cardiomyopathy, not the pharmacokinetic or pharmacodynamic effects of a drug. |
| PGx | Annane_2018 | not_relevant | 0 | 0 | The study investigates clinical outcomes (mortality) rather than pharmacokinetic or pharmacodynamic parameters of the drug. |
| popPK | Bajzar_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of fibrinolysis and TAFI, not a pharmacokinetic study of protein_c. |
| PGx | Bansal_2024 | not_relevant | 0 | 0 | The study investigates the effect of a genetic variant on radiation-induced metabolic changes, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Bhattacharya_2014 | not_relevant | 0 | 0 | The paper investigates the role of the GIPC protein in autophagy and exosome biogenesis in pancreatic cancer, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Bombail_2004 | not_relevant | 0 | 0 | The paper investigates the molecular mechanisms of CYP3A4 gene regulation by transcription factors and xenobiotics, but does not report pharmacogenomic effects of human genetic variants on the PK or PD parameters of a specific drug (protein_c). |
| popPK | Boyd_2022 | irrelevant | 0 | 0 | The study investigates coagulation and inflammation biomarkers in dogs, not the pharmacokinetics of protein_c. |
| PGx | Carrera_2014 | not_relevant | 0 | 0 | The paper describes a genetic disease (ABCA3 null) and its clinical/pathological features, not the effect of a gene variant on the PK/PD of a specific drug. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of c-Myc inhibitors, not the pharmacokinetics of the drug protein_c. |
| popPK | Cojutti_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for dalbavancin, not protein_c. |
| PGx | Desai_2025 | not_relevant | 0 | 0 | The paper reports seroprevalence of anti-AAV9 antibodies in patients with MYBPC3 variants to assess eligibility for gene therapy, but it does not report how a gene variant affects the PK or PD parameters of a specific drug. |
| PGx | Douxfils_2020 | not_relevant | 2 | 0 | The paper is a review discussing VTE risk factors and testing for oral contraceptives, not a study reporting specific pharmacogenomic effects on the PK/PD parameters of protein C. |
| PGx | Ducret_2021 | not_relevant | 0 | 0 | The paper analyzes transcriptomic differences related to locomotor performance in frogs and does not report pharmacogenomic effects on PK/PD parameters for any drug. |
| PGx | Emmert_2013 | not_relevant | 0 | 0 | The paper investigates the frequency of BCRP+ cardiac resident cells in ischaemic myocardium, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Favory_2013 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of activated protein C on vascular reactivity, not the pharmacokinetic disposition parameters (CL, V, etc.) of the drug protein_c. |
| PGx | Gale_2006 | not_relevant | 0 | 0 | The paper describes engineered protein variants for therapeutic stability, not the effect of a patient's genetic variant on the PK/PD of a drug. |
| PGx | Giofrè_2017 | not_relevant | 0 | 0 | The paper reports a clinical case of hereditary thrombophilia and the efficacy of Rivaroxaban, but does not report pharmacokinetic or pharmacodynamic parameters of protein C or any other drug. |
| PGx | Hancock_2018 | not_relevant | 0 | 0 | The paper investigates the pathophysiological role of MUC5B overexpression in lung fibrosis and the therapeutic effect of a mucolytic agent, not the pharmacokinetic or pharmacodynamic effects of a specific drug on a protein target. |
| PGx | Johansson_2011 | not_relevant | 0 | 0 | The paper studies the effect of protein engineering (activation peptide insertion) on the pharmacokinetics of Factor VII, not the effect of a human gene variant or genotype on a drug's PK/PD. |
| PGx | Karapurkar_2025 | not_relevant | 0 | 0 | The paper investigates the role of the deubiquitinase USP11 in stabilizing the SFTPC protein and its I73T mutant, focusing on disease mechanisms and therapeutic targeting, rather than reporting a pharmacogenomic effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Kepa_2015 | not_relevant | 0 | 0 | The study investigates FVIII pharmacokinetics and explicitly states that protein C (PC) levels had no influence on FVIII PK. |
| popPK | Kumar_2015 | irrelevant | 0 | 0 | The paper is a mechanistic study on cardiac myosin-binding protein C phosphorylation in mouse myocytes and contains no pharmacokinetic data for the drug protein_c. |
| popPK | Kuster_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study on hypertrophic cardiomyopathy in transgenic mice and does not report pharmacokinetic parameters for protein_c. |
| PGx | Li_2010 | not_relevant | 0 | 0 | The paper investigates the effect of a CYP2B6 polymorphism on the enzyme's expression and induction by rifampicin, but it does not report pharmacokinetic or pharmacodynamic parameters for a specific drug substrate (protein_c). |
| PGx | Li_2023 | not_relevant | 0 | 0 | The paper investigates urinary metabolomics for predicting radiation-induced cardiac dysfunction in mice, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Lin_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on the antiviral activity of lobohedleolide against Hepatitis C virus and does not report pharmacokinetic parameters for protein_c. |
| PGx | Lind_1995 | not_relevant | 0 | 0 | The paper describes genetic mutations causing a congenital deficiency of the endogenous protein C, not the pharmacokinetic or pharmacodynamic effects of a drug. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper investigates the role of the OPTN gene in bone metabolism and aging, not the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Macias_2002 | irrelevant | 1 | 0 | The study analyzes the pharmacokinetics of drotrecogin alfa (activated protein C), not protein_c. |
| popPK | Manco-Johnson_1994 | irrelevant | 0 | 0 | The study measures steady-state plasma concentrations of protein C in sheep to assess the effects of glucose and insulin, but does not report pharmacokinetic disposition parameters (clearance, volume, half-life) or a compartmental model for protein C. |
| PGx | Matsunaga_2012 | not_relevant | 0 | 0 | The paper describes the circadian regulation of CYP2D6 expression by DEC2 in cell lines, not a pharmacogenomic effect of a specific gene variant on a PK/PD parameter. |
| popPK | Nakano_2019 | irrelevant | 0 | 0 | The paper is a mechanistic study of cardiomyocyte contractile properties and protein phosphorylation in dilated cardiomyopathy, not a pharmacokinetic study of protein_c. |
| PGx | Neafsey_2015 | not_relevant | 0 | 0 | The paper investigates the effect of parasite genotype on vaccine efficacy, not the effect of host genetic variants on the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Nevel_2025 | not_relevant | 0 | 0 | The paper describes genetic disorders of surfactant metabolism and their clinical consequences, not the effect of genetic variants on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Nollet_2023 | not_relevant | 0 | 0 | The paper investigates the interaction between a genetic mutation (Mybpc3) and diet on cardiac disease progression, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Osti_2025 | not_relevant | 0 | 0 | The paper investigates genetic determinants of a plasma biomarker (FVIIa-AT) and mortality risk, not the pharmacokinetic or pharmacodynamic parameters of a specific drug. |
| PGx | Pai_2016 | not_relevant | 0 | 0 | The paper is a qualitative review of package insert content and does not report primary pharmacokinetic or pharmacodynamic data for protein_c. |
| popPK | Palareti_1996 | irrelevant | 0 | 0 | The paper discusses warfarin pharmacokinetics and withdrawal, not protein_c. |
| PGx | Pankow_2017 | not_relevant | 0 | 0 | The paper investigates genetic determinants of endogenous Protein C levels (a hemostatic factor), not the pharmacokinetics or pharmacodynamics of a drug named "protein_c". |
| PGx | Pravenec_2001 | not_relevant | 0 | 0 | The paper describes a genetic mutation in a transcription factor (SREBP-1c) affecting lipid metabolism in a rat model, but does not report the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a specific drug. |
| popPK | Rios_2008 | irrelevant | 0 | 0 | The study investigates the effects of soy isoflavones on coagulation factors (including protein C) but does not report pharmacokinetic parameters (CL, V, etc.) for protein C. |
| PGx | Rodríguez-Antona_2003 | not_relevant | 0 | 0 | The paper describes the transcriptional regulation of CYP3A4 expression by transcription factors (C/EBP alpha and HNF-3 gamma) in cell models, but does not report a pharmacogenomic effect of a specific gene variant on the PK or PD of a specific drug. |
| PGx | Russell_2016 | not_relevant | 0 | 0 | The paper is a review discussing the potential for pharmacogenomics in sepsis and mentions protein C variants as prognostic biomarkers, but it does not report a specific pharmacogenomic effect on the PK or PD parameters of protein C. |
| popPK | Schulte_2022 | irrelevant | 0 | 0 | The paper is a diagnostic biomarker study for myocardial infarction subtypes and does not report pharmacokinetic parameters (CL, V, ka) for protein_c. |
| PGx | Sidorova_2016 | not_relevant | 0 | 0 | The paper investigates the molecular mechanism of menadione suppressing CYP1A activity but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Sinha_2019 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of recombinant protein C variants in a mouse model of GVHD, not the effect of human genetic variants on the PK/PD of a drug. |
| popPK | Stahl_2022 | irrelevant | 0 | 0 | The paper is a clinical trial on therapeutic plasma exchange in septic shock and does not report pharmacokinetic parameters for protein_c. |
| PGx | Strickland_2018 | not_relevant | 0 | 0 | The paper describes a case of vitamin K deficiency affecting coagulation factors (including protein C) due to genetic mutations, but it does not report a pharmacogenomic effect on the PK or PD parameters of a specific drug (protein_c is a coagulation factor, not a drug in this context). |
| PGx | Te_2023 | not_relevant | 0 | 0 | The paper is a general review of radiotheranostics in oncology and does not report specific pharmacogenomic effects on PK/PD parameters for protein_c. |
| PGx | Thielen_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic effect of an engineered protein variant (3K3A-aPC) on endothelial permeability, not the effect of a human genetic variant on the PK/PD of a drug. |
| popPK | Troisi_2024 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for meropenem, not protein_c. |
| PGx | Verstraete_1995 | not_relevant | 0 | 0 | The paper reviews the development of new thrombolytic agents and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper is a survey of hospital diagnostic and therapeutic capabilities, not a study reporting pharmacogenomic effects on PK/PD parameters. |
| PGx | Wu_2020 | not_relevant | 0 | 0 | The paper studies bacterial evolution and nitrate tolerance in Desulfovibrio vulgaris, not human pharmacogenomics or drug PK/PD parameters. |
| PGx | Yang_2014 | not_relevant | 0 | 0 | The paper describes the transcriptional regulation of the CYP2D49 gene by transcription factors (C/EBPα and HNF4α) in chickens, not the effect of a specific gene variant or genotype on the pharmacokinetics or pharmacodynamics of a specific drug. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper is a case report on aortic coarctation and hypertrophic cardiomyopathy, focusing on diagnosis and surgical management, and does not report pharmacogenomic effects on PK/PD parameters. |
| PGx | Yang_2023 | not_relevant | 0 | 0 | The paper investigates the transcriptional regulation of the ACSL1 gene in pigs and its role in adipogenesis, not the pharmacokinetics or pharmacodynamics of a drug. |
| popPK | Yokota_2024 | irrelevant | 0 | 0 | The study measures protein S activity as a biomarker of thrombosis risk in response to hormonal contraceptives, not the pharmacokinetics of a drug named protein_c. |
| PGx | Zheng_2017 | not_relevant | 0 | 0 | The paper studies plant gene regulation and metabolism, not human pharmacogenomics or drug PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 15:22 UTC</sub>
