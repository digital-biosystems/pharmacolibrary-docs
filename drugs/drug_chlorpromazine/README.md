<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05A&quot;,&quot;href&quot;:&quot;atc/N05A.md&quot;},{&quot;label&quot;:&quot;chlorpromazine&quot;}]"></div>

# chlorpromazine

- **generic name:** chlorpromazine
- **ATC codes:** `N05AA01`
- **DrugBank:** [DB00477](https://go.drugbank.com/drugs/DB00477) · **PubChem:** [CID 2726](https://pubchem.ncbi.nlm.nih.gov/compound/2726)
- **molar mass:** 318.864 g/mol (C17H19ClN2S) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Chlorpromazine belongs to the phenothiazine group of typical antipsychotics. It is prescribed for schizophrenia, severe hiccups, vomiting, and anxiety. The medication is usually taken by mouth as a tablet. Injections into a muscle or vein offer alternative routes for delivery. This generic drug is widely available as a WHO essential medicine.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q407972](https://www.wikidata.org/wiki/Q407972), [Wikipedia](https://en.wikipedia.org/wiki/Chlorpromazine?oldid=1368875372) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| chlorpromazine | parent | 318.864 | C17H19ClN2S | DrugBank | [2726](https://pubchem.ncbi.nlm.nih.gov/compound/2726) | Nawaz_1981, Nielsen_1983 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="goat" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (goat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">goat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Nawaz_1981_reference](drugs/drug_chlorpromazine/Chlorpromazine_Nawaz1981_reference.md) | — | 1-compartment (no model) | 2 | Nawaz M, Pharmacokinetics and dosage of chlorpro…, Journal of veterinary pharm… (1981) | [10.1111/j.1365-2885.1981.tb00725.x](https://doi.org/10.1111/j.1365-2885.1981.tb00725.x) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Nielsen_1983_reference](drugs/drug_chlorpromazine/Chlorpromazine_Nielsen1983_reference.md) | — | 1-compartment (no model) | 2 | Nielsen HC et al., Chlorpromazine excretion by the neonate…, Pediatric pharmacology (New… (1983) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Korth_2001_PrP_Sc](drugs/drug_chlorpromazine/pd_Korth_2001_PrP_Sc.md) | PrP(Sc) formation ← chlorpromazine · inhibition effect | — | Korth C et al., Acridine and phenothiazine derivatives…, Proceedings of the National… (2001) | [10.1073/pnas.161274798](https://doi.org/10.1073/pnas.161274798) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Purohit_2023_metric_tensor_g](drugs/drug_chlorpromazine/pd_Purohit_2023_metric_tensor_g.md) | metric tensor component of perceived visual space (spatial distortion threshold-derived) ← chlorpromazine · direct sigmoid Emax (Hill) effect | — | Purohit P et al., Empirically validated theoretical analy…, Frontiers in computational… (2023) | [10.3389/fncom.2023.1136985](https://doi.org/10.3389/fncom.2023.1136985) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:31 | 0:03 | 2/0/0 | 2/0/0 | 0/0/0 | 3,991/175 | einfracz / qwen3.8-27b | 5 | 3/2 | 5/0 | 0 |

## Coverage

- **PubMed hits:** 81 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chetty_1994 | relevant | 10 | 2 | The paper is a population PK study of chlorpromazine in humans, but the specific numeric parameter values (clearance, weight coefficients, etc.) are not listed in the provided abstract evidence. |
| PGx | Chetty_1994 | not_relevant | 0 | 5 | The paper reports non-genetic covariates (body weight, smoking) affecting chlorpromazine clearance, but does not investigate or report the effect of any gene variant, genotype, or phenotype. |
| popPK | Chetty_2001 | irrelevant | 1 | 0 | The paper is a case report on a drug-drug interaction without providing quantitative PK parameter values (CL, V, etc.) for chlorpromazine. |
| PGx | Chetty_2001 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (oral contraceptives), not a pharmacogenomic effect. |
| popPK | Conus_2015 | irrelevant | 0 | 0 | This is a clinical efficacy/safety trial with no pharmacokinetic parameters reported for chlorpromazine. |
| popPK | Galbiati_2017 | irrelevant | 0 | 0 | This is an in-vitro skin sensitization study where chlorpromazine is used as a reference chemical, not a pharmacokinetic study. |
| PGx | Galbiati_2017 | not_relevant | 0 | 0 | The paper focuses on in vitro skin sensitization assays and does not report any pharmacogenomic effects on the PK or PD parameters of chlorpromazine. |
| popPK | Haider_2023 | irrelevant | 0 | 0 | Chlorpromazine appears only as an equivalent-dose unit for antipsychotic prescribing outcomes; no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Hatanaka_1988 | irrelevant | 0 | 0 | The provided text consists solely of metadata and header information from a document processing tool (GROBID) with no scientific content, drug data, or pharmacokinetic parameters. |
| PGx | Hatanaka_1988 | not_relevant | 0 | 0 | The text contains no scientific content regarding pharmacogenomics, chlorpromazine, or PK/PD parameters. |
| popPK | Korth_2001 | irrelevant | 0 | 0 | The paper reports in-vitro efficacy (EC50) for prion inhibition, not pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Korth_2001 | not_relevant | 0 | 0 | The paper reports in vitro antiprion potency (EC50) of chlorpromazine and analogs, but does not investigate any gene variants or genotypes affecting PK or PD parameters in humans or animals. |
| popPK | Lee_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of chlorpromazine's effect on sodium channels in HEK293 cells and does not report pharmacokinetic parameters. |
| PGx | Lee_2017 | not_relevant | 0 | 0 | The paper investigates the pharmacological mechanism of chlorpromazine on sodium channels but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Mori_2026 | irrelevant | 0 | 0 | Chlorpromazine appears only as a chlorpromazine-equivalent dose metric in an outcomes study; no PK parameters are reported. |
| PGx | Nawaz_1981 | not_relevant | 0 | 0 | The study reports pharmacokinetics in goats but does not investigate gene variants or pharmacogenomic effects. |
| PGx | Nielsen_1983 | not_relevant | 0 | 0 | The paper describes chlorpromazine pharmacokinetics in a neonate due to physiological immaturity and in utero exposure, not due to a specific gene variant or genotype. |
| popPK | Purohit_2023 | irrelevant | 1 | 1 | This is a computational model of visual-spatial perception; chlorpromazine is only a hypoactivation-inducing agent, with no PK disposition parameters (CL, V, half-life) reported for it. |
| popPK | Santone_1989 | irrelevant | 0 | 0 | The study is an in-vitro toxicity study on rat hepatocytes reporting EC50 values for toxicity (LDH release/GSH depletion) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for chlorpromazine. |
| PGx | Santone_1989 | not_relevant | 0 | 0 | The paper studies chemical toxicity in rat hepatocytes and does not report pharmacogenomic effects of genetic variants on chlorpromazine PK or PD parameters. |
| popPK | Sato_1995 | irrelevant | 0 | 0 | The evidence provided contains only software metadata and headers, with no scientific text or pharmacokinetic data. |
| PGx | Sato_1995 | not_relevant | 0 | 0 | The provided text contains no information regarding chlorpromazine or pharmacogenomic effects on PK/PD parameters. |
| popPK | Sato_1995_2 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding chlorpromazine or pharmacokinetics. |
| PGx | Sato_1995_2 | not_relevant | 0 | 0 | The provided text is metadata for a document processing tool (GROBID) and does not contain any pharmacogenomic or pharmacokinetic data regarding chlorpromazine. |
| popPK | Schoedel_2018 | irrelevant | 0 | 0 | The study investigates the abuse potential of brivaracetam, with chlorpromazine appearing only as a component of a subjective effect scale name (PCAG), not as a pharmacokinetic subject. |
| PGx | Schoedel_2018 | not_relevant | 0 | 0 | The paper reports on the abuse potential of brivaracetam in healthy users and does not investigate any gene variants or pharmacogenomic effects on the PK or PD of chlorpromazine. |
| popPK | Thomas_2003 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel blockade, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Thomas_2003 | not_relevant | 0 | 0 | The paper investigates the biophysical mechanism of chlorpromazine blocking HERG channels in oocytes and does not report any gene variant or genotype affecting PK/PD parameters. |
| popPK | Yahata_2020 | irrelevant | 0 | 0 | Chlorpromazine is mentioned only as a compound that caused deviation in a predictive model validation, not as the subject of the study, and no specific PK parameters are reported for it. |
| PGx | Yahata_2020 | not_relevant | 0 | 0 | The paper discusses the applicability of the Øie-Tozer model for predicting distribution volume and mentions chlorpromazine only as an exception in a validation set, with no analysis of genetic variants. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | The study is a mechanistic investigation of muscarinic receptor agonism/antagonism in vitro and in tissue, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Zeng_1997 | not_relevant | 0 | 0 | The paper studies pharmacodynamics at the receptor level (m4 agonism) in cell models and animal tissue without linking genotype to PK or PD parameters of chlorpromazine. |
| popPK | de_2016 | irrelevant | 0 | 0 | The study reports ecotoxicological endpoints (EC50, immobility, fecundity) for Daphnia magna, not pharmacokinetic disposition parameters (CL, V, t1/2) for chlorpromazine. |
| PGx | de_2016 | not_relevant | 0 | 0 | The paper is an ecotoxicology study assessing the effects of chlorpromazine on Daphnia magna, not a pharmacogenomic study on humans. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bchlorpromazine%5D&body=Drug%3A%20chlorpromazine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_chlorpromazine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:30 UTC</sub>
