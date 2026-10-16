<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;protein C&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;ProteinC_Cojutti2024_reference&quot;,&quot;label&quot;:&quot;Cojutti_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Cojutti2024_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;ProteinC_Li2025v2_reference&quot;,&quot;label&quot;:&quot;Li_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_protein_c/ProteinC_Li2025v2_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

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
| 2026-10-14 21:29 | 5:49 | 2/1/4 | 0/0/0 | 0/0/1 | 397,116/21,017 | einfracz / qwen3.8-27b | 27 | 4/23 | 27/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.8). Primary extraction retained.">cross-check: partial</span> | [Cojutti_2024_reference](drugs/drug_protein_c/ProteinC_Cojutti2024_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Cojutti PG et al., Population Pharmacokinetics and Pharmac…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01410-2](https://doi.org/10.1007/s40262-024-01410-2) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.812). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Li_2025_2_reference](drugs/drug_protein_c/ProteinC_Li2025v2_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+2 cov.) | Li Z et al., Pharmacokinetic Evidence Supporting Sub…, TH open : companion journal… (2025) | [10.1055/a-2731-5372](https://doi.org/10.1055/a-2731-5372) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_adolescents_12_to_16_y](drugs/drug_protein_c/ProteinC_Li2025_adolescents_12_to_16_y.md) | held back | 1-compartment, IV | 4 | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Li_2025_adults_16_y](drugs/drug_protein_c/ProteinC_Li2025_adults_16_y.md) | held back | 1-compartment, IV | 4 | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — clearance/elimination from this paper; review-gap-fill…</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_neonates_and_infants_birth_to_2_y](drugs/drug_protein_c/ProteinC_Li2025_neonates_and_infants_birth_to_2_y.md) | — | 1-compartment (no model) | 2 | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C1_half_life_beta failed (ratio 2.2407)</sub><br><sub>route_to: `human_review`</sub> | [Li_2025_population_estimate](drugs/drug_protein_c/ProteinC_Li2025_population_estimate.md) | — | 1-compartment (no model) | 2 (+2 cov.) | Li Z et al., Evaluation of pharmacokinetics of intra…, Research and practice in th… (2025) | [10.1016/j.rpth.2025.102859](https://doi.org/10.1016/j.rpth.2025.102859) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Macias_2002_reference](drugs/drug_protein_c/ProteinC_Macias2002_reference.md) | — | 1-compartment (no model) | 0 | Macias WL et al., Pharmacokinetic-pharmacodynamic analysi…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.128148](https://doi.org/10.1067/mcp.2002.128148) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 0.00).">in vitro</span> | **CYP2B6** | `Q22` · CL | metabolism | [Li_2010](drugs/drug_protein_c/pgx_Li_2010_CYP2B6_Q22.md) | Li H et al., Synergistically enhanced CYP2B6 inducib…, Molecular pharmacology (2010) | [10.1124/mol.110.065185](https://doi.org/10.1124/mol.110.065185) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=protein_c).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2B6` metabolism | PGx paper |

<sub>Actors without a tissue in the table: F5 (inactivator), F8 (inactivator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 143 matched, 62 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 7  ·  extracted 2  ·  needs_review 4  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Matsunaga_2012.pdf` | Matsunaga N et al., Time-dependent interaction between diff…, Molecular pharmacology (2012) | pgx | 7 | [10.1124/mol.111.076406](https://doi.org/10.1124/mol.111.076406) | [22355045](https://www.ncbi.nlm.nih.gov/pubmed/22355045) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-14T21:23:57.156670+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ali_2025 | not_relevant | 0 | 0 | The paper is a basic science study on the pathophysiology of hypertrophic cardiomyopathy and gene expression; it does not involve a drug (protein_c) or any pharmacokinetic/pharmacodynamic parameters. |
| PGx | Annane_2018 | not_relevant | 2 | 2 | The study assesses the interaction between genotypes and clinical mortality outcomes rather than pharmacokinetic or pharmacodynamic parameters. |
| popPK | Bajzar_1996 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanism study of TAFI and activated protein C on fibrinolysis, not the pharmacokinetics of protein_c. |
| PGx | Bansal_2024 | not_relevant | 0 | 0 | The study examines the protective effects of a modified protein C genotype on metabolic outcomes following radiation exposure, which is not a pharmacokinetic or pharmacodynamic effect of a specific drug. |
| PGx | Bhattacharya_2014 | not_relevant | 0 | 0 | The study investigates the role of GIPC in autophagy and drug resistance mechanisms in cancer cells, but does not report pharmacogenomic effects (gene variants) on the pharmacokinetics or pharmacodynamics of a specific drug candidate (protein_c). |
| PGx | Bombail_2004 | not_relevant | 0 | 0 | The paper investigates transcription factor binding sites and basal/induced gene expression of CYP3A4, not pharmacogenomic variation in a drug's PK/PD parameters. |
| popPK | Boyd_2022 | irrelevant | 0 | 0 | The study evaluates coagulation and inflammation biomarkers in dogs after fluid administration (HES vs. Hartmann's), which is unrelated to the pharmacokinetics of protein_c. |
| PGx | Carrera_2014 | not_relevant | 0 | 0 | The paper describes a genetic disease (ABCA3 deficiency) and its clinical/pathological features, but it does not report the pharmacokinetics or pharmacodynamics of an exogenous drug. |
| popPK | Chen_2021 | irrelevant | 0 | 0 | The paper describes the synthesis and biological activity of c-Myc inhibitors, which is a study of a different drug target and does not report pharmacokinetic parameters for protein_c. |
| popPK | Cojutti_2024 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for dalbavancin, not the target drug protein_c. |
| PGx | Desai_2025 | not_relevant | 0 | 0 | The study evaluates seroeligibility (pre-existing antibodies) for an AAV9 gene therapy trial but does not report pharmacokinetic or pharmacodynamic data for the therapeutic product (protein_c) or any small molecule drug. |
| PGx | Douxfils_2020 | not_relevant | 3 | 0 | The paper discusses genetic risk factors (protein C deficiency, etc.) for thromboembolism and the pharmacodynamics of oral contraceptives on hemostasis, but it does not report a specific pharmacogenomic interaction where a gene variant alters the PK/PD parameters of the specific target 'protein_c' as a drug, nor does it contain quantitative effect sizes for such a mechanism. |
| PGx | Ducret_2021 | not_relevant | 0 | 0 | The paper analyzes transcriptomic variations in frog locomotor performance and does not study the pharmacokinetics or pharmacodynamics of any drug. |
| PGx | Emmert_2013 | not_relevant | 0 | 0 | The paper characterizes cell frequencies and distribution in human myocardium but does not report a pharmacogenomic effect on a PK or PD parameter of a specific drug (protein_c). |
| popPK | Favory_2013 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of Activated Protein C on vascular reactivity, not the pharmacokinetic parameters (CL, V, etc.) of the drug protein_c. |
| PGx | Gale_2006 | not_relevant | 0 | 0 | The study describes protein engineering of a therapeutic drug (recombinant FVIII variants) rather than reporting a pharmacogenomic effect where a patient's host gene variant alters the PK/PD of the drug. |
| PGx | Giofrè_2017 | not_relevant | 0 | 0 | The paper reports a case of hereditary thrombophilia involving PAI-1 and MTHFR variants, but it does not report any change in the PK or PD parameters of a specific drug (the drug is Rivaroxaban, but the text does not describe how the genotypes altered its pharmacokinetics or pharmacodynamics, only that the treatment was effective). |
| PGx | Hancock_2018 | not_relevant | 0 | 0 | The paper investigates the mechanistic role of Muc5b overexpression in lung fibrosis and the effects of the mucolytic P-2119, but does not report pharmacokinetic or pharmacodynamic changes of protein_c based on a genetic variant. |
| PGx | Johansson_2011 | not_relevant | 0 | 0 | The paper investigates the effect of engineered activation peptides on the pharmacokinetics of Factor VII, not the effect of a human gene variant (pharmacogenomics) on Protein C. |
| PGx | Karapurkar_2025 | not_relevant | 0 | 0 | The paper reports a gene-based difference in protein half-life and fibrosis phenotype, but it studies a deubiquitinase inhibitor (MTX) acting on an endogenous disease modifier, not the pharmacokinetics or pharmacodynamics of a therapeutic drug. |
| PGx | Kepa_2015 | not_relevant | 0 | 0 | The paper studies FVIII pharmacokinetics in hemophilia A patients and explicitly states that Protein C (PC) levels had no influence on FVIII PK. |
| popPK | Kumar_2015 | irrelevant | 0 | 0 | The study investigates the mechanical properties and phosphorylation of cardiac myosin-binding protein C, not the pharmacokinetics of a drug named protein_c. |
| popPK | Kuster_2019 | irrelevant | 0 | 0 | The paper investigates the pathogenesis of hypertrophic cardiomyopathy caused by a mutation in myosin binding protein-C and reports physiological/mechanistic data, not pharmacokinetic disposition parameters. |
| PGx | Li_2023 | not_relevant | 0 | 0 | The study investigates urinary metabolomics as a predictor of radiation-induced cardiac dysfunction in mice, not the effect of a gene variant on the PK or PD of a drug. |
| popPK | Lin_2018 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of an antiviral compound (lobohedleolide) on Hepatitis C virus replication and does not involve pharmacokinetic analysis of the drug protein_c. |
| PGx | Lind_1995 | not_relevant | 0 | 0 | The paper describes genetic mutations causing congenital protein C deficiency (a disease state) and characterizes the plasma concentration of the endogenous protein, which is not a pharmacokinetic or pharmacodynamic parameter of an exogenous drug (protein_c) in a pharmacogenomic context. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper investigates the role of the autophagy receptor OPTN in bone metabolism and osteoporosis, not the pharmacokinetic or pharmacodynamic effects of a drug. |
| popPK | Macias_2002 | irrelevant | 1 | 1 | The subject drug is drotrecogin alfa (activated) / activated protein C, not protein_c. |
| popPK | Manco-Johnson_1994 | irrelevant | 1 | 0 | The study measures plasma concentrations of protein C under various metabolic conditions but does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Matsunaga_2012 | not_relevant | 0 | 0 | The paper investigates circadian gene expression regulation, not a pharmacogenomic variant affecting PK/PD parameters. |
| popPK | Nakano_2019 | irrelevant | 0 | 0 | The paper is an in-vitro/mechanistic study on cardiomyocyte calcium sensitivity and does not report pharmacokinetic parameters for protein_c. |
| PGx | Neafsey_2015 | not_relevant | 0 | 0 | The paper investigates how parasite (not patient) genotype affects vaccine efficacy, which is not a pharmacogenomic effect on a drug's PK/PD parameter in the host. |
| PGx | Nevel_2025 | not_relevant | 0 | 0 | The paper describes genetic disorders affecting surfactant protein production but does not report a pharmacogenomic effect on a pharmacokinetic or pharmacodynamic parameter of a specific drug (protein_c). |
| PGx | Nollet_2023 | not_relevant | 0 | 0 | The paper studies the impact of a gene variant on cardiac disease development and metabolic parameters in mice, not on the pharmacokinetic or pharmacodynamic parameters of a specific drug (protein_c). |
| PGx | Osti_2025 | not_relevant | 0 | 0 | The paper studies endogenous biomarkers (Factor VII-AT) and disease outcomes (mortality), not the pharmacokinetics or pharmacodynamics of an exogenous drug. |
| PGx | Pai_2016 | not_relevant | 2 | 1 | The paper is a comparative review of package insert documentation and does not report new experimental pharmacokinetic or pharmacodynamic data for the target protein. |
| popPK | Palareti_1996 | irrelevant | 0 | 0 | The paper discusses warfarin pharmacokinetics and withdrawal, not the drug protein_c. |
| PGx | Pankow_2017 | not_relevant | 0 | 0 | The study investigates the genetic architecture of endogenous Protein C levels and their link to lipid metabolism, not the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Pravenec_2001 | not_relevant | 0 | 0 | The paper describes a genetic mutation affecting lipid metabolism in rats, not a pharmacogenomic effect of a drug on a PK or PD parameter. |
| popPK | Rios_2008 | irrelevant | 0 | 0 | The study investigates the effect of soy isoflavones on coagulation markers and does not report pharmacokinetic parameters for the specific subject drug "protein_c". |
| PGx | Rodríguez-Antona_2003 | not_relevant | 0 | 0 | The paper investigates the transcriptional regulation of CYP3A4 expression by transcription factors C/EBP alpha and HNF-3 gamma, not the effect of a patient-specific genetic variant/genotype on the pharmacokinetics or pharmacodynamics of a specific drug (protein_c). |
| PGx | Russell_2016 | not_relevant | 2 | 1 | The paper is a review discussing the potential of pharmacogenomics in sepsis but does not report specific gene variant effects on PK/PD parameters for protein C (the mentioned association is with thrombomodulin/ECR and clinical outcomes, not PK/PD of a specific drug target named 'protein_c' in a PK/PD context). |
| popPK | Schulte_2022 | irrelevant | 0 | 0 | The study focuses on the diagnostic performance (AUC, sensitivity) of cardiac biomarkers for myocardial infarction subtypes, not on the pharmacokinetic disposition parameters of the drug protein_c. |
| PGx | Sidorova_2016 | not_relevant | 0 | 0 | The paper studies the mechanism of menadione inhibiting CYP1A1/2 expression induced by benzo(a)pyrene in rats; it does not report how a human gene variant (genotype) affects the pharmacokinetic or pharmacodynamic parameters of the drug menadione. |
| PGx | Sinha_2019 | not_relevant | 0 | 0 | The study investigates the mechanism of action of protein C variants and receptor mutations in a disease model, not the effect of human gene variants on the pharmacokinetics or pharmacodynamics of a specific drug candidate. |
| popPK | Stahl_2022 | irrelevant | 0 | 0 | The paper is a clinical trial on septic shock treatment using plasma exchange and does not report pharmacokinetic parameters for the drug protein_c. |
| PGx | Strickland_2018 | not_relevant | 1 | 1 | The paper describes a case of vitamin K deficiency affecting coagulation factors (including Protein C), not the PK/PD of a drug. |
| PGx | Te_2023 | not_relevant | 0 | 0 | The text and captions describe a clinical case of PET-CT imaging for a neuroendocrine tumor and do not contain information on pharmacogenomic effects on PK or PD. |
| PGx | Thielen_2024 | not_relevant | 0 | 0 | The study investigates the therapeutic effect of an engineered protein variant (3K3A-aPC) on endothelial permeability in vitro, rather than the effect of a patient's genetic variation on the PK/PD of protein_c. |
| popPK | Troisi_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of meropenem, not protein_c. |
| PGx | Verstraete_1995 | not_relevant | 0 | 0 | The text is a review of thrombolytic agents in development and does not report any pharmacogenomic effects or specific PK/PD parameters for protein_c. |
| PGx | Wang_2020 | not_relevant | 0 | 0 | The paper is a hospital survey regarding diagnostic and therapeutic facility availability for pulmonary embolism, not a study reporting pharmacogenomic effects on protein C pharmacokinetics or pharmacodynamics. |
| PGx | Wu_2020 | not_relevant | 0 | 0 | The paper studies experimental evolution and nitrate tolerance in bacteria (Desulfovibrio vulgaris), not human pharmacogenomics or drug response. |
| PGx | Yang_2014 | not_relevant | 1 | 5 | The paper investigates the transcriptional regulation (C/EBPα and HNF4α) of the CYP2D49 gene promoter, focusing on basal expression rather than genetic variants affecting pharmacokinetic or pharmacodynamic parameters of a specific drug. |
| PGx | Yang_2021 | not_relevant | 0 | 0 | The paper reports a case of aortic coarctation and hypertrophic cardiomyopathy associated with structural gene mutations (DSP, MYBPC3) causing disease, not pharmacogenomic effects on drug PK/PD. |
| PGx | Yang_2023 | not_relevant | 0 | 0 | The paper investigates the regulation of the ACSL1 gene in porcine adipogenesis, not the effect of a drug on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Yokota_2024 | irrelevant | 0 | 0 | The study measures Protein S activity as a biomarker for thrombosis risk in response to dienogest and COCs, not the pharmacokinetics of a drug named protein_c. |
| PGx | Zheng_2017 | not_relevant | 0 | 0 | The paper investigates plant gene regulation and oilseed metabolism, which is unrelated to human pharmacogenomics or drug PK/PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:24 UTC</sub>
