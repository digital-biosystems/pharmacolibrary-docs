<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G04B&quot;,&quot;href&quot;:&quot;atc/G04B.md&quot;},{&quot;label&quot;:&quot;fesoterodine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fesoterodine_Sano2023_reference&quot;,&quot;label&quot;:&quot;Sano_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference.md&quot;,&quot;status&quot;:&quot;Reproduces with caveats&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fesoterodine

- **generic name:** fesoterodine
- **ATC codes:** `G04BD11`
- **DrugBank:** [DB06702](https://go.drugbank.com/drugs/DB06702) · **PubChem:** [CID 6918558](https://pubchem.ncbi.nlm.nih.gov/compound/6918558)
- **molar mass:** 411.5769 g/mol (C26H37NO3) — DrugBank
- **groups:** approved, investigational

## About

Fesoterodine is a muscarinic antagonist used to treat overactive bladder, a condition involving urinary frequency and incontinence. It is an approved medicine, authorised in the European Union, and is used for this urological indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4482372](https://www.wikidata.org/wiki/Q4482372) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fesoterodine | parent | 411.577 | C26H37NO3 | DrugBank | [6918558](https://pubchem.ncbi.nlm.nih.gov/compound/6918558) | Sano_2023 |
| 5-hydroxymethyl tolterodine | metabolite | 341.495 | C22H31NO2 | PubChem | [9819382](https://pubchem.ncbi.nlm.nih.gov/compound/9819382) | Sano_2023 |

## Start here

> **Sano_2023_reference** — <span class="pk-badge pk-badge--green">Reproduces with caveats</span> pediatric patients with neurogenic detrusor overactivity or overactive bladder. [Run it in the simulator](drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference.md?tab=Simulation) · [record](drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Reproduces with caveats" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces with caveats</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Sano_2023_reference](drugs/drug_fesoterodine/Fesoterodine_Sano2023_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 (+5 cov.) | Sano Y et al., Population Pharmacokinetic and Pharmaco…, European journal of drug me… (2023) | [10.1007/s13318-023-00818-8](https://doi.org/10.1007/s13318-023-00818-8) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Oishi_2014_reference](drugs/drug_fesoterodine/Fesoterodine_Oishi2014_reference.md) | — | 1-compartment (no model) | 0 | Oishi M et al., Population pharmacokinetics of the 5-hy…, Journal of clinical pharmac… (2014) | [10.1002/jcph.274](https://doi.org/10.1002/jcph.274) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Park_2022_Kv_current_inhibition](drugs/drug_fesoterodine/pd_Park_2022_Kv_current_inhibition.md) | Kv current inhibition ← fesoterodine · direct sigmoid Emax (Hill) effect | — | Park S et al., Inhibition of voltage-dependent K, The Korean journal of physi… (2022) | [10.4196/kjpp.2022.26.5.397](https://doi.org/10.4196/kjpp.2022.26.5.397) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Wyndaele_2014_dose_escalation_decision](drugs/drug_fesoterodine/pd_Wyndaele_2014_dose_escalation_decision.md) | dose escalation decision ← fesoterodine · model not identified | — | Wyndaele JJ et al., Flexible dosing with fesoterodine 4 and…, International journal of cl… (2014) | [10.1111/ijcp.12425](https://doi.org/10.1111/ijcp.12425) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sobeh_2018_none](drugs/drug_fesoterodine/pd_Sobeh_2018_none.md) | none ← none · model not identified | — | Sobeh M et al., A proanthocyanidin-rich extract from Ca…, Journal of ethnopharmacology (2018) | [10.1016/j.jep.2017.11.007](https://doi.org/10.1016/j.jep.2017.11.007) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sobeh_2018_none_2](drugs/drug_fesoterodine/pd_Sobeh_2018_none_2.md) | none ← none · model not identified | — | Sobeh M et al., A proanthocyanidin-rich extract from Ca…, Journal of ethnopharmacology (2018) | [10.1016/j.jep.2017.11.007](https://doi.org/10.1016/j.jep.2017.11.007) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green" title="Phenotype/genotype-specific effect on a named model parameter (θ).">quantitative</span> | **CYP2D6** | `Q351` · CLm/F | metabolism | [Rodríguez-Lopez_2024](drugs/drug_fesoterodine/pgx_Rodr_guez_Lopez_2024_CYP2D6_Q351.md) | Rodríguez-Lopez A et al., An Investigational Study on the Role of…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17091236](https://doi.org/10.3390/ph17091236) |
| <span class="pk-badge pk-badge--green" title="Phenotype/genotype-specific effect on a named model parameter (θ).">quantitative</span> | **CYP3A4** | `Q351` · CLm/F | metabolism | [Rodríguez-Lopez_2024](drugs/drug_fesoterodine/pgx_Rodr_guez_Lopez_2024_CYP3A4_Q351.md) | Rodríguez-Lopez A et al., An Investigational Study on the Role of…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17091236](https://doi.org/10.3390/ph17091236) |
| <span class="pk-badge pk-badge--green" title="Phenotype/genotype-specific effect on a named model parameter (θ).">quantitative</span> | **UGT** | `Q351` · CLm/F | metabolism | [Rodríguez-Lopez_2024](drugs/drug_fesoterodine/pgx_Rodr_guez_Lopez_2024_UGT_Q351.md) | Rodríguez-Lopez A et al., An Investigational Study on the Role of…, Pharmaceuticals (Basel, Swi… (2024) | [10.3390/ph17091236](https://doi.org/10.3390/ph17091236) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=fesoterodine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| distribution | placenta | `ABCB1` substrate | DrugBank actor |
| distribution | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` metabolism/substrate, `CYP3A4` metabolism/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` metabolism/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` substrate | DrugBank actor |
| excretion | liver | `ABCB1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), UGT (metabolism).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:32 | 10:53 | 1/1/0 | 2/1/0 | 3/0/0 | 406,958/15,684 | einfracz / qwen3.8-27b | 22 | 1/10 | 22/0 | 0 |

## Coverage

- **PubMed hits:** 171 matched, 90 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Oishi_2014.pdf` | Oishi M et al., Population pharmacokinetics of the 5-hy…, Journal of clinical pharmac… (2014) | popPK | 10 | [10.1002/jcph.274](https://doi.org/10.1002/jcph.274) | [24619889](https://pubmed.ncbi.nlm.nih.gov/24619889) | The paper presents a population PK model for 5-HMT (the active metabolite of fesoterodine) and reports specific numeric effects (percentages/fold changes) of covariates on clearance in the abstract. |
| `Kitta_2023.pdf` | Kitta T et al., Fesoterodine treatment of pediatric pat…, Journal of pediatric urology (2023) | popPK | 8 | [10.1016/j.jpurol.2022.11.020](https://doi.org/10.1016/j.jpurol.2022.11.020) | [36504158](https://pubmed.ncbi.nlm.nih.gov/36504158) | The study describes a population-pharmacokinetic analysis of fesoterodine's active metabolite (5-HMT), but no quantitative parameter values are reported in the provided text or evidence. |

<sub>queue written 2026-10-07 09:28 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akomolafe_2013 | irrelevant | 0 | 0 | The paper investigates the antioxidant effects of a plant extract on rat testes in vitro and does not mention or measure pharmacokinetic parameters for fesoterodine. |
| popPK | Cardozo_2010 | irrelevant | 1 | 0 | The paper models pharmacodynamic dose-response relationships (bladder diary endpoints) rather than reporting pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Chrétien_2024 | irrelevant | 0 | 0 | The study investigates the anti-ulcer and antioxidant properties of Markhamia lutea extract and does not involve fesoterodine or any pharmacokinetic analysis. |
| PGx | Dahlinger_2017 | not_relevant | 0 | 0 | The study assesses the inhibitory effects of spasmolytics (including fesoterodine) on CYP enzymes in vitro but does not report any pharmacogenomic effects (gene variant/genotype) on fesoterodine's PK or PD parameters. |
| popPK | Darvishi-Khezri_2017 | irrelevant | 0 | 0 | The study investigates the effect of silymarin on oxidative stress markers in thalassemia patients and does not involve fesoterodine or any pharmacokinetic analysis. |
| popPK | De_2022 | irrelevant | 0 | 0 | The paper studies antioxidant properties of seaweed and contains no data on fesoterodine. |
| PGx | Erukainure_2021 | not_relevant | 0 | 0 | The paper investigates the effects of L-leucine on oxidative testicular injury and does not mention fesoterodine or pharmacogenomic effects. |
| popPK | Imani_2025 | irrelevant | 0 | 0 | The paper focuses on the preparation and characterization of wound dressings containing lawsone, and does not mention fesoterodine or report any pharmacokinetic parameters for it. |
| popPK | Kitta_2023 | irrelevant | 8 | 0 | The study describes a population-pharmacokinetic analysis of fesoterodine's active metabolite (5-HMT), but no quantitative parameter values are reported in the provided text or evidence. |
| popPK | Li_2022 | irrelevant | 0 | 0 | The paper analyzes the chemical composition and antioxidant activities of a fungus (Tuber indicum) and is unrelated to the pharmacokinetics of fesoterodine. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper focuses on the purification of flavonoids from Ginkgo biloba and in vitro antioxidant activity, with no mention of fesoterodine or pharmacokinetic parameters. |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a retrospective epidemiological study on dementia risk associated with OAB medications, not a pharmacokinetic study, and contains no PK parameters for fesoterodine. |
| PGx | Lin_2019 | not_relevant | 3 | 2 | The paper models fesoterodine PK and mentions CYP2D6 extensive/poor metabolizer phenotypes in model verification, but does not report a specific pharmacogenomic effect size (e.g., difference in AUC or clearance) attributable to the genotype itself, focusing instead on drug-drug interaction. |
| PGx | Malhotra_2009_2 | not_relevant | 4 | 2 | The paper describes the pharmacological rationale for using a prodrug to *avoid* pharmacogenomic variability, stating that fesoterodine exposure is "genotype-independent," rather than reporting a specific genetic variant's effect on fesoterodine's PK/PD. |
| PGx | Malhotra_2009_3 | not_relevant | 0 | 0 | The paper investigates the effects of age, gender, and race on fesoterodine PK/PD, but does not report any pharmacogenomic effects involving gene variants or genotypes. |
| PGx | Malhotra_2011_2 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (fluconazole) on fesoterodine PK, not a pharmacogenomic effect caused by a specific gene variant or genotype. |
| popPK | Martins_2010 | irrelevant | 0 | 0 | The paper studies Fenton's oxidation of phenolic wastewater and contains no information regarding fesoterodine or pharmacokinetics. |
| popPK | Messah_2026 | irrelevant | 0 | 0 | The paper investigates the antidiabetic and antioxidant properties of Pithecellobium dulce compounds in vitro and is unrelated to fesoterodine pharmacokinetics. |
| PGx | Michel_2006 | not_relevant | 0 | 0 | The paper is a general review of metabolites in overactive bladder drugs and does not provide specific pharmacogenomic data or PK/PD effect sizes for fesoterodine. |
| popPK | Minighin_2020 | irrelevant | 0 | 0 | The paper studies the mineral and antioxidant content of açaí pulp and contains no data related to fesoterodine. |
| PGx | Oishi_2018 | not_relevant | 0 | 0 | The study focuses on physiological pharmacokinetic modeling of a drug-drug interaction (fesoterodine and ketoconazole) and does not report any gene variant or genotype effects on PK or PD parameters. |
| popPK | Paganini_2017 | irrelevant | 0 | 0 | The study focuses on iron absorption in infants and does not involve fesoterodine or its pharmacokinetics. |
| popPK | Park_2022 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Patel_2018 | not_relevant | 2 | 1 | The paper uses pharmacogenomic differences (CYP2D6 EM vs PM) only as a context for tolterodine simulation and notes that fesoterodine avoids this pathway, but it does not report a pharmacogenomic effect on a PK/PD parameter for fesoterodine itself. |
| popPK | Righi_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacological and antibacterial properties of Thymus algeriensis in mice and is unrelated to the pharmacokinetics of fesoterodine. |
| PGx | Saiz-Rodríguez_2020 | not_relevant | 3 | 0 | The study includes fesoterodine, but the results state that CYP3A polymorphisms were not significantly associated with PK differences, and no specific quantitative data or fitted effect sizes for fesoterodine are reported in the provided text. |
| PGx | Shin_2012 | not_relevant | 5 | 0 | Although CYP2D6 genotyping was performed, the results section reports no pharmacokinetic data or differences based on genotype. |
| popPK | Sobeh_2017 | irrelevant | 0 | 0 | The paper investigates the hepatoprotective and hypoglycemic effects of a plant extract (Ximenia americana) in rats and does not involve fesoterodine. |
| popPK | Sobeh_2018 | irrelevant | 0 | 0 | The study investigates the antioxidant and hepatoprotective effects of a Cassia abbreviata extract in C. elegans and rats, with no mention of fesoterodine. |
| popPK | Syed_2022 | irrelevant | 0 | 0 | The study is an in vitro pharmaceutical formulation and release kinetics study that does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for fesoterodine. |
| popPK | Tsakem_2023 | irrelevant | 0 | 0 | The paper reports on flavonoid glycosides from a plant species and their antioxidant activity, with no data or mention of fesoterodine pharmacokinetics. |
| PGx | Wu_2026 | not_relevant | 2 | 2 | The study evaluates CYP2D6 status against clinical efficacy and adverse events, but does not report changes in pharmacokinetic parameters (e.g., AUC, Cmax) or specific pharmacodynamic markers driven by genotype. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bfesoterodine%5D&body=Drug%3A%20fesoterodine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_fesoterodine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 09:28 UTC</sub>
