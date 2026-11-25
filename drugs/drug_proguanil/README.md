<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;proguanil&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Proguanil_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Proguanil_McGready2003_reference&quot;,&quot;label&quot;:&quot;McGready_2003_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_proguanil/Proguanil_McGready2003_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# proguanil

- **generic name:** proguanil
- **ATC codes:** `P01BB01`, `P01BB51`, `P01BB52`
- **DrugBank:** [DB01131](https://go.drugbank.com/drugs/DB01131) · **PubChem:** [CID 4923](https://pubchem.ncbi.nlm.nih.gov/compound/4923)
- **molar mass:** 253.731 g/mol (C11H16ClN5) — DrugBank
- **groups:** approved

## About

Proguanil is a biguanide antimalarial used to treat and prevent Plasmodium falciparum malaria. It is taken orally in tablet form and is well absorbed through the gastrointestinal tract. The drug is part of the essential medicines list, though it is restricted to combination products in the United States and Canada.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q420607](https://www.wikidata.org/wiki/Q420607), [Wikipedia](https://en.wikipedia.org/wiki/Proguanil?oldid=1338892608) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| proguanil | parent | 253.731 | C11H16ClN5 | DrugBank | [4923](https://pubchem.ncbi.nlm.nih.gov/compound/4923) | Hussein_1996, Khwarg_2024, McGready_2003, Na-Bangchang_2005 |
| chlorcycloguanil | metabolite | — (mass units only) | — | — | — | — |
| cycloguanil | metabolite | 288.17 | — | the paper | — | Khwarg_2024, Na-Bangchang_2005 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Hussein_1996_reference](drugs/drug_proguanil/Proguanil_Hussein1996_reference.md) | — | 1-compartment (no model) | 1 | Hussein Z et al., Population pharmacokinetics of proguani…, British journal of clinical… (1996) | [10.1111/j.1365-2125.1996.tb00114.x](https://doi.org/10.1111/j.1365-2125.1996.tb00114.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Khwarg_2024_cc](drugs/drug_proguanil/Proguanil_Khwarg2024_cc.md) | — | parent + metabolite (no model) | 9 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [↳ ct](drugs/drug_proguanil/Proguanil_Khwarg2024_ct.md) | — | parent + metabolite (no model) | 8 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ final_model_estimate](drugs/drug_proguanil/Proguanil_Khwarg2024_final_model_estimate.md) | — | parent + metabolite (no model) | 8 |  |  |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Cherkaoui-Rbati_2023_reference](drugs/drug_proguanil/Proguanil_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub> | [McGready_2003_reference](drugs/drug_proguanil/Proguanil_McGready2003_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | McGready R et al., The pharmacokinetics of atovaquone and…, European journal of clinica… (2003) | [10.1007/s00228-003-0652-9](https://doi.org/10.1007/s00228-003-0652-9) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Na-Bangchang_2005_reference](drugs/drug_proguanil/Proguanil_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Watkins_1987_reference](drugs/drug_proguanil/Proguanil_Watkins1987_reference.md) | — | general linear (no model) | 0 | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Lochner_2014_5_HT3](drugs/drug_proguanil/pd_Lochner_2014_5_HT3.md) | 5-HT3 receptor responses ← proguanil · inhibition effect | — | Lochner M et al., The antimalarial drug proguanil is an a…, The Journal of pharmacology… (2014) | [10.1124/jpet.114.218461](https://doi.org/10.1124/jpet.114.218461) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.">Not simulated</span> <span class="pk-badge pk-badge--green" title="Phenotype/genotype-specific effect on a named model parameter (θ).">quantitative</span> | **SLC22A1** | `Q22` · CL | transport | [Khwarg_2024](drugs/drug_proguanil/pgx_Khwarg_2024_SLC22A1_Q22.md) | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 04:53 | 0:26 | 3/5/0 | 1/0/0 | 1/0/0 | 7,574/2,778 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 8  ·  extracted 0  ·  needs review 3  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Watkins_1987.pdf` | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | popPK | 9 | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) | [2884288](https://pubmed.ncbi.nlm.nih.gov/2884288) | Reports quantitative PK parameters (elimination rate constants, availability) for proguanil's active metabolite cycloguanil in humans. |

<sub>queue written 2026-11-24 04:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cella_2012 | relevant | 10 | 0 | The paper describes a population PK model for proguanil in humans, but the provided evidence (abstract) does not contain the specific numeric parameter values (CL, V, etc.), which are likely in the full text or tables not included. |
| PGx | Cella_2012 | not_relevant | 0 | 0 | The paper focuses on population PK modeling and covariates like body weight and ethnicity, but does not report the effect of specific gene variants or genotypes on proguanil PK/PD parameters. |
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The paper models DSM265 PK/PD; proguanil is only mentioned as part of atovaquone–proguanil prophylaxis, with no proguanil parameters. |
| popPK | Dipanjan_2017 | irrelevant | 0 | 0 | The paper is a review of malaria treatment strategies and does not report original quantitative pharmacokinetic parameters for proguanil. |
| PGx | Dipanjan_2017 | not_relevant | 0 | 0 | The paper is a review on anti-malarial drug resistance strategies and does not discuss pharmacogenomics or proguanil. |
| popPK | Hussein_1997 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of atovaquone, and proguanil (as chloroguanide) is only a co-administered drug, not the subject of the PK model. |
| PGx | Hussein_1997 | not_relevant | 0 | 0 | The study investigates the PK of atovaquone and reports no significant effect of co-administered proguanil; it does not report genetic variants affecting proguanil PK/PD. |
| popPK | Lochner_2014 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of proguanil's receptor binding affinity (IC50, Ki) in cell models, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Lochner_2014 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic interaction between proguanil and 5-HT3 receptors, but does not report any genetic variants or pharmacogenomic effects. |
| popPK | Lütgendorf_2006 | irrelevant | 0 | 0 | The study focuses on in-vitro pharmacodynamic interactions (antimalarial activity) and does not report pharmacokinetic parameters for proguanil. |
| PGx | Lütgendorf_2006 | not_relevant | 0 | 0 | The paper reports in vitro pharmacodynamic interactions between antimalarial drugs (atovaquone, proguanil, artemisinin), not pharmacogenomic effects. |
| PGx | McGready_2003 | not_relevant | 0 | 0 | The study investigates the impact of pregnancy status on pharmacokinetics, not genetic variants or pharmacogenomic effects. |
| popPK | McGready_2006 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of dihydroartemisinin (DHA) following artesunate administration, with proguanil only mentioned as a co-administered drug without any PK parameters reported for it. |
| PGx | McGready_2006 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of dihydroartemisinin in pregnancy and does not investigate proguanil pharmacogenomics. |
| PGx | Na-Bangchang_2005 | not_relevant | 0 | 0 | The study investigates the effect of pregnancy on pharmacokinetics but contains no information on gene variants, genotypes, or pharmacogenomic factors. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic analysis of drug interactions against a parasite, reporting no pharmacokinetic disposition parameters for proguanil. |
| PGx | Thapar_2003 | not_relevant | 0 | 0 | The paper investigates in vitro pharmacodynamic interactions between drugs and does not involve any human genetic variants or pharmacogenomic factors. |
| PGx | Watkins_1987 | not_relevant | 1 | 1 | The paper describes general pharmacokinetics and mentions abnormal levels in a few subjects but provides no genotype, gene variant, or pharmacogenomic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bproguanil%5D&body=Drug%3A%20proguanil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_proguanil/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 04:53 UTC</sub>
