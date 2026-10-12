<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;tioguanine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tioguanine_Jiang2025_reference&quot;,&quot;label&quot;:&quot;Jiang_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tioguanine/Tioguanine_Jiang2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tioguanine_Leblond2023_reference&quot;,&quot;label&quot;:&quot;Leblond_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tioguanine/Tioguanine_Leblond2023_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tioguanine

- **generic name:** tioguanine
- **ATC codes:** `L01BB03`
- **DrugBank:** [DB00352](https://go.drugbank.com/drugs/DB00352) · **PubChem:** [CID 2723601](https://pubchem.ncbi.nlm.nih.gov/compound/2723601)
- **molar mass:** 167.192 g/mol (C5H5N5S) — DrugBank
- **groups:** approved, investigational

## About

Tioguanine is a purine analogue anticancer drug used to treat acute myeloid leukemia. It is an approved medicine and appears on the WHO list of essential medicines, so it remains in clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q385347](https://www.wikidata.org/wiki/Q385347) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| thioguanine | parent | 167.192 | C5H5N5S | DrugBank | [2723601](https://pubchem.ncbi.nlm.nih.gov/compound/2723601) | Bayoumy_2025 |
| 6-thioguanine nucleotides | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:35 | 3:00 | 2/1/0 | 0/0/0 | 6/0/8 | 267,966/18,693 | einfracz / qwen3.8-27b | 25 | 2/22 | 22/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.714), gpt-oss:120b (partly confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: partial 0/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Jiang_2025_reference](drugs/drug_tioguanine/Tioguanine_Jiang2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Jiang L et al., Drug-Drug Interactions and Individualiz…, Drug design, development an… (2025) | [10.2147/dddt.s547878](https://doi.org/10.2147/dddt.s547878) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (not confirmed, agreement 0.636). The first reading is what the record holds.">cross-check: disputed 1/2</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Leblond_2023_reference](drugs/drug_tioguanine/Tioguanine_Leblond2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Leblond P et al., Phase I Study of a Combination of Fluva…, Cancers (2023) | [10.3390/cancers15072020](https://doi.org/10.3390/cancers15072020) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Bayoumy_2025_reference](drugs/drug_tioguanine/Tioguanine_Bayoumy2025_reference.md) | — | 1-compartment (no model) | 0 | Bayoumy AB et al., Population Pharmacokinetics Model of Th…, Clinical pharmacokinetics (2025) | [10.1007/s40262-025-01532-1](https://doi.org/10.1007/s40262-025-01532-1) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Deben_2023](drugs/drug_tioguanine/pgx_Deben_2023_TPMT_safety.md) | Deben DS et al., Implications of Tioguanine Dosing in IB…, Metabolites (2023) | [10.3390/metabo13101054](https://doi.org/10.3390/metabo13101054) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **NUDT15** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Maillard_2026](drugs/drug_tioguanine/pgx_Maillard_2026_NUDT15_safety.md) | Maillard Maud et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70209](https://doi.org/10.1002/cpt.70209) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Maillard_2026](drugs/drug_tioguanine/pgx_Maillard_2026_TPMT_safety.md) | Maillard Maud et al., Clinical Pharmacogenetics Implementatio…, Clinical pharmacology and t… (2026) | [10.1002/cpt.70209](https://doi.org/10.1002/cpt.70209) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID21270794_2011](drugs/drug_tioguanine/pgx_PMID21270794_2011_TPMT_safety.md) | PMID21270794, Clinical Pharmacogenetics Implementatio… (2011) | [10.1038/clpt.2010.320](https://doi.org/10.1038/clpt.2010.320) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **NUDT15** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID30447069_2019](drugs/drug_tioguanine/pgx_PMID30447069_2019_NUDT15_safety.md) | PMID30447069, Clinical Pharmacogenetics Implementatio… (2019) | [10.1002/cpt.1304](https://doi.org/10.1002/cpt.1304) |
| <span class="pk-badge pk-badge--neutral" title="a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.">safety allele</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | **TPMT** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [PMID30447069_2019](drugs/drug_tioguanine/pgx_PMID30447069_2019_TPMT_safety.md) | PMID30447069, Clinical Pharmacogenetics Implementatio… (2019) | [10.1002/cpt.1304](https://doi.org/10.1002/cpt.1304) |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **NUDT15** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_NUDT15_PA166184612_6.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **NUDT15** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_NUDT15_PA166184612_7.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_0.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_1.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_2.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_3.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_4.md) | guideline | — |
| <span class="pk-badge pk-badge--neutral" title="the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.">guideline estimate</span> | **TPMT** | `Q27` · CL | metabolism | [guideline](drugs/drug_tioguanine/pgx_guideline_TPMT_PA166104960_5.md) | guideline | — |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=tioguanine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | `TPMT` safety_allele | paper PGx gene |
| metabolism | liver | `TPMT` safety_allele | paper PGx gene |
| excretion | kidney | `ABCC4` inhibitor | DrugBank actor |
| excretion | liver | `ABCC4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DNA (intercalation), HPRT1 (substrate), NUDT15 (safety_allele).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 217 matched, 65 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** True

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Armstrong_2011.pdf` | Armstrong L et al., Evaluating the use of metabolite measur…, Alimentary pharmacology & t… (2011) | pgx | 5 | [10.1111/j.1365-2036.2011.04848.x](https://doi.org/10.1111/j.1365-2036.2011.04848.x) | [21929546](https://www.ncbi.nlm.nih.gov/pubmed/21929546) | metadata signals extractable PGX data (TPMT) |
| `Silva_2008.pdf` | Silva MR et al., Thiopurine S-methyltransferase (TPMT) g…, Therapeutic drug monitoring (2008) | pgx | 5 | [10.1097/FTD.0b013e31818b0f31](https://doi.org/10.1097/FTD.0b013e31818b0f31) | [19057372](https://www.ncbi.nlm.nih.gov/pubmed/19057372) | metadata signals extractable PGX data (TPMT) |

<sub>queue written 2026-10-07T17:33:29.607757+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allegra_1988 | irrelevant | 0 | 0 | The paper is a review focusing on methotrexate, 5-FU, and ara-C, with no quantitative pharmacokinetic data for tioguanine. |
| PD | Armstrong_2011 | not_relevant | 0 | 0 | The paper focuses on the utility of metabolite measurement (6-MMP, 6-TGN) for toxicity prediction and does not report a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50) for tioguanine. |
| popPK | Balis_1987 | irrelevant | 1 | 0 | The study focuses on the pharmacokinetics of 6-mercaptopurine (6-MP), not tioguanine, and no tioguanine data are present. |
| PD | Bayoumy_2025 | not_relevant | 0 | 0 | The paper reports a population pharmacokinetic (PopPK) model for thioguanine but does not include any pharmacodynamic (PD) modeling, exposure-response analysis, or dose-effect relationship. |
| popPK | Bevers_2024 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of infliximab, not tioguanine. |
| PD | Bevers_2024 | not_relevant | 0 | 0 | The paper evaluates population pharmacokinetic (PK) models for infliximab, not pharmacodynamic (PD) or exposure-response relationships, and does not report any PD parameters. |
| popPK | Burton_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-mercaptopurine, not tioguanine. |
| popPK | Casini_2023 | irrelevant | 1 | 0 | This study reports therapeutic ranges for thiopurine metabolites (6-TGN) from azathioprine dosing, not population pharmacokinetic parameters (CL, V, ka) for the parent drug tioguanine. |
| popPK | Covell_1985 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 6-mercaptopurine, not tioguanine. |
| PD | Czaja_2020 | not_relevant | 2 | 0 | The paper is a review article discussing metabolic pathways and therapeutic opportunities for thiopurines, but it does not present original data, specific numeric PD parameters, or extractable concentration-effect curves. |
| PD | Deben_2021 | not_relevant | 2 | 0 | The paper is a review discussing the rationale and limitations of therapeutic drug monitoring for thiopurines, mentioning pharmacodynamics qualitatively but not reporting specific numeric PD parameters or exposure-response models for tioguanine. |
| PGx | Deben_2021 | not_relevant | 4 | 0 | The paper is a narrative review discussing the principles of TDM and pharmacogenetics, but it does not present original data or fitted effect sizes linking specific gene variants to PK/PD parameters. |
| PD | Deben_2022 | not_relevant | 2 | 1 | The study compares protein levels (Rac1/pSTAT3) between clinical groups (treated vs. untreated) but does not correlate these markers with drug concentrations or doses to derive a quantitative exposure-response or dose-response curve. |
| popPK | Elferink_2022 | irrelevant | 1 | 0 | The paper describes the synthesis and in vitro release of a thioguanine prodrug, but no quantitative pharmacokinetic parameters (CL, V, etc.) for thioguanine are reported. |
| popPK | Ergin_2023 | irrelevant | 0 | 0 | The study focuses on the formulation of 6-Mercaptopurine (a metabolite/prodrug of tioguanine) solid lipid nanoparticles and in vitro cytotoxicity, not on the pharmacokinetic parameters (CL, V, ka) of tioguanine in vivo. |
| popPK | Flesner_2014 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of epigenetic effects (DNA methylation and DNMT1 expression) and cytotoxicity, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Franca_2021 | not_relevant | 3 | 0 | This is a review article that discusses the role of TPMT polymorphisms in thiopurine pharmacogenomics but does not report original data, specific quantitative effect sizes, or fitted parameters. |
| PGx | Gilissen_2005_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (mesalazine/mercaptopurine) rather than a pharmacogenomic effect; all participants had wild-type TPMT genotypes and no genotype-specific outcomes were analyzed. |
| popPK | Hefti_2016 | irrelevant | 1 | 0 | This is a review article that discusses altered pharmacokinetics of thioguanine in Down syndrome patients qualitatively but provides no original numeric parameter values or PK models. |
| PD | Hefti_2016 | not_relevant | 1 | 0 | The text is a review focusing on pharmacokinetics (PK) alterations in Down Syndrome patients and does not report any pharmacodynamic (PD) or exposure-response models or numeric PD parameters for thioguanine. |
| popPK | Hermann_1985 | irrelevant | 0 | 0 | The study investigates 6-mercaptopurine, not tioguanine, which is a different drug. |
| PD | Jena_2023 | not_relevant | 2 | 1 | The paper is a systematic review and meta-analysis that reports pooled clinical response rates and a qualitative meta-regression finding regarding dose and toxicity, but it does not provide a quantitative exposure-response model or specific numeric PD parameters (e.g., EC50, Emax) for thioguanine. |
| popPK | Jiang_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for clozapine, not tioguanine. |
| PD | Jiang_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics (PK) of clozapine and drug-drug interactions, reporting no pharmacodynamic (PD) or exposure-response relationship for tioguanine or any other drug. |
| popPK | Jost_2020 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-mercaptopurine (6MP) and methotrexate, not tioguanine. |
| popPK | Kong_2024 | irrelevant | 0 | 0 | The study investigates mercaptopurine (6-MP), not tioguanine, as the subject drug. |
| popPK | Kumar_2015 | irrelevant | 0 | 0 | The study investigates 6-mercaptopurine, a different drug, rather than tioguanine. |
| popPK | Larsen_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for 6-mercaptopurine, not tioguanine. |
| popPK | Leblond_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of fluvastatin and celecoxib, with thioguanine only mentioned as a prior therapy in the background. |
| PD | Leblond_2023 | not_relevant | 0 | 0 | The paper reports PK parameters and clinical safety/efficacy outcomes for fluvastatin and celecoxib, but contains no pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters (e.g., Emax, EC50) for tioguanine or any other drug. |
| popPK | Lu_1982 | irrelevant | 1 | 2 | The paper reports half-lives (t1/2) for 6-thioguanine in humans but does not provide clearance (CL), volume of distribution (V), or a compartmental model, which are required for quantitative disposition parameters. |
| popPK | Lu_2021 | irrelevant | 0 | 0 | The paper is a review/design paper on 6-mercaptopurine nanomedicines, not a pharmacokinetic study of tioguanine, and contains no quantitative PK parameters for tioguanine. |
| popPK | Maddocks_1979 | irrelevant | 2 | 1 | The paper focuses on the development of an assay for 6-mercaptopurine (6-MP), which is a metabolite of azathioprine, not a metabolite of tioguanine, and only provides a single half-life value for 6-MP. |
| popPK | Martin_2017 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of voriconazole, not tioguanine. |
| PD | Martin_2017 | not_relevant | 4 | 3 | The paper is about voriconazole, not tioguanine, and while it contains exposure-response analysis for voriconazole, it does not provide the specific drug requested. |
| popPK | Murrell_1986 | irrelevant | 0 | 0 | The paper discusses allopurinol and oxypurinol pharmacokinetics, not tioguanine. |
| PGx | PMID23422873_2013 | not_relevant | 0 | 0 | The paper is a clinical guideline for dosing based on genotype and does not report primary pharmacokinetic or pharmacodynamic parameter measurements (e.g., AUC, Cmax) from a study. |
| popPK | Patten_2022 | irrelevant | 0 | 0 | The study focuses on SARS-CoV-2 inhibitors and does not involve tioguanine pharmacokinetics. |
| PD | Patten_2022 | not_relevant | 0 | 0 | The paper does not mention tioguanine or report any pharmacodynamic parameters for it. |
| PGx | Peyrin-Biroulet_2008 | not_relevant | 2 | 5 | The paper describes a drug-drug interaction (ribavirin) affecting metabolite levels in patients with normal genotypes, not a pharmacogenomic effect of a gene variant. |
| popPK | Rendina_2025 | irrelevant | 0 | 0 | The paper is a bioinformatics study on gut microbial homologs of human proteins and does not report quantitative pharmacokinetic parameters for tioguanine. |
| PD | Rendina_2025 | not_relevant | 0 | 0 | The paper is a bioinformatics study on gut microbiome homology and does not report any pharmacodynamic or exposure-response data for tioguanine. |
| popPK | Rivard_1989 | irrelevant | 0 | 0 | The paper studies 6-mercaptopurine, not tioguanine, and focuses on in-vitro enzymatic degradation by milk rather than pharmacokinetic parameters. |
| PGx | Roblin_2005 | not_relevant | 1 | 0 | The study evaluates clinical outcomes based on 6-tioguanine levels but does not report how genetic variants (like TPMT) alter PK/PD parameters. |
| popPK | Sullivan_1988 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of DON (6-diazo-5-oxo-L-norleucine), not tioguanine. |
| PGx | Swen_2011 | not_relevant | 5 | 0 | The text is a general summary of guideline development for 53 drugs (including thiopurines) but does not report specific pharmacokinetic or pharmacodynamic parameter changes or fitted effect sizes for tioguanine. |
| popPK | Toksvang_2022 | irrelevant | 0 | 0 | This is a review article discussing clinical protocols and mechanisms for 6-thioguanine, but it does not report original quantitative pharmacokinetic parameters (e.g., clearance, volume) or population PK model estimates for the drug. |
| popPK | Tolbert_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 6-mercaptopurine, not tioguanine. |
| popPK | Tterlikkis_1983 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 6-mercaptopurine, not tioguanine. |
| popPK | Wang_2015 | irrelevant | 1 | 0 | The study focuses on the co-crystallization of 6-mercaptopurine (a different drug than tioguanine) and lacks any PK parameters for tioguanine. |
| popPK | Xu_2023 | irrelevant | 0 | 0 | The paper investigates a polymer nanodrug delivery system for chlorambucil and 6-mercaptopurine (a different drug), not tioguanine, and lacks specific quantitative PK parameters for tioguanine. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The paper studies the effect of gut bacteria on azathioprine/6-mercaptopurine bioavailability and efficacy, not the pharmacokinetic parameters (CL, V, etc.) of tioguanine. |
| PD | Yan_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of azathioprine therapy failure via microbiome interactions (reduced 6-MP bioavailability) but does not report any pharmacokinetic data, concentration-effect curves, or numeric PD parameters (e.g., Emax, EC50) for tioguanine or its metabolites. |
| popPK | Zou_2021 | irrelevant | 2 | 1 | The study focuses on the pharmacokinetics of 6-mercaptopurine (6-MP) and its nanomedicines in rats; 6-thioguanine (6-TG) is only mentioned as a metabolite detected in the analysis, with no specific PK parameters reported for tioguanine itself. |
| popPK | Zou_2023 | relevant | 7 | 4 | The study is a pharmacokinetic study in rats of 6-MP (tioguanine), a structural isomer/progenitor of thioguanine in the thione-thiolate equilibrium, reporting quantitative PK parameters (AUC, Cmax, t1/2) and non-compartmental analysis. |
| PD | de_2013 | not_relevant | 2 | 1 | The paper reports clinical outcomes and metabolite levels (6-TGN/6-MMP) but does not provide a concentration-effect or dose-response model with numeric PD parameters (e.g., Emax, EC50) for tioguanine. |
| popPK | unknown_2018 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PD | unknown_2018 | not_relevant | 0 | 0 | The provided text is only a conference header and contains no data, analysis, or mention of tioguanine pharmacodynamics. |
| PGx | van_2022 | not_relevant | 2 | 5 | The paper is a cost-effectiveness decision model using mortality data, not a report of pharmacokinetic or pharmacodynamic parameter changes induced by gene variants. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:33 UTC</sub>
