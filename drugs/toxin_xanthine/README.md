<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Xanthine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Xanthine_Chu2024_reference&quot;,&quot;label&quot;:&quot;Chu_2024_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_xanthine/Xanthine_Chu2024_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# Xanthine

- **generic name:** Xanthine
- **T3DB:** [T3D4409](http://www.t3db.ca/toxins/T3D4409) · **DrugBank:** [DB02134](https://go.drugbank.com/drugs/DB02134) · **PubChem:** [CID 1188](https://pubchem.ncbi.nlm.nih.gov/compound/1188)
- **groups:** investigational

## About

Xanthine is a purine base found in most body tissues and fluids, certain plants, and some urinary calculi. It is an intermediate in the degradation of adenosine monophosphate to uric acid, being formed by oxidation of hypoxanthine. The methylated xanthine compounds caffeine, theobromine, and theophylline and their derivatives are used in medicine for their bronchodilator effects. (Dorland, 28th ed.).

- **Category:** Animal Toxin, Food Toxin, Natural Toxin
- **Route of exposure:** endogenous, Ingestion, Dermal (contact)
- **Sources and uses:** Naturally produced by the body (endogenous).
- **Mechanism of toxicity:** Xanthine is a poorly soluble compound. As a result high concentrations of serum xanthine can lead to the formation of kidney stones (xanthine kidney stones) which can, over the long term, induce kidney failure.
- **Health effects:** Chronically high concentrations of xanthine can lead to health problems such as renal failure and xanthine kidney stones, one of the rarest types of kidney stones. Chronically high levels of xanthine are associated with at least 4 inborn errors of metabolism including: Xanthinuria type I, Xanthuria type II, Molybdenium Cofactor Deficiency, and Xanthinuria.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4409">T3DB T3D4409</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 69-89-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17712">ChEBI 17712</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Allopurinol | metabolite | 136.114 | C5H4N4O | PubChem | [135401907](https://pubchem.ncbi.nlm.nih.gov/compound/135401907) | Chu_2022_2 |
| Oxypurinol | metabolite | 152.113 | C5H4N4O2 | PubChem | [135398752](https://pubchem.ncbi.nlm.nih.gov/compound/135398752) | Chu_2022_2 |

## Start here

> **Chu_2024_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> review reference. [Run it in the simulator](drugs/toxin_xanthine/Xanthine_Chu2024_reference.md?tab=Simulation) · [record](drugs/toxin_xanthine/Xanthine_Chu2024_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Chu_2024_reference](drugs/toxin_xanthine/Xanthine_Chu2024_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Chu WY et al., Population Pharmacokinetics and Target…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01401-3](https://doi.org/10.1007/s40262-024-01401-3) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Chu_2022_reference](drugs/toxin_xanthine/Xanthine_Chu2022_reference.md) | — | 2-compartment (no model) | 3 | Chu WY et al., Semi-mechanistic Modeling of Hypoxanthi…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01164-9](https://doi.org/10.1007/s40262-022-01164-9) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Chu_2022_2_reference](drugs/toxin_xanthine/Xanthine_Chu2022v2_reference.md) | — | general linear (no model) | 0 | Chu WY et al., Pharmacokinetic/Pharmacodynamic Modelli…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01068-0](https://doi.org/10.1007/s40262-021-01068-0) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=xanthine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADORA2B (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-11 06:14 | 59:35 | 1/2/0 | 0/0/0 | 0/0/0 | 999,360/50,804 | einfracz / qwen3.8-27b | 47 | 5/37 | 47/0 | 0 |

## Coverage

- **PubMed hits:** 757 matched, 194 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abhishek_2018 | not_relevant | 0 | 0 | The paper reviews pharmacology and clinical efficacy of new urate-lowering drugs (lesinurad, arhalofenate) but does not report specific pharmacogenomic studies linking gene variants to PK/PD parameters for xanthine or these drugs. |
| popPK | Agostini_1990 | irrelevant | 0 | 0 | The paper reports physico-chemical properties of isbufylline, a xanthine derivative, and does not provide any toxicokinetic parameters (half-life, clearance, partition coefficients in biological systems, etc.) for xanthine or isbufylline in biological systems. |
| popPK | Ahmed_2023 | irrelevant | 0 | 0 | The paper is a bioinformatics study on phytochemicals targeting LDHA, and xanthine is mentioned only as a potential off-target enzyme name (Xanthine dehydrogenase) without any kinetic parameters. |
| popPK | Aksenov_2018 | irrelevant | 1 | 2 | The paper models the toxicokinetics of uric acid (the metabolite) and the pharmacokinetics of xanthine oxidase inhibitors (allopurinol, febuxostat, lesinurad), but does not report kinetic parameters for xanthine itself as the subject substance. |
| popPK | Al-Khalidi_1965 | irrelevant | 0 | 0 | The paper studies the distribution of the enzyme xanthine oxidase, not the toxicokinetic parameters (disposition, half-life, clearance) of the substrate xanthine. |
| popPK | Altunayar-Unsalan_2024 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics and enzyme inhibition of blumeatin, with xanthine appearing only as a substrate for xanthine oxidase in the context of disease description, not as the subject substance. |
| PGx | Atwal_2016 | not_relevant | 0 | 0 | The paper describes Molybdenum cofactor deficiency and its treatment, focusing on neurological outcomes, rather than the pharmacokinetics or pharmacodynamics of xanthine as a drug. |
| PGx | Bach_2014 | not_relevant | 1 | 1 | The paper is a review of uricosuric drugs and xanthine oxidase inhibitors, discussing transporter biology (URAT1, ABCG2) without reporting any pharmacogenomic effects on PK or PD parameters. |
| popPK | Balázs_2023 | irrelevant | 0 | 0 | The paper investigates mycotoxins as inhibitors of xanthine oxidase, where xanthine serves only as the substrate for the enzyme assay, not as the subject substance for toxicokinetic parameter extraction. |
| popPK | Beedham_1987 | irrelevant | 0 | 0 | The paper reports tissue distribution and activity levels of the enzyme xanthine oxidase, not the toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) of the substance xanthine itself. |
| popPK | Berry_2004 | irrelevant | 0 | 0 | The paper is a review of xanthine oxidoreductase (an enzyme) in cardiovascular disease, not the toxicokinetics of the substance xanthine, and contains no kinetic parameters for xanthine disposition. |
| PGx | Bertilsson_1994 | not_relevant | 0 | 0 | The study investigates the pharmacogenomics of clozapine metabolism, not xanthine. |
| popPK | Bilbao_2006 | irrelevant | 0 | 0 | The paper focuses on the cloning and expression patterns of peroxisomal enzymes (including xanthine oxidoreductase) in mussels and mullets, reporting no quantitative toxicokinetic parameters for the substance xanthine. |
| popPK | Bonini_2004 | irrelevant | 0 | 0 | The paper investigates the enzymatic mechanism of radical production by xanthine oxidase, not the toxicokinetics or disposition of xanthine as a substance. |
| popPK | Bounds_1991 | irrelevant | 1 | 1 | The paper investigates the inhibition of the enzyme xanthine oxidase by aldehydes, not the toxicokinetics (disposition, half-life, clearance) of the substance xanthine itself. |
| PGx | Brackman_2019 | not_relevant | 4 | 3 | The paper reports pharmacogenomic associations with allopurinol response (uric acid lowering) rather than a pharmacokinetic or pharmacodynamic parameter of xanthine itself. |
| popPK | Buiu_2014 | irrelevant | 0 | 0 | The paper focuses on sitagliptin, a xanthine derivative, using QSAR and clinical efficacy data, and provides no toxicokinetic parameters for xanthine itself. |
| popPK | Byeon_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the adenosine antagonist ZM241385, not for xanthine. |
| popPK | Calzi_1995 | irrelevant | 0 | 0 | The paper characterizes bovine aldehyde oxidase protein and cDNA, with no quantitative toxicokinetic parameters for xanthine. |
| popPK | Cancio_1999 | irrelevant | 0 | 0 | The paper measures the activity of the enzyme xanthine oxidoreductase (XOR) in mussels, not the toxicokinetic parameters (half-life, clearance, etc.) of xanthine as a substance. |
| popPK | Carro_2009 | irrelevant | 0 | 0 | The paper measures xanthine oxidoreductase enzyme activity in broilers, not the toxicokinetic parameters (half-life, clearance, etc.) of xanthine itself. |
| PGx | Cho_2025 | not_relevant | 0 | 0 | The paper reports on the genetics of a metabolic disorder (molybdenum cofactor deficiency causing xanthine accumulation) and does not study the pharmacokinetics or pharmacodynamics of a specific drug named xanthine. |
| PGx | Chocair_1992 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on azathioprine/6-mercaptopurine metabolism, not xanthine. |
| popPK | Chu_2024 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for allopurinol and oxypurinol, not xanthine, which is mentioned only as the enzyme substrate/inhibitor target. |
| PGx | Cicero_2021 | not_relevant | 3 | 2 | The paper reviews therapeutic strategies for hyperuricemia and mentions pharmacogenetics in the context of allopurinol safety (HLA-B*5801) and general SUA levels, but does not report specific quantitative changes in PK or PD parameters of xanthine or its inhibitors caused by gene variants. |
| popPK | Clark_1984 | irrelevant | 0 | 0 | The paper describes the genetic organization and gene expression of the xanthine dehydrogenase enzyme in Drosophila melanogaster, not the toxicokinetic disposition of the substance xanthine. |
| popPK | Coetzee_1994 | irrelevant | 0 | 0 | The paper studies the effects of oxidant stress (generated by xanthine oxidase and hypoxanthine) on ion channels in cardiac myocytes, and does not report toxicokinetic parameters for xanthine itself. |
| popPK | Conger_1990 | irrelevant | 0 | 0 | no_text gate: only 86 chars of text extracted (&lt; 400) |
| PGx | Crenshaw_2026 | not_relevant | 0 | 0 | The paper reports a metabolic defect affecting xanthine production, not the pharmacokinetics or pharmacodynamics of xanthine as a drug. |
| PGx | Daly_1993 | not_relevant | 5 | 0 | The text is a general review mentioning xanthine oxidase as a potential polymorphic enzyme but provides no specific pharmacogenomic data or PK/PD changes for xanthine. |
| PGx | Deswal_2017 | not_relevant | 2 | 0 | The paper discusses allopurinol's pharmacodynamic interaction with thiopurines but does not report pharmacogenomic effects (gene variants) on xanthine or thiopurine PK/PD parameters. |
| PGx | Diaz-Torné_2015 | not_relevant | 0 | 0 | The paper is a review of new medications for hyperuricemia and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of xanthine or related drugs. |
| PGx | Dosunmu-Ogunbi_2019 | not_relevant | 0 | 0 | The paper reviews SOD2 variants in sickle cell disease and mentions xanthine oxidase only as a source of reactive oxygen species, not as a drug subject to pharmacogenomic analysis. |
| popPK | Doubrovin_2003 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the tracer [14C]-xanthine in an imaging context, but xanthine is used as a reporter substrate, not the subject toxicokinetic substance of interest in a toxicological sense, and the parameters (Ki for an exogenous enzyme, partition coefficient of a radiotracer) do not represent xanthine's own physiological disposition. |
| popPK | Duarte-Araújo_2009 | irrelevant | 0 | 0 | The paper investigates ATP metabolism in rat ileum and uses xanthine derivatives only as pharmacological tools (antagonists) to modulate receptor activity, without reporting kinetic parameters for xanthine itself. |
| popPK | Duley_1985 | irrelevant | 0 | 0 | The paper focuses on the identification and tissue distribution of xanthine oxidase isozymes, not the toxicokinetic parameters of xanthine itself. |
| PGx | Duley_2005 | not_relevant | 0 | 0 | The paper reviews pharmacogenomics of thiopurines, not xanthine; xanthine oxidase is only mentioned as a minor interaction. |
| PGx | Eidelman_1992 | not_relevant | 0 | 0 | The paper describes the pharmacological mechanism of adenosine-receptor antagonists in cystic fibrosis cells, not the impact of a gene variant on the pharmacokinetics or pharmacodynamics of xanthine itself. |
| popPK | Er-Rajy_2025 | irrelevant | 0 | 0 | The paper is a computational study on xanthine oxidase inhibitors (triazole derivatives) and does not report kinetic parameters for the substance xanthine itself. |
| PGx | Fang_2024 | not_relevant | 0 | 0 | The study reports the pharmacological effect of mulberry extract on uric acid levels and enzyme activity in mice, but it does not investigate how specific gene variants or genotypes alter these pharmacodynamic or pharmacokinetic parameters. |
| popPK | Garattini_2008 | irrelevant | 0 | 0 | The paper is a review of aldehyde oxidase genetics and evolution, mentioning xanthine only as part of the enzyme family name, with no kinetic parameters for xanthine itself. |
| popPK | Giuliani_2012 | irrelevant | 0 | 0 | The study focuses on the toxicokinetics of guanosine, with xanthine only measured as a downstream metabolite without specific kinetic parameters reported for xanthine itself. |
| PGx | Graham_2018 | not_relevant | 4 | 3 | The paper reports an association between the ABCG2 variant and a decreased clinical response (serum urate reduction) to allopurinol, but it does not provide quantitative pharmacokinetic or pharmacodynamic parameter effect sizes. |
| PGx | Gu_1992 | not_relevant | 1 | 2 | The paper studies enzyme kinetics in a heterologous expression system (HepG2 cells with cDNA) and reports metabolic ratios, but does not report pharmacogenomic effects (genotype-based differences) on in vivo PK/PD parameters in humans. |
| popPK | Guerciolini_1991 | irrelevant | 1 | 5 | The paper reports in vitro enzyme activity (U/g tissue) and variation in human liver xanthine oxidase, but does not provide in vivo kinetic parameters (half-life, clearance, Vd, rate constants) for the substance xanthine. |
| PGx | Guo_2021 | not_relevant | 0 | 0 | The paper studies the effect of a dietary fiber (inulin) on uric acid levels in gene-knockout mice, not the effect of a specific gene variant on the pharmacokinetics or pharmacodynamics of a drug (xanthine). |
| PGx | Guo_2023 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamic effects of a drug (alpha-viniferin) on uric acid levels and does not report how a human genetic variant affects the PK or PD of xanthine or its metabolites. |
| PGx | Guo_2024 | not_relevant | 0 | 0 | The paper describes the effect of a natural polysaccharide (AT-W) on hyperuricemia parameters (serum uric acid, enzyme activity, transporter expression) but does not report any pharmacogenomic effects (gene variants changing PK/PD of a drug) for xanthine or any other agent. |
| PGx | Guo_2025 | not_relevant | 1 | 1 | The paper investigates the mechanisms of drug-induced ototoxicity and nephrotoicity and the role of uric acid (the substrate of xanthine oxidase), but it does not report pharmacokinetic or pharmacodynamic parameters for the drug xanthine itself, nor does it describe how genetic variants of xanthine metabolism genes alter the PK/PD of xanthine. |
| popPK | Haghgoo_1995 | irrelevant | 2 | 0 | The paper focuses on xanthine derivatives (theophylline, enprofylline, MPX, oxpentifylline) and xanthine is not the subject substance for kinetic parameter extraction, and no numeric kinetic values are provided for xanthine. |
| PGx | Hamelin_1994 | not_relevant | 2 | 5 | The study investigates enzyme activity (xanthine oxidase) as a phenotype associated with Cystic Fibrosis (a disease state), not a specific genetic variant or polymorphism of the drug-metabolizing enzyme itself. |
| popPK | Harrison_2002 | irrelevant | 0 | 0 | The paper is a review of the enzyme xanthine oxidoreductase, not a study reporting kinetic parameters for the substrate xanthine. |
| popPK | Hill-McManus_2018 | irrelevant | 0 | 0 | The paper models the pharmacokinetics of urate-lowering drugs (febuxostat, lesinurad) and uric acid, using xanthine only as part of the drug name 'xanthine oxidase inhibitor', not as the subject substance for kinetic parameter extraction. |
| popPK | Huh_1976 | irrelevant | 0 | 0 | The paper measures enzyme activity (xanthine oxidase) with xanthine as a substrate, not the pharmacokinetic parameters (half-life, clearance, partition coefficients) of xanthine itself. |
| popPK | Jha_2023 | irrelevant | 0 | 0 | The paper investigates the binding modes and molecular dynamics of xanthine derivatives as enzyme inhibitors, containing no toxicokinetic parameters such as half-life, clearance, or distribution. |
| popPK | Jha_2023_2 | irrelevant | 0 | 0 | The paper discusses xanthine derivatives as enzyme inhibitors for cancer drug discovery and does not report toxicokinetic parameters (half-life, clearance, etc.) for xanthine itself. |
| popPK | Jha_2024 | irrelevant | 0 | 0 | The paper discusses xanthine-based derivatives as enzyme inhibitors for MTHFD2 but contains no toxicokinetic parameters (e.g., half-life, clearance, ADME data) for xanthine itself. |
| PGx | Jiang_2022 | not_relevant | 0 | 0 | The paper investigates the effect of exercise serum on uric acid transporters, not the effect of a gene variant on the pharmacokinetics or pharmacodynamics of a drug. |
| PGx | Kalow_1991 | not_relevant | 1 | 1 | The study examines inter-individual variability in enzyme activity indices using caffeine as a probe but does not identify specific gene variants or genotypes as the cause of the differences. |
| PGx | Kasten_2024 | not_relevant | 5 | 6 | This is a review article discussing ABCG2 polymorphisms and allopurinol (not xanthine itself as the drug), and does not report a specific fitted pharmacogenomic effect size on PK/PD parameters. |
| popPK | Katsikogianni_2006 | irrelevant | 0 | 0 | The paper is a pharmaceutical formulation study on nanoparticle drug loading and release in vitro, not a toxicokinetic study reporting kinetic parameters for xanthine itself (which is not even one of the tested model drugs). |
| popPK | Kooij_1994 | irrelevant | 0 | 0 | The paper is a review of the enzyme xanthine oxidoreductase and its physiological roles, not a study reporting quantitative toxicokinetic parameters for xanthine as a subject substance. |
| popPK | Kupsáková_2004 | irrelevant | 0 | 0 | The paper is a QSAR study on the reversal of multidrug resistance in cells, reporting IC50 values for methylxanthines, not toxicokinetic parameters for xanthine itself. |
| popPK | Kurata_2020 | irrelevant | 1 | 1 | The study reports pharmacokinetic parameters for theophylline, a xanthine derivative, not for xanthine itself. |
| popPK | Larrouy_1991 | irrelevant | 0 | 0 | The paper reports radioligand binding constants (Kd, Bmax) for a xanthine analog used as a receptor ligand, not toxicokinetic parameters (half-life, clearance, etc.) for xanthine as a substance. |
| popPK | Leander_2021 | irrelevant | 0 | 0 | The paper models uric acid kinetics and the pharmacokinetics of verinurad, febuxostat, and allopurinol, but xanthine is only mentioned as a substrate of xanthine oxidase and no kinetic parameters for xanthine itself are reported. |
| PGx | Lee_2021 | not_relevant | 0 | 0 | The paper describes a rare metabolic disorder (molybdenum cofactor deficiency) affecting xanthine metabolism, not a pharmacogenomic effect of a drug on its PK/PD parameters. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper focuses on isolating xanthine oxidase inhibitors and does not report toxicokinetic parameters for xanthine itself. |
| popPK | Li_2019 | irrelevant | 0 | 0 | The study focuses on urate homeostasis and the effects of glucocorticoids, with xanthine oxidoreductase mentioned only as an enzyme whose induction is observed, rather than reporting quantitative toxicokinetic parameters for xanthine itself. |
| PGx | Li_2020 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of mangiferin on uric acid transporters but does not report any pharmacogenomic effects (gene variant/genotype) on the PK or PD of xanthine. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The paper investigates the antihyperuricemic effects of a green alga polysaccharide in mice, not a pharmacogenomic effect of xanthine. |
| PGx | Li_2025 | not_relevant | 0 | 0 | The paper investigates the effects of a traditional Chinese medicine on uric acid levels and transporter expression in animal/cell models, but does not report pharmacogenomic effects of gene variants on the pharmacokinetics or pharmacodynamics of xanthine. |
| PGx | Li_2026 | not_relevant | 2 | 2 | The paper discusses SLC22A12 variants in the context of disease pathophysiology (hyperuricemia/gout susceptibility) rather than demonstrating that these genotypes modulate the PK/PD of a specific pharmacological agent (xanthine or uricosurics). |
| popPK | Linden_1993 | irrelevant | 0 | 0 | The paper reports binding affinity (Ki) for xanthine derivatives as antagonists of the A3 adenosine receptor, which are pharmacodynamic binding parameters, not toxicokinetic disposition parameters. |
| popPK | Linden_1994 | irrelevant | 0 | 0 | The paper is a pharmacological review of adenosine A3 receptors where xanthines are mentioned only as pharmacological antagonists, not as the subject of toxicokinetic study. |
| PGx | Lu_2024 | not_relevant | 0 | 0 | The study investigates the mechanism of action of a herbal formula in mice, not the impact of genetic variants on the pharmacokinetics or pharmacodynamics of xanthine. |
| popPK | Luo_2020 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the xanthine oxidoreductase inhibitor topiroxostat, not for xanthine itself. |
| PGx | Masimirembwa_1995 | not_relevant | 1 | 8 | The paper reports lower CYP1A2 activity (via caffeine clearance) in Shona children compared to other groups, but attributes this to environmental factors (parasites, nutrition) rather than specific genetic variants or genotypes. |
| PGx | Massey_2024 | not_relevant | 2 | 3 | The paper focuses on NUDT15 loss (somatic germline-like mechanism) affecting thiopurine sensitivity, not on xanthine pharmacokinetics/pharmacodynamics altered by genetic variants; xanthine oxidase inhibitors are only mentioned as co-drugs to modulate thiopurine metabolism. |
| popPK | Miyamoto_1989 | irrelevant | 0 | 0 | The paper reports pharmacological activity (PDE inhibition, muscle relaxation) and physicochemical properties (partition coefficient) of xanthine derivatives, but contains no toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Miyamoto_1995 | irrelevant | 0 | 0 | The provided evidence consists only of software metadata (GROBID) and contains no scientific text, kinetic data, or mention of xanthine. |
| popPK | Mohamedali_1993 | irrelevant | 0 | 0 | The paper measures tissue distribution of purine catabolic enzymes (including xanthine dehydrogenase) in mice, not the toxicokinetic parameters (half-life, clearance, etc.) of xanthine itself. |
| PGx | Morimoto_2020 | not_relevant | 0 | 0 | The paper studies uric acid metabolism and ABCG2 expression in a rat model of hyperuricemia, not the pharmacogenomics of a specific drug like xanthine. |
| popPK | Moriwaki_1999 | irrelevant | 0 | 0 | The paper is a review of the histochemical localization and functions of purine metabolism enzymes, containing no quantitative toxicokinetic parameters for xanthine as a subject substance. |
| popPK | Nagao_2018 | irrelevant | 1 | 0 | The paper focuses on the secretion of hypoxanthine from adipose tissue, mentioning xanthine only as a lower-level comparator with no quantitative kinetic parameters (half-life, rate constants, clearance, etc.) provided for xanthine itself. |
| popPK | Narayanaswamy_2016 | irrelevant | 0 | 0 | The paper reports molecular docking of plant constituents to Xanthine Oxidase (an enzyme), not toxicokinetic parameters for the substance xanthine. |
| PGx | Nigam_2025 | not_relevant | 0 | 0 | The paper is a review on ROS and cancer signaling, mentioning xanthine oxidase as an enzyme source but containing no pharmacogenomic data for xanthine. |
| popPK | Ogungbenro_2014 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of 6-mercaptopurine and methotrexate, mentioning xanthine oxidase only as the enzyme responsible for metabolizing 6-mercaptopurine, not reporting kinetic parameters for xanthine itself. |
| PGx | Ota-Kontani_2020 | not_relevant | 0 | 0 | The study examines the mechanism of action of glucosyl hesperidin in mice and does not involve human gene variants, genotypes, or pharmacogenomic analysis. |
| popPK | Palacios_1995 | irrelevant | 0 | 0 | The paper is a review of phosphodiesterase inhibitors and mentions xanthine only as a structural nucleus for drug design, reporting no quantitative toxicokinetic parameters for xanthine itself. |
| popPK | Pandey_2003 | irrelevant | 0 | 0 | The paper investigates xanthine oxidase as a biomarker enzyme in fish exposed to pollution, but does not report any toxicokinetic parameters (half-life, clearance, etc.) for the substance xanthine itself. |
| PGx | Pascart_2019 | not_relevant | 0 | 0 | The text is a general clinical review of gout management and epidemiology that does not discuss specific gene variants, genotypes, or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of xanthine. |
| popPK | Paul_2011 | relevant | 3 | 2 | The paper reports compartmental model parameters (V_T, K1/k2, BP_ND) for a xanthine derivative (11C-MPDX) used as a PET tracer in rats, which counts as kinetic data for xanthine, but the specific numeric values are located in Table 3 which is referenced but not provided in the evidence. |
| popPK | Paul_2014 | irrelevant | 1 | 9 | The paper measures the pharmacokinetics of a radiolabeled A1 receptor tracer (MPDX), a derivative of xanthine, rather than the pharmacokinetic parameters of xanthine itself. |
| PGx | Pelin_2016 | not_relevant | 2 | 1 | The paper reviews thiopurines, not xanthine, and mentions xanthine oxidase only as a catabolic enzyme for thiopurines rather than focusing on xanthine pharmacogenomics. |
| PGx | Qian_2019 | not_relevant | 0 | 0 | The study investigates the pharmacological effects of anthocyanins on uric acid metabolism and does not involve any genetic variants or genotypes. |
| PGx | Qin_2021 | not_relevant | 0 | 0 | The study evaluates the pharmacodynamic effects of a herbal formula in an animal model without investigating the influence of specific genetic variants or genotypes on drug response. |
| popPK | Quispe-Díaz_2024 | irrelevant | 0 | 0 | The paper focuses on the composition and biological effects of blueberries, mentioning xanthine oxidase only as a protein target for molecular docking, not reporting toxicokinetic parameters for xanthine itself. |
| popPK | Rać_2003 | irrelevant | 0 | 0 | The paper studies fluoride bioaccumulation and its effects on snail energy metabolism, where xanthine is measured only as a metabolic biomarker (purine derivative) rather than as the subject substance for toxicokinetic characterization. |
| popPK | Rekić_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for febuxostat (a xanthine oxidase inhibitor), not for xanthine itself. |
| PGx | Relling_1992 | not_relevant | 0 | 0 | The paper reports on caffeine metabolism and xanthine oxidase activity, but does not report a pharmacogenomic effect on the PK/PD parameters of the drug xanthine. |
| PGx | Rendina_2024 | not_relevant | 0 | 0 | The paper reports on microbiome-host homology for drug metabolism (including xanthine oxidase), but does not report on human pharmacogenomic variants affecting PK or PD parameters. |
| popPK | Rendina_2025 | irrelevant | 0 | 0 | The paper is a bioinformatic study on gut microbiome homology to human drug-metabolizing enzymes; it does not report any quantitative toxicokinetic parameters for xanthine. |
| popPK | Rout_1985 | irrelevant | 0 | 0 | The paper reports electrophoretic phenotypes and pI values for aldehyde dehydrogenases and xanthine oxidase isozymes in mice, containing no quantitative toxicokinetic parameters (half-life, clearance, etc.) for the substance xanthine. |
| PGx | Roy_1995 | not_relevant | 2 | 5 | The paper discusses the metabolism of O6-benzylguanine (not xanthine) and mentions xanthine oxidase only as a minor inhibitor of the reaction, without reporting a pharmacogenomic effect on xanthine's PK/PD. |
| popPK | Salvatore_1993 | irrelevant | 0 | 0 | The paper focuses on the molecular cloning and characterization of the A3 adenosine receptor, and xanthine is mentioned only as a structural class of antagonists or a specific compound in binding assays, not as a subject substance with toxicokinetic parameters. |
| PGx | Schwab_2001 | not_relevant | 2 | 1 | The text mentions xanthine oxidase as an enzyme metabolizing mercaptopurine/azathioprine, but does not report a pharmacogenomic variant of xanthine oxidase or a specific drug named "xanthine" with a changed PK/PD parameter. |
| PGx | Shen_2019 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between lesinurad and warfarin, not a pharmacogenomic effect on xanthine. |
| popPK | Shimo_2009 | relevant | 4 | 2 | The paper discusses the toxicokinetics and species differences in xanthine deposition and solubility (30-fold purine metabolites, 6-fold solubility difference) but lacks explicit quantitative pharmacokinetic parameters like half-life or clearance. |
| popPK | Shuff_1992 | irrelevant | 0 | 0 | The paper investigates copper complex transport and uses xanthine only as a reagent in an enzymatic assay system (xanthine oxidase), reporting no kinetic parameters for xanthine itself. |
| popPK | Simmonds_1985 | irrelevant | 0 | 0 | The paper investigates metabolic pathways of deoxyadenosine in macrophages and xanthine oxidase activity, but does not report quantitative toxicokinetic parameters (half-life, clearance, etc.) for xanthine itself. |
| popPK | Spradling_1983 | irrelevant | 0 | 0 | The paper focuses on the genetic regulation and expression of the xanthine dehydrogenase gene in Drosophila, not the toxicokinetic parameters of xanthine as a substance. |
| popPK | Subash_2021 | irrelevant | 0 | 0 | The paper focuses on vanillin as a probe drug for aldehyde oxidase, and xanthine is only mentioned as a substrate for xanthine oxidase or as an inhibitor (allopurinol) context, with no kinetic parameters reported for xanthine itself. |
| PGx | Sung_2021 | not_relevant | 0 | 0 | The study investigates the pharmacological mechanism of an eggshell membrane supplement, not a pharmacogenomic effect of a gene variant on a drug's PK/PD. |
| PGx | Swann_2023 | not_relevant | 0 | 0 | The paper describes metabolomic differences in ADHD but does not investigate gene variants affecting the PK/PD of xanthine. |
| PGx | Tanaka_1983 | not_relevant | 0 | 0 | The paper focuses on macrophage-mediated killing of Trypanosoma cruzi and does not report pharmacogenomic effects on the PK or PD of xanthine. |
| PGx | Tejera-Pérez_2025 | not_relevant | 1 | 0 | The paper investigates genetic variants affecting thiopurine toxicity, not pharmacokinetic or pharmacodynamic parameters of xanthine itself. |
| popPK | Terao_2000 | irrelevant | 0 | 0 | The paper describes the cloning and characterization of aldehyde oxidase homologs in mice, using xanthine oxidoreductase only as a structural reference and hypoxanthine oxidation as a negative assay, without reporting any kinetic parameters for xanthine. |
| popPK | Terao_2006 | irrelevant | 0 | 0 | The paper focuses on the structure and evolution of aldehyde oxidase enzymes in chickens and dogs, with xanthine oxidoreductase mentioned only as a structural relative, not as a subject of toxicokinetic analysis. |
| popPK | Tovchiga_2025 | irrelevant | 0 | 0 | The paper is a review of the relationship between uric acid and Alzheimer's disease, focusing on epidemiological associations and mechanisms, and contains no quantitative toxicokinetic parameters for xanthine. |
| PGx | Tsiokou_2020 | not_relevant | 2 | 10 | The paper reports physiological changes in xanthine oxidase activity due to menopause and aging, not a gene variant/genotype effect on PK/PD parameters. |
| popPK | Via_2015 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of pyrazinamide and pyrazinoic acid, using xanthine oxidase inhibitor (allopurinol) only as a co-exposure to modify exposure, with no kinetic parameters reported for xanthine itself. |
| PGx | Vistisen_1992 | not_relevant | 1 | 0 | The study measures enzyme activity for metabolizing dietary caffeine using caffeine as a probe, which does not constitute a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of a xanthine drug. |
| popPK | Wang_2025 | irrelevant | 0 | 0 | The paper studies the inhibition of xanthine oxidase by phenolic acids, where xanthine serves solely as a substrate/reagent, and reports no kinetic parameters for xanthine itself. |
| popPK | Wen_2023 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for oxypurinol, a metabolite of allopurinol, and not for xanthine, which is only mentioned as an enzyme substrate. |
| popPK | Wu_2018 | irrelevant | 0 | 0 | The paper focuses on isolating isoflavones that inhibit xanthine oxidase (an enzyme), not on the toxicokinetic parameters of xanthine itself. |
| popPK | Wu_2024 | irrelevant | 0 | 0 | The paper describes a QSAR model for predicting the bioactivity of xanthine oxidase inhibitors (drugs) and does not report toxicokinetic parameters for xanthine itself. |
| PGx | Xiao_2023 | not_relevant | 0 | 0 | The paper investigates the mechanism of uric acid excretion by allisartan isoproxil in zebrafish and does not report pharmacogenomic effects on the PK/PD of xanthine. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The paper studies peptides that inhibit xanthine oxidase, using xanthine as a substrate/analytical reagent, but reports no kinetic parameters for the toxicokinetics of xanthine itself. |
| popPK | Yadav_2016 | irrelevant | 0 | 0 | The paper focuses on receptor binding affinity (Ki) and pharmacological activity, not on the toxicokinetic disposition of xanthine itself. |
| popPK | Yan_2023 | irrelevant | 0 | 0 | The paper focuses on 6-mercaptopurine and its metabolite 6-thioxanthine; xanthine is not the subject of toxicokinetic analysis. |
| popPK | Yoshisue_2000 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of potassium oxonate, with xanthine oxidase mentioned only as an enzyme involved in a metabolic pathway, not as the subject substance. |
| popPK | Zairol_2026 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of oxypurinol, a metabolite of allopurinol, not xanthine; xanthine is mentioned only as a substrate for xanthine oxidase inhibition. |
| popPK | Zhang_2000 | irrelevant | 0 | 0 | The paper studies the kinetics of 2-nitroimidazole compounds, and xanthine oxidase is used only as an enzymatic reagent for reduction, not as the subject substance. |
| popPK | Zhang_2019 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for a xanthine oxidase inhibitor (WSJ-557), not xanthine itself. |
| PGx | Zhang_2024 | not_relevant | 0 | 0 | The study investigates the mechanism of action of Portulaca oleracea (a herbal extract) in hyperuricemia mice, not the pharmacogenomic effect of a drug (xanthine) on its PK/PD parameters. |
| PGx | Zhao_2022 | not_relevant | 0 | 0 | The paper discusses probiotics for hyperuricemia and does not report pharmacogenomic effects on the PK or PD of xanthine. |
| PGx | Zhao_2025 | not_relevant | 0 | 0 | The paper reports the pharmacological effects of galangin on uric acid metabolism and xanthine oxidase activity, but it does not investigate any genetic variants or genotypes affecting the PK/PD of the drug (pharmacogenomics). |
| PGx | Zhao_2025_2 | not_relevant | 0 | 0 | The paper investigates the therapeutic effects of curcumin on hyperuricemia and inflammation in a mouse model; it does not report a pharmacogenomic effect (gene variant association) on a pharmacokinetic or pharmacodynamic parameter. |
| PGx | Zhao_2025_3 | not_relevant | 0 | 0 | The study evaluates the therapeutic effects of a natural polysaccharide on hyperuricemia in a rat model and does not investigate the impact of human gene variants on the pharmacokinetics or pharmacodynamics of xanthine or xanthine-related drugs. |
| PGx | Zhao_2025_4 | not_relevant | 0 | 0 | The study investigates the probiotic effects of L. plantarum LBK on hyperuricemia via gut microbiota modulation and does not examine any pharmacogenomic variants or their impact on the PK/PD of xanthine. |
| PGx | Zhou_2024 | not_relevant | 0 | 0 | The paper investigates the anti-hyperuricemic mechanisms of an herbal extract in rats and does not report pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of xanthine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bxanthine%5D&body=Drug%3A%20xanthine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_xanthine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-11 05:56 UTC</sub>
