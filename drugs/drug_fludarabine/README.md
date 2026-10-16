<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;fludarabine&quot;}]"></div>

# fludarabine

- **generic name:** fludarabine
- **ATC codes:** `L01BB05`
- **DrugBank:** [DB01073](https://go.drugbank.com/drugs/DB01073) · **PubChem:** [CID 657237](https://pubchem.ncbi.nlm.nih.gov/compound/657237)
- **molar mass:** 285.235 g/mol (C10H12FN5O4) — DrugBank
- **groups:** approved, investigational

## About

Fludarabine is a purine analogue anticancer drug used to treat certain blood cancers such as chronic lymphocytic leukaemia. It is an approved medicine and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q72478349](https://www.wikidata.org/wiki/Q72478349) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fludarabine | parent | 285.235 | C10H12FN5O4 | DrugBank | [657237](https://pubchem.ncbi.nlm.nih.gov/compound/657237) | Ivaturi_2017, Varela-González-Aller_2025 |
| f-ara-ATP | metabolite | 525.172 | C10H15FN5O13P3 | PubChem | [22842095](https://pubchem.ncbi.nlm.nih.gov/compound/22842095) | Ivaturi_2017 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 04:23 | 21:01 | 0/2/1 | 0/0/1 | 0/0/1 | 381,992/50,510 | ollama / qwen3.8:27b-mtp-q8_0 | 24 | 9/15 | 20/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0), gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Varela-González-Aller_2025_reference](drugs/drug_fludarabine/Fludarabine_VarelaGonzlezAller2025_reference.md) | — | 2-compartment (no model) | 4 | Varela-González-Aller J et al., Towards Personalized Lymphodepletion: A…, Pharmaceutics (2025) | [10.3390/pharmaceutics17121592](https://doi.org/10.3390/pharmaceutics17121592) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.562). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ivaturi_2017_median_value](drugs/drug_fludarabine/Fludarabine_Ivaturi2017_median_value.md) | — | parent + metabolite (no model) | 5 (+2 cov.) | Ivaturi V et al., Pharmacokinetics and Model-Based Dosing…, Biology of blood and marrow… (2017) | [10.1016/j.bbmt.2017.06.021](https://doi.org/10.1016/j.bbmt.2017.06.021) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.923). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Ivaturi_2017_parameter_estimates](drugs/drug_fludarabine/Fludarabine_Ivaturi2017_parameter_estimates.md) | — | parent + metabolite (no model) | 5 (+2 cov.) | Ivaturi V et al., Pharmacokinetics and Model-Based Dosing…, Biology of blood and marrow… (2017) | [10.1016/j.bbmt.2017.06.021](https://doi.org/10.1016/j.bbmt.2017.06.021) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by ollama:gpt-oss:120b (not confirmed, agreement 0.571). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Yang_2021_HBV_DNA](drugs/drug_fludarabine/pd_Yang_2021_HBV_DNA.md) | HBV progeny DNA secretion ← fludarabine · direct sigmoid Emax (Hill) effect | — | Yang J et al., A new high-content screening assay of t…, JHEP reports : innovation i… (2021) | [10.1016/j.jhepr.2021.100296](https://doi.org/10.1016/j.jhepr.2021.100296) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0), gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **NT5E** | `Q22` · CL | metabolism | [Mohanan_2017](drugs/drug_fludarabine/pgx_Mohanan_2017_NT5E_Q22.md) | Mohanan E et al., Population pharmacokinetics of fludarab…, Bone marrow transplantation (2017) | [10.1038/bmt.2017.79](https://doi.org/10.1038/bmt.2017.79) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fludarabine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` substrate | DrugBank actor |
| distribution | liver | `SLC29A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADA (inhibitor), DCK (target), DNA (incorporation into and destabilization), NT5E (metabolism), POLA1 (inhibitor), RRM1 (inhibitor), SLC28A3 (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 108 matched, 54 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Knebel_1998.pdf` | Knebel W et al., The pharmacokinetics and pharmacodynami…, Pharmacotherapy (1998) | popPK | 10 | not captured | [9855320](https://pubmed.ncbi.nlm.nih.gov/9855320) | The study reports quantitative pharmacokinetic parameters (clearance, volume of distribution, half-life) for fludarabine in humans, with values explicitly stated in the abstract. |
| `McCune_2015.pdf` | McCune JS et al., Population pharmacokinetic/dynamic mode…, Cancer chemotherapy and pha… (2015) | popPK | 8 | [10.1007/s00280-014-2618-2](https://doi.org/10.1007/s00280-014-2618-2) | [25374408](https://pubmed.ncbi.nlm.nih.gov/25374408) | The study reports a population PK/PD model for fludarabine, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, which only lists PD variability and covariates. |
| `Takahashi_2022.pdf` | Takahashi T et al., Effects of cyclophosphamide related gen…, Cancer chemotherapy and pha… (2022) | pgx | 8 | [10.1007/s00280-021-04389-w](https://doi.org/10.1007/s00280-021-04389-w) | [35083501](https://www.ncbi.nlm.nih.gov/pubmed/35083501) | metadata signals extractable PGX data (ABCC4, PK/PD-context) |
| `Vukovic_2020.pdf` | Vukovic V et al., Association of SLC28A3 Gene Expression…, Pathology oncology research… (2020) | pgx | 8 | [10.1007/s12253-019-00613-4](https://doi.org/10.1007/s12253-019-00613-4) | [30778771](https://www.ncbi.nlm.nih.gov/pubmed/30778771) | metadata signals extractable PGX data (SLC28A3, PK/PD-context) |
| `Johnson_2013.pdf` | Johnson GG et al., CYP2B6*6 is an independent determinant…, Blood (2013) | pgx | 5 | [10.1182/blood-2013-07-516666](https://doi.org/10.1182/blood-2013-07-516666) | [24128861](https://www.ncbi.nlm.nih.gov/pubmed/24128861) | metadata signals extractable PGX data (CYP2B6*6) |

<sub>queue written 2026-10-15T04:04:37.101507+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ben_2021 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects (GSTA1) on busulfan PK, not fludarabine. |
| PGx | Ben_2021_2 | not_relevant | 0 | 0 | The paper is a review focusing on busulfan and treosulfan pharmacogenetics and PK, mentioning fludarabine only as a component of conditioning regimens without reporting specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Ben_2026 | irrelevant | 0 | 0 | The study focuses on busulfan pharmacokinetics and outcomes, with fludarabine only mentioned as part of the conditioning regimen. |
| PGx | Bhatla_2009 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects of CDA genotype on cytosine arabinoside (ara-C) toxicity, not fludarabine. |
| PGx | Bhattacharjee_2024 | not_relevant | 0 | 0 | The paper is an in silico study on drug repurposing for monkeypox and does not report any pharmacogenomic effects on fludarabine PK or PD parameters. |
| PGx | Boulad_2000 | not_relevant | 0 | 0 | The paper reports clinical outcomes of stem cell transplantation in Fanconi anemia patients using fludarabine, but does not investigate the impact of specific gene variants on fludarabine pharmacokinetics or pharmacodynamics. |
| popPK | Campàs_2006 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Bcl-2 inhibitors on CLL cell viability, where fludarabine is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Campàs_2006 | not_relevant | 1 | 0 | The paper reports EC50 values for Bcl-2 inhibitors (HA14-1, etc.) but only qualitatively describes the additive effect of fludarabine combinations without providing numeric PD parameters or exposure-response data for fludarabine itself. |
| popPK | Chandra_2022 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for melphalan, while fludarabine is only mentioned as a co-administered drug in the conditioning regimen. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes (engraftment, survival, GVHD) of a conditioning regimen but does not analyze the impact of gene variants on the pharmacokinetics or pharmacodynamics of fludarabine. |
| PGx | Damiani_2010 | not_relevant | 2 | 5 | The paper reports clinical outcomes (survival, relapse) associated with protein over-expression, not pharmacokinetic or pharmacodynamic parameters of fludarabine. |
| PGx | Dumontet_1999 | not_relevant | 0 | 0 | The study investigates acquired resistance mechanisms in cell lines (overexpression of enzymes) rather than the effect of a specific human gene variant/genotype on pharmacokinetic or pharmacodynamic parameters. |
| PGx | El-Serafi_2026 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (omeprazole) affecting busulphan PK, not a pharmacogenomic effect on fludarabine. |
| popPK | Everett_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of curcumin's effect on B-CLL cells, where fludarabine is used only as a comparator agent for apoptosis synergy, not as the subject of pharmacokinetic analysis. |
| PD | Everett_2007 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Hill slope) for curcumin, not fludarabine; fludarabine is only used as a comparator agent in combination studies without specific dose-response modeling for fludarabine itself. |
| popPK | Fabrizio_2022 | irrelevant | 2 | 0 | The study uses a pre-existing population PK model to estimate exposure (AUC) for clinical outcome analysis but does not report the underlying quantitative PK parameters (CL, V, Q, ka) or derive a new model. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper focuses on predicting drug-drug interactions for busulfan using network pharmacology and does not report pharmacogenomic effects on fludarabine PK/PD parameters. |
| PGx | Iacobucci_2013 | not_relevant | 0 | 0 | The paper reports associations between genetic variants and clinical outcomes (response/toxicity), not pharmacokinetic or pharmacodynamic parameters of fludarabine. |
| PGx | Koike_2026 | not_relevant | 0 | 0 | The paper reports a pharmacokinetic difference in Treosulfan based on age (children vs. adults), not a pharmacogenomic effect on fludarabine. |
| popPK | Larráyoz_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological characterization of a transporter (rCNT2) in Xenopus oocytes, not a pharmacokinetic study reporting disposition parameters (CL, V, t1/2) for fludarabine. |
| PD | Larráyoz_2006 | not_relevant | 0 | 0 | The paper reports transporter kinetics (K0.5, Imax) for fludarabine in oocytes, which is a pharmacokinetic/transport mechanism study, not a pharmacodynamic exposure-response or dose-response relationship for a biological effect. |
| PGx | Law_2012 | not_relevant | 0 | 0 | The paper reports clinical outcomes (engraftment, survival, GVHD) of a conditioning regimen but does not analyze pharmacokinetic or pharmacodynamic parameters of fludarabine in relation to genetic variants. |
| popPK | Li_2012 | irrelevant | 2 | 0 | The study focuses on rituximab PK and only states that fludarabine disposition showed no apparent change, without providing quantitative fludarabine PK parameters. |
| PGx | Lin_2010 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for ofatumumab, not fludarabine. |
| popPK | Lindemalm_2003 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and cellular metabolism analysis of clofarabine and cladribine, not a pharmacokinetic study of fludarabine. |
| PGx | Lum_2026 | not_relevant | 0 | 0 | The paper reports clinical outcomes (survival, toxicity) and chimerism in SCID patients, but does not report pharmacokinetic or pharmacodynamic parameters of fludarabine or treosulfan, nor does it analyze the effect of gene variants on drug exposure or response. |
| popPK | McCune_2015 | relevant | 8 | 0 | The study reports a population PK/PD model for fludarabine, but the specific numeric PK parameter values (CL, V, etc.) are not present in the provided evidence, which only lists PD variability and covariates. |
| popPK | McCune_2015_2 | irrelevant | 2 | 0 | The paper is a review that explicitly states there are no comprehensive pharmacokinetic studies for fludarabine in pediatric HSCT and provides no quantitative disposition parameters (CL, V, etc.) for fludarabine. |
| PGx | Mseddi_2026 | not_relevant | 2 | 0 | The paper is a review of the cellular pharmacology and mechanisms of fludarabine, not a study reporting specific pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Nava_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of busulfan (GSTA1 variants), not fludarabine. |
| PGx | Ousia_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes (survival, GVHD) of a transplant conditioning regimen but does not investigate pharmacogenomic effects on fludarabine pharmacokinetics or pharmacodynamics. |
| PGx | Pai_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of treosulfan, not fludarabine. |
| PGx | Remberger_2017 | not_relevant | 0 | 0 | The paper reports general toxicity outcomes of a conditioning regimen and does not investigate the impact of any gene variant or genotype on the pharmacokinetics or pharmacodynamics of fludarabine. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects on fludarabine PK/PD parameters. |
| PGx | Robinson_2013 | not_relevant | 0 | 0 | The paper reports that RB1 status does not affect sensitivity to fludarabine, and focuses on radiation/chemo-sensitivity rather than specific PK/PD parameters. |
| popPK | Schwemmlein_2007 | irrelevant | 0 | 0 | The paper describes the antileukemic activity of a CD19 immunotoxin and mentions fludarabine only as a prior treatment for patients, containing no pharmacokinetic data for fludarabine. |
| PD | Schwemmlein_2007 | not_relevant | 0 | 0 | The paper reports PD for a CD19-specific immunotoxin, not fludarabine; fludarabine is only mentioned as a comparator for patient responsiveness. |
| PGx | Shimoni_2017 | not_relevant | 0 | 0 | The paper reports clinical outcomes (relapse, survival) associated with HLA-C ligand status, not pharmacokinetic or pharmacodynamic parameters of fludarabine. |
| popPK | Sweiss_2025 | irrelevant | 4 | 2 | The study applies a previously published population PK model to estimate AUC and Cmax for clinical outcome analysis, but does not report the underlying quantitative disposition parameters (CL, V, Q, ka) or half-life for fludarabine itself. |
| PGx | Takahashi_2022 | not_relevant | 0 | 0 | The study investigates pharmacogenomic effects on cyclophosphamide, not fludarabine. |
| PGx | Tiribelli_2011 | not_relevant | 2 | 0 | The paper reports clinical outcomes (relapse, DFS) associated with ABCG2 and FLT3-ITD in AML patients treated with fludarabine, but does not report changes in pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| PGx | Vukovic_2020 | not_relevant | 2 | 5 | The study reports associations between gene variants/expression and clinical outcomes (response, survival), not direct changes in pharmacokinetic (PK) or pharmacodynamic (PD) parameters. |
| PGx | Wade_2011 | not_relevant | 0 | 0 | The study reports associations between SNPs and clinical outcomes (progression-free survival) rather than pharmacokinetic or pharmacodynamic parameters of fludarabine. |
| PGx | Yamazaki_2016 | not_relevant | 0 | 0 | The text discusses fludarabine as a standard preconditioning regimen for bone marrow transplantation in aplastic anemia but does not report any pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Yang_2021 | irrelevant | 0 | 0 | The study is an in-vitro antiviral screening assay for Hepatitis B where fludarabine is used as a reference inhibitor, not a pharmacokinetic study. |
| PGx | Yoon_2023 | not_relevant | 0 | 0 | The paper reports a Phase I clinical trial of NK cell therapy and does not investigate the impact of gene variants on the pharmacokinetics or pharmacodynamics of fludarabine. |
| PGx | de_2008 | not_relevant | 2 | 5 | The paper reports in vitro cellular resistance and transporter function for fludarabine, but does not report a pharmacogenomic effect on PK/PD parameters in humans or a fitted effect size. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 04:04 UTC</sub>
